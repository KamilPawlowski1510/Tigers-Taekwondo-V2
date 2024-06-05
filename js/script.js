let moved = false

$(".kick").on("click", function(){
    if (moved == false){
        $(".kick").css("transform", "translateX(470px)")
        setTimeout(() => {
            $(".kick").attr("src", "images/kick1.png")
		}, 700)
        moved = true
    }
    else{
        $(".kick").css("transform", "translateX(0px)")
        setTimeout(() => {
            $(".kick").attr("src", "images/kick.png")
		}, 700)
        moved = false
    }
});