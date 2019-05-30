export default class Popup {
    constructor() {
        this.createPopup();
        this.close = this.close.bind(this);
    }

    createPopup () {
        this.popup = document.createElement('div');
    }
    
    render (parent = document.body, timeout) {
        parent.appendChild(this.popup);

        if (timeout) {
            setTimeout(i => this.close(), timeout);
        }
    }

    close () {
        this.popup.classList.add('hide_1');
        setTimeout(() => {
            this.popup.style.display = 'none';
            this.popup.classList.remove('hide_1');
        }, 400);

        this.unsubscribe();
    }

    subscribe (element) {
        this.closeHandler = element;
        this.closeHandler.addEventListener('click', this.close);
    }

    unsubscribe () {
        this.closeHandler.removeEventListener('click', this.close);
    }

    static createDivWithClass (className) {
        const item = document.createElement('div');
        item.classList.add(className);
        return item;
    }
}
