import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

const Question = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };
  return (
    <View style={styles.questionView}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === index && styles.selectedOption, // Apply a style for selected option
          ]}
          onPress={() => handleOptionSelect(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

  const question = "Do you regularly separate recyclables from your trash?";
  const options = [
    "Strongly Agree",
    "Agree",
    "Neutral",
    "Disagree",
    "Strongly Disagree",
  ];

  
const SurveyPage = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/back.jpg')}
        resizeMode="cover"
        style={styles.backgroundImg}
      >
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        <Question/>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('window').width,
    
  },
  question: {
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 20,
    alignItems: "center",
    color: 'white'
  },
  questionView:{
    alignItems: 'center',
    marginTop: 50,
  },
  option: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    width: 200,
    alignItems: "center",
  },
  optionText: {
    fontWeight: "bold",
    fontSize: 17,
    color:'white',
  },
  selectedOption: {
    borderColor: "green",
  },
});

export default SurveyPage;
