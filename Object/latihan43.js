//Membuat Object 

// // Cara 1 - Function Declaration
// function halo() {
// 	console.log(this)
// 	console.log("Hello World");
// }
// this.halo();
// THIS MENGEMBALIKAN OBJECT GLOBAL

// Cara 2 - Object Literal

// var obj = {
// 	nama : "abdul",
// 	umur : 18,
// 	jurusan : "Teknik Informatika"
// };
// obj.halo = function() {
// 	console.log(this)
// 	console.log("Helo World");
// }
// obj.halo();
// MENGEMBALIKAN OBJECT ITU SENDIRI

// Cara 3 - Constructor

function Halo(){
	console.log(this)
	console.log("Helo World");
}

var obj1 = new Halo();
var obj2 = new Halo();

//THIS MENGEMBALIKAN OBJECT YANG BARU DIBUAT