document.addEventListener("DOMContentLoaded", function () {
    var getSizes = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Size-[")[1].split("]")[0];
    var sizeContainer = document.querySelectorAll(".size-container")[0];
    var sizeDisplay = document.querySelectorAll("#size-display-new")[0];

    function toggleSizeElement(size, displayCondition) {
        var element = document.querySelectorAll("#siz" + size)[0];
        element.style.display = displayCondition ? "unset" : "none";
    }

    function setCheckedAndActive(size, idPrefix) {
        var element = document.querySelectorAll("#" + idPrefix + size + "1")[0];
        element.setAttribute("checked", true);
        var sizeElement = document.querySelectorAll("#" + idPrefix + size)[0];
        sizeElement.setAttribute("class", "size active");
    }

    function updateSizeDisplay(size) {
        sizeDisplay.innerHTML = size.replace("X_", "XL").replace("XX", "XXL");
    }

    // Toggle size elements based on the extracted sizes
    toggleSizeElement(35, getSizes.match(35));
    toggleSizeElement(36, getSizes.match(36));
    toggleSizeElement(37, getSizes.match(37));
    toggleSizeElement(38, getSizes.match(38));
    toggleSizeElement(39, getSizes.match(39));
    toggleSizeElement(40, getSizes.match(40));
    toggleSizeElement(41, getSizes.match(41));
    toggleSizeElement(42, getSizes.match(42));
    toggleSizeElement(43, getSizes.match(43));
    toggleSizeElement(44, getSizes.match(44));
    toggleSizeElement(45, getSizes.match(45));
    toggleSizeElement("S", getSizes.match("S"));
    toggleSizeElement("L", getSizes.match("L"));
    toggleSizeElement("M", getSizes.match("M_"));
    toggleSizeElement("XL", getSizes.match("X_"));
    toggleSizeElement("XXL", getSizes.match("XX"));

    // Set checked and active state for the selected size
    var selectedSize = getSizes.slice(0, 2);
    setCheckedAndActive(selectedSize, "siz");

    // Update size display information
    updateSizeDisplay(selectedSize);

    // Toggle the entire size container based on the presence of any size information
    sizeContainer.style.display = getSizes.match(/[0-9]|[A-Z]/) ? "unset" : "none";
});
//]]>
