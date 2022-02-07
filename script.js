jQuery("#frm").validate({
        rules:{
            name: "required",
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
            },
        }, messages:{
            name: "required",
            email: {
                required: "Enter your email",
                email: "Enter valid email",
            },
            password: {
                required: "enter the password",
                minlength: "enter 8 chars",
            },
        },
        submitHandler:function(form){
            form.submit();
        }
});