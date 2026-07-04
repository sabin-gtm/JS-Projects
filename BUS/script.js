let land = document.querySelector(".land");
let leftbtn = document.querySelector(".btn1");
let rightbtn = document.querySelector(".btn2");

let page = 1;
let scroll = document.querySelector("")

    leftbtn.addEventListener("click", () => {
        land.className = 'land moveLeft';
        setTimeout(() => land.classList.remove('moveLeft'), 3000);
    });
 
    rightbtn.addEventListener("click", () => {
        land.className = 'land moveRight';
        setTimeout(() => land.classList.remove('moveRight'), 3000);
    });

    if (page > 0 && page < 4) {
        switch (page) {
            case 1:

                break;
            case 2:
                break;
            case 3:
                break;
        }
    } else {
        console.warn("We have 3 Pages Only.");
    }