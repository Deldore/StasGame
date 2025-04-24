export class Message {
    static container;
    static title;
    static text;
    static skipButton;
    static nextButton;
    static timer;

    static init() {
        this.container = document.getElementById('message');
        this.title = this.container.querySelector('h1');
        this.text = this.container.querySelector('p');
        this.skipButton = this.container.querySelector('#skip');
        this.nextButton = this.container.querySelector('#next');
        this.container.style.opacity = 0;
        this.container.style.transition = 'opacity linear .5s';
        this.container.style.display = 'none';
    }

    static showMessages(title = '', dialogs = [], showSkipButton = true) {
        return new Promise(resolve => {
            // Флаг для пропуска всех диалогов
            let skipAll = false;

            this.container.style.display = 'block';
            this.nextButton.style.display = 'none';

            // Обработчик для кнопки пропуска
            const skipAllHandler = () => {
                skipAll = true;
                clearInterval(this.timer)
                this.container.style.opacity = 0;
                setTimeout(() => {
                    this.container.style.display = 'none';
                    resolve();
                }, 500);
            };

            if (this.skipButton) {
                this.skipButton.onclick = skipAllHandler;
                this.skipButton.style.display = showSkipButton ? 'block' : 'none';
            }

            // Асинхронная обработка диалогов
            (async () => {
                for (const dialog of dialogs) {
                    if (skipAll) break;

                    const content = dialog || '';
                    await this.showSingleMessage(title, content, false); // showSkipButton=false, так как главная кнопка уже есть
                }

                if (!skipAll) {
                    this.container.style.opacity = 0;
                    setTimeout(() => {
                        this.container.style.display = 'none';
                        resolve();
                    }, 500);
                }
            })();
        });
    }

    static showSingleMessage(title = '', content = '', showSkipButton = true) {
        return new Promise(resolve => {
            this.nextButton.style.display = 'none';

            if (this.title) {
                this.title.style.display = title ? 'block' : 'none';
                this.title.textContent = title;
            }

            this.text.innerHTML = '';
            this.container.style.opacity = 1;

            setTimeout(() => {
                let counter = 0;
                this.timer = setInterval(() => {
                    this.text.innerHTML = content.slice(0, counter).replace(/(.{7})/g, '$1&shy;');
                    counter++;

                    if (counter > content.length) {
                        clearInterval(this.timer);
                        this.nextButton.style.display = 'block';
                    }
                }, 50);

                const nextHandler = () => {
                    clearInterval(this.timer);
                    this.nextButton.onclick = null;
                    resolve();
                };

                this.nextButton.onclick = nextHandler;
            }, 500);
        });
    }
}