/*$(document).ready(function(){
    $("#contactForm").validate({
        rules:{
            name:{
                required: true,
                minlength:4
            },
            emailAddress:{
                    required:true,
                    email:true
            }
        },
        messages:{
            name:"Please specify your name",
            emailAddress: "Enter a valid Email"


            
        }
    })
})*/



       
/*$('#contactForm').submit(function() 
{
    if ($.trim($("#emailAddress").val()) === "") {
        alert('please enter valid email');
    return false;
    }
});*/








$("#contactForm").submit((e)=>{
            e.preventDefault()
            var $contactForm= $(this);
            if (!$contactForm.valid) return false;

            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzyrzCP6kAzbgAX38ER8GJBkTjAH_ZfUHQlQWgv3rtYixrj02kZ/exec",
                data:$("#contactForm").serialize(),
                method:"POST",
                success:function (response){
                    //alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })





 