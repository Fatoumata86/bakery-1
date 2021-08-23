import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./components/Add"
import List from "./components/List"
import Pay from "./components/Pay"
import Button from "./components/Button"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: "add",
	  items: [],
    }
  }

  onActiveTabChange = (e) => {
	  this.setState({activeTab: e.target.value})
  }
  onSelectActiveTab = (e) => {
	  this.setState({activeTab : e.target.value.innnerHtml})
  }
  render() {
    return(
      <>
	  <h2 className="text-center">Bakery</h2>
	  {/* Button Add */}
	  <Add />
	  <Button isSelected={this.state.activeTab}>Add</Button>
	  {/* Button List */}
	  <List />
	  <Button isSelected={this.state.activeTab}>List</Button>
	  {/* Button Pay */}
	  <Pay />
	  <Button isSelected={this.state.activeTab}>Pay</Button>
      </>
    )
  }
}

export default App;
