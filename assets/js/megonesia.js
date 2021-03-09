$(function () {
    $(".form-group-default .form-control").on('focus', function () {
        $(this).parent().find('label').addClass('focused')
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).parent().find('label').removeClass('focused')
        }
    })

    $.validator.setDefaults({
        highlight: function (element) {
            $(element).addClass('is-invalid')
            $(element).closest('.form-group').addClass('is-invalid')
        },
        unhighlight: function (element) {
            $(element).removeClass('is-invalid')
            $(element).closest('.form-group').removeClass('is-invalid')
        },
        errorElement: 'small',
        errorClass: 'invalid-feedback',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent())
            } else {
                error.insertAfter(element)
            }
        }
    })

    $(".my-validate").each(function () {
        $(this).validate();
    });
})