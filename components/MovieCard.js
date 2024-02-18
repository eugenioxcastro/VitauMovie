import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MovieDetails", {
          movieData: data,
        });
      }}
      style={styles.container}
    >
      <Image source={{ uri: data?.Poster }} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{data?.Title}</Text>
          <Text style={styles.year}>{data.Year}</Text>
        </View>
        <View></View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginBottom: 28,
  },
  contentContainer: {
    padding: 16,
  },
  image: {
    aspectRatio: 10 / 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  titleText: { marginTop: 6 },
  year: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
