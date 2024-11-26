import { FC, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IChemicalElement } from "../../core/api/service/typing";
import { getChemicalElementById } from "../../core/api/service";
import { chemicalElementList as CHEMICAL_ELEMENT_LIST_MOCK } from "../../core/mock/chemicalElementList";
import { Breadcrumbs } from "../../components/BreadCrumbs";
import placeholderImage from "/images/image_placeholder.jpg";

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
            
            <Container fluid className="mt-5 pb-4 d-flex flex-column align-items-center mx-auto px-3">
                <Card className="col-12 col-md-8 col-lg-5 rounded-4 shadow-sm" style={{ overflow: 'hidden' }}>
                    <Card.Img variant="top" src={chemicalElementData.img_path ? (chemicalElementData.img_path) : (placeholderImage)} 
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            objectFit: 'cover',
                            maxHeight: '400px'  // Ограничение максимальной высоты для изображений на десктопе
                        }}   
                    />
                    <Card.Body className="d-flex flex-column p-3 p-md-4">
                        <Card.Title className="text-center text-md-start">{chemicalElementData.title}</Card.Title>
                        <Card.Text className="fw-medium mb-4 text-center text-md-start" dangerouslySetInnerHTML={{ __html: chemicalElementData.description }}></Card.Text>
                        <div className="mt-auto d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                            <Button 
                                variant="warning" 
                                className="btn-lg w-100 w-md-50"
                                style={{ transition: "transform 550ms", backgroundColor: "#388e3c", borderColor: "#388e3c", color: "#ffffff"}}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                                Добавить
                            </Button>
                            <Card.Text className="w-100 w-md-50 fw-medium fs-4 text-center">{renderPrice()}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default ChemicalElementPage;
