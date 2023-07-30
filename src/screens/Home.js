import React, { useEffect } from 'react';

import LottieView from 'lottie-react-native';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
//import { useSelector, useDispatch } from 'react-redux';

import LoadingAnim from '../assets/lottie/loading.json';
import CategorySection from '../components/CategorySection';
import ImageSection from '../components/ImageSection';

const Home = () => {
 
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.appTitle}>WallpAI</Text>
      
        {/* <LottieView source={LoadingAnim} autoPlay loop style={{ marginTop: 25 }} />
    */}
         <ScrollView>
        <ImageSection direction="horizontal" sectionTitle="Trends"/>
           <CategorySection />
          <ImageSection direction="horizontal" sectionTitle="Newest"/> 
        </ScrollView>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 35,
    marginTop: 35,
    marginBottom: 10,
    marginHorizontal: 10,
    color: '#FF5353',
    textAlign:'center'
  },
});
