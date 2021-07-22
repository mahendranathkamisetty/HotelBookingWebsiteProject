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