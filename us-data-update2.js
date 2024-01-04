        function getUserInfo() {
            var name = document.getElementById('userNm').textContent;
            var email = document.getElementById('userEm').textContent;

            fetch('https://script.google.com/macros/s/AKfycbzxrQe4-VeD5kmqkjilzPZMW3PUB2ueVbi2qfnvcshPEnDKzsgi-4eDyjEMLcHhQ478kQ/exec?name=' + name + '&email=' + email)
                .then(response => response.json())
                .then(data => {
 
                    document.getElementById('fullNameInput').value = data.fullName;
                    document.getElementById('locationInput').value = data.district;
                    document.getElementById('subLocationInput').value = data.city;
                    document.getElementById('mobileNumberInput').value = data.mobileNumber;
                    document.getElementById('addressInput').value = data.address;

                });

        }

        document.addEventListener("DOMContentLoaded", getUserInfo);
