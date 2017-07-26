function sCorreta() {
  var senha1 = formJogo.senha.value;
  var senha2 = formJogo.rsenha.value;
  var user = formJogo.username.value;
  if (senha1 == senha2) {
    alert("Cadastro concluído. " + user + ", você está apto para jogar.");
    return true;
  }
  else {
    alert("Escreva a senha igual nos dois campos!");
    return false
  }
}
