//<![CDATA[
  const colorDisplayText = document.getElementById('colorDisplayBew');
  const colorOptionsx = document.querySelectorAll('.color-optionNew');
  const sizeLabels = document.querySelectorAll('.size');

  function updateColorDisplay(selectedColor) {
    colorDisplayText.innerText = selectedColor;
    removeActiveClassAndCheckSizeInput();
    disableOutOfStockSizes(selectedColor);
  }

  updateColorDisplay(colorOptionsx[0].getAttribute('data-color'));

  colorOptionsx.forEach(function(colorOption) {
    colorOption.addEventListener('click', function() {
      const selectedColor = colorOption.getAttribute('data-color');
      updateColorDisplay(selectedColor);
    });
  });

  function disableOutOfStockSizes(selectedColor) {
    // Implementation for disabling out-of-stock sizes goes here
    // ...
  }

  function removeActiveClassAndCheckSizeInput() {
    // Implementation for removing active class and checking size input goes here
    // ...
  }
  //]]>
</script>

<!-- Script for showing/hiding color options based on availability -->
<script>
  //<![CDATA[
  const contentElement = document.querySelectorAll(".contant-detaiels-here")[0];

  if (contentElement) {
    const contentText = contentElement.innerText;
    const colorOptionsElement = document.querySelectorAll(".color-optionsNew")[0];

    if (colorOptionsElement) {
      colorOptionsElement.style.display = contentText.includes("OutofStockSizes-[") ? "flex" : "none";
    } else {
      console.error("Element with class 'color-optionsNew' not found.");
    }
  } else {
    console.error("Element with class 'contant-detaiels-here' not found.");
  }
  //]]>
</script>

<!-- Script for displaying images and toggle functionality -->
<script>
  //<![CDATA[
  const contentHereDiv = document.querySelector('.contant-detaiels-here');
  const contentDiscriptionImg = contentHereDiv.innerHTML.split("DiscriptionImgsUrl-[")[1].split("]")[0];

  if (contentHereDiv) {
    document.querySelectorAll("#showMoreBtn")[0].style.display = "none";
  }

  const urlMatches = contentDiscriptionImg;

  if (urlMatches && urlMatches.length > 1) {
    // Implementation for displaying images and toggle functionality goes here
    // ...
  }
  //]]>
</script>

<!-- Script for changing product images based on color selection -->
<script>
  //<![CDATA[
  var selectColorz = document.querySelectorAll(".color-optionNew");
  var selectImagesz = document.querySelectorAll(".natural-thumbnail");

  selectColorz.forEach(function (colorOption, index) {
    colorOption.addEventListener("click", function () {
      selectImagesz.forEach(function (thumbnail, thumbnailIndex) {
        if (thumbnail.tagName.toLowerCase() !== 'a') {
          thumbnail.style.opacity = index === thumbnailIndex ? 1 : 0;
        }
      });
    });
  });
  //]]>
