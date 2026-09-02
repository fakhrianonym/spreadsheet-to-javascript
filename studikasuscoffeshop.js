var menu = [
  { kode: "M001", nama: "Cappucino", kategori: "Coffe", harga: 15000, hpp: 10000 },
  { kode: "M002", nama: "Americano", kategori: "Coffe", harga: 16000, hpp: 11000 },
  { kode: "M003", nama: "Matcha latte", kategori: "Non - Coffe", harga: 20000, hpp: 15000 },
  { kode: "M004", nama: "Taro Latte", kategori: "Non - Coffe", harga: 30000, hpp: 10000 },
  { kode: "M005", nama: "Cappucino", kategori: "Coffe", harga: 30000, hpp: 10000 },
  { kode: "M006", nama: "Lychee Tea", kategori: "Non - Coffe", harga: 15000, hpp: 10000 },
  { kode: "M007", nama: "Flat White", kategori: "Coffe", harga: 20000, hpp: 10000 },
  { kode: "M008", nama: "Aren latte", kategori: "Coffe", harga: 20000, hpp: 15000 },
  { kode: "M009", nama: "Mie Goreng", kategori: "Food", harga: 25000, hpp: 15000 },
  { kode: "M010", nama: "Nasi Goreng", kategori: "Food", harga: 30000, hpp: 20000 },
  { kode: "M011", nama: "Butterscotch Sea salt", kategori: "Coffe", harga: 25000, hpp: 20000 },
  { kode: "M012", nama: "Coffe Mocktail", kategori: "Coffe", harga: 30000, hpp: 20000 },
  { kode: "M013", nama: "French Fries", kategori: "Snack", harga: 20000, hpp: 10000 },
  { kode: "M014", nama: "Dimsun", kategori: "Snack", harga: 25000, hpp: 5000 },
  { kode: "M015", nama: "Kaya Toast", kategori: "Snack", harga: 25000, hpp: 15000 }
];

var penjualan = [
  { id: "TS001", tanggal: "2026-05-01", kodeMenu: "M001", qty: 4, channel: "Makan Di Tempat" },
  { id: "TS002", tanggal: "2026-05-02", kodeMenu: "M002", qty: 8, channel: "Gofood" },
  { id: "TS003", tanggal: "2026-05-03", kodeMenu: "M003", qty: 6, channel: "Takeaway" },
  { id: "TS004", tanggal: "2026-05-04", kodeMenu: "M004", qty: 4, channel: "Makan Di Tempat" },
  { id: "TS005", tanggal: "2026-05-05", kodeMenu: "M005", qty: 9, channel: "Gofood" },
  { id: "TS006", tanggal: "2026-05-06", kodeMenu: "M006", qty: 4, channel: "Takeaway" },
  { id: "TS007", tanggal: "2026-05-07", kodeMenu: "M007", qty: 3, channel: "Makan Di Tempat" },
  { id: "TS008", tanggal: "2026-05-08", kodeMenu: "M008", qty: 5, channel: "Gofood" },
  { id: "TS009", tanggal: "2026-05-09", kodeMenu: "M009", qty: 8, channel: "Takeaway" },
  { id: "TS010", tanggal: "2026-05-10", kodeMenu: "M010", qty: 9, channel: "Makan Di Tempat" },
  { id: "TS011", tanggal: "2026-05-11", kodeMenu: "M011", qty: 8, channel: "Gofood" },
  { id: "TS012", tanggal: "2026-05-12", kodeMenu: "M012", qty: 5, channel: "Takeaway" },
  { id: "TS013", tanggal: "2026-05-13", kodeMenu: "M013", qty: 3, channel: "Makan Di Tempat" },
  { id: "TS014", tanggal: "2026-05-14", kodeMenu: "M014", qty: 8, channel: "Gofood" },
  { id: "TS015", tanggal: "2026-05-15", kodeMenu: "M015", qty: 6, channel: "Takeaway" },
  { id: "TS016", tanggal: "2026-05-16", kodeMenu: "M001", qty: 7, channel: "Makan Di Tempat" },
  { id: "TS017", tanggal: "2026-05-17", kodeMenu: "M002", qty: 4, channel: "Gofood" },
  { id: "TS018", tanggal: "2026-05-18", kodeMenu: "M003", qty: 7, channel: "Takeaway" },
  { id: "TS019", tanggal: "2026-05-19", kodeMenu: "M004", qty: 8, channel: "Makan Di Tempat" },
  { id: "TS020", tanggal: "2026-05-20", kodeMenu: "M005", qty: 3, channel: "Gofood" },
  { id: "TS021", tanggal: "2026-05-21", kodeMenu: "M006", qty: 6, channel: "Takeaway" },
  { id: "TS022", tanggal: "2026-05-22", kodeMenu: "M007", qty: 5, channel: "Makan Di Tempat" },
  { id: "TS023", tanggal: "2026-05-23", kodeMenu: "M008", qty: 7, channel: "Gofood" },
  { id: "TS024", tanggal: "2026-05-24", kodeMenu: "M009", qty: 6, channel: "Takeaway" },
  { id: "TS025", tanggal: "2026-05-25", kodeMenu: "M010", qty: 6, channel: "Makan Di Tempat" },
  { id: "TS026", tanggal: "2026-05-26", kodeMenu: "M011", qty: 9, channel: "Gofood" },
  { id: "TS027", tanggal: "2026-05-27", kodeMenu: "M012", qty: 4, channel: "Takeaway" },
  { id: "TS028", tanggal: "2026-05-28", kodeMenu: "M013", qty: 6, channel: "Makan Di Tempat" },
  { id: "TS029", tanggal: "2026-05-29", kodeMenu: "M014", qty: 6, channel: "Gofood" },
  { id: "TS030", tanggal: "2026-05-30", kodeMenu: "M015", qty: 3, channel: "Takeaway" },
  { id: "TS031", tanggal: "2026-05-31", kodeMenu: "M001", qty: 8, channel: "Makan Di Tempat" },
  { id: "TS032", tanggal: "2026-06-01", kodeMenu: "M002", qty: 3, channel: "Gofood" },
  { id: "TS033", tanggal: "2026-06-02", kodeMenu: "M003", qty: 6, channel: "Takeaway" },
  { id: "TS034", tanggal: "2026-06-03", kodeMenu: "M004", qty: 7, channel: "Makan Di Tempat" },
  { id: "TS035", tanggal: "2026-06-04", kodeMenu: "M005", qty: 4, channel: "Gofood" },
  { id: "TS036", tanggal: "2026-06-05", kodeMenu: "M006", qty: 4, channel: "Takeaway" },
  { id: "TS037", tanggal: "2026-06-06", kodeMenu: "M007", qty: 7, channel: "Makan Di Tempat" },
  { id: "TS038", tanggal: "2026-06-07", kodeMenu: "M008", qty: 6, channel: "Gofood" },
  { id: "TS039", tanggal: "2026-06-08", kodeMenu: "M009", qty: 3, channel: "Takeaway" },
  { id: "TS040", tanggal: "2026-06-09", kodeMenu: "M010", qty: 9, channel: "Makan Di Tempat" }
];

function cariMenu(kodeMenu) {
  var hasil = null;

  for (var i = 0; i < menu.length; i++) {
    if (menu[i].kode === kodeMenu) {
      hasil = menu[i];
    }
  }

  return hasil;
}

function tentukanStatusProfit(laba) {
  if (laba >= 100000) {
    return "HIGH PROFIT";
  }

  if (laba >= 50000) {
    return "MEDIUM PROFIT";
  }

  return "LOW PROFIT";
}

function jumlahkanJikaSama(daftar, namaField, nilaiField, namaFieldAngka) {
  var total = 0;

  for (var i = 0; i < daftar.length; i++) {
    if (daftar[i][namaField] === nilaiField) {
      total = total + daftar[i][namaFieldAngka];
    }
  }

  return total;
}

function hitungJikaSama(daftar, namaField, nilaiField) {
  var jumlah = 0;

  for (var i = 0; i < daftar.length; i++) {
    if (daftar[i][namaField] === nilaiField) {
      jumlah = jumlah + 1;
    }
  }

  return jumlah;
}

function cariNamaDenganNilaiTerbesar(objek) {
  var namaTerbesar = null;
  var nilaiTerbesar = -Infinity;

  for (var nama in objek) {
    if (objek[nama] > nilaiTerbesar) {
      nilaiTerbesar = objek[nama];
      namaTerbesar = nama;
    }
  }

  return namaTerbesar;
}

var dataLengkap = [];

for (var i = 0; i < penjualan.length; i++) {
  var trx = penjualan[i];
  var dataMenu = cariMenu(trx.kodeMenu);

  var omzet = trx.qty * dataMenu.harga;
  var totalHpp = trx.qty * dataMenu.hpp;
  var labaKotor = omzet - totalHpp;
  var status = tentukanStatusProfit(labaKotor);

  dataLengkap.push({
    id: trx.id,
    tanggal: trx.tanggal,
    kodeMenu: trx.kodeMenu,
    namaMenu: dataMenu.nama,
    kategori: dataMenu.kategori,
    channel: trx.channel,
    qty: trx.qty,
    hargaSatuan: dataMenu.harga,
    hppSatuan: dataMenu.hpp,
    omzet: omzet,
    totalHpp: totalHpp,
    labaKotor: labaKotor,
    statusProfit: status
  });
}

var totalOmzet = 0;
var totalHppSemua = 0;
var totalLabaKotor = 0;

for (var i = 0; i < dataLengkap.length; i++) {
  totalOmzet = totalOmzet + dataLengkap[i].omzet;
  totalHppSemua = totalHppSemua + dataLengkap[i].totalHpp;
  totalLabaKotor = totalLabaKotor + dataLengkap[i].labaKotor;
}

var jumlahHarga = 0;

for (var i = 0; i < dataLengkap.length; i++) {
  jumlahHarga = jumlahHarga + dataLengkap[i].hargaSatuan;
}

var rataRataTransaksi = jumlahHarga / dataLengkap.length;

var daftarKategori = ["Coffe", "Non Coffe", "Food", "Snack"];
var jumlahProdukTerjual = {};

for (var k = 0; k < daftarKategori.length; k++) {
  var namaKategori = daftarKategori[k];
  jumlahProdukTerjual[namaKategori] = jumlahkanJikaSama(dataLengkap, "kategori", namaKategori, "qty");
}

var omzetPerKategori = {};

for (var k = 0; k < daftarKategori.length; k++) {
  var namaKategori = daftarKategori[k];
  omzetPerKategori[namaKategori] = jumlahkanJikaSama(dataLengkap, "kategori", namaKategori, "omzet");
}

var daftarChannel = ["Makan Di Tempat", "Gofood", "Takeaway"];
var omzetPerChannel = {};

for (var c = 0; c < daftarChannel.length; c++) {
  var namaChannel = daftarChannel[c];
  omzetPerChannel[namaChannel] = jumlahkanJikaSama(dataLengkap, "channel", namaChannel, "omzet");
}

var transaksiPerChannel = {};

for (var c = 0; c < daftarChannel.length; c++) {
  var namaChannel = daftarChannel[c];
  transaksiPerChannel[namaChannel] = hitungJikaSama(dataLengkap, "channel", namaChannel);
}

var kategoriOmzetTerbesar = cariNamaDenganNilaiTerbesar(omzetPerKategori);
var kategoriTerlaris = cariNamaDenganNilaiTerbesar(jumlahProdukTerjual);
var channelTransaksiTerbanyak = cariNamaDenganNilaiTerbesar(transaksiPerChannel);
var channelOmzetTerbanyak = cariNamaDenganNilaiTerbesar(omzetPerChannel);

console.log("");
for (var i = 0; i < 40; i++) {
  var t = dataLengkap[i];
  console.log(
    t.id + " | " + t.namaMenu +
    " | Omzet: " + t.omzet +
    " | Laba: " + t.labaKotor +
    " | Status: " + t.statusProfit
  );
}

console.log("");
console.log("Total Omzet            :", totalOmzet);
console.log("");
console.log("Total HPP              :", totalHppSemua);
console.log("");
console.log("Total Laba Kotor       :", totalLabaKotor);
console.log("");
console.log("Rata-Rata Transaksi    :", rataRataTransaksi);
console.log("");
console.log("Jumlah Produk Terjual  :", jumlahProdukTerjual);
console.log("");
console.log("Omzet per Kategori     :", omzetPerKategori);
console.log("");
console.log("Omzet per Channel      :", omzetPerChannel);
console.log("");
console.log("Transaksi per Channel  :", transaksiPerChannel);
console.log("");
console.log("Kategori Omzet Terbesar     :", kategoriOmzetTerbesar);
console.log("");
console.log("Kategori Terlaris           :", kategoriTerlaris);
console.log("");
console.log("Channel Transaksi Terbanyak :", channelTransaksiTerbanyak);
console.log("");
console.log("Channel Omzet Terbanyak     :", channelOmzetTerbanyak);