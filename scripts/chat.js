export default class Chat {
    static name;
    static message;
    static input;
    static chat;

    static init() {
        this.name = "Stas №" + Math.ceil(Math.random() * 405);
        this.message = document.getElementById('messages').querySelector('.message');
        document.getElementById('messages').innerHTML = '';
        this.input = document.getElementById('input').querySelector('input');
        this.chat = document.getElementById('chat')
        this.hide();
    }

    static sendMessage() {
        let text = this.input.value;
        if (!text) {
            return;
        }

        let alphabet = "!@#.ø£ùšø ©$%^&*?="
        if (text.toLowerCase() !== "артем пидорас" && text.toLowerCase() !== "artem pidoras") {
            let newText = "";
            let oldInt = 0;
            for (let i = 0; i < text.length; ++i) {
                newText += alphabet.charAt((text.charCodeAt(i) + oldInt + Math.ceil(Math.random() * alphabet.length)) % alphabet.length)
                oldInt = text.charCodeAt(i) % alphabet.length;
            }
            text = newText;
        }

        const newMessage = this.message.cloneNode(true);
        newMessage.querySelector('.name').textContent = this.name;
        newMessage.querySelector('.text').textContent = text;
        document.getElementById('messages').appendChild(newMessage);
        this.input.value = '';
        document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
    }

    static hide() {
        this.chat.style.display = 'none'
    }
    static show() {
        this.chat.style.display = 'flex'
    }
}