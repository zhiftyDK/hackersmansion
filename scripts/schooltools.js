document.getElementById("searchBar").addEventListener("input", function(e){
    let value = e.target.value;
    document.querySelectorAll("#SchoolPosts .rounded").forEach(element => {
        let titles = element.children[0].innerText.toLowerCase();
        if (titles.includes(value.toLowerCase())) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
});

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

function cosinesSelect(){
    const modal1 = document.getElementById("1");
    const modal2 = document.getElementById("2");
    const modal3 = document.getElementById("3");
    const modal4 = document.getElementById("4");
    const modal5 = document.getElementById("5");
    const modal6 = document.getElementById("6");
    const selector = document.getElementById("cosinesSelector");

    for (let i = 1; i < 7; i++) {
        if (selector.value == i) {
            eval("modal" + i + ".style.display = 'block'");
        } else {
            eval("modal" + i + ".style.display = 'none'");
        }
    }
}