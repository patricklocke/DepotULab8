$(document).ready(function(){

var Die = function (value, roll){
   var newDie = function (){
       $('.container').append("<div class='dice'></div>")
   };
   newDie.value = (Math.floor(Math.random()*6)+1),
   $( '<p>'+newDie.value+'</p>').appendTo('newDie'),
   console.log(newDie.value),
   newDie()
 };

$("#addDie").on('click', function() {
    Die();
});
$('#roll').on('click', function () {
   $('#dice').value=(Math.floor(Math.random()*6)+1)
});


});