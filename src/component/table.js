import React, { Component } from 'react';
import Row from './row';

class Table extends Component {

  render() {
    let arr = this.props.dulieu;
    return (
      <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Role</th>
              <th scope="col">Modify</th>
            </tr>
          </thead>
          <tbody>
            {
              arr.map((e, i) => {
                return (
                  < Row deleteFunc={this.props.deleteFunc} editFunc={this.props.editFunc} key={i} sst={i + 1} id={e.id} name={e.name} phone={e.phone} role={e.role} />
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;