setUpEventListeners();

function setUpEventListeners(){
	var accordionButtonArray = document.getElementsByClassName("bp-accordion-header");

	for (var index = 0; index < accordionButtonArray.length; index++) {
		
		function callback(){
			var closureIndex = index;
			function toggleAccordionBody() {
			    var accordionBody = document.getElementById("accordion-body-" + closureIndex);
			    var accordionButtonArray = document.getElementsByClassName("bp-accordion-button");
			    var accordionButton = accordionButtonArray[closureIndex];
			    console.log(closureIndex, accordionButton);
			    if (accordionBody.style.display === "" || accordionBody.style.display === "none") {
			    	accordionBody.style.display = "block";
			    	accordionButton.classList.remove("bp-icon-plus");
			    	accordionButton.classList.add("bp-icon-cross");
			    } else {
			    	accordionBody.style.display = "none";
			    	accordionButton.classList.remove("bp-icon-cross");
			    	accordionButton.classList.add("bp-icon-plus");
			    }
			}
			return toggleAccordionBody;
		}

		accordionButtonArray[index].addEventListener("click", callback());
	}
}