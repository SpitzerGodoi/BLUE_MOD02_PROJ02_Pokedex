require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
let alerta = "";

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    numero: "1",
    nome: "Bulbasaur",
    tipo: ["Grama", "Veneno"],
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
    altura: "Altura: 0.7 m",
    peso: "6.9 kg",
    categoria: "Semente",
    habilidade: "Superar",
  },

  {
    id: 2,
    numero: "2",
    nome: "Charmander",
    tipo: ["Fogo"],
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    altura: "0.6 m",
    peso: "8.5 kg",
    categoria: "Lagarto",
    habilidade: "Chama",
  },

  {
    id: 3,
    numero: "3",
    nome: "Squirtle",
    tipo: ["Água"],
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao:
      "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    altura: "0.5 m",
    peso: "Peso: 9.0 kg",
    categoria: "Tartaruga Minúscula",
    habilidade: "Torrente",
  },
];

app.get("/", (req, res) => {
  setTimeout(() => {
    alerta = "";
  }, 1000);
  res.render("index", { pokedex, alerta });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", { pokedex });
});

app.post("/cadastro", (req, res) => {
  const pokemon = req.body;
  let tipo = pokemon.tipo.split(", ");
  pokemon.tipo = tipo;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  alerta = "Pokémon cadastrado com sucesso.";
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex.find((pokemon) => pokemon.id == id);
  res.render("detalhes", { pokemon });
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
