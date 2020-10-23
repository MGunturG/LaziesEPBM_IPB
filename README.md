LaziesEPBM
==========

Seuprit kode JavaScript untuk mengisi EPBM (gue lupa singkatan dari apa) secara otomatis, kerennya bisa langsung SUBMIT. Yang ini khusus S1 aja, vokasi gue gak tau caranya, gak ada yang mau minjemin akunnya =(

Ini versi Kuliah Online tahun 2020 sesi UTS (Oktober 20)

Terinspirasi dari dengan modifikasi
* https://github.com/rendrop/EPBM_Bot
* https://github.com/williamhanugra/epbm-hack

Kek mana cara pakenya?
------------

* Login ke simak, arahin ke menu EPBM
* Pilih mata kuliah yang pengen dinilai
* Buka konsol browser, Chrome (ctrl+shift+j), Firefox (ctrl+shift+k), browser lain cari sendiri
* Copy code yang dari github ini dan paste-kan ke konsol browser kalian
```javascript
function laziesepbm(jumlah_dosen, kesan) {
	min = Math.ceil(kesan);
	max = Math.floor(kesan) + 1;
	// 1 | Random
	// 2 | Tidak setuju, setuju, sangat setuju
	// 3 | setuju, sangat setuju
	// 4 | sangat setuju

	// Untuk ngisi form yang #JawabanMK (penilaian mata kuliah)
	formNumberMK = 28;
	for (i = 0; i<10; i++) {
		valueChoosen = Math.floor(Math.random() * (max - min + 1)) + min;
		target = "#JawabanMK_20" + formNumberMK + valueChoosen;
		// console.log(target);
		$(target).attr('checked', true);
		formNumberMK++;
	}

	// Untuk ngisi form yang #JawabanDosen (penilaian dosen kuliah)
	for (dosen = 1; dosen<=jumlah_dosen; dosen++) {
		formNumberDN = 38;
		for (pertanyaan = 1; pertanyaan<=11; pertanyaan++) {
			valueChoosen = Math.floor(Math.random() * (max - min + 1)) + min;
			target = "#JawabanDosen_" + dosen + pertanyaan + "20" +formNumberDN + valueChoosen;
			// console.log(target);
			$(target).attr('checked', true);
			formNumberDN++;
		}
	}

	// Checklist pernyataan
	$("#Pernyataan").prop("checked", true);
  $("#mbuh").removeClass("alert alert-danger");
  $("#mbuh").addClass("alert alert-success");

  // Submit
  $("#save").click();
}

laziesepbm(100,3)
```
* Tekan "Enter"
* Kelar deh

| Kesan         | Random-Choose                         |
| :------------:|:-------------------------------------:|
| 1             | Sangat Tidak Setuju atau Tidak Setuju |
| 2             | Tidak Setuju atau Setuju              |
| 3             | Setuju atau Sangat Setuju             |

Disclaimer
==========

Gue gak bertanggungjawab kalo ada perang dunia karena lu ngisi EPBMnya asal-asalan (pake script). Resiko ditanggung pengguna bukan pembuat script.
