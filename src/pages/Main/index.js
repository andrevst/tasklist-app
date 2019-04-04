import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ReactTable from "react-table";

import api from "../../services/api";

import { columns } from "./utils"

class Main extends Component {

  state = {
    tasks: [ ],
};

handleNewTask = async e => {

  const content = this.state.newTask;

  await api.post('task', { content,})

  this.setState({ newTask: '' });
  
};

  async componentDidMount()  {
      try {
        const response = await api.get("task");
        this.setState({ tasks: response.data })

      } catch (error) {
        console.log('CLIENT GET TASKS', error);
      }
  }

  render() {
    return (
      <section>
        <form>
            <textarea
              value={this.state.newTweet}
              onChange={this.handleInputChange}
              onKeyDown={this.handleNewTweet}
              placeholder="Hey, whats up?"
            ></textarea>
        </form>
        
      <ReactTable
          className="-striped -highlight"
          columns={columns}
          data={this.state.tasks}
          minRows= {this.state.tasks.length}
        /> 
        </section>
    )
  }
}

export default withRouter(Main);