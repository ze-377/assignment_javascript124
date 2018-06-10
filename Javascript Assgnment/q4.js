// first without roundof
var w=  (num) =>
{
var d = num.toString().split('.')

var agewala=d[0];
var pich=d[1].substring(0,3);
console.log(agewala+'.'+pich)
}


// Second method


var l= (gg) => {
    console.log(parseFloat(gg.toFixed(3))) // here it will print 12.646 because next digit is 7 
    //it will roundof but it is not in the casr of upper code


} 

l(12.565744)
w(12.565744)