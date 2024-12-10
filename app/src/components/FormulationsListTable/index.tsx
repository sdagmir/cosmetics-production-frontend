import { FC } from "react";
import { IFormulationsTableProps } from "./typing";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FormulationsListTable: FC<IFormulationsTableProps> = ({ rows }) => {
  return (
    <div>
      {/* Заголовок таблицы */}
      <Card className="mb-2">
        <Card.Body className="py-2 px-3">
          <Row className="d-flex align-items-center" style={{ fontSize: "14px" }}>
            <Col xs={12} sm={1} className="text-center no-wrap">
              <Card.Text>
                <strong>№</strong>
              </Card.Text>
            </Col>
            <Col xs={12} sm={3} className="text-center no-wrap">
              <Card.Text>
                <strong>Название</strong>
              </Card.Text>
            </Col>
            <Col xs={12} sm={2} className="text-center no-wrap">
              <Card.Text>
                <strong>Статус</strong>
              </Card.Text>
            </Col>
            <Col xs={12} sm={2} className="text-center no-wrap">
              <Card.Text>
                <strong>Создано</strong>
              </Card.Text>
            </Col>
            <Col xs={12} sm={2} className="text-center no-wrap">
              <Card.Text>
                <strong>Завершено</strong>
              </Card.Text>
            </Col>
            <Col xs={12} sm={1} className="text-center no-wrap">
              <Card.Text>
                <strong>Побочные эффекты</strong>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Строки таблицы */}
      {rows.map((row) => (
        <Card key={row.number} className="mb-2">
          <Card.Body className="py-2 px-3">
            <Row className="d-flex align-items-center" style={{ fontSize: "14px" }}>
              <Col xs={12} sm={1} className="text-center">
                <Card.Text>
                  <Link to={`/formulations/${row.number}`} className="text-dark text-decoration-none">
                    {row.number}
                  </Link>
                </Card.Text>
              </Col>
              <Col xs={12} sm={3} className="text-center">
                <Card.Text>{row.name}</Card.Text>
              </Col>
              <Col xs={12} sm={2} className="text-center">
                <Card.Text>{row.status}</Card.Text>
              </Col>
              <Col xs={12} sm={2} className="text-center">
                <Card.Text>{row.creationDate}</Card.Text>
              </Col>
              <Col xs={12} sm={2} className="text-center">
                <Card.Text>{row.completionDate || "---"}</Card.Text>
              </Col>
              <Col xs={12} sm={1} className="text-center">
                <Card.Text>{row.adverseEffectsCount}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
