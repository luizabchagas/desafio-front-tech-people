<?php

$nome = addslashes($_POST["name"])
$email = addslashes($_POST["email"])
$phone = addslashes($_POST["phone"])

$to = "luizachagas92@gmail.com"
$subject = "Desafio Tech People"
$body = "Nome: ".$nome."\n Email: ".$email."\n Telefone: ".$phone;

if(mail($to,$subject,$body)) {
  echo("Formulário enviado com sucesso!");
} else {
  echo("O formulário não pôde ser enviado.");
}

?>