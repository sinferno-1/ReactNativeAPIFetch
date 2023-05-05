import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import axios from "axios";

export const Home = (props) => {
  const [loadeddata, setData] = useState([]);
  const [albumId, setcurrentAlbumId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getAPIData = async () => {
    setIsLoading(true);

    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, {
        params: {
          _limit: 10,
        },
      })
      .then((res) => {

        setData([...loadeddata, ...res.data]);
        console.log("Loaded Data :");
        console.log(loadeddata);
        setIsLoading(false);
      });
  };

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = (e) => {
    console.log("Album Id + called");
    setcurrentAlbumId(albumId + 0.5);
  };

  useEffect(() => {
    getAPIData();
  }, [albumId]);

  return (
    <View>
       
      
      <View>
        <Image style={{height: 180}} source={{ uri: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg' }} />
      </View>
      <View>
        {loadeddata.length ? (
          <FlatList
            style={styles.flat}
            data={loadeddata}
            keyExtractor={(item, id) => String(item.id * Date.now())}
            ItemSeparatorComponent={() => (
              <View style={{ height: 30, marginLeft: 20 }} />
            )}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
                <TouchableOpacity
                  style={styles.touchop}
                  onPress={() =>
                    props.navigation.navigate("Details", {
                      title: item.title,
                      url: item.url,
                    })
                  }
                >
                  <Image
                    source={{ uri: item.thumbnailUrl, borderRadius: 10 }}
                    style={styles.img}
                  ></Image>

                  <Image
                    source={{ uri: item.thumbnailUrl}}
                    style={{height: 4, width:80, marginTop: -120}}
                  ></Image>

                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.txt2}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            onEndReachedThreshold={0.1}
          />
        ) : null}
      </View>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  flat: {
    marginTop: -30,
    paddingTop: 0,
    borderWidth: 0,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 40},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  loader: {
    marginVertical: 16,
    alignItems: "center",
  },

  touchop: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.0,
    borderLeftColor: "gray",
    height: 120,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingRight: 50,
    margin: 10,
  },

  img: {
    padding: 20,
    margin: 0,
    height: 100,
    width: 100,
    resizeMode: "stretch",
    borderRadius: 30,
  },

  txt2: {
    color: "black",
    height: 100,
    fontSize: 15,
    flex: 1,
    flexWrap: "wrap",
    marginRight: 120,
    verticalAlign: "middle",
    marginHorizontal: 10,
    marginLeft: -60,

    flexWrap: 'wrap'
  },
});
