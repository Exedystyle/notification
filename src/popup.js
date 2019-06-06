const callbackList = [];

export default class Popup {
    constructor() {
        this.close = this.close.bind(this);
    }

    createPopup (className) {
        this.popup = Popup.createNode('div', className);
    }

    addClass (className) {
        this.popup.classList.add(className);
    }
    
    addChild (...childs) {
        childs.forEach(i => this.popup.appendChild(i));
    }

    render (parent = document.body) {
        parent.appendChild(this.popup);
    }

    close () {
        this.popup.classList.add('popup__hide');
        setTimeout(() => {
            this.popup.style.display = 'none';
        }, 400);

        this.unsubscribe(this.close);
    }

    subscribe (element, callback) {
        callbackList.push(element);
        element.addEventListener('click', callback);
    }

    unsubscribe (callback) {

        callbackList.forEach(i => {
            i.removeEventListener('click', callback);
        });
    }
    
    static createNode (tagName, classNames, text) {
        const item = document.createElement(tagName);
        
        if (classNames instanceof Array) {
            classNames.forEach(i => item.classList.add(i));
        }
        else {
            item.classList.add(classNames);
        }
        
        if (text) item.innerText = text;
        
        return item;
    }
}
