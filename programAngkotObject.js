function Angkot(sopir,trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang) {
		if (this.penumpang.length === 0) {
		this.penumpang.push(namaPenumpang);

		return this.penumpang;
		} else{
		for (var i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] === namaPenumpang) {
				console.log(namaPenumpang + " Sudah ada di angkot.")

				return this.penumpang;
			}else if(i === this.penumpang.length-1){
					this.penumpang.push(namaPenumpang);

					return this.penumpang;

			}
		}
	}
}
	this.penumpangTurun = function(namaPenumpang, bayar) {
		if (this.penumpang.length === 0) {
			console.log("Penumpang anda masih kosong")

			return false;
		}
		for (var i = 0 ; i < this.penumpang.length; i++) {
			this.penumpang.pop(namaPenumpang);
			this.kas += bayar;

			return this.penumpang;
		}
	}
}

var angkot1 = new Angkot("Abdul", ["Cipocok","Curug"], [], 0);
