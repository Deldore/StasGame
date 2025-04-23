const text = 'Стас гей...('
const el = document.getElementById('loading_title')
const btn = document.getElementById('start_btn')

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'aqua',
    'blue',
    'purple'
]

var i = 0;
var j = 1;
var timer;

function click () {
    let slides = 5 + Math.floor(Math.random() * 5);
    setTimeout(() => {
        document.getElementById("caps").style.opacity = 1;
        setTimeout(() => {
            timer = setInterval(() => {
                document.getElementById("caps").style.transition = `.5s linear`;
                // document.getElementById("caps").style.transform = `rotate(180deg)`;
                // document.getElementById("caps").style.transform = `rotate(181deg)`;
                // document.getElementById("caps").style.width = `0`;
                // document.getElementById("caps").style.height = `0`;
                setTimeout(() => {
                    document.getElementById("caps").style.backgroundImage = `url("caps/basa${j % 4 + 1}.jpg")`;
                    // document.getElementById("caps").style.transform = `rotate(360deg)`;
                    // document.getElementById("caps").style.width = `100vw`;
                    // document.getElementById("caps").style.height = `100vh`;
                    j ++;
                    if (j >= slides) {
                        clearInterval(timer);
                        document.getElementById("caps").style.opacity = 0;
                    }
                }, 500);
            }, 5000);
        }, 5000);
    }, 8000);
    btn.style.display = 'none'
    timer = setInterval(() => {
        if (i <= text.length) {
            if (Math.random() < .2 && i > 2) i -= 2;
            el.innerText = text.slice(0, i);
            i ++;
        } else {
            clearInterval(timer)
            i = 0;
            timer = setInterval(() => {
                el.style.color = colors[i % colors.length]
                el.style.textShadow = `0 0 20px ${colors[i % colors.length]}`
                i ++;
            }, 1000)
        }
    }, 300);
}

btn.onclick = click;