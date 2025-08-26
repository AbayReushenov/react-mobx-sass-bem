import React from "react";
import { observer } from "mobx-react-lite";
import { appStore } from "../../store/AppStore";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import "./Home.scss";

const HomeComponent: React.FC = observer(() => {
  return (
    <div className="home">
      <h2 className="home__title">Главная страница</h2>
      <p className="home__description">
        Это пример блока, сверстанного по методологии <b>БЭМ</b>.
      </p>
      <Card>
        Пример компонента Card
      </Card>
      <Button
        label={`Сменить заголовок (${appStore.clickCount})`}
        onClick={() => appStore.increment()}
        type="primary"
      />
    </div>
  );
});

export const Home = HomeComponent;
export default HomeComponent;
