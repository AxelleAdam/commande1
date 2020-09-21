$(function(){
    $.get($("#dernier_membre a[href^='/u']")[0].href,function(d){
    (a=$("#avatar_membre img",$(d))).length&&$("#avatar_dernier_membre").html(a);})
    });
