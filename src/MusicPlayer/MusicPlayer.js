import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import songs from "../../model/Data";
// import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const MusicPlayer = () => {
  const renderSongs = ({ item, index }) => {
    return (
      <View style={style.mainImageWrapper}>
        <View style={[style.imageWrapper, style.elevation]}>
          <Image source={item.artwork} style={style.musicImage} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.maincontainer}>
        {/* image */}
        <FlatList
          renderItem={renderSongs}
          data={songs}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={() => {}}
        />

        {/* Song Content */}
        <View>
          <Text style={[style.songContent, style.songTitle]}>Some Title</Text>
          <Text style={[style.songContent, style.songArtist]}>
            Some Artist Name
          </Text>
        </View>
        {/* slider */}
        <View>
          <Slider
            style={style.progressBar}
            minimumValue={0}
            maximumValue={1}
            thumbTintColor="#00FFF"
            minimumTrackTintColor="#00FFF"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => {}}
          />
          {/*music progress durations  */}
          <View style={style.progressLevelDuration}>
            <Text style={style.progressLabelText}>00:00</Text>
            <Text style={style.progressLabelText}>00:00</Text>
          </View>
        </View>
        {/* music controls */}
        <View style={style.musicControlsContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-back-outline" size={35} color="#00FFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="pause-circle" size={75} color="#00FFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-skip-forward-outline"
              size={32}
              color="#00FFFF"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.bottomContainer}>
        <View style={style.bottomIconWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={32} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={32} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={32} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={32}
              color="#888888"
            />
            {/* <Entypo name="dots-three-horizontal" size={32} color="#888888" /> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MusicPlayer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    width: width,
    alignItems: "center",
    paddingVertical: 15,
    borderTopColor: "#393E46",
    borderWidth: 1,
  },
  bottomIconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  mainImageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems:'center'
  },
  imageWrapper: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginTop: 25,
  },
  musicImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  elevation: {
    shadowColor: "#ccc",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: "center",
    color: "#EEEEEE",
  },
  songTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  songArtist: {
    fontSize: 16,
    fontWeight: "300",
  },
  progressBar: {
    minWidth: 300,
    maxWidth: 350,
    height: 40,
    marginTop: 0,
    flexDirection: "row",
  },
  progressLevelDuration: {
    minWidth: 290,
    maxWidth: 340,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLabelText: {
    color: "#fff",
    fontWeight: "500",
  },
  musicControlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
});
