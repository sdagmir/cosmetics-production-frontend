import { Navbar } from "../../components/Navbar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ChemicalElementCardInFormulation } from "../../components/ChemicalElementCardInFormulation";
import { useFormulationPage } from "./useFormulationPage";
import { Breadcrumbs } from "../../components/BreadCrumbs";
import { useAppSelector } from "../../core/store/hooks"; 

export const FormulationPage: React.FC = () => {
  const {
    chemicalElementsList,
    formulationName,
    formulationId,
    adverseEffectsCount,
    handleChemicalElementDosageChange,
    handleDelete,
    handleSaveFormulationName,
    handleCreateFormulation,
    handleClearFormulation,
    handleFormulationNameChange,
  } = useFormulationPage();

  const draftFormulationId = useAppSelector((state) => state.app.formulationId); // ID черновика из глобального состояния

  // Определяем режим редактирования
  const isEditMode = formulationId === String(draftFormulationId);

  return (
    <>
      <Navbar />
      <Container fluid className="pt-4">
        <Container className="mt-4" style={{ maxWidth: "1200px" }}>
          <Breadcrumbs
            middleItems={[
              {
                name: "Каталог",
                link: "/chemical-elements",
              },
            ]}
            endItem={"Косметическое средство № " + formulationId}
          />
        </Container>

        <div className="position-relative mt-5">
          <div className="mx-auto" style={{ width: "950px" }}>
            <h1 className="text-center mb-4">
              {isEditMode
                ? "Создание косметического средства"
                : "Просмотр состава косметического средства"}
            </h1>

            <p className="text-center mb-4" style={{ fontSize: "1.2rem", color: "#6c757d" }}>
              Побочные эффекты:{" "}
              {isEditMode
                ? adverseEffectsCount > 0
                  ? adverseEffectsCount
                  : "Не определено"
                : adverseEffectsCount > 0
                ? adverseEffectsCount
                : "Не определено"}
            </p>

            {isEditMode && (
              <Form onSubmit={(e) => e.preventDefault()} className="mb-4">
                <Row className="g-2">
                  <Col md={12}>
                    <Form.Floating>
                      <Form.Control
                        id="formulationName"
                        type="text"
                        className="border-2"
                        value={formulationName}
                        onChange={(e) => handleFormulationNameChange(e.target.value)}
                        required
                      />
                      <label htmlFor="formulationName">Название косметического средства</label>
                    </Form.Floating>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-3">
                  <Button
                    className="btn-sm rounded-2 fw-bold"
                    style={{
                      backgroundColor: "#1A6E37",
                      borderColor: "#1A6E37",
                      color: "#ffffff",
                      transition: "transform 550ms",
                    }}
                    onClick={handleSaveFormulationName}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    Сохранить название
                  </Button>
                </div>
              </Form>
            )}

                <div className="mb-4">
                  {chemicalElementsList.map((element) => (
                    <ChemicalElementCardInFormulation
                     key={element.chemical_element.pk}
                     chemicalElement={element}
                     onDosageChange={handleChemicalElementDosageChange}
                     onDelete={handleDelete}
                     isEditMode={isEditMode}
                />
              ))}

              {isEditMode && (
                <div className="d-flex justify-content-between gap-2 mt-4">
                  <Button
                    className="btn-lg rounded-2 fw-bold"
                    style={{
                      backgroundColor: "#1A6E37",
                      borderColor: "#1A6E37",
                      color: "#ffffff",
                      transition: "transform 550ms",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                    onClick={handleClearFormulation}
                  >
                    Удалить
                  </Button>
                  <Button
                    className="btn-lg rounded-2 fw-bold"
                    style={{
                      backgroundColor: "#1A6E37",
                      borderColor: "#1A6E37",
                      color: "#ffffff",
                      transition: "transform 550ms",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                    onClick={handleCreateFormulation}
                  >
                    Создать
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
