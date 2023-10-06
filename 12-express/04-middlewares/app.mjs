import express from "express";
import morgan from "morgan";

const app = express();

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// };
// app.get('/',logger , myFn, ...);
// app.use(logger, (req, res, next) => res.send("This is express server"));

// Logs info about the request
app.use(morgan("tiny"));
// convert JSON data in JS Object in POST, PUT, PATCH requests
app.use(express.json());
// convert form data in JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   // Do similar thing as express.urlencoded()
//   if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
//     let data = "";
//
//     req.on("data", (chunk) => (data += chunk.toString()));
//     req.on("end", () => {
//       const parsedFormData = querystring.parse(data);
//
//       req.body = parsedFormData;
//
//       next();
//     });
//   } else if (req.headers["content-type"] === "application/json") {
//     // Do similar thing as express.json()
//     app.use((req, res, next) => {
//       let data = "";
//       req.on("data", (chunk) => (data += chunk));
//       req.on("end", () => {
//         req.body = JSON.parse(data);
//
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });

app.use((req, res, next) => {
  console.log(req.body);
  return res.send("This is express server");
});

app.listen(5005, () => console.log("Server is listening on port 5005"));
