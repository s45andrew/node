const fs =require('fs');

const readstream = fs.createReadStream('./docs/blogs3.txt',{encoding: 'utf8'});

const writeStream = fs.createWriteStream('./docs/blogs4.txt');

// readstream.on('data', (chunk) => {
//     console.log('-----------new CHUNK-------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

readstream.pipe(writeStream);