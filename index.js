let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");
let countStr = "";

function increCount(){
    count = count + 1;
    countEl.textContent = count;
}

function saveCount(){
    countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
