import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'Theme/GlobalStyle';
import { theme } from 'Theme/mainTheme';
import PropTypes from 'prop-types';

function MainTemplate({ children }) {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
}
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
