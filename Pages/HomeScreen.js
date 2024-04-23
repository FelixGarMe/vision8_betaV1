import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import { Camera } from 'expo-camera'; // Importa la cámara de Expo
import Photos from './Photos'; // Importa el componente de fotos
import Profile from './Profile'; // Importa el componente de perfil

export default function HomeScreen() {
  const [showCamera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [showPhotos, setShowPhotos] = useState(true); // Estado para mostrar/ocultar las fotos

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraPress = () => {
    setShowCamera(true);
  };

  const handleToggleView = (view) => {
    setShowCamera(false);
    if (view === 'photos') {
      setShowPhotos(true); // Mostrar fotos
    } else if (view === 'profile') {
      setShowPhotos(false); // Mostrar perfil
    }
  };

  return (
    <View style={styles.container}>
      {hasPermission && showCamera ? (
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={Camera.Constants.Type.back} />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          {/* Mostrar Fotos o Perfil según el estado */}
          {showPhotos ? <Photos /> : <Profile />}
        </View>
      )}

      {/* Barra flotante con iconos */}
      <View style={styles.floatingBar}>
        
          <IconButton icon="image" onPress={() => handleToggleView('photos')} />
          <IconButton icon="qrcode-scan" onPress={handleCameraPress} />
          <IconButton icon="account" onPress={() => handleToggleView('profile')} />
          {/* Otros botones de navegación */}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  camera: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingBar: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    right: '20%',
    marginBottom: '5%',
    paddingHorizontal: 16,
    borderRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    backgroundColor: '#F0DCD8',
  },

});
