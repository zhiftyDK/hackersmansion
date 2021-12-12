function loadchemequ() {
    var e = ["Al + Fe2O4 = Fe + Al2O3", "H2 + O2 = H2O", "Fe + O2 = Fe2O3", "NH3 + O2 = NO + H2O", "Mg + HCl = MgCl2 + H2", "CH4 + O2 = CO2 + H2O", "C6H12O6 + O2 = CO2 + H2O", "CH4 + O2 = CO2 + 2H2O"],
        t = e[Math.floor(Math.random() * e.length)];
    $("#chemeuqation").val(t)
}

function CallId(e) {
    var t = e,
        i = document.getElementById("chemeuqation").value;
    $("#chemeuqation").val(i + t)
}

function CallSpace() {
    var e = document.getElementById("chemeuqation").value;
    $("#chemeuqation").val(e + " ")
}

function CallNumber(e) {
    var t = e,
        i = document.getElementById("chemeuqation").value;
    $("#chemeuqation").val(i + t)
}

function CallClear() {
    document.getElementById("chemeuqation").value = ""
}
var tablicaAtomow, tablicaJonow, tablicaCzasteczek, heightfromTop = 0,
    totalWidth = $(window).width();

function getHeight() {
    (heightfromTop = $("#sidebar").offset().top) ? document.getElementById("sidebar").offsetHeight: heightfromTop = $("#sidebar").offset().top
}

function stopRKey(e) {
    var t = (e = e || (event || null)).target ? e.target : e.srcElement ? e.srcElement : null;
    if (13 == e.keyCode && "text" == t.type) return !1
}

function Set() {
    this.count = 0, this.data = new Array, this.add = function(e) {
        this.data[this.count] = e, this.count++
    }, this.addOnce = function(e) {
        for (var t = 0; t < this.count; t++)
            if (this.data[t].name == e.name) return;
        this.data[this.count] = e, this.count++
    }, this.size = function() {
        return this.count
    }, this.itemAt = function(e) {
        return this.data[e]
    }, this.wypisz = function() {
        for (var e = 0; e < this.count; e++) pisz(this.data[e].name), e < this.count - 1 && pisz(", ")
    }, this.indexOf = function(e) {
        for (var t = 0; t < this.count; t++)
            if (this.data[t].name == e) return t;
        return -1
    }, this.contains = function(e) {
        for (var t = 0; t < this.count; t++)
            if (this.data[t] == e) return !0;
        return !1
    }
}

function multiply(e, t) {
    var i = new Array;
    for (ii = 0; ii < e.length; ii++) i[ii] = e[ii] * t;
    return i
}

function add(e, t) {
    var i = new Array;
    for (ii = 0; ii < e.length; ii++) i[ii] = e[ii] + t[ii];
    return i
}

function Matrix(e, t) {
    for (this.width = e, this.height = t, this.macierz = new Array(e), this.getElement = function(e, t) {
            return this.macierz[e][t]
        }, this.setElement = function(e, t, i) {
            this.macierz[e][t] = i
        }, this.wypisz = function() {
            for (ii = 0; ii < t; ii++) {
                for (kk = 0; kk < e; kk++) {
                    var i = String(this.macierz[kk][ii]);
                    1 == i.length ? pisz("  " + i) : 2 == i.length ? pisz(" " + i) : pisz(i), pisz(" ")
                }
                pisz("\n")
            }
        }, this.copy = function() {
            var i = new Matrix(e, t);
            for (ii = 0; ii < e; ii++)
                for (i.macierz[ii] = new Array(t), x = 0; x < t; x++) i.macierz[ii][x] = this.macierz[ii][x];
            return i
        }, this.substituteColumn = function(e, i) {
            for (x = 0; x < t; x++) this.macierz[e][x] = i[x]
        }, this.det = function() {
            for (var e, i, n = 1, a = 1, r = 1, o = 0; o < t - 1; o++)
                for (var s = o + 1; s < t; s++) {
                    r = 1;
                    e: for (; 0 == this.macierz[o][o];) {
                        if (o + r >= t) {
                            a = 0;
                            break e
                        }
                        for (var c = 0; c < t; c++) i = this.macierz[o][c], this.macierz[o][c] = this.macierz[o + r][c], this.macierz[o + r][c] = i;
                        r++, a *= -1
                    }
                    if (0 != this.macierz[o][o]) {
                        e = -this.macierz[s][o] / this.macierz[o][o];
                        for (var l = o; l < t; l++) this.macierz[s][l] = e * this.macierz[o][l] + this.macierz[s][l]
                    }
                }
            for (var u = 0; u < t; u++) n *= this.macierz[u][u];
            return n * a
        }, this.randomSubMatrix = function() {
            for (var i = new Set, n = new Matrix(e, e - 1), a = 0; a < e; a++) n.macierz[a][0] = this.macierz[a][0];
            i.add(0);
            for (var r = 1; r < e - 1; r++) {
                for (var o;;)
                    if (o = Math.ceil(Math.random() * t - 1), !i.contains(o)) {
                        i.add(o);
                        break
                    } for (var a = 0; a < e; a++) n.macierz[a][r] = this.macierz[a][o]
            }
            return n
        }, ii = 0; ii < e; ii++)
        for (this.macierz[ii] = new Array(t), x = 0; x < t; x++) this.macierz[ii][x] = 0
}

function Node(e, t) {
    this.isOperator = t, this.leftNode = null, this.rightNode = null, this.data = e, this.sumujAtomy = function() {
        return "*" == this.data ? multiply(this.leftNode.sumujAtomy(), this.rightNode.sumujAtomy()) : "+" == this.data ? add(this.leftNode.sumujAtomy(), this.rightNode.sumujAtomy()) : this.data
    }, this.wypisz = function() {
        null != this.leftNode && this.leftNode.wypisz();
        null != this.rightNode && this.rightNode.wypisz();
        pisz(this.data + " ")
    }
}

function Molecule(e) {
    this.name = e, this.charge = 0, this.atomTable = new Array, this.expressionTree = null, this.showAtomTable = function() {
        for (var e = 0; e < tablicaAtomow.size(); e++) pisz(tablicaAtomow.itemAt(e).name + ":" + this.atomTable[e] + ",");
        pisz("Å‚adunek:" + this.charge + "\n")
    }, this.sumuj = function() {
        this.atomTable = this.expressionTree.sumujAtomy()
    }
}

function Atom(e) {
    this.name = e, this.count = 0
}

function valclear() {
    setStatus(" [&copy; CodeZhifty] Type an equation below:"), document.calculator.chemeuqation.value = "H2 O2 H2O", document.calculator.detailed.value = " * Calculator just tries to balance the equation. It cannot predict products.", document.calculator.detailed.value += "\n * Reagents are sufficient to make an equation, e.g. H2 O2 H2O. Signs '+' or '=' are optional, however must be separated with spaces from reagents when introduced, e.g. H2 + O2 => H2O", document.calculator.detailed.value += "\n * One can try balance half reactions. Ions should be depicted with square or round braces like these: H[+], SO3(2-), Cu[+2].", document.calculator.detailed.value += "\n * Electrons e[-] must not be specified in half reactions."
}

function pisz(e) {
    var t = document.getElementById("detailed");
    t.value += e, t.scrollTop = t.scrollHeight
}

function setStatus(e) {
    document.getElementById("res").innerHTML = e
}

function isDigit(e) {
    return re = /[0-9]/, re.test(e)
}

function isLower(e) {
    return re = /[a-z]/, re.test(e)
}

function isUpper(e) {
    return re = /[A-Z]/, re.test(e)
}

function opensBrace(e) {
    return re = /[\(\[]/, re.test(e)
}

function closesBrace(e) {
    return re = /[\)\]]/, re.test(e)
}

function isMolecule(e) {
    return !(!isUpper(e.charAt(0)) && !opensBrace(e.charAt(0)) || containsJunk(e))
}

function isJunkOnly(e) {
    return !isUpper(e) && !isLower(e)
}

function containsJunk(e) {
    return re = /[^A-Za-z0-9\+\-\(\[\)\]]/, re.test(e)
}

function containsError(e) {
    return re1 = /[\(\[][a-z0-9]/, re2 = /[0-9][a-z]/, re1.test(e) || re2.test(e)
}

function equsolve() {
    surowaTablicaCzasteczek = new Array, tablicaAtomow = new Set, tablicaJonow = new Set, tablicaCzasteczek = new Set, rownanie = document.getElementById("chemeuqation").value, document.getElementById("detailed").value = "", setStatus("Searching for molecules..."), pisz("Searching for molecules...\n"), surowaTablicaCzasteczek = rownanie.split(" ");
    for (var e = 0; e < surowaTablicaCzasteczek.length; e++) {
        if ("" != (a = surowaTablicaCzasteczek[e]) && !isJunkOnly(a)) {
            for (; isDigit(a.charAt(0));) a = a.slice(1);
            tablicaCzasteczek.addOnce(new Molecule(a))
        }
    }
    for (var t = 0; t < tablicaCzasteczek.size(); t++) {
        if (!isMolecule(a = tablicaCzasteczek.itemAt(t).name)) return pisz("Incorrect structure " + a + "\n"), void(document.getElementById("error").innerHTML = "Incorrect structure " + a)
    }
    if (!(tablicaCzasteczek.size() > 0)) return pisz("No molecules found.\n"), void setStatus("No molecules found.");
    if (pisz("Found molecules:\n"), tablicaCzasteczek.wypisz(), pisz("\n"), tablicaCzasteczek.size() < 2) return pisz("To have an equation you need at least 2 molecules.\n"), void(document.getElementById("error").innerHTML = "To have an equation you need at least 2 molecules.");
    pisz("\n"), setStatus("Searching for atoms..."), pisz("Searching for atoms...\n");
    for (var i = 0; i < tablicaCzasteczek.size(); i++) {
        findAtoms(a = tablicaCzasteczek.itemAt(i).name, tablicaAtomow)
    }
    if (pisz("Found:\n"), tablicaAtomow.wypisz(), pisz("\n"), tablicaCzasteczek.size() > tablicaAtomow.size() + 1) return document.getElementById("error").innerHTML = "Infinite number of solutions.", pisz("\nPROBLEM: The equation probably is a combination of many reactions."), void pisz(" Try to remove one reagent.\n");
    pisz("\n"), setStatus("Searching for ions..."), pisz("Searching for ions...\n"), znaleziono = !1;
    for (i = 0; i < tablicaCzasteczek.size(); i++) {
        var n = checkCharge(a = tablicaCzasteczek.itemAt(i));
        if (1 == n) pisz(a.name + " charge: " + a.charge), pisz("\n"), znaleziono = !0;
        else if (-1 == n) return pisz("Incorrect structure of ion " + a.name + "\n"), void setStatus("Incorrect structure of ion " + a.name)
    }
    znaleziono || pisz("Not found.\n"), pisz("\n"), setStatus("Searching for incorrect ions..."), pisz("Searching for incorrect ions...\n");
    for (i = 0; i < tablicaCzasteczek.size(); i++) {
        if (containsPlusOrMinus((a = tablicaCzasteczek.itemAt(i)).name) && 0 == a.charge) return pisz("Incorrect notation of charge in " + a.name + "\n"), void setStatus("Incorrect notation of charge in " + a.name)
    }
    pisz("Not found.\n"), pisz("\n"), setStatus("Searching for incorrect brackets..."), pisz("Searching for incorrect brackets...\n");
    for (i = 0; i < tablicaCzasteczek.size(); i++) {
        for (var a = tablicaCzasteczek.itemAt(i).name, r = 0, o = 0; o < a.length; o++)
            if (opensBrace(a.charAt(o)) ? r++ : closesBrace(a.charAt(o)) && r--, r < 0) return pisz("Incorrect notation of brackets in " + a + "\n"), void setStatus("Incorrect notation of brackets in " + a);
        if (0 != r) return pisz("Incorrect notation of brackets in " + a + "\n"), void setStatus("Incorrect notation of brackets in " + a)
    }
    pisz("Not found.\n"), pisz("\n");
    for (e = 0; e < tablicaCzasteczek.size(); e++) {
        a = tablicaCzasteczek.itemAt(e);
        var s = new String(a.name);
        if (0 != a.charge && (index1 = s.lastIndexOf("["), index2 = s.lastIndexOf("("), index = index1 > index2 ? index1 : index2, s = s.slice(0, index)), setStatus("Analyzing structure " + s), a.expressionTree = c(s), null == a.expressionTree) return pisz("Incorrect structure of " + s + "\n"), void setStatus("Incorrect structure of " + s)
    }

    function c(e) {
        var t = new String(e);
        if (setStatus("Analyzing structure " + t), containsError(t)) return null;
        if (t.indexOf("(") < 0 && t.indexOf("[") < 0) {
            var i = countAtoms(t);
            return (s = new Node("*", !0)).leftNode = new Node(i, !1), s.rightNode = new Node(1, !1), s
        }
        if (isUpper(t.charAt(0))) {
            index1 = t.indexOf("["), index2 = t.indexOf("("), -1 != index1 && -1 != index2 ? index = index1 < index2 ? index1 : index2 : -1 == index1 ? index = index2 : index = index1;
            var n = new String(t.slice(0, index)),
                a = new String(t.slice(index));
            return (s = new Node("+", !0)).leftNode = c(n), s.rightNode = c(a), s
        }
        if (opensBrace(t.charAt(0)))
            for (var r = 1, o = 1; o < t.length; o++)
                if (opensBrace(t.charAt(o)) ? r++ : closesBrace(t.charAt(o)) && r--, 0 == r) {
                    var s;
                    n = new String(t.slice(1, o));
                    o++;
                    for (var l = new String(""); o < t.length && isDigit(t.charAt(o));) l += t.charAt(o), o++;
                    return "" == l && (l = 1), "" != (a = new String(t.slice(o))) ? ((s = new Node("+", !0)).leftNode = new Node("*", !0), s.leftNode.leftNode = c(n), s.leftNode.rightNode = new Node(Number(l), !1), s.rightNode = c(a), s) : ((s = new Node("*", !0)).leftNode = c(n), s.rightNode = new Node(Number(l), !1), s)
                } return setStatus("Fatal error during analysis " + t), pisz("Fatal error during analysis " + t), null
    }
    for (e = 0; e < tablicaCzasteczek.size(); e++) {
        setStatus("Counting atoms in " + (a = tablicaCzasteczek.itemAt(e)).name), a.sumuj()
    }
    for (e = 0; e < tablicaAtomow.size(); e++) {
        var l = tablicaAtomow.itemAt(e).name,
            u = 0;
        for (o = 0; o < tablicaCzasteczek.size(); o++) u += tablicaCzasteczek.itemAt(o).atomTable[e];
        if (1 == u) return document.getElementById("error").innerHTML = "PROBLEM: Only one atom " + l, pisz("\nPROBLEM: Found only one atom " + l + ". "), void pisz("In each reaction any element must appear at least twice.\n")
    }
    pisz("\n"), uklad = new Matrix(tablicaCzasteczek.size() + 1, tablicaAtomow.size() + 1);
    for (e = 0; e < tablicaCzasteczek.size(); e++) {
        setStatus("Bulding matrix for " + (a = tablicaCzasteczek.itemAt(e)).name);
        for (o = 0; o < tablicaAtomow.size(); o++) uklad.setElement(e + 1, o + 1, a.atomTable[o]);
        uklad.setElement(e + 1, 0, a.charge)
    }
    uklad.setElement(0, 0, -1), setStatus("Bulding column of free constituents " + (a = tablicaCzasteczek.itemAt(tablicaCzasteczek.size() - 1)).name), (d = new Array)[0] = a.charge;
    for (o = 0; o < tablicaAtomow.size(); o++) d[o + 1] = a.atomTable[o];
    if (uklad.width != uklad.height + 1) {
        for (t = 0; t < 100; t++) {
            var h = uklad.copy().randomSubMatrix();
            if (0 != (f = h.copy().det())) {
                var d = new Array;
                for (o = 0; o < h.height; o++) d[o] = h.getElement(h.width - 1, o);
                for (m = new Array, e = 0; e < tablicaCzasteczek.size(); e++) {
                    (z = h.copy()).substituteColumn(e, d), m[e] = z.det()
                }
                if (m[m.length] = -f, f > 0)
                    for (e = 0; e < m.length; e++) m[e] *= -1;
                return sprawdzresi(m, uklad) ? void drukujresi(m = uproscresi(m)) : (pisz("Contradictory equation. Such reaction will never happen.\n"), void(document.getElementById("error").innerHTML = "Such reaction will never happen."))
            }
        }
        return pisz("Strange equation that cannot be solved.\n"), void(document.getElementById("error").innerHTML = "Strange equation that cannot be solved.")
    }
    for (var f = (z = uklad.copy()).det(), m = new Array, e = 0; e < tablicaCzasteczek.size(); e++) {
        var z;
        (z = uklad.copy()).substituteColumn(e, d), m[e] = z.det()
    }
    if (m[m.length] = -f, f > 0)
        for (var e = 0; e < m.length; e++) m[e] *= -1;
    drukujresi(m = uproscresi(m))
}

function elementRownania(e, t) {
    this.molecule = e, this.text = new String(e.name), this.html = new String, this.wspolczynnik = t, this.convert = function() {
        var e = new String(this.text);
        0 != this.molecule.charge && (index1 = this.text.lastIndexOf("["), index2 = this.text.lastIndexOf("("), index = index1 > index2 ? index1 : index2, e = this.text.slice(0, index));
        for (var t = 0; t < e.length; t++) {
            var i = e.charAt(t);
            isDigit(i) ? (this.html += "<sub>", this.html += i, this.html += "</sub>") : this.html += i
        }
        0 != this.molecule.charge && (this.html += "<sup>", this.molecule.charge > 0 ? (1 != this.molecule.charge && (this.html += this.molecule.charge), this.html += "+") : (-1 != this.molecule.charge && (this.html += -this.molecule.charge), this.html += "-"), this.html += "</sup>")
    }
}

function sprawdzresi(e, t) {
    for (var i = 0; i < t.height; i++) {
        for (var n = 0, a = 0; a < t.width; a++) n += e[a] * t.getElement(a, i);
        if (0 != n) return !1
    }
    return !0
}

function drukujresi(e) {
    var t = new Array,
        i = new Array;
    notAll = !1, none = !0;
    var n = "";
    if (0 != (o = Math.round(e[0]))) {
        var a = new elementRownania(tablicaCzasteczek.itemAt(0), Math.abs(o));
        a.html = "e<sup>-</sup>", a.text = "e(-)", o < 0 ? t.push(a) : i.push(a)
    }
    for (var r = 1; r < e.length; r++) {
        var o;
        if (0 != (o = Math.round(e[r]))) {
            none = !1;
            var s = new elementRownania(tablicaCzasteczek.itemAt(r - 1), Math.abs(o));
            s.convert(), o < 0 ? t.push(s) : i.push(s)
        } else notAll = !0
    }
    pisz("\n");
    for (r = 0; r < t.length; r++) 1 != t[r].wspolczynnik && (pisz(t[r].wspolczynnik), n += "<font color=darkblue>", n += t[r].wspolczynnik, n += "</font>"), pisz(t[r].text), n += t[r].html, r != t.length - 1 && (pisz(" + "), n += " + ");
    none || (pisz(" &#8594 "), n += " &#8594 ", document.getElementById("error").innerHTML = "", $("#equation").val($("#chemeuqation").val()), $("#show-res-slide").removeClass("d-none"));
    for (r = 0; r < i.length; r++) 1 != i[r].wspolczynnik && (pisz(i[r].wspolczynnik), n += "<font color=darkblue>", n += i[r].wspolczynnik, n += "</font>"), pisz(i[r].text), n += i[r].html, r != i.length - 1 && (pisz(" + "), n += " + ");
    if (setStatus(n), none) return pisz("Strange equation that cannot be solved.\n"), void setStatus("Strange equation that cannot be solved.");
    notAll && pisz("\n\nNot all molecules are necessary.\n"), pisz("\n")
}

function uproscresi(e) {
    var t = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    e: for (var i = 0; i < t.length; i++)
        for (;;) {
            for (var n = 0, a = 0; a < e.length; a++) {
                if (0 == e[a] && n++, Math.abs(Math.round(e[a])) % t[i] != 0 || n == e.length) continue e
            }
            for (a = 0; a < e.length; a++) e[a] /= t[i]
        }
    return e
}

function findAtoms(e, t) {
    for (var i = 0; i < e.length; i++) {
        var n = e.charAt(i);
        if (isUpper(n)) {
            var a = n;
            for (i++; i < e.length;) {
                if (!isLower(n = e.charAt(i))) {
                    i--;
                    break
                }
                a += n, i++
            }
            t.addOnce(new Atom(a))
        }
    }
}

function countAtoms(e) {
    for (var t = new Array, i = 0; i < tablicaAtomow.size(); i++) t[i] = 0;
    for (i = 0; i < e.length; i++) {
        var n = e.charAt(i);
        if (isUpper(n)) {
            var a = n,
                r = "";
            for (i++; i < e.length && isLower(n = e.charAt(i));) a += n, i++;
            if (isDigit(e.charAt(i)))
                for (; i < e.length;) {
                    if (!isDigit(n = e.charAt(i))) {
                        i--;
                        break
                    }
                    r += n, i++
                } else i--, r = "1";
            t[tablicaAtomow.indexOf(a)] += Number(r)
        }
    }
    return t
}

function isCharged(e) {
    return re1 = /[\[\(]([0-9]+)[\+\-][\]\)]$/, re2 = /[\[\(][\+\-]([0-9]+)[\]\)]$/, re3 = /[\[\(][\+\-][[\]\)]$/, result = re1.exec(e), result || (result = re2.exec(e), result || (result = re3.exec(e), result || null))
}

function containsPlusOrMinus(e) {
    return re = /[\-\+]/, re.test(e)
}

function checkCharge(e) {
    return result = isCharged(e.name), factor = 1, charge = 1, result ? e.name.indexOf("+") != e.name.lastIndexOf("+") ? -1 : e.name.indexOf("-") != e.name.lastIndexOf("-") ? -1 : e.name.indexOf("-") > -1 && e.name.indexOf("+") > -1 ? -1 : (result[0].indexOf("-") > -1 && (factor = -1), 2 == result.length && (charge = result[1]), e.charge = charge * factor, 1) : 0
}