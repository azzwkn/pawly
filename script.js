var booking = document.getElementById("booking");

booking.onclick = function() {
    document.getElementById("contact").scrollIntoView();
};


var form = document.getElementById("form");

form.onsubmit = function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formMessage = document.getElementById("formMessage");

    if (name == "" || email == "" || message == "") {

        formMessage.innerHTML = "Silakan isi semua bagian.";

    } else {

        formMessage.innerHTML = "Pesan berhasil dikirim!";

        form.reset();
    }
};