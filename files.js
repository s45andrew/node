const fs = require('fs');

// fs.readFile('./docs/blogs.txt', (err,data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// })


// console.log('LAST LAST LINE');

// fs.writeFile('./docs/blogs.txt', 'hello , Ninjas', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blogs2.txt', 'hello , people', () => {
//     console.log('file was written');
// // })
// if (!fs.existsSync('./assets')){
    
// fs.mkdir('./assets', (err) => {
//     if (err)
// {  
//   console.log(err);
// }
// console.log('folder created')})
// }
// else
// { fs.rm('./assets',{recursive:true,force:true}, (err) => {
//    if(err) {
//     console.log(err)
//    }
//    console.log('folder deleted')
// })
// }

if (fs.existsSync('./docs/blogs2.txt')){
  fs.unlink('./docs/blogs2.txt', (err) => {
     if (err){
        console.log(err);
    } 
    else {
         console.log('file deleted');
         }
         }); 
    }
