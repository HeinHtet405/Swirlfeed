/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
   
   // On click signup, hide login and show registration form
   $("#signup").click(function(){
       $("#first").slideUp("slow", function(){
            $("#second").slideDown("slow");
       });
   });
   
   // On click signup, hide registration and show login form
    $("#signin").click(function(){
       $("#second").slideUp("slow", function(){
            $("#first").slideDown("slow");
       });
   });
    
});

