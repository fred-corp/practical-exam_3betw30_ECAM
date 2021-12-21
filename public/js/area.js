const container = document.getElementById('area_text')

document.getElementById('compute-area').addEventListener('click', function () { computeArea() })

function computeArea () {
  container.innerHTML = 'Surface : ' + document.getElementById('length').value * document.getElementById('width').value
}
