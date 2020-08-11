import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  background: #ffb11b;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  letter-spacing: 0.065em;
  font-weight: ${(props) => (props.small ? '400' : '500')};
  font-size: ${(props) => (props.small ? '16px' : '24px')};
  border-radius: ${(props) => (props.small ? '5px' : '15px')};
  width: ${(props) => (props.wide ? '100%' : null)};
  line-height: ${(props) => (props.small ? '20px' : '29px')};
  padding: ${(props) => (props.small ? '15px 40px' : '19px 66px')};
  transition: all 0.2s ease-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px #ffb11b;
  }
  &:active {
    outline: none;
    box-shadow: 0 0 0 3px #ffffff, 0 0 0 5px #000000;
    transition: none;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

export default Button;

Button.defaultProps = {
  children: {},
};

Button.propTypes = {
  children: PropTypes.string,
};
