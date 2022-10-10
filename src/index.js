import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const welcome =
  "Selam, ben React öğreniyorum. Bu da React Challange'nin 5. günü.";
const title = "5. React Günü Projesi";
const subtitle = "Component konusunda props ile data aktarımı";
const author = {
  firstname: "İlker",
  lastName: "Pehlivan",
};
const date = "09/10/2022";

const Header = (props) => {
  return (
    <div className="container">
      <header>
        <div className="row text-center">
          <div className="col-12">{welcome}</div>
          <div className="col-12">{title}</div>
          <div className="col-12">{subtitle}</div>
          <div className="col-12">{author.firstname + " " + author.lastName}</div>
          <div className="col-12">{date}</div>
        </div>
      </header>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
