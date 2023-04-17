
    $("#news-iframe-1").on("load", function() {
        $(this).contents().find("head").css("display", "none");
        $(this).contents().find("header").css("display", "none");
        $(this).contents().find("footer").css("display", "none");
        $(this).contents().find("a[data-md-component='top']").css("display", "none");
        $(this).contents().find("div[class='md-main__inner md-grid']").css("margin-top", "0px");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("margin", "0 0 0 0");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-weight", "300");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-size", "1.9em");
        $("#loading-news-1").css("display", "none");
        $(this).show();
        
    });

    $("#news-iframe-2").on("load", function() {
        $(this).contents().find("head").css("display", "none");
        $(this).contents().find("header").css("display", "none");
        $(this).contents().find("footer").css("display", "none");
        $(this).contents().find("a[data-md-component='top']").css("display", "none");
        $(this).contents().find("div[class='md-main__inner md-grid']").css("margin-top", "0px");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("margin", "0 0 0 0");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-weight", "300");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-size", "1.9em");
        $("#loading-news-2").css("display", "none");
        $(this).show();
    });
    
    $("#news-iframe-3").on("load", function() {
        $(this).contents().find("head").css("display", "none");
        $(this).contents().find("header").css("display", "none");
        $(this).contents().find("footer").css("display", "none");
        $(this).contents().find("a[data-md-component='top']").css("display", "none");
        $(this).contents().find("div[class='md-main__inner md-grid']").css("margin-top", "0px");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("margin", "0 0 0 0");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-weight", "300");
        $(this).contents().find("article[class='md-content__inner md-typeset'] h1").css("font-size", "1.9em");
        $("#loading-news-3").css("display", "none");
        $(this).show();
    });

    $(".products-container").html(function(){
        $("#ms").css("background-image", "url(img/oobe-Textured-1920x1080_Energy_Blue03.jpg)");
        $("#p365").css("background-image", "url(img/oobe-Textured-1920x1080_Energy_Blue07.jpg)");
        $("#ms-img").fadeIn(2000);
        $("#p365-img").fadeIn(2000);       
        $("#ms .triangle").fadeIn(2000);
        $("#ms .triangle img").fadeIn(1000);        
        $("#p365 .triangle").fadeIn(2000);
        $("#p365 .triangle img").fadeIn(1000);
        $("#cs .triangle").fadeIn(2000);
        $("#cs .triangle img").fadeIn(1000);
        $("#loading-macro").fadeOut(1000);
        $("#loading-p365").fadeOut(1000);
        $("#loading-cs").fadeOut(1000);
        $("#cs-span").fadeIn(4000);
    });

    