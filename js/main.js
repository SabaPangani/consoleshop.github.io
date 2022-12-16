$(".dropdown-li").click(function(){
    $(".dropdown-menu").toggleClass("active")
})
$(".bi-list").click(function(){
    $(".modal-navbar").toggleClass("show-modal")
    $("html").css("overflow-y","hidden")
    $(".overlay").toggleClass("active")
})
$(".bi-x").click(function(){
    $(".modal-navbar").removeClass("show-modal")
    $("html").css("overflow-y","visible")
    $(".overlay").removeClass("active")
})

var emailInput = document.querySelector(".emailInput")

emailInput.addEventListener("input",function(){
    if(this.value.length >= 1){
        $(".rounded-pill").css("opacity","1")
        $(".rounded-pill").css("cursor","pointer")
        
    }else{
        $(".rounded-pill").css("opacity",".7")
        $(".rounded-pill").css("cursor","default")
    }
})