/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["Mi perro", "Mi abuelo", "Mi amigo", "Mi vecino", "Mi ex"];
  let accion = ["rompio", "se comio", "se robo", "compró", "vendio"];
  let que = ["mi tarea", "mi telefono", "mi laptop", "la planta", "el tv"];
  let cuando = [
    "ayer",
    "antes de clases",
    "mientras dormia",
    "mientras iba al baño",
    "ante ayer"
  ];

  function generadorExcusa() {
    let randomquien = quien[Math.floor(Math.random() * quien.length)];
    let randomaccion = accion[Math.floor(Math.random() * accion.length)];
    let randomque = que[Math.floor(Math.random() * que.length)];
    let randomcuando = cuando[Math.floor(Math.random() * cuando.length)];

    return `${randomquien} ${randomaccion} ${randomque} ${randomcuando}`;
  }
  let excusa = generadorExcusa();
  document.getElementById("excuse").innerHTML = excusa;
};
