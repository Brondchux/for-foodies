import { Segment, Header } from "semantic-ui-react";
import Clock from "../components/Clock";
import FoodButton from "../components/FoodButton";
import Tray from "../components/Tray";

const Home = () => {
	return (
		<Segment basic>
			<Header as="h2">
				<Clock />
			</Header>
			<Header as="h3">Which will you like to eat?</Header>
			<Tray></Tray>
			<FoodButton></FoodButton>
		</Segment>
	);
};

export default Home;
