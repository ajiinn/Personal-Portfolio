function SendMail(){
    var params = {
        from_name : document.getElementById('name').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_j9iqgiv', 'template_awnd6e2', params).then(function(res){
        alert('Success!' + res.status)
    })
}