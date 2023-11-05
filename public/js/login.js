document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.querySelector(".login-container");
    loginContainer.style.transform = "translateX(0)";

    // Bu kısmı ekleyin
    setTimeout(function () {
        loginContainer.classList.add("slide");
    }, 500);
});

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Formun doğrulama işlemleri burada yapılır
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        // Eğer form doğrulanmazsa hata mesajını göster
        const errorText = document.getElementById("error");
        errorText.style.display = "block";

        // Formu titret (shake) efekti ile vurgula
        const loginContainer = document.querySelector(".login-container");
        loginContainer.classList.add("shake");

        setTimeout(function () {
            loginContainer.classList.remove("shake");
        }, 500); // 0.5 saniye sonra shake sınıfını kaldır

        // Alternatif olarak başka bir geribildirim veya işlem yapabilirsiniz
    }
});

const login = (event) => {
    event.preventDefault();

    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let rememberMeCheckbox = document.getElementById("rememberMe");

    const regexUsername = /^[a-zA-Z0-9_]{3,15}$/;
    const regexPassword = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

    if (regexUsername.test(usernameInput.value) && regexPassword.test(passwordInput.value)) {
        console.log('Geçerli kullanıcı adı ve parola');

        if (rememberMeCheckbox.checked) {
            // Kullanıcı adı ve şifre verilerini sakla
            localStorage.setItem("username", usernameInput.value);
            localStorage.setItem("password", passwordInput.value);
        } else {
            // "Beni Hatırla" seçeneği işaretlenmediyse, saklanan verileri temizle
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        // Giriş işlemi yap
    } else {
        console.log('Kötü niyetli aktivite algılandı !!!!!');
    }
}

// Sayfa yüklendiğinde, eğer saklanmış kullanıcı adı ve şifre varsa, input alanlarına yerleştir
window.addEventListener("load", function() {
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
        usernameInput.value = storedUsername;
        passwordInput.value = storedPassword;
    }
});
