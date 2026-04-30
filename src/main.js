import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import { BreakingbadApp } from "./breakingbad/breaking-bad";
import { UsersApp } from "./users/user-app";

document.querySelector("#app").innerHTML = `
<div

  <a>
    <img src="${viteLogo}" class="logo" alt="logo" />
  </a>
  <a>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo"/>
  </a>
  <h1 id="app-title">Hello Table!</h1>
  <div class="card">

  </div>
</div>


`;

const element = document.querySelector(".card");
// BreakingbadApp(element);
UsersApp(element);
