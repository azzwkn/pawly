var booking = document.getElementById("daftar");

booking.onclick = function() {
    document.getElementById("contact").scrollIntoView();
};


var form = document.getElementById("form");

form.onsubmit = function(event) {

    event.preventDefault();

    var name = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("pesan").value;

    var formMessage = document.getElementById("formMessage");

    if (name == "" || email == "" || message == "") {

        formMessage.innerHTML = "Lengkapi semua bagian dulu ya!";

    } else {

        formMessage.innerHTML = "Yeay! Pesanmu berhasil terkirim. Kami akan segera menghubungimu!";

        form.reset();
    }
};