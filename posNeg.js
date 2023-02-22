function posNeg(a, b, negative){
  ab=a*b;
  res=false;
  if(ab<0 && !negative){
    res=true;
    return res;
    }
  else if(negative && ab>=0 && a<0){
    res=true;
    return res;
  }
  else{
    return res;
  }
}