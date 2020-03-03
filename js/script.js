let colors= ['red','blue','orange','yellow','purpule','green','pink','brown'];


document.getElementById('button').addEventListener('click',function(){
    var randomColors= colors[Math.floor(Math.random()*colors.length)];
    var container= document.getElementById('container');
    container.style.backgroundColor = randomColors;

})