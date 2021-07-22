const API_URL = "https://tripadvisor1.p.rapidapi.com/";
const tripAdvisorHost = "tripadvisor1.p.rapidapi.com";
const tripAdvisorKey = "6049913967mshcedadace2695cddp117ca1jsn6b7cf16d6ad6";

function view(){
    let viewEle1 = document.getElementById("viewmore-button");
    if(viewEle1.innerText == "View more"){
        document.getElementById('container-2').style.display = "block";
        viewEle1.innerText = "View less";
    }
    else{
        document.getElementById('container-2').style.display = "none";
        viewEle1.innerText = "View more";
    }
}