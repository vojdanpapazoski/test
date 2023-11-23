const express = require('express');
const dotenv = require('dotenv');
const jwt = require('express-jwt');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const db = require('./models/db/database.js');
const academy = require('./controllers/academiesHandler');
const course = require('./controllers/coursesHandler');
const auth = require('./controllers/authHandler');
const view = require("./controllers/viewHandler");
dotenv.config();

const app = express();
db.init();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));

app.use(
  jwt.expressjwt({
    algorithms: ["HS256"],
    secret: process.env.JWT_SECRET,
    getToken: (req) => {
      let token = null;

      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        token = req.headers.authorization.split(" ")[1];
      } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
      }
      console.log('Token:', token);
      return token;
    },
  }).unless({
    path: [
      "/register",
      "/login",
      "/test",
      "/favicon.ico"
    ],
  })
);
  
app.get("/test", view.test);
app.post('/register', auth.register )
app.post('/login', auth.login )

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
    

    
