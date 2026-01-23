const btn=document.getElementById('btn');
const Color=document.querySelector('.color');

const hexNumbers=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


btn.addEventListener('click',()=>{
  let hex='#';
  
  for(let i=0;i<6;i++){
    hex+= hexNumbers[getRandomNumbers()]
  }
  Color.textContent=hex;
  document.body.style.backgroundColor=hex;
})

function getRandomNumbers(){
  return Math.floor(Math.random()*hexNumbers.length)
}