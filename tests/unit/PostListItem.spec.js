import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe('PostListItem.vue', () => {
  it("should display post title", () => {
    const post = {
      title: "Fake post",
    };
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        post,
      }
    });
    
    expect(wrapper.text()).toContain(post.title);
  })
});
