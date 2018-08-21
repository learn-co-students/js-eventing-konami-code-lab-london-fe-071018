const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index=0;

function init(event) {
  // Write your JavaScript code inside the init() function
  let bodyTag=document.body;
  bodyTag.addEventListener('keydown',event=>{
    const keyCode = event.detail || event.which;
  
    console.log(keyCode);
    
    let convertedValue=parseInt(keyCode);
    console.log(convertedValue);
    if (convertedValue===code[index] && index<10){
      index++;
      console.log('inside if',index);
    }
    else if (index<10) {
      index=0;
      console.log('inside else if',index);
    }
    else if (index===10){
      console.log('alert',index);
      alert('Hurray');
      index=0;
    }
  });
}
init();