import { FC } from "react";
import { IChemicalElementProps } from "./typing";
import { Button, Card } from "react-bootstrap";
import "./ChemicalElementCard.css";
import { Link } from "react-router-dom";
import placeholderImage from "/images/image_placeholder.jpg";

export const ChemicalElementCard: FC<IChemicalElementProps> = (chemicalElement: IChemicalElementProps) => {
    return (
      <Card className="provider-card w-100 rounded-4 shadow-sm" style={{ overflow: "hidden" }}>
        <Link to={`/chemical-elements/${chemicalElement.id}`} style={{ textDecoration: 'none' }}>
          <Card.Img variant="top" src={chemicalElement.img_path ? (chemicalElement.img_path) : (placeholderImage)}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover'
            }}
          />
        </Link>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-success fs-5 fw-bold">{chemicalElement.title}</Card.Title>
          <Card.Text className="text-muted fs-6 mb-2">{chemicalElement.short_description}</Card.Text>
          <Card.Text className="provider-card-price">
            {chemicalElement.volume}{chemicalElement.unit} — {chemicalElement.price} руб.
          </Card.Text>
          <Button
            variant="success"
            className="w-100 btn-lg mt-auto provider-card-button"
          >
            Добавить
          </Button>
        </Card.Body>
      </Card>
    );
  };

  export default ChemicalElementCard