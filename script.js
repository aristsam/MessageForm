function addMessage(inputId, resultId) {
    var messageform = document.getElementById(inputId).value.trim();

    if (messageform !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(messageform));
        document.getElementById(resultId).appendChild(li);
        document.getElementById(inputId).value = "";
    }
}