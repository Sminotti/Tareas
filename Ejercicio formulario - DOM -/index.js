const hanlderInput = () => {
  console.log("AAAAA");
};
const pintar = () => {
  console.log("Pinta azules inventadoooooos");
  const element = document.getElementById("recuadro"); // return object
  element.style.backgroundColor = "tomato";
  element.style.borderRadius = "5px";
  document.getElementById("message").innerText = "Elemento pintado";
};

const despintar = () => {
  const element = document.getElementById("recuadro"); // return object
  element.style.backgroundColor = "white";
  element.style.borderRadius = "0%";
  document.getElementById("message").innerText = "Elemento en blanco";
};

const colorear = (color) => {
  document.getElementById("recuadroSeba").style.background = color;
};

const start = () => {
  // ACCESO AL ELEMENTO.ESCUCHAR("EVENTO",FUNCION)
  const usuarioElement = document.getElementById("usuario");
  usuarioElement.addEventListener("input", hanlderInput);
  document.getElementById("btnPintar").addEventListener("click", pintar);
  document
    .getElementById("btnDespintar")
    .addEventListener("dblclick", despintar);
  document
    .getElementById("recuadroSeba")
    .addEventListener("mouseover", () => {colorear("black")});
  document
    .getElementById("recuadroSeba")
    .addEventListener("mouseout", () => {colorear("red")});
};

window.onload = start;
