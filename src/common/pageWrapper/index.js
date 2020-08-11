import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
// eslint-disable-next-line
import LeftBlock from '../leftBlock';
import RightBlock from '../rightBlock';
import { MainContainer } from '../styledComponents';

const PageWrapper = ({ messages, children }) => (
  <>
    <Header />
    <MainContainer>
      <LeftBlock messages={messages} />
      <RightBlock>{children}</RightBlock>
    </MainContainer>
  </>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  messages: PropTypes.bool.isRequired,
};

export default PageWrapper;
