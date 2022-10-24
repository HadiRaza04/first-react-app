import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div>
      <div className="container">
        <div className="name">
          <h1>
            <u>Hadi Raza</u>
          </h1>

          <h2>
            <u>Education</u>
          </h2>
          <p>Matriculation from M.D. Grammar School.</p>
          <p>Intermediate from Gulshan College Block:07.</p>
          <p>Bachelor's in CS from Federal Urdu University (2022 - Present)</p>

          <h2>
            <u>Skills</u>
          </h2>
          <ul>
            <li>Adobe PhotoShop</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>BootStrap</li>
            <li>JavaScript</li>
            <li>React JS</li>
          </ul>

          <h2>
            <u>Contacts</u>
          </h2>
          <p>
            <a href="https://www.linkedin.com/in/hadiraza04/" target="_blank">
              Connect with LinkedIn
            </a>
          </p>
          <p>
            <a href="tel:+923353651659">+92 335 3651659 (Mobile)</a>
          </p>
          <p>
            <a href="https://Wa.me/+923131019930" target="_blank">
              +92 313 1019930 (WhatsApp)
            </a>
          </p>
          <p>
            <a href="mailto:hadiraza.edu@gmail.com" target="_blank">
              hadiraza.edu@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));