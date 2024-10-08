function Nota(name,type) {
    this.name = name;
    this.type = type;
}

var arrayCerca=[]

function addCerca(Nota) {
    arrayCerca.push(Nota)
}

var nota1= new Nota("DO","");
var nota2= new Nota("DO","");

addCerca(nota1)
addCerca(nota2)

console.log(arrayCerca)

let partituras = [
    {
        name: "happy_birthday",
        notes: [
            new Nota("DO", ""), new Nota("DO", ""), new Nota("RE", ""), new Nota("DO", ""),
            new Nota("FA", ""), new Nota("MI", ""), new Nota("DO", ""), new Nota("DO", ""),
            new Nota("RE", ""), new Nota("DO", ""), new Nota("SOL", ""), new Nota("FA", "")
        ]
    }
];

function isSubArray(bigArray, subArray) {
    for (let i = 0; i <= bigArray.length - subArray.length; i++) {
        let match = true;
        for (let j = 0; j < subArray.length; j++) {
            if (bigArray[i + j].name !== subArray[j].name || bigArray[i + j].type !== subArray[j].type) {
                match = false;
                break;
            }
        }
        if (match) return true;
    }
    return false;
}

function cercador() {
    for (let i = 0; i < partituras.length; i++) {
        if (isSubArray(partituras[i].notes, arrayCerca)) {
            console.log(`¡Coincidencia encontrada en la partitura ${partituras[i].name}!`);
            return;
        }
    }
    console.log("No se encontró ninguna coincidencia.");
}

cercador();


