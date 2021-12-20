setInterval(function(){

    //NameDraft: Ad Parellels, Ad Paralleles | ADP Extention
    var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
if (skipButton != undefined && skipButton.length <= 0){
    console.log("Ad undetected");
}
else {
    console.log("Ad detected");
    skipButton[0].click();
}
}, 0)




//NameDraft: Ad Parellels, Ad Paralleles | ADP Extention
var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
if (skipButton != undefined && skipButton.length <= 0){
    console.log("Ad undetected")
}
else {console.log("Ad detected"),
    skipButton[0].click()
}