let str = "";//view
let str2="";// calculation
let text = document.getElementById("viewCntainer");
let buttons = document.querySelectorAll(".Button");
// console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id == "C") {
      str = "";
      str2="";
    } else if (e.target.id == "r") {
      str = str.slice(0, str.length - 1);
      str2 = str2.slice(0, str2.length - 1);
    } else if (e.target.id === "r5b3") {
      str2 = eval(str2);
      str=str2;
    }else if(e.target.id ==='÷'){
        str2=str2+'/';
        str=str+'÷';
    }else if(e.target.id ==='x'){
        str2=str2+'*';
        str=str+'x';
    }
    else {
      str = str + e.target.id;
      str2 = str2 + e.target.id;
    }
    text.value = str;
    
  });
  
});
