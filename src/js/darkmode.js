const   darkmode=document.querySelector('#darkmode'),
        bodydark=document.querySelector('body');

darkmode.addEventListener('click',(e)=>{
    //console.log('Hola juan carlos');
    bodydark.classList.toggle('dark-theme');
});


