import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleEpisode, untrackShow } from '../actions';
import ShowCard from './ShowCard.js';

const TrackedShowsDisplay = (props) => {
  const { shows, toggleEpisode, untrackShow } = props;
  return Object.values(shows).map(show =>
      <ShowCard
        key={show.id}
        show={show}
        untrack={untrackShow}
        toggle={toggleEpisode} />
  )
}

const mapStateToProps = (state) => {
  return {
    shows: state.trackedShows,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEpisode: (showId, episodeId) =>
      dispatch(toggleEpisode({ showId, episodeId })),
    untrackShow: (id) => dispatch(untrackShow({ id }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackedShowsDisplay);