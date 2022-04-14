import generatejoke from "./generate.joke";
import "./styles/main.scss";
import laughing from "./Assets/laughing-emoji-m-unscreen.gif";
const laughIMg = document.getElementById("laughingImg");
laughIMg.src = laughing;
const jokeBTN = document.getElementById("jokeBtn");
jokeBTN.addEventListener("click", generatejoke);

generatejoke();
