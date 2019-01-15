
(function ($) {
    "use strict";
    var mainApp = {

        metisMenu: function () {

          

            $('#main-menu').metisMenu();

        },


        loadMenu: function () {


            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });
        },
        slide_show: function () {


            $('#carousel-example').carousel({
                interval: 3000 
            })
        },
        reviews_fun: function () {
         
            $('#reviews').carousel({
                interval: 2000 
            })
        },
        wizard_fun: function () {
          
            $(function () {
                $("#wizard").steps({
                    headerTag: "h2",
                    bodyTag: "section",
                    transitionEffect: "slideLeft"
                });
            });
            $(function () {
                $("#wizardV").steps({
                    headerTag: "h2",
                    bodyTag: "section",
                    transitionEffect: "slideLeft",
                    stepsOrientation: "vertical"
                });
            });
        },
       
        
    };
    $(document).ready(function () {
        mainApp.metisMenu();
        mainApp.loadMenu();
        mainApp.slide_show();
        mainApp.reviews_fun();
        mainApp.wizard_fun();
       
    });
}(jQuery));