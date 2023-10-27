// hasId
// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe si dicho objeto
// tiene una propiedad llamada id (debe devolver booleano true / false ).
// TIP: No accedas a 'id' con punto (.) o con corchetes ([]).
const object1 = {
    "id": 1679856,
    "first_name": "Harvey",
    "last_name": "Girardin",
    "email": "hgirardin0@sakura.ne.jp"
}
const object2 = {
    "id": null,
    "first_name": "Obadiah",
    "last_name": "Arpino",
    "email": "oarpino1@house.gov"
}
const object3 = {
    "first_name": "Birch",
    "last_name": "Burdas",
    "email": "bburdas2@cpanel.net"
}
const object4 = {
    "id": undefined,
    "first_name": "Urbano",
    "last_name": "Aiers",
    "email": "uaiers3@xrea.com"
}

const hasId = ({id}) => id? true : false;

console.log(hasId(object1));
console.log(hasId(object2));
console.log(hasId(object3));
console.log(hasId(object4));

// head
// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
// TIP: No utilices el corchete ([]) para acceder a la posición 0.
array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array2 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

const head = ([first]) => first;

console.log(head(array1));
console.log(head(array2));

// tail
// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array
// con todos los elementos menos el primero.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
const tail = ([first, ...rest]) => rest;

console.log(tail(array1));
console.log(tail(array2));

// swapFirstToLast
// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva un
// nuevo array donde el primer elemento ha sido colocado en la última posición.
// TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
const swapFirstToLast = ([first, ...rest]) => [...rest, first]

console.log(swapFirstToLast(array1));
console.log(swapFirstToLast(array2));

// excludeId
// Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho
// objeto clonado excepto la propiedad id si la hubiera.
// TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.
const excludeId = ({id, ...rest}) => rest;

console.log(excludeId(object1));
console.log(excludeId(object2));
console.log(excludeId(object3));
console.log(excludeId(object4));

// wordsStartingWithA
// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada,
// devuelva otro array filtrado con aquellas palabras que empiecen por a.
// TIP: No utilices bucles.
const randomNames = ["Alicia", "Adrián", "Verónica", "Lucía", "Antonia", "Sara", "María", "Ana"];

const wordsStartingWithA = (list) => list.filter(elements => elements.toLowerCase()[0] == "a");

console.log (wordsStartingWithA(randomNames));

// concat
// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y
// devuelva otro string con la concatenación de todos, separados por | .
// TIP: No utilices bucles.
// const concat = (...strings) => strings.reduce((list, element) => list + element + " | ", "");
const concat = (...strings) => strings.join(" | ");

console.log(concat("Hola", "Adiós"));
console.log(concat("Buenos días", "Buenas tardes", "Buenas noches"));

// multArray
// Implementa una función llamada multArray que admita un array de números ( arr ) y otro parámetro
// que sea un número ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
// TIP: No utilices bucles.
const multArray = (arr, x) => arr.map(element => (element * x));

console.log(multArray(array1, 10));

// calcMult
// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva
// como resultado el producto de todos ellos.
// TIP: No utilices bucles.
const calcMult = (...numbers) => numbers.reduce((result, items)=> result + items, 0);

console.log(calcMult(1,2,3,4,5));
console.log(calcMult(10, 20));

// EJERCICIOS EXTRA

// swapFirstSecond
// Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array
// donde el primer elemento ha sido intercambiado por el segundo.
// TIP: No modifiques el array de entrada original.
const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];

console.log(swapFirstSecond(array1));

// firstEqual
// Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como
// un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
// TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).
const firstEqual = (char, ...strings) => strings.every(([element]) => [char] == element? true : false);

console.log(firstEqual("p", "palmera", "película", "paz"));
console.log(firstEqual("r", "ratón", "queso", "trampa"));

// longest
// Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.
// TIP: No utilices bucles. Hay diversas formas de hacerlo.
const longest = (...strings) => {
    strings.sort((a,b) => a.length > b.length ? -1 : 1);
    [longestString, ...rest] = strings;
    return longestString;
};

console.log(longest("ocho", "ochenta", "ochocientos"));
console.log(longest("París", "Buenos Aires", "Madrid", "Londres"));

//  searchInStringV1
// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter,
// devuelva cuantas veces aparece dicho carácter en el string.
// TIP: No utilices bucles.
// TIP: Convierte el string a un array mediante Array.from() .
const searchInStringV1 = (char, string) => (Array.from(string)).reduce((sumChar, characters) => sumChar + ((characters == char)? 1 : 0), 0);

console.log(searchInStringV1("a", "calabaza"));
console.log(searchInStringV1("s", "patata"));

//  searchInStringV2
// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar reduce .
// TIP: No utilices bucles.
// TIP: Convierte el string a un array mediante Array.from() .
const searchInStringV2 = (char, string) => {
    let result = 0;
    (Array.from(string)).filter(characters => characters == char).forEach(item => result++)
    return result;
};

console.log(searchInStringV2("a", "calabaza"));
console.log(searchInStringV2("s", "patata"));

//  sortCharacters
// Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.
// TIP: No utilices bucles. No modifiques el string original de entrada.
// TIP: Convierte el string a un array mediante Array.from() .
const sortCharacters = (string) => (Array.from(string)).sort((a,b) => a > b? 1 : -1);

console.log(sortCharacters("azjklmeit"));

// shout
// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
// concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
// TIP: No utilices bucles.
const shout = (...strings) => strings.map(([firstLetter,...rest]) => ("¡" + (firstLetter.toUpperCase() + rest.join("")) + "!")).join();

console.log(shout("zorro","oveja","mariposa", "leopardo", "koala", "abeja"));

//  Lista de la compra
// Dada la siguiente lista de la compra:
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const addVat = (vat,list) => list.map(obj => ({...obj, vat}));

const listWithVat = addVat(0.21, shoppingCart);

console.log(listWithVat);

// B. Ordena la lista de más a menos unidades.
const sortByUnits = (list) => list.sort((a,b)=> (a.units > b.units? -1 : 1));

console.log(sortByUnits(listWithVat));

// C. Obtén el subtotal gastado en droguería.
const subtotalDrugs = (list) => list.filter(item => item.category == "Droguería").reduce((acc, item) => acc + (item.price * item.units), 0);

console.log(subtotalDrugs(listWithVat));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría. TIP: No utilices bucles.

const totalShoppingCart = (list) => list.sort((a,b) => a.category > b.category? 1 : -1).forEach(item => console.log(item.product + " -> " + ((item.price * item.units) * (1 + item.vat)).toFixed(2) + "€"))

totalShoppingCart(listWithVat);