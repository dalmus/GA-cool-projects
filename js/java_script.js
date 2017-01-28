

document.getElementById('id').addEventListener('click', function(){
    if () {

    }
}

    }
});


var board = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9']


//---------


document.getElementById('box1').addEventListener('click', function(){
  alert('Hello')
});

document.getElementById('box2').addEventListener('click', function(){
  alert('Hello')
});

document.getElementById('box3').addEventListener('click', function(){
  alert('Hello')
});

document.getElementById('box4').addEventListener('click', function(){
  alert('Hello')
});

document.getElementById('box5').addEventListener('click', function(){
  alert('Hello')
});

document.getElementById('box6').addEventListener('click', function(){
  alert('Hello')
});

document.getElementById('box7').addEventListener('click', function(){
  alert('Hello')
});

document.getElementById('box8').addEventListener('click', function(){
  alert('Hello')
});

document.getElementById('box9').addEventListener('click', function(){
  alert('Hello')
});

//-----------------------------------------------



var xWin = "'X' Wins!"
var oWin = "'O' Wins!"

var winnerText = document.getElementById("winnertext")

var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var box9 = document.getElementById("box9")

winnerText.innerHTML = ""

// All posibilities of X to win
if (box1.innerHTML == "X") {
  if (box2.innerHTML == "X") {
    if (box3.innerHTML == "X") {
      winnerText.innerHTML = xWin
    }
  }
  if (box5.innerHTML == "X") {
    if (box9.innerHTML == "X") {
      winnerText.innerHTML = xWin
    }
  }
   if (box4.innerHTML == "X") {
    if (box7.innerHTML == "X") {
      winnerText.innerHTML = xWin
    }
  }
}
if (box2.innerHTML == "X") {
  if (box5.innerHTML == "X") {
    if (box8.innerHTML == "X") {
      winnerText.innerHTML = xWin
    }
  }
}
if (box3.innerHTML == "X") {
  if (box5.innerHTML == "X") {
    if (box7.innerHTML == "X") {
      winnerText.innerHTML = xWin
    }
  }
  if (box6.innerHTML == "X") {
    if (box9.innerHTML == "X") {
      winnerText.innerHTML = xWin
    }
  }
}
if (box4.innerHTML == "X") {
  if (box5.innerHTML == "X") {
    if (box6.innerHTML == "X") {
      winnerText.innerHTML = xWin
    }
  }
}
if (box7.innerHTML == "X") {
  if (box8.innerHTML == "X") {
    if (box9.innerHTML == "X") {
      winnerText.innerHTML = xWin
    }
  }
}

// All posibilities of O to win
if (box1.innerHTML == "O") {
  if (box2.innerHTML == "O") {
    if (box3.innerHTML == "O") {
      winnerText.innerHTML = oWin
    }
  }
  if (box5.innerHTML == "O") {
    if (box9.innerHTML == "O") {
      winnerText.innerHTML = oWin
    }
  }
   if (box4.innerHTML == "O") {
    if (box7.innerHTML == "O") {
      winnerText.innerHTML = oWin
    }
  }
}
if (box2.innerHTML == "O") {
  if (box5.innerHTML == "O") {
    if (box8.innerHTML == "O") {
      winnerText.innerHTML = oWin
    }
  }
}
if (box3.innerHTML == "O") {
  if (box5.innerHTML == "O") {
    if (box7.innerHTML == "O") {
      winnerText.innerHTML = oWin
    }
  }
  if (box6.innerHTML == "O") {
    if (box9.innerHTML == "O") {
      winnerText.innerHTML = oWin
    }
  }
}
if (box4.innerHTML == "O") {
  if (box5.innerHTML == "O") {
    if (box6.innerHTML == "O") {
      winnerText.innerHTML = oWin
    }
  }
}
if (box7.innerHTML == "O") {
  if (box8.innerHTML == "O") {
    if (box9.innerHTML == "O") {
      winnerText.innerHTML = oWin
    }
  }
}
