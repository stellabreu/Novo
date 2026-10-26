/* OnCall Solution — configuração e comportamento do site.
   ============================================================
   EDITE AQUI: o número do WhatsApp da OnCall.
   Formato: 55 + DDD + número, só dígitos. Ex.: 5532999998888
   ============================================================ */
const ONCALL = {
  whatsapp: "55DDDNUMERO",
  mensagemPadrao: "Olá! Vim pelo site da OnCall e quero agendar um diagnóstico gratuito.",
};

(function () {
  const numero = ONCALL.whatsapp.replace(/\D/g, "");
  const numeroValido = numero.length >= 12;

  // Todo link com data-whatsapp vira um link do WhatsApp com mensagem pronta.
  // Use data-msg="..." no link para trocar a mensagem daquele botão.
  document.querySelectorAll("[data-whatsapp]").forEach(function (link) {
    const msg = link.getAttribute("data-msg") || ONCALL.mensagemPadrao;
    const base = numeroValido ? "https://wa.me/" + numero : "https://wa.me/";
    link.setAttribute("href", base + "?text=" + encodeURIComponent(msg));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
  if (!numeroValido) {
    console.warn("OnCall: configure o número do WhatsApp em assets/js/main.js");
  }

  // Menu no celular
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("menu");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const aberto = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Ano atual no rodapé
  document.querySelectorAll("[data-ano]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
