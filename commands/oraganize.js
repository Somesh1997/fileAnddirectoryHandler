let types={
    media:["mp4","mkv","mp3","m4v"],
    archives:['zip','7z','rar','tar','gz','ar','iso','xz',"msi"],
    documents:['docx','doc','pdf','xlsx','xls','odt','odp','odf','txt','ps','md','gif','png', 
    'jpeg','jpg','html',"js","ejs","java","python","json","dll","map"
 ],
    app:['exe','dmg','pkg','deb']
 };

function oragnizeFn(dirPath){
    // 1. input -> directory path given
    let destPath;
    if(dirPath==undefined){
        destPath=process.cwd();
        return;
    }
    else{ 
        
        let doesExist=fs.existsSync(dirPath); 
        if(doesExist){
              destPath=path.join(dirPath,"organized_files");
              if(fs.existsSync(destPath)==false){
                 fs.mkdirSync(destPath);
              }
          
        }
        else{ 
            console.log("Kindly Enter the correct Path");
        }
    }
     organizeHelper(dirPath,destPath);
    // 2. create -> oragnized_files ->directory 
 
 
 
    // 3. identitifies categories of all the files present in that input directory 
    // 4. copy / cut files to that organized directory inside of any of category folder
 
 
 
 }
 
 function organizeHelper(src,dest){
 
     let childNames=fs.readdirSync(src);
    // console.table(childNames);
 
    for(let i=0;i<childNames.length;i++){
        let childAddress = path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            let category = getCategory(childNames[i]);
            console.log(childNames[i]," belongs to this category ====>>>> ",category);
            sendFile(childAddress,dest,category);
         }
    }
 
 }
 
 function sendFile(srcFilePath, dest , category){
 
     let categoryPath = path.join(dest,category);
     if(fs.existsSync(categoryPath)==false){
         fs.mkdirSync(categoryPath);
     }
     let fileName = path.basename(srcFilePath);
     let destFilePath = path.join(categoryPath,fileName);
     fs.copyFileSync(srcFilePath, destFilePath);
     fs.unlinkSync(srcFilePath);
     console.log(fileName , "copied to ", category);
 }
 
 function getCategory(childName)
 {
     let MediaCategory;
     let exten=childName.split(".");
    // console.log(exten[exten.length-1]);
     for(let key in types){  
         let k = types[key];
         if(k.includes(exten[exten.length-1])){
            // console.log(key);
             MediaCategory=key;
             return MediaCategory;
         }
     }
     return "others";
 }

 module.exports={
     oragnizeKey:oragnizeFn
 }