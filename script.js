import Loading from "./scripts/loading"
import {Message} from "./scripts/message";
import Missions from "./scripts/missions";
import Notification from "./scripts/notification";
import Chat from "./scripts/chat";

const btn = document.getElementById('start_btn')
const startBtn = document.getElementById('start_game')
const sendMessage = document.getElementById('send_message');
const maxMessageWidth = 0.7

const message = document.getElementById('message');
const p = message.querySelector('p');

message.style.maxWidth = `${maxMessageWidth * 100}%`;

Missions.init();
Message.init();
Notification.init();
Chat.init();

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

btn.onclick = async () => {
    btn.style.display = 'none';
    await Loading.click();
    document.getElementById("start_game").style.display = 'block';
}

startBtn.onclick = async () => {
    startBtn.style.display = 'none';
    await Missions.game(0 );
    await Loading.ending();
}

sendMessage.onclick = (e) => {
    e.preventDefault()
    Chat.sendMessage();
}



