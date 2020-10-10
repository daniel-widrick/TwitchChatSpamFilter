
var widrickStringMatches = [];
function widrickChatFilter() {
    //var widrickChat = document.getElementsByClassName("chat-line__message");
    var widrickChat = document.getElementsByClassName("chat-line__message");
    for(var x = 0; x < widrickChat.length; x++) {
        var widrickCurMessage = widrickChat[x];
        if(widrickCurMessage.childNodes.length > 7) {
            widrickCurMessage.style.display = "none"
            continue;
        }
        if(widrickCurMessage.innerHTML.includes("emote") ) {
            widrickCurMessage.style.display = "none"
            //try { widrickCurMessage.remove(); } catch(err) { }; //TODO: would be nice to be able to fully remove these
            continue;
        }
        var textMessages = widrickCurMessage.getElementsByClassName("text-fragment");
        for(var i = 0; i < textMessages.length; i++)
        {
                if(textMessages[i].innerHTML.length < 15) {
                    widrickCurMessage.style.display = "none";
                    continue;
                }
                if(WidrickRepeatingStringFilter(textMessages[i].innerHTML))
                {
                   // try { widrickCurMessage.remove(); } catch(err) { };
                    widrickCurMessage.style.display = "none";
                    continue;
                }
            }
        }
}
function WidrickRepeatingStringFilter(s,minMatchLength=4,threshold=.5) {
    var stringLen = s.length;
    //var minMatchLength = 4;
    widrickStringMatches = [];

    //for each char in the string
    for(let i = 0; i < stringLen; i++) {
        //For every Length of string until stringLen
        for(let j = i; j < stringLen && stringLen-j > minMatchLength; j++) {
            var testString = s.substr(i, stringLen - j);
            if (!(testString in widrickStringMatches)) {
                //This is a new string
                //console.log(("found new string:" + testString));
                widrickStringMatches[testString] = 1;
            }
            else {
                //This is repeated String
                //console.log("Found repeated string:" + testString);
                widrickStringMatches[testString] = widrickStringMatches[testString]+1;
            }
        }
    }
    //Find highest occurance
    var highestMatch = "";
    var highestMatchCount = 0;
    for(var key in widrickStringMatches)
    {
        if(widrickStringMatches[key] > highestMatchCount)
        {
            highestMatchCount = widrickStringMatches[key];
            highestMatch=key;
            //console.log(("Found new highest string:" + highestMatch + " :: " + highestMatchCount));
        }
    }
    var percent = (highestMatch.length*highestMatchCount)/stringLen;
    //console.log("Highest Match in String:" + highestMatch + ":" + highestMatchCount + " :: " + percent);
    return percent > threshold && highestMatchCount > 1;
}
window.setInterval(widrickChatFilter,500)
