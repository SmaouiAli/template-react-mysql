// frontend get request with axios (remember import axios)
axios
  .get("/geturl")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    throw err;
  });
// ==============================================>
// handling the request in the backend

// the database
const whateverTheName = function (callback) {
  let syntax = `SELECT * FROM theNameofYourTable`;
  connection.query(syntax, (err, results) => {
    return err ? callback(err, null) : callback(null, results);
  });
};
// =============================================>
// server
app.get("/geturl", (req, res) => {
  db.getAllPhrases((err, results) => {
    err ? console.log(err) : res.status(200).json(results);
  });
});
// frontend post request with axios (remember import axios)
axios
  .post("/posturl", {
    whateveryouhaveinyourschema: "...",
    whateveryouhaveinyourschema: "...",
    whateveryouhaveinyourschema: "...",
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    throw err;
  });
// ==============================================>
// handling the request in the backend
// the database
const whateverTheName2 = function (params, callback) {
  var syntax = `INSERT into thenameOfyourTable (whatevrschema, whateverschema, whateverschema) VALUES (?, ?, ?)`;
  connection.query(syntax, params, (err, results) => {
    return err ? callback(err, null) : callback(null, results);
  });
};
// =============================================>
// server
app.post("/posturl", (req, res) => {
  db.createNewPhrases(
      // in the array set the values you want from the request body "whatever you have in the body"
    [req.body.whateveryouhaveinyourschema, req.body.whateveryouhaveinyourschema, req.body.whateveryouhaveinyourschema],
    (err, results) => {
      err ? console.log(err) : res.status(201).send("new thing added");
    });});


// frontend patch request with axios (remember import axios)
// the ${id} takes the id that you want if you have var id = 0 it will take the id 0
axios
  .patch(`/patchurl/${id}`, { whateverschema: "..." })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    throw err;
  });
// ==============================================>
// handling the request in the backend
// the database
const whateverTheName3 = function (params, callback) {
  let syntax = `UPDATE thenameOfYourTable SET thecol = ? where id = ?`;
  connection.query(syntax, params, (err, results) => {
    return err ? callback(err, null) : callback(null, results);
  });
};
// =============================================>
// server
app.patch("/patchurl/:theidItself", (req, res) => {
  db.updatePhrase([req.body.whateverschema, req.params.theidItself], (err, results) => {
    err ? console.log(err) : res.status(201).send("updated");
  });
});






// frontend delete by the id request with axios (remember import axios)

axios
  .delete(`/deleteByIdUrl/${id}`) // same of the patch
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    throw err;
  });
// ==============================================>
// handling the request in the backend

// the database
const whateverTheName4 = function (params, callback) {
  var syntax = `DELETE FROM youTableName WHERE id = ?`;
  connection.query(syntax, params, (err, results) => {
    return err ? callback(err, null) : callback(null, results);
  });
};
// =============================================>
// server
app.delete("deleteByIdUrl/:Whateveryouwant", (req, res) => {
  db.deletePhrases([req.params.Whateveryouwant], (err, results) => {
    err ? console.log(err) : res.status(201).send("target deleted");
  });
});


// frontend delete all request with axios (remember import axios)
axios
  .delete("/deleteAllUrl")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    throw err;
  });
// ==============================================>

// handling the request in the backend

// the database

const whateverTheName5 = function (callback) {
  var syntax = `DELETE FROM theNameOfYourTable`;
  connection.query(syntax, (err, results) => {
    return err ? callback(err, null) : callback(null, results);
  });
};
// =============================================>
// server
app.delete("/deleteAllUrl", (req, res) => {
  db.deleteAll((err, results) => {
    err ? console.log(err) : res.status(201).send("all deleted");
  });
});
