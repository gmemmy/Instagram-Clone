import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions  } from 'react-native';
import { SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';

class InstaClone extends Component {
  constructor() {
    super();
      this.state = {
        screenWidth: Dimensions.get('window').width
      }
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri = "https://lh3.googleusercontent.com/WmFWp_uygz_I_8I3fpUXz9pdXiVPRXRX-4Tgx4m4YJQCso88cLbZSkUKidQYAC1cAEDUUi6COhfltIV3QyvVPR_5Xg" 
    + "=s" + imageHeight + "-c";
    return (
      <View style={{ 
        flex: 1, 
        height: 100 + '%', 
        width: 100 + '%', 
        }}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>

        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
            style={styles.userAvi}
            source={{ 
              uri: 
              "https://lh3.googleusercontent.com/WmFWp_uygz_I_8I3fpUXz9pdXiVPRXRX-4Tgx4m4YJQCso88cLbZSkUKidQYAC1cAEDUUi6COhfltIV3QyvVPR_5Xg"
              }} />
            <Text style={{ marginLeft: 10}}>gmemmy</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>...</Text>
          </View>

        </View>

        <Image 
          style={{ height: 400, width: this.state.screenWidth }}
          source={{ 
            uri: imageUri
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 60,
    marginTop: 20,
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomColor: 'rgb(233, 233, 233)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userBar: {
    width: 100 + '%',
    height: 65,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },

  userAvi : {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
})

export default InstaClone;