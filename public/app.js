const bodyElement = document.getElementById('wrapper');
const unit = document.getElementById('unit');
unit.style.backgroundColor = Math.random() < 0.5 ? 'red' : 'green';

//open websocket connection
const ws = new WebSocket('ws://127.0.0.1:2346');

//add event lister
bodyElement.addEventListener('keyup', event => {
    const step = 5;
    let top = unit.style.top ? unit.style.top : 0;
    let left = unit.style.left ? unit.style.left : 0;

    if (event.code == 'ArrowUp') {
        unit.style.top = parseInt(top) - step + 'px';
    } else if (event.code == 'ArrowDown') {
        unit.style.top = parseInt(top) + step + 'px';
    } else if (event.code == 'ArrowLeft') {
        unit.style.left = parseInt(left) - step + 'px';
    } else if (event.code == 'ArrowRight') {
        unit.style.left = parseInt(left) + step + 'px';
    }

    //create object data send
    let positionData = {
        top: unit.style.top,
        left: unit.style.left,
    };
    
    //send data server via websocket connection
    ws.send(JSON.stringify(positionData));
});

//collback method when receiving data from the server
ws.onmessage = response => {
    let positionData = JSON.parse(response.data);
    console.log(positionData);

    //update coordinate element
    unit.style.top = positionData.top;
    unit.style.left = positionData.left;
};

