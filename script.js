const dateElement = document.getElementById('current-date');
const timeElement = document.getElementById('current-time');

function updateDateTime() {
    const now = new Date();
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('id-ID', optionsDate);
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const currentTime = now.toLocaleTimeString('id-ID', optionsTime);
    
    dateElement.textContent = currentDate;
    timeElement.textContent = currentTime;
}

// Mengatur gambar latar belakang yang aktif
let currentBackground = 0;
const backgrounds = document.querySelectorAll('.bg-slide');

function updateBackground() {
    backgrounds.forEach((bg, index) => {
        bg.style.opacity = index === currentBackground ? 1 : 0; // Hanya tampilkan background yang aktif
    });
}

function nextBackground() {
    currentBackground = (currentBackground + 1) % backgrounds.length; // Menggeser ke background selanjutnya
    updateBackground(); // Memperbarui tampilan background
}

function prevBackground() {
    currentBackground = (currentBackground - 1 + backgrounds.length) % backgrounds.length; // Menggeser ke background sebelumnya
    updateBackground(); // Memperbarui tampilan background
}

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

updateDateTime();
setInterval(updateDateTime, 1000); // Memperbarui waktu setiap detik
updateBackground(); // Memperbarui background awal
setInterval(nextBackground, 5000); // Menggeser background otomatis setiap 5 detik
