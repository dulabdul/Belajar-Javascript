var penumpang = ["abdul", undefined, "linda"];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	if (penumpang.length === 0) {
		penumpang.push(namaPenumpang);

		return penumpang;
	}else{
		for (var i =0; i < penumpang.length; i++) {
			if (penumpang[i] === undefined) {
				penumpang[i] = namaPenumpang

				return penumpang;
			}else if(penumpang[i] === namaPenumpang){
				console.log(namaPenumpang + " " + " Sudah di angkot.");

				return penumpang;

			}else if(i === penumpang.length-1){
				penumpang.push(namaPenumpang);

				return penumpang;
			}
		}
	}
}
// Hapus Penumpang
var hapusPenumpang = function (namaPenumpang, penumpang) {
	if (penumpang.length === 0) {
		console.log("Tidak ada yang dihapus karena angkot masih kosong")

		return penumpang;
	}else{
		for (var i = 0; i < penumpang.length; i++) {
			if (namaPenumpang == penumpang[i] ) {
				penumpang[i] = undefined;

				return penumpang;
			}else if( penumpang != namaPenumpang){
				console.log(namaPenumpang + " Tidak ada di angkot");

				return penumpang;
			}
		}
	}
}











// var penumpang = ["Abdul", undefined, "Linda	"];
// var tambahPenumpang = function(namaPenumpang, penumpang) {
// //jika angkot kosong
// if (penumpang.length === 0) {
// 	// tambah penumpang di awal array
// 	penumpang.push(namaPenumpang);
// 	// kembalikan isi array & keluar dari function
// 	return penumpang;
// }else{
// 	// telusuri seluruh kursi dari awal
// 	for (var i = 0; i < penumpang.length; i++) {
// 		// jika ada kursi kosong
// 		if (penumpang[i] === undefined) {
// 			// tambah penumpang di kursi kosong
// 			penumpang[i] = namaPenumpang;
// 			// kembalikan isi array & keluar dari function
// 			return penumpang;
// 			}
// 		}	// jika sudah ada nama yang sama
// 		elseif(penumpang[i] === namaPenumpang){
// 			// tampilkan pesan error
// 			console.log(namaPenumpang + "sudah ada di dalam angkot.");
// 			// kembalikan isi array & keluar dari function
// 			return penumpang;
// 		}
// 		// jika seluruh kursi sudah terisi
// 		elseif(penumpang[i] === penumpangl.length-1){
// 			//tambah penumpang di akhir array
// 			penumpang.push();
// 			// kembalikan isi array & keluar dari function
// 			return penumpang;
// 		}
// 	}
// }

// var penumpang = ["abdul", undefined, "linda"];
// var tambahPenumpang = function(namaPenumpang, penumpang){
// 	if(penumpang.length === 0){
// 		penumpang.push(namaPenumpang);

// 		return penumpang;
// 	}else{
// 		for (var i = 0; i < penumpang.length; i++) {
// 			if (penumpang[i] === undefined) {
// 				penumpang[i] = namaPenumpang;

// 				return penumpang;
// 			}else if(penumpang[i] === namaPenumpang){
// 				console.log(namaPenumpang + " Sudah ada di angkot.");

// 				return penumpang;
// 			}else if(i === penumpang.length-1){
// 				penumpang.push(namaPenumpang);

// 				return penumpang;
// 			}
// 		}
// 	}
// }