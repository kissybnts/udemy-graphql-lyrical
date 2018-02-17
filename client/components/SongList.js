import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    if (this.props.data.songs) {
      return this.props.data.songs.map(s => (
        <li key={s.id} className="collection-item">
          {s.title}
        </li>
      ));
    } else {
      return null;
    }
  }

  render() {
    if (this.props.data.loading) {
      return (
        <div>Loading...</div>
      );
    }

    const list = this.renderSongs();

    return (
      <ul className="collection">
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