const colorDisplayText = document.getElementById('colorDisplayBew');
const colorOptionsx = document.querySelectorAll('.color-optionNew');
const sizeLabels = document.querySelectorAll('.size');
const contentElement = document.querySelectorAll(".contant-detaiels-here")[0];
const contentDiscriptionImg = contentElement ? contentElement.innerHTML.split("DiscriptionImgsUrl-[")[1].split("]")[0] : null;

function updateColorDisplay(selectedColor) {
    colorDisplayText.innerText = selectedColor;
    removeActiveClassAndCheckSizeInput();
    disableOutOfStockSizes(selectedColor);
}

function removeActiveClassAndCheckSizeInput() {
    sizeLabels.forEach(function(sizeLabel) {
        sizeLabel.classList.remove('active');
    });
}

function disableOutOfStockSizes(selectedColor) {
    const outOfStockSizes = {};
    const getCol = contentElement ? contentElement.innerText.split("OutofStockSizes-[")[1].split("]")[0].toLowerCase() : "";
    const availableSizes = contentElement ? contentElement.innerText.split("Size-[")[1].split("]")[0] : "";

    getCol.split(',').forEach(function(colorInfo) {
        const parts = colorInfo.split('(');
        const color = parts[0];
        const sizes = parts[1].replace(')', '').split('/');
        outOfStockSizes[color] = sizes;
    });

    const sizes = outOfStockSizes[selectedColor];
    const availableSizeArray = availableSizes.split(' ');

    let firstOutOfStockSizeFound = false;

    sizeLabels.forEach(function(sizeLabel, index) {
        const sizeInput = sizeLabel.querySelector('input');
        const sizeValue = sizeInput.value;

        if (sizes.includes(sizeValue)) {
            sizeInput.disabled = true;
            sizeLabel.classList.replace('size', 'size1');
        } else if (availableSizeArray.includes(sizeValue + '(1)')) {
            sizeInput.disabled = false;
            sizeLabel.classList.replace('size1', 'size');

            if (!firstOutOfStockSizeFound) {
                sizeLabel.classList.add('active');
                sizeInput.click();
                firstOutOfStockSizeFound = true;
            }
        }
    });
}

function showHideColorOptions() {
    if (contentElement) {
        const contentText = contentElement.innerText;
        const colorOptionsElement = document.querySelectorAll(".color-optionsNew")[0];

        if (contentText.includes("OutofStockSizes-[")) {
            colorOptionsElement.style.display = "flex";
        } else {
            colorOptionsElement.style.display = "none";
        }
    }
}

function showHideImages() {
    const urlMatches = contentDiscriptionImg;

    if (urlMatches && urlMatches.length > 1) {
        const imageUrls = urlMatches.split(',');
        const descriptionImageDiv = document.querySelector('#description-image');
        const showMoreBtn = document.querySelector('#showMoreBtn');
        const showLessBtn = document.querySelector('#showLessBtn');

        function showImages() {
            descriptionImageDiv.style.maxHeight = 'none';
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'block';
        }

        function hideImages() {
            descriptionImageDiv.style.maxHeight = '300px';
            showMoreBtn.style.display = 'block';
            showLessBtn.style.display = 'none';
        }

        showMoreBtn.addEventListener('click', showImages);
        showLessBtn.addEventListener('click', hideImages);

        hideImages();

        imageUrls.forEach((imageUrl) => {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl.trim();
            imgElement.style.width = "100%";
            descriptionImageDiv.appendChild(imgElement);
        });
    }
}

function changeProductImages() {
    const selectColorz = document.querySelectorAll(".color-optionNew");
    const selectImagesz = document.querySelectorAll(".natural-thumbnail");

    selectColorz.forEach(function(colorOption, index) {
        colorOption.addEventListener("click", function() {
            selectImagesz.forEach(function(thumbnail, thumbnailIndex) {
                if (thumbnail.tagName.toLowerCase() !== 'a') {
                    thumbnail.style.opacity = index === thumbnailIndex ? 1 : 0;
                }
            });
        });
    });
}

updateColorDisplay(colorOptionsx[0].getAttribute('data-color'));
showHideColorOptions();
showHideImages();
changeProductImages();
