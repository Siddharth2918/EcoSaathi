import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";
import ProgressCircle from "react-native-progress-circle";

const percentage = 55;
const points = 32;
const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={require("../../assets/greenleaves1.jpg")}
          style={styles.profileBackground}
        />
        <View style={[styles.profileView, styles.shadowProp]}>
            <Image
                style={styles.profileimage}
                source={require("../../assets/ria.png")}
            />
          <Text style={styles.personName}>Ria Pahujani</Text>
          <Text style={styles.personLocation}>Dehradun, Uttrakhand</Text>
        </View>
      </View>
      <View>
        <Text style={styles.heading1}>Saathi Score</Text>
      </View>
      <View style={styles.perCircle}>
        <ProgressCircle
            percent={percentage}
            radius={100}
            borderWidth={15}
            color="#57B894"
            shadowColor="#34572F"
            bgColor="#fff"
        >
            <Text style={styles.perText}>{percentage}%</Text>
        </ProgressCircle>
      </View>
      <View style={styles.points}>
        <Text style={styles.pointHeading}>Points:  {points}</Text>
        <TouchableOpacity style={styles.addcontainer}>
            <Text style={styles.add}>+Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  add:{
    textAlign:'center',
    justifyContent:'center',
    borderColor: '#D0E7D2',
    color:"white",
  },
  addcontainer:{
    backgroundColor: "#07411B",
    borderWidth:3,
    borderRadius: 20,
    width: 60,
    marginRight:-40,
    // justifyContent:'right'
  },
  points:{
    borderRadius: 50,
    height:30,
    alignItems: "center",
    justifyContent:'center',
    width: 200,
    marginLeft:80,
    marginTop:40,
    borderColor: '#D0E7D2',
    backgroundColor:"#D0E7D2",
    flexDirection: 'row',
  },
  profileBackground: {
    height: 200,
    width: Dimensions.get("window").width,
  },
  heading1:{
    fontSize:25,
    fontWeight:'900',
    color:"#34572F",
    marginTop:50,
    textAlign:'center',
    marginBottom:-50,
  },
  profileimage:{
    height:70,
    width:70,
    marginTop:-90,
    marginBottom:40,
    borderRadius:50,
    borderWidth:2,
    borderColor:"black"
  },
  profileView: {
    backgroundColor: "#D9D9D9",
    width: 300,
    height:180,
    marginTop:-60,
    marginLeft:30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
    borderRadius: 20,
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  personName:{
    fontSize:15,
    marginTop:-8,
    fontWeight:'900',
    color:"green",
  },
  personLocation:{
    fontSize:15,
    fontWeight:'600',
    color:"green"
  },
  perText:{
    fontSize:40,
    color:'grey'
  },
  perCircle:{
    marginTop:70,
    marginLeft:80
  },
  pointHeading:{
    textAlign:'center',
    justifyContent:'center',
    fontSize:16,
    fontWeight:'900',
    marginRight:10
  }
});

export default ProfilePage;