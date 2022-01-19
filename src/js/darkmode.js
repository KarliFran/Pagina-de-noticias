const   darkmode=document.querySelector('#darkmode'),
        bodydark=document.querySelector('body');

let aux = 0;
darkmode.addEventListener('click',(e)=>{
    //console.log(darkmode);
    bodydark.classList.toggle('dark-theme');

    if(aux==0){
        localStorage.setItem('dark_mode', 'true');
        aux=1;
    }else{
        localStorage.setItem('dark_mode','false');
        aux=0;
    }

    /*if(darkmode.checked==false){
        localStorage.setItem('check','true');
    }else{
        localStorage.setItem('check','false');
    }*/
});

let dark = localStorage.getItem('dark_mode');
//let checking=localStorage.getItem('check');

if(dark=='true'){
    bodydark.classList.add('dark-theme');
    darkmode.checked=false;
    aux=1;
}else{
    bodydark.classList.remove('dark-theme');
    darkmode.checked=true;
    aux=0;
}


