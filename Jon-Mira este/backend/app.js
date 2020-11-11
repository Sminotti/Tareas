var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var exphbs  = require('express-handlebars');
const dotenv = require("dotenv");
dotenv.config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const registro = require("./routes/registro");
const cursos = require("./routes/cursos");
const categorias = require("./routes/categorias");
const docentes = require("./routes/docentes");
const login = require("./routes/login");
const adminCursos = require("./routes/admin/cursos");
const adminDocentes = require("./routes/admin/docentes");
var app = express();

// view engine setup

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
//hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/*app.use(
  session({
    secret: process.env.SECRET_SESSION,
    cookie: { maxAge: null },
    resave: true,
    saveUninitialized: false,
  })
);*/

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/registro", registro);
app.use("/cursos", cursos);
app.use("/categorias", categorias);
app.use("/docentes", docentes);
app.use("/login", login);


// Administrador
app.use("/admin/cursos" ,adminCursos);
app.use("/admin/docentes", docentes);

//app.use(/admin(istrador)?\cursos/, admin); // new Regexp('admin')
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
