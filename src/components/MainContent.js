import { Switch, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Services from './ServicesSection';

const MainContent = () => {
  const location = useLocation();
  return (
    <div className="flex-grow">
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
      </Switch>
    </div>
  );
};
export default MainContent;
