/* SCROLL BOTÕES */

$(document).on("click", "#home-nav", function (e) {
  $("html, body").animate({ scrollTop: 0 }, "slow")
})

$(document).on("click", "#commitment-nav", function (e) {
  commit = document.querySelector("#commitment")
  e.preventDefault()
  $("html, body").animate(
    {
      scrollTop: $(commit).offset().top - 90
    },
    1000
  )
})

$(document).on("click", "#news-nav", function (e) {
  news = document.querySelector("#news")
  e.preventDefault()
  $("html, body").animate(
    {
      scrollTop: $(news).offset().top - 90
    },
    1000
  )
})

$(document).on("click", "#schedule-nav", function (e) {
  sched = document.querySelector("#schedule")
  e.preventDefault()
  $("html, body").animate(
    {
      scrollTop: $(sched).offset().top - 90
    },
    1000
  )
})

$(document).on("click", "#participate-btn", function (e) {
  commit = document.querySelector("#commitment")
  e.preventDefault()
  $("html, body").animate(
    {
      scrollTop: $(commit).offset().top - 90
    },
    1000
  )
})

/* SCROLL MENU FIXO - BACKGROUND ROXO */

window.addEventListener("scroll", function () {
  const nav = this.document.querySelector(".header-nav")
  const imgNav = this.document.querySelector(".img-nav")
  if (window.scrollY > 50) {
    nav.classList.add("purple")
    imgNav.classList.add("img-nav-on")
  } else {
    nav.classList.remove("purple"), imgNav.classList.remove("img-nav-on")
  }
})

/* ANIMAÇÃO INICIAL */

window.addEventListener("load", function () {
  const animated = document.querySelectorAll("[animationLoad]")
  animated.forEach(function (element) {
    element.classList.add("on")
  })
})

/* VALIDAÇÃO DO FORMULÁRIO */

const form = document.getElementById("form-register")

if (form.addEventListener) {
  form.addEventListener("submit", validaForm)
} else if (form.attachEvent) {
  form.attachEvent("onsubmit", validaForm)
}

function validaForm(evt) {
  evt.preventDefault()

  let error = document.getElementById("form-error")
  const contErro = 0

  error.innerHTML = ""

  /* VALIDAÇÃO DO CAMPO NOME */
  let name = document.querySelector("input[name='name']").value
  let errorClassName = document.getElementById("name")
  let errorFlexName = document.getElementById("error-flex")

  if (name === "") {
    error.innerHTML = "Favor preencher o campo nome."
    error.classList.add("errorSpan")
    errorClassName.classList.add("error")
    errorFlexName.classList.add("errorFlexName")
    contErro += 1
  } else if (name.length < 4) {
    error.innerHTML = "Erro! O nome deve ter no mínimo 4 caracteres."
    error.classList.add("errorSpan")
    errorClassName.classList.add("error")
    errorFlexName.classList.add("errorFlexName")
    contErro += 1
  } else {
    error.classList.remove("errorSpan")
    errorClassName.classList.remove("error")
    errorFlexName.classList.remove("errorFlexName")
  }

  /* VALIDAÇÃO DO CAMPO E-MAIL */
  const filtroEmail =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  let email = document.querySelector("input[name='email']").value
  let errorClassEmail = document.getElementById("email")
  let errorFlexEmail = document.getElementById("error-flex")

  if (email === "") {
    error.innerHTML = "Favor preencher o campo e-mail."
    error.classList.add("errorSpan")
    errorClassEmail.classList.add("error")
    errorFlexEmail.classList.add("errorFlexEmail")
    contErro += 1
  } else if (filtroEmail.test(email)) {
    error.classList.remove("errorSpan")
    errorClassEmail.classList.remove("error")
    errorFlexEmail.classList.remove("errorFlexEmail")
  } else {
    error.innerHTML = "Erro! Formato de e-mail inválido."
    error.classList.add("errorSpan")
    errorClassEmail.classList.add("error")
    errorFlexEmail.classList.add("errorFlexEmail")
    contErro += 1
  }

  /* VALIDAÇÃO DO CAMPO TELEFONE */
  let phone = document.querySelector("input[name='phone']").value
  let errorClassPhone = document.getElementById("phone")
  let errorFlexPhone = document.getElementById("error-flex")

  if (phone === "") {
    error.innerHTML = "Favor preencher o campo telefone."
    error.classList.add("errorSpan")
    errorClassPhone.classList.add("error")
    errorFlexEmail.classList.add("errorFlexPhone")
    contErro += 1
  } else {
    error.classList.remove("errorSpan")
    errorClassPhone.classList.remove("error")
    errorFlexPhone.classList.remove("errorFlexPhone")
  }

  if (contErro > 0) {
    evt.preventDefault()
  }
}

/* MÁSCARA TELEFONE */
function mascara(o, f) {
  v_obj = o
  v_fun = f
  setTimeout("execmascara()", 1)
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
  v = v.replace(/\D/g, "") //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2") //Coloca hífen entre o quarto e o quinto dígitos
  return v
}
function id(el) {
  return document.getElementById(el)
}
window.onload = function () {
  id("phone").onkeyup = function () {
    mascara(this, mtel)
  }
}
