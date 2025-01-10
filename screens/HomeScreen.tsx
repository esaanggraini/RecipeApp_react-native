import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type Recipe = {
  id: number;
  title: string;
  description: string;
  image: any;
};
//KODE TAMPILAN HOME
// Definisikan tipe untuk RootStackParamList
type RootStackParamList = {
  RecipeDetail: { recipe: Recipe };
};

// Tipe untuk navigasi di layar ini
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecipeDetail'>;

const recipes: Recipe[] = [
  { id: 1, title: 'Nasi Goreng', description: 'Nasi goreng dengan bumbu spesial', image: require('../assets/images/nasigoreng.jpg') },
  { id: 2, title: 'Sate Ayam', description: 'Sate ayam dengan saus kacang', image: require('../assets/images/sateayam.jpg') },
  { id: 3, title: 'Rendang', description: 'Rendang daging sapi khas Padang', image: require('../assets/images/rendang.jpg') },
  { id: 4, title: 'Rawon', description: 'Rawon daging sapi dengan kuah hitam', image: require('../assets/images/rawon.jpg') },
  { id: 5, title: 'Mie Aceh', description: 'Mie Aceh dengan bumbu rempah khas', image: require('../assets/images/mieaceh.jpg') },
  { id: 6, title: 'Cumi Panggang', description: 'Cumi panggang asam manis', image: require('../assets/images/rendang.jpg') },
  { id: 7, title: 'Gulai Ikan', description: 'Gulai ikan kaya rempah', image: require('../assets/images/gulai_ikan.jpg') },
  { id: 8, title: 'Papeda', description: 'Papeda khas timur indonesia', image: require('../assets/images/papeda.jpg') },
  { id: 9, title: 'Sate lilit bali', description: 'Sate lilit khas bali', image: require('../assets/images/sate_bali.jpg') },
  { id: 10, title: 'Sate ayam', description: 'Sate ayam khas madura', image: require('../assets/images/sateayam.jpg') },
];

export default function HomeScreen() {
  // Gunakan tipe navigasi yang telah didefinisikan
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Find your ide to cook!</Text>
      {recipes.map((recipe) => (
        <TouchableOpacity
          key={recipe.id}
          style={styles.card}
          onPress={() => navigation.navigate('RecipeDetail', { recipe })}
        >
          <Image source={recipe.image} style={styles.image} />
          <View>
            <Text style={styles.title}>{recipe.title}</Text>
            <Text style={styles.description}>{recipe.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5D7', // Warna latar belakang yang lebih lembut
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#8D0B41', // Warna teks yang lebih mencolok
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20, // Sudut yang lebih membulat
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, // Bayangan untuk Android
    padding: 12,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8D0B41', // Warna teks
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: '#', // Warna abu-abu
  },
});

