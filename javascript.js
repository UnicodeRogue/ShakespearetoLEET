const button = document.querySelector(".start_button");
const inputText = document.querySelector(".input__text");
const outputText = document.querySelector(".output__text");
const outputText2 = document.querySelector(".output__text2");

const urlServer1 = "https://api.funtranslations.com/translate/shakespeare.json";
const urlServer2 = "https://api.funtranslations.com/translate/us2uk.json";

function getUrl1(text) {
  return urlServer1 + "?text=" + text;
}

function getUrl2(text) {
  return urlServer2 + "?text=" + text;
}

function handleClick() {
  //getting input
  const input = inputText.value;

  //processinng input for first translation
  fetch(getUrl1(input))
    .then((res) => res.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    });
}

  //second translation 
  fetch(getUrl2(input))
    .then((res) => res.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    });
}

button.addEventListener("click", handleClick);
