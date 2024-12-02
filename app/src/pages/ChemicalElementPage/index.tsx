import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Button, Card, Container } from "react-bootstrap";
import { useChemicalElementPage } from "./useChemicalElementPage";
import { Breadcrumbs } from "../../components/BreadCrumbs";
import placeholderImage from "/images/image_placeholder.jpg";

export const ChemicalElementPage: FC = () => {
    const { renderPrice, chemicalElement, handleAddToFormulation } = useChemicalElementPage();
    

    if (!chemicalElement) {
        return (
            <>
                <Navbar />
            </>
        );
    }
    
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
                    endItem={chemicalElement.title}
                />
            </Container>
            
            <Container fluid className="mt-5 pb-4 d-flex flex-column align-items-center mx-auto px-3">
                <Card className="col-12 col-md-8 col-lg-5 rounded-4 shadow-sm" style={{ overflow: 'hidden' }}>
                    <Card.Img variant="top" src={chemicalElement.img_path ? (chemicalElement.img_path) : (placeholderImage)} 
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            objectFit: 'cover',
                            maxHeight: '400px'  // Ограничение максимальной высоты для изображений на десктопе
                        }}   
                    />
                    <Card.Body className="d-flex flex-column p-3 p-md-4">
                        <Card.Title className="text-center text-md-start">{chemicalElement.title}</Card.Title>
                        <Card.Text className="fw-medium mb-4 text-center text-md-start" dangerouslySetInnerHTML={{ __html: chemicalElement.description || ""}}></Card.Text>
                        <div className="mt-auto d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                            <Button 
                                variant="warning" 
                                className="btn-lg w-100 w-md-50"
                                style={{ transition: "transform 550ms", backgroundColor: "#388e3c", borderColor: "#388e3c", color: "#ffffff"}}
                                onClick={handleAddToFormulation}
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
