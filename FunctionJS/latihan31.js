//global scope/windows scope
var a = 2
function tes() {
	var a;
	a = 1
	console.log(a)
}
console.log(a)
tes();