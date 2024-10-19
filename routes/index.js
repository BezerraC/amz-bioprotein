const express = require("express");
const router = express.Router();

// Rota para a página inicial
router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    serviceId: process.env.APP_SERVICE_ID,
    templateId: process.env.APP_TEMPLATE_ID,
    publicKey: process.env.APP_PUBLIC_KEY,
  });
});

// Rota para a página "Notícias"
router.get("/news", (req, res) => {
  res.render("news", { title: "Notícias" });
});

// Rota para a página "Sobre"
router.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

module.exports = router;
