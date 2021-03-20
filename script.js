

//Form Submission--------------------------------------------------------------------------------->

$("#contactForm").submit((e)=>{
            e.preventDefault()
            var $contactForm= $(this);
            if (!$contactForm.valid) 
    return false;

            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzyrzCP6kAzbgAX38ER8GJBkTjAH_ZfUHQlQWgv3rtYixrj02kZ/exec",
                data:$("#contactForm").serialize(),
                method:"POST",
                success:function (response){
                   // alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })


// validation--------------------------------------------------------------------------------------->


          function validateName() {

            var name = document.getElementById('contact-name').value;
          
            if(name.length == 0) {
          
              producePrompt('Name is required', 'name-error' , 'red')
              return false;
          
            }
          
            if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
          
              producePrompt('Enter first name and Last name','name-error', 'red');
              return false;
          
            }
          //  if(!name.match([/[0-9]/) ){
           //     producePrompt('Enter first name and Last name','name-error', 'red');
           // }
          
            producePrompt('', 'name-error', 'green');
            return true;
          
          }
          
          function validatePhone() {
          
            var phone = document.getElementById('contact-phone').value;
          
              if(phone.length == 0) {
                producePrompt('Phone number is required.', 'phone-error', 'red');
                return false;
              }
          
              if(!phone.match(/^[0-9]{10}$/)) {
                producePrompt('Only numbers Allowed' ,'phone-error', 'red');
                return false;
              }
          
              if(phone.length != 10) {
                producePrompt('Include area code.', 'phone-error', 'red');
                return false;
              }
          
              
              producePrompt('', 'phone-error', 'green');
              return true;
          
          }
          
          function validateEmail () {
          
            var email = document.getElementById('contact-email').value;
          
            if(email.length == 0) {
          
              producePrompt('Email Required','email-error', 'red');
              return false;
          
            }
          
            if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
          
              producePrompt('Invalid Email', 'email-error', 'red');
              return false;
          
            }
          
            producePrompt('', 'email-error', 'green');
            return true;
          
          }
          
         /* function validateMessage() {
            var message = document.getElementById('contact-message').value;
            var required = 10;
            var left = required - message.length;
          
            if (left > 0) {
              producePrompt(left + ' more characters required','message-error','red');
              return false;
            }
          
            producePrompt('Valid', 'message-error', 'green');
            return true;
          
          }*/
          
          function validateForm() {
            if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
              jsShow('submit-error');
              producePrompt('Please fix errors to submit.', 'submit-error', 'red');
              setTimeout(function(){jsHide('submit-error');}, 2000);
            }
            else {
          
            }
          }
          
          function jsShow(id) {
            document.getElementById(id).style.display = 'block';
          }
          
          function jsHide(id) {
            document.getElementById(id).style.display = 'none';
          }
          
          
          
          
          function producePrompt(message, promptLocation, color) {
          
            document.getElementById(promptLocation).innerHTML = message;
            document.getElementById(promptLocation).style.color = color;
          
          
          }
