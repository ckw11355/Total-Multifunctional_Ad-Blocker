setInterval(function(){

    //NameDraft: Ad Parellels, Ad Paralleles | ADP Extention
    var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
    var ReportSkipButton1 = document.getElementsByClassName("ytp-ad-button-icon");
    var ReportSkipButton2 = document.getElementsByClassName("ytp-ad-button-text");
    var ReportSkipButton3 = document.getElementsByClassName("ytp-ad-feedback-dialog-reason-input");
    var ReportSkipButton4 = document.getElementsByClassName("ytp-ad-feedback-dialog-confirm-button");
    if (skipButton != undefined && skipButton.length > 0) {
        console.log("Ad detected");
        skipButton[0].click();
    }
    else if (ReportSkipButton1 != undefined && ReportSkipButton1.length > 0) {
        console.log("Reportable Ad detected");
        ReportSkipButton1[0].click();
        ReportSkipButton2[0].click();
        ReportSkipButton3[0].click();
        ReportSkipButton4[0].click();
    }
    else if (ReportSkipButton2 != undefined && ReportSkipButton2.length > 0) {
        console.log("Reportable Ad detected");
        ReportSkipButton2[0].click();
        ReportSkipButton3[0].click();
        ReportSkipButton4[0].click();
    }
    else if (ReportSkipButton3 != undefined && ReportSkipButton3.length > 0) {
        console.log("Reportable Ad detected");
        ReportSkipButton3[0].click();
        ReportSkipButton4[0].click();
    }
    else if (ReportSkipButton4 != undefined && ReportSkipButton4.length > 0) {
        console.log("Reportable Ad detected");
        ReportSkipButton4[0].click();
    }
    //removed; boost decluttering and enhance operation
    else {
        console.log("Ad undetected")
    }
}, 0)

//clear_declog functionality
var ConsoleOverflow = console.log("Ad detected");

window.onload = function(){
    setTimeout(loadAfterTime, 10)
 };
 
 function loadAfterTime() { 
    setInterval(function(){
        ConsoleOverflow.clear()
    }, 2000)    
 // code you need to execute goes here. 
 }


//NameDraft: Ad Parellels, Ad Paralleles | ADP Extention
var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
if (skipButton != undefined && skipButton.length > 0){
    console.log("Ad detected");
    skipButton[0].click();
}