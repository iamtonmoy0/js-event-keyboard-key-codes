const insert = document.getElementById('insert')

window.addEventListener('keydown', (elem) => {
    insert.innerHTML = `
  <div class="key">
            ${elem.key === '' ? 'space' : elem.key}
            <small>event.key</small>
        </div>
        <div class="key">
           ${elem.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key">
           ${elem.code}
            <small>event.code</small>
        </div>`
})