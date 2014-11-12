// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if(typeof(obj)==="number"){												//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
		return String(obj);
	} else if(typeof(obj) === "undefined"){
		return null;
	} else if(typeof(obj)==="function"){
		return null;
	} else if(obj === null) {
		return 'null';
	} else if(typeof(obj) === "boolean"){
		return obj ? "true" : "false";
	} else if(typeof(obj) === "string"){
		return "\"" + obj + "\"";
	} else if(Array.isArray(obj) === true && obj.length === 0){					//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
		return "\[\]";
	} else if(Array.isArray(obj) === true && obj.length > 0){					
		return "\[" + _.map(obj, function(element){				// _.map = function(collection, iterator) { var result = []; _.each(collection, function(item, index, collection){ result.push(iterator(item)); }); return result;  }; 
			if(typeof(element) === "number"){
				return element;
			} else {
				return stringifyJSON(element);
			}
		}) + "\]";
	} else if(typeof(obj) === "object") {
		var result = [];
		Object.keys(obj).forEach(function(key){					//http://bob.yexley.net/iterating-over-javascript-objects/
			var val = stringifyJSON(obj[key]);					// stringify the value
			if(val !== null) {									// exclude functions and undefined 
				result.push(stringifyJSON(key) +":"+val);
			}
		})
		return "{" + result.join(",") + "}"
	}
};
			