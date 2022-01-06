import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import styles from './Style';

const App = () => {
  return (
    <LinearGradient colors={['#E78049', '#CC583B', '#FF8D5D'
    ]} style={styles.carBackground} >




      <View >

        <View style={styles.card}>

          <View style={{ flexDirection: 'row' }}>
            <View style={styles.circle}><Text style={styles.firsthree}>+5</Text></View>
            <View style={styles.circle}><Text style={styles.firsthree}>+5</Text></View>
            <View style={styles.circle}><Text style={styles.firsthree}>+5</Text></View>
            <View style={styles.circle}><Text style={styles.firsthree}>+5</Text></View>
            <View style={styles.circle}><Text style={styles.firsthree}>+5</Text></View>
            <View style={styles.circle}><Text style={styles.firsthree}>+5</Text></View>
            <View style={styles.circle}><Text style={styles.firsthree}>+5</Text></View>

          </View>
          <View>
            <TouchableOpacity style={styles.checkin}><Text style={{ alignSelf: "center", fontFamily: "Montserrat", marginVertical: 7, }}>Check In</Text></TouchableOpacity>

          </View>
          <View><Text style={{ fontFamily: "Montserrat", marginTop: 15, alignSelf: "center", color: "#640000", }}>Check In Daily to earn +5 Coins</Text></View>


        </View>
        <View style={styles.card2}>
          <View style={styles.Text1View}>
            <Text style={{ fontFamily: "Montserrat", lineHeight: 21.94, color: "black", fontSize: 18, fontWeight: "600" }}>Read for 15 Minute 0/15</Text>
          </View>
          <View style={styles.Text2View}>
            <Text style={{ fontFamily: "Montserrat", color: "black", fontSize: 12, }}>Read on WebNovel for 15 Minutes</Text>
          </View>
          <View style={styles.fiveCoins}>
            <LinearGradient colors={["#FFD06D", "#F99912"]} style={{ width: 20, height: 20, borderRadius: 50, alignSelf: "center", marginLeft: 3, }} >
              <Image source={require('./assets/Fill105.png')} style={{ alignSelf: 'center', width: 12, height: 12, marginTop: 3, }} />
            </LinearGradient>
            <View style={{ marginLeft: 9.21, alignSelf: "center", marginBottom: 3 }}><Text style={{ color: "#640000" }}>5 Coins</Text></View>

            <TouchableOpacity style={styles.claimbutton}>
              <View style={styles.claimText}><Text style={{ color: "white" }}>Claim</Text></View>


            </TouchableOpacity>




          </View>


        </View >
        <View style={styles.card2}>
          <View style={styles.Text1View}>
            <Text style={{ fontFamily: "Montserrat", lineHeight: 21.94, color: "black", fontSize: 18, fontWeight: "600" }}>Read for 15 Minute 0/15</Text>
          </View>
          <View style={styles.Text2View}>
            <Text style={{ fontFamily: "Montserrat", color: "black", fontSize: 12, }}>Read on WebNovel for 15 Minutes</Text>
          </View>
          <View style={styles.fiveCoins}>
            <LinearGradient colors={["#FFD06D", "#F99912"]} style={{ width: 20, height: 20, borderRadius: 50, alignSelf: "center", marginLeft: 3, }} >
              <Image source={require('./assets/Fill105.png')} style={{ alignSelf: 'center', width: 12, height: 12, marginTop: 3, }} />
            </LinearGradient>
            <View style={{ marginLeft: 9.21, alignSelf: "center", marginBottom: 3 }}><Text style={{ color: "#640000" }}>5 Coins</Text></View>




            <TouchableOpacity style={styles.claimbutton}>
              <View style={styles.claimText}><Text style={{ color: "white" }}>Claim</Text></View>


            </TouchableOpacity>


          </View>

        </View >
        <View style={styles.card2}>
          <View style={styles.Text1View}>
            <Text style={{ fontFamily: "Montserrat", lineHeight: 21.94, color: "black", fontSize: 18, fontWeight: "600" }}>Read for 15 Minute 0/15</Text>
          </View>
          <View style={styles.Text2View}>
            <Text style={{ fontFamily: "Montserrat", color: "black", fontSize: 12, }}>Read on WebNovel for 15 Minutes</Text>
          </View>
          <View style={styles.fiveCoins}>
            <LinearGradient colors={["#FFD06D", "#F99912"]} style={{ width: 20, height: 20, borderRadius: 50, alignSelf: "center", marginLeft: 3, }} >
              <Image source={require('./assets/Fill105.png')} style={{ alignSelf: 'center', width: 12, height: 12, marginTop: 3, }} />
            </LinearGradient>
            <View style={{ marginLeft: 9.21, alignSelf: "center", marginBottom: 3 }}><Text style={{ color: "#640000" }}>5 Coins</Text></View>


            <TouchableOpacity style={styles.claimbutton}>
              <View style={styles.claimText}><Text style={{ color: "white" }}>Claim</Text></View>


            </TouchableOpacity>



          </View>


        </View >



      </View>


    </LinearGradient>
  )
}

export default App;
