const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
// app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/add", (req, res) => {
    if (typeof (req.body.num1) == "string" || typeof (req.body.num2) == "string") {
        res.json
            ({
                status: "error",
                message: "Invalid data types"
            })
    }
    else if (Number(req.body.num1) < (-1e6) || Number(req.body.num2) < (-1e6) || (Number(req.body.num1) + Number(req.body.num2)) < (-1e6)) {
        res.json
            ({
                status: "error",
                message: "underflow"
            })
    }
    else if (Number(req.body.num1) > (1e6) || Number(req.body.num2) > (1e6) || (Number(req.body.num1) + Number(req.body.num2)) > (1e6)) {
        res.json({
                status: "error",
                message: "overflow"
            })
    }
    else {
        res.json({
                status: "success",
                message: "the sum of given two numbers",
                result: Number(req.body.num1) + Number(req.body.num2)
            })
    }
})


app.post("/sub", (req, res) => {
    if (typeof (req.body.num1) == "string" || typeof (req.body.num2) == "string") {
        res.json
            ({
                status: "error",
                message: "Invalid data types"
            })
    }

    else if (Number(req.body.num1) < (-1e6) || Number(req.body.num2) < (-1e6) || (Number(req.body.num1) - Number(req.body.num2)) < (-1e6)) {
        res.json
            ({
                status: "error",
                message: "underflow"
            })

    }
    else if (Number(req.body.num1) > (1e6) || Number(req.body.num2) > (1e6) || (Number(req.body.num1) - Number(req.body.num2)) > (1e6)) {
        res.json
            ({
                status: "error",
                message: "overflow"
            })

    }
    else {
        res.json
            ({
                status: "success",
                message: "the subtraction of given two numbers",
                result: Number(req.body.num1) - Number(req.body.num2)
            })
    }

})

app.post("/multiply", (req, res) => {
    if (typeof (req.body.num1) == "string" || typeof (req.body.num2) == "string") {
        res.json({
                status: "error",
                message: "Invalid data types"
            })
    }

    else if (Number(req.body.num1) < (-1e6) || Number(req.body.num2) < (-1e6) || (Number(req.body.num1) * Number(req.body.num2)) < (-1e6)) {
        res.json({
                status: "error",
                message: "underflow"
            })
    }
    else if (Number(req.body.num1) > (1e6) || Number(req.body.num2) > (1e6) || (Number(req.body.num1) * Number(req.body.num2)) > (1e6)) {
        res.json({
                status: "error",
                message: "overflow"
            })
    }
    else {
        res.json({
                status: "success",
                message: "the multiplication of given two numbers",
                result: Number(req.body.num1) * Number(req.body.num2)
            })
    }
})

app.post("/divide", (req, res) => {
    if (typeof (req.body.num1) == "string" || typeof (req.body.num2) == "string") {
        res.json({
                status: "error",
                message: "Invalid data types"
            })
    }
    else if (Number(req.body.num2) == 0) {
        res.json
            ({
                status: "error",
                message: "Cannot divide by zero"
            })

    }
    else if (Number(req.body.num1) < (-1e6) || Number(req.body.num2) < (-1e6) || (Number(req.body.num1) / Number(req.body.num2)) < (-1e6)) {
        res.json
            ({
                status: "error",
                message: "underflow"
            })

    }
    else if (Number(req.body.num1) > (1e6) || Number(req.body.num2) > (1e6) || (Number(req.body.num1) / Number(req.body.num2)) > (1e6)) {
        res.json({
                status: "error",
                message: "overflow"
            })
    }
    else {
        res.json({
                status: "success",
                message: "the division of given two numbers",
                result: Number(req.body.num1) / Number(req.body.num2)
            })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;