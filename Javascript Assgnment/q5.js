

var s = ()  => 
{
    var a= [4,6,4,16,20,2004]
var length=a[0]
for(i=0; i<a.length ; i++)
{
    if(length<a[i])
    {

        length=a[i]
    }

}
console.log(length)
}

s()