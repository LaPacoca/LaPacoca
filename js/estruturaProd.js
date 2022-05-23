var stars = document.querySelector("#stars");
var quantidade = document.querySelector("#qtd");

for(var y = 0; y <= 5; y++){
    quantidade.innerHTML += `<option value="${y}"> ${y} </option>`;
}

for(var i = 0; i < 5; i++){
    stars.innerHTML += `<ion-icon name="star" id="s${i}" class="stars"></ion-icon>`;
}

var arrStars = document.querySelectorAll(".stars");
arrStars.forEach((e) => {
    e.addEventListener('click', () => {
        for(var x = 0; x < arrStars.length; x++){
            arrStars[x].style.color = "hsl(0, 0%, 80%)";
        }
        for(var i = 0; i < arrStars.length; i++){
            var elementID = document.querySelector(`#s${i}`);
            if(elementID == e){
                arrStars[i].style.color = "var(--corLaranja)";
                break;
            }else{
                arrStars[i].style.color = "var(--corLaranja)";
            }
        }
    })
});