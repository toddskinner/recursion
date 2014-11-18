// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Returns an array-like object of all child elements which ahve all the given class names.  When called on the document object, the complete 
// document is searched, including the root node. 


var getElementsByClassName = function(className){
  // your code here

	// array that will be returned containing elements of class className
  	var matches = [];							
  	var traverse = function(element){	
  		// classList returns a token list of the class attribute of the element						
  	  	var classes = element.classList;		
  	  	// HTML DOM length property returns the number of child nodes of the body element. http://www.w3schools.com/jsref/prop_nodelist_length.asp
	  	if (element.length > 0){				
	  		for (var i=0; i<element.length; i++){
	  			 if (element[i].classList !== undefined){      
	  				traverse(element[i]);
	  			}
	  		}
	  	} 
	  	if (classes !== undefined){
	  		// checks if an element's list of classes contains a specific class
			if (classes.contains(className)) {
				matches.push(element);
			}
		//childNodes returns a live collection of child nodes of the given element.	 https://developer.mozilla.org/en-US/docs/Web/API/Node.childNodes
		traverse(element.childNodes); 		  	  			
	   	}
  	};
  	// document.body returns the <body> or <frameset> node of the current document, or null if no such element exists.
  	traverse(document.body);
  	return matches;
};







