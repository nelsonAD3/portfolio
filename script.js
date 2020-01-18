
let STATE_On_Bio=true;

function selectInactive(){
    // alert("in function");
    //on click
    $('.projects-button' ).click(function() {
        // alert( "Handler for .click() called." );

        //update bio button to not greyed
        // let currentButton = $('.current');
        // let inactiveButton = $('.inactive');
        // inactiveButton.toggleClass('inactive current');
        // currentButton.toggleClass('current inactive');
        // inactiveButton.parent().closest("button").toggleClass('current inactive');

        let bioSection = $('#mainSection');
        bioSection.toggleClass('hidden');
        let projectSection = $('.projects');
        projectSection.toggleClass('hidden');
        // console.log(STATE_On_Bio);
        STATE_On_Bio=!STATE_On_Bio;
        // console.log(STATE_On_Bio);

        if (STATE_On_Bio === true){
            let sectionButton = $('.projects-button');
            sectionButton.text('Projects');
        }

        else {
            let sectionButton = $('.projects-button');
            sectionButton.text('Bio');
        }



      });

    //update bio button to not greyed

    // selectInactive();
}

$(selectInactive);