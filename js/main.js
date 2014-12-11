$(document).ready(function() {

//highlight selected answer//

    $('.answer').click(function(){
        $(this).closest("section").find('.selected').removeClass('selected');
        $(this).addClass('selected');
    });


//push val of selected answer to array//

    var answers = [];
    var totalQuestions = $('.question').length;

    $(".submit").click(function(){

        $('input:checked').each(function(){
        answers.push($(this).val());
        });

        if (answers.length === totalQuestions){// make sure all questions have been answered
            getMode();
            response();
        }else{
            modal("you need to answer all of the questions fella");
        }

    });

// calculate the mode of answers array

    var frequency = {};  
    var max = 0;  
    var result;   

    function getMode(){
        for(var v in answers) {
                frequency[answers[v]]=(frequency[answers[v]] || 0)+1; 
                if(frequency[answers[v]] > max) {
                        max = frequency[answers[v]];  
                        result = answers[v];          
                }
        }
    }

//modal window
    var modal = $('.modal-frame');
    var overlay = $('.modal-overlay');

    modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
      if(modal.hasClass('state-leave')) {
        modal.removeClass('state-leave');
      }
    });

    $('.close').on('click', function(){
      overlay.removeClass('state-show');
      modal.removeClass('state-appear').addClass('state-leave');
    });

   function displayModal(modalDialogue){
      overlay.addClass('state-show');
      modal.removeClass('state-leave').addClass('state-appear');
      $(".results").append(modalDialogue);
    }

// give response based on mode
function response(){
    switch (result){

        case "a":
            displayModal("you answered mostly a");
            break;

        case "b":
            displayModal("you answered mostly b");
            break;

        case "c":
            displayModal("you answered mostly c");
            break;

        case "d":
            displayModal("you answered mostly d");
            break;

        default:
            displayModal("you need to answer all questions");
    }
}




});





