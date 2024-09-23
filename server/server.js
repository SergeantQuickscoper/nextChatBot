express = require("express")

PORT = 8080;
app = express()

app.listen(PORT, () => console.log("Server is alive on PORT " + PORT.toString()))