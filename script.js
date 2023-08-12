"use strict";

/*define variables*/
let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let bg = document.getElementById("bg");
let btn = document.getElementById("btn");
let support = document.querySelector(".support");
let xModal = document.querySelector(".close");
let select = document.querySelectorAll(".select");
let submit = document.querySelectorAll(".submit");
let bkmk = document.getElementById("Bookmark");
let rBtn = document.querySelectorAll(".rewardBtn");
let svg = document.getElementById("svg");
let book = document.getElementById("book");
let totAmt = document.getElementById("totAmt");
let backers = document.getElementById("backers");
let popUp = document.querySelector(".popUp");
let ryokai = document.getElementById("ryokai");
let left = document.querySelectorAll("h4");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
  bg.classList.toggle("active");

  if (line1.classList.contains("active")) {
    line1.classList.add("rest");
    line3.classList.add("rest");
  }
});

nav.addEventListener("click", () => {
  nav.classList.remove("active");
  line1.classList.remove("active");
  line2.classList.remove("active");
  line3.classList.remove("active");
  bg.classList.remove("active");
});

bg.addEventListener("click", () => {
  nav.classList.remove("active");
  line1.classList.remove("active");
  line2.classList.remove("active");
  line3.classList.remove("active");
  bg.classList.remove("active");
  support.classList.remove("active");
  select.forEach((items) => {
    items.classList.remove("active");
  });

  if (line1.classList.contains("active")) {
    line1.classList.add("rest");
    line3.classList.add("rest");
  }
});

bkmk.addEventListener("click", () => {
  svg.src = "images/icon-bookmarked.svg";
  book.innerHTML = "Bookmarked";
  bkmk.classList.add("visited");
});

btn.addEventListener("click", () => {
  support.classList.add("active");
  bg.classList.add("active");
});

xModal.addEventListener("click", () => {
  support.classList.remove("active");
  bg.classList.remove("active");
  select.forEach((items) => {
    items.classList.remove("active");
  });
});

select.forEach((item) => {
  item.addEventListener("click", (event) => {
    select.forEach((items) => {
      items.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  });
});

submit.forEach((item, i) => {
  item.addEventListener("click", () => {
    support.classList.remove("active");
    bg.classList.remove("active");
    let amount = Number(item.previousElementSibling.value);
    let total = Number(
      totAmt.firstChild.nodeValue.split("$").at(-1).split(",").join("")
    );
    total += amount;
    totAmt.firstChild.nodeValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(total);

    let backed = Number(backers.firstChild.nodeValue.split(",").join(""));
    backed += 1;
    backers.firstChild.nodeValue = new Intl.NumberFormat("en-US").format(
      backed
    );

    popUp.classList.add("active");
    bg.classList.add("active");

    let rem = Number(left[i - 1].firstChild.nodeValue);
    rem -= 1;
    left[i - 1].firstChild.nodeValue = rem + " ";
    left[i + 2].firstChild.nodeValue = rem + " ";
  });
});

ryokai.addEventListener("click", () => {
  popUp.classList.remove("active");
  bg.classList.remove("active");
  select.forEach((items) => {
    items.classList.remove("active");
  });
});

rBtn.forEach((item) => {
  item.addEventListener("click", () => {
    support.classList.add("active");
    bg.classList.add("active");
    if (item == rBtn[0]) {
      select[1].classList.add("active");
    } else {
      select[2].classList.add("active");
    }
  });
});
