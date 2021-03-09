import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe('PostListItem.vue', () => {
  it("should display post attributes", () => {
    const post = {
      title: "Test driving a list component in Vue.js.",
      readTimeEstimate: "4 minutes read.",
      publishedAt: new Date("Mar 01 2021"),
      postContentSynopsys: "How to test drive a list component",
    };

    const wrapper = shallowMount(PostListItem, {
      propsData: {
        post,
      }
    });

    expect(wrapper.text()).toContain(post.title);
    expect(wrapper.text()).toContain(post.readTimeEstimate);
    expect(wrapper.text()).toContain("Published on Mar 01, 2021");
    expect(wrapper.text()).toContain(post.postContentSynopsys);
  })

  it("should display formatted date", async () => {
    const post = {
      title: "Test driving a list component in Vue.js.",
      readTimeEstimate: "4 minutes read.",
      publishedAt: new Date("Mar 01 2021"),
      postContentSynopsys: "How to test drive a list component",
    };

    const wrapper = shallowMount(PostListItem, {
      propsData: { post },
    });

    expect(wrapper.vm.formattedDate).toBe("Mar 01, 2021");

    await wrapper.setProps({ post: { ...post, publishedAt: new Date("Jun 30 2020") } });
    expect(wrapper.vm.formattedDate).toBe("Jun 30, 2020");

    await wrapper.setProps({ post: { ...post, publishedAt: new Date("Feb 15 2005") } });
    expect(wrapper.vm.formattedDate).toBe("Feb 15, 2005");
  });
});
