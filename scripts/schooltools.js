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

//Molecular Polarity
document.getElementById("polarityInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("polarityButton").click();
    }
  });

function polarityCalc() {
    const chemicalElementArray = document.getElementById("polarityInput").value.replace(/[0-9]/g, '').split(/(?=[A-Z])/);
    console.log(chemicalElementArray);

    const H = 2.2;
    const Li = 0.98;
    const Na = 0.93;
    const K = 0.82;
    const Rb = 0.82;
    const Cs = 0.79;
    const Be = 1.57;
    const Mg = 1.31;
    const Ca = 1;
    const Sr = 0.95;
    const Ba = 0.89;
    const B = 2.04;
    const Al = 1.61;
    const Ga = 1.81;
    const In = 1.78;
    const C = 2.55;
    const Si = 1.9;
    const Ge = 2.01;
    const Sn = 1.96;
    const Pb = 2.33;
    const N = 3.04;
    const P = 2.19;
    const As = 2.18;
    const Sb = 2.05;
    const O = 3.44;
    const S = 2.58;
    const Se = 2.55;
    const Te = 2.1;
    const F = 3.98;
    const Cl = 3.16;
    const Br = 2.96;
    const I = 2.66;

    const electronegativitydifference = parseFloat(eval(`${chemicalElementArray[0]} - ${chemicalElementArray[1]}`).toString().replace("-", ""));
    if(electronegativitydifference == 0) {
        document.getElementById("polarityOutput").innerHTML = `<p><strong>Electronegativity Difference:</strong> ${electronegativitydifference}</p><p><strong>Polarity:</strong> non-polar</p><p><strong>Bondtype:</strong> Covalent</p>`;
    } else if(electronegativitydifference > 0 && electronegativitydifference < 0.5) {
        document.getElementById("polarityOutput").innerHTML = `<p><strong>Electronegativity Difference:</strong> ${electronegativitydifference}</p><p><strong>Polarity:</strong> non-polar</p><p><strong>Bondtype:</strong> Covalent</p>`;
    } else if(electronegativitydifference > 0.5 && electronegativitydifference < 2) {
        document.getElementById("polarityOutput").innerHTML = `<p><strong>Electronegativity Difference:</strong> ${electronegativitydifference}</p><p><strong>Polarity:</strong> polar</p><p><strong>Bondtype:</strong> Polar Covalent</p>`;
    } else if(electronegativitydifference > 2) {
        document.getElementById("polarityOutput").innerHTML = `<p><strong>Electronegativity Difference:</strong> ${electronegativitydifference}</p><p><strong>Bondtype:</strong> Ionic</p>`;
    }
}