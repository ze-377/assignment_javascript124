
var dic=[
    {key:"David", value:80 },
    {key:"Vinodh", value:44},
    {key:"Divya", value:88},
    {key:"Ishitha", value:95},
    {key:"Thomas",value:68}

] 
for(i=0;i<=dic.length-1;i++)
{
  var s=dic[i].key
  var be=dic[i].value
  if (be<60)
{
    console.log(   "grade of "+s+" is F")
}
else if(be<70)
{
    console.log(   "grade of "+s+" is D")
}
else if(be<80)
{
    console.log(   "grade of "+s+" is C")
}
else if(be<90)
{
    console.log(   "grade of "+s+" is B")
}
else if(be<100)
{
    console.log(   "grade of "+s+" is A")
}
}