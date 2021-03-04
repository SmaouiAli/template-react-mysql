const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllPhrases = function(callback) { 
  let syntax = `SELECT * FROM phrases`
  connection.query(syntax,(err,results)=>{
  return  err ? callback(err,null) : callback(null,results);
  })
};
const updatePhrase= function(params,callback) { 
  let syntax = `UPDATE phrases SET eng = ? where id = ?`
  connection.query(syntax,params,(err,results)=>{
  return  err ? callback(err,null) : callback(null,results);
  })
}
const createNewPhrases = function(params,callback) {
var syntax = `INSERT into phrases (kor, rom, eng) VALUES (?, ?, ?)`
connection.query(syntax,params,(err,results)=>{
  return  err ? callback(err,null) : callback(null,results);
})
 }
 const deletePhrases = function(params,callback) {
   var syntax = `DELETE FROM phrases WHERE id = ?`;
   connection.query(syntax,params,(err,results)=>{
    return  err ? callback(err,null) : callback(null,results);
   })
 }
 const deleteAll = function(callback){
  var syntax = `DELETE FROM phrases`;
  connection.query(syntax,(err,results)=>{
    return  err ? callback(err,null) : callback(null,results);
  })
 }

module.exports = {
  getAllPhrases,
  updatePhrase,
  createNewPhrases,
  deletePhrases,
  deleteAll
};