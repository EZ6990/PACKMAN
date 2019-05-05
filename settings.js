
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
            },
            gametime :{
                required: true,
                number: true,
                min:50,
                step:1
            },
            pointscolor5: {
                required: true
            },
            pointscolor15: {
                required: true
            },
            pointscolor25: {
                required: true
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

    $("#points-color-5 input").val(UserSettings['CoinsColors'][0]);
    $("#points-color-15 input").val(UserSettings['CoinsColors'][1]);
    $("#points-color-25 input").val(UserSettings['CoinsColors'][2]);

    $("#number-of-coins").val(UserSettings['NumberOfCoins']);

    $("#game-time").val(UserSettings['GameTime']);



});
$(document).on('hide.bs.modal',"#Settings", function (e) {

        UserSettings['MovmentSettings']['Up'] = $("#settings_move_up").val();
        UserSettings['MovmentSettings']['Down'] = $("#settings_move_down").val();
        UserSettings['MovmentSettings']['Left'] = $("#settings_move_left").val();
        UserSettings['MovmentSettings']['Right'] = $("#settings_move_right").val();

        UserSettings['CoinsColors'][0] = $("#points-color-5 input").val();
        UserSettings['CoinsColors'][1] = $("#points-color-15 input").val();
        UserSettings['CoinsColors'][2] = $("#points-color-25 input").val();

        UserSettings['NumberOfCoins'] = $("#number-of-coins").val();
        UserSettings['NumberOfMonsters'] = $("input:radio[name='optradio']:checked").val();

        UserSettings['GameTime'] = $("#game-time").val();
});

$(document).on('hidden.bs.modal',"#Settings", function (e) {
        $("#Game").css("display", "block");
        Start();
});

$(document).on('hidden.bs.modal',"#SetKeyBoard", function (event) {
    event.stopPropagation();
});

$(document).on('keydown',  function (e) {
    if($('#SetKeyBoard').is(':visible')) {
        setting_id = "settings_move_" + movmentSet.toLowerCase();
        $('#' + setting_id).val(e.code);
        $('#keydata').val(e.code);
        $('#SetKeyBoard').modal('hide');
    }
});

function setKeyboardControlKey(direction){
    movmentSet = direction;
    $('#keydata').text(UserSettings['MovmentSettings'][direction]);
    $('#SetKeyBoard').modal({ backdrop: 'static', keyboard: false});
}

function showSettings(){
    $(".Content").css("display", "none");
    $('#Settings').modal({ backdrop: 'static', keyboard: false});
}