import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    this.update=this.update.bind(this);
    this.addNewPhrase=this.addNewPhrase.bind(this);
    this.deletePhrase=this.deletePhrase.bind(this);
    this.deleteAll=this.deleteAll.bind(this);
  }

  componentDidMount() {
    axios.get('/api/phrases')
    .then(response=>{
      console.log(response.data)
    })
    .catch(err=> {throw err})
  }
  update(){
    var id = 2;
    // whatever id you want to send 
    axios.patch(`/api/phrases/${id}`, {eng:'hello from the backend'})
    .then(response=>{
      console.log(response);
    })
    .catch(err=>{throw err});
  }
  addNewPhrase(){
    axios.post('/api/phrases', {kor:"chaboulouga",rom:"kissmedigkissdig",eng:"it is easy"})
    .then(response=>{console.log(response);})
    .catch(err=>{throw err});
  }
  deletePhrase(){ 
    var y = 11
    axios.delete(`/api/phrases/${y}`)
    .then(response=>{console.log(response);})
    .catch(err=>{throw err});
  }
  deleteAll(){ 
    axios.delete('/delete')
    .then(response=>{console.log(response);})
    .catch(err=>{throw err});
  }

  render() {
    return (
      <div>
        
        <button onClick={this.update}>update 2</button>
        <button onClick={this.addNewPhrase}>create new phrase</button>
        <button onClick={this.deletePhrase}>delete by id</button>
        <button onClick={this.deleteAll}>delete all</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
