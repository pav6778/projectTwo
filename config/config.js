const configObject = {
    "development": {
        "username": "root",
        "password": process.env.DBPASSWORD || null,
        "database": "blogDB",
        "host": "localhost",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "testdb",
        "host": "localhost",
        "dialect": "mysql",
        "logging": false
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    }
}

module.exports = configObject;