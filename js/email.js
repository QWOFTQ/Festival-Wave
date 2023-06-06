function sendMail() {
  var params = {
    from_name: document.getElementById('name').value,
    email_id: document.getElementById('email').value,
    message: document.getElementById('message').value,
  }

  emailjs
    .send('service_462bnng', 'template_z1010u2', params)
    .then(function (res) {
      alert('Success!' + res.status)
    })
}
