import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../../requests/index";
import MovieCard from "../../components/MovieCard";

const Home = () => {
  const ombd = "http://www.omdbapi.com/?apikey=d4a62f3&page=1&s=";
  const [movie, setMovie] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(ombd + movie)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => console.error(error));
  }, [movie]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>VITAU MOVIES</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(movie) => setMovie(movie)}
          placeholder="Busca una pelicula..."
        />
      </View>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View>
            <MovieCard data={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1AABFF",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    margin: 12,
  },
  title: {
    backgroundColor: "#1AABFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    fontWeight: "bold",
  },
  textInput: {
    padding: 10,
    width: "60%",
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
});

export default Home;
