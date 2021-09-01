// MEMBUAT OBJECTTTTTTTTTTTTTTTTTTTTT
// Object Literal
// var mhs = {
// 	nama : "Abdul",
// 	umur : 18,
// 	jurusan : "Teknik Informatika",
// 	kampus : "Institut Teknologi Sepuluh Nopember"
// };

// Function Declaration

// function buatObjectMahasiswa(nama, jurusan, kampus) {
// 	var mhs1 = {};
// 	mhs1.nama = nama;
// 	mhs1.jurusan = jurusan;
// 	mhs1.kampus = kampus; 

// 	return mhs1;
// }

// var mhs2 = buatObjectMahasiswa("Abdul", "Teknik Informatika", "Institut Teknologi Sepuluh Nopember");

// Constructor

function Mahasiswa(nama, jurusan, kampus){
	this.nama = nama;
	this.jurusan = jurusan;
	this.kampus = kampus;
}

var mhs4 = new Mahasiswa("Abdulrahman", "Teknik Informatika", "Institut Teknologi Sepuluh Nopember");
