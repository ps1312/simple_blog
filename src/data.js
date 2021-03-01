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

export default start + codeBlock + end;