$(function(){
 
  var texte_milieu = " a posté dans ";
  var si_titre_vide = "ce sujet";
 
  if(typeof(compileNotif)!="function")return;var d=compileNotif;Toolbar.compileNotif=compileNotif=function(b){var a=d(b);if(b.text.type==FA.Notification.NOTIF_TOPIC_WATCH){var c=a.match(/^(.*) a écrit un message dans (<a href="\/t[0-9]+(p[0-9]+)?-([^#?"]*)[^"]+">)[^<]+<\/a>$/);c&&(b=c[1]+texte_milieu+c[2],a=c[4],a="topic"==a||/^[\s-]*$/.test(a)?si_titre_vide:a.replace(/-/g," ").replace(/(^\s+|\s+$)/g,""),a=b+a+"</a>")}return a}
 
});
