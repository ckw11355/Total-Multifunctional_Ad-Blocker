const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.macy.com/*",
    "*://*.macy's.com/*",
    "*://*.at&t.com/*",
    "*://*.statefarm.com/*",
    "*://*.tmobile.com/*",
    "*://*.macys.com/*",
    "*://*.jcpenny's.com/*",
    "*://*.t-mobile.com/*",
    "*://*.tmobile.com/*",
    "https://youtu.be/OyJpSU2dDIE",
    "https://i.ytimg.com/generate_204",
    "*://*.ka-cn.com/*",
//*://*.ka-cn.*/* removed
    "*://*.fi.google.com/*",
    "*://*.fi-google.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
