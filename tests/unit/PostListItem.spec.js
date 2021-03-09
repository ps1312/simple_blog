import { shallowMount } from "@vue/test-utils";
import PostListItem from "@/components/PostListItem";

describe('PostListItem.vue', () => {
  it("should display post attributes", () => {
    const post = makePost();
    const wrapper = createComponent(post);

    expect(wrapper.text()).toContain(post.title);
    expect(wrapper.text()).toContain(post.readTimeEstimate);
    expect(wrapper.text()).toContain("Published on Mar 01, 2021");
    expect(wrapper.text()).toContain(post.postContentSynopsys);
  })

  it("should display formatted date", async () => {
    await assertFormattedDate({ newDate: new Date("Mar 01 2021"), expectedDate: "Mar 01, 2021" });
    await assertFormattedDate({ newDate: new Date("Jun 30 2020"), expectedDate: "Jun 30, 2020" });
    await assertFormattedDate({ newDate: new Date("Feb 15 2005"), expectedDate: "Feb 15, 2005" });
  });

  it("should render an anchor tag with href set correctly by post.id", async () => {
    await assertLinkUrl({ id: 1, expectedUrl: "/post/1"});
    await assertLinkUrl({ id: 5, expectedUrl: "/post/5"});
    await assertLinkUrl({ id: 999, expectedUrl: "/post/999"});
  });
});

async function assertLinkUrl({ id, expectedUrl }) {
  const post = makePost();
  const wrapper = createComponent(post);

  await wrapper.setProps({ post: { ...post, id } });
  expect(wrapper.find("a").attributes().href).toEqual(expectedUrl);
}

async function assertFormattedDate({ newDate, expectedDate }) {
  const post = makePost();
  const wrapper = createComponent(post);

  await wrapper.setProps({ post: { ...post, publishedAt: newDate } });
  expect(wrapper.vm.formattedDate).toBe(expectedDate);
}

function makePost() {
  return {
    id: 1,
    title: "Test driving a list component in Vue.js.",
    readTimeEstimate: "4 minutes read.",
    publishedAt: new Date("Mar 01 2021"),
    postContentSynopsys: "How to test drive a list component",
  }
}

function createComponent(post) {
  return shallowMount(PostListItem, {
    propsData: { post },
  });
}