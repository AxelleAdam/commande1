$( document ).ready(function() { 
  
    $('#lien-caractere').click(function() {
       $('.bloc-info').removeClass('zone-visible');
          $('.bloc-info').addClass('zone-invisible');
          $('#caractere').addClass('zone-visible');  
          $('#caractere').removeClass('zone-invisible');
    });
    
    $('#lien-presarapide').click(function() {
       $('.bloc-info').removeClass('zone-visible');
          $('.bloc-info').addClass('zone-invisible');
          $('#presarapide').addClass('zone-visible');  
          $('#presarapide').removeClass('zone-invisible');
    });
    
    $('#lien-anecdote').click(function() {
       $('.bloc-info').removeClass('zone-visible');
          $('.bloc-info').addClass('zone-invisible');
          $('#anecdote').addClass('zone-visible');  
          $('#anecdote').removeClass('zone-invisible');
    });  
      $('#lien-capacites').click(function() {
       $('.bloc-info').removeClass('zone-visible');
          $('.bloc-info').addClass('zone-invisible');
          $('#capacites').addClass('zone-visible');  
          $('#capacites').removeClass('zone-invisible');
    });  
    
        $('#lien-was').click(function() {
       $('.bloc-info').removeClass('zone-visible');
          $('.bloc-info').addClass('zone-invisible');
          $('#whoiwas').addClass('zone-visible');  
          $('#whoiwas').removeClass('zone-invisible');
    });  
    
      $('#lien-am').click(function() {
       $('.bloc-info').removeClass('zone-visible');
          $('.bloc-info').addClass('zone-invisible');
          $('#whoiam').addClass('zone-visible');  
          $('#whoiam').removeClass('zone-invisible');
    });  
    
    
        $('#lien-premierpas').click(function() {
       $('.bloc-reglement').removeClass('zone-visible');
          $('.bloc-reglement').addClass('zone-invisible');
          $('#premierpas').addClass('zone-visible');  
          $('#premierpas').removeClass('zone-invisible');
    });  
     $('#lien-jeu').click(function() {
       $('.bloc-reglement').removeClass('zone-visible');
          $('.bloc-reglement').addClass('zone-invisible');
          $('#jeu').addClass('zone-visible');  
          $('#jeu').removeClass('zone-invisible');
    });  
     $('#lien-valide').click(function() {
       $('.bloc-reglement').removeClass('zone-visible');
          $('.bloc-reglement').addClass('zone-invisible');
          $('#valide').addClass('zone-visible');  
          $('#valide').removeClass('zone-invisible');
    });  
  });