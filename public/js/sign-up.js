let phoneNumberInput = document.getElementById("phone-number");

        // Cep telefonu numarasının durumunu saklamak için bir çerez adı belirleyin
        const phoneNumberCookieName = "phoneNumberValidation";

        phoneNumberInput.addEventListener("blur", function() {
            let phoneNumber = phoneNumberInput.value.trim();

            // Cep telefonu numarası sadece sayılardan oluşmalı ve 10 haneli olmalı
            if (/^\d{10}$/.test(phoneNumber)) {
                // Geçerli cep telefonu numarası
                phoneNumberInput.style.border = "2px solid green";

                // Geçerli bir cep telefonu numarası olduğunu belirtmek için çerezi ayarlayın
                document.cookie = phoneNumberCookieName + "=valid; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
            } else {
                // Geçersiz cep telefonu numarası
                phoneNumberInput.style.border = "2px solid red";

                // Geçersiz bir cep telefonu numarası olduğunu belirtmek için çerezi ayarlayın
                document.cookie = phoneNumberCookieName + "=invalid; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
            }
        });

        // Sayfa yüklendiğinde çerezi kontrol edin ve uygun şekilde stil uygulayın
        window.addEventListener("load", function() {
            let phoneNumberValidationCookie = getCookie(phoneNumberCookieName);

            if (phoneNumberValidationCookie === "invalid") {
                // Geçersiz cep telefonu numarası çerezi bulunursa kırmızı kenarlık uygula
                phoneNumberInput.style.border = "2px solid red";
            }
        });

        // Verilen çerez adını kullanarak bir çerezi alın
        function getCookie(name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== "") {
                const cookies = document.cookie.split(";");
                for (const cookie of cookies) {
                    const trimmedCookie = cookie.trim();
                    if (trimmedCookie.startsWith(name + "=")) {
                        cookieValue = trimmedCookie.substring(name.length + 1);
                        break;
                    }
                }
            }
            return cookieValue;
        }
        