function calculateEstimatedShippingDate() {
            const t = new Date();
            const e = new Date(t);
            e.setDate(t.getDate() + 14);
            return e;
        }

        function calculateNewEstimatedShippingDate() {
            const t = new Date();
            const e = new Date(t);
            e.setDate(t.getDate() + 6);
            return e;
        }

        const newEstimatedDateElement = document.getElementById("newEstimatedDate");
        const estimatedDate2Element = document.getElementById("estimatedDate2");

        const newEstimatedDate = calculateNewEstimatedShippingDate();
        const estimatedDate2 = calculateEstimatedShippingDate();

        newEstimatedDateElement.textContent = newEstimatedDate.toDateString();
        estimatedDate2Element.textContent = estimatedDate2.toDateString();

        const gtInfoInterShipping = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("International Shipping-[")[1].split("]")[0];
        const gtInfoLocShipping = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Local Shpping-[")[1].split("]")[0];
        const gtInfoInterwithLocShipping = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Inter Product Local Shipping-[")[1].split("]")[0];

        if (gtInfoInterShipping.includes("Y")) {
            document.querySelectorAll("#newEstimatedDate")[0].style.display = "none";
            document.querySelectorAll(".cash-on-delivery")[0].style.display = "none";
            document.querySelectorAll(".delivery-option-item__time")[0].innerHTML = "14 - 25 Working day(s)";
            document.querySelectorAll(".diliverCrg")[0].innerText = document.querySelectorAll(".delAmount")[0].innerText;
            document.querySelectorAll(".estDat")[0].innerHTML = document.querySelectorAll("#estimatedDate2")[0].innerHTML;
        } else if (gtInfoLocShipping.includes("Y")) {
            document.querySelectorAll(".mainCheckingDelShow")[0].style.display = "";
            document.querySelectorAll(".dilDater")[0]innerHTML="3-7 Working days";
            document.querySelectorAll("#estimatedDate2")[0].style.display = "none";
            document.querySelectorAll(".overTheSea")[0].style.display = "none";
            document.querySelectorAll(".diliverCrg")[0].innerText = document.querySelectorAll(".delAmount")[0].innerText;
        } else if (gtInfoInterwithLocShipping.includes("Y")) {
            document.querySelectorAll("#estimatedDate2")[0].style.display = "none";
            document.querySelectorAll(".mainCheckingDelShow")[0].style.display = "none";
            document.querySelectorAll(".overTheSea")[0].style.display = "none";
            document.querySelectorAll(".cash-on-delivery")[0].style.display = "none";
        }
