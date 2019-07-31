import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "components/Navigation";

import css from "App.module.scss";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import Routes from "routes/Routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={css.App}>
        <ErrorBoundary>
          <Navigation />
          <Routes />
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;
