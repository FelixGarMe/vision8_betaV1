import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const imagesData = [
  { id: '1', source: require('../assets/Photos/A.jpeg') },
  { id: '2', source: require('../assets/Photos/B.jpg') },
  { id: '3', source: require('../assets/Photos/C.jpeg') },
  { id: '4', source: require('../assets/Photos/D.jpg') },
  // Agrega más imágenes según sea necesario
];

const Photos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={imagesData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:'8%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 70,
    width: 340,
    height: 600,
    marginHorizontal: 10,
  },
});

export default Photos;
