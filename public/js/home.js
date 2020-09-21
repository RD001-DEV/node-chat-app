const socket = io()

// Elements
const $roomSelect = document.querySelector("#rooms")
const $roomLab = document.querySelector("#roomLabel")
const $sendJoin = document.querySelector("#sendJoin")

// Templates
const roomTemplate = document.querySelector("#room-template").innerHTML
const roomTemplate2 = document.querySelector("#room-template2").innerHTML

// socket.emit('roomListQuery')
socket.on('roomList', (rooms) => {
    const html = Mustache.render(roomTemplate, {rooms})
    $roomSelect.insertAdjacentHTML('beforeend',html)
})


$sendJoin.addEventListener('click', () => {

    if(!$roomLab.value) {
        $roomLab.value = $roomSelect.value
    }
})