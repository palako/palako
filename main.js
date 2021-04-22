const poem = [
  "Just a note to say...",
  "As you move into a new venture...",
  "May luck and success always be with you!",
  "Palako and Node.JS always in our hearts."
];
const sayGoodbye = async () => {
  const sleep = (millis) => {
    return new Promise(resolve => setTimeout(resolve, millis));
  }
 
  for (let line of poem) {
    console.log(line);
    await sleep(2000);
  }
}
sayGoodbye();
