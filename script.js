const booking = document.getElementById("daftar");

booking.addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView();
});

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("pesan").value;
    const formMessage = document.getElementById("formMessage");

    if (name == "" || email == "" || message == "") {
        formMessage.textContent = "Lengkapi semua bagian dulu ya!";
    } else {
        formMessage.textContent = "Yeay! Pesanmu berhasil terkirim. Kami akan segera menghubungimu!";
        form.reset();
    }
});