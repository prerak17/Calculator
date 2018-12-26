function dfs(){
    var e=document.getElementById("text").value;
    document.getElementById("text").value=Math.sqrt(e);
}
function dos(){
    var d=document.getElementById("text").value;
    document.getElementById("text").value=d*d;
}
function dis(val){
document.getElementById("text").value+=val;
}
function solve() 
     { 
         var x = document.getElementById("text").value; 
         var y = eval(x) ;
         document.getElementById("text").value = y ;
     } 
function cler()
{
     document.getElementById("text").value = ' ';
}
       
