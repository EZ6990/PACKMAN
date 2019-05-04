
$(document).ready(function () {
    $("#register_form").validate({
        errorClass: "my-error-class",
        validClass: "my-valid-element",
        highlight: function(element) {
            $(element).removeClass('my-valid-element');
            $(element).addClass('my-error-element');
        },
        unhighlight: function(element) {
            $(element).removeClass('my-error-element');
            $(element).addClass('my-valid-element');
        },
        errorElement: 'span',
        rules: {
            username: {
                required: true
            },
            password: {
                required: true,
                acceptPassword: true,
                minlength: 8
            },
            firstname: {
                required: true,
                accept:'[a-zA-Z]+'
                
            },
            lastname: {
                required: true,
                accept:'[a-zA-Z]+'
            },
            email: {
                required: true,
                email: true,
            },
            birthdate: {
                required: true
            },
        },
        messages: {
            password: {
                acceptPassword:"must contain numbers and letters"
            }
        }
    });
});
jQuery.validator.addMethod("accept", function(value, element, param) {
    return value.match(new RegExp("." + param + "$"));
},"english character only");
jQuery.validator.addMethod("acceptPassword", function(value, element) {
    return (new RegExp("[a-zA-Z]+").test(value) && new RegExp("[0-9]+").test(value));
});

function register(){
    if ($("#register_form").valid())
        addUser(new User($("#runame").val(),$("#rpsw").val(),$("#rfn").val(),$("#rln").val(),$("#remail").val(),$("#rbirth").val()));
}

function validate_form(){
    return validate_notempty() && validate_names() && validate_email() && validate_password();
}