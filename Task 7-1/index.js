let log = document.getElementById("log");
let crt = document.getElementById("crt");
let btn = document.getElementById("btn");
var krkt = /@/;

function register() {
	log.style.left = "-400px";
	crt.style.left = "50px";
	btn.style.left = "144px";
}

function login() {
	log.style.left = "50px";
	crt.style.left = "450px";
	btn.style.left = "5px";
}


function loginForm() {
	let mail = document.getElementById("mail").value;
	let sifrel = document.getElementById("sifrel").value;
	let sembol = '*|,:<>[]{}`;()@&$#%!+-"/.';
	let sembolvar = false;
	for (var i = 0; i < sifrel.length - 1; i++) {
		if (sembol.indexOf(sifrel.charAt(i)) != -1) {
			sembolvar = true;
		}}
	if (mail == "") {
		alert("Lütfen mail alanını doldurunuz!");
		return false;
	} else if (!krkt.test(mail)) {
		alert("@ işaretini kullanınız");
	}else{
		alert("Mail uygun");
	}
	if (sifrel == "") {
		alert("Lütfen şifre alanını doldurunuz!");
		return false;
	} else if (sifrel.length < 8) {
		alert("Şifre en az 8 karakter olmalı!");
		return false;
	} else if (sembolvar == false) {
		alert("Şifre en az bir sembol içermelidir.");
		return false;
	}
	else if (sifrel.search(/[A-Z]/) < 0) {
		alert("Şifre en az bir büyük harf içermelidir.");
		return false;
	}
	else {
		alert("Şifre uygun");
		return true;
	}}


function createAccountFrom() {
	let isso = document.getElementById("isso").value;
	let mail2 = document.getElementById("mail2").value;
	let sifrec = document.getElementById("sifrec").value;
	let sifrec2 = document.getElementById("sifrec2").value;
	let sembol = '*|,:<>[]{}`;()@&$#%!+-"/.';
	let sembolvar = false;

	for (var i = 0; i < sifrec.length - 1; i++) {
		if (sembol.indexOf(sifrec.charAt(i)) != -1) {
			sembolvar = true;
		}
	}

	if (mail2 == "") {
		alert("Lütfen mail alanını doldurunuz!");
		return false;
	} else if (!krkt.test(mail2)) {
		alert("@ işaretini kullanınız");
	}

	if(sifrec =="" || sifrec2==""){
		alert("Lütfen şifre alanlarını doldurunuz!");
		return false;
	} else if (sifrec.length < 8) {
		alert("Şifreniz en az 8 karakter olmalı!");
		return false;
	} else if (sifrec != sifrec2) {
		alert("Girilen sifreler aynı olmalı!")
		return false;
	} else if (sembolvar == false) {
		alert("Şifre en az bir sembol içermelidir.");
		return false;
	}
	else if (sifrec.search(/[A-Z]/) < 0) {
		alert("Şifre en az bir büyük harf içermelidir.");
		return false;
	}

	if(isso == ""){
	
	} else if (isso.length <= 2) {
		alert("Isım soy isim en az 2 karakter olmalıdır!");
		return false;
	} else if (isso.length > 14) {
		alert("Isım soy isimen fazla 15 karakter olmalıdır!");
		return false;
	} else {
		alert("Başarılı bir şekilde kayıt oldunuz.");
		return true;
	}
}