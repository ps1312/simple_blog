import { mount } from "@vue/test-utils";
import BaseDropdown from "@/components/BaseDropdown";

describe("BaseDropdown.vue", () => {
  test("dropdown content is visible correctly", async () => {
    const sut = makeSUT();
  
    expect(sut.vm.visible).toBe(false);
  
    await simulate(sut, "mouseenter");
    expect(sut.vm.visible).toBe(true);
  
    await simulate(sut, "mouseleave");
    expect(sut.vm.visible).toBe(false);
  })
})


function makeSUT(buttonTitle = "default title") {
  return mount(BaseDropdown, {
    propsData: {
      buttonTitle
    },
  })
}

async function simulate(element, trigger) {
  await element.trigger(trigger);
}