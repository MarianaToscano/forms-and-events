import React from 'react';

class SearchBar extends React.Component {
  state = { term : ''};

  onFormSubmit = event => {
    event.preventDefault(); //o q previne o form de submeter o form automaticamente
  
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text"
              value={this.state.term} // aquilo q metermos aqui é o que aparece na search bar
              onChange={e => this.setState({ term: e.target.value })} // se quisesse meter tudo em uppercase era meter a frente do value toUpperCase()
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;