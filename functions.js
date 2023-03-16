const fs = require('fs/promises');
const path = require('path');


// create func
const Create = async (n, text) => {
    await fs.writeFile(path.join(__dirname, 'files', `file${n}.txt`), `${text}`);
}


// read func
const Read = async (n) => {
    let data = await fs.readFile(path.join(__dirname, 'files', `file${n}.txt`));
    return data.toString();
}

// get random num func
const GetRandNumber = () => {
    return randomNumber = Math.floor(Math.random() * 5) + 1;
}

// concatFiles func
const ConcatFiles = async () => {
    await fs.unlink(path.join(__dirname, 'files', 'concatTextFile.txt'));
    let num = GetRandNumber();
    for (let i = 1; i <= num; i++) {
        const data = await Read(i);
        fs.appendFile(path.join(__dirname, 'files', 'stringtxt.txt'), `\n${data}`)
    }
    await fs.rename(path.join(__dirname, 'files', 'stringtxt.txt'), path.join(__dirname, 'files', 'concatTextFile.txt'));
}


module.exports = {
    Create,
    ConcatFiles
};