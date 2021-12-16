import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import COLORS from '../constants/colors';

const Create = props => {
  const [pickedUri, setPickedUri] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la cámara para usar la aplicación',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4,4],
      quality: 0.8,
    });

    console.log(image)
    setPickedUri(image.uri);
    props.onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {pickedUri
          ? <Image source={{ uri: pickedUri }} style={styles.image} />
          : <Text>No hay imagen...</Text>
        }
      </View>
      <Button
        title="Tomar Foto"
        color={COLORS.primary}
        onPress={handleTakeImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: '50%',
    height: 200,
    marginBottom: 10,
    marginLeft:'25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default Create;