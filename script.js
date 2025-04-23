const text = 'Стас гей...('
const el = document.getElementById('stas')
const btn = document.getElementById('btn')

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
    setTimeout(() => {
        document.getElementById("img").style.opacity = 1;
        setTimeout(() => {
            setInterval(() => {
                document.getElementById("img").style.transition = `.5s linear`;
                // document.getElementById("img").style.transform = `rotate(180deg)`;
                // document.getElementById("img").style.transform = `rotate(181deg)`;
                // document.getElementById("img").style.width = `0`;
                // document.getElementById("img").style.height = `0`;
                setTimeout(() => {
                    document.getElementById("img").style.backgroundImage = `url("basa${j % 4 + 1}.jpg")`;
                    // document.getElementById("img").style.transform = `rotate(360deg)`;
                    // document.getElementById("img").style.width = `100vw`;
                    // document.getElementById("img").style.height = `100vh`;
                    j ++;
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