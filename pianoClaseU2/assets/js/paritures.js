function popUp(url, w, h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url,'' , 'width='+w+', height='+h+', top='+top+', left='+left);
}


var partiturasList = [["Balanguera","es",""],["HB","en"," "],["MC","en"," "],["Sant Antoni","cat",""]]
var headerTable = ["Titol","Idioma Original","Accions"]

function generateTable() {
    const tabla = document.createElement("table");
    const tHead = document.createElement("thead");
    const tBody = document.createElement("tbody");

    tabla.setAttribute('class','m-4 w-3/4 mx-auto')
    tHead.setAttribute('class','bg-red-400')

    const rowH = document.createElement("tr");

    for (let i = 0; i < headerTable.length; i++) {
        const cell = document.createElement("th");
        cell.setAttribute('class','w-1/3 border-2 border-white text-center')
        const cellText = document.createTextNode(headerTable[i]);
        cell.appendChild(cellText);
        rowH.appendChild(cell);        
    }
   


    tHead.appendChild(rowH)
    

    
    for (let i = 0; i < partiturasList.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            cell.setAttribute('class','border-2 border-grey text-center')
            if (j === 2) {
                cell.innerHTML += '<button class="pr-1" onclick="editar()"><i class="fa-solid fa-pen-to-square"></i></button>Editar<button class="pl-8 pr-1" onclick="borrar()"><i class="fa-solid fa-rectangle-xmark"></i></button>Esborrar'
            }
            
            const cellText = document.createTextNode(partiturasList[i][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
    
        tBody.appendChild(row);
    }

    for (let i = 0; i < 100; i++) {
        const row = document.createElement("tr");
    
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            cell.setAttribute('class','border-2 border-grey text-center')
            if (j === 2) {
                cell.innerHTML += '<button class=" pr-1" onclick="editar()"><i class="fa-solid fa-pen-to-square"></i></button>Editar<button class="pl-8 pr-1" onclick="borrar()"><i class="fa-solid fa-rectangle-xmark"></i></button>Esborrar'
            }
            const cellText = document.createTextNode(partiturasList[3][j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
    
        tBody.appendChild(row);
    }
  
    tabla.appendChild(tHead)
    tabla.appendChild(tBody);
    document.body.appendChild(tabla);
}

function borrar() {
    let text;
    if (confirm("Vols borrar l'element 1?") == true) {
        text = "S'ha esborrat";
    } else {
        text = "No s'ha esborrat";
    }
    alert(text);
}

generateTable()