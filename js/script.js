let elInput = document.getElementById("input");
let elBtn = document.getElementById("btn");
let elResult = document.getElementById("result");

elBtn.addEventListener("click", function(e){
  let stringArr = elInput.value.trim().split(" ");
  let longWord = stringArr[0];
  for (let i = 0; i < stringArr.length; i++) {
    if(longWord.length < stringArr[i].length)  {
      longWord = stringArr[i]
    }
  }
  elResult.textContent = `The longest word in this sentence is: ${longWord}`
})