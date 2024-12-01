import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar';
import { Cart } from '../../components/Cart';
import { ChemicalElementCard } from '../../components/ChemicalElementCard';
import { FC } from 'react';
import { Breadcrumbs } from '../../components/BreadCrumbs';
import { useChemicalCatalogPage } from './useChemicalCatalogPage';
import "./ChemicalCatalogPage.css"
import { dest_img } from "../../../target_config";

export const ChemicalCatalogPage: FC = () => {
  const {
    chemicalElementList,
    formulationId,
    itemsInCart,
    searchTerm,
    handleSearchChemicalElementClick,
    handleSearchTitleChange,
  } = useChemicalCatalogPage();

  const updatedChemicalElementList = chemicalElementList.map((chemicalElement) => ({
    ...chemicalElement,
    img_path: `${dest_img}${chemicalElement.img_path}`,
  }));

  return (
    <>
      <Navbar />
      <Container className="pb-4 d-flex flex-column mx-auto" style={{ maxWidth: '1200px' }}>
        <Container className="d-flex flex-row justify-content-between mb-5 mt-5">
          <Breadcrumbs endItem="Каталог" />
          <Cart connectionRequestId={formulationId} itemsInCart={itemsInCart} />
        </Container>
        
        <Row className="align-items-center justify-content-center mb-4 col-12">
          <Col xs={12} sm={8} md={6} lg={6} className="mb-2">
            <input
              type="text"
              className="input form-control"
              onChange={handleSearchTitleChange}
              placeholder="Поиск химического элемента"
              aria-label="Поиск"
              value={searchTerm}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs="auto">
            <Button
              onClick={handleSearchChemicalElementClick}
              className="btn btn-secondary"
            >
              Искать
            </Button>
          </Col>
        </Row>

        <Row xs={1} sm={1} lg={3} className="g-4 justify-content-start">
          {updatedChemicalElementList.map((chemicalElement) => (
            <Col key={chemicalElement.id} className="d-flex align-items-stretch">
              <ChemicalElementCard {...chemicalElement} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ChemicalCatalogPage;

