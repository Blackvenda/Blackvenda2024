function updateSelectedColor(selectedDiv) {
            const selectedColor = document.getElementById('colorDisplayBew');
            const colorSendInput = document.getElementById('colorSend');

            // Update the selected color text
            selectedColor.textContent = selectedDiv.dataset.color.replace('-', ' / ').toUpperCase();

            // Remove the red border from previously selected options
            document.querySelectorAll('.color-optionNew.selected').forEach(selectedOption => {
                selectedOption.classList.remove('selected');
            });

            // Apply the red border to the selected div
            selectedDiv.classList.add('selected');

            // Update the input value with the selected color
            colorSendInput.value = selectedDiv.dataset.color;
        }

        const colorOptions = document.querySelector('.color-optionsNew');
        const colorInfo = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML;
        const colorPairsAndSingles = colorInfo.split("Color [")[1].split("]")[0].split(',');

        document.querySelectorAll("#colorDisplayBew")[0].innerHTML =colorPairsAndSingles;
        
        if (colorPairsAndSingles) {
            colorPairsAndSingles.forEach((color, index) => {
                const div = document.createElement('div');
                div.className = 'color-optionNew';
                div.dataset.color = color.toLowerCase().replace(' & ', '-');

                // Check if it's a color pair or an individual color
                if (color.includes('/')) {
                    const colors = color.split(' / ');
                    div.style.background = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;
                } else {
                    div.style.backgroundColor = color.toLowerCase();
                }

                colorOptions.appendChild(div);

                // Pre-select the first color option and apply the red border
                if (index === 0) {
                    div.classList.add('selected');
                    updateSelectedColor(div);
                }

                // Event listener for color change
                div.addEventListener('click', (event) => {
                    updateSelectedColor(event.target);
// Fetch data from the Google Apps Script web app
fetch('https://script.google.com/macros/s/AKfycbxpIgUJoXhnX9ZzdIrEGMZgr_7wDlRZUhAQXwKa_3J0F1XdVWEO4D_9IzetqNyropl8/exec') // Replace with your web app URL
    .then(response => response.text())
    .then(data => {
        const gtB = document.querySelector(".contant-detaiels-here").innerHTML;
        const checking = data.split('Available Qtty"')[1].replaceAll("],[", "/").replaceAll(/"/g, " ").replace("/", "").replaceAll(" ", "");
        const Ditemcode = document.querySelector(".modelNor").textContent;
        const DitemColor = document.querySelectorAll("#colorDisplayBew")[0].innerHTML.toLowerCase().replace(" ","");
        const DitemSize = gtB.split("Size-[")[1].split("]")[0].replaceAll("(1)", "").split(" ");

        // Iterate through sizes and check stock
        for (let i = 0; i < DitemSize.length; i++) {
            const fullForm = Ditemcode + "-" + DitemSize[i] + "," + DitemColor + ",".replaceAll(" ","");
            const checkFulC = checking.split(fullForm)[1].split("/")[0];        
            const finQ = checkFulC[3];
            const getSizD = "siz" + DitemSize[i] + "1";
            if (checkFulC && finQ === "0") {
                document.getElementById(getSizD).disabled = true;
                const sizeLabel = document.getElementById(`siz${DitemSize[i]}`);
                sizeLabel.classList.replace('size', 'size1');
				document.querySelectorAll("#myBtn12")[0].style.display= "none";
				document.querySelectorAll(".adtocart1")[0].style.display= "none";
				document.querySelectorAll(".qtyAviBal")[0].innerHTML ="Out of stock";
				
            }
        }
    })

// Fetch data from the Google Apps Script web app
fetch('https://script.google.com/macros/s/AKfycbxpIgUJoXhnX9ZzdIrEGMZgr_7wDlRZUhAQXwKa_3J0F1XdVWEO4D_9IzetqNyropl8/exec') // Replace with your web app URL
    .then(response => response.text())
    .then(data => {
			const gtB = document.querySelector(".contant-detaiels-here").innerHTML;
	        const checking = data.split('Available Qtty"')[1].replaceAll("],[", "/").replaceAll(/"/g, " ").replace("/", "").replaceAll(" ", "");
	        const Ditemcode = document.querySelector(".modelNor").textContent;
	        const DitemColor = document.querySelectorAll("#colorDisplayBew")[0].innerHTML.toLowerCase().replace(" ","");
	        const DitemSize = gtB.split("Size-[")[1].split("]")[0].replaceAll("(1)", "").split(" ");
        
        // Iterate through sizes and check stock
        for (let i = 0; i < DitemSize.length; i++) {
            const fullForm = Ditemcode + "-" + DitemSize[i] + "," + DitemColor + ",";
            const checkFulC = checking.split(fullForm)[1].split("/")[0].split(",");
            const finQ = checkFulC[3];
            const getSizD = "siz" + DitemSize[i] + "1";

            if (checkFulC && finQ > 0) {
                const sizeLabel = document.getElementById(`siz${DitemSize[i]}`);
		                    document.getElementById("displayxx").innerHTML = "YES";
                sizeLabel.click();
				document.querySelectorAll("#myBtn12")[0].style.display= "";
				document.querySelectorAll(".adtocart1")[0].style.display= "";
				document.querySelectorAll(".qtyAviBal")[0].innerHTML =finQ +" Pieces available";
                break;
               
            }
        }
    })

    
    .catch(error => {
        console.error('Error:', error);
    });

                });
            });
        } else {
            // Handle the case when no color information is found
            colorOptions.textContent = 'No color information available';
        }
//  <!--[Free Shipping Script]-->
const getFshipping = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML;
const Fshipping = getFshipping.split("Delivery Charge-[")[1].split("]")[0]

if(Fshipping === "0"){document.querySelectorAll(".get-dil-Price")[0].innerHTML ="Free Shipping", document.querySelectorAll(".delAmount")[0].innerHTML ="🚚 Free Shipping";} 

var showColorD = document.querySelectorAll("#colorDisplayBew")[0].textContent;
document.querySelectorAll("#colorDisplaySeez")[0].innerHTML="<b>Selected  - </b>"+ "("+showColorD.toLowerCase()+")";
