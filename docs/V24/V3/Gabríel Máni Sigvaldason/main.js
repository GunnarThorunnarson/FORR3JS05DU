import { player, checkForCollision,gameOver } from "player.js";
import { ClearCanvas,platform, displayText, DisplayRules} from "connect.js";
import { CreateTraps, DisplayTraps } from "holes.js";

//Stores pos of the holes
const holesarr = CreateTraps();
const waitForGameToStart = "Swipe to start game";

//style - swap out color player for img


displayText(waitForGameToStart);

addEventListener("touchstart", () => init())

function init() {
    ClearCanvas();
    if (gameOver != true) {
        //N!
        DisplayTraps(holesarr);
        DisplayRules();
        platform();

        platform("end");
        player.draw();

        checkForCollision(holesarr,player);

        requestAnimationFrame(init);
    }
};
