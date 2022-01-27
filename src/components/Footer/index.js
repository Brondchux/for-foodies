import moment from "moment";
import { Container, Divider } from "semantic-ui-react";
const Footer = () => {
	return (
		<Container textAlign="center">
			<Divider />
			<p>
				Progressive developments by Gospel n Friends! &copy; Copyright{" "}
				{moment(Date.now()).format("YYYY")}
			</p>
			<Divider />
		</Container>
	);
};
export default Footer;
