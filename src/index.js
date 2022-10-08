import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import htmlImage from "./images/html.png";
import cssImage from "./images/css.png";
import jsImage from "./images/js.png";
import reactImage from "./images/react.png";
import ilkerImage from "./images/ilker.jpg";

// const header = <h1>Test Header.</h1>;
// const main = <p>Test text.</p>;
// const footer = <h2>Test Footer.</h2>;

const skills = ([] = [
  "HTML",
  "CSS",
  "JS",
  "SaSS | ScSS",
  "Bootstrap",
  "Tailwind",
  "Angular",
  "React",
]);
const printSkills = skills.map((skill) => (
  <div class="btn btn-secondary btn-disabled mx-1">{skill}</div>
));

const Web = () => (
  <div class="container">
    <div class="row text-center">
      <div class="col">
        <h2>Front End Technologies</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src={htmlImage} alt="" srcset="" height={250} width={250}></img>
      </div>
      <div class="col">
        <img src={cssImage} alt="" srcset="" height={250} width={250}></img>
      </div>
      <div class="col">
        <img src={jsImage} alt="" srcset="" height={250} width={250}></img>
      </div>
      <div class="col">
        <img src={reactImage} alt="" srcset="" height={250} width={250}></img>
      </div>
    </div>
  </div>
);

const SubscribeComponent = () => (
  <div class="bg-dark text-white text-center py-3">
    <div class="container">
      <div class="row">
        <div class="col-12">Subscribe</div>
        <div class="col-12">
          Sign up with your email adress to receive news and updates.
        </div>
      </div>
      <div class="row justify-content-center gap-3 my-3">
        <div class="col-2">
          <input type="text" placeholder="First Name"></input>
        </div>
        <div class="col-2">
          <input type="text" placeholder="Last Name"></input>
        </div>
        <div class="col-2">
          <input type="text" placeholder="E-Mail"></input>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-secondary btn-lg">Subscribe</button>
      </div>
    </div>
  </div>
);

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

const PersonalPortfolioComponent = () => (
  <div class="bg-dark text-white">
    <div class="container py-3 my-3">
      <div class="row py-3">
        <div class="col-4">
          <img
            class="rounded-circle"
            src={ilkerImage}
            height={200}
            width={200}
          ></img>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4>İlker Pehlivan</h4>
        </div>
        <div class="col-12">
          <h5>Frontend Developer, Türkiye</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h6>Yetenekler</h6>
        </div>
        <div class="d-inline-flex">{printSkills}</div>
      </div>
      <div class="row">
        <div class="col-12">
          <small>Join on Aug 30, 2020</small>
        </div>
      </div>
    </div>
  </div>
);

const app = (
  <>
    <Web />
    <SubscribeComponent />
    <PersonalPortfolioComponent />
    <HexaColor />
  </>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
