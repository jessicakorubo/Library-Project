const table_btn = document.querySelectorAll('button.table-btn');

var my_btn = [].slice.call(table_btn);



console.log('this is', my_btn,'inactive');
my_btn.forEach(btn => {

    if (btn.classList.contains('pending')) {
        btn.innerHTML = 'PENDING...'
    }
    else if (btn.classList.contains('returned')) {
        btn.innerHTML ='RETURNED';
    }
    
});