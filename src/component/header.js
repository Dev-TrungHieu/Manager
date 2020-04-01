import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }

  getText = (e) => {
    let value = e.target.value;
    this.setState({
      data: value
    })

    this.props.getKey(value);
  }

  render() {
    return (
      <div>
        <section>
          <div className="header">
            <h4>Management user</h4>
          </div>
          <div className="container searchForm">
            <div className="row">
              <div className="form-group">
                <div className="btn-group">
                  <input onChange={this.getText} type="text" name="search" id="search" className="form-control" placeholder="Nhập nội dung cần tìm ?" aria-describedby="helpId" />
                  <div onClick={() => this.props.getKey(this.state.data)} className="btn btn-primary">Search</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;