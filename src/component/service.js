import React, { Component } from 'react';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      role: "",
      status: false
    }
  }

  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  onSave = () => {
    let data = {
      name: this.state.name,
      phone: this.state.phone,
      role: this.state.role
    }
    this.props.createUser(data)
  }

  changeStatus = () => {
    this.setState({
      status: !this.state.status
    })
  }

  changeButton = () => {
    if (this.state.status === true) {
      return (
        <div className="form-group">
          <div className="control-service">
            <button onClick={this.changeStatus} type="submit" className="btn btn-secondary">Đóng bảng</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="form-group">
          <div className="control-service">
            <button onClick={this.changeStatus} type="submit" className="btn btn-info">Tạo bảng</button>
          </div>
        </div>
      )
    }
  }

  renderService = () => {
    if (this.state.status === true) {
      return (
        <div>
          <div className="service"> Service ~</div>
          <div className="control-service">
            <div className="form-group">
              <input onChange={this.onChange} name="name" type="text" className="form-control" placeholder="Enter name" />
              <input onChange={this.onChange} name="phone" type="text" className="form-control" placeholder="Phone number" />
              <select onChange={this.onChange} className="form-control" name="role" >
                <option value>Choose the role</option>
                <option value={1}>Admin</option>
                <option value={2}>Manager</option>
                <option value={3}>User</option>
              </select>
            </div>
            <button onClick={this.onSave} type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
        < this.changeButton />
        < this.renderService />
      </div>
    );
  }
}

export default Service;