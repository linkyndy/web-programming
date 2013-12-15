function factorial(n){
    var f = 1;
    while (n > 0) {
        f *= n--;
    }
    return f;
}

function rfactorial(n, f) {
    if (n == 0) {
        return f;
    }
    return rfactorial(n-1, f*n);
}

function dofactorial(){
    var n = prompt("Enter number");
    var f = factorial(parseInt(n), 1);
    alert("Factorial = " + f);

    if (confirm("Do another one?")) {
        dofactorial();
    }
}
