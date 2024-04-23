import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
  // Información del usuario
  const nombre = "Felix Arturo Garcia Mestas";
  const fotoPerfil = require('../assets/Perfil.png');
  const publicaciones = 100;
  const seguidores = 500;
  const seguidos = 200;

  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        {/* Foto de perfil */}
        <Image source={fotoPerfil} style={styles.photo} />

        {/* Nombre de usuario */}
        <Text style={styles.username}>{nombre}</Text>

        {/* Estadísticas */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>{publicaciones} publicaciones</Text>
          <Text style={styles.statsText}>{seguidores} seguidores</Text>
          <Text style={styles.statsText}>{seguidos} seguidos</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:'5%',
  },
  profileBox: {
    backgroundColor: '#F0DCD8', // Color café
    padding: 20,
    borderRadius: 30,
    
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Color blanco para el texto
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Color blanco para el texto
  },
});

export default Profile;
