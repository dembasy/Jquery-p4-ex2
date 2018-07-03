$(function(){
  $('.moyenne').click(function(){
    var note1 = $('#note1').val();
    var note2 = $('#note2').val();
    var note3 = $('#note3').val();
    var note4 = $('#note4').val();
    var note5 = $('#note5').val();
    if(!isNaN(note1) == true && !isNaN(note2) == true && !isNaN(note3) == true && !isNaN(note4) == true && !isNaN(note5) == true)
     {
       var result = (parseInt(note1) + parseInt(note2) + parseInt(note3) + parseInt(note4) + parseInt(note5))/5;
       $('p').text(result);
       if(result >= 0 && result < 10)
        {
          $('p').text(result + '\n Appréciation: En dessous de la moyenne');
        }
        else if(result >= 10 && result < 13)
         {
           $('p').text(result + '\n Appréciation: Moyen');
         }
         else if(result >= 13 && result < 16 )
          {
            $('p').text(result + '\n Appréciation: Bien');
          }
          else if(result >= 16 && result < 20 )
           {
             $('p').text(result + '\n Appréciation: Très Bien');
             console.log(result)
           }
           else if(result == 20 )
            {
              $('p').text(result + '\n Appréciation: Excellent');
            }
     }
  });
});
