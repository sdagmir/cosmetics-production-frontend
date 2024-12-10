import { FC, useEffect, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FormulationComponent } from "../../core/api/API";
import placeholderImage from "/images/image_placeholder.jpg";
import binImage from "/images/bin.jpg"
import { ChangeEvent } from "../../App.typing";

interface ChemicalElementCardInFormulationProps {
    chemicalElement: FormulationComponent;
    onDosageChange: (pk: number, dosage: number) => void;
    onDelete: (pk: number) => void;
}

export const ChemicalElementCardInFormulation: FC<ChemicalElementCardInFormulationProps> = ({ 
    chemicalElement, 
    onDosageChange, 
    onDelete 
}) => {
    const [dosage, setDosage] = useState(chemicalElement.dosage || 1);

    useEffect(() => {
        onDosageChange(chemicalElement.chemical_element.pk!, dosage);
    }, [dosage]);

    const handleDosageChange = (e: ChangeEvent) => {
        const newDosage = parseFloat(e.target.value);
        if (newDosage > 0) {
            setDosage(newDosage);
        }
    };

    return (
        <div className="position-relative mb-3">
            <Card className="border-2" style={{ borderColor: "#DEE2E6" }}>
                <Card.Body>
                    <Row>
                        <Col xs={3}>
                            <div style={{ height: '130px' }}>
                                <img
                                    src={chemicalElement.chemical_element.img_path || placeholderImage}
                                    alt={chemicalElement.chemical_element.title}
                                    className="rounded-1 img-fluid h-100 w-100 object-fit-cover"
                                />
                            </div>
                        </Col>
                        <Col xs={9}>
                            <h3 className="mb-4">{chemicalElement.chemical_element.title}</h3>
                            <Row className="align-items-center">
                                <Col xs={8}>
                                    <InputGroup className="w-75">
                                        <InputGroup.Text
                                            className="border-2 border-end-0"
                                            style={{ borderColor: "#DEE2E6" }}
                                        >
                                            Дозировка ({chemicalElement.chemical_element.unit})
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            min="1"
                                            value={dosage}
                                            onChange={handleDosageChange}
                                            className="border-2"
                                            style={{ borderColor: "#DEE2E6" }}
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Button
                variant="link"
                className="position-absolute top-50 translate-middle-y"
                style={{ right: '-70px' }}
                onClick={() => onDelete(chemicalElement.chemical_element.pk!)}
            >
                <img
                    src={binImage}
                    alt="Удалить"
                    style={{ width: "50px" }}
                />
            </Button>
        </div>
    );
};