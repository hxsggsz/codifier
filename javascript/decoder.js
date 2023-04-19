let text

function decode(str) {
  const vowels = /[aeiou]/gi;

  const decoder = str.replace(vowels, function (vowel) {
    switch (vowel) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
    }
  })

  return decoder
}

function uncode(str) {
  const vowels = /(ai|enter|imes|ober|ufat)/gi

  const uncoder = str.replace(vowels, function (vowel) {
    switch (vowel) {
      case "ai":
        return "a";
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ober":
        return "o";
      case "ufat":
        return "u";
    }
  })

  return uncoder
}

let input = document.querySelector("#input")
let coder = document.querySelector("#coder")
let uncoder = document.querySelector("#uncoder")

coder.addEventListener("click", () => {
  text = document.querySelector("#text")
  text.textContent = decode(input.value)
  text.textContent !== "" ? document.getElementById("empty").style.display = "none" : document.getElementById("empty").style.display = "block"
})

uncoder.addEventListener("click", () => {
  text = document.querySelector("#text")
  text.textContent = uncode(input.value)

  text.textContent !== "" ? document.getElementById("empty").style.display = "none" : document.getElementById("empty").style.display = "block"
})