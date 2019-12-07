import { Phone, Laptop } from "../../data/Data.js";

function getData() {
  var GET = {};
  var queryString = window.location.search.replace(/^\?/, "");
  queryString.split(/\&/).forEach(function(keyValuePair) {
    var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
    var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
    GET[paramName] = paramValue;
  });
  var id = parseInt(GET["id"]);
  createProduct(GET["type"])
  if (GET["type"] === "0") {
    var name = document.getElementById("productName");
    name.innerText = Phone[id].title;
    var price = document.getElementById("priceNow");
    price.innerText = Phone[id].price;
    price = document.getElementById("priceBuy");
    price.innerText = Phone[id].price;
    price = document.getElementById("priceHighest");
    price.innerText = Phone[id].price;
    var img = document.getElementById("pImg1");
    img.src = "../../data" + Phone[id].img1;
    img = document.getElementById("pImg2");
    img.src = "../../data" + Phone[id].img2;
    img = document.getElementById("pImg3");
    img.src = "../../data" + Phone[id].img3;
    var des = document.getElementById("desTxt");
    console.log(Phone[id].description)
    des.innerText = Phone[id].description;
  } else {
    var name = document.getElementById("productName");
    name.innerText = Laptop[id].title;
    var price = document.getElementById("priceNow");
    price.innerText = Laptop[id].price;
    price = document.getElementById("priceBuy");
    price.innerText = Laptop[id].price;
    price = document.getElementById("priceHighest");
    price.innerText = Laptop[id].price;
    var img = document.getElementById("pImg1");
    img.src = "../../data" + Laptop[id].img1;
    img = document.getElementById("pImg2");
    img.src = "../../data" + Laptop[id].img2;
    img = document.getElementById("pImg3");
    img.src = "../../data" + Laptop[id].img3;
    var des = document.getElementById("desTxt");
    
    des.innerText = Laptop[id].description;
  }
}

function createProduct(type) {
  var Data = [];
  if (type === "0") {
    Data = Phone;
  } else {
    Data = Laptop;
  }
  var cardDeck = document.getElementById("cardDeck");

  for (var i = 0; i < 5; i++) {
    var card = document.createElement("div");
    card.className = "card";
    card.style.margin = "1em";
    var link = document.createElement("a");
    link.id = "productLink";
    link.href = "javascript:sendId(" + i.toString() + ",0)";
    var img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "../../data" + Data[i].img1;
    img.alt = "...";
    img.style.width = "100%";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var name = document.createElement("h5");
    name.className = "card-title";
    name.textContent = Data[i].title;
    var priceBlock = document.createElement("div");
    priceBlock.id = "priceBlock";
    var priceTitle = document.createElement("div");
    priceTitle.id = "priceTitle";
    var priceText = document.createElement("div");
    priceText.id = "priceText";
    var priceNow = document.createElement("h6");
    priceNow.textContent = "Giá hiện tại:";
    var priceNowValue = document.createElement("h6");
    priceNowValue.textContent = Data[i].price;
    priceNowValue.style.color = "red";
    var priceBuy = document.createElement("h6");
    priceBuy.textContent = "Giá mua ngay:";
    var priceBuyValue = document.createElement("h6");
    priceBuyValue.textContent = Data[i].price;
    priceBuyValue.style.color = "red";
    var pDate = document.createElement("p");
    pDate.className = "card-text";
    var smallDate = document.createElement("small");
    smallDate.className = "text-muted";
    smallDate.textContent = "Đăng ngày 03/12/2019";
    pDate.appendChild(smallDate);
    priceTitle.appendChild(priceNow);
    priceTitle.appendChild(priceNowValue);
    priceText.appendChild(priceBuy);
    priceText.appendChild(priceBuyValue);
    priceBlock.appendChild(priceTitle);
    priceBlock.appendChild(priceText);
    cardBody.appendChild(name);
    cardBody.appendChild(priceBlock);
    cardBody.appendChild(smallDate);
    card.append(img);
    card.append(cardBody);
    link.append(card);
    cardDeck.appendChild(link);
  }
}

getData();
