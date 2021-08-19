'use strict';

var dbConn = require('./../../config/db.config');

//Person object create

var Person = function(person) {
    this.firstName = person.firstName;
    this.lastName = person.lastName;
};

Person.create = function (newPerson, result) {
    dbConn.query("INSERT INTO person set ?", newPerson, function (err, res){
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });

};

Person.findById = function (id, result) {
    dbConn.query("SELECT * FROM person where id = ?", id, function(err, res){
        if (err) {
            console.log("Error: ", err);

            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Person.findAll = function (result) {
    dbConn.query("SELECT * from person", function (err, res){
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        }
        else{
            console.log("Person: ", res);
            result(null,res);
        }
    });
};

Person.update = function(id, person, result) {
    dbConn.query("UPDATE person SET firstName=?, lastName=? WHERE id = ?",
    [person.firstName,person.lastName,id], 
    function (err, res){
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Person.delete = function(id, result){
    dbConn.query("DELETE FROM person WHERE id = ?", [id], function(err, res){
        if (err) {
            console.log("Error; ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Person;