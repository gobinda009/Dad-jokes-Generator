const joketxt = document.querySelector(".joke");
const btnSet = document.getElementById("btn");




const apiKey = "I3wNaF0XUdgBsSTbXYF1RKhL42u9VaGM84MHmVcT";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const jokeUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

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
