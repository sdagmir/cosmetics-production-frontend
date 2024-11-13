import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Container } from "react-bootstrap";
import "./MainPage.css";

export const MainPage: FC = () => {
  return (
    <>
      <Navbar />
      <Container className="w-100 mt-5">
        <Container className="intro text-center">
          <h1>Косметические ингредиенты для вашего здоровья и красоты</h1>
          <Container className="w-75 fs-5 mt-3">
            <p>
              Мы предлагаем широкий выбор натуральных и органических ингредиентов, которые помогут вам создать безопасные и эффективные косметические продукты. Наши ингредиенты соответствуют самым высоким стандартам качества и сертифицированы международными организациями.
            </p>
            <p>
              Создавайте уникальные косметические рецептуры для ухода за кожей, волосами и телом с помощью наших компонентов. Мы заботимся о вашем здоровье и красоте, предлагая только лучшее из мира натуральной косметики.
            </p>
          </Container>
        </Container>
      </Container>
    </>
  );
};