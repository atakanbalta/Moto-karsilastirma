
var slc2 = document.querySelector("#slc2");
var modelleri_listele = "";

function markalariListele(param) {
      var httpistegi = new XMLHttpRequest();
      var adres = "https://raw.githubusercontent.com/atakanbalta/Moto-karsilastirma/master/markalar.json";
    
    
      httpistegi.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          var list1 = document.querySelector("#slc1");
          myArr.forEach(function(params) {
            list1.innerHTML += '<option value="'+ params.marka +'">' + params.marka + '</option>';
          });
        }
      };
      httpistegi.open("GET", adres, true);
      httpistegi.send();
    }
  
    markalariListele();

  function modelGetir(param) {
      var httpistegi2 = new XMLHttpRequest();
      var adres2 = "https://raw.githubusercontent.com/atakanbalta/Moto-karsilastirma/master/markalar.json";
    
      modelleri_listele = "";
      httpistegi2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myArr2 = JSON.parse(this.responseText);
          var list2 = document.querySelector("#slc2");
          for(let i = 0; i<myArr2.length;i++){
         // myArr2.forEach(function(params) {
              if(param == myArr2[i]["marka"]){
                myArr2[i]["modeller"].forEach(function(pp){
                  modelleri_listele += '<option>'+pp+'</option>';
                   slc2.innerHTML = modelleri_listele;
                });
                  
                 }  
          }
           
        }
       
      };
      httpistegi2.open("GET", adres2, true);
      httpistegi2.send();

    }
   


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