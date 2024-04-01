    // Function to set thumbnail image URL to input field
    function setThumbnailUrlToInputField() {
        var thumbnailUrl = getImageUrl(); // Get thumbnail image URL
        document.getElementById("productImgUrl").value = thumbnailUrl; // Set input field value
    }

    // Call the function after the document has fully loaded
    window.addEventListener('DOMContentLoaded', function() {
        setThumbnailUrlToInputField();
    });
