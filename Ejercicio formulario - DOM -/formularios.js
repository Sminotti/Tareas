const handler = (parametro) => {
  const element = document.getElementById(parametro);
  element.value == ""
    ? (element.style.border = `1px solid red`)
    : (element.style.border = `1px solid green`);
};

//const getKeysStorage = () => Object.keys(localStorage);
const arrEmpleados=[];
const send = () => {
  
  const obj = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    dni: document.getElementById("dni").value,
    edad: document.getElementById("edad").value,
    rango: document.getElementById("rango").value, 
  };
  // sessionLocal , string//envia todo al storage
  localStorage.setItem(obj.dni, JSON.stringify(obj));// pasa todo a string,ya que el segundo parametro requiere string
  arrEmpleados.push(obj);
  //localStorage.setItem(obj.dni,JSON.stringify(arrEmpleados));//AVERUGUAR SI ESTA BIEN...
  console.log(arrEmpleados);

  /*const keys = getKeysStorage();
  keys.map((usuario) => {
    document.getElementById("Listado").innerHTML = `${localStorage.getItem(
      usuario
    )}`;
  });*/

  //const string2Object = JSON.parse(obj);
  return obj;
};
const buscarEmpleado = () => {
  
  const e = arrEmpleados.filter((arrEmpleados) => arrEmpleados.rango === document.getElementById("rango").value);
  console.log(e);
}
const Filtrar = (parametro) => {
 
  const check = document.getElementById(parametro).checked;
  
  if (parametro == "gerente" && check == true ){
    buscarEmpleado();
  }else if (parametro == "otro" && check == true ){
    buscarEmpleado(parametro);
  }else if (parametro == "mayor40" && check == true ){
    buscarEmpleado(parametro);
  }else if (parametro == "gerente" && check == false ){
    console.log("DEselecciona otro");
  }else if (parametro == "otro" && check == false ){
    console.log("DEselecciona otro");
  }else if (parametro == "mayor40" && check == false ){
    console.log("DEselecciona mayor40");
  };
};

const getLocalStorage = () => {
  const keysObject = Object.keys(localStorage);
  // crea un arra de KEYS
  keysObject.forEach((keys) => console.log(localStorage.getItem(keys)));
};

const start = () => {
  document.getElementById("nombre").addEventListener("blur", () => {handler("nombre")});
  document.getElementById("apellido").addEventListener("blur", () => {handler("apellido")});
  document.getElementById("email").addEventListener("blur", () => {handler("email")});
  document.getElementById("dni").addEventListener("blur", () => {handler("dni")});
  document.getElementById("edad").addEventListener("blur", () => {handler("edad")});
  
  document.getElementById("gerente").addEventListener("click", () => {Filtrar("gerente")});
  document.getElementById("otro").addEventListener("click", () => {Filtrar("otro")});
  document.getElementById("mayor40").addEventListener("click", () => {Filtrar("mayor40")});

  document.getElementById("enviar").addEventListener("click", send);

};
window.onload = start;


