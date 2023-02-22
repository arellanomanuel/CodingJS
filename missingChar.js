function missingChar(str, n){
  let str_aux="";
  for(let i = 0;i<str.length;i++){
    if(i!=n){
    str_aux+=str[i];
    }
  }
  return str_aux;
}