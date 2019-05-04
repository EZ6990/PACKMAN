
$(document).ready(function () {
    $("#settings_form").validate({
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
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent(".input-group"));
        },
        rules: {
           keyup: {
                required: true,
                uniqKey: ['settings_move_down','settings_move_left','settings_move_right']
           },
           keydown: {
                required: true,
                uniqKey: ['settings_move_up','settings_move_left','settings_move_right']
           },
           keyleft: {
                required: true,
                uniqKey: ['settings_move_down','settings_move_up','settings_move_right']
           },
           keyright: {
                required: true,
                uniqKey: ['settings_move_down','settings_move_left','settings_move_up']
           },
           keyright: {
                required: true,
                uniqKey: ['settings_move_down','settings_move_left','settings_move_up']
            },
            numberofcoins: {
                required: true,
                number: true,
                min:50,
                max:90,
                step:1
            }
        }
    });
});
jQuery.validator.addMethod("uniqKey", function(value, element,param) {
    return (value != $("#"+param[0]).val() && value != $("#"+param[1]).val() && value != $("#"+param[2]).val())
},"must be uniq key");

var UserSettings = DefaultSettings;
var movmentSet = '';
$(document).on('show.bs.modal',"#Settings", function (e) {

    $("#settings_move_up").val(UserSettings['MovmentSettings']['Up']);
    $("#settings_move_down").val(UserSettings['MovmentSettings']['Down']);
    $("#settings_move_left").val(UserSettings['MovmentSettings']['Left']);
    $("#settings_move_right").val(UserSettings['MovmentSettings']['Right']);

    $("#5-points-color input").val(UserSettings['CoinsColors'][0]);
    $("#15-points-color input").val(UserSettings['CoinsColors'][1]);
    $("#25-points-color input").val(UserSettings['CoinsColors'][2]);

    $("#number-of-coins").val(UserSettings['NumberOfCoins']);
    
});
$(document).on('hide.bs.modal',"#Settings", function (e) {
    UserSettings['MovmentSettings']['Up'] = $("#settings_move_up").val();
    UserSettings['MovmentSettings']['Down'] = $("#settings_move_down").val();
    UserSettings['MovmentSettings']['Left'] = $("#settings_move_left").val();
    UserSettings['MovmentSettings']['Right'] = $("#settings_move_right").val();

    UserSettings['CoinsColors'][0] = $("#5-points-color input").val();
    UserSettings['CoinsColors'][1] = $("#15-points-color input").val();
    UserSettings['CoinsColors'][2] = $("#25-points-color input").val();

    UserSettings['NumberOfCoins'] = $("#number-of-coins").val();

});

$(document).on('hidden.bs.modal',"#Settings", function (e) {
    $("#Game").css("display", "block");
    Start();
});

$(document).on('keydown',  function (e) {
    if($('#SetKeyBoard').is(':visible')) {
        setting_id = "settings_move_" + movmentSet.toLowerCase();
        $('#' + setting_id).val(e.code);
        $('#keydata').val(e.code);
        $('#SetKeyBoard').modal('toggle'); 
    }
});

function setKeyboardControlKey(direction){
    movmentSet = direction;
    $('#keydata').text(UserSettings['MovmentSettings'][direction]);
    showModal('SetKeyBoard');
}