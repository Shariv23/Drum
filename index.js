var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml)
    makeAnim(buttonInnerHtml)
    });}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    makeAnim(event.key)
})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play()
            break;
            case "a":
                var tom2 =new Audio("sounds/tom-2.mp3");
                tom2.play()
                break;
                case "s":
                    var tom3 =new Audio("sounds/tom-3.mp3");
                    tom3.play()
                    break;
                    case "d":
                        var tom4 =new Audio("sounds/tom-4.mp3");
                        tom4.play()
                        break;
                        case "j":
                            var cr =new Audio("sounds/crash.mp3");
                            cr.play()
                            break;
                            case "k":
                                var ki=new Audio("sounds/kick-bass.mp3");
                                ki.play()
                                break;
                                case "l":
                                    var sn =new Audio("sounds/snare.mp3");
                                    sn.play()
                                    break;
                                                          
                                                                   
        default: console.log(key)
}
}

function makeAnim(key){
    var activeKey=document.querySelector("." + key);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },100)
}
