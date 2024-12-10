import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../core/store/hooks";
import { setFilterFormulationStatus, setFilterFormulationStartDate, setFilterFormulationEndDate } from "../../core/store/slices/appSlice";
import { ChangeEvent } from "../../App.typing";
import { IFormulationsTableProps, IFormulationsTableRow } from "../../components/FormulationsListTable/typing";
import { IFormulationsFilterProps } from "../../components/FiltersForFormulations/typing";
import { api } from "../../core/api";

export const useFormulationsListPage = () => {
  const [tableProps, setTableProps] = useState<IFormulationsTableProps>({ rows: [] });

  const { filterFormulationStatus, filterFormulationStartDate, filterFormulationEndDate } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterFormulationStatus(event.target.value));
  };

  const handleStartDateChange = (event: ChangeEvent) => {
    dispatch(setFilterFormulationStartDate(event.target.value));
  };

  const handleEndDateChange = (event: ChangeEvent) => {
    dispatch(setFilterFormulationEndDate(event.target.value));
  };

  const handleFilterClick = () => {
    // TODO: Реализуйте API-запрос для получения списка косметических средств с фильтрацией.
    api.cosmeticFormulations.cosmeticFormulationsList({
      status: mapStringToOptQueryParam(filterFormulationStatus),
      formation_start: mapStringToOptQueryParam(filterFormulationStartDate),
      formation_end: mapStringToOptQueryParam(filterFormulationEndDate),
    })
      .then((response) => {
        setTableProps(mapBackendResultToTableData(response.data));
      })
      .catch(() => {
        console.error("Ошибка при загрузке данных.");
        setTableProps({ rows: [] });
      });
  };

  useEffect(() => {
    handleFilterClick();
  }, [filterFormulationStatus, filterFormulationStartDate, filterFormulationEndDate]);

  const filterProps: IFormulationsFilterProps = {
    selectedStatus: filterFormulationStatus,
    selectedStartDate: filterFormulationStartDate,
    selectedEndDate: filterFormulationEndDate,
    handleStatusChange,
    handleStartDateChange,
    handleEndDateChange,
    handleFilterClick,
  };

  return {
    tableProps,
    filterProps,
  };
};

function mapStringToOptQueryParam(str?: string): string | undefined {
  return str === "" ? undefined : str;
}

function mapBackendResultToTableData(formulations: any[]): IFormulationsTableProps {
  return {
    rows: formulations.map((formulation) => ({
      number: formulation.id,
      name: formulation.name,
      status: mapStatusToTable(formulation.status),
      creationDate: convertDatetimeToDDMMYYYY(formulation.date_created),
      completionDate: convertDatetimeToDDMMYYYY(formulation.date_completion),
      adverseEffectsCount: formulation.adverse_effects_count || 0,
    })),
  };
}

function mapStatusToTable(status?: number): string {
  switch (status) {
    case 2:
      return "Сформировано";
    case 4:
      return "Создано";
    case 5:
      return "Отклонено";
    default:
      return "Неизвестно";
  }
}

function convertDatetimeToDDMMYYYY(dateString?: string): string {
  if (!dateString) return "---";

  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
