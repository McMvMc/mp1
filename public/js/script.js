$(document).ready(function(){$("#levme").click(function(){$("html,body").animate({scrollTop:$("#slider-div").offset().top-64},"slow")}),$("#resume").click(function(){$("html,body").animate({scrollTop:$("#resume-div").offset().top-64},"slow")}),$("#activities").click(function(){$("html,body").animate({scrollTop:$("#activities-div").offset().top-64},"slow")}),$("#contact").click(function(){$("html,body").animate({scrollTop:$("#contact-div").offset().top-64},"slow")}),$("#levme").css({"border-radius":"7px",border:"2px solid #aaaaaa"});var a=!$(document).scrollTop();$(window).scroll(function(){var b=$(document).scrollTop();100>b?($("#levme").css({"border-radius":"5px",border:"2px solid #aaaaaa"}),$("#resume").css({"border-radius":"5px",border:"none"}),$("#activities").css({"border-radius":"5px",border:"none"}),$("#contact").css({"border-radius":"5px",border:"none"})):b<$("#resume-div").offset().top-44?($("#levme").css({"border-radius":"5px",border:"none"}),$("#resume").css({"border-radius":"5px",border:"2px solid #aaaaaa"}),$("#activities").css({"border-radius":"5px",border:"none"}),$("#contact").css({"border-radius":"5px",border:"none"})):b<$("#activities-div").offset().top-44?($("#levme").css({"border-radius":"5px",border:"none"}),$("#resume").css({"border-radius":"5px",border:"none"}),$("#activities").css({"border-radius":"5px",border:"2px solid #aaaaaa"}),$("#contact").css({"border-radius":"5px",border:"none"})):b<$("#contact-div").offset().top-44&&($("#levme").css({"border-radius":"5px",border:"none"}),$("#resume").css({"border-radius":"5px",border:"none"}),$("#activities").css({"border-radius":"5px",border:"none"}),$("#contact").css({"border-radius":"5px",border:"2px solid #aaaaaa"})),b>100&&!a?($("nav").animate({height:"44px"},"fast"),$("nav ul").animate({"font-size":"15px"},"fast"),$("nav li a").animate({padding:"6px"},"fast"),a=!0):100>=b&&a&&($("nav").animate({height:"59px"},"fast"),$("nav ul").animate({"font-size":"20px"},"fast"),$("nav li a").animate({padding:"10px"},"fast"),a=!1)});var b=function(){$("#carousel ul").animate({marginLeft:"-1800px"},3e3,function(){$(this).find("li:last").after($(this).find("li:first")),$(this).css({marginLeft:"-900px"})})},c=window.setInterval(b,7e3);$("#right").click(function(){"-900px"==$("#carousel ul").css("marginLeft")&&$("#carousel ul").animate({marginLeft:"-1800px"},3e3,function(){$(this).find("li:last").after($(this).find("li:first")),$(this).css({marginLeft:"-900px"}),window.clearInterval(c),c=window.setInterval(b,7e3)})}),$("#left").click(function(){"-900px"==$("#carousel ul").css("marginLeft")&&$("#carousel ul").animate({marginLeft:"0px"},3e3,function(){$("#carousel ul li:first").before($("#carousel ul li:last")),$(this).css({marginLeft:"-900px"}),window.clearInterval(c),c=window.setInterval(b,7e3)})}),$("a[name=modal]").click(function(a){a.preventDefault();var b=$(this).attr("href"),c=$(document).height(),d=$(document).innerWidth();$("#mask").css({width:d,height:c}),$("#mask").fadeIn(1e3),$("#mask").fadeTo("slow",.8);$(window).height(),$(window).width();$(b).fadeIn(2e3)}),$(".window .close").click(function(a){a.preventDefault(),$("#mask, .window").hide()}),$("#mask").click(function(){$(this).hide(),$(".window").hide()})});