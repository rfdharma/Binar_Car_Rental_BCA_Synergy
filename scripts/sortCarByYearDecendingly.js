function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Implementasi algoritma bubble sort untuk mengurutkan mobil berdasarkan tahun secara descending
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j].year < result[j + 1].year) {
        // Tukar posisi elemen jika tahunnya lebih kecil
        const temp = result[j];    // Simpan elemen saat ini dalam variabel sementara
        result[j] = result[j + 1]; // Ganti elemen saat ini dengan elemen berikutnya
        result[j + 1] = temp;      // Ganti elemen berikutnya dengan elemen yang disimpan dalam variabel sementara
      }
    }
  }


  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}