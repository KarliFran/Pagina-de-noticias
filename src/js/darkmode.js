const   darkmode=document.querySelector('#darkmode'),
        bodydark=document.querySelector('body');

let aux = 0;
darkmode.addEventListener('click',(e)=>{
    //console.log('Hola juan carlos');
    bodydark.classList.toggle('dark-theme');

    if(aux==0){
        localStorage.setItem('dark_mode', 'true');
        aux=1;
    }else{
        localStorage.setItem('dark_mode','false');
        aux=0;
    }
});

let dark = localStorage.getItem('dark_mode');

if(dark=='true'){
    bodydark.classList.add('dark-theme');
    aux=1;
}else{
    bodydark.classList.remove('dark-theme');
    aux=0;
}


