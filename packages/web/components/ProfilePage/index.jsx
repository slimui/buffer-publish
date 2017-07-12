import React from 'react';
import PropTypes from 'prop-types';
import LoggedIn from '@bufferapp/example';
import QueuedPosts from '@bufferapp/queue';
import SentPosts from '@bufferapp/sent';
import ProfileSettings from '@bufferapp/settings';
import TabNavigation from '@bufferapp/tabs';

const profilePageStyle = {
  display: 'flex',
  flexGrow: 1,
  height: '100%',
};

const profileSideBarStyle = {
  background: 'blue',
  color: 'white',
  flexBasis: '16rem',
  width: '16rem',
  minWidth: '16rem',
};

const contentStyle = {
  flexGrow: 1,
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
};

const tabContentStyle = {
  flexGrow: 1,
  overflowY: 'auto',
  marginTop: '1rem',
  marginLeft: '1rem',
  marginRight: '1rem',
};

// TODO: this is only for testing content that is scrollable - delete this
const ScrollableGarbage = () =>
  [...Array(200).keys()].map(i =>
    <div
      key={i}
      style={{
        border: '1px solid',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      {i}
    </div>,
  );


const TabContent = ({ tabId }) => {
  switch (tabId) {
    case 'queue':
      return (
        <QueuedPosts
          listHeader
          posts
          onCancelConfirmClick={() => { console.log('cancel confirm click'); }}
          onDeleteClick={() => { console.log('delete click'); }}
          onDeleteConfirmClick={() => { console.log('delete click'); }}
          onEditClick={() => { console.log('edit click'); }}
          onShareNowClick={() => { console.log('share now click'); }}
        />
      );
    case 'sent':
      return (
        <SentPosts
          header
          listHeader
          posts
        />
      );
    case 'settings':
      return (
        <ProfileSettings
          settingsHeader
        />
      );
    default:
      return (
        <div>
          <div>Default - This Should Be Deleted Before Final Ship</div>
          <LoggedIn />
          <h1>Welcome to Buffer Publish!</h1>
          {ScrollableGarbage()}
        </div>
      );
  }
};

TabContent.propTypes = {
  tabId: PropTypes.string,
};

TabContent.defaultProps = {
  tabId: '',
};

const ProfilePage = ({ match: { params: { profileId, tabId } } }) =>
  <div style={profilePageStyle}>
    <div style={profileSideBarStyle}>
      <div>Profile Sidebar</div>
      <div>ProfileId: <strong>{profileId}</strong></div>
    </div>
    <div style={contentStyle}>
      <TabNavigation
        onTabClick={() => { console.log('on tab click clicked'); }}
        activeTabId={'12345'}
      />
      <div style={tabContentStyle}>
        {TabContent({ tabId })}
      </div>
    </div>
  </div>;

ProfilePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
      profileId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProfilePage;