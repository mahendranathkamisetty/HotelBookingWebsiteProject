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