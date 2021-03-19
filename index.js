<<<<<<< HEAD
<<<<<<< HEAD
const  express = require('express');
const { restart } = require('nodemon');
const app = express();
const { pokemon } = require('./pokedex.json');

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido al Pokedex");
});

app.get('/pokemon/all', (req, res, next) => {
        res.status(200);
        res.send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) =>{
    const id = req.params.id - 1;
    if (id >= 0 && id <= 150) {
        res.status(200);
        res.send(pokemon[req.params.id - 1]);
    }
    else{
       res.status(404);
       res.send("Pokemon no encontrado");
    }
});

app.get('/pokemon/:name', (req, res, next) => { 
    const name  = req.params.name;
    for(i = 0; i < pokemon.length; i++) {
        if(pokemon[i].name == name) {
            res.status(200);
            res.send(pokemon[i]);
        }
    }
    res.status(404);
    res.send("Pokemon no encontrado");

});

app.listen(process.env.PORT || 3000, ()  => {
console.log("Server is running...");
=======
=======
const bodyParser = require('body-parser');
>>>>>>> 1d03374 (Commit message)
const  express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  return res.status(200).send("Bienvenido al Pokedex");
});

app.post("/pokemon/", (req, res, next) => {
    return res.status(200).send(req.body);
});

app.get('/pokemon', (req, res, next) => {
   return res.status(200).send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) =>{
    const id = req.params.id - 1;
   if (id >= 0 && id <= 150) {

    return res.status(200).send(pokemon[req.params.id - 1]);
   } 
    return res.status(404).send("Pokemon no encontrado");
});

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) => { 
    const name  = req.params.name;

    const pk = pokemon.filter((p) => {
     return (p.name.toUpperCase() == name.toUpperCase()) && p; 
});

    if (pk.length > 0) {
        return res.status(200).send(pk);
    } 
      
      return res.status(404).send("Pokemon no encontrado");
});

app.listen(process.env.PORT || 3000, ()  => {
<<<<<<< HEAD
console.log("Server is running...");
>>>>>>> 3bb3fcb (initial commit)
=======
    console.log("Server is running...");
>>>>>>> 1d03374 (Commit message)
});