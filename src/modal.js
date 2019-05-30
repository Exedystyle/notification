import Popup from "./popup";

export default class Modal extends Popup {
    constructor (title = 'Modal Window', message = 'Enter smth', callback) {
        super()
        this.title = title;
        this.message = message;
        this.callback = callback; 

        this.createModal();
        this.render();
    }

    createModal () {
        super.createPopup('modal__shadow');

        const modalWindow = Popup.createNode('div', 'modal');
        const modalHeader = Popup.createNode('div', 'modal__header');
        const modalBody = Popup.createNode('div', 'modal__body');
        const modalUI = Popup.createNode('div', 'modal__ui');

        const modalH1 = Popup.createNode('h1', 'modal__header__title', this.title);
        modalHeader.appendChild(modalH1);

        const modalMessage = Popup.createNode('div', 'modal__message', this.message)
        modalBody.appendChild(modalMessage);

        const UIButton1 = Popup.createNode('button', ['modal__ui__button' ,'modal__ui__button--1'], 'Ok');
        const UIButton2 = Popup.createNode('button', ['modal__ui__button', 'modal__ui__button--2'], 'Cancel');

        modalUI.appendChild(UIButton1);
        modalUI.appendChild(UIButton2);

        modalWindow.appendChild(modalHeader);
        modalWindow.appendChild(modalBody);
        modalWindow.appendChild(modalUI);

        super.addChild(modalWindow);

        modalWindow.addEventListener('click', e => {
            e.stopPropagation();    
        });

        super.subscribe(this.popup);
        super.subscribe(UIButton2);
    }

}
