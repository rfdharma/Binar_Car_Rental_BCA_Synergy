function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Loop melalui semua mobil menggunakan loop for...of
  for (const car of cars) {
    // Periksa apakah mobil tersedia
    if (car.available === true) {
      result.push(car);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}