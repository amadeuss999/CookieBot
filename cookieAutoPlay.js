//cookie bot: auto-play-through cookie clicker
// Here, we just find the last stable release and load it.
console.log("### COOKIE clicker STABLE - linking to latest release"); 
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/repos/prinzstani/CookieBot/releases/latest', false);
xhr.send();
var response = JSON.parse(xhr.responseText);
var latest = "https://raw.githubusercontent.com/amadeuss999/CookieBot/master/cookieAutoPlayBeta.js"
console.log("### LOADING FROM " + latest); 
Game.LoadMod(latest);
