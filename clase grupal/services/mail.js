//archivo que se usa para validar el usuario y contraseña
const nodemailer = require("nodemailer");

// mail -> asociada una demora
// te enviamos un correo a tu cuenta de mail

/*
    obj = {
        mail : 'clau@gmail.com',
        subject : 'Gracias por registrarte'
    }
*/
const send = async ({ mail, subject = "Gracias por registrarte", message }) => {
  try {
    // para gmail hacer esto 
    // HTTPS -> sacar verificacion en 2 pasos
    // permitir a gmail acceso a aplicaciones poco seguras
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {// agregar esto tambien para gmail
        rejectUnauthorized: false,
      },
    });
    const info = {
      to: mail,// a quien le mandamos el mail desde la pagina de registro,para validadr su cuenta
      subject: subject,// asunto 
      html: message,//( lo que va dentro del menaje) se puede agregar HTML y clases 
      
      /*attchments:[//se usa para enviar archivos
        {filename : `factura.pdf`, path : `ubicacion`},
        {filename : `image.png`, path : `ubicacion`}
      ]*/
    };
    const { messageId } = await transporter.sendMail(info);
    return messageId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { send };
