import React from 'react';
import './App.css';

const TOPICSLIST = [
  { 
    name: 'Highlighting Code',
    info: [
      {
        shortcutreferencename: 'Highlight Block of Code 🖍',
        code: 'Alt + Shift + Up',
        explanation: 'Highlights where your cursor is placed and the block of code above it'
      }, 
      {
        shortcutreferencename: 'Highlight Line of Code',
        code: 'Alt + Shift + Right',
        explanation: 'Highlights whatever your cursor is clicking and everythnig else to the right on that line'
      }
    ],
  },
  { 
    name: 'Moving Files Around',
    info: [
      {
        shortcutreferencename: 'Move File to Right of Screen Editor 👉',
        code: 'Cmnd + k Shift + right',
        explanation: 'Splits the editor screen by pushing file to the right'
      }
    ]}
]



class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {topicBeenSelected: undefined}
      this.chooseTopicToShowAAA = this.chooseTopicToShowAAA.bind(this);
      this.stopShowingTopic = this.stopShowingTopic.bind(this);
  }

  chooseTopicToShowAAA(selectedTopic) {
    this.setState({topicBeenSelected: selectedTopic})
  }

  stopShowingTopic() {
    this.setState({topicBeenSelected: undefined})
  }

  render() {
    if (this.state.topicBeenSelected) {
      return <TopicListComponent selectedTopic={this.state.topicBeenSelected} stopShowingTopic={this.stopShowingTopic}/>            
    } else {
      return <Homepage chooseTopicToShow={this.chooseTopicToShowAAA}/>
    }
  }
}

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.searchKeyword = this.searchKeyword.bind(this); 
  }

  searchKeyword(keyword) {
    console.log("this would be using the keyword to make specific searches")
  }

  render() {
      return (
          <div>
            <SearchBar searchKeyword={this.searchKeyword}/>
            <header className="App-header">
            <h1> Keyboard Shortcuts | At Your Fingertips</h1>
            <p>
              Ready to become a keyboard shortcut Wizard?! <br/>
              Take a look at the different topics related to keyboard shortcuts below ✨
            </p>              
            </header>
            {TOPICSLIST.map((topic) => 
              <button onClick={() => this.props.chooseTopicToShow(topic)}>
                Shortcuts Related To: {topic.name}
              </button>
            )}
          </div>

      )
  }
}

class TopicListComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Topic_Selected">
          Shortcuts related to {this.props.selectedTopic.name}
        </h1>
        <br/>
        {
          this.props.selectedTopic.info.map((info) =>
            <TopicComponent
            shortcutreferencename={info.shortcutreferencename}
            code={info.code}
            explanation={info.explanation}
            />
          )
        }
        <br/>
        <button onClick={this.props.stopShowingTopic}>Go Back To Home Page</button>
      </div>
    )
  }
}

class TopicComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.shortcutreferencename}</h2>
        <div><h3>Code: {this.props.code}</h3></div>
        <div><h3>Explanation: {this.props.explanation}</h3></div>
      </div>
    )
  }
}

class SearchBar extends React.Component {
constructor(props) {
  super(props)
  this.state = {typedKeyword: false, value:""}
  this.handleChange = this.handleChange.bind(this);
  this.onSubmitSearch = this.onSubmitSearch.bind(this)
}

handleChange (e) {
  const value = e.target.value;
  this.setState({value: value});
}

onSubmitSearch() {
  // console.log(this.state.value === "")
  const typedKeyword = (this.state.value !== "") 
  this.setState({typedKeyword:typedKeyword})
}

  render() {
      return (
        <div>
            <input 
              type="text" 
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Search by typing Keyword">
            </input>
            <button onClick={this.onSubmitSearch}>Go</button>
        </div>
      )
  }
}


// want to make a search box
// want to make a button to click
// want to let user type in words
// want to make text clear when you click the button

export default App;