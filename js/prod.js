let balls = document.querySelector('.bolinha');
let qtd = document.querySelectorAll('.slider .imagens');
let atual = 0;
let imagem = document.getElementById('imga');
let next = document.getElementById('avanca');
let volta = document.getElementById('volta');
let rolar = true;

for(let i = 0; i < qtd.length; i++){
    var div = document.createElement('div');
    div.id = i;
    balls.appendChild(div)
};

document.getElementById('0').classList.add('imgatual');

let pos = document.querySelectorAll('.bolinha .div');

for(let i = 0; i < pos.length; i++){
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        rolar = false
        slide()
    })
};

volta.addEventListener('click', ()=>{
    atual --
    rolar = false
    slide()
});

next.addEventListener('click', ()=>{
    atual ++
    rolar = false
    slide()
});

function slide(){
    if(atual >= qtd.length){
        atual = 0;
    }
    else if(atual < 0){
        atual = qtd.length-1;
    }
    document.querySelector('.imgatual').classList.remove('imgatual');
    imagem.style.marginLeft = -300*atual+'px';
    document.getElementById(atual).classList.add('imgatual')
};

setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true
    }
},6000);