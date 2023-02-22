function frontBack(str){
  let car_i=str[0];
  let car_f=str[str.length-1];
  let str_aux='';
  if(str.length>0){
    str_aux=car_f;
  }
  for(i = 1;i<str.length-1;i++){
    str_aux+=str[i];
  }
  if(str.length>1){
    str_aux+=car_i;
  }
  return str_aux;
}