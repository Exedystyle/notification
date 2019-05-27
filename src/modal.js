import Popup from "./popup";

export default class Modal extends Popup {
    constructor(){
        super()

        this.createModal();
    }

    createModal () {
        super.createPopup();
        this.popup.classList.add('modal__shadow');

        const modalWindow = Popup.createDivWithClass('modal');

        this.popup.appendChild(modalWindow);
    }
}