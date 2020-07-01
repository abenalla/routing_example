import React, { Component } from "react";

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      console.log(data);
      this.setState({
        pokemon: data.results,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { pokemon, loading } = this.state;

    if (loading) {
      return <div>Loading</div>;
    }

    if (pokemon.length === 0) {
      return <div>There are no pokemon</div>;
    }
    return (
      <div>
        <div>This is the pokemon list</div>
        <div>
          {pokemon.map((el) => {
            return <div>{el.name}</div>;
          })}
        </div>
      </div>
    );
  }
}
