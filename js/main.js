let status = false;
let x = document.querySelectorAll('.icon');
for(let i = 0; i < x.length; i++){
    x[i].classList.add('icon-move');
}
function openSidebar(e){
    status = !status;
    console.log(e);
    document.getElementsByClassName('shadow')[0].classList.toggle('DB');
    for(let i = 0; i < x.length; i++){
        x[i].classList.remove('icon-move');
    }
    
    if(status){
        document.getElementsByClassName('sidebar')[0].classList.remove('goLeft');
        document.getElementsByClassName('sidebar')[0].classList.add('goRight');
        document.getElementsByClassName('fa-bars')[0].style.color = '#bb0f0f';
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementsByClassName('container-fluid')[0].classList.remove('openA');
        document.getElementsByClassName('container-fluid')[0].classList.add('closeA');
    }
    else
    {
        setTimeout(function(){
            for(let i = 0; i < x.length; i++){
                x[i].classList.add('icon-move');
            }
        },400);    
        document.getElementsByClassName('container-fluid')[0].classList.remove('closeA');
        document.getElementsByClassName('container-fluid')[0].classList.add('openA');
        document.getElementsByClassName('sidebar')[0].classList.remove('goRight');
        document.getElementsByClassName('sidebar')[0].classList.add('goLeft');
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementsByClassName('fa-bars')[0].style.color = '#000000';
    }
}