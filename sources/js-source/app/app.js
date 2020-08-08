"use strict";

import $ from "jquery";
import slick from "slick";


let displayError = (message) => {
    $(".field-container").append(`<span class="error">${message}</span>`);
}

let changeField = (condition) => {
    
    $('.email-field').css({'border-color': '#ea4632'});
    if (!condition) {
        $('.email-field').css({'border-color': '#77bc20'});   
    }

}

let ajaxRequests = (formData) => {
    $.ajax({ 
        type    : 'POST',
        url     : 'backend/ajax/email-validation.php',
        data    : formData,
        success : output => {
            let data = JSON.parse(output);

            $(".error").remove();

            if (data.error) {
                displayError(data.message);
            }

            changeField(data.error);
        },
        error: (request, status, error) => {
            console.log(request);
            console.log(status);
            console.log(error);
        }
    });
}

let aboutToggle = () => {
    $(".link.-about").on('click', function() {
        event.preventDefault();
        $(".scroll-up").toggleClass('-active');
    });

    $(".scroll-up > .title").on('click', function() {
        event.preventDefault();
        $(".scroll-up").toggleClass('-active');
    });
}

let submitForm = () => {
    $(".signin-form > .button").on("click", function(){
        event.preventDefault();

        let $form = $(this).parent('form');
        let formData = $form.serialize();

        ajaxRequests(formData);
    });
}

$( document ).ready(function() {
    aboutToggle();
    submitForm();
});