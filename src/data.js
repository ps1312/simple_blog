const start = `
# Creating a blog with Vue

### First you'll need a component to display markdown 📄

Here is an example of some code
`

const codeBlock = " ```javascript\nfunction print(string) {\nconsole.log(string)\n}\nprint('test')\n``` "

const end = `
### It should also display images from url links 🏞
![Image placeholder](https://via.placeholder.com/700x300)

### And some lists and links
Vue: 
- [Vue.js official documentation](https://helloacm.com)
- [Coding For Speed](https://codingforspeed.com)
`

const post1 = {
  id: 1,
  title: "Test driving a list component in Vue.js.",
  readTimeEstimate: "4 minutes read.",
  publishedAt: new Date("Mar 01 2021"),
  postContentSynopsys: "I need to create a Vue.js component that displays a series of Post objects with certain informations. This is how i did it.",
}

const post2 = {
  id: 2,
  title: "Build A Vue.js Markdown Renderer Component.",
  readTimeEstimate: "4 minutes read.",
  publishedAt: new Date("Mar 01 2021"),
  postContentSynopsys: "How I’ve created a component in Vue to compile and render my saved posts in HTML.",
}

export const markdown = start + codeBlock + end;
export const posts = [post1, post2];