var input1 = document.getElementById("ha");
      input1.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
    document.getElementById("hbtn").click();
      }
    });
    
    var input2 = document.getElementById("hb");
      input2.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
    document.getElementById("hbtn").click();
      }
    });
    
    var input3 = document.getElementById("ka");
      input3.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
    document.getElementById("kbtn").click();
      }
    });
    
    var input4 = document.getElementById("kb");
      input4.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
    document.getElementById("kbtn").click();
      }
    });
  
    function calc1(){
      var ha = document.getElementById("ha").value;
      var hb = document.getElementById("hb").value;
      
      var hha = ha.replace(/,/g, '.')
      var hhb = hb.replace(/,/g, '.')
      
      var hsqrt = hha*hha+hhb*hhb;
      document.getElementById("hc").value = Math.sqrt(hsqrt);
      document.getElementById("hp").innerHTML = hha+"² + "+hhb+"² = "+hsqrt+". √"+hsqrt+" = "+Math.sqrt(hsqrt);
    }
    
    function calc2(){
      var ka = document.getElementById("ka").value;
      var kb = document.getElementById("kb").value;
      
      var kka = ka.replace(/,/g, '.')
      var kkb = kb.replace(/,/g, '.')
      
      var ksqrt = kka*kka-kkb*kkb;
      document.getElementById("kc").value = Math.sqrt(ksqrt);
      document.getElementById("kp").innerHTML = kka+"² - "+kkb+"² = "+ksqrt+". √"+ksqrt+" = "+Math.sqrt(ksqrt);
    }