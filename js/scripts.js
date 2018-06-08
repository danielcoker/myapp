$('#contact-form').on('submit', function(e) {
    // Make variables for input values
    var name = $('#name'),
        subject = $('#subject'),
        message = $('#message');
    if (name.val().length == 0) {
        $('#nameError').html("<i class='fa fa-exclamation-circle'></i> Enter your name.");
    } else if (subject.val().length == 0) {
        $('#subjectError').html("<i class='fa fa-exclamation-circle'></i> Enter the subject of your message.");
    } else if (message.val().length == 0) {
        $('#messageError').html("<i class='fa fa-exclamation-circle'></i> Enter your message.");
    } else {
        alert("No errors in your form!");
        return true;
    }
    return false;
});