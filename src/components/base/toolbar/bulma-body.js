import React from 'react';
import { Helmet } from 'react-helmet';

const BulmaBody = () => (<Helmet>
  <body className={'has-navbar-fixed-top'}/>
</Helmet>);

export default BulmaBody;
