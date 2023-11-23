const test = async (req, res) => {
    try {
        return res.render("test", {
            status: "success",
            title: "Тест за backend развој на софтвер",
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

module.exports = { test };