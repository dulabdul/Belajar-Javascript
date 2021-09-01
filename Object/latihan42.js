// MEMBUAT OBJECTTTTTTTTTTTTTTTTTTTTT
// Object Literal
var mhs = {
	nama : "Abdul",
	umur : 18,
	jurusan : "Teknik Informatika",
	kampus : "Institut Teknologi Sepuluh Nopember"
};
// this mengembalikan nilai object itu sendiri(yang ada di mhs)
mhs.halo = function() {
	console.log(this)
	console.log("Hello World");
}
mhs.halo();
// this

// Function Declaration
// this disini mengembalikan global object
// function buatObjectMahasiswa(nama, jurusan, kampus) {
// 	var mhs1 = {};
// 	mhs1.nama = nama;
// 	mhs1.jurusan = jurusan;
// 	mhs1.kampus = kampus; 
// 	return mhs1;

// }

// var mhs2 = buatObjectMahasiswa("Abdul", "Teknik Informatika", "Institut Teknologi Sepuluh Nopember");
// Constructor
// this disini mengembalikan nilai object yang baru dibuat(yang ada di mhs4)
// function Mahasiswa(nama, jurusan, kampus){
// 	this.nama = nama;
// 	this.jurusan = jurusan;
// 	this.kampus = kampus;
// }

// var mhs4 = new Mahasiswa("Abdulrahman", "Teknik Informatika", "Institut Teknologi Sepuluh Nopember");
