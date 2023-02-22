function notString(str){
  str_aux='';
  str_not='not';
  for(let i = 0; i<3;i++){
    str_aux+=str[i];
  }
  if(str_aux!=str_not){
    return 'not ' + str;
  }
  else{
    return str;
  }
}