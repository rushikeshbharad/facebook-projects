import React from 'react';
import MediaQuery from 'react-responsive';

const Mobile = ({ children }) => (
	<MediaQuery query="(max-device-width: 850px)">{children}</MediaQuery>
);

const Desktop = ({ children }) => (
	<MediaQuery query="(min-device-width: 851px)">{children}</MediaQuery>
);

export {
	Mobile,
	Desktop
};
