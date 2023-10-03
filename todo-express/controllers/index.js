// Checking if API running
const checkAPIStatus = (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.status(200).json({
        status: true,
        message: "API Running"
    })
}

module.exports = { checkAPIStatus }
