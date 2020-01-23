
const change_color = document.querySelector('.change_color');
const bodybtn = document.querySelector('body');

const colors = ['teal','yellowgreen' ,'skyblue','darkcyan']; 



change_color.addEventListener('click',changeBG);

function changeBG(){
   let random =  Math.floor(Math.random() * colors.length)
    bodybtn.style.backgroundColor = colors[random];

};

