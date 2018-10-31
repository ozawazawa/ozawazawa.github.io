function doLoop() {
  let answer  =document.querySelector("#answer");

  let i=0;
  let sum =0;
  while (i <= 10000){
    sum = sum + i;
    //sum += i; 上と同じ意味
    console.log(`sum: ${sum}, i: ${i}`);
    i++;
  }
  answer.innerHTML = sum;
}

function  doLoop2() {
  let answer = document.querySelector("#answer");
   let i = 0;
   let sum = 0;
   while (i < 10000){
     sum = sum +i;
     console.log(`sum:${sum},i:${i}`);
     if(sum >=50000){
       break;
     }
     i++;
   }
  answer.innerHTML = i;
}