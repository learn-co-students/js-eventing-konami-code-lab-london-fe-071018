const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let i = 0;

function init() {
  document.body.addEventListener("keydown", e => {
    if (e.which == code[i]){
      i++
    }
    else i=0;
    if (i==code.length) alert("KONAMI code activated");
  })
}

init();