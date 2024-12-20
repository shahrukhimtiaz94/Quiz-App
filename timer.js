var minsLeft = 14;
var secsLeft = 59;
let miNs = document.getElementById("mins");
miNs.innerText = 15;
let seCs = document.getElementById("seconds");
seCs.innerText = "00";

function countdown() {
  miNs.innerText = minsLeft;
  if (minsLeft == 0) {
    minsLeft = "00"
    secsLeft = "00"
  }
    if (secsLeft == 0+"0") {
      secsLeft = 59;
        minsLeft--
    }
  if (minsLeft < 10)
  {
    miNs.innerText = "0" + minsLeft;
  }
  if (secsLeft < 10) {
    seCs.innerText = "0" + secsLeft;
    secsLeft--;
  }
  else {
    seCs.innerText = secsLeft;
    secsLeft--;
  }
}

function startCount() {
  let nameInp = document.getElementById('inpName'); 
  let hide_div = document.getElementById("hide-div");
  let timerDiv = document.getElementById("hideDiv2");
  let container = document.getElementById("cont");
  let headinghide = document.getElementById("heading-hide");
  let show_div = document.getElementById("showdiv-heading");
  let quesTdiv = document.getElementById("alc");
  quesTdiv.style.display = "flex"
  show_div.style.display = "flex";
  headinghide.style.display = "none"
  container.style.flexDirection = "column"
  timerDiv.style.border = "none";
  timerDiv.style.boxShadow = "none";
  timerDiv.style.backdropFilter = "none";
  timerDiv.style.background = "transparent"
  hide_div.style.display = "none"
  nameInp.setAttribute("style", "display: none;");
  let studentName = nameInp.value;
  let userInfo = document.getElementById("user-info");
  userInfo.style.display = "none" 

 document.getElementsByClassName('timemachine')[0].setAttribute("style", "display: flex;");

  
  var timerid = setInterval(countdown, 1000);
  let btnhide = document.getElementById("start")
  let showDiv = document.getElementsByClassName("quiz-body")[0];
  let hideDiv = document.getElementsByClassName("quiz-stop")[0];
  showDiv.style.display = "flex";
  hideDiv.style.display = "none";
  btnhide.style.display = "none"
}

function stopCount() {
  minsLeft = "00"
  secsLeft = "00"
  let btnhide = document.getElementById("stop");
  let btn = document.getElementById("submit");
  btnhide.style.display = "none"
  btn.style.display = "block"
  let showDiv = document.getElementsByClassName("quiz-body")[0];
  let hideDiv = document.getElementsByClassName("quiz-stop")[0];
  let h2 = document.getElementById("h2");
  h2.innerText = "Click submit button to see your score"
  showDiv.style.display = "none";

  hideDiv.style.display = "none";

  console.log(studentName + "Game Fininsh")
}