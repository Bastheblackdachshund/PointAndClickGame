//text
document.getElementById("mainTitle").innerText = "Point & Click Adventure";

//game window reference
const gameWindow = document.getElementById("gameWindow");

//main character
const maincharacter = document.getElementById("maincharacter");
const offsetcharacter = 32;
const sign = document.getElementById("sign");

//inventory
const inventorybox = document.getElementById("inventoryBox");
const inventoryList = document.getElementById("inventoryList");


gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    console.log(e.target.id);
    maincharacter.style.left = x - offsetcharacter + "px";
    maincharacter.style.top = y - offsetcharacter + "px";

    switch (e.target.id) {
        case "door1":
            maincharacter.style.backgroundColor = "#452c7c"
            door1.style.opacity = 0.5;
            door2.style.opacity = 1;
            if (document.getElementById("key1") !== null) {
                document.getElementById("key1").remove();
                console.log("keyfound");
                const keyElement = document.createElement("li");
                keyElement.id = "invskey";
                keyElement.innerText = "SilverKey";
                inventoryList.appendChild(keyElement);
            }

            break;
        case "door2":
            if (document.getElementById("invbkey") == null) {

            }
            else {
                maincharacter.style.backgroundColor = "#452c7c"
                door2.style.opacity = 0.5;
            }
            break;
        case "key2":
            if (document.getElementById("key2") !== null) {
                document.getElementById("key2").remove();
                console.log("keyfound");
                const keyElement = document.createElement("li");
                keyElement.id = "invbkey";
                keyElement.innerText = "BronzeKey";
                inventoryList.appendChild(keyElement);
            }

            break;


        case "sign":
            maincharacter.style.backgroundColor = "#452c7c";
            sign.style.opacity = 0.2;
            door1.style.opacity = 1;
            door2.style.opacity = 1;
            break;

        default:
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            door2.style.opacity = 1;
            maincharacter.style.backgroundColor = "#ffffff";
            break;
    }
}