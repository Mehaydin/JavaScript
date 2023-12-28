
//--------HOROSCOPE PROJECKT-----

    // -----Ay isimlerini içeren dizi----

//--------HOROSCOPE PROJECKT-----

    // -----Ay isimlerini içeren dizi----
    const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    // ----Kullanıcıdan gün bilgisini al---
let gun = prompt("Doğum tarihinin gününü girin:");
    // sayi 31'den büyük olursa hata ver!
    // hangi aylar 30,hangileri 31 belirtmeli miyim?!

   //---- Kullanıcıdan ay ismini al---
let ayIndex = prompt("Hangi ayda doğduğunuzu sayı olarak girin (1-12):") - 1;
let ay = aylar[ayIndex];



   //----- Burç Belirleme---
let burc = "";
 
if ((gun >= 21 && ayIndex === 2) || (gun <= 19 && ayIndex === 3)) {
    burc = "Koç";
} else if ((gun >= 20 && ayIndex === 3) || (gun <= 20 && ayIndex === 4)) {
    burc = "Boğa";
} else if ((gun >= 21 && ayIndex === 4) || (gun <= 20 && ayIndex === 5)) {
    burc = "İkizler";
} else if ((gun >= 21 && ayIndex === 5) || (gun <= 22 && ayIndex === 6)) {
    burc = "Yengeç";
} else if ((gun >= 23 && ayIndex === 6) || (gun <= 22 && ayIndex === 7)) {
    burc = "Aslan";
} else if ((gun >= 23 && ayIndex === 7) || (gun <= 22 && ayIndex === 8)) {
    burc = "Başak";
} else if ((gun >= 23 && ayIndex === 8) || (gun <= 22 && ayIndex === 9)) {
    burc = "Terazi";
} else if ((gun >= 23 && ayIndex === 9) || (gun <= 21 && ayIndex === 10)) {
    burc = "Akrep";
} else if ((gun >= 22 && ayIndex === 10) || (gun <= 21 && ayIndex === 11)) {
    burc = "Yay";
} else if ((gun >= 22 && ayIndex === 11) || (gun <= 19 && ayIndex === 0)) {
    burc = "Oğlak";
} else if ((gun >= 20 && ayIndex === 0) || (gun <= 18 && ayIndex === 1)) {
    burc = "Kova";
} else if ((gun >= 19 && ayIndex === 1) || (gun <= 20 && ayIndex === 2)) {
    burc = "Balık";
}



  // -----Sonuç Yazdır---
if (burc !== "") {
    console.log("Gun: "  + gun );
    console.log("Ay: "  + ay ) ;
    console.log("Burcunuz: "  + burc ) ;
} else {
    console.log("Geçersiz tarih veya ay girişi!!!");
}




