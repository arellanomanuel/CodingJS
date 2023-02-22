function front3(str) {
  str_aux = "";
  chars0_2 = str.slice(0, 3);
  for (i = 0; i < 3; i++) {
    str_aux += chars0_2;
  }
  return str_aux;
}
console.log(front3("Java"));
