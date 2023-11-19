const Pool = require("pg").Pool;
const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

const getMerchants = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM merchants", (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};

const createMerchant = (body) => {
    return new Promise(function (resolve, reject) {
        const { name, email } = body;
        pool.query(
            "INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *",
            [name, email],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(
                        `A new merchant has been added: ${JSON.stringify(results.rows[0])}`
                    );
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

const deleteMerchant = (id) => {
    return new Promise(function (resolve, reject) {
        pool.query(
            "DELETE FROM merchants WHERE id = $1",
            [id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(`Merchant deleted with ID: ${id}`);
            }
        );
    });
};

const updateMerchant = (id, body) => {
    return new Promise(function (resolve, reject) {
        const { name, email } = body;
        pool.query(
            "UPDATE merchants SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name, email, id],
            (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(`Merchant updated: ${JSON.stringify(results.rows[0])}`);
                } else {
                    reject(new Error("No results found"));
                }
            }
        );
    });
};

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
    updateMerchant
};