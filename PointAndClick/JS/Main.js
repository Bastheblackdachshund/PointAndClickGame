//text
document.getElementById("mainTitle").innerText = "Point & Click Adventure";

//game window reference
const gameWindow = document.getElementById("gameWindow");

//main character
const maincharacter = document.getElementById("maincharacter");
const offsetcharacter = 136;
const sign = document.getElementById("sign");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.top
    var y = e.clientY - rect.top
    console.log(e.target.id);
    maincharacter.style.left = x - offsetcharacter + "px";
    maincharacter.style.top = y - offsetcharacter + "px";

    switch (e.target.id) {
        case "door1":
            maincharacter.style.backgroundColor = "#452c7c";
            door1.style.opacity = 0.2;
            sign.style.opacity = 1;
            break;

        case "sign":
            maincharacter.style.backgroundColor = "#452c7c";
            sign.style.opacity = 0.2;
            door1.style.opacity = 1;
            break;

        default:
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            maincharacter.style.backgroundColor = "#ffffff";
            break;
    }
}