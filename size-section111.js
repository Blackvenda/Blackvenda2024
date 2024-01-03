// Get sizes from the HTML content
    var getSizes = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Size-[")[1].split("]")[0];

    // Define size matches
    var sizeMatches = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "S", "L", "M_", "X_", "XX"];

    // Display or hide sizes based on matches
    sizeMatches.forEach(function (size) {
        var element = document.querySelector("#siz" + size);
        getSizes.includes(size) ? element.style.display = "unset" : element.style.display = "none";
    });

    // Display or hide sizes based on specific values
    ["110", "115", "120", "125", "130", "135", "140", "145", "150", "155", "160"].forEach(function (value) {
        var element = document.querySelector("#siz" + value + "CM");
        getSizes.includes(value) ? element.style.display = "unset" : element.style.display = "none";
    });

    // Display or hide sizes based on regular expression match
    var getMatchSize = getSizes.match(/[0-9]|[A-Z]/);
    var sizeContainer = document.querySelectorAll(".size-container")[0];

    getMatchSize ? sizeContainer.style.display = "unset" : sizeContainer.style.display = "none";
</script>
