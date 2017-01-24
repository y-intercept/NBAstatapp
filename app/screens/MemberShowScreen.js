import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewContainer from '../components/viewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class MemberShowScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
		console.log(this.props.navigator)
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}}/>
				<Text style={{marginTop: 100, fontSize: 20}}>{`Member Show Screen`}</Text>
				<Text style={styles.memberName}>{`${_.upperFirst(this.props.member.firstName)} ${_.upperFirst(this.props.member.lastName)}`}</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({

  memberName: {
    marginLeft: 15
  }

});

module.exports = MemberShowScreen
