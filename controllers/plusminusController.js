const add = (req, res) => {
    if (!req?.body?.number1 || !req?.body?.number2) {
        return res.status(400).json({ message: "Both numbers are required" });
    }
    var number1 = +req.body.number1;
    if (isNaN(number1)) {
        return res.status(400).json({ message: "number1 is not a number" });
    }
    var number2 = +req.body.number2;
    if (isNaN(number2)) {
        return res.status(400).json({ message: "number2 is not a number" });
    }
    res.json({ answer: number1 + number2 });
};

const subtract = (req, res) => {
    if (!req?.body?.number1 || !req?.body?.number2) {
        return res.status(400).json({ message: "Both numbers are required" });
    }
    var number1 = +req.body.number1;
    if (isNaN(number1)) {
        return res.status(400).json({ message: "number1 is not a number" });
    }
    var number2 = +req.body.number2;
    if (isNaN(number2)) {
        return res.status(400).json({ message: "number2 is not a number" });
    }
    res.json({ answer: number1 - number2 });
};

module.exports = {
    add,
    subtract,
};
