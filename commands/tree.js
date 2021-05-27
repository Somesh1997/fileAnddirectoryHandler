let fs=require('fs');
let path=require('path');
const chalk = require('chalk');
let types={
    media:["mp4","mkv","mp3","m4v"],
    archives:['zip','7z','rar','tar','gz','ar','iso','xz',"msi"],
    documents:['docx','doc','pdf','xlsx','xls','odt','odp','odf','txt','ps','md','gif','png', 
    'jpeg','jpg','html',"js","ejs","java","python","json","dll","map"
 ],
    app:['exe','dmg','pkg','deb']
 };

function treeFn(dirPath){
    if(dirPath==undefined){
        treeHelper(process.cwd(),"");
        console.log("Kindaly Enter the Path ");
        return;
    }
    else {
        let doesExist=fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath,"");
        }
        else{
            console.log("Kindaly Enter the Path "); 
            return;
        }
    }
  }

function treeHelper(dirPath,indent) {
  let isFile=fs.lstatSync(dirPath).isFile();
  if(isFile){
         let fileName= path.basename(dirPath);
         console.log(indent +"├──"+chalk.red(fileName));
  }
  else{ 
         let dirName=path.basename(dirPath);
         console.log(indent+"└──"+chalk.cyan(dirName));
         let childrens= fs.readdirSync(dirPath);
         for (let i = 0; i < childrens.length; i++) {
          let childPath = path.join(dirPath, childrens[i]);
          treeHelper(childPath, indent + "\t");
      }


  }

}


module.exports ={
    treeKey:treeFn
}