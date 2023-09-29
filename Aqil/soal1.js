const fs = require("fs");
const sisi = 5;
const panjang = 4;
const lebar = 5;

const kelilingPersegi = 4 * sisi;
const luasPersegi = sisi * sisi;

const kelilingPersegiPanjang = 2 * (panjang + lebar);
const luasPersegiPanjang = panjang * lebar;

const hasil = `Persegi dengan sisi ${sisi}
Kelilingnya adalah ${kelilingPersegi}
luasnya adalah ${luasPersegi}\n
Persegi Panjang dengan panjang ${panjang} dan lebar ${lebar}
kelilingnya adalah ${kelilingPersegiPanjang}
luasnya adalah ${luasPersegiPanjang}`;

fs.writeFile("hasil.txt", hasil, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("Data berhasil");
});

fs.readFile("hasil.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log("membaca \n", data);
});
