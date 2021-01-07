import React, {Component} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {HomeStyle} from './style';
import {GlobalStyle} from '../../Shared/GlobalStyle/style';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[HomeStyle.Container]}>
        <View style={HomeStyle.topContainer}>
          <View style={HomeStyle.HeroContainer}>
            <Image
              source={require('../../Assets/Images/brew.jpeg')}
              style={HomeStyle.HeroImage}
            />
          </View>
        </View>
        <View style={HomeStyle.BottomContainer}></View>
      </View>
    );
  }
}

export default Home;
