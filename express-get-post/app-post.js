const express = require("express");
const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// ********* TO USE PARTIALS, WE HAVE TO REGISTER THEM FIRST: *********
hbs.registerPartials(path.join(__dirname, "views/partials"));

// ********* STATIC FILES ARE SERVED AUTOMATICALLY FROM THE 'public/' FOLDER:" *********
app.use(express.static(path.join(__dirname, "public")));

// showing what we get in the request object.W
app.get("/", (req, res) => {
  res.render("homepage");
});
// our not-quite-working post route
// app.post("/firstPost", (req, res) => {
//   const data = req.body.username;
//   console.log(data);
// });

app.post("/firstPost", (req, res) => {
  //we could write it like this
  console.log("req.body = ", req.body);
  // const firstName = req.body.firstName;
  // const surName = req.body.surName;
  // const email = req.body.email;
  // const username = req.body.username;

  // the same as 4 lines above

  // console.log("param = ", firstName);
  const { firstName, surName, email, username } = req.body;
  // sending the data?
  // res.send(`
  //   Your first name is ${firstName}
  //   Your surname is ${surName}
  //   Your email is ${email}
  //   Your username is ${username}
  // `);
  // res.render("newPage", { user: req.body });
  //   // doing more stuff!!
  const user = req.body;
  console.log(user);
  res.render("homepage", { user });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
