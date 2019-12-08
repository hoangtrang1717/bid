import { Phone } from "../../../data/Data.js";

function createProduct() {
  var cardDeck = document.getElementById("cardDeck");

  for (var i = 0; i < 5; i++) {
    var card = document.createElement("div");
    card.className = "card"
    card.style.margin = "1em";
    var link = document.createElement("a");
    link.id = "productLink";
    link.href = "javascript:sendId(" + i.toString() + ",0)";
    var img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "https://i.pravatar.cc/300"
    img.alt = "...";
    img.style.width = "100%";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var name = document.createElement("h5");
    name.className = "card-title";
    name.textContent = "Hoàng Trang";
    var pDate = document.createElement("p");
    pDate.className = "card-text";
    var smallDate = document.createElement("h6");
    smallDate.className = "text-muted";
    smallDate.textContent = "Bidder";
    pDate.appendChild(smallDate);
    cardBody.appendChild(name);
    cardBody.appendChild(smallDate);
    card.append(img);
    card.append(cardBody);
    link.append(card);
    cardDeck.appendChild(link);
  }

  var cardDeck = document.getElementById("cardDeck2");

  for (var i = 0; i < 5; i++) {
    var card = document.createElement("div");
    card.className = "card"
    card.style.margin = "1em";
    var link = document.createElement("a");
    link.id = "productLink";
    link.href = "javascript:sendId(" + i.toString() + ",0)";
    var img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "../../../data" + Phone[i].img1;
    img.alt = "...";
    img.style.width = "100%";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var name = document.createElement("h5");
    name.className = "card-title";
    name.textContent = Phone[i].title;
    var priceBlock = document.createElement("div");
    priceBlock.id = "priceBlock";
    var priceTitle = document.createElement("div");
    priceTitle.id = "priceTitle";
    var priceText = document.createElement("div");
    priceText.id = "priceText";
    var priceNow = document.createElement("h6");
    priceNow.textContent = "Giá hiện tại:";
    var priceNowValue = document.createElement("h6");
    priceNowValue.textContent = Phone[i].price;
    priceNowValue.style.color = "red";
    var priceBuy = document.createElement("h6");
    priceBuy.textContent = "Giá mua ngay:";
    var priceBuyValue = document.createElement("h6");
    priceBuyValue.textContent = Phone[i].price;
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
    cardDeck2.appendChild(link);
  }

  var cardDeck = document.getElementById("cardDeck3");

  for (var i = 0; i < 5; i++) {
    var card = document.createElement("div");
    card.className = "card"
    card.style.margin = "1em";
    var link = document.createElement("a");
    link.id = "productLink";
    link.href = "javascript:sendId(" + i.toString() + ",0)";
    var img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "../../../data" + Phone[i].img1;
    img.alt = "...";
    img.style.width = "100%";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var name = document.createElement("h5");
    name.className = "card-title";
    name.textContent = Phone[i].title;
    var priceBlock = document.createElement("div");
    priceBlock.id = "priceBlock";
    var priceTitle = document.createElement("div");
    priceTitle.id = "priceTitle";
    var priceText = document.createElement("div");
    priceText.id = "priceText";
    var priceNow = document.createElement("h6");
    priceNow.textContent = "Giá hiện tại:";
    var priceNowValue = document.createElement("h6");
    priceNowValue.textContent = Phone[i].price;
    priceNowValue.style.color = "red";
    var priceBuy = document.createElement("h6");
    priceBuy.textContent = "Giá mua ngay:";
    var priceBuyValue = document.createElement("h6");
    priceBuyValue.textContent = Phone[i].price;
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
    cardDeck3.appendChild(link);
  }
}

createProduct();
