import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "./mockdata/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart"
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("should Load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordianHeader = screen.getByText("Extras (5)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("cart2")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  expect(screen.getByText("Add some items")).toBeInTheDocument();

});
