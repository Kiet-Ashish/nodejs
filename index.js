const express = require("express");
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.set('views', './views');
app.set("view engine", "ejs");
const indexRoute = require("./routes/index");
const educationRoute = require("./routes/education");
const experienceRoute = require("./routes/experience");
const projectRoute = require("./routes/project");
const contactRoute = require("./routes/contact");


app.use('/education', educationRoute);
app.use('/experience', experienceRoute);
app.use('/project', projectRoute);
app.use('/contact', contactRoute);
app.use('/', indexRoute);

app.use((req, res, next) =>{
    res.status(404).render('404', {
        home: false,
        education: false,
        experience: false,
        contact: false,
        project: false
    });
});


app.listen(process.env.PORT || 3000);


