document.getElementById('login').addEventListener('submit', function(e){            
//mencegah form inputan reload
e.preventDefault();

// deklarasikan form dengan isi login
var form = document.getElementById('login');
// deklarasi var untuk menyimpan username
var email = document.getElementById('email').value;
// deklarasi var untuk menyimpan password
var password = document.getElementById('pass').value;

// Daftar user yang valid
const users = [
    { email: "raditya@gmail.com", password: "123" },
    { email: "kevin@gmail.com",    password: "123" },
    { email: "dilla@gmail.com",    password: "123" },
    { email: "novita@gmail.com",     password: "123" }
];

const userValid = users.find(user => user.email === email && user.password === password);

  if (userValid) {
    alert("Login berhasil!");
    window.location.href = "admin/dashboard.html";
  } else {
    alert("Login gagal! Email atau password salah.");
  }

});

