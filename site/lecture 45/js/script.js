// Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName );

console.log(company["name"]);
company["stock of company"] = 110;

console.log("Stock price is: " + company["stock of company"]);

//Better way : object literal
var facebook = {
	name:"Facebook",
	ceo: {
		firstName : "Mark",
		favCoor: "blue",
	},

	"stock of company" : 110
};

console.log(facebook.ceo.firstName);




