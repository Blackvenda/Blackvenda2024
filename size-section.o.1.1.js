document.addEventListener("DOMContentLoaded", function () {
    var sizesContainer = document.querySelector(".size-container");
    sizesContainer.style.display = "none"; // Hide the sizes container by default

    var getSizes = document.querySelector(".contant-detaiels-here").innerHTML;
    var sizesToShow = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "S", "L", "M_", "X_", "XX"];

    sizesToShow.forEach(function (size) {
        var sizeElement = document.querySelector("#siz" + size);
        var sizeMatch = getSizes.includes(size);
        sizeElement.style.display = sizeMatch ? "unset" : "none";
    });

    var siz30Element = document.querySelector("#siz30");
    var siz30Match = getSizes.includes("30") || getSizes.includes("31") || getSizes.includes("32") || getSizes.includes("33") || getSizes.includes("34");
    siz30Element.style.display = siz30Match ? "unset" : "none";

    sizesContainer.style.display = sizesToShow.some(function (size) {
        return getSizes.includes(size);
    }) ? "unset" : "none";
});
