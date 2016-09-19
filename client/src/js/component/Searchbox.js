var React= require('react');

var Searchbox=React.createClass({

getInitialState: function(){
  return({data: ""})
},

handleChange: function(event){
  return(
    this.setState({data:event.target.value})
  )
},

sendToParent: function(e){
  e.preventDefault();
    this.props.click(this.state.data)
},

render: function(){
  return (
    <div>
    <h2 id='heading'>Movies Magic</h2>

     <img src ="../../css/logo.jpg" width="20%" height="200px"/><br/>
     <ul className="list-inline" id ="mysearchlist">
     <li><input type="text" className="form-control" placeholder='Search Movies here..' id='searchtext' value={this.state.data}  onChange={this.handleChange}/></li>
     <li><input type='submit' id='searchbutton' onClick={this.sendToParent} value='search'/>

      </li></ul>
     <br/><br/><br/><br/>
    </div>
  )
}
})

module.exports=Searchbox;
