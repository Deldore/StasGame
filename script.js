import Loading from "./scripts/loading"
import {Message} from "./scripts/message";
import Missions from "./scripts/missions";

const btn = document.getElementById('start_btn')
const startBtn = document.getElementById('start_game')

Message.init();

btn.onclick = async () => {
    await Loading.click();
}

startBtn.onclick = async () => {
    startBtn.style.display = 'none';
    await Missions.startGame()
}

