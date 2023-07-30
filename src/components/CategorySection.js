import React from 'react';

import { useNavigation } from '@react-navigation/native';
 import objectPath from 'object-path';
import { ScrollView, Text, View, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
// import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');

const CategorySection = () => {
 //const categories = useSelector((state) => objectPath.get(state, 'image.categories', []));
const categories = [  {    
    "id": 1,
    "title": "Art",
    "url": "https://e1.pxfuel.com/desktop-wallpaper/590/461/desktop-wallpaper-best-walpaper-by-sahaptanrikulu.jpg",
    "thumbnailUrl": "http://via.placeholder.com/150/92c952"
  },
  {    
    "id": 2,
    "title": "Universe",
    "url": "https://w0.peakpx.com/wallpaper/40/813/HD-wallpaper-walpaper-zedge.jpg",
    "thumbnailUrl": "http://via.placeholder.com/150/771796"
  },
  {    
    "id": 3,
    "title": "Nature",
    "url": "https://i.pinimg.com/736x/2b/bf/bd/2bbfbdbfc80226ecb9af283184625ac4.jpg",
    "thumbnailUrl": "http://via.placeholder.com/150/24f355"
  },
  {    
    "id": 4,
    "title": "Flower",
    "url": "https://image.winudf.com/v2/image/Y29tLmRpdi5hYnN0cnZpZDEyX3NjcmVlbnNob3RzXzBfYTFlODQwNmM/screen-0.webp?fakeurl=1&type=.webp",
    "thumbnailUrl": "http://via.placeholder.com/150/d32776"
  },
  {    
    "id": 5,
    "title": "Cartoon",
    "url": "https://e0.pxfuel.com/wallpapers/672/259/desktop-wallpaper-for-iphone-walpaper-iphone-lock-screen-flowers-cute-tropical-flowers-tumblr-thumbnail.jpg",
    "thumbnailUrl": "http://via.placeholder.com/150/f66b97"
  }]
      
const navigation = useNavigation();

  return (
    <>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView contentContainerStyle={{ marginTop: 7, paddingHorizontal: 12 }} horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((obj) => ( 
          <Pressable onPress={() =>  navigation.navigate('Category', obj)} key={obj.id}>
            <Image
              style={styles.catThumbnail}
              source={{
                uri: obj.url,
              }}
            />
            <Text style={styles.catTitle}>{obj.title}</Text>
            <View style={styles.overlay} />
          </Pressable>
       
        ))} 
      </ScrollView>
    </>
  );
};

export default CategorySection;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    marginHorizontal: 14,
    marginTop: 20,
  },
  catTitle: {
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    zIndex: 2,
    width: width * 0.4,
    textAlign: 'center',
    top: '40%',
  },
  catThumbnail: {
    position: 'relative',
    height: height * 0.13,
    width: width * 0.4,
    borderRadius: 20,
    marginRight: 15,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    height: height * 0.13,
    width: width * 0.4,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
