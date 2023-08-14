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
const delBtn = document.querySelectorAll('button.delete');
        let x = false; 

delBtn.forEach(btn => {
    
    btn.addEventListener('click', (e)=> {
        x = true;
        var tar = e.target.nextElementSibling;
        console.log(tar);
        tar.style.display= "block";
        console.log(x, 'first time x');
        
         if (x==true){
            window.addEventListener('click', ()=> {
            if (tar.style.display= "none"){
                tar.style.display= "block";
            }
            else 
                if(tar.style.display= "block"){
                    tar.style.display= "none"
                }
            }  
        )
        console.log(x, 'second time x');
         }     
        
    })

});


