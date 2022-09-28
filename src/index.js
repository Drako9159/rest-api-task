import app from "./app";
import "./database";

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
//npm i express
//npm i @babel/core @babel/preset-env @babel/node @babel/cli -D
//npm i mongoose
