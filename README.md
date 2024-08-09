# calculator
This repository features a simple calculator built with HTML, CSS, and JavaScript. The calculator performs basic arithmetic operations like addition, subtraction, multiplication, and division. The clean UI is styled with CSS, while JavaScript handles the logic and operations. Perfect for learning fundamental web development skills.
## java script Code
```javascript
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
```

## html code
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="outerbox">
        <div id="container" class="box">
            <div id="view" class="text">
                <input type="text" class="textContainer" id="viewCntainer" placeholder="0" ">
            </div>
            <div id="row1" class="row">
                <button id="C" class="Button spl">C</button>
                <button id="r" class="Button spl">←</button>
                <button id="%" class="Button spl">%</button>
                <button id="÷" class="Button spl">÷</button>
            </div>
            <div id="row2" class="row">
                <button id="7" class="Button">7</button>
                <button id="8" class="Button">8</button>
                <button id="9" class="Button">9</button>
                <button id="x" class="Button spl">x</button>
            </div>
            <div id="row3" class="row">
                <button id="4" class="Button">4</button>
                <button id="5" class="Button">5</button>
                <button id="6" class="Button">6</button>
                <button  id="-" class="Button spl">-</button>
            </div>
            <div id="row4" class="row">
                <button id="1" class="Button">1</button>
                <button id="2" class="Button">2</button>
                <button id="3" class="Button">3</button>
                <button id="+" class="Button spl">+</button>
            </div>
            <div id="row5" class="row">
                <button  id="." class="Button">.</button>
                <button id="0" class="Button">0</button>
                <button id="r5b3" class="Button">=</button>
            </div>
        </div>
    </div>
    <script src="first.js"></script>
</body>
</html>
```

## Css

``` CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.outerbox{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}
.box{
    display: flex;
    flex-direction: column;
    gap:0.5rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 30rem;
    border-radius: 20px;
    
}

.Button{
    cursor: pointer;
    width: 3.5rem;
    height: 3.5rem;
    overflow: hidden;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: rgb(37, 32, 32);
}
#r5b3{
    width: 7rem;
    background-color: orangered;
}
.spl{
    color: orangered;
}
.text{
    border-radius: 20px;
    height: 7rem;
    width: 14.7rem;
    background-color: black;
    display: flex;
    align-items:end;
}
.textContainer{
    border-radius: 20px;
    width: 100%;
    border: none;
    height: 3.5rem;
    background-color: black;
    color: white;
    font-size: 2rem;
    text-align: end;
    outline-style:none;
    caret-color: white;
    padding: 0.5rem;
}
```
