function Angkot(sopir, trayek, penumpang, kas, bensin) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  this.bensin = bensin;

  // 1. Method Penumpang Naik
  this.penumpangNaik = function (namaPenumpang) {
    // Cek apakah penumpang sudah ada di dalam angkot
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        alert(namaPenumpang + " sudah ada di dalam angkot!");
        return false;
      }
    }

    // Hitung total penumpang aktif
    var jumlahPenumpangAktif = 0;
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] !== undefined) {
        jumlahPenumpangAktif++;
      }
    }

    // Cek kecukupan bensin
    var kebutuhanBensin = (jumlahPenumpangAktif + 1) * 10;
    if (this.bensin < kebutuhanBensin) {
      alert(
        "Bensin tidak cukup! Butuh " +
          kebutuhanBensin +
          " bensin untuk membawa " +
          (jumlahPenumpangAktif + 1) +
          " penumpang.",
      );
      return false;
    }

    // Cari kursi kosong (undefined)
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === undefined) {
        this.penumpang[i] = namaPenumpang;
        return this.penumpang;
      }
    }

    // Jika tidak ada kursi kosong, tambah ke belakang
    this.penumpan; // // const tampilNama = (nama) => `halo ${nama}`;
    // // console.log(tampilNama);

    // let mahasiswa = ["a", "l", "k"];
    // let jumlahHURUF = mahasiswa.map((nama) => nama.legth);
    // console.log(jumlahHURUF);
    console.log(a);
    var a = 1;
    console.timeLog(b);
    let b = 8;
    g.push(namaPenumpang);
    return this.penumpang;
  };

  // 2. Method Penumpang Turun
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("Angkot masih kosong!");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        this.bensin -= 10; // Bensin berkurang per penumpang turun

        if (this.bensin < 0) this.bensin = 0;
        return this.penumpang;
      }
    }

    // Jika perulangan selesai tapi nama tidak ditemukan
    alert("Penumpang bernama " + namaPenumpang + " tidak ada di dalam angkot!");
    return false;
  };

  // 3. Method Ganti Sopir
  this.gantiSopir = function (sopirLama, sopirBaru) {
    if (this.sopir === sopirLama) {
      this.sopir = sopirBaru;
      alert("Sopir berhasil diganti menjadi " + sopirBaru);
      return this.sopir;
    } else {
      alert("Nama sopir lama (" + sopirLama + ") tidak sesuai!");
      return false;
    }
  };

  // 4. Method Isi Bensin Normal
  this.isiBensin = function (liter, hargaPerLiter) {
    var totalBiaya = liter * hargaPerLiter;

    if (this.kas < totalBiaya) {
      alert(
        "Uang kas tidak cukup! Gunakan isiBensinDarurat jika kas tidak cukup.",
      );
      return false;
    }

    this.kas -= totalBiaya;
    this.bensin += liter;
    alert(
      "Berhasil isi bensin " +
        liter +
        " liter. Bensin sekarang: " +
        this.bensin,
    );
    return this.bensin;
  };

  // 5. Method Isi Bensin Darurat
  this.isiBensinDarurat = function (liter, hargaPerLiter) {
    var totalBiaya = liter * hargaPerLiter;

    this.kas -= totalBiaya; // Kas menjadi minus (utang)
    this.bensin += liter;

    alert("Bensin darurat berhasil diisi! Kas sekarang (Utang): " + this.kas);
    return this.bensin;
  };
}

// Inisialisasi Objek Angkot
var angkot1 = new Angkot("amar", ["mtp", "bjb"], [], 0, 100);
var angkot2 = new Angkot("malik", ["bjb", "mtp"], [], 0, 100);
var angkot3 = new Angkot("sarofor", ["ngawwi", "pasarlma"], [], 0, 100);
var angkot4 = new Angkot("alvi", ["isfi", "rumah"], [], 0, 20);
