/********************* TOP BUTTON ******************** */
window.onscroll = function() {firstPage()}

function firstPage(){
	let topButton = document.getElementById("jumptop_button");	
	let verticalPosition = document.documentElement.scrollTop;

	/*console.log(`Scroll vertical: ${verticalPosition}`);*/

	if (verticalPosition > 300){
	  /*topButton.style.backgroundColor ="blue";*/
	  /*topButton.style.visibility ="visible";*/
	  document.getElementById("jumptop_button").classList.add("showup");

	}else{
	  /*topButton.style.backgroundColor ="white";*/ 
	  /*topButton.style.visibility ="hidden"; */ 
	  document.getElementById("jumptop_button").classList.remove("showup"); 
	}
}

function jumpTop(){
  document.documentElement.scrollTop = 0;	
}