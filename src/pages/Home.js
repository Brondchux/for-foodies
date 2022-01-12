import { Segment, Header } from "semantic-ui-react";
import Clock from "../components/Clock";
import Tray from "../components/Tray";

const Home = () => {
	return (
		<Segment basic>
			<Header as="h2">
				<Clock />
			</Header>
			<Header as="h3">Which will you like to eat?</Header>
			<Tray></Tray>
		</Segment>
	);
};

export default Home;
