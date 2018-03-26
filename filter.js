function widrickChatFilter() {
	var widrickChat = document.getElementsByClassName("chat-line__message");
	for(var x = 0; x < widrickChat.length; x++) {
		var widrickCurMessage = widrickChat[x];
		if(widrickCurMessage.childNodes.length > 7) {
			widrickCurMessage.style.display = "none"
			continue;
		}
		if(widrickCurMessage.innerHTML.includes("emote") ) {
			widrickCurMessage.style.display = "none"
			continue;
		}
		for(var i = 0; i < widrickCurMessage.childNodes.length; i++)
		{
			if(widrickCurMessage.childNodes[i].getAttribute("data-a-target") == "chat-message-text" ){
				if(widrickCurMessage.childNodes[i].innerHTML.length < 15) {
					widrickCurMessage.style.display = "none"
 
				}
			}
		}
	}
}
window.setInterval(widrickChatFilter,500)
