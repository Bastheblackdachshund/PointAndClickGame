//text
document.getElementById("mainTitle").innerText = "Point & Click Adventure";

//game window reference
const gameWindow = document.getElementById("gameWindow");

gameState = {
    "unlocked1": false,
    "inventory": [
    ]
}
//main character
const maincharacter = document.getElementById("maincharacter");
const offsetcharacter = 15;
const sign = document.getElementById("sign");
//speechbubbles
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");
const counteravatar = document.getElementById("counterAvatar");
//inventory
const inventorybox = document.getElementById("inventoryBox");
const inventoryList = document.getElementById("inventoryList");
const sec = 1000;

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    console.log(e.target.id);
    if (e.target.id == "maincharacter") {
    }
    else {
        maincharacter.style.left = x - offsetcharacter + "px";
        maincharacter.style.top = y - offsetcharacter + "px";
    }

    switch (e.target.id) {
        case "door1":
            door1.style.opacity = 0.5;
            door2.style.opacity = 1;
            sign.style.opacity = 1;
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
                sign.style.opacity = 1;
                door1.style.opacity = 1;
                console.log('1')
            }
            else if (gameState.unlocked1 == false) {
                gameState.unlocked1 = true;
                door2.style.opacity = 0.5;
                sign.style.opacity = 1;
                door1.style.opacity = 1;
                keyElement.id = "invbkey".remove();
                keyElement.innerText = "BronzeKey".remove();
                // remove item from inv
                console.log('2')

            }
            else {
                door2.style.opacity = 0.5;
                sign.style.opacity = 1;
                door1.style.opacity = 1;
                console.log('3')

            }
            break;
        case "key2":
            console.log("keyfound");
            document.getElementById("key2").remove();
            const keyElement = document.createElement("li");
            keyElement.id = "invbkey";
            keyElement.innerText = "BronzeKey";
            inventoryList.appendChild(keyElement);

            break;


        case "sign":
            sign.style.opacity = 0.5;
            door1.style.opacity = 1;
            door2.style.opacity = 1;
            break;

        case "statue":
            showme(mainCharacterSpeech, "Hello Mister Maya Moon Man Sir Could You Tell Me How I Can Get Out Of Here?")
            setTimeout(function () { counteravatar.style.opacity = 1; }, 5 * sec);
            setTimeout(showme, 5 * sec, counterSpeech, "⍦⌾⌰ ⍧⍲☊⍑ ⌰☊⟄ℇ☈⎎⍑⍲☊⟄ ⍓ℇ ⏙⟟⍑ℍ⌾⌰⍑ ⍑ℍ⟟⎎ ⟄ℇ⍻⟟⍧ℇ ℍℇ☈ℇ ℍ⍲⍻ℇ ⍓⍦ ⌾⎾⟄ ⌾☊ℇ");
            setTimeout(showme, 10 * sec, mainCharacterSpeech, "oh is oke");
            setTimeout(function () { counteravatar.style.opacity = 0; }, 15 * sec);
            break;

        default:
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            door2.style.opacity = 1;
            break;
    }
}

/**
 * @param {getElementById} targetBalloon
 * @param {string} message
 */
function showme(targetBalloon, message) {
    targetBalloon.style.opacity = "1";
    targetBalloon.innerText = message
    setTimeout(hideme, 5 * sec, targetBalloon);
}

setTimeout(showme, 0 * sec, maincharacterSpeech, "*speaks spanish*");

/**
 * 
 * @param {getElementById} targetBalloon 
 */
function hideme(targetBalloon) {
    targetBalloon.style.opacity = "0";
}
/**
* function to change inventory
* @param {string} itemName 
* @param {string} action "add", "delete"
* @returns 
*/
function changeInventory(itemName, action) {
    if (itemName == null || action == null) {
        console.log('wrong parameters given to changeInventory()');
        return
    }

    switch (action) {
        case 'add':
            gameState.inventory.push(itemName);
            break
        case 'delete':
            gameState.inventory.find(function (item, index) {
                if (item == itemName) {
                    var index = gameState.inventory.indexOf(item);
                    if (index !== -1) {
                        gameState.inventory.splice(index, 1);
                    }
                }
            })
            break

        default:
            break;
    }
    updateInventory(gameState.inventory, inventoryList);
}
