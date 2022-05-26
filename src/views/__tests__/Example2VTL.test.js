import { screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/vue";
import Example2 from "../Example2.vue";

describe("test example2", () => {
  it("test successful login", async () => {
    render(Example2);
    const user = userEvent.setup();
    const loginInput = await screen.findByLabelText("Login");
    await user.type(loginInput, "login");

    const passInput = await screen.findByLabelText("Password");
    await user.type(passInput, "password");

    await user.click(await screen.findByRole("button", { name: "Login" }));
    await screen.findByText("Login Succeed");
  });

  it("test failed login", async () => {
    render(Example2);
    const user = userEvent.setup();
    const loginInput = await screen.findByLabelText("Login");
    await user.type(loginInput, "foo");

    const passInput = await screen.findByLabelText("Password");
    await user.type(passInput, "bar");

    await user.click(await screen.findByRole("button", { name: "Login" }));
    await screen.findByText("Login Failed");
  });
});
