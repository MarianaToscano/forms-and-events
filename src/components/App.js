import React from 'react';
import SearchBar from './SearchBar'

// const App = () => { substituimos pelo q ta em baixo
class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit} /> 
      {/* no onSubmit podiamos meter o q quisessemos, mas ele meteu on submit pq cada vez q run this function anyime the seacrh bar is submited, so on submit run this function  */}
    </div>
    );
  }
}

export default App;