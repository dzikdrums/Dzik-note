import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Articles from 'views/articles';
import Notes from 'views/notes';
import Twitters from 'views/twitters';

function Root() {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/twitters" component={Twitters} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
}

export default Root;
