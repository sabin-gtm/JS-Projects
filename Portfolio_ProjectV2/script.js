let move = document.querySelector(".surface");
let leftmove = document.querySelector(".left");
let rightmove = document.querySelector(".right");
let car = document.querySelector(".car");

leftmove.addEventListener("click", function () {
    move.className = "surface moveLeft";
    car.classList.add("suspension");
    setTimeout(function () {
        move.classList.remove("moveLeft");
        car.classList.remove("suspension");
    }, 3000);
});

rightmove.addEventListener("click", function () {
    move.className = "surface moveRight";
    car.classList.add("suspension");
    setTimeout(function () {
        move.classList.remove("moveRight");
        car.classList.remove("suspension");
    }, 3000);
});
