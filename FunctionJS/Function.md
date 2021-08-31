# Belajar Javascript Dasar WPU
---
## Function
*"Function adalah kunci utama pada javascript yang membuat javascript sangat powerfull"*

***-Douglas Crockford***

*"Function yang baik adalah function yang hanya mengerjarkan satu hal saja"*

***-Web Progamming Unpas***

*"Kode program yang baik adalah kode yang dapat dibaca dan dimengerti oleh orang lain *

***-Web Progamming Unpas***

---
* Sebuah sub-program/sub-routine yang dapat ***"Dipanggil"*** di bagian lain pada program
* Merupakan struktur dasar pembentuk dari javascript
* Disebut juga sebagai prosedur(kumpulan ***Statement***) untuk melakukan tugas atau menghitung sebuah nilai
* Untuk dapat menggunakan, harus ***Membuat*** terlebih dahulu, lalu ***Memanggilnya***
* Termasuk ke dalam First-Class Object
---
#### Kenapa Function?
* Reusebility(DRY : Do not Repeat Yourself)


Function dapat digunakan secara berulang ulang dan membuat kode program lebih rapih dan efisien
* Dekomposisi/Abstraksi


Function dapat di pecah menjadi beberapa bagian, hal ini berkaitan dengan Modularitas
* Modularitas


Agar mudah mencari Bug dalam kode program karena bentuknya dalam modul
#### Kategori Function
* Built-in Function


Function yang telah disediakan oleh javascript
* User-Defined Function


Fcuntion yang dibuat oleh kita sendiri
#### Pembuatan Function
* Function Declaration
* Function Expression
#### Parameter & Argument & Arguments
* Parameter


Variabel yang ditulis dalam kurung pada saat Function dibuat, digunakan untuk menampung nilai yang dikirimkan saat Function dipanggil
* Argument

Nilai yang dikirimkan ke parameter saat Function dipanggil
* Arguments


Array yang bersi nilai yang dikirimkan saat function dipanggil
#### Refactoring
Sebuah proses mengubah kode menjadi lebih "Baik dan Efisien" tanpa mengubah fungsionalitasnya atau fungsinya
#### Manfaat Refactoring
* Readibility


Membuat kode lebih mudah dibaca oleh developer asli atau developer rekan
* DRY(Dont' Repeat Yourself)


Agar mengurangi duplikasi kode atau penggunaan kode yang berlebihan seperti variabel, dll
* Testiability


Memudahkan dalam testing/pengujian
* Perfomance


Agar meningkatkan perfomance dari kode, seperti efekti atau tepat memilih tipe data, looping yang benar
* Maintainibility


Agar mudah dalam pengecekan atau maintenence 
#### Variabel Scope(Lingkup Variabel)
Bagaimana sebuah variabel dapat diakses oleh variabel
##### Block Scope Vs Function Scope
* Block Scope


Digunakan dalam bahasa pemprogaman seperti C atau Java, Blockscope artinya per block
* Function Scope

Scope function dapat mengakses variabel global atau window, sedangkan yang diluar tidak bisa mengakses variabel yang berada di variabel function/lokal

#### Rekursif/Recursion
sebuah fungsi yang memanggil dirinya sendiri, harus berakhir dan menghasilkan nilai
* Base Case


Kondisi akhir dari rekursif yang menghasilkan nilai atau blok untuk menghentikan rekursif.
* Semua looping bisa dibuat rekursifnya, tetapi tidak semua rekursif bisa dibuat loopingya
* Contoh Implementasi Rekursif

* Menggantikan looping
* Pencarian dan penesuluran pada struktur data list dan tree
* Membuat deret Fibonnaci
* Dll