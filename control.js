
function validateForm() {
    let x = document.forms["myForm"]["usuario"].value;
    let y = document.forms["myForm"]["clave"].value;
    let z=x.search("@");
    let w=0;
    
    if (z<0) {
        alert("falta @ en el usuario");
        
        w++;
    }
    else if (y == "") {
        alert("Clave no puede estar vacia");
        w++;
    }
    return w>0?false:true;
}