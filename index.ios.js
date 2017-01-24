import React, { Component } from 'react';
import { AppRegistry, Navigator, Text } from 'react-native';
import MemberIndexScreen from './app/screens/MemberIndexScreen'
import MemberShowScreen from './app/screens/MemberShowScreen'

export default class NBAstatapp extends Component {

  _renderScene(route, navigator) {
    const globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "MemberIndex":
        return (
          <MemberIndexScreen
            {...globalNavigatorProps} />
        )

      case "MemberShow":
        return (
          <MemberShowScreen
            {...globalNavigatorProps}
            member={route.member} />
        )

      default:
        return (
          <Text>{`Error`}</Text>
        )
    }
  }

  render() {
    return(
      <Navigator
        initialRoute={{ident: "MemberIndex"}}
        ref="appNavigator"
        renderScene={this._renderScene} />
    )
  }
}



AppRegistry.registerComponent('NBAstatapp', () => NBAstatapp);
