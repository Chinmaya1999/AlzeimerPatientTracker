import React, {useContext,useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import FormInput from './FormInput';
import FormButton from './FormButton';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
const TrackForm = () => {
  //console.log(locations[0].coords);
  const {
    state: {name, recording, locations},
    startRecording,
    stopRecording,
    changeName,
    sendMessage,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  
  //const [location,setLocation]=useState();
  // console.log('The length of location are', locations.length);
  console.log(locations);
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FormInput
          value={name}
          onChangeText={changeName}
          placeholderText="Record This Session"
          iconType="playcircleo"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {recording ? (
          <FormButton buttonTitle="Stop" onPress={stopRecording} />
        ) : (
          <FormButton buttonTitle="Record" onPress={startRecording} />
        )}
        {!recording && locations.length ? (
          <FormButton buttonTitle="Save Recording" onPress={saveTrack} />
        ) : null}
      

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingTop: 50,
  },
});
export default TrackForm;
