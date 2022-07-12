const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pacientes', (err, pacientes) => {
            if (err) {
                res.json(err);
            }
            res.render('index', {
                data: pacientes
            });
        });
    });
};

controller.mostrar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM pacientes', (err, pacientes) => {
            if (err) {
                res.json(err);
            }
            res.render('tabla_pacientes', {
                data: pacientes
            });
        });
    });
};



controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO pacientes set ?', [data], (err, user) => {
            res.render('index');
        });

    });
};
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM pacientes WHERE id = ?', [id], (err, rows) => {
            res.redirect('/tabla_pacientes');
        });
    });
}


module.exports = controller;