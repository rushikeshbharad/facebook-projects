import React from 'react';
import MediaQuery from 'react-responsive';

const Mobile = ({ children }) => (
	<MediaQuery query="(max-device-width: 600px)">{children}</MediaQuery>
);

const Desktop = ({ children }) => (
	<MediaQuery query="(min-device-width: 481px)">{children}</MediaQuery>
);

export {
	Mobile,
	Desktop
};
