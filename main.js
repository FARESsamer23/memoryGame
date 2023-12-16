
//document.querySelector('.info-container .name span').innerHTML= prompt("whats your name")



// my variables 
let bloksContainer = document.querySelector('.memory-game-blocks');
// array for all bloks
let myBloks = Array.from(document.querySelectorAll(".memory-game-blocks .game-blok"));

// number of bloks 
 bloksNumber = myBloks.length;
 // array for indexes range order  
  rangeOrder =  Array.from(myBloks.keys());
// duration
let duration = 1000;

// add order css property to game blok







randomingTheArray(rangeOrder,bloksNumber);

   

        


/////////////////////////////////////////////////////////////////////////////////////////////////////
myBloks.forEach((blok,index)=>{
  blok.style.order = rangeOrder[index];
  

  blok.onclick = ()=>{
    
    blok.classList.add("fliped");

    let allFlipBloks = myBloks.filter( flipedBlok =>flipedBlok.classList.contains('fliped'));

    if(allFlipBloks.length === 2){
        stopCliking();
      iscompare(allFlipBloks[0],allFlipBloks[1]);
    }
  

}

})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function randomingTheArray(range,bloksNumber){
    let n = bloksNumber , temp , randomN ;
    while(n>0){
        temp = range[n-1];
        randomN = Math.floor( Math.random() * n );
    
       range[n-1]=range[randomN];
      
       range[randomN]=temp; 
       n--;
    }

return range;
  }
  
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function stopCliking(){

   bloksContainer.classList.add('no-clicking');

   setTimeout(()=>{ 

     bloksContainer.classList.remove("no-clicking");

 },1000);

}
//////////////////////////////////////////////////////////:///



function iscompare( fisrtblok , secendblok ){

  if( fisrtblok.dataset.tech === secendblok.dataset.tech ){

    console.log(secendblok);
    fisrtblok.classList.remove("fliped");
    secendblok.classList.remove("fliped");
    
    fisrtblok.classList.add("has-fleped");
    secendblok.classList.add("has-fleped");

  }else{

    setTimeout(()=>{
      fisrtblok.classList.remove("fliped");
      secendblok.classList.remove("fliped");

   },1000 );
  
  }
}