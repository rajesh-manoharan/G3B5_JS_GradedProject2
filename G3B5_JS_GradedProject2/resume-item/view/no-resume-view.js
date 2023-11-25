class NoJobItemView {
  resetForError() {
    const errorarea = document.getElementById("errorarea");
    const errorText = document.createElement("p");
    errorText.setAttribute("id", "errormsg");
    errorText.innerText = "No resume found!!!";
    errorarea.appendChild(errorText);
  }
}

export { NoJobItemView };
