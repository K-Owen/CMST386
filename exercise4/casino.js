//name
function namedisplay() {
    var last = document.getElementById("last");
    var first = document.getElementById("first");
    var full = document.getElementById("full");
    full.value= last.value + ", " + first.value;
}

//citizencheck
function citizen() {
    var social = document.getElementById("snumber");
    var y = document.getElementById("y");
    var n = document.getElementById("n");

    social.disabled = true;
    if (y.checked){
        social.disabled = false;
    }
    else if (n.checked){
        social.disabled = true;
        social.value="";
    }
}

//chips
function balance(){
  var worth = document.getElementsByName("worth");
  var chips = document.getElementsByName("chips");
  var sub = document.getElementById("balance");
  var value = 0;
  for(var x=0;x<worth.length;x=x+1){
    if(chips[x] !== 0){
      value = value + (worth[x].value * chips[x].value);
      sub.value = value;
    }
  }
}

//taxcheck
function taxed(){
  var tax = document.getElementById("tax");
  var start = document.getElementById("start");
  var sub = document.getElementById("balance");
  tax.disabled=true;
  if ((sub.value - start.value) > 0){
      tax.disabled=false;
      tax.checked=true;
  }
  else {
    tax.disabled=true;
    tax.checked=false;
  }
}

//winnings
function winnings(){
  var sub = document.getElementById("balance");
  var tax = document.getElementById("tax");
  var net = document.getElementById("net");
  net.value = 0;
  if(tax.checked) {
    net.value = (sub.value - (sub.value * (1/10))) - start.value;
  }
  else{
    net.value = sub.value - start.value;
  }
}

//receipt
function pop(){
    var net = document.getElementById("net").value;
        if (net < 0){
            net = net * -1;
            alert("You lost $" + net);
        }
        else if (net > 0){
            alert("You Won $" + net);
        }
        else {
            alert("You just broke even. Want to play again?");
        }
}
