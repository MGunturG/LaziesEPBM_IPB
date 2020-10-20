function laziesepbm(kesan) {
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
		console.log(target);
		$(target).attr('checked', true);
		formNumberMK++;
	}

	// Untuk ngisi form yang #JawabanDosen (penilaian dosen kuliah)
	for (dosen = 1; dosen<=10; dosen++) {
		formNumberDN = 38;
		for (pertanyaan = 1; pertanyaan<=11; pertanyaan++) {
			valueChoosen = Math.floor(Math.random() * (max - min + 1)) + min;
			target = "#JawabanDosen_" + dosen + pertanyaan + "20" +formNumberDN + valueChoosen;
			console.log(target);
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