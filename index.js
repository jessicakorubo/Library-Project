const inactive_btn = document.querySelectorAll('button.inactive');

var inactive_button = [].slice.call(inactive_btn);



console.log('this is', inactive_btn,'inactive');
inactive_button.forEach(btn => {
    btn.classList.add('inactive');
    btn.innerHTML ='EXHAUSTED';
});