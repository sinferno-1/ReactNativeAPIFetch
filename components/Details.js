import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Details = (props) => {
  return (
    <ScrollView>
      <ScrollView style={{ marginTop: 30 }}>
        <SafeAreaView>
          <Image
            source={{ uri: props.route.params.url, borderRadius: 10 }}
            style={styles.img2}
          ></Image>
        </SafeAreaView>
      </ScrollView>

      <ScrollView
        style={{
          marginTop: 0,
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text
          style={{
            marginTop: 30,
            textAlign: "center",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderWidth: 0,
            paddingBottom: 40,
            paddingTop: 40,
            marginBottom: 400,
            textAlignVertical: "center",
          }}
        >
          {props.route.params.title}
        </Text>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img2: {
    padding: 50,
    margin: 0,
    height: 300,
    width: 300,
    alignSelf: "center",
  },
});


