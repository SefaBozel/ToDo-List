//! SESSİON STORAGE 

//* Değer Ekleme
// sessionStorage.setItem("350","Sefa");
// sessionStorage.setItem("adSoyad","Sefa Bozel");

//* Değer Silme
// sessionStorage.removeItem("adSoyad");

//*Değer Çekme
// let value = sessionStorage.getItem("adSoyad");
// if (value===null){
//     console.log("Değer bulunamadı.");
// }else{
//     console.log("Değer bulundu: ", value);
// }

//* Hepsini Silme
// sessionStorage.clear();

//*Array Yazdırma
// let names = ["Ali", "Arda", "Kübra", "Sefa", "Ayşe"];
// sessionStorage.setItem("names", JSON.stringify(names));

//! LOCAL STORAGE

//* Değer Ekleme
localStorage.setItem("ders1", "Doğrusal Programlama");
localStorage.setItem("ders2", "Veri Tabanı Yönetimi");
localStorage.setItem("ders3", "Bilgisayar Donanımı");
localStorage.setItem("ders4", "Ofis Yazılımları");

//* Değer Alma
let value = localStorage.getItem("ders1");
console.log(value);

//* Değer Silme

localStorage.removeItem("ders4");

//* Tümünü Silme

localStorage.clear();