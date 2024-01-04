	document.querySelectorAll("#itemCodeInput")[0].value = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Item Code -[")[1].split("]")[0];

    let url = "https://script.google.com/macros/s/AKfycbwo5bJ04SMHCpXJCFzSFMUT3AFue3e-lgFsjJ5u3AVrzSHpQaHRNl7esog78IXJi1B34g/exec";
    let fileInput = document.getElementById("fileInput");
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let starRatingInput = document.querySelectorAll('input[name="rating"]');
    let reviewTitleInput = document.getElementById("reviewTitleInput");
    let itemCodeInput = document.getElementById("itemCodeInput");
    let submitButton = document.getElementById("submitButton");
    let imageContainer = document.getElementById("imageContainer");
    let loadingMessage = document.querySelector(".loading-message");
    let errorMessages = document.querySelector(".error-message");
    let uploadSuccessMessage = document.querySelector(".upload-success-message");
    let maxImageCount = 5; // Maximum number of images allowed

    fileInput.addEventListener('change', () => {
        // Your existing code for handling file selection
        // ...
        // Display image previews for selected files
        imageContainer.innerHTML = '';
        for (let i = 0; i < fileInput.files.length; i++) {
            let file = fileInput.files[i];
            let img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = "100px"; // Set the maximum width for image previews
            imageContainer.appendChild(img);
        }
    });

    submitButton.addEventListener('click', () => {
        if (fileInput.files.length === 0) {
            alert('Please select at least one image.');
            return;
        }

        if (!nameInput.value || !emailInput.value || !reviewTitleInput.value || !itemCodeInput.value) {
            alert('Please fill in all required fields.');
            return;
        }

        let selectedRating = Array.from(starRatingInput).find(input => input.checked);

        if (!selectedRating) {
            alert('Please select a star rating.');
            return;
        }

        if (fileInput.files.length > maxImageCount) {
            alert(`Please select a maximum of ${maxImageCount} images.`);
            // Clear the file input
            fileInput.value = '';
            return;
        }

        // Show loading message and hide error message
        loadingMessage.style.display = "block";
        errorMessages.style.display = "none";

        // Clear existing images
        imageContainer.innerHTML = '';

        for (let i = 0; i < fileInput.files.length; i++) {
            let file = fileInput.files[i];
            let fr = new FileReader();

            fr.addEventListener("loadend", () => {
                let res = fr.result;
                let spt = res.split("base64,")[1];

                let obj = {
                    base64: spt,
                    type: file.type,
                    name: file.name,
                    folderId: "171aU9i63bFTrMMT_iPJjNcMbIaHAU21X",
                    nameValue: nameInput.value,
                    emailValue: emailInput.value,
                    starRatingValue: selectedRating.value,
                    reviewTitleValue: reviewTitleInput.value,
                    itemCodeValue: itemCodeInput.value
                }

                fetch(url, {
                    method: "POST",
                    body: JSON.stringify(obj)
                })
                .then(response => response.text())
                .then(data => {
                    if (data === 'This email address is already used') {
                        errorMessages.style.display = "block";
                        errorMessages.textContent = data;
                        loadingMessage.style.display = "none";
                    } else {
                        imageContainer.innerHTML += data + ', ';
                        uploadSuccessMessage.textContent = 'Your Review has been submitted.';
                        uploadSuccessMessage.style.display = "block";
                        // Hide loading message
                        loadingMessage.style.display = "none";
                        setTimeout(() => {
                            window.location.reload()
                        }, 3000);
                    }
                })
                .catch(error => console.error(error));
            });

            fr.readAsDataURL(file);
        }
    });
