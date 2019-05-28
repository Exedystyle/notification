export default class Popup {
    constructor() {
        this.createPopup();
        this.close = this.close.bind(this);
    }

    createPopup () {
        this.popup = document.createElement('div');
    }
    
    render (parent) {
        this.parent = parent;
        this.parent.appendChild(this.popup);
    }

    close () {
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