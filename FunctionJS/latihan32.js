/*
function kurangAngka(n) {
	// base case Untuk berhentikan fungsi rekrusif
	if (n === 0) {
		return;
	}
	console.log(n)

	return kurangAngka(n-1);
	// body...
}

kurangAngka(10);
*/
// faktorial Rekrusif
function faktorial(n) {
	if (n === 0) {
		return 1;
	}

	return n * faktorial(n-1);
	// body...
}
console.log(faktorial(5))
//looping

function cetakAngka(n) {
	var hasil = 1;
	for (var i = n; i > 0; i--) {
		hasil *= i;
	}
	return hasil;
}
console.log(cetakAngka(5));