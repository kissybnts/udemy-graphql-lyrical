import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

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
      <div>
        <ul className="collection">
          {list}
        </ul>
        <Link
          to={'/songs/new'}
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(query)(SongList);