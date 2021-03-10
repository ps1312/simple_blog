import { shallowMount } from "@vue/test-utils";
import PostList from "@/components/PostList";
import PostListItem from "@/components/PostListItem";

describe('PostList.vue', () => {
  it("should display an empty state message on empty array of posts", () => {
    const wrapper = shallowMount(PostList, {
      propsData: { posts: [] }
    });

    expect(wrapper.text()).toContain("No posts around here 🧐");
  })

  it("should display correct number os PostListItem", () => {
    const fakePosts = [makePost({ id: 1 }), makePost({ id: 2 })];
    const wrapper = shallowMount(PostList, {
      propsData: { posts: fakePosts },
    });
    const itemsWrapper = wrapper.findAllComponents(PostListItem);

    expect(itemsWrapper.length).toEqual(2);
    itemsWrapper.wrappers.forEach((item, index) => {
      expect(item.vm.post).toStrictEqual(fakePosts[index])
    });
  });
})

function makePost({ id }) {
  return {
    id,
    title: "Test driving a list component in Vue.js.",
    readTimeEstimate: "4 minutes read.",
    publishedAt: new Date("Mar 01 2021"),
    postContentSynopsys: "How to test drive a list component",
  }
}