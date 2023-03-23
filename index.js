const {EventHandler} = require('./models/EventHandler');
const {Create,ConcatFiles, ReadFile} = require('./functions');

const Main = () => {

    let myEventHandler = new EventHandler();

    myEventHandler.on('event', ReadFile);

    setTimeout(() => {
        myEventHandler.emit('event', 'Event Was Show Up');
    }, 1000 * 3)


    for (let i = 1; i <= 5; i++) {
        Create(i, `This is Line Number ${i}`);
    }
    ConcatFiles();

}

Main();