import Popup from "./popup";

export default class Modal extends Popup {
    constructor (title = 'Modal Window', message = 'Enter smth', buttonText = 'empty button') {
        super()
        this.title = title;
        this.message = message;
        this.button1Text = buttonText;
        this.createModal();
    }

    createModal () {
        super.createPopup();
        this.popup.classList.add('modal__shadow');

        const modalWindow = Popup.createDivWithClass('modal');
        const modalHeader = Popup.createDivWithClass('modal__header');
        const modalBody = Popup.createDivWithClass('modal__body');
        const modalUI = Popup.createDivWithClass('modal__ui');

        const modalH1 = document.createElement('h1');
        modalH1.classList.add('modal__header__title');
        modalH1.innerText = this.title;
        modalHeader.appendChild(modalH1);
        
        const modalMessage = Popup.createDivWithClass('modal__message');
        modalMessage.innerText = this.message;
        modalBody.appendChild(modalMessage);

        const UIButton1 = document.createElement('button');
        UIButton1.classList.add('modal__ui__button');
        UIButton1.classList.add('modal__ui__button--1');
        UIButton1.innerText = this.button1Text;

        const UIButton2 = document.createElement('button');
        UIButton2.classList.add('modal__ui__button');
        UIButton2.classList.add('modal__ui__button--2');
        UIButton2.innerText = 'close';

        modalUI.appendChild(UIButton1);
        modalUI.appendChild(UIButton2);

        modalWindow.appendChild(modalHeader);
        modalWindow.appendChild(modalBody);
        modalWindow.appendChild(modalUI);

        this.popup.appendChild(modalWindow);

        modalWindow.addEventListener('click', e => {
            e.stopPropagation();    
        });

        super.subscribe(this.popup);
        super.subscribe(UIButton2);
    }

}
