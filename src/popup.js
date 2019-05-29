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
        // this.popup.classList.add('closing-animation');
        this.popup.style.display = 'none';
        this.popup = null;
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
