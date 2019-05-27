export default class Popup {
    constructor() {
        this.createPopup();
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
    }

    subscribe () {}

    unsubscribe () {}

    static createDivWithClass (className) {
        const item = document.createElement('div');
        item.classList.add(className);
        return item;
    }
}