//text
document.getElementById("mainTitle").innerText = "Stranded";

//game window reference
const gameWindow = document.getElementById("gameWindow");

gameState = {
    "inside": false,
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

//KEYS
const key1 = document.getElementById("key1");
const key2 = document.getElementById("key2");

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
        case "shrineid":
            if (gameState.inside == true) {
                alert("Beam me up, Scotty");
                location.reload();
            }
            else { }
            break;
        case "door1open":
            if (gameState.unlocked1 == false) {
                // check if we have key
                if (document.getElementById("inv-Silver Key") !== null) {
                    //yes -> unlock door?
                    gameState.unlocked1 = true;
                    changeInventory('Silver Key', 'delete');
                    console.log('Door unlocked!');
                    door1open.style.opacity = 0;
                    inside.style.opacity = 1;
                    shrine.style.opacity = 1;
                    gameState.inside = true;

                } else {
                    //no -> alert 'door locked'
                    alert("Door is locked! You will need the silver key.");
                }
            } else {
                console.log('enter building');
                door1open.style.opacity = 0;
                inside.style.opacity = 1;
                shrine.style.opacity = 1;
                gameState.inside = true;
            }
            break;
        case "insideblock":
            if (gameState.inside == false) {
                inside.style.opacity = 0;
                shrine.style.opacity = 0;
            }
            else { inside.style.opacity = 1; shrine.style.opacity = 1; }
            break;
        case "key1":
            if (document.getElementById("inv-Bronze Key") !== null) {
                door1open.style.opacity = 1;
                inside.style.opacity = 0;
                shrine.style.opacity = 0;
                gameState.inside = false;
                console.log('Found key!');
                key1.remove();
                changeInventory('Bronze Key', 'delete');
                changeInventory('Silver Key', 'add');
                chestopen.style.opacity = 1;
            }
            else { alert("Chest is locked! find the key") }
            break;
        case "statue":
            showme(mainCharacterSpeech, "hello im lost here do you know how i could get back to my planet?")
            setTimeout(function () { counteravatar.style.opacity = 1; }, 5 * sec);
            setTimeout(showme, 5 * sec, counterSpeech, "I Am Groot (yes you must find the shrine in the temple with the closed door.)");
            setTimeout(function () { changeInventory('Bronze Key', 'add') }, 10 * sec);
            setTimeout(showme, 11 * sec, counterSpeech, "I Am Groot (i do not know how to open it but i do have a key for you.)");
            setTimeout(showme, 16 * sec, mainCharacterSpeech, "Thank you for the help.");
            setTimeout(function () { counteravatar.style.opacity = 0; }, 16 * sec);
            break;

        default:
            door1open.style.opacity = 1;
            gameState.inside = false;
            inside.style.opacity = 0;
            shrine.style.opacity = 0;
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
    /**
    * @param {Array} inventory array of items 
    * @param {HTMLElement} inventoryList html <ul> element 
    */
    function updateInventory(inventory, inventoryList) {
        inventoryList.innerHTML = '';
        inventory.forEach(function (item) {
            const inventoryItem = document.createElement("li");
            inventoryItem.id = "inv-" + item;
            inventoryItem.innerText = item;
            inventoryList.appendChild(inventoryItem);
        })
    }
}
