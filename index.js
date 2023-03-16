const {
    Create,
    ConcatFiles
} = require('./functions');

const Main = () => {
    for (let i = 1; i <= 5; i++) {
        Create(i, `This is Line Number ${i}`);
    }
    ConcatFiles();

}

Main();