import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, TouchableOpacity, Navigator } from 'react-native';
import ViewContainer from '../components/viewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

const members = [
  {firstName: "john", lastName: "bonham", instrument: "drums"},
  {firstName: "john", lastName: "lennon", instrument: "guitar"},
  {firstName: "john paul", lastName: "jones", instrument: "bass"},
  {firstName: "paul", lastName: "mccartny", instrument: "guitar"}
]

export default class MemberIndexScreen extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      memberDataSource: ds.cloneWithRows(members)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: 'mistyrose'}}/>
        <ListView
          style={{marginTop: 60}}
          dataSource={this.state.memberDataSource}
          renderRow={(member) => { return this._renderMemberRow(member)}} />
      </ViewContainer>
    )
  }

  _renderMemberRow(member) {
    return (
      <TouchableOpacity style={styles.memberRow} onPress={(event) => { return this._navigateToMember(member)}}>
        <Text style={styles.memberName}>{`${_.upperFirst(member.firstName)} ${_.upperFirst(member.lastName)}`}</Text>
        <View style={{flex: 1}} />
        <Icon name='chevron-circle-right' style={styles.memberNextIcon} />
      </TouchableOpacity>
    )
  }

	_navigateToMember(member) {
		this.props.navigator.push({
			ident: "MemberShow",
			member
		})
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  memberRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  memberNextIcon: {
    height: 30,
    color: 'gray',
    marginRight: 15
  },
  memberName: {
    marginLeft: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

module.exports = MemberIndexScreen
