//start console logging to find error

import React from "react";
// import { subscribeToTimer } from "./api";
import { StyleSheet, Text, View } from "react-native";
// import SocketIOClient from "socket.io-client";

export default class App extends React.Component {
  state = {
    // response: false,
    // endpoint: "http://localhost:4001"
  };
  render() {
    const { response } = this.state;
    console.log(response);
    return (
      <View style={styles.container}>
        <Text>This is the response {response.gamename || "no response"}</Text>
      </View>
    );
  }
  componentDidMount() {
    // const { endpoint } = this.state;
    // const socket = SocketIOClient(endpoint);
    // socket.on("FromAPI", data => {
    //   console.log(response);
    //   this.setState({ response: data });
    // });
    const ws = new WebSocket("ws://localhost:4001");
    ws.onopen = () => {
      ws.send("something");
    };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
