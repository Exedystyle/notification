import Popup from "./popup";

export default class Toast extends Popup {
    constructor (message = 'great lorem', status = 4) {
        super();
        this.message = message;
        this.status = statusMap[status];

        this.createToast();
    }

    createToast () {
        super.createPopup();
        this.popup.classList.add('toast');
        this.popup.classList.add(`toast__status--${this.status}`);
        
        const img = Popup.createDivWithClass('toast__img');
        img.classList.add(`toast__img--${this.status}`);

        const message = Popup.createDivWithClass('toast__message');
        const messageTitle = Popup.createDivWithClass('toast__message__title');
        const messageText = Popup.createDivWithClass('toast__message__text');

        messageTitle.innerText = this.status;
        messageText.innerText = this.message;
        message.appendChild(messageTitle);
        message.appendChild(messageText);

        const ui = Popup.createDivWithClass('toast__ui');
        const uiClose = Popup.createDivWithClass('ui__cross');
        ui.appendChild(uiClose);

        this.popup.appendChild(img);
        this.popup.appendChild(message);
        this.popup.appendChild(ui);

        super.subscribe(uiClose);
    }

    render () {
        this.container = document.querySelector('.toast__space');
        console.log(this.container);

        if(!this.container) {
            this.container = Popup.createDivWithClass('toast__space');
            document.body.appendChild(this.container); 
        }

        super.render(this.container);
    }
}

const statusMap = {
    1: 'success',
    2: 'error',
    3: 'warning',
    4: 'info'
}
