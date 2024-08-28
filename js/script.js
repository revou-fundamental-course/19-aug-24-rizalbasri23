let userName = prompt("Masukkan nama Anda dibawah!");
document.getElementById("username").innerText = userName;

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}


document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    });
});




function displayData() {
    // Ambil data dari form
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Validasi input
    if (!name || !date || !gender || !message) {
        alert('Semua field harus diisi!');
        return;
    }

    // Tampilkan data
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Data yang Dimasukkan:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal:</strong> ${date}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender === 'male' ? 'Laki-laki' : 'Perempuan'}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
}
window.onbeforeunload = () => {
    for (const contactForm of document.getElementsByTagName("contactForm")) {
      form.reset();
    }
  };