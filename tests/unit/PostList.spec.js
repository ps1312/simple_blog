import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList";

describe('PostList.vue', () => {
  it("should display an empty state message on empty array of posts", () => {
    const wrapper = shallowMount(PostList, {
      propsData: { posts: [] }
    });

    expect(wrapper.text()).toContain("No posts around here 🧐");
  })
})
