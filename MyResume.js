
$(document).ready(function () {
    var clicktime = true;

    // Initial setup
    $(".EAutograph, .Eresume, .listEResume, .listEAuto").hide();
    $("#engbtn").on("click", function () {
        clicktime = !clicktime;
        
        if (clicktime) {
            // 初始中文     
            setTimeout(function () { 
            $("#engbtn").text("English");
            $("#Autograph").text("黃國祐的自傳");
            $("#resume").text("黃國祐的履歷");
            $("#school").text("高雄科技大學輪機工程系");

            $(".Eresume, .resume, .EAutograph, .Autograph, .listEResume, .listResume, .listEAuto, .listAuto").toggle();
        },800);
        } else {
            // 變成英文    
            setTimeout(function () {   
            $("#engbtn").text("中文");
            $("#Autograph").text("Autobiography of Huang Kuo Yu");
            $("#resume").text("Résumé of Huang Kuo Yu");
            $("#school").text("Department of Marine Engineering, National Kaohsiung University of Science and Technology");

            $(".Eresume, .resume, .EAutograph, .Autograph, .listEResume, .listResume, .listEAuto, .listAuto").toggle();
        },800);
        }
        
        setInterval(function () {
            if (clicktime) {
                $(".col-left, .col-mid").css("animationName", "rotate");
            } else {
                $(".col-left, .col-mid").css("animationName", "Erotate");
            }
            },1000);
    });
});