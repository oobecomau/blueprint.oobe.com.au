
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
        $(".ms__img").fadeIn(2000);
        $(".p365__img").fadeIn(2000);       
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

    // Last Modified
    function readDate() {
        let mod_date = document.lastModified;
        var date = new Date(mod_date);
        var day = date.getDate();
        var year = date.getFullYear();
        var month = date.getMonth();
        switch(month) {
            case 0: m = "January";
                break;   
            case 1: m = "February";
                break; 
            case 2: m = "March";
                break;   
            case 3: m = "April";
                break;  
            case 4: m = "May";
                break;   
            case 5: m = "June";
                break; 
            case 6: m = "July";
                break;   
            case 7: m = "August";
                break; 
            case 8: m = "September";
                break;   
            case 9: m = "October";
                break; 
            case 10: m = "November";
                break;   
            case 11: m = "December";
                break;             
        }
        let text = day + " " + m + " " + year;
        var lastMod = document.getElementById("lastModified");
        if (lastMod) {
            lastMod.innerHTML = text;
        }
    }
    readDate();
      
    // Calculate Reading Time 
    function readTime() {
        const text = document.querySelector("article").innerText;
        const wpm = 200;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        var rtime = document.getElementById("time");
        if (rtime) {
            rtime.innerText = time;
        }
    }
    readTime();
     
    /** Place HTML in Markdown to generate Date and Time **/
    // <p id="date-and-time"><span id="time"></span> minutes to read - <span id="lastModified"></span></p> 


    /* Mobile navbar toggle */
    function mobileToggle() {
        var btn = document.getElementById("mobile-navbar-collapse");
        if ( btn.style.display === "block" ) {
            btn.style.display = "none";
            $("#mobile-container-collapse").hide();
            $("#menuToggle .bar:first-child").css("top","0");
            $("#menuToggle .bar:first-child").css("transform","rotate(0deg)");
            $("#menuToggle .bar:nth-child(2)").css("top","10px");
            $("#menuToggle .bar:nth-child(2)").css("opacity","1");
            $("#menuToggle .bar:nth-child(2)").css("right","0");
            $("#menuToggle .bar:last-child").css("transform","rotate(0deg)");
            $("#menuToggle .bar:last-child").css("top","20px");
            $("#menuToggle .bar:last-child").css("margin","0");
            $("#mobile-search").show();
            $(".md-typeset table:not([class])").css("background-color","var(--md-default-bg-color)")
            $(".md-top.md-icon").show();
        } else {
            btn.style.display = "block";
            $("#mobile-container-collapse").show();
            $("#menuToggle .bar:first-child").css("transform","rotate(135deg)");
            $("#menuToggle .bar:first-child").css("top","10px");
            $("#menuToggle .bar:nth-child(2)").css("opacity","0");
            $("#menuToggle .bar:nth-child(2)").css("right","-10px");
            $("#menuToggle .bar:last-child").css("transform","rotate(-135deg)");
            $("#menuToggle .bar:last-child").css("top","10px");
            $("#menuToggle .bar:last-child").css("margin","0");
            $("#mobile-search").hide();
            $(".md-typeset table:not([class])").css("background-color","transparent");
            $(".md-top.md-icon").hide();
        }
    } 
    $("#mobile-navbar-collapse li a").on("click", function(){
        $("#mobile-navbar-collapse").hide();
        $("#mobile-container-collapse").hide();
        $("#menuToggle .bar:first-child").css("top","0");
        $("#menuToggle .bar:first-child").css("transform","rotate(0deg)");
        $("#menuToggle .bar:nth-child(2)").css("top","10px");
        $("#menuToggle .bar:nth-child(2)").css("opacity","1");
        $("#menuToggle .bar:nth-child(2)").css("right","0");
        $("#menuToggle .bar:last-child").css("transform","rotate(0deg)");
        $("#menuToggle .bar:last-child").css("top","20px");
        $("#menuToggle .bar:last-child").css("margin","0");
        $("#mobile-search").show();
        $(".md-top.md-icon").show();
    }); 

    /* Mobile Screen Welcome */
    var n = localStorage.getItem('on_load_counter');
    if ( n === null ) { 
        n = 1;
        $(".mw-flex-container").css("display","flex").show();
        $(".mw-loader").fadeOut(1000);
        $("html").css("overflow-y","hidden");
    } else if ( n > 100 ) { 
        n = 1; 
        $(".mw-flex-container").css("display","flex").show();
        $(".mw-loader").fadeOut(1000);
        $("html").css("overflow-y","hidden");
    } else if ( n < 4 ) {
        n++;
        $(".mw-flex-container").css("display","flex").show();
        $(".mw-loader").fadeOut(1000);
        $("html").css("overflow-y","hidden");
    } else {
        n++;
        $(".mobile-welcome").hide();
        $("html").css("overflow-y","scroll");
    }
    localStorage.setItem('on_load_counter', n);
    document.getElementById('counter').innerHTML = n;
    $("#mobileScreen").on("click", function() {
        $(".mobile-welcome").hide(1000);
        $("html").css("overflow-y","scroll");
    });

