import React from 'react'
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux'

import Home from '../screens/home.js'
// import 'BuySell' from '../screens/buysell.js'

const SCENES = Actions.create(
  <Scene key="root" passProps hideNavBar panHandlers={null}>
    <Scene
      key="launch"
      component={Home}
      type={ActionConst.RESET}
      initial
    />
  </Scene>
);

const Navigation = () => {
  return (
    <Router
      scenes={SCENES}
    />
  );
};

// Export
export default Navigation;
