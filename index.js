for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button = this.innerHTML;
    makeSound(button);

  });
}
document.addEventListener("keydown",function(event){ makeSound(event.key);});

function makeSound(key){
  
  switch (key) {

    case "w":
      var audio = new Audio("sounds/s1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/s2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/s3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/s4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/s5.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/s6.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/s7.mp3");
      audio.play();
      break;
    default:
      alert("wrong key pressed..");

  }
}

// for (let i=0;i<document.querySelectorAll(".drum").length;i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click",
//   function (){
//     let k="sounds/s"+(i+1)+".mp3";
//     let audio = new Audio(k);
//     audio.play();
//     this.style.color= "white";
//   }
//   );
// }
// document.addEventListener("keydown",function(){alert("a key pressed");});
