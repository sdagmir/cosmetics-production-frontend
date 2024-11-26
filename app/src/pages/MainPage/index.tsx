import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Container } from "react-bootstrap";
import "./MainPage.css";

export const MainPage: FC = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5 px-4">
        <div className="intro">
          <h1 className="text-center mb-4">
            Косметические ингредиенты для вашего здоровья и красоты
          </h1>
          <div
            className="mx-auto fs-5"
            style={{
              maxWidth: "900px",
              textAlign: "justify",
              hyphens: "auto",
              lineHeight: "1.6",
            }}
          >
            <p className="mb-4">
              Мы предлагаем широкий выбор натуральных и органических ингредиентов, которые помогут вам создать безопасные и эффективные косметические продукты. Наши ингредиенты соответствуют самым высоким стандартам качества и сертифицированы международными организациями.
            </p>
            <p className="mb-4">
              Создавайте уникальные косметические рецептуры для ухода за кожей, волосами и телом с помощью наших компонентов. Мы заботимся о вашем здоровье и красоте, предлагая только лучшее из мира натуральной косметики.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
