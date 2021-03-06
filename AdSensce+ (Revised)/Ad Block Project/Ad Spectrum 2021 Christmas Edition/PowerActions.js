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
    "*://*.ka-cn.*/*",
    "*://*.fi.google.com/*",
    "*://*.fi-google.com/*",
    "https://youtu.be/sZSJPA2XBD4",
    "*://*.grammarly.*/*",
    "*://*.kfc.*/*",
    "*://*.mcdonalds.*/*",
    "*://*.pepsi.*/*",
    "*://*.google-fi.*/*",
    "*://*.googlefi.*/*",
    "*://*.kamikoto.*/*",
    "*://*.popeyes.*/*",
    "*://*.TacoBell.*/*",
    "*://*.KFC.*/*",
    "*://*.Chick-fil-A.*/*",
    "*://*.BurgerKing.*/*",
    "*://*.Domino's.*/*",
    "*://*.Dominos.*/*",
    "*://*.PizzaHut.*/*",
    "*://*.Wendy's.*/*",
    "*://*.Wendys.*/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)
