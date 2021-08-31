//Penulisan array
var hari = ['Senin', 'Selasa', 'Rabu'];
var club = ['Real Madrid', 'Barcelona', 'Chelsea'];
var binatang = [];
binatang = ['Kucing', 'Ayam', 'Sapi'];

//mengakses index/array
console.log(binatang[2]);
console.log(hari[2]);
console.log(club[2]);

// check array object atau bukan
console.log(typeof(binatang))

//array beda tipe
var myArr = ['String', 15, true];
console.log(myArr[2]);

// array dengan function
var test = function () {
	console.log('Hello World');
}
var myArr2 = ['teks', 2, false, test];
console.log(myArr2[3]);

//array multidimensi
var myArrMultiDimensi = ['Helloo', true, 123,[4,5,6 ] ];
console.log(myArrMultiDimensi[3][2])