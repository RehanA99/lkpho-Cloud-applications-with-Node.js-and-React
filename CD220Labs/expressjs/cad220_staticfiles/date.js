function formats()  
{
	var dateVal = document.getElementById("dateType").value ;
	var submitOn = new Date() ;
	document.getElementById("result").innerHTML = " Date Selected : " + dateVal ;
	alert("Submited On : " + submitOn ) ;
}