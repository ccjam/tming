import { nanoid } from 'nanoid';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// sub components
import VoteForm from './voteForm';
import VotedUsers from './votedUsers';

const RootGrid = styled.div`
  display: grid;
  grid-template:
    'users form chat' minmax(90vh, 1fr)
    / 1fr 1.5fr 1fr;

  .voted-users {
    grid-area: users;
  }

  .vote-form {
    grid-area: form;
  }

  .chat {
    grid-area: chat;
  }
`;

function Index({ twitchId: TwitchId }) {
  return (
    <>
      <RootGrid>
        <div className="voted-users">
          <VotedUsers />
        </div>
        <div className="vote-form">
          <VoteForm />
        </div>
        <div className="chat">
          <iframe
            title={nanoid()}
            frameBorder="0"
            scrolling="no"
            src={`https://www.twitch.tv/embed/${TwitchId}/chat?parent=127.0.0.1&darkpopout`}
            height="100%"
            width="100%"
          />
        </div>
      </RootGrid>
    </>
  );
}

Index.propTypes = { twitchId: PropTypes.string.isRequired };

const mapStateToProps = state => {
  return {
    twitchId: state.Layout.twitchId,
  };
};

export default connect(mapStateToProps, null)(Index);
