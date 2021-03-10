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

function makePost({ id }) {
  return {
    id,
    title: "Test driving a list component in Vue.js.",
    readTimeEstimate: "4 minutes read.",
    publishedAt: new Date("Mar 01 2021"),
    postContentSynopsys: "How to test drive a list component",
  }
}

export const markdown = start + codeBlock + end;
export const posts = [makePost({ id: 1 }), makePost({ id: 2 })];