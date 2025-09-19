function wassup() {
  const nama = prompt("Masukkan Nama Anda:");
  if (nama === null || nama.trim() === "") {
    alert("Nama wajib diisi untuk konsultasi 😡.");
    return;
  }

  const greeting = getGreeting();
  const message = `Selamat ${greeting} Ma Mora \u{1F605}, Saya ${nama}, Saya ingin konsultasi dengan Mas Mora. Mengenai clan X904....`;
  const phoneNumber = "6285179576715";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  // Buka link WhatsApp dengan pesan
  window.open(url, "_blank");
}

function igeh() {
  const igeh = `https://www.instagram.com/x904pbid?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`;
  window.open(igeh, "_blank");
}
