
const express = require("express")
const path = require("path")
const app = express()

const indexRoutes = require("./routes/routes")

const port = process.env.PORT || 3000


app.set("views", path.join(__dirname, "views"))

app.set("view engine", 'ejs')
app.use(indexRoutes)
app.use(express.static(path.join(__dirname,'public')))


app.listen(port, () =>{
    console.log(`server listening on port: http://localhost:${port}`)
})