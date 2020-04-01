import React, { Component } from 'react';
import './App.css';
import Header from "./component/header";
import Service from "./component/service";
import Table from './component/table';
import db from "./component/db.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      data: db
    }
  }


  getKey = (dl) => {
    this.setState({
      keyword: dl
    })
  }

  createUser = (dl) => {
    let length = db.length;
    let dulieu = { id: length, ...dl }
    let data = this.state.data;
    data.push(dulieu)
    this.setState({
      data: data
    })
  }

  editUser = (data) => {
    let list = this.state.data;
    let giatri = list.findIndex((e) => e.id === data.id);
    list.splice(giatri, 1, data)
    this.setState({
      data: list
    })
  }

  deleteFunc = (data) => {
    let list = this.state.data;
    let giatri = list.findIndex((e) => e.id === data.id);
    list.splice(giatri, 1)
    this.setState({
      data: list
    })
  }

  render() {
    var ketqua = [];
    var data = this.state.data;
    data.forEach(e => {
      if (e.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1) {
        ketqua.push(e);
      }
    })

    return (
      <div>
        < Header getKey={this.getKey} />
        <section>
          <div className="container">
            <hr />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              < Service createUser={this.createUser} />
              < Table deleteFunc={this.deleteFunc} editFunc={this.editUser} dulieu={ketqua} />
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default App;
