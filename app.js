const express = require('express');
const dotenv = require('dotenv');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');

const db = require('./models/db/database.js');
const academy = require('./controllers/academiesHandler');
const course = require('./controllers/coursesHandler');
const regAndlogin = require('./controllers/authHandler');
dotenv.config();

const app = express();
db.init();

app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use(express.json());

app.use(
  jwt.expressjwt({
    algorithms: ["HS256"],
    secret: process.env.JWT_SECRET,
    getToken: (req) => {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      }
      if (req.cookies.jwt) {
        return req.cookies.jwt;
      }
      return null;
    },
  }).unless({
    path: [
      "/register", 
      "/login"
    ],
  })
);

app.post('/register', regAndlogin.register )
app.post('/login', regAndlogin.login )

app.post('/academies', academy.createAcademy);
app.get('/academies/:id', academy.getOneAcademy);
app.get('/academies', academy.getAllAcademies);
app.patch('/academies/:id', academy.updateAcademy);
app.delete('/academies/:id', academy.deleteAcademy);

app.post('/courses', course.createCourse);
app.get('/courses/:id', course.getOneCourse);
app.get('/courses', course.getAllCourses);
app.patch('/courses/:id', course.updateCourse);
app.delete('/courses/:id', course.deleteCourse);

app.listen(process.env.PORT, (err) => {
    err
    ? console.log(err)
    : console.log(`Server started at ${process.env.PORT}`);
});
    

    
