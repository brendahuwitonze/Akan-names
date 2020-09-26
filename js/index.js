function names(){
    var year=document.getElementById("year").value
    var mm=document.getElementById("month").value
    var dd=document.getElementById("date").value
    var gen=document.getElementById("gender").value
    
    var arr = [];
    while(year>0)
    {
        arr.unshift(year%10);
        year=year/10|0;
     }
    console.log(arr);
    
    var y = 0;
    for (var i = 3; i>1 ; i--)
    {
         y= 10 * y + arr[i];
    }
    console.log(y);
    
    
    var yy= String(y).split("").reverse().join("");
    console.log(yy); 
    
    
    var cc = 0;
    for (var i = 0; i<2 ; i++)
    {
        cc = 10 * cc + arr[i];
        }
        console.log(cc)
        ;
       var d = ( ( (cc/4) -2*cc-1) + ( (5*yy/4) ) + ((26*(mm+1)/10) ) + dd)%7+1;
      var da= (Math.floor(d));
        document.getElementById("display").innerHTML=yy

        
    }
    
    