import React, { Component } from 'react';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      name: this.props.name,
      phone: this.props.phone,
      role: this.props.role,
      id: this.props.id
    }
  }

  changePermission = () => {
    if (this.props.role === "1") { return "Admin" }
    if (this.props.role === "2") { return "Manager" }
    if (this.props.role === "3") { return "User" }
  }

  changeStatus = () => {
    this.setState({
      status: !this.state.status
    })
  }

  editForm = () => {
    let data = this.state;
    delete data.status;
    this.props.editFunc(data);
    this.changeStatus();
  }

  deleteRow = () => {
    let trave = confirm('Dyt me muon xoa tao a` ???') // eslint-disable-line
    if (trave === true) {
      let data = this.state;
      delete data.status;
      this.props.deleteFunc(data);
      this.setState({
        status: true
      })
      alert('Xoa than cong')
    }
  }

  onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  getForm = () => {
    if (this.state.status === true) {
      return (
        <tr>
          <th scope="row" className="i1">{this.props.sst}</th>
          <td className="i2">{this.props.name}</td>
          <td className="i3">{this.props.phone}</td>
          <td className="i4">{this.changePermission()}</td>
          <td className="i5">
            <div className="btn-group group-edit">
              <div onClick={this.changeStatus} className="btn-edit btn btn-warning">
                Edit <i className="fa fa-pencil-square-o" aria-hidden="true" />
              </div>
              <div onClick={this.deleteRow} className="btn-edit btn btn-danger">
                Delete <i className="fa fa-trash-o" aria-hidden="true" />
              </div>
            </div>
          </td>
        </tr>
      )
    } else {
      return (
        <tr>
          <th scope="row" className="i1">{this.props.sst}</th>
          <td className="i2">
            <div className="form-group">
              <input className="form-control" onChange={this.onChange} name="name" defaultValue={this.props.name} />
            </div>
          </td>
          <td className="i3">
            <div className="form-group">
              <input className="form-control" onChange={this.onChange} name="phone" defaultValue={this.props.phone} />
            </div>
          </td>
          <td className="i4">
            <select onChange={this.onChange} defaultValue={this.props.role} className="form-control" name="role" >
              <option value={1}>Admin</option>
              <option value={2}>Manager</option>
              <option value={3}>User</option>
            </select>
          </td>
          <td className="i5">
            <div className="mt-10 btn-group group-edit">
              <div onClick={this.editForm} className="btn-edit btn btn-warning">
                Save <i className="fa fa-floppy-o" aria-hidden="true" />
              </div>
              <div onClick={this.changeStatus} className="btn-edit btn btn-danger">
                Cancel <i className="fa fa-times-circle" aria-hidden="true"></i>
              </div>
            </div>
          </td>
        </tr>
      )
    }
  }

  render() {
    return (
      < this.getForm />
    );
  }
}

export default Row;