let fs=require('fs');
let path=require('path');
let types={
    media:["mp4","mkv","mp3","m4v"],
    archives:['zip','7z','rar','tar','gz','ar','iso','xz',"msi"],
    documents:['docx','doc','pdf','xlsx','xls','odt','odp','odf','txt','ps','md','gif','png', 
    'jpeg','jpg','html',"js","ejs","java","python","json","dll","map"
 ],
    app:['exe','dmg','pkg','deb']
 };
function helpFn(dirPath){
    console.log(`
    List of All the commands :
                   node main.js tree "directoryPath"
                   node main.js organize "directoryPath"
                   node main.js help

    `);


}

module.exports = {
    helpKey:helpFn
}
