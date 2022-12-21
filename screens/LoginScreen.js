import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const OTPLoginScreen = () => {
  const [otp, setOTP] = useState('');

  const handleSubmit = () => {
    // Validate OTP
    if (validateOTP(otp)) {
      // Navigate to the home screen
      navigation.navigate('MyTabs');
    } else {
      // Show an error message
      alert('Invalid OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOTP}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default OTPLoginScreen;
