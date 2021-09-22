const viewBtn = document.querySelector('.view-modal'),
      popup = document.querySelector('.popup') ;

viewBtn.addEventListener('click', (e)=> {
    popup.classList.toggle('show')
})

popup.onclick =  ()=>{
     viewBtn.click() ;
};