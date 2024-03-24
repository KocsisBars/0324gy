document.addEventListener('DOMContentLoaded', function () {
    const nev = document.getElementById('nev');
    const allat = document.getElementById('input[name= "allat"]');
    const kuldes = document.getElementById('submit');

    kuldes.addEventListener('click', function (event) {
        let allatok;
        for (let index = 0; index < allat.length; index++) {
            if (allat[index].checked) {
                allatok=allat[index].value;
            }
        }
        let neve = nev.value;
        let haziallat=allat.value;
        let adatok ={
            "name":neve,
            "allat":haziallat
        };
        console.log(adatok);
    })
});