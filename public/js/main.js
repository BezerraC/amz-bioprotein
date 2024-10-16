

document.addEventListener("DOMContentLoaded", function () {

  // Inicializando o ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animando a Hero Section
gsap.from("#heroVidPosition", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
});

// Animando a About Section
gsap.from("#about", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%", // Inicia a animação quando 80% da seção está visível
    toggleActions: "play none none none", // Executa a animação uma vez
  },
  duration: 1,
  opacity: 0,
  x: -100,
  ease: "power3.out",
});

// Animando a Product Section
gsap.from("#product", {
  scrollTrigger: {
    trigger: "#product",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  x: -100,
  ease: "power3.out",
});

// Animando a Feature Section
gsap.from("#feature", {
  scrollTrigger: {
    trigger: "#feature",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "power3.out",
});



// Animando a Contact Section
gsap.from("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  scale: 0.8,
  ease: "power3.out",
});

  const contactForm = document.getElementById("contactForm");
  const statusMessage = document.getElementById("statusMessage");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Desabilitar o botão enquanto a solicitação é processada
    const submitButton = contactForm.querySelector('input[type="submit"]');
    submitButton.disabled = true;

    // Dados do formulário
    const formData = new FormData(contactForm);

    // Enviar e-mail via EmailJS
    emailjs
      .sendForm(
        serviceId, // Substitua pelo seu service ID
        templateId, // Substitua pelo seu template ID
        contactForm,
        publicKey // Substitua pelo seu public key
      )
      .then(function () {
        statusMessage.textContent = "Mensagem enviada com sucesso!";
        submitButton.disabled = false;
        contactForm.reset();
      })
      .catch(function () {
        statusMessage.textContent =
          "Erro ao enviar a mensagem, tente novamente mais tarde.";
        submitButton.disabled = false;
      });

    // Limpar mensagem de status após 5 segundos
    setTimeout(() => {
      statusMessage.textContent = "";
    }, 8000);
  });
});
