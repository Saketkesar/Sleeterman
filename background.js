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
    "*://*.ezstat.ru/*",
    "*://*.iplogger.org/*",
    "*://*.2no.co/*",
    "*://*.iplogger.com/*",
    "*://*.iplogger.ru/*",
    "*://*.yip.su/*",
    "*://*.iplogger.co/*",
    "*://*.iplogger.info/*",
    "*://*.ipgraber.ru/*",
    "*://*.iplis.ru/*",
    "*://*.2ip.ru/*",
    "*://*.grabify.link/*",
    "*://*.ps3cfw.com/*",
    "*://*.ngrok.io/*",
    
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)







