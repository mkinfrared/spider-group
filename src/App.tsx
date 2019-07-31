import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "components/Navigation";

import css from "App.module.scss";
import Routes from "routes/Routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={css.App}>
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
