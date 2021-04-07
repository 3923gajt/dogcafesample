$(window).on("load", function() {
    $(".menu-box-half img").click(function() {
        let img_src = $(this).attr("src");
        $(".menu-box-full img").attr("src", img_src);
    });

    $(".drink-half img").click(function() {
        let img_src = $(this).attr("src");
        $(".drink-full img").attr("src", img_src);
    });
    
        $(".bread-half img").click(function() {
        let img_src = $(this).attr("src");
        $(".bread-full img").attr("src", img_src);
    });
    
    $(".pasta-half img").click(function() {
        let img_src = $(this).attr("src");
        $(".pasta-full img").attr("src", img_src);
    });
    
    $(".sweets-half img").click(function() {
        let img_src = $(this).attr("src");
        $(".sweets-full img").attr("src", img_src);
    });
    
});

