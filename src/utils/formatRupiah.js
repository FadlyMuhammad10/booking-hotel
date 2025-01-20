function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Anda bisa mengubah ini sesuai kebutuhan
    maximumFractionDigits: 2, // Anda bisa mengubah ini sesuai kebutuhan
  }).format(value);
}

export default formatRupiah;
