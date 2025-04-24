export default class Loading {
    static async click() {
        return new Promise((resolve) => {
            const text = 'Стас гей...(';
            const el = document.getElementById('loading_title');

            const colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];
            let i = 0;
            let j = 1;
            let timer;

            let slides = 4 + Math.ceil(Math.random() * 3);

            setTimeout(() => {
                document.getElementById("caps").style.opacity = 1;
                setTimeout(() => {
                    timer = setInterval(() => {
                        document.getElementById("caps").style.transition = `.5s linear`;
                        setTimeout(() => {
                            document.getElementById("caps").style.backgroundImage = `url("caps/basa${j % 4 + 1}.jpg")`;
                            j++;
                            if (j >= slides) {
                                clearInterval(timer);
                                document.getElementById("loading").style.opacity = 0;
                                setTimeout(() => {
                                    document.getElementById("loading").style.display = 'none';
                                    resolve();  // ✅ Говорим, что всё завершено
                                }, 500);
                            }
                        }, 500);
                    }, 3000);
                }, 3000);
            }, 8000);

            timer = setInterval(() => {
                if (i <= text.length) {
                    if (Math.random() < .2 && i > 2) i -= 2;
                    el.innerText = text.slice(0, i);
                    i++;
                } else {
                    clearInterval(timer);
                    i = 0;
                    timer = setInterval(() => {
                        el.style.color = colors[i % colors.length];
                        el.style.textShadow = `0 0 20px ${colors[i % colors.length]}`;
                        i++;
                    }, 1000);
                }
            }, 300);
        });
    }

    static async ending() {
        return new Promise((resolve) => {
            const text = 'Стас гей.';
            const el = document.getElementById('loading_title');

            let prob = .2;

            const colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];
            let i = 0;
            let j = 1;

            setTimeout(() => {
                document.getElementById("caps").style.opacity = 1;
                setTimeout(() => {
                    setInterval(() => {
                        document.getElementById("caps").style.transition = `.5s linear`;
                        setTimeout(() => {
                            document.getElementById("caps").style.backgroundImage = `url("caps/basa${j % 4 + 1}.jpg")`;
                            j++;
                        }, 500);
                    }, 3000);
                }, 3000);
            }, 8000);

            let color = 0;

            setInterval(() => {
                if (i >= text.length) prob = .5;
                el.innerText = text.slice(0, i);
                if (Math.random() < prob && i > 2) i -= 2;
                i++;
            },300);

            setTimeout(() => {
                setInterval(() => {
                    el.style.color = colors[color % colors.length];
                    el.style.textShadow = `0 0 20px ${colors[color % colors.length]}`;
                    color++;
                }, 1000);
            }, 3000)
        });
    }
}