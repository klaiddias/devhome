//Name of the File : image-resize-sharp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const _PATH_SOURCE = path.normalize('./assets/images_orig/');
const _PATH_DEST_POST = path.normalize('./assets/images/');

fs.readdir(_PATH_SOURCE, (err, files)=> {
    if (err) throw err;
    let newName;
    let oldName;
    files.forEach((fname) => {
        newName = path.join(_PATH_DEST_POST, fname);
        oldName = path.join(_PATH_SOURCE, fname);

        resize({w: 802, h: 500, newFileName: newName, oldFileName: oldName});
        // resize({w: 802, h: 500,  pathDest: _PATH_DEST_POST, newFileName: newName, oldFileName: oldName})
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((e) =>{
        //         console.log(e);
        //     });


    });
});


function resize(fileType) {
    // return new Promise ((resolve, reject) => {
    //     fs.exists(fileType.newFileName, (file_exist) => {
    //         if (file_exist) 
    //             resolve(`${fileType.newFileName} - exist.`);
    //         else
    //             reject(`${fileType.newFileName} - no exist.`);
    //     })
    // });

    
    fs.readFile(path.normalize(fileType.newFileName), (not_found, data) => {
        if (not_found) {
            resizeFile(fileType)
                .then((data) => { console.log(data);})
                .catch(function (err) { console.log(err); });
        } else {
            console.log(`file exist: ${fileType.newFileName};`);
        }
    });
    
}

// function mountAllFilePaths(pathSouce, fileName, fileType) {
//     fileType.newFileName = path.join(fileType.pathDest, fileName);
//     fileType.oldFileName = path.join(pathSouce, fileName);
// }
//http://sharp.pixelplumbing.com/en/stable/api-resize/#examples
const resizeFile = function (fileType) {
    return new Promise ((resolve, reject) => {
        //resolve(`${oldFile}\n${newFile}`);
        sharp(fileType.oldFileName)
            .resize(fileType.w, fileType.h, {
                fit: sharp.fit.fill
                })
            .toBuffer()
            .then( data => {
                fs.writeFileSync(fileType.newFileName, data);
                resolve(`File resized sucess.[${fileType.newFileName}]`);
            })
            .catch( err => {
                reject(`Error to resize the file [${fileType.oldFileName}] (${err})`);
     });
  
        
    });
};


