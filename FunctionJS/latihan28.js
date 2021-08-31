// Menghitung Volume Dua Kubus
function VolumeKubus(a,b) {
	var kubusA = a * a * a;
	var kubusB = b*b*b;

	var volume = kubusA + kubusB;

	return volume;
}
console.log(VolumeKubus(8,3));