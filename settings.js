

var controlKeys = controlDefaultKeys;


$(document).on('keydown',  function (e) {
    if($('#SetKeyBoard').is(':visible')) {
        controlKeys['Up'] = e.code;
        $('#keydata').text(controlKeys[direction]);
    }
});



function setKeyboardControlKey(direction){
    $('#keydata').text(controlKeys[direction]);
    showModal('SetKeyBoard');

}