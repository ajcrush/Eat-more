import { fireEvent, render , screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with logout btn", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Assertion
  const logoutButton = screen.getByRole("button",{name:"Logout"});
  // const logoutButton = screen.getByText("Logout");

  expect(logoutButton).toBeInTheDocument();
});
// it("Should render header component cart item with 0", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   // Assertion
//   const cartItems = screen.getByText("0cart");
//   // const logoutButton = screen.getByText("Logout");

//   expect(cartItems).toBeInTheDocument();
// });
// it("Should render header component cart item with 0", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   // Assertion
//   //You can use regex as well
//   const cartItems = screen.getByText(/cart/);
//   // const logoutButton = screen.getByText("Logout");

//   expect(cartItems).toBeInTheDocument();
// });
it("Should change logout button to login on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Assertion

  const logoutButton = screen.getByRole("button",{name : "Logout"});

  fireEvent.click(logoutButton);

  const loginButton = screen.getByRole("button",{name:"Login"})
 

  expect(loginButton).toBeInTheDocument();
});
