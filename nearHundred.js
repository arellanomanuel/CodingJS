function nearHundred(n){
  resta100=Math.abs(100-n);
  resta200=Math.abs(200-n);
  res=false;
  if(resta100<=10||resta200<=10){
    res=true; 
  }
  return res;  
}
