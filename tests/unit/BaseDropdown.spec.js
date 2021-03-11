import { mount } from "@vue/test-utils";
import BaseDropdown from "@/components/BaseDropdown";

describe("BaseDropdown.vue", () => {
  test("displays button with text correctly", () => {
    const buttonTitle = "any button title";
    const sut = makeSUT(buttonTitle);
  
    const button = sut.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toEqual(buttonTitle);
  })
  
  test("dropdown content is visible correctly", async () => {
    const sut = makeSUT();
  
    expect(sut.find(".dropdown-content").exists()).toBe(false);
  
    await simulate(sut, "mouseenter");
    expect(sut.find(".dropdown-content").exists()).toBe(true);
  
    await simulate(sut, "mouseleave");
    expect(sut.find(".dropdown-content").exists()).toBe(false);
  })
  
  test("renders li in the ul slot", async () => {
    const menuItems = `
      <li>test1</li>
      <li>test2</li>
      <li>test3</li>
    `;
    const sut = makeSUT("", menuItems);
  
    await simulate(sut, "mouseenter");
    const list = sut.find(".dropdown-content").findAll("li")
    expect(list.length).toEqual(3);
  })
})


function makeSUT(
  buttonTitle = "default title",
  menuItems = "",
) {
  return mount(BaseDropdown, {
    propsData: {
      buttonTitle
    },
    slots: {
      default: menuItems,
    }
  })
}

async function simulate(element, trigger) {
  await element.trigger(trigger);
}