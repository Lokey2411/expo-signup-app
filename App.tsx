import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigations/Root";

export default function App() {
	return (
		<NavigationContainer>
			<Root />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
