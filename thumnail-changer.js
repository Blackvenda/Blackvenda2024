  

        // Get references to the elements
        const colorDisplayText = document.getElementById('colorDisplayBew');
        const colorOptionsx = document.querySelectorAll('.color-optionNew');
        const sizeLabels = document.querySelectorAll('.size');

        // Function to update the color display and disable out-of-stock sizes
        function updateColorDisplay(selectedColor) {
            colorDisplayText.innerText = selectedColor;
            removeActiveClassAndCheckSizeInput(); // Remove active class and set active size input to checked
            disableOutOfStockSizes(selectedColor);
        }

        // Initial call to set the initial color display
        updateColorDisplay(colorOptionsx[0].getAttribute('data-color'));

        // Add click event listeners to the color divs
        colorOptionsx.forEach(function(colorOption) {
            colorOption.addEventListener('click', function() {
                const selectedColor = colorOption.getAttribute('data-color');
                updateColorDisplay(selectedColor);
            });
        });

        // Function to disable out-of-stock sizes for the selected color
        function disableOutOfStockSizes(selectedColor) {
            const outOfStockSizes = {};
            const getCol = document.querySelector(".contant-detaiels-here").innerText.split("OutofStockSizes-[")[1].split("]")[0].toLowerCase();
            const availableSizes = document.querySelector(".contant-detaiels-here").innerText.split("Size-[")[1].split("]")[0];

            // Parse the OutofStockSizes data
            getCol.split(',').forEach(function(colorInfo) {
                const parts = colorInfo.split('(');
                const color = parts[0];
                const sizes = parts[1].replace(')', '').split('/');
                outOfStockSizes[color] = sizes;
            });

            const sizes = outOfStockSizes[selectedColor];
            const availableSizeArray = availableSizes.split(' ');

            let firstOutOfStockSizeFound = false;

            // Iterate over size labels and update classes
            sizeLabels.forEach(function(sizeLabel, index) {
                const sizeInput = sizeLabel.querySelector('input');
                const sizeValue = sizeInput.value;
                if (sizes.includes(sizeValue)) {
                    sizeInput.disabled = true;
                    sizeLabel.classList.replace('size', 'size1'); // Replace the class
                } else if (availableSizeArray.includes(sizeValue + '(1)')) {
                    sizeInput.disabled = false;
                    sizeLabel.classList.replace('size1', 'size'); // Restore the original class

                    // Automatically add "active" class to the next available size
                    if (!firstOutOfStockSizeFound) {
                        sizeLabel.classList.add('active');
                        sizeInput.click(); // Programmatically trigger a click on the size input
                        firstOutOfStockSizeFound = true;
                    }else {
					
					}
                }
            });
        }

        // Function to remove the "active" class and set the active size input to checked
        function removeActiveClassAndCheckSizeInput() {
            sizeLabels.forEach(function(sizeLabel) {
                sizeLabel.classList.remove('active');
            });
        }


  

// Get the element with the class "contant-detaiels-here"
var contentElement = document.querySelectorAll(".contant-detaiels-here")[0];

if (contentElement) {
  // Check if the element's inner text contains "OutofStockSizes-["
  var contentText = contentElement.innerText;
  if (contentText.includes("OutofStockSizes-[")) {
    // Show the element with class "color-optionsNew"
    var colorOptionsElement = document.querySelectorAll(".color-optionsNew")[0];
    if (colorOptionsElement) {
      colorOptionsElement.style.display = "flex";
    } else {
      console.error("Element with class 'color-optionsNew' not found.");
    }
  } else {
    // Hide the element with class "color-optionsNew"
    var colorOptionsElement = document.querySelectorAll(".color-optionsNew")[0];
    if (colorOptionsElement) {
      colorOptionsElement.style.display = "none";
    } else {
      console.error("Element with class 'color-optionsNew' not found.");
    }
  }
} else {
  console.error("Element with class 'contant-detaiels-here' not found.");
}


  
            

const contentHereDiv = document.querySelector('.contant-detaiels-here');
        const contentDiscriptionImg = contentHereDiv.innerHTML.split("DiscriptionImgsUrl-[")[1].split("]")[0];
        
        if(contentHereDiv){
        	document.querySelectorAll("#showMoreBtn")[0].style.display= "none";
        }
        
        
        const urlMatches = contentDiscriptionImg;

        if (urlMatches && urlMatches.length > 1) {
            const imageUrls = urlMatches.split(',');
            const descriptionImageDiv = document.querySelector('#description-image');
            const showMoreBtn = document.querySelector('#showMoreBtn');
            const showLessBtn = document.querySelector('#showLessBtn');

            // Function to show images
            function showImages() {
                descriptionImageDiv.style.maxHeight = 'none';
                showMoreBtn.style.display = 'none';
                showLessBtn.style.display = 'block';
            }

            // Function to hide images
            function hideImages() {
                descriptionImageDiv.style.maxHeight = '300px';
                showMoreBtn.style.display = 'block';
                showLessBtn.style.display = 'none';
            }

            showMoreBtn.addEventListener('click', showImages);
            showLessBtn.addEventListener('click', hideImages);

            // Initially, hide images
            hideImages();

            imageUrls.forEach((imageUrl) => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl.trim();
                imgElement.style.width= "100%";
                descriptionImageDiv.appendChild(imgElement);
            });
        }

  

var selectColorz = document.querySelectorAll(".color-optionNew");
  var selectImagesz = document.querySelectorAll(".natural-thumbnail");

  // Add click event listener to each color option
  selectColorz.forEach(function (colorOption, index) {
    colorOption.addEventListener("click", function () {
      // Reset opacity for all thumbnails, excluding 'a' elements
      selectImagesz.forEach(function (thumbnail, thumbnailIndex) {
        if (thumbnail.tagName.toLowerCase() !== 'a') {
          thumbnail.style.opacity = index === thumbnailIndex ? 1 : 0;
        }
      });
    });
  });
