const Productos = ["Arroz", "Harina", "Manteca", "Mermelada", "Pan"]

Productos.push("Aceite de girasol")

console.log(Productos)

Productos.pop("Aceite de girasol")

console.log(Productos)

const listaPeliculas = [
    {nombre:"Avengers, Infinity War", director:"Anthony and Joe Russo", fecha:2018},
    {nombre:"Avengers, End Game", director:"Anthony and Joe Russo", fecha:2019},
    {nombre:"Spiderman: no way home", director:"Jon Watts", fecha:2021}
]

const nuevaLista = listaPeliculas.filter(obj => obj.fecha > 2010)

console.log(nuevaLista)

const director = listaPeliculas.map(obj => obj.director)
console.log(director)
const titulos = listaPeliculas.map(titulo=> titulo.nombre)
console.log(titulos)

const listaNueva = director.concat(titulos)
console.log(listaNueva)

console.log(...listaNueva)