var getInfo1 = getSizes.slice(0, 2);
var sizeMap = {
    "30": "#siz301",
    "31": "#siz311",
    "32": "#siz321",
    "33": "#siz331",
    "34": "#siz341",
    "35": "#siz351",
    "36": "#siz361",
    "37": "#siz371",
    "38": "#siz381",
    "39": "#siz391",
    "40": "#siz401",
    "41": "#siz411",
    "42": "#siz421",
    "43": "#siz431",
    "44": "#siz441",
    "45": "#siz451",
    "S": "#sizS1",
    "M_": "#sizM1",
    "L": "#sizL1",
    "X_": "#sizXL1",
    "XX": "#sizXXL1",
    "11": "#siz110CM1",
    "12": "#siz120CM1",
    "13": "#siz130CM1",
    "14": "#siz140CM1",
    "15": "#siz150CM1",
    "16": "#siz160CM1"
};

var checkedElement = sizeMap[getInfo1];
if (checkedElement) {
    document.querySelector(checkedElement).setAttribute("checked", true);
    document.querySelector(checkedElement.replace("1", "")).setAttribute("class", "size active");
}

var displaySizeMap = {
    "S": "S",
    "M_": "M",
    "L": "L",
    "X_": "XL",
    "XX": "XXL",
    "11": "110CM",
    "12": "120CM",
    "13": "130CM",
    "14": "140CM",
    "15": "150CM",
    "16": "160CM"
};

var displaySize = displaySizeMap[getInfo1];
if (displaySize) {
    document.querySelector("#size-display-new").innerHTML = displaySize;
    document.querySelector("#disPlaySize").innerHTML = "<b>(Size - " + displaySize + ")</b>";
}
