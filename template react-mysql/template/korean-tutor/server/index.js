const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/phrases', (req, res) => {
  db.getAllPhrases((err,results)=>{
    err ? console.log(err) : res.status(200).json(results);
  })
});
app.patch('/api/phrases/:phraseid', (req, res) => {
  db.updatePhrase([req.body.eng,req.params.phraseid],(err,results)=>{
    err ? console.log(err) : res.status(201).send('updated')
  })
})
app.post('/api/phrases',(req,res)=>{
  db.createNewPhrases([req.body.kor,req.body.rom,req.body.eng],(err,results)=>{
    err ? console.log(err) : res.status(201).send('new phrase added')
  })
})
app.delete('/api/phrases/:id', (req, res) => {
  db.deletePhrases([req.params.id],(err,results)=>{
    err ? console.log(err) : res.status(201).send('phrase deleted')
  })
});
app.delete('/delete',(req,res)=>{
  db.deleteAll((err,results)=>{
    err ? console.log(err) : res.status(201).send('all deleted')
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
