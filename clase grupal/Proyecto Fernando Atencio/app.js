var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
//var usersRouter = require('./routes/users');
const adminRouter = require("./routes/admin");
const usuariosRouter = require("./routes/usuarios");
const productosRouter = require("./routes/productos");
const registroRouter = require("./routes/registro");
const loginRouter = require("./routes/login");
const direccionRouter = require("./routes/direccion_envio");
const compraRouter = require("./routes/compra_producto");
const pagoRouter = require("./routes/estado_pago");
const imagenesRouter = require("./routes/productos_imagenes");
const provinciaRouter = require("./routes/provincia");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//app.use('/users', usersRouter);
app.use("/admin", adminRouter);
app.use("/usuarios", usuariosRouter);
app.use("/productos", productosRouter);
app.use("/registro", registroRouter);
app.use("/login", loginRouter);
app.use("/direccion_envio", direccionRouter);
app.use("/compra_producto", compraRouter);
app.use("/estado_pago", pagoRouter);
app.use("/productos_imagenes", imagenesRouter);
app.use("/provincia", provinciaRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
