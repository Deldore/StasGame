export default class Notification {
    static container;
    static example;

    static init() {
        this.container = document.getElementById('notifications');
        this.example = this.container.querySelector('.notification');

        this.container.innerHTML = '';
    }

    static create(text, timeToDelete = 5000) {
        let notification = this.example.cloneNode(true);
        timeToDelete = timeToDelete > 500 ? timeToDelete : 500
        notification.querySelector('p').innerText = text;
        this.container.appendChild(notification);
        setTimeout(() => {
            this.removeNotification(notification);
        }, (timeToDelete - 500))
    }

    static removeNotification (notification) {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.remove();
        }, 500);
    }
}