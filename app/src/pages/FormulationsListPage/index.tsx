import { Container } from "react-bootstrap";
import { FiltersForFormulations } from "../../components/FiltersForFormulations";
import { FormulationsListTable } from "../../components/FormulationsListTable";
import { useFormulationsListPage } from "./useFormulationsListPage.ts"
import { Navbar } from "../../components/Navbar";

export const FormulationsListPage: React.FC = () => {
  const { tableProps, filterProps } = useFormulationsListPage();

  return (
    <>
      <Navbar />
      <Container style={{ maxWidth: "1400px" }}>
        <h1 className="m-4 text-center">Список косметических средств</h1>
        <FiltersForFormulations {...filterProps} />
        <div className="m-4">
          <FormulationsListTable {...tableProps} />
        </div>
      </Container>
    </>
  );
};
