



function register(){
    validate_form();
}

function validate_form(){
    validate_notempty();
    validate_names();
    validate_email();
    validate_password();
}

function validate_notempty(){
    var result = true;
    $("#Register div.container input").each(function (index, element) {
        if ($(element).val() == ""){
            applyError(element);
            $(element).after("<br><label><b style=\"color:red;\">Field must be filled</b></label>");
            result = false;
        }
    });
    return result;
}

function validate_names(){
    var fname = $("#rfn").val();
    var lname = $("#rln").val();
    var regex = /[a-zA-Z]+/;
    var result1 = regex.test(fname);
    var result2 = regex.test(lname);

    if (!result1){
        applyError($("#rfn"));
        $("#rfn").after("<br><label><b style=\"color:red;\">First Name can be english latters only</b></label>");
    }
    if (!result2){
        applyError($("#rln"));
        $("#rln").after("<br><label><b style=\"color:red;\">Last Name can be english latters only</b></label>");
    }
    
    return result1 && result2; 
}

function validate_email(){
    var email = $("#remail").val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var result = regex.test(email);

    if (!result){
        applyError($("#remail"));
        $("#remail").after("<br><label><b style=\"color:red;\">Enter a valid Email</b></label>");

    }
    
    return result; 
}

function validate_password(){
    var password = $("#rpsw").val();
    var regex1 = /[a-zA-Z]+/;
    var regex2 = /[0-9]+/;
    
    if (!regex1.test(password) || !regex2.test(password) || !password.length >= 8){
        applyError($("#rpsw"));
        $("#rpsw").after("<br><label><b style=\"color:red;\">Password must contains numbers and characters and at least 8 latters long</b></label>");
        return false;
    }
    
    return true; 
}

function applyError(element){
    $(element).css("box-shadow", "0 0 5px #F08080");
    $(element).css("border", "1px solid #F08080");
}