import Loading from "./scripts/loading"
import {Message} from "./scripts/message";
import Missions from "./scripts/missions";
import Notification from "./scripts/notification";

const btn = document.getElementById('start_btn')
const startBtn = document.getElementById('start_game')
const maxMessageWidth = 0.7

const message = document.getElementById('message');
const p = message.querySelector('p');

message.style.maxWidth = `${maxMessageWidth * 100}%`;

function applyHyphens() {
    if (message.clientWidth >= window.innerWidth * maxMessageWidth) {
        p.style.hyphens = 'auto'
        p.style.whiteSpace = 'wrap'
        message.style.whiteSpace = 'wrap'
        message.style.hyphens = 'manual'
        message.style.wordBreak = 'break-word'
        message.style.overflowWrap = 'break-word'
        console.log(message.clientWidth, message.style.maxWidth)
    } else {
        p.style.hyphens = ''
        p.style.whiteSpace = 'nowrap'
        message.style.hyphens = ''
        message.style.wordBreak = 'keep-all'
        message.style.overflowWrap = 'normal'
        message.style.whiteSpace = 'nowrap'
        console.log('nomax')
    }
}

window.addEventListener('load', applyHyphens);
window.addEventListener('resize', applyHyphens);

const observer = new ResizeObserver(applyHyphens);
observer.observe(message);

Missions.init();
Message.init();
Notification.init();

btn.onclick = async () => {
    btn.style.display = 'none';
    await Loading.click();
    document.getElementById("start_game").style.display = 'block';
}

startBtn.onclick = async () => {
    startBtn.style.display = 'none';
    await Missions.game();
    await Loading.ending();
}

