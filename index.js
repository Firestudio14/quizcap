console.log("script connected");
var opt1 = document.getElementById("op1");
var opt2 = document.getElementById("op2");
var download = document.getElementById("download");
var isCorrect = true;

opt1.addEventListener("click", ()=>{
    opt1.style = "background-color: #EFFFDB; border-color: #305500";
    opt2.style = "background-color: #F8F8F8; border-color: transparent";
    download.style = "background-color: #D0FF95; color: #305500;";
    isCorrect = true;
});

opt2.addEventListener("click", ()=>{
    opt1.style = "background-color: #F8F8F8; border-color: transparent";
    opt2.style = "background-color: #EFFFDB; border-color: #305500";
    download.style = "background-color: #E7E9E6; color: #8F8F8F;";
    isCorrect = false;

});



download.addEventListener("click", ()=>{
     if(isCorrect){
        console.log("Downloading....");
        location.href = "http://192.168.178.48/QuizCap/files/app-release.apk";
        
     }
});




