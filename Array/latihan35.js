// Manipulasi Array

// Menambahkan Isi Array
// var myArr = ['abdul', 'rahman', 'ganteng','Linda'];
// Menampilkan Isi Array
// for (var i = 0; i < myArr.length; i++) {
// 	console.log('Halooo...' + myArr[i]);
// }

//Method Pada Array
// 1.Join

// console.log(myArr.join(''))

// 2. Push

// myArr.push('Asep','Joni');
// console.log(myArr.join('-'))

// 3. Pop

// myArr.pop();
// myArr.pop();
// console.log(myArr.join('-'))

// 4. Unshift

// myArr.unshift('Kaseppp','Linda')

// console.log(myArr.join('-'))

// 5, Shift

// myArr.shift()
// myArr.shift()
// console.log(myArr.join('-'))

// 6. Splice
// splice(indexAwal, mauDihapusBerapa(Optional), elementBaru1, elementBaru2(Opsional))

// myArr.splice(3,0, 'AH MALU')
// console.log(myArr.join('-'))

// 7.slice
// slice(awal,akhir-1)

// var myArr = ['abdul', 'rahman', 'ganteng','Linda'];

// var myArr2 = myArr.slice(2,4);
// console.log(myArr2.join('-'));

// 8. forEach

// var angka = [1,2,3,4,5,6,7,8,9,10];
// FOR BIASA
// for (var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }
// FOREACH
// angka.forEach(function(e, i) {
// 	console.log('ini adalah angka ke -' + ' ' + (i+1) + ' yang nilainya....' + e);
// })

// 9. map

// var angka = [1,3,2,4,6,5,7,8,10,30];
// FOREACH
// angka.forEach(function(e) {
// 	console.log(e * 2);
// })

// var angkaBaru = angka.map(function(e) {
// 	return e * 10;
// })
// console.log(angkaBaru.join('-'));

// 10. sort

// angka.sort(function (a,b) {
// 	return a-b;
// });
// console.log(angka.join('-'));

// 10. filter

// var angka = [1,3,2,4,6,5,7,8,10,30];
// var angkaBaru = angka.filter(function(e) {
// 	return e > 2;
// });
// console.log(angkaBaru.join('-'))

// 11. find


var angka = [1,3,2,4,6,5,7,8,10,30];
var angkaBaru = angka.find(function(e) {
	return e === 10; 	
});
console.log(angkaBaru)

