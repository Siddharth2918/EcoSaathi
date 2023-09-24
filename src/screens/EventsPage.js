import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";

const EventsPage = () => {
  const events = [
    {
      key: "1",
      title: "Title1",
      desc: "description1",
      location: "location1",
      image: "greenleaves1.jpg",
    },
    {
      key: "2",
      title: "Title2",
      desc: "description2",
      location: "location2",
      image: "greenleaves1.jpg",
    },
    {
      key: "3",
      title: "Title3",
      desc: "description3",
      location: "location3",
      image: "greenleaves1.jpg",
    },
    {
      key: "4",
      title: "Title3",
      desc: "description3",
      location: "location3",
      image: "greenleaves1.jpg",
    },
    {
      key: "5",
      title: "Title3",
      desc: "description3",
      location: "location3",
      image: "greenleaves1.jpg",
    },
  ];
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Events</Text>
      </View>
      <FlatList
        style={styles.box}
        keyExtractor={(item) => {
          return item.key;
        }}
        data={events}
        renderItem={({ item }) => {
          return (
            <View style={styles.eventsContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <TouchableOpacity style={styles.addcontainer}>
                  <Text style={styles.participate}>Participate</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/favicon.png")}
                />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
  },
  textContainer: {
    margin: 20,
    alignItems: "flex-start",
    // justifyContent:'center'
  },
  box: {
    // backgroundColor:"blue",
  },
  participate: {
    backgroundColor: "#D0E7D2",
    borderWidth: 1.5,
    borderRadius: 20,
    width: 100,
    // marginLeft:10,
    textAlign: "center",
  },
  image: {
    // height:70,
    // width:70,
    // alignContent:'center',
    justifyContent: "center",
    // position:'absolute',
    // alignSelf:'center',
    // right:0
  },
  imageContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    right: 30,
  },

  text: {
    paddingTop: 50,
    padding: 30,
    // alignSelf:'left',
    fontSize: 25,
    fontWeight: "900",
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    color: "black",
    // marginLeft:20,
    // marginTop:-60
  },
  desc: {
    fontSize: 17,
    color: "green",
    // marginLeft:20

    // textShadowOffset:0.3/,
  },
  location: {
    fontSize: 15,
    // marginLeft:20
  },
  eventsContainer: {
    backgroundColor: "#D9D9D9",
    borderwidth: 3,
    borderRadius: 20,
    height: 150,
    justifyContent: "center",
    rowGap: 10,
    marginVertical: 10,
    // flexDirection:'row',
  },
});

export default EventsPage;
