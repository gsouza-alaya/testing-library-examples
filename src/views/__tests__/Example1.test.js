import { shallowMount } from "@vue/test-utils";
import Example1 from "../Example1.vue";

describe("test example1", () => {
  it("test successful login", async () => {
    const wrapper = shallowMount(Example1);
    const loginInput = wrapper.find("#login");
    await loginInput.setValue("login");
    await wrapper.vm.$nextTick();

    const passInput = wrapper.find("#password");
    await passInput.setValue("password");

    wrapper.vm.doLogin();
    await wrapper.vm.$nextTick();

    expect(wrapper.get(".success-msg")).toBeDefined();
  });

  it("test failed login", async () => {
    const wrapper = shallowMount(Example1);
    const loginInput = wrapper.find("#login");
    await loginInput.setValue("login2");
    await wrapper.vm.$nextTick();

    const passInput = wrapper.find("#password");
    await passInput.setValue("password2");

    wrapper.vm.doLogin();
    await wrapper.vm.$nextTick();

    expect(wrapper.get(".error-msg")).toBeDefined();
  });
});
