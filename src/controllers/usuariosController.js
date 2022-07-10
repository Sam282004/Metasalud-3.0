const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user', (err, users) => {
            if (err) {
                res.json(err);
            }
            res.render('index', {
                data: users
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO user set ?', [data], (err, user) => {
            res.render("consulta")
        });

    });
};

module.exports = controller;