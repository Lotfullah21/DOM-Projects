function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    return `${element} does not exist`;
  }
}

const url = " https://icanhazdadjoke.com/";
const btn = getElement(".btn");
const jokes = getElement(".joke");
console.log(btn, jokes);

btn.addEventListener("click", () => {
  getJoke();
});

const getJoke = async () => {
  // initially put this one as text content
  jokes.textContent = "...Loading";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "just for fun",
      },
    });
    if (!response.ok) {
      // to stop the execution of the code and go to catch block
      throw new Error("some thing went wrong");
    }
    const data = await response.json();
    //once got the data go for this
    jokes.textContent = data.joke;
  } catch (error) {
    jokes.textContent = "... Something bad happened";
    console.log(`this ${error} happened`);
  }
};

getJoke();
