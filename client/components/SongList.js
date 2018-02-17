import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    if (this.props.data.songs) {
      return this.props.data.songs.map(s => (
        <li key={s.id}>
          {s.title}
        </li>
      ));
    } else {
      return null;
    }
  }

  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return (
        <div>Loading...</div>
      );
    }

    const list = this.renderSongs();

    return (
      <ul>
        {list}
      </ul>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);