var fs= require('fs');
var chalk=require('chalk');
var getNote= function(){
    console.log('Notes to be added...');
}
var addNote=function(title, body){
var notes=loadNotes();
var duplicateNotes=notes.find(function(note){
    return note.title===title;
})
if(!duplicateNotes){
    notes.push({ title: title,
        body: body})
    console.log(chalk.green.inverse('NOTE ADDED'));
}
else{
    console.log(chalk.red.inverse('TITLE ALREADY TAKEN'));
}
saveNotes(notes);
}
var loadNotes=function(){
try{
var dataBuff=fs.readFileSync('notes.json');
var dataJSON=dataBuff.toString();
return JSON.parse(dataJSON);
}
catch(e){
    return [];
}
}
var saveNotes=function(notes){
    var dataJS=JSON.stringify(notes);
fs.writeFileSync('notes.json',dataJS);
}
var removeNote = function(title){
    var notes=loadNotes();
    var notesToKeep= notes.filter(function(note){
        return note.title!==title;
    })
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('NOTE REMOVED'));
        saveNotes(notesToKeep);
    }
    else console.log(chalk.red.inverse('NO NOTE FOUND'));
    
}
var listNote=function(){
var notes=loadNotes();
console.log(chalk.inverse('LISTING NOTES:'));
notes.forEach((note)=>console.log(chalk.blue.inverse(''+note.title)));
}
var readNote=function(title,body){
var notes=loadNotes();
var note=notes.find(function(note){
return note.title===title;
});
if(note){
    console.log(chalk.inverse(note.title));
    console.log(note.body);
}
    else{
        console.log(chalk.inverse.red('NOTE NOT FOUND'));
    }
}
module.exports ={
    getNotes: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}