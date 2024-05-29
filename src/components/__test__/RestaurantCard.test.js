import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mockdata/resCardMock.json";
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { withPromptedLabel } from "../RestaurantCard";
it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard {...MOCK_DATA} />);

  const nameRestro = screen.getByText("Chinese Wok");

  expect(nameRestro).toBeInTheDocument();
});
it("should render labelRestaurant card component with props data",() =>{
  const RestaurantCardPromoted = withPromptedLabel(RestaurantCard);
  render(<RestaurantCardPromoted {...MOCK_DATA}/>)
  const nameRestro = screen.getByText("Chinese Wok");

  expect(nameRestro).toBeInTheDocument();
})