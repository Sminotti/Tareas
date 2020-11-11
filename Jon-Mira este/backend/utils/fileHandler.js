// MANEJADOR DE ARCHIVOS
// VA A MANEJAR CUALQUIER TIPO DE ARCHIVO
//---------------------------------------------------------------------------
// 1. PRIMERO NODE LEE EL ARCHIVO TEMPORAL PARA PODER USARLO (fs)
// 2. NECESITO RENOMBRA AL ARCHIVO CON UN NOMBRE UNICO,IGUAL QUE HACIAMOS CON EL PASSWORD (uuid)
// 3. CREO UNA VARIABLE CON LAS EXTENCIONES PERMITIDAS
// 4. SEPARO EL MIMETYPE ("IMAGE","PNG"),SEPARO IMAGE DE EXTENSION CON (SPLIT)

const fs = require("fs"); // Propio de nodejs// lee el archivo temporal
const { v4: uuid } = require("uuid");// renombro al archivo con un nombre unico
const allowExtension = ["png", "jpeg"];// extenciones permitidas
// mimetype

const deleteTemp = (file) => fs.unlink(file, (e) => console.log(e));//variable que borra el temporal//fs.unlink(archivo),permite manejar el archivo
// mimetype
//gurada el archivo
//{los datos que necesito del archivo,extencionPermitida,destinoCarpetaTemporal}
const saveFile = ({ mimetype, size, path },allowE,destFolder = `./public/images`) => {
  try {
    // mimetype="video/mp4"
    const [type, extension] = mimetype.split("/");//separo mimetype
    if (!allowE.includes(extension)) throw "Formato incorrecto";//si no es la extencion correcta tira un error
    const uid = uuid(); // creando un id unico :D
    const fileName = `${uid}.${extension}`;//nombreUnico.extension 
    const fileNameOut = `${destFolder}/${uid}.${extension}`;//lo guardo en la carpeta temporal

    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));//leo el temporal de la ruta (path) y lo creo en una imagen
    //pipe.lee en forma vidireccional izq-der,der-izq,a medida que lee convierte a imagen el temporal
    deleteTemp(path);//ya convertida la imagen borra el temporal
    return fileName;
  } catch (e) {
    deleteTemp(path);//si no se subio el archivo con la extension correcta tambien borro el temporal
    console.error(e);
  }
};

const imgFile = (file) => saveFile(file, allowExtension);

module.exports = { imgFile };
