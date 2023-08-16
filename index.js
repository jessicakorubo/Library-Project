const table_btn = document.querySelectorAll("button.table-btn");

var my_btn = [].slice.call(table_btn);

console.log("this is", my_btn, "inactive");
my_btn.forEach((btn) => {
  if (btn.classList.contains("pending")) {
    btn.innerHTML = "PENDING...";
  } else if (btn.classList.contains("returned")) {
    btn.innerHTML = "RETURNED";
  }
});

// delBtn.forEach(btn => {

//     btn.addEventListener('click', (e)=> {

//         var tar = e.target.nextElementSibling;
//         console.log(tar);
//         tar.classList.add('active');
//         e.stopPropagation();

//         document.addEventListener('click', ()=> {
//             tar.classList.remove('active');
//         })

//     })

// });

// var buttonDiv = document.querySelectorAll(".button-div");

// buttonDiv.forEach(mybtn => {
//     var mydel = mybtn.querySelector('.delete');
//     var mypopup = mybtn.querySelector('.popup');

//     mydel.addEventListener('click', (e)=> {
//         e.stopPropagation;
//         mypopup.classList.toggle('active');
//         console.info('You have clicked on the delete button')
//     })

//     window.onclick = function(){
//     if (mypopup.style.display = "block") {
//         mypopup.style.display = 'none';
//     }
// }

const delBtn = document.querySelectorAll("button.delete");

delBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const tar = e.currentTarget.nextElementSibling;
    tar.classList.add("active");

    setOthersInactive(delBtn, e.currentTarget);

    document.addEventListener("click", (e) => {
      // var eventAdded = true;
      if (tar.classList.contains("active")) {
        tar.classList.remove("active");
      }
    });
  });
});

function setOthersInactive(array, except) {
  array.forEach((el) => {
    if (!(el === except)) el.nextElementSibling.classList.remove("active");
  });
}
