// Hello World #2
document.getElementById("hello-js").innerHTML = "Hello World (in JavaScript)";

// Hello World #3
let hello3 = document.createElement("div");
hello3.innerHTML = "Hello World (in JavaScript)";
document.body.appendChild(hello3);

// Hello World #4
let hello4 = document.createElement("div");
hello4.innerText = "Hello World (in JavaScript)";
document.body.insertBefore(hello4, document.getElementById("hello-js-2"));

// Hello World #5
let hello5 = document.createTextNode("Hello World (in JavaScript)");
document.getElementById("hello-js-3").appendChild(hello5);

// Hello World #6
let hello6 = document.createElement("div");
hello6.textContent = "Hello World (in JavaScript)";
document.getElementById("hello-js-4").replaceWith(hello6);

// Hello World #7
let hello7 = document.createElement("div");
hello7.appendChild(document.createTextNode("Hello World "));
let span7 = document.createElement("span");
span7.textContent = "(in JavaScript)";
hello7.appendChild(span7);
document.body.insertBefore(hello7, document.getElementById("hello-js-5"));

// Hello World #8
let hello8 = document.createElement("div");
hello8.appendChild(document.createTextNode("Hello World "));
let strong8 = document.createElement("strong");
strong8.textContent = "(in JavaScript)";
hello8.appendChild(strong8);
document.getElementById("hello-js-6").appendChild(hello8);

// Hello World #9 (in CSS)
let hello9 = document.createElement("div");
hello9.classList.add("hello-css");
hello9.innerText = "Hello World (in JavaScript with CSS styling)";
document.body.appendChild(hello9);

// Hello World #10 (in CSS)
let hello10 = document.createElement("div");
hello10.classList.add("hello-css");
hello10.innerText = "Hello World (in JavaScript with CSS styling)";
document.body.insertBefore(hello10, document.getElementById("hello-js-8").nextSibling);