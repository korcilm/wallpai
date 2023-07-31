import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTransition, animated } from '@react-spring/native';
import LottieView from 'lottie-react-native';
import { ScrollView, Pressable, View, Text, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import Toast from 'react-native-simple-toast';
import objectPath from 'object-path';
import Favourite from '../assets/images/favourite.png';
import FavouriteAnim from '../assets/lottie/favourite.json';

const { width, height } = Dimensions.get('window');

const ImageSection = ({ sectionTitle,direction, images }) => {
    const navigation = useNavigation();
    const [favAnim, setFavAnim] = useState({ id: null, animate: false });
    const [animSpeed, setAnimSpeed] = useState(1);
    const cardWidth = width * 0.36 + 15; // cardWidth + horizontal-margin
    let totalWidth = 0;

   // {"categoryId": "oXkOUO5G3uSQfMVNAuPS", 
//    "categoryName": "Digital Art",
//     "description": "", 
//     "favouriteOf": {"CVCudU2WO7gvw6MP32Fn0EZm9rN2": true},
//      "id": "winter-night-ge7at",
//       "name": "Winter night",
//        "source": "https://ik.imagekit.io/rzfyfjwfe2s/adorn-walls/digital-art/Winter-Night_2hX1_s_Lz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651295817171",
//         "timestamp": 1651295706768, 
//         "x": 0}
    const pictures = [{
        "id": 1,
        "name": "Winter night",
        "categoryName": "Digital Art",
        "source": "https://e1.pxfuel.com/desktop-wallpaper/590/461/desktop-wallpaper-best-walpaper-by-sahaptanrikulu.jpg",
        "x": 0
    },
    {
        "id": 2,
        "name": "Universe",
        "categoryName": "Universe Space",
        "source": "https://w0.peakpx.com/wallpaper/40/813/HD-wallpaper-walpaper-zedge.jpg",
        "x": 0
    },
    {
        "id": 3,
        "name": "Nature",        
        "categoryName": "Universe Space",
        "source": "https://i.pinimg.com/736x/2b/bf/bd/2bbfbdbfc80226ecb9af283184625ac4.jpg",
        "x": 0
    },
    {
        "id": 4,
        "name": "Flower",        
        "categoryName": "Plants",
        "source": "https://image.winudf.com/v2/image/Y29tLmRpdi5hYnN0cnZpZDEyX3NjcmVlbnNob3RzXzBfYTFlODQwNmM/screen-0.webp?fakeurl=1&type=.webp",
        "x": 0
    },
    {
        "id": 5,
        "title": "Cartoon",        
        "categoryName": "Cartoons",
        "source": "https://e0.pxfuel.com/wallpapers/672/259/desktop-wallpaper-for-iphone-walpaper-iphone-lock-screen-flowers-cute-tropical-flowers-tumblr-thumbnail.jpg",
        "x": 0
    }]

    return (
        <>
            <Text style={[styles.sectionTitle, { marginTop: sectionTitle === 'Trends' ? 0 : 20 }]}>
                {sectionTitle}
            </Text>

            <ScrollView contentContainerStyle={{ marginTop: 7, paddingHorizontal: 12 }} horizontal={direction === 'horizontal' ? true : false } 
            showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
            >
                {pictures.map((obj) => (

                    <Pressable  onPress={() => navigation.navigate('SetWall', obj)}>
                        <Image
                            style={[styles.wallThumbnail,{}]}
                            source={{
                                uri: obj.source,
                            }} />
                        <LottieView
                            source={FavouriteAnim}
                            autoPlay
                            loop={true}
                            speed={animSpeed}
                            style={styles.favouriteAnim}
                            onAnimationFinish={() => { }}
                        />
                    </Pressable>

                ))}
            </ScrollView>

        </>
    );
};


export default ImageSection;

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 22,
        marginHorizontal: 14,
    },
    scrollView: {
        position: 'relative',
        marginTop: 7,
        height: height * 0.24,
    },
    wallThumbnail: {
        position: 'relative',
        borderRadius: 20,
        resizeMode: 'cover',
        width: width * 0.36,
        height: height * 0.24,
        backgroundColor: '#797979',
        marginLeft:5
    },
    favouriteIcon: {
        width: 60,
        height: 60,
        zIndex: 2,
        position: 'absolute',
        alignSelf: 'center',
        bottom: '33%',
    },
    favouriteAnim: {
        width: 123,
        height: 123,
        zIndex: 3,
        position: 'absolute',
        alignSelf: 'center',
        bottom: '9.5%',
    },
});
