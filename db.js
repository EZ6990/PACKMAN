

var registerd_users = [new User("a","a","a_fname","a_lname","a_email","a_birthdate")];
var DefaultControlKeys = {Up:'ArrowUp',Down:'ArrowDown',Left:'ArrowLeft',Right:'ArrowRight'}
var DefaultNumberOfMonsters = 3;
var DefaultMonsterColors = ["#F08080","#4169E1","#38a677"];
var DefaultSettings = {MovmentSettings:DefaultControlKeys};
function getUserDetail(uname,pass){
    for (i = 0; i< registerd_users.length; i++){
        if (registerd_users[i].username == uname && registerd_users[i].password == pass)
            return registerd_users[i];
    }
}

function addUser(user){
    registerd_users.push(user);
}

