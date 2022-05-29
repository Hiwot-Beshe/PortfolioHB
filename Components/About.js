import { StyleSheet, View, Text, useWindowDimensions } from "react-native";


export default function About() {

	const { width, height } = useWindowDimensions();
	const widthBreakpoint = 500;

	return (
		<View>
			<Text >
				About
			</Text>
			
		</View>
	);
}
const styles = StyleSheet.create({
	cent: {
		textAlign: "center",
		backgroundColor: "#1a1a1a",
	},
	
});
