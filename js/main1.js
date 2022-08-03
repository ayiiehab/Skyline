
var indexPosition = 0;

var rotation = 0;

$("#gallery div").hover(function () { // Mouse over
    indexPosition++;
    $(this).css({
        "z-index": indexPosition,
        "width": "50%",
        "height": "25rem",
    });
    $("#gallery div .caption").css({
        "width": "100%",
        "height": "auto",
    })
    $(this).addClass("noRotation");
    $(this).siblings().css("filter", "blur(3px)");
}, function () { // Mouse out
    $(this).css({
        "width": "40%",
        "height": "20rem",
    });
    $(this).siblings().css("filter", "grayscale(0%)");
    $(this).removeClass("noRotation");
    $("#gallery div .caption").css({
        "width": "100%",
        "height": "auto",
    })
    
});





$(".gallery-block-img img").click(function () {
    $(this).parent().detach().prependTo(".gallery-block-img");
    $(this).parent().siblings().removeClass("col-12");
    $(this).parent().siblings().addClass("col-4")
    $(this).parent().removeClass("col-4");
    $(this).parent().addClass("col-12");
});

