var text = {
	studentName : "Baobao",
	classID : "123456"
}


document.getElementById("printHere").innerHTML = getText();

function getText(){
	return this.text.studentName;
}