import Toast from './toast';
import Modal from './modal';

let str40 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga sapiente explicabo obcaecati quidem accusamus tempore, molestias recusandae nemo. Maxime, quod distinctio. Ullam commodi odit impedit, vel culpa beatae fugiat, nulla maiores ea reiciendis nisi dolorem quas autem quisquam quaerat.";
let str10 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquid?';
const warning = 'Attention, may be something goes wrong!';
const error = 'Alarm! Alarm! Stack Overflow! Fix it right now!';
const success = 'All right, you\'re fine fellow. Keep it up!';
const info = 'I just want to know that you are fine';


const toast = new Toast(warning, 3);
const toast2 = new Toast(success, 1);
const toast3 = new Toast(error, 2);
const toast4 = new Toast(info);

const modal = new Modal;

// toast.render(document.body);
// toast2.render(document.body);
// toast3.render(document.body);
// toast4.render(document.body);

// setTimeout(function() {
//     toast.close()}, 5000);

// modal.render(document.body);

// setTimeout(function() {
//     modal.close()}, 5000);
