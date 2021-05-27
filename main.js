#!/usr/bin/env node
let inputArr=process.argv.slice(2);
console.log(inputArr);

let fs=require('fs');
let path=require('path');
let helpObj=require('./commands/help');
let orgObj = require('./commands/oraganize');

let treeObj = require('./commands/tree');
// node main.js tree "directoryPath",
// node main.js organize "directoryPath",
// node main.js help

let command=inputArr[0];

let types={
    media:["mp4","mkv","mp3","m4v"],
    archives:['zip','7z','rar','tar','gz','ar','iso','xz',"msi"],
    documents:['docx','doc','pdf','xlsx','xls','odt','odp','odf','txt','ps','md','gif','png', 
    'jpeg','jpg','html',"js","ejs","java","python","json","dll","map"
 ],
    app:['exe','dmg','pkg','deb']
 };
 

switch(command){

    case "tree":
        {
            treeObj.treeKey(inputArr[1]);
           break;
        }
    case "organize":
        {
            orgObj.oragnizeKey(inputArr[1]);
           break;
        }
    case "help":
        {
            helpObj.helpKey(inputArr[1]);
           break;
        }
    default:
        {
            console.log("Please 🙏 Input Right Command");
            break;
        }
}

 
    




