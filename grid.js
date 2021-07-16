const menuBarUlTag = document.querySelector('.menubar>ul');
const threeIconTag =document.querySelector(".threeicon");
const crossIconTag = document.querySelector('.crossicon');
const phoneContainerTag = document.querySelector('.phoneContainer');

threeIconTag.addEventListener('click',()=>{
    menuBarUlTag.style.display = 'block';
    crossIconTag.style.display = 'block';
    menuBarUlTag.style.width = '300px';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

crossIconTag.addEventListener('click',()=>{
    menuBarUlTag.style.display = 'none';
    crossIconTag.style.display = 'none';
    document.body.style.backgroundColor = "black";
});