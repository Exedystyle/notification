import Toast from './toast';
import Modal from './modal';

let str40 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga sapiente explicabo obcaecati quidem accusamus tempore, molestias recusandae nemo. Maxime, quod distinctio. Ullam commodi odit impedit, vel culpa beatae fugiat, nulla maiores ea reiciendis nisi dolorem quas autem quisquam quaerat.";
let str10 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquid?';
const warning = 'Attention, may be something goes wrong!';
const error = 'Alarm! Alarm! Stack Overflow! Fix it right now!';
const success = 'All right, you\'re fine fellow. Keep it up!';
const info = 'I just want to know that you are fine';

const button1 = document.getElementById('1');
button1.addEventListener('click', function(){
    const toast = new Toast(success, 1);
    toast.render();
});

const button2 = document.getElementById('2');
button2.addEventListener('click', function(){
    const toast = new Toast(error, 2);
    toast.render();
});

const button3 = document.getElementById('3');
button3.addEventListener('click', function(){
    const toast = new Toast(warning, 3);
    toast.render();
});

const button4 = document.getElementById('4');
button4.addEventListener('click', function(){
    const toast = new Toast(info);
    toast.render();
});

const button5 = document.getElementById('5');
button5.addEventListener('click', function(){
    const modal = new Modal('close it', str40);
    modal.render();
});

const button6 = document.getElementById('6');
button6.addEventListener('click', function(){
    const modal = new Modal('another modal', str10);
    modal.render();
});