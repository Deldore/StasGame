export class Message {
    static container;
    static title;
    static text;
    static skipButton;
    static nextButton;

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

    static showMessage(title = '', content = '', showSkipButton = true) {
        return new Promise(resolve => {

            this.container.style.display = 'block';
            this.nextButton.style.display = 'none';

                if (this.title) {
                    this.title.style.display = title ? 'block' : 'none';
                    this.title.textContent = title;
                }

                if (this.skipButton) {
                    this.skipButton.style.display = showSkipButton ? 'block' : 'none';
                }

                this.text.innerHTML = '';

            this.container.style.opacity = 1;

            setTimeout(() => {
                let counter = 0;
                const timer = setInterval(() => {
                    this.text.innerHTML = content.slice(0, counter).replace(/(.{7})/g, '$1&shy;');
                    counter++;

                    if (counter > content.length) {
                        clearInterval(timer);
                        this.nextButton.style = 'block';
                    }
                }, 50);

                this.skipButton.onclick = () => {
                    clearInterval(timer);
                    this.text.innerHTML = content;
                    this.nextButton.style = 'block';
                };

                this.nextButton.onclick = () => {
                    this.container.style.opacity = 0;
                    setTimeout(() => {
                        resolve();
                    }, 500)
                }
            }, 500)
        })
    }
}