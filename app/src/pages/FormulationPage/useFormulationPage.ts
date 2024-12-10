import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../core/store/hooks';
import { 
  updateFormulationName,
  clearFormulation,
  submitFormulation,
  deleteFormulation
} from "../../core/store/slices/formulationSlice";
import { api } from '../../core/api';
import { FormulationComponent } from '../../core/api/API';

export const useFormulationPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { formulationId } = useParams<{ formulationId: string }>();
  const { formulationName } = useAppSelector((state) => state.formulation);
  const [ adverseEffectsCount, setAdverseEffectsCount ] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);
  const [chemicalElementsList, setChemicalElementsList] = useState<FormulationComponent[]>([]);

  useEffect(() => {
    if (formulationId) {
      api.cosmeticFormulations.cosmeticFormulationsRead(formulationId) 
        .then((response) => {
          if (response.data) {
            setChemicalElementsList(response.data.components || []);
            setAdverseEffectsCount(response.data.adverse_effects_count || 0)
          }
        })
        .catch(() => {
          console.error('Ошибка при загрузке косметического средства');
        });
    }
  }, [formulationId]);

  const handleChemicalElementDosageChange = (id: number, dosage: number) => {
    // Укажите свой API метод для обновления дозировки
    api.componentInFormulation.componentInFormulationPutUpdate(formulationId!, String(id), { dosage }) 
      .then(() => {
        setChemicalElementsList((prevElements) =>
          prevElements.map((element) =>
            element.chemical_element.pk === id ? { ...element, dosage } : element
          )
        );
      })
      .catch(() => {
        console.error('Ошибка при обновлении дозировки компонента');
      });
  };

  const handleDelete = (id: number) => {
    // Укажите свой API метод для удаления компонента
    api.componentInFormulation.componentInFormulationDeleteDelete(formulationId!, String(id)) 
      .then(() => {
        const updatedElementsList = chemicalElementsList.filter((element) => element.chemical_element.pk !== id);
        setChemicalElementsList(updatedElementsList);
        console.log('Компонент успешно удален из косметического средства');
      })
      .catch(() => {
        console.error('Ошибка при удалении компонента из косметического средства');
      });
  };

  const handleSaveFormulationName = () => {
    // Укажите свой action для обновления имени формуляции
    dispatch(updateFormulationName(formulationName));
  };

  const handleCreateFormulation = (e: React.FormEvent) => {
    e.preventDefault();

    if (chemicalElementsList.length === 0) {
      setNotification('Косметическое средство не может быть пустым. Добавьте хотя бы один компонент.');
      return;
    }

    dispatch(
      submitFormulation({
        formulationId: formulationId!,
        name: formulationName,
      })
    )
      .then(() => {
        dispatch(clearFormulation());
        navigate('/chemical-elements');
      })
      .catch(() => {
        console.error('Ошибка при создании косметического средства');
      });
  };

  const handleClearFormulation = () => {
    if (chemicalElementsList.length < 1) {
      navigate('/chemical-elements');
      return;
    }
    dispatch(deleteFormulation(formulationId!))
      .then(() => {
        dispatch(clearFormulation());
        navigate('/chemical-elements');
      })
      .catch(() => {
        console.error('Ошибка при удалении косметического средства');
      });
  };

  const handleFormulationNameChange = (value: string) => {
    dispatch(updateFormulationName(value));
  };

  return {
    chemicalElementsList,
    formulationName,
    formulationId,
    notification,
    adverseEffectsCount,
    handleChemicalElementDosageChange,
    handleDelete,
    handleSaveFormulationName,
    handleCreateFormulation,
    handleClearFormulation,
    handleFormulationNameChange,
  };
};
