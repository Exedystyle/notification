export default class Popup {
    constructor(){
        // this.popup;
        this.createPopup();
    }

    createPopup () {
        this.popup = document.createElement('div');
        this.popup.classList.add('test-popup');
    }
    
    render (parent) {
        parent.appendChild(this.popup);
    }

    close () {
        this.popup.style.display = 'none';
    }

    subscribe () {}

    unsubscribe () {}
}