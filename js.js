$(".photo").click(function (e) { 
    let src = $(this).attr("src")
    $(".main").attr("src",src);
    $(".photo").removeClass("border-4 opacity-35 border-orange-400");
    $(this).addClass("border-4 rounded-lg opacity-35 border-orange-400");
});

$(document).click(function (e) {
    $(".back").removeClass("flex").addClass("hidden");
});

$(".not").click(function (e) {
    e.stopPropagation();
});
$(document).ready(function () {
    // Function to manage click event binding based on screen width
    function toggleClickEvent() {
        let screenWidth = $(window).width();
        
        if (screenWidth > 1013) {  // Define "large screen" size
            console.log("Attaching click event for large screens");
            $(".main").off("click").on("click", function (e) { // Re-attach click event
                $(".back").removeClass("hidden").addClass("flex");
                e.stopPropagation();
            });
        } else {
            console.log("Removing click event for small screens");
            $(".main").off("click"); // Remove click event for small screens
        }
    }

    // Call function on initial load
    toggleClickEvent();

    // Call function every time window is resized
    $(window).resize(function () {
        toggleClickEvent();
    });
});


let images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
];

let current = 0
$(".rarrow").click(function (e) { 
     current =(current + 1) % images.length
     
    $(".main").attr("src", images[current]);
    
});
$(".larrow").click(function (e) { 
    current = (current - 1 + images.length) % images.length;
     
    $(".main").attr("src", images[current]);
    
});
let now = 0
$(".plus").click(function (e) {
    now = now + 1
    $(".zero").eq(0).html(now);
});
$(".minus").click(function (e) {
    now = now - 1
    if (now < 0 ) {
        now = 0
    }
    $(".zero").eq(0).html(now);
});

$(".bars").click(function (e) { 
    $(".side").toggle();
});
$(".mark").click(function (e) { 
    $(".side").toggle();
});

$(".cart").click(function (e) { 
    if ($(window).width()>500) {
        
        $(".check1").toggle();
    }else{
        $(".check2").toggle();
    }
});
 let tot = 125
console.log(tot);

$(".add").click(function (e) { 
    $(".one").removeClass("hidden").addClass("flex").show().html($(".zero").html());
    $(".price2").removeClass("hidden").addClass("flex");
    $(".empty").hide();
    $(".inner").html($(".zero").html());
    tot = 125 * $(".zero").html();
    $(".total").html(tot);
    if ($(".total").html() == "0") {
        $(".price2").addClass("hidden");  
        $(".empty").show();               
        $(".one").hide();  
    }
});

$(".trash").click(function (e) { 
    $(".price2").addClass("hidden");  
    $(".empty").show();               
    $(".one").hide();                 
});
$(window).resize(function() {
    console.log(screen.width);
});
