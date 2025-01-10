import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function RecipeDetailScreen({ route }: any) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.description}>{recipe.description}</Text>
      <Text style={styles.content}>
      Nasi goreng adalah hidangan ikonik di Indonesia. Berikut adalah resep sederhana nasi goreng biasa yang bisa kamu coba di rumah:

Bahan:
- 2 piring nasi putih (lebih enak jika nasi yang sudah dingin atau sisa kemarin)
- 2 butir telur
- 2 siung bawang putih, cincang halus
- 1/2 buah bawang bombay, cincang halus
- 2-3 sdm kecap manis
- Garam dan merica secukupnya
- Minyak goreng secukupnya
- 1 batang daun bawang, iris tipis (opsional)

Cara membuat:
1. Panaskan sedikit minyak goreng di wajan, lalu tumis bawang putih dan bawang bombay hingga harum.
2. Masukkan telur, orak-arik hingga matang.
3. Tambahkan nasi putih, aduk rata dengan telur dan bumbu tumis.
4. Tambahkan kecap manis, garam, dan merica. Aduk hingga semua bumbu meresap dan nasi berubah warna.
5. Jika suka, tambahkan irisan daun bawang untuk aroma dan rasa tambahan.
6. Angkat dan sajikan nasi goreng panas dengan acar, kerupuk, atau telur mata sapi di atasnya.
{recipe.title} 
Selamat mencoba! 🍳🍚 Ada yang ingin kamu tambahkan atau tanyakan lebih lanjut?
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF7F4', // Latar belakang yang lembut
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#FDBF50', // Warna placeholder jika gambar gagal dimuat
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8D0B41',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#31304D',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    paddingBottom: 4,
  },
  content: {
    fontSize: 16,
    color: '#2A3335',
    lineHeight: 24,
    marginBottom: 16,
  },
});