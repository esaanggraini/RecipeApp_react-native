import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require('../assets/images/profile.jpg')} // Replace with actual image URL or local asset
        style={styles.profileImage}
      />

      {/* User Details */}
      <View style={styles.userDetailsContainer}>
        <Text style={styles.userName}>Esaanggraini</Text>
        <Text style={styles.userEmail}>anggrainiesa2@gmail.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FBF6E9', // Warna latar 
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Membuat gambar bulat
    marginBottom: 20,
  },
  userDetailsContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333', // Warna gelap untuk nama
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#555', // Warna netral untuk email
  },
  actionButtons: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Warna hijau untuk tombol
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  logoutButton: {
    backgroundColor: '#FF5252', // Warna merah untuk logout
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Warna teks putih
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ProfileScreen;