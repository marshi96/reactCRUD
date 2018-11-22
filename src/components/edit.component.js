// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';
export default class Edit extends Component {
  constructor(props){
    super(props);
    this.onChangePersonName=this.onChangePersonName.bind(this);
    this.onChangeUniName=this.onChangeUniName.bind(this);
    this.onChangeIdName=this.onChangeIdName.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
      person_name:'',
      uni_name:'',
      id_name:'',
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/student/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                person_name: response.data.person_name,
                uni_name: response.data.uni_name,
                id_name: response.data.id_name });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangePersonName(e){
    this.setState({person_name: e.target.value});
  }
  onChangeUniName(e){
    this.setState({uni_name: e.target.value})
  }
  onChangeIdName(e){
    this.setState({id_name: e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    const obj={
      person_name:this.state.person_name,
      uni_name:this.state.uni_name,
      id_name:this.state.id_name
    };
    axios.post('http://localhost:4000/student/update/'+this.props.match.params.id ,obj)
    .then(res => console.log(res.data));
this.props.history.push('/index/');
  }
  render(){
    return (
        <div style={{marginTop: 10}}>
            <h3 align="center">Update Student</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Student NAme:  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>University Name: </label>
                    <input
                       type="text"
                       className="form-control"
                       value={this.state.uni_name}
                       onChange={this.onChangeUniName}
                       />
                </div>
                <div className="form-group">
                    <label>ID Number: </label>
                    <input
                       type="text"
                       className="form-control"
                       value={this.state.id_name}
                       onChange={this.onChangeIdName}/>
                </div>
                <div className="form-group">
                    <input type="submit"
                      value="Update Student"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
  }
  /*class App extends Component {

  render() {
    return (
      <Router>

      <div  >

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
          <Link to={'/'} className="navbar-brand">MY React example !</Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active"></li>
              <li class="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li class="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
              </li>
            </ul>

          </div>
        </nav>

        <br/>
        <center><h2>Welcome to
          <b> React</b>
        </h2></center>
        <br/>
        <div className="container"  >
        <Switch>
          <Route exact="exact" path='/create' component={Create}/>
          <Route path='/edit/:id' component={Edit}/>
          <Route path='/index' component={Index}/>
        </Switch>
  </div>
      </div>

    </Router>);

  }

  }

  export default App;
  */
