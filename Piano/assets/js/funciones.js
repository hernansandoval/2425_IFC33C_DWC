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

var happy_birthday = [("DO",""),("DO","")]

function cercador(arrayCerca,happy_birthday) {
    for (var i = 0;arrayCerca.lenght > i;i++) {
        for (var j = 0;happy_birthday.lenght > j;j++) {
            if (arrayCerca[i] = happy_birthday[j]){
                console.log(happy_birthday)
            }
        }
    }
}


