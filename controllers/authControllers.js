const db = require('../Database/mySql');
const { format, getDayOfYear } = require('date-fns');

const test = (req, res) => {
    res.json("Test Working");
}

const getEmployee = (req, res) => {
    let sql = "SELECT * From emp_details";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);

        })
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({
                error: "Enter the Email and password",
            });
        }

        let sql = "SELECT * FROM emp_details WHERE email = ?";
        db.query(sql, [email], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: 'Internal Server Error',
                });
            }

            if (result.length === 0) {
                return res.json({
                    error: "User does not exist",
                });
            }

            const user = result[0];

            if (user.password === password) {
                // Successful login
                res.send(user);
                console.log("Login Successful:", user);
            } else {
                // Incorrect password
                res.json({
                    error: "Username or password is incorrect",
                });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
};



const getNotifications = (req, res) => {
    let sql = "SELECT * From notifications";
    try {
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteNotifications = (req, res) => {
    let sql = "DELETE FROM notifications";
    try {
        db.query(sql, (err) => {
            if (err) throw err;
            res.json("Deleted Notifications Successfully");
        })
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    test,
    getEmployee,
    getNotifications,
    deleteNotifications,
    loginUser
}
