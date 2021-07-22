let urlParams = new URLSearchParams(window.location.search);
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const tripAdvisorHost = "travel-advisor.p.rapidapi.com";
const tripAdvisorKey = "6049913967mshcedadace2695cddp117ca1jsn6b7cf16d6ad6";

const PRICE_PER_ROOM = 1000;

 function updatePrice(){
    let adultEle = document.getElementById("adult");
    let totalPriceEle = document.getElementById("price");
    let toDateEle = document.getElementById("toDate");
    let FromDateEle = document.getElementById("fromDate");

    let toDateValue = new Date(toDateEle.value);
    let fromDateValue = new Date(FromDateEle.value);

    toDateEle.min = FromDateEle.value;

    let days = (toDateValue - fromDateValue)/(24*60*60*1000);

    if(adultEle.value && toDateEle.value && FromDateEle.value)
       totalPriceEle.value = "Rs. " + parseInt(adultEle.value)*PRICE_PER_ROOM*days;
    else
       totalPriceEle.value = "Rs.0";
}

/* This function will fetch the details of the hotel from the API and populate the web page accordingly. */
let fetchHotelDetailAPI = () => {
   let xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
           //parse the JSON data of the hotel
           let result = JSON.parse(this.responseText).data[0];
           // populate the name of the hotel by obtaining it from the API
           document.getElementById("hotel-name").innerText = result.name;
           // populate the amenities of the hotel by obtaining it from the API
           let amenities = result.amenities;
           let i=0;
           for(;i < Math.min(amenities.length, 10);i++) {
               let liElement = document.createElement("li"); 
               liElement.innerText = amenities[i].name;
               document.getElementById("amenities").appendChild(liElement);
           }
           // populate the decription of the hotel by obtaining it from the API
           let descriptionPara = document.createElement("h6"); 
           descriptionPara.innerHTML = result.description;
           document.getElementById("description").appendChild(descriptionPara);
           // populate the rating of the hotel by obtaining it from the API
           let rating = parseInt(result.rating);
           for(i=1;i <= rating;i++) {
               document.getElementById(i).classList.add("checked");
           }
       }
   });

   xhr.open("GET", API_URL + "hotels/get-details?lang=en_US&location_id=" + urlParams.get('id'));
   xhr.setRequestHeader("x-rapidapi-host", tripAdvisorHost);
   xhr.setRequestHeader("x-rapidapi-key", tripAdvisorKey);

   xhr.send();
}

/* Fetch the API data for hotel photos, and add it to the bootstrap carousel */
let fetchHotelPhotosAPI = () => {
   let xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
           let carouselParentElement = document.getElementById("carousel-parent");
           let result = JSON.parse(this.responseText).data;
           let size = Math.min(result.length, 5);
           let i=0;
           for(;i < size;i++) {
               let div = document.createElement("div");
               div.classList.add("carousel-item");
               if(i == 0)
                   div.classList.add("active");
               let image = document.createElement("img");
               image.setAttribute("class", "carousel-image");
               image.classList.add("d-block");
               image.classList.add("w-100");
               image.src = result[i].images.large.url;
               div.appendChild(image);
               carouselParentElement.appendChild(div);
           }  
              
       }
   });
   xhr.open("GET",API_URL + "photos/list?lang=en_US&location_id=" + urlParams.get('id'));
   xhr.setRequestHeader("x-rapidapi-host", tripAdvisorHost);
   xhr.setRequestHeader("x-rapidapi-key", tripAdvisorKey);

   xhr.send();
}

let idElement = document.getElementById("id");
idElement.value = urlParams.get('id');

fetchHotelDetailAPI();
fetchHotelPhotosAPI();