let toggle = document.querySelector('.toggle')
let body = document.querySelector('body')

function toggleTheme() {
  body.classList.toggle('darkmode')

  if (body.classList.contains('darkmode')) {
    document.getElementById('moon').style.display = "none"
    document.getElementById('sun').style.display = "block"
  } else {
    document.getElementById('moon').style.display = "block"
    document.getElementById('sun').style.display = "none"
  }
}

toggle.addEventListener('click', toggleTheme)