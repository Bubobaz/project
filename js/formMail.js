$("#sendMail").on("click", function(){
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var ball = 0;
    var myform = this.form;
   

    if(email == ""){
        $("#errorMess").text("Введите Email");
        return false;
    }
    else if(name == ""){
        $("#errorMess").text("Введите имя");
        return false;
    }

    $("#errorMess").text("");

    if(myform.vopr1.value == 1) ball++;
    if(myform.vopr2.value == 5) ball++;
    if(myform.vopr3.value == 7) ball++;

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {'name':name, 'email':email, 'ball':ball },
        dataType: 'html',
        beforeSend: function(){
            $("#sendMail").prop("disabled", true);
        },
        success: function(data){
            if(!data)
            alert("Были ошибки, данные не отправлены!");
            else
            alert("Ваш результат: " + ball + " из 3");
            $("#mailForm").trigger("reset");
            $("#sendMail").prop("disabled", false);
        }
    });
});