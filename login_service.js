
var CurrentUser;

class User {

    constructor (uname,password,fname,lname,email,birthdate){
        this._username = uname;
        this._password = password;
        this._firstname = fname;
        this._lastname = lname;
        this._email = email;
        this._birthdate = birthdate;
    }

    get username(){
        return this._username;
    }

    get password(){
        return this._password;
    }

    get firstname(){
        this._firstname;
    }

    get lastname(){
        this._lastname;
    }

    get email(){
        return this._email;
    }

    get birthdate(){
        return this._birthdate;
    }
}

function Login(){
    var Username = $("#uname").val();
    var Password = $("#psw").val();

    $("#uname").val("");
    $("#psw").val("");

    CurrentUser = getUserDetail(Username,Password)
    if (CurrentUser != undefined){
        $("#Login").css("display", "none");
        $('#Settings').modal({ backdrop: 'static', keyboard: false});
    }
    else{
        $("#uname").val("");
        $("#psw").val("");
        alert("Autentication faild: worng username or password");
    }
}