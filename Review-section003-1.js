        function countAndDisplayFilteredResults(itemCode) {
        
        
            const reviews = document.querySelectorAll('.sectionCommentz');
            let filteredCount = 0;
            
            const starCounts = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
    };

            reviews.forEach(review => {
                const itemSpan = review.querySelector('.itemcx');
                const txtValue = itemSpan.textContent || itemSpan.innerText;

                if (txtValue === itemCode) {
                 const rating = parseInt(review.querySelector('.star-icon').getAttribute('data-rating'));
            starCounts[rating]++;
                    filteredCount++;
                }
            });
            
                // Update the HTML elements with the rating counts
    document.getElementById('star5Count').textContent = starCounts[5];
    document.getElementById('star4Count').textContent = starCounts[4];
    document.getElementById('star3Count').textContent = starCounts[3];
    document.getElementById('star2Count').textContent = starCounts[2];
    document.getElementById('star1Count').textContent = starCounts[1];

            const commentCountElement = document.getElementById('commentCount');
			const showValueDiv = document.querySelectorAll(".rating-countz")[0];
            commentCountElement.textContent = ` ${filteredCount}`;
        	showValueDiv.textContent = ` ${filteredCount} Ratings`;

            // Calculate total number of ratings
const totalRatings = starCounts[1] + starCounts[2] + starCounts[3] + starCounts[4] + starCounts[5];

// Calculate the percentage of each rating count
const percentage5Star = (starCounts[5] / totalRatings) * 100;
const percentage4Star = (starCounts[4] / totalRatings) * 100;
const percentage3Star = (starCounts[3] / totalRatings) * 100;
const percentage2Star = (starCounts[2] / totalRatings) * 100;
const percentage1Star = (starCounts[1] / totalRatings) * 100;

// Update the width of each bar
document.querySelector('.bar-5').style.width = percentage5Star + '%';
document.querySelector('.bar-4').style.width = percentage4Star + '%';
document.querySelector('.bar-3').style.width = percentage3Star + '%';
document.querySelector('.bar-2').style.width = percentage2Star + '%';
document.querySelector('.bar-1').style.width = percentage1Star + '%';

            
            
        }
        
        

    document.addEventListener("DOMContentLoaded", function () {

        function calculateStarRatingsAndDates() {
        const itemCodeElement = document.getElementById("itemCode");
            const itemCode = itemCodeElement ? itemCodeElement.textContent : "";

            countAndDisplayFilteredResults(itemCode);
            const reviewCards = document.querySelectorAll(".review-card");

            reviewCards.forEach(reviewCard => {
                const reviewRating = parseInt(reviewCard.querySelector(".star-icon").getAttribute("data-rating"));
                const reviewRatingElement = reviewCard.querySelector(".review-rating");

                for (let i = 0; i < reviewRating; i++) {
                    const starIcon = document.createElement("span");
                    starIcon.classList.add("star-icon");
                    starIcon.innerHTML = "★";
                    reviewRatingElement.appendChild(starIcon);
                }

                const postedDateElement = reviewCard.querySelector(".posted-date");
                const reviewDate = new Date(postedDateElement.textContent);

                const currentDate = new Date();
                const timeDifference = currentDate - reviewDate;
                const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                postedDateElement.textContent = `${daysDifference === 1 ? '1 day' : daysDifference + ' days'} ago`;
            });
        }

        function displayReviews(reviews) {
            const reviewsContainer = document.getElementById('reviews');

            reviews.forEach(review => {
                const commentElement = document.createElement('li');
                commentElement.classList.add('commentz');
                commentElement.innerHTML = `
                    <div class="sectionCommentz ${review.ItemCode}">
                        <div class="review-card">
                            <p class="review-date">
                                <span class="posted-date">${review.Date}</span>
                            </p>
                            <p class="review-author">
                                <b>${review.Name}</b>
                                <span>
                                    <img class="verifyImg" width="15" height="16" src="//laz-img-cdn.alicdn.com/tfs/TB1bOqBeb_I8KJjy1XaXXbsxpXa-30-32.png" data-spm-anchor-id="a2a0e.pdp.ratings_reviews.i5.4c593359XxuS8k">
                                    <span style="color: #4caf50;" class="verify">Verified Purchase</span>
                                </span>
                            </p>
                            <p class="review-rating">
                                <span class="star-icon" data-rating="${review.Rating}"></span>
                            </p>
                            <p class="review-text">${review.Review}.</p>
                            ${generateImageTags(review.Upload)}
                            <br/>
                            <span class="itemcx">${review.ItemCode}</span>
                            <i class="fa fa-ellipsis-v" style="float: right; color: #c1c1c1;"></i>
                        </div>
                        <div class="zoomed-image-container" style="display: none;">
                            <img style="max-width: 300px; width: 100%; height: auto;" class="zoomed-image" src="" alt="Zoomed Image">
                        </div>
                        <div class="reply-section" style="display: ${review.Reply ? 'block' : 'none'};background: blanchedalmond; padding: 1px 7px; font-family: system-ui; border-radius: 4px; margin: 16px 0px 0px 0px; color: firebrick; font-size: smaller;">
                    <p class="reply-title"><b>Blackvenda.lk</b> replied:</p>
                    <p class="reply-text">${review.Reply || 'No reply yet.'}</p>
                </div>
                    </div>
                `
                ;

                reviewsContainer.appendChild(commentElement);
            });
	var getItmCd = document.querySelectorAll(".modelNor")[0].innerHTML;
            calculateStarRatingsAndDates();
             countAndDisplayFilteredResults(getItmCd);
        }

        const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwXX133NPM_8SjX9fYF2ivw9Asgx0elUzzDlmpfGa-9gllHs6kwgtN3k1hqGBT3TSAS/exec';

        fetch(APPS_SCRIPT_URL)
            .then(response => response.json())
            .then(reviews => {
                displayReviews(reviews);

                // Automatic filtering based on the item code when the page loads
                const itemCodeElement = document.querySelector(".modelNor");
                const itemCode = itemCodeElement ? itemCodeElement.textContent : "";

                const ul = document.getElementById("reviews");
                const li = ul.getElementsByClassName("sectionCommentz");

                for (let i = 0; i < li.length; i++) {
                    const itemSpan = li[i].querySelector(".itemcx");
                    const txtValue = itemSpan.textContent || itemSpan.innerText;

                    if (txtValue !== itemCode) {
                        li[i].style.display = "none";
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    });

    function toggleZoom(imageElement) {
        const reviewCard = imageElement.closest('.review-card');
        const zoomedContainer = reviewCard.nextElementSibling;
        const zoomedImg = zoomedContainer.querySelector('.zoomed-image');

        if (zoomedContainer.style.display === 'none') {
            zoomedContainer.style.display = 'block';
            zoomedImg.src = imageElement.src;
        } else {
            zoomedContainer.style.display = 'none';
        }
    }

    function generateImageTags(imageLinks) {
        const linksArray = imageLinks.split(',');
        let imageTags = '';

        linksArray.forEach(link => {
            const imageTag = `<img onclick="toggleZoom(this)" loading="lazy" style="width: 94px;" class="review-image" src="${convertDriveLink(link)}" alt="Customer's Review">`;
            imageTags += imageTag;
        });

        return imageTags;
    }

    function convertDriveLink(link) {
        return link.replace('https://drive.google.com/open?id=', 'https://drive.google.com/thumbnail?id=');
    }
  
  function myReviewFunction() {
  var x = document.getElementById("myDIVz");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
