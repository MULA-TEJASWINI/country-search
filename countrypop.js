let se;

let s = function() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(rs) {
            disp(rs);
        })
}

s();

let iel = document.getElementById("searchInput");
let rel = document.getElementById("resultCountries");
let apd = function(r) {
    let {
        flag,
        name,
        population
    } = r;
    let d = document.createElement("div");
    d.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    rel.appendChild(d);

    let i = document.createElement("img");
    i.src = flag;
    i.classList.add("country-flag");
    d.appendChild(i);

    let pp = document.createElement("p");
    pp.classList.add("country-name");
    pp.textContent = name;
    d.appendChild(pp);

    let p = document.createElement("p")
    p.classList.add("country-population");
    p.textContent = population;
    d.appendChild(p);
}

let disp = function(rs) {
    for (let r of rs) {
        let cn = r.name;
        if (cn.toLowerCase().includes(se.toLowerCase())) {
            apd(r);
        }
    }
}

iel.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        se = iel.value;
        s();
    }
})