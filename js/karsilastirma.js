
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

      var slc3 = document.querySelector("#slc3");
  var modelleri_listele3 = "";
  
  function markalariListele3(param) {
        var httpistegi3 = new XMLHttpRequest();
        var adres3 = "https://raw.githubusercontent.com/atakanbalta/Moto-karsilastirma/master/markalar.json";
      
      
        httpistegi3.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myArr3 = JSON.parse(this.responseText);
            var slc3 = document.querySelector("#slc3");
            myArr3.forEach(function(params) {
              slc3.innerHTML += '<option value="'+ params.marka +'">' + params.marka + '</option>';
            });
          }
        };
        httpistegi3.open("GET", adres3, true);
        httpistegi3.send();
      }
    
      markalariListele3();
  
    function modelGetir4(param) {
        var httpistegi4 = new XMLHttpRequest();
        var adres4 = "https://raw.githubusercontent.com/atakanbalta/Moto-karsilastirma/master/markalar.json";
      
        modelleri_listele3 = "";
        httpistegi4.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myArr4 = JSON.parse(this.responseText);
            var slc4 = document.querySelector("#slc4");
            for(let i = 0; i<myArr4.length;i++){
           // myArr2.forEach(function(params) {
                if(param == myArr4[i]["marka"]){
                  myArr4[i]["modeller"].forEach(function(pp){
                    modelleri_listele3 += '<option>'+pp+'</option>';
                     slc4.innerHTML = modelleri_listele3;
                  });
                    
                   }  
            }
             
          }
         
        };
        httpistegi4.open("GET", adres4, true);
        httpistegi4.send();
  
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