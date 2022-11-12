const route= require("express")
const router = route.Router() 
router.get("/", (req,res) => res.render("index"))
router.get("/about", (req,res) => res.render("about"))
router.get("/contact", (req,res) => res.render("contact"))

module.exports = router