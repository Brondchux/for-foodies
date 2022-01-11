import { Segment, Grid } from "semantic-ui-react";
import Logo from "../Logo";
import Navbar from "../Navbar";
const Header = () => {
	return (
		<Segment>
			<Grid container stackable doubling columns={2}>
				<Grid.Column>
					<Logo></Logo>
				</Grid.Column>
				<Grid.Column>
					<Navbar></Navbar>
				</Grid.Column>
			</Grid>
		</Segment>
	);
};
export default Header;
