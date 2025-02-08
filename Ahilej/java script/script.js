

let submit = document.getElementById('kbutton');
submit.addEventListener('click', Send) ;
function Send() {
    let poruka = document.getElementById("message");
    var text;
    if (confirm("Jeste li sigurni da zelite da posaljete upit?")) {
        txt = "Uspesno poslato";
    } else {
        txt = "Odustali ste od slanja!";
    }
    document.getElementById("uspesno").innerHTML = txt;
    alert("Uspesno ste poslali poruku:" +poruka.value);
}