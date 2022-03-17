const texts = document.querySelector(".texts");
const secc1 = document.getElementById("secc1");
const secc2 = document.getElementById("secc2");
const secc3 = document.getElementById("secc3");
const secc4 = document.getElementById("secc4");
const secc5 = document.getElementById("secc5");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

//let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    //p.innerText = text;
    //texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes("Encender foco uno")|| text.includes('enciende foco uno')){
            secc1.style.background = "url(bulb_on.jpg)";
        }
        if(text.includes("Encender foco dos")|| text.includes('enciende foco dos')){
            secc2.style.background = "url(bulb_on.jpg)";
        }
        if(text.includes("Encender foco tres")|| text.includes('enciende foco tres')){
            secc3.style.background = "url(bulb_on.jpg)";
        }
        if(text.includes("Encender foco cuatro")|| text.includes('enciende foco cuatro')){
            secc4.style.background = "url(bulb_on.jpg)";
        }
        if(text.includes("Encender foco cinco")|| text.includes('enciende foco cinco')){
            secc5.style.background = "url(bulb_on.jpg)";
        }
        //p = document.createElement("p");
    }
    console.log(text);
})
recognition.addEventListener("end", () => {
    recognition.start();
})
  recognition.start();