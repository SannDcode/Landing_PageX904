// masih tahap pengembangan

alert("WELCOMEEEE!!! 😎");
alert("BTW INI LANDING PAGE MASIH TAHAP PENGEMBANGAN YAA!! 😅");

window.addEventListener("scroll", function () {
  const flex = document.getElementById("nvbar");
  if (window.scrollY > 50) {
    flex.classList.add("transparentt");
  } else {
    flex.classList.remove("transparentt");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    topp.classList.add("showtopp");
    topp.classList.remove("hidden");
} else {
    topp.classList.add("hidden");
    topp.classList.remove("showtopp");
  }
});

topp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Modal Image Gallery
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const captionList = document.getElementById("captionList");
  const closeBtn = document.getElementById("closeBtn");

  // Data caption untuk tiap gambar
  const captions = {
    thumbnail: ["Good attitude 🧠", "Aktif Discord 👨🏼‍🎤👩🏼‍🎤", "Aktif Whatsapp 👩🏼‍🎤👨🏼‍🎤", "No Toxic 🤐", "No Cheat 🛠"],
    thumbnail2: ["Follow Instagram <a class='underline font-semibold' href='https://www.instagram.com/x904pbid/' target='_blank'>@x904pbid</a>", "Konfirmasi kepada admin, dengan cara DM(Direct Message) Instagram nya ✉ ✅", "No Lambang ❌", "CN Live ♻ 🔴", "Konfirmasi untuk join discord 🔵", "Join Grup Whatsapp X904 🟢"],
    thumbnail3: ["Wajib Bintang 1 ⭐"],
  };

  // Ambil semua thumbnail
  const thumbnails = document.querySelectorAll(
    "#thumbnail, #thumbnail2, #thumbnail3, #chattt, #chatttt"
  );

  thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalImg.src = img.src;

      // Hapus isi lama
      captionList.innerHTML = "";

      // Isi caption UL > LI
      captions[img.id].forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = item;
        captionList.appendChild(li);
      });
    });
  });

  // Tombol close
  closeBtn.onclick = () => modal.classList.add("hidden");

  // Tutup modal kalau klik luar
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };

  function getGreeting() {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 11) return "pagi";
    if (hours >= 11 && hours < 15) return "siang";
    if (hours >= 15 && hours < 18) return "sore";
    return "malam";
  }

document.querySelectorAll("#knslBtn, #knslBtn2").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

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
  });
});