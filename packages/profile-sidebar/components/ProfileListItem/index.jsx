import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  LockIcon,
} from '@bufferapp/components';
import {
  calculateStyles,
} from '@bufferapp/components/lib/utils';
import {
  curiousBlueUltraLight,
} from '@bufferapp/components/style/color';
import ProfileBadge from '../ProfileBadge';

const profileBadgeWrapperStyle = {
  marginRight: '1rem',
};

const notificationsStyle = {
  flexGrow: 1,
  textAlign: 'right',
};

const Notifications = ({
  notifications,
}) =>
  <Text>{notifications}</Text>;

Notifications.propTypes = {
  notifications: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Notifications.defaultProps = {
  notifications: null,
};

const ProfileSidebar = ({
  avatarUrl,
  type,
  notifications,
  handle,
  locked,
  selected,
}) =>
  <div
    style={calculateStyles({
      default: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.5rem',
        opacity: 0.6,
      },
      selected: {
        background: curiousBlueUltraLight,
        opacity: 1,
      },
    }, {
      selected,
    })}
  >
    <div style={profileBadgeWrapperStyle}>
      <ProfileBadge
        avatarUrl={avatarUrl}
        type={type}
      />
    </div>
    <Text
      size={'small'}
    >
      {handle}
    </Text>
    <div style={notificationsStyle}>
      { locked ? <LockIcon /> : <Notifications notifications={notifications} />}
    </div>
  </div>;

ProfileSidebar.propTypes = {
  ...Notifications.propTypes,
  ...ProfileBadge.propTypes,
  handle: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  selected: PropTypes.bool,
};

ProfileSidebar.defaultProps = {
  locked: false,
  selected: false,
};

export default ProfileSidebar;