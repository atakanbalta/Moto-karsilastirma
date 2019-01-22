window.onload=function(){
function markaListele() {
  var httpistegi = new XMLHttpRequest();
  var adres = "https://raw.githubusercontent.com/atakanbalta/Moto-karsilastirma/master/markalar.json";


  httpistegi.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      var marka1 = document.querySelector("#marka1");
      myArr.forEach(function(params) {
        marka1.innerHTML += '<option value="' + params.marka + '">'+ params.marka +'</option>';
      });
    }
  };
  httpistegi.open("GET", adres, true);
  httpistegi.send();
}

markaListele();}



/*window.onload=function(){
  function markaListele() {
    var httpistegi = new XMLHttpRequest();
    var adres = "https://raw.githubusercontent.com/atakanbalta/Moto-karsilastirma/master/markalar.json";
  
  
    httpistegi.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var marka2 = document.querySelector("#marka2");
        myArr.forEach(function(params) {
          marka2.innerHTML += '<option value="' + params.marka + '">'+ params.marka +'</option>';
        });
      }
    };
    httpistegi.open("GET", adres, true);
    httpistegi.send();
  }
  
  markaListele();} */