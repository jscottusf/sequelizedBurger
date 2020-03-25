const connection = require('./connection');

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        // This function below was causing a TypeError: Cannot read property 'call' of undefined
        // jquery.js:9631 PUT http://localhost:8080/api/burgers/3 500 (Internal Server Error)
        // if (Object.hasownproperty.call(ob, key)) {
        //     if (typeof value === "string" && value.indexOf(' ') >= 0) {
        //         value = '"' + value + '"';
        //     }
        // }
        arr.push(key + "=" + value);
    }
    return arr.toString();
}

const orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
};

module.exports = orm;