import React, { Component } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { HomeStyle } from './style';
import { GlobalStyle } from '../../Shared/GlobalStyle/style';

class Home extends Component {
  constructor(props) {
    super(props);

    this.starUrl = "https://logosbynick.com/wp-content/uploads/2017/11/illustrator-tutorial-step1.png"
    this.state = {
      status: true,
      dummyAchievement: [],
      name: 'Juminten',
      desc: 'Kuliah di Washington',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    };
  }

  componentDidMount() {

  }

  changeImage() {
    if (this.state.status) {
      this.setState({
        name: 'Clara',
        desc: 'Kuliah di Masachusette',
        status: false,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      });
    } else {
      this.setState({
        name: 'Juminten',
        desc: 'Kuliah di Washington',
        status: true,
        image:
          'https://images.unsplash.com/photo-1515734674582-29010bb37906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      });
    }
  }

  render() {
    const temp = []
    for (let i = 0; i < 20; i++) {
      temp.push(i)
    }

    return (
      <View style={[HomeStyle.root]}>
        <ScrollView>
        <View style={HomeStyle.bgContainer} />

          <View style={HomeStyle.cardContainer}>

            <View style={HomeStyle.userProfileInfo}>
              <Image
                source={{ uri: this.state.image }}
                style={HomeStyle.HeroImage}
              />
              <View style={HomeStyle.userTextContainer}>
                <Text style={HomeStyle.personName}>{this.state.name}</Text>
                <Text>{this.state.desc}</Text>

                <View style={HomeStyle.engadgementCard}>
                  <View style={HomeStyle.engadgementItem}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>8</Text>
                    <Text numberOfLines={1}>Posts</Text>
                  </View>
                  <View style={HomeStyle.engadgementItem}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>88k</Text>
                    <Text numberOfLines={1}>Followers</Text>
                  </View>
                  <View style={HomeStyle.engadgementItem}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>1232</Text>
                    <Text numberOfLines={1}>Following</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={HomeStyle.ButtonHeroContainer}>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.firstButton]}>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
                <Text style={{ color: 'white' }}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={HomeStyle.content}>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

            <Text style={{ fontWeight: 'bold', marginVertical: 8 }}>Achievements</Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                temp.map((e, index) => {
                  return (
                    <View style={HomeStyle.cardAchievement} key={index.toString()}>
                      <Image
                        style={{ height: 32, width: 32 }}
                        source={{ uri: this.starUrl }}
                      />
                    </View>
                  )
                })
              }

            </ScrollView>

            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

          </View>

        </ScrollView>

        <View style={HomeStyle.bottomSnippet}>
          <TouchableOpacity
            onPress={() => this.changeImage()}
            activeOpacity={0.7}
            style={HomeStyle.blockButton}>
            <Text style={{ color: 'white' }}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;
