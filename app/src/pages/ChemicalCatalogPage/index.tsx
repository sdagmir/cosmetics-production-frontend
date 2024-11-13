import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar';
import { Cart } from '../../components/Cart';
import { ChemicalElementCard } from '../../components/ChemicalElementCard';
import { FC } from 'react';
import { Breadcrumbs } from '../../components/BreadCrumbs';
import { useChemicalCatalogPage } from './useChemicalCatalogPage';

export const ChemicalCatalogPage: FC = () => {
  const {
    chemicalElementList,
    formulationId,
    itemsInCart,
    handleSearchChemicalElementClick,
    handleSearchTitleChange,
  } = useChemicalCatalogPage();

  return (
    <>
      <Navbar />
      <Container className="pb-4 d-flex flex-column mx-auto" style={{ maxWidth: '1200px' }}>
        <Container className="d-flex flex-row justify-content-between mb-5 mt-5">
          <Breadcrumbs endItem="Каталог" />
          <Cart connectionRequestId={formulationId} itemsInCart={itemsInCart} />
        </Container>
        <div className="d-flex flex-row gap-3 mb-4 col-8 align-self-center">
          <div className="flex-grow-1">
            <input
              type="text"
              className="input form-control"
              onChange={handleSearchTitleChange}
              placeholder="Поиск химического элемента"
              aria-label="Поиск"
            />
          </div>
          <div>
            <Button
              onClick={handleSearchChemicalElementClick}
              className="btn btn-secondary ml-3 mr-3"
            >
              Искать
            </Button>
          </div>
        </div>
        <Row xs={1} sm={1} lg={3} className="g-4 justify-content-start">
          {chemicalElementList.map((chemicalElement) => (
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
