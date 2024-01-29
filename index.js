const joketxt = document.querySelector(".joke");
const btnSet = document.getElementById("btn");




const apiKey = "dX+5bsT8Ohm1UkiWuEJ0cA==bZz3XNn4ItDe3ed5";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const jokeUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJokes(){
    try {
        joketxt.innerHTML=`Updating...`;
        btnSet.disabled = true;
        btnSet.innerText = "Loading...";
        const response = await fetch(jokeUrl,options);
        const data = await response.json();
        btnSet.disabled = false;
        btnSet.innerText = "Tell me a joke";

        joketxt.innerText=data[0].joke;
    } catch (error) {
        joketxt.innerText = "An error happened, try again later";
    btnSet.disabled = false;
    btnSet.innerText = "Tell me a joke";
    console.log(error);
    }
}

btnSet.addEventListener("click", getJokes);
