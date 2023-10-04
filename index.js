
function convert(){
  var c= Number(document.getElementById('data').value);
  var f = (c*1.8)+ 32;
  var k = c+273.15;
  document.getElementById('far').value=String(f);
  document.getElementById('kel').value=String(k);

}
function Reset(){
  document.getElementById("data").value="";
  document.getElementById("far").value="";
  document.getElementById("kel").value="";
}