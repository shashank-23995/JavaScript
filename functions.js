function calculateArea(width, height) {
    console.log(width * height);
    //document.write(width*height); 
    console.log('width=' + arguments[0] + ' height=' + arguments[1]);  //functions parameters can be accessed using arguments[] object
    console.log(arguments.callee);
    console.log(arguments.length);
}

function concateString(a, b) {
    var args = Array.prototype.slice.call(arguments);
    console.log(args.join('-'));
    console.log(add(5, 6, 5, 5));
}

function call() {
    console.log(factorial(5))

}
var add = new Function('a', 'b', 'c', 'd', 'return a+b+c+d');  // function constructor 

//recursive function to calculate factorial
function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//accessing function inside function body
// var calculator{
//     'addition':function add(a,b) {
//         return(a+b);
//     }

//     'subtraction':function sub(a,b) {
//         return(a-b);
//     }

//     'multiplication':function mult(a,b) {
//         return(a*b);
//     }

//     'division':function div(a,b) {
//         return(a/b);
//     }
// }

var a = [1, 2, 3, 4, 5];

function square(number) {
    return number * number;
}

function square_array(square, a) {
    var result = [], i;
    for (i = 0; i < a.length; i++) {
        result[i] = square(a[i]);
    }
    console.log(result);
}


function addSquare(x) {
    function square(x) {
        return x*x;
    }
    console.log(x+x);
}


function call2() {
    
}

