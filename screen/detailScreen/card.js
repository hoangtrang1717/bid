import { Phone } from '../../data/Data.js'


function getData() {
    var img = document.createElement("img");
    img.src = "../../data" + String(Phone[0].img1);
    img.setAttribute("height", "55%");
    img.setAttribute("width", "80%");
    document.getElementById("card2").appendChild(img);
    console.info(Phone)
}
getData()