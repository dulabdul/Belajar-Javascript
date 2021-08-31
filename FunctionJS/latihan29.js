//Parameter dan Arguments
//(a,b) adalah Parameter
function tambah(a,b) {
	var bilangan = a + b;

	return bilangan;
}
console.log(tambah(10,5,10));
//tambah(10,5) adalag Argument

function kali(a,b,c){
	var coba = a * b;

	return coba;
}
console.log(kali(10,3))

// Arguments

function contoh() {
	var hasil = 0;
	for (var i=0; i < arguments.length; i++) {
		hasil += arguments[i];
	}
	return hasil;
}
console.log(contoh(10,5,10,20))