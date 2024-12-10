import { Button, Card, Form } from "react-bootstrap";
import { FC } from "react";
import { IFormulationsFilterProps } from "./typing";

export const FiltersForFormulations: FC<IFormulationsFilterProps> = ({
  selectedStatus,
  selectedStartDate,
  selectedEndDate,
  handleStatusChange,
  handleStartDateChange,
  handleEndDateChange,
  handleFilterClick,
}) => {
  return (
    <Card className="m-3">
      <Card.Body>
        <Form>
          <div className="d-flex align-items-end justify-content-between">
            {/* Выбор статуса */}
            <div className="flex-grow-1 pe-3">
              <Form.Group controlId="status">
                <Form.Label>Статус</Form.Label>
                <Form.Select value={selectedStatus} onChange={handleStatusChange}>
                  <option value="">Любой статус</option>
                  <option value="CREATED">Создано</option>
                  <option value="IN_PROGRESS">В процессе</option>
                  <option value="COMPLETED">Завершено</option>
                </Form.Select>
              </Form.Group>
            </div>

            {/* Дата создания с */}
            <div className="flex-grow-1 pe-3">
              <Form.Group controlId="startDate">
                <Form.Label>Дата создания с</Form.Label>
                <Form.Control
                  type="date"
                  value={selectedStartDate}
                  onChange={handleStartDateChange}
                />
              </Form.Group>
            </div>

            {/* Дата создания по */}
            <div className="flex-grow-1 pe-3">
              <Form.Group controlId="endDate">
                <Form.Label>Дата создания по</Form.Label>
                <Form.Control
                  type="date"
                  value={selectedEndDate}
                  onChange={handleEndDateChange}
                />
              </Form.Group>
            </div>

            {/* Кнопка применения фильтров */}
            <Button
              className="btn-sm fw-medium"
              style={{
                backgroundColor: "#1a6e37",
                borderColor: "#1a6e37",
              }}
              onClick={handleFilterClick}
            >
              Применить
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
