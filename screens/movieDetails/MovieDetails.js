import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const MovieDetails = ({ route }) => {
  const movieData = route.params.movieData;
  console.log(movieData);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: movieData.Poster }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.movieInformation}>
        <Text style={styles.title}>{movieData.Title}</Text>
        <Text style={styles.year}>Year: {movieData.Year}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AABFF",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#022F4B",
    textAlign: "center",
  },
  image: {
    width: "80%",
    height: "60%",
    margin: 32,
    borderRadius: 44,
  },
  movieInformation: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F8FF",
    borderRadius: 12,
    margin: 8,
    padding: 8,
  },
  year: {},
});

export default MovieDetails;
