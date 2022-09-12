const pizzas = [
    {
        nombre: "Super Muzarella",
        id: 1,
        ingredientes: [`queso muzzarella`, `salsa de tomate con orégano`],
        aceitunas: true,
        precio: 850,
    },
    {
        nombre: "Super Primavera",
        id: 2,
        ingredientes: [`queso muzzarella`,`jamón`, `tomate`, `huevo`, `salsa de tomate con orégano`],
        aceitunas: true,
        precio: 1000,
    
    },
    {
        nombre: "Super Americana",
        id: 3,
        ingredientes: [`queso cheddar`,`bacon`,`huevo frito`, `salsa barbacoa`],
        aceitunas: false,
        precio: 1000,
    },
    {
        nombre: "Super Rúcula",
        id: 4,
        ingredientes: [`queso muzzarella`,`rúcula`, `aceite de oliva`, `salsa de tomate con orégano`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Morrón",
        id: 5,
        ingredientes: [`queso muzzarella`,`morrón rojo`, `salsa de tomate con orégano`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Cuatro Quesos",
        id: 6,
        ingredientes: [`queso muzzarella`,`queso gorgonzola`, `queso fontina`, `queso parmesano`, `salsa de tomate con orégano`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Napolitana",
        id: 7,
        ingredientes: [`queso muzzarella`,`tomate`, `huevo duro trozado`, `salsa de tomate con orégano`],
        aceitunas: false,
        precio: 1000,
    },
    {
        nombre: "Super Especial",
        id: 8,
        ingredientes: [`queso muzzarella`,`jamón`, `huevo duro trozado`, `salsa de tomate con orégano`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Palmitos",
        id: 9,
        ingredientes: [`queso muzzarella`,`palmitos`, `salsa de tomate con orégano`],
        aceitunas: true,
        precio: 1000,
    },
    {
        nombre: "Super Ananá",
        id: 10,
        ingredientes: [`queso muzzarella`,`ananá`, `salsa de tomate con orégano`],
        aceitunas: true,
        precio: 1000,
    }
];

//-----------------------------------------------//

//Punto A

const imparId = pizzas.filter(pizzas => pizzas.id % 2 == 1)
imparId.forEach((pizzas) => {
    console.log (`La pizza ${pizzas.nombre} tiene un número de ID impar`)
}
)

//-----------------------------------------------//

//Punto B

const valorMenosA600Pesos = (pizzas, cantidadDePizzas) => pizzas.precio < cantidadDePizzas

const pizzaConValorMenorA600Pesos = (precio) => 
    pizzas.some( pizzas => valorMenosA600Pesos(pizzas, precio))
    ? console.log (`Hay pizzas que valen menos de $${precio} pesos`)
    : console.log (`¡Oh no! ¡Disculpanos! Todavía no tenemos pizzas que tengan un precio menor a $${precio} pesos`) // (Usando operadores ternarios)
    pizzaConValorMenorA600Pesos(600);

//-----------------------------------------------//

//Punto C

const pizzasConSusPrecios = pizzas.filter ( (pizzas) => {
    return { ...pizzas, precio: pizzas.precio}
}
)
 pizzasConSusPrecios.forEach((pizzas) => {
    console.log(`La pizza ${pizzas.nombre} tiene un precio de $${pizzas.precio} pesos`)
 }
 )

//-----------------------------------------------//

//Punto D

const varianteDePizzasConSusIngredientes = pizzas.filter ((pizzas) =>
    pizzas.nombre && pizzas.ingredientes
)

varianteDePizzasConSusIngredientes.forEach((pizzas) => {
    console.log (`La pizza ${pizzas.nombre} tiene los siguientes ingredientes: ${pizzas.ingredientes}`)
}
)
