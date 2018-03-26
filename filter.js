function widrickChatFilter() {
	var widrickChat = document.getElementsByClassName("chat-line__message");
	for(var x = 0; x < widrickChat.length; x++) {
		var widrickCurMessage = widrickChat[x];
		if(widrickCurMessage.childNodes.length > 7) {
			widrickCurMessage.innerHTML = ""
			widrickCurMessage.style.display = "none"
			//widrickCurMessage.parentNode.removeChild(widrickCurMessage)
			continue;
		}
		if(widrickCurMessage.innerHTML.includes("emote") ) {
			widrickCurMessage.innerHTML = ""
			widrickCurMessage.style.display = "none"
			//widrickCurMessage.parentNode.removeChild(widrickCurMessage)
			continue;
		}
		for(var i = 0; i < widrickCurMessage.childNodes.length; i++)
		{
			if(widrickCurMessage.childNodes[i].getAttribute("data-a-target") == "chat-message-text" ){
				if(widrickCurMessage.childNodes[i].innerHTML.length < 15) {
					widrickCurMessage.innerHTML = "";
					widrickCurMessage.style.display = "none"
					//widrickCurMessage.parentNode.removeChild(widrickCurMessage)
 
				}
			}
		}
	}
}
window.setInterval(widrickChatFilter,500)
