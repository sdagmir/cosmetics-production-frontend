import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IChemicalElement } from "../../core/api/service/typing";
import { getChemicalElementById } from "../../core/api/service";
import { chemicalElementList as CHEMICAL_ELEMENT_LIST_MOCK } from "../../core/mock/chemicalElementList";
import { Breadcrumbs } from "../../components/BreadCrumbs";

export const ChemicalElementPage: FC = () => {
    const { id } = useParams();
    const [chemicalElementData, setChemicalElementData] = useState<IChemicalElement | null>(null);
    
    useEffect(() => {
        if (id) {
            getChemicalElementById(id)
                .then((data) => {
                    console.log("Полученные данные:", data);
                    setChemicalElementData(data);
                })
                .catch(() => {
                    const chemicalElement = CHEMICAL_ELEMENT_LIST_MOCK.find(
                        (element) => element.id === Number(id)
                    );
                    setChemicalElementData(chemicalElement || null);
                });
        }
    }, [id]);

    if (!chemicalElementData) {
        return (
            <>
                <Navbar />
            </>
        );
    }
    
    const renderPrice = () => {
        return `${chemicalElementData.price} ₽ за ${chemicalElementData.volume} ${chemicalElementData.unit}`;
    };
    
    return (
        <>
            <Navbar />
            <Container className="mt-4 ms-3">
                <Breadcrumbs
                    middleItems={[
                        {
                            name: "Каталог",
                            link: "/chemical-elements"
                        }
                    ]}
                    endItem={chemicalElementData.title}
                />
            </Container>
            
            <Container fluid className="mt-5 pb-4 d-flex flex-column align-items-center mx-auto">
                <Card className="col-5 rounded-4 shadow-sm" style={{ overflow: 'hidden' }}>
                    <Card.Img variant="top" src={chemicalElementData.img_path} 
                        style={{ 
                            width: '100%', 
                            height: '400px', 
                            objectFit: 'cover'
                        }}   
                    />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{chemicalElementData.title}</Card.Title>
                        <Card.Text className="fw-medium mb-4" dangerouslySetInnerHTML={{ __html: chemicalElementData.description }}></Card.Text>
                        <div className="mt-auto d-flex justify-content-between">
                            <Button variant="warning" className="w-50 btn-lg me-2"
                                style={{ transition: "transform 550ms", backgroundColor: "#388e3c", borderColor: "#388e3c", color: "#ffffff"}}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >Добавить</Button>
                            <Card.Text className="w-50 fw-medium fs-4 text-center align-self-center">{renderPrice()}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default ChemicalElementPage;
