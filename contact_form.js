(function ($) {
    $('.form_submit').click(function (event) {
        event.preventDefault()
        console.log("clicked")

        var name = $('.name').val()
        var email = $('.email').val()
        var message = $('.message').val()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            console.log("E-Mail is valid")
        } else {
            alert("E-Mail is not valid")
        }

        if(message.length >= 10){
            console.log("Message is valid")
        } else {
            alert("Message is not valid")
        }

        Email.send({
            SecureToken: "a5eb47d0-eb32-48be-97e1-2373f52416b2",
            To : "hello@bliro.io",
            From: "m.thoma@bliro.io",
            Subject : "New CONTACT from " + name + " (" + email + ")",
            Body : "Email From " + name + "(" + email + ")" + "Message: " + message
    }).then(
    message => console.log(message)
        );

        document.getElementById("form_name").value = ''
        document.getElementById("form_mail").value = ''
        document.getElementById("form_message").value = ''
    })
})