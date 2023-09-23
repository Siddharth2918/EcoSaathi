import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const SignUpPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={styles.backButton}>
          <Ionicons name="arrow-back" style={styles.arrow} size={24} color="black" />
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Create Account With Email</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.inpText}>Your Email:</Text>
        <TextInput style={styles.input} placeholder="example@gmail.com"/>
        <Text style={styles.inpText}>Choose Password:</Text>
        <TextInput style={styles.input} placeholder="********"/>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.appButtonContainer1}>
          <Text style={styles.appButtonText}>Sign up with email</Text>
        </TouchableOpacity>
        <View style={styles.loginOption}>
          <Text style={styles.logInText}>Already Have an account? </Text>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate("LogInPage")}>
            <Text style={styles.login}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   backButton:{
//     flexDirection:'row',
//     width: 140,
//     height: 40,
//   },
//   back:{
//     fontSize: 17,
//   },
//   heading: {
//     fontSize: 40,
//     color: "#07411B",
//     alignSelf: "center",
//   },
//   inputWrapper: {
//     alignItems: "center",
//     marginLeft: 50,
//     marginTop: 40,
//   },
//   inpText: {
//     color: "#34572F",
//     fontSize: 15,
//     alignSelf: "flex-start",
//     marginTop: 14,
//   },
//   input: {
//     backgroundColor: "#066B53",
//     width: 250,
//     alignSelf: "flex-start",
//     height: 35,
//     borderRadius: 10,
//     marginTop: 8,
//     paddingHorizontal: 15,
//     paddingVertical: 5,
//   },
//   buttonWrapper: {
//     alignItems: "center",
//     marginTop: 40,
//   },
//   appButtonContainer1: {
//     backgroundColor: "#07411B",
//     paddingHorizontal: 10,
//     paddingVertical: 12,
//     borderRadius: 10,
//     width: 250,
//   },
//   appButtonText: {
//     color: "white",
//     alignSelf: "center",
//     fontWeight: "bold",
//   },
//   loginOption:{
//     flexDirection: 'row',
//   },
//   logInText: {
//     alignSelf: "center",
//     marginTop: 25,
//     fontSize: 15,
//     marginBottom: 25,
//   },
//   login: {
//     alignSelf: "center",
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  // mainContainer:{
  //   alignItems: 'center'
  // },
  arrow:{
    alignSelf:"center",
    color:"green",
    paddingLeft:3,
    marginLeft:12,
    borderRadius: 10,
    // width: 250,
    borderWidth: 2,
    borderColor: '#D0E7D2',
    backgroundColor:"#D0E7D2"
  },
  backButton:{
    marginBottom:100,
    marginVertical:20,
    marginLeft:3,
    flexDirection:'row',
    height:30,
    width:100,
    color:'green',
    // borderRadius: 50,
    // // width: 250,
    // borderWidth: 2,
    // borderColor: '#D8D9DA'
  },
  back:{
    paddingHorizontal: 9,
    // paddingVertical: 4,
    paddingBottom:4,
    fontSize: 17,
    fontWeight:'500',
    color:'green',
    // borderRadius: 10,
    // // width: 250,
    // borderWidth: 2,
    // borderColor: '#07411B'
  },
  heading: {
    // fontSize: 40,
    // color: "#07411B",
    // alignSelf: "center",
    fontSize: 30,
    alignSelf: 'center',
    justifyContent:'center',
    color: '#07411B',
    fontWeight:'900',
  },
  inputWrapper: {
    alignItems: "center",
    marginTop: 40,
    justifyContent: 'center',
    alignSelf:'center',
  },
  inpText: {

    alignSelf: "flex-start",
    // marginTop: 14,
    marginTop:8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(52,87,47,1)",
    // fontSize: "21px",
    // lineHeight: "21px",
    // fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#D0E7D2",
    // opacity:17,
    width: 250,
    alignSelf: "flex-start",
    height: 45,
    borderRadius: 10,
    marginTop: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom:15,
    borderRadius:15
  },
  buttonWrapper: {
    alignItems: "center",
    marginTop: 40,
  },
  appButtonContainer1: {
    backgroundColor: "#07411B",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    width: 250,
  },
  appButtonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
  loginOption:{
    flexDirection: 'row',
  },
  logInText: {
    alignSelf: "center",
    marginTop: 25,
    fontSize: 15,
    marginBottom: 25,
    fontWeight:'400'
  },
  login: {
    alignSelf: "center",
    color:"green",
    marginTop: 25,
    fontSize: 15,
    marginBottom: 25,
    fontWeight:'400',
    textDecorationLine:'underline'
},
});
export default SignUpPage;
