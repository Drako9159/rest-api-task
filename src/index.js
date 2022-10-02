import app from "./app";
import "./database";

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
//npm i express
//npm i @babel/core @babel/preset-env @babel/node @babel/cli -D
//npm i mongoose
//npm i morgan// para ver las peticiones que se hacen al servidor
//npm i nodemon -D
//npm i dotenv
//npm i cors// para que el servidor pueda ser accedido desde cualquier lugar
//npm i mongoose-paginate-v2// para paginar los resultados
