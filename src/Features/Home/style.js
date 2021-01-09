/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const Radius = 35;

export const HomeStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    height: 200,
    backgroundColor: '#8795AF',
    borderBottomLeftRadius: Radius,
    borderBottomRightRadius: Radius,
    paddingHorizontal: 30,
  },
  HeroContainer: {
    marginTop: 50,
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  HeroImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  ButtonHeroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ButtonContainer: {
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 2,
  },
  firstButton: {
    backgroundColor: 'white',
  },
  secondButton: {
    backgroundColor: '#5374FF',
  },

  root: {
    position: 'relative',
    flex: 1
  },

  bgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 190,
    backgroundColor: '#8795AF',
    borderBottomLeftRadius: Radius,
    borderBottomRightRadius: Radius,
    paddingHorizontal: 16,
    flexDirection: 'column',
  },


  cardContainer : {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 60,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16
  },

  cardAchievement : {
    flexDirection: 'column',
    flex: 1,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16
  },

  userProfileInfo : {
    alignItems: 'stretch',
    flexDirection: 'row',
    flex: 1
  },

  userTextContainer : {
    flexDirection: 'column',
    flex:1, 
    marginStart: 8,
  },

  engadgementCard : {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    marginTop: 8,
    padding: 8,
    flexDirection: 'row',
    flex: 1
  },

  engadgementItem : {
    padding: 8,
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  },

  personName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  content : {
    padding: 16,
    flexDirection: 'column',
    flex: 1
  },


  blockButton: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    borderRadius: 32,
    padding: 8,
    backgroundColor: 'green',
    alignSelf: 'stretch'
  },
  bottomSnippet: {
    flex: 1,
    padding: 4,
    position: 'absolute',
    justifyContent: "center",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

});
