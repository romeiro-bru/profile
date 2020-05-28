function loadPage() {
  var date = new Date()
  var hour = date.getHours()
  var greeting = document.querySelector('strong#greeting')

  if (hour >= 4 && hour < 12) {
    greeting.innerHTML = "Good morning"
  } else if (hour >= 12 && hour <18) {
    greeting.innerHTML = "Good afternoon"
  } else {
    greeting.innerHTML = "Good evening"
  }
}
