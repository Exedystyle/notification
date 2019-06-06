import {Toast, type} from './toast';
import Modal from './modal';
// import { Modal, Toast } from 'super-popup';

const str40 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga sapiente explicabo obcaecati quidem accusamus tempore, molestias recusandae nemo. Maxime, quod distinctio. Ullam commodi odit impedit, vel culpa beatae fugiat, nulla maiores ea reiciendis nisi dolorem quas autem quisquam quaerat.";
const str10 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquid?';
const warning_msg = 'Attention, may be something goes wrong!';
const error_msg = 'Alarm! Alarm! Stack Overflow! Fix it right now!';
const success_msg = 'All right, you\'re fine fellow. Keep it up!';
const info_msg = 'I just want to know that you are fine';

const test_callback = function(){
    console.log('test callback');
}

document.getElementById('1').addEventListener('click', () => {
    new Toast(success_msg, type.SUCCESS, test_callback);
});

document.getElementById('2').addEventListener('click', () => {
    new Toast(error_msg, type.ERROR);
});

document.getElementById('3').addEventListener('click', () => {
    new Toast(warning_msg, type.WARNING, test_callback);
});

document.getElementById('4').addEventListener('click', () => {
    new Toast(info_msg, type.INFO);
});

document.getElementById('5').addEventListener('click', () => {
    new Modal('close it', str40);
});

document.getElementById('6').addEventListener('click', () => {
    new Modal('another modal', str10, test_callback);
});

