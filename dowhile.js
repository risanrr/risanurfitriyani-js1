let z = 6;

do {
  if (z === 8) {
    z++;
    continue; // Lewatkan iterasi jika z adalah 8.
  }

  console.log(z);
  z++;
} while (z <= 10);