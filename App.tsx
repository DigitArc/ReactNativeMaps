import React from "react";
import * as Font from "expo-font";
import MapScreen from "./screens/MapScreen";

const App = () => {
  const [appLoaded, setAppLoaded] = React.useState(false);
  React.useEffect(() => {
    Font.loadAsync({
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Mono": require("./assets/fonts/RobotoMono-Regular.ttf")
    }).then(() => setAppLoaded(true));
  }, []);

  return appLoaded && <MapScreen />;
};

export default App;
