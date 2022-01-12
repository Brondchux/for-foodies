import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const FoodButton = () => {
	return (
		<Button
			as={Link}
			to={"/new-food"}
			animated="fade"
			size="huge"
			color="black"
		>
			<Button.Content visible>Didn't find the food?</Button.Content>
			<Button.Content hidden>Add new food!</Button.Content>
		</Button>
	);
};

export default FoodButton;
