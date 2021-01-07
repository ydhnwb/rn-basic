/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

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
    height: 220,
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
});
