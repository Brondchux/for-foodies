import { Grid, Segment, Image } from "semantic-ui-react";
import "./tray.css";

const Tray = () => {
	const semanticImageUrl =
		"https://react.semantic-ui.com/images/wireframe/square-image.png";
	return (
		<Segment as="section" piled secondary padded>
			<Grid columns="equal" divided stackable>
				<Grid.Row>
					<Grid.Column>
						<Image src={semanticImageUrl} fluid circular />
					</Grid.Column>
					<Grid.Column>
						<Image src={semanticImageUrl} fluid circular />
					</Grid.Column>
					<Grid.Column>
						<Image src={semanticImageUrl} fluid circular />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default Tray;
