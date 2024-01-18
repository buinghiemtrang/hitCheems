$(document).ready(function() {
    $("img").click(function() {
        var audio = new Audio("./assets/sounds/sound.mp3");
        audio.play();
        $(this).attr("src", "./assets/images/hitcheems2.png");
        setTimeout(() => {$(this).attr("src", "./assets/images/hitcheems.png")} , 100);
   })
})
