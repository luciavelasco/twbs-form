$(function() {
    //JAVASCRIPT

    //document.getElementById('yes-field').innerHTML = 'Hello My dear!';
    //document.getElementsByClassName('form-group')[1].innerHTML = 'Oh no, where\'d it go?!';
    //document.getElementsByTagName('h4')[0].innerHTML = 'Welcome to my mind...';
    //document.getElementsByName('hope')[0].innerHTML = '<h1>Hopeless</h1>';

    //JQUERY

    //$('#yes-field').html('Hello My dear!');
    //$('.form-group').eq(1).html('Oh no, where\'d it go?!');
    //$('h4').first().html('Welcome to my mind...');
    //$('[name=hope]').first().html('<h1>Hopeless</h1>');



    //says something after every input section

    $('[type = text], [type = email]').after('<p>Hello Mein Fein Frende</p>');
    $('.radio').after('<p>BIG PHAT RADIER</p>');

    //$('<p>Hello Mein Fein Frende</p>').insertAfter('[type = text], [type = email]');
    //$('<p>BIG PHAT RADIER</p>').insertAfter('.radio');

    //$('input').not('[type=submit]').after('<p>Hello Mein Fein Frende</p>')

    //var word = document.getElementsByTagName('input')[0].innerHTML;
    //word += '<p>Hello Mein Fein Frende</p>';
    //document.getElementsByTagName('input')[0].innerHTML = word;


})

$(function() {
    $('form').submit(function() {
        console.log('submitted!');

        return false; //this cancels the event, in this case will cancel submission to the server
    })
})