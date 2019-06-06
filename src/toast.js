import Popup from "./popup";

const type = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
}

class Toast extends Popup {
    constructor (message, status, callback){
        super();
        this.message = message;
        this.status = status;
        this.callback = callback;

        this.createToast();
        this.render();
        setTimeout(() => { 
            if(this.popup.style.display !== 'none') {
                this.close()
            }
        }, 5000);
    }

    createToast () {
        super.createPopup('toast');
        super.addClass(`toast__status--${this.status}`);
        // super.addClass('popup__show');
        
        const img = Popup.createNode('div', ['toast__img', `toast__img--${this.status}`]);

        const message = Popup.createNode('div', 'toast__message');
        const messageTitle = Popup.createNode('div', 'toast__message__title', this.status);
        const messageText = Popup.createNode('div', 'toast__message__text', this.message);

        message.appendChild(messageTitle);
        message.appendChild(messageText);

        const ui = Popup.createNode('div', 'toast__ui');
        const uiClose = Popup.createNode('div', 'ui__cross');
        ui.appendChild(uiClose);

        super.addChild(img, message, ui);

        super.subscribe(uiClose, this.close);
    }

    render () {
        this.container = document.querySelector('.toast__space');

        if(!this.container) {
            this.container = Popup.createNode('div', 'toast__space');
            document.body.appendChild(this.container); 
        }

        super.render(this.container);
    }

    close () {
        super.close();
        if(this.callback) this.callback();
    }
}

export {Toast, type};