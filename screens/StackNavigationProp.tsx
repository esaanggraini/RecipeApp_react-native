import React from 'react';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Define the Recipe type
type Recipe = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// Define the navigation parameter list
type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  RecipeDetail: { recipe: Recipe };
};

// Type the navigation prop correctly
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with creamy sauce.',
    image: 'https://example.com/spaghetti-carbonara.jpg',
  },
  {
    id: 2,
    title: 'Margherita Pizza',
    description: 'Simple pizza with fresh tomatoes and basil.',
    image: 'https://example.com/margherita-pizza.jpg',
  },{
    id: 3,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with creamy sauce.',
    image: 'https://example.com/spaghetti-carbonara.jpg',
  },
  {
    id: 4,
    title: 'Margherita Pizza',
    description: 'Simple pizza with fresh tomatoes and basil.',
    image: 'https://example.com/margherita-pizza.jpg',
  },{
    id: 5,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with creamy sauce.',
    image: 'https://example.com/spaghetti-carbonara.jpg',
  },
  {
    id: 6,
    title: 'Margherita Pizza',
    description: 'Simple pizza with fresh tomatoes and basil.',
    image: 'https://example.com/margherita-pizza.jpg',
  },{
    id: 7,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with creamy sauce.',
    image: 'https://example.com/spaghetti-carbonara.jpg',
  },
  {
    id: 8,
    title: 'Margherita Pizza',
    description: 'Simple pizza with fresh tomatoes and basil.',
    image: 'https://example.com/margherita-pizza.jpg',
  },{
    id: 9,
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with creamy sauce.',
    image: 'https://example.com/spaghetti-carbonara.jpg',
  },
  {
    id: 10,
    title: 'Margherita Pizza',
    description: 'Simple pizza with fresh tomatoes and basil.',
    image: 'https://example.com/margherita-pizza.jpg',
  },
  // Add more recipes
];

const HomeScreen = () => {
  // Correctly type the navigation
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Navigate to RecipeDetail screen
  const goToRecipeDetail = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe }); // Pass 'recipe' as a parameter
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToRecipeDetail(item)} style={styles.recipeItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  recipeItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
