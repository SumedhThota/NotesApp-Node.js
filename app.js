var chalk= require('chalk');
var notes=require('./notes.js');
var yargs=require('yargs');
const { argv } = require('yargs');
yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'Add notes',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe: 'Description on Notes',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title,argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove notes',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }},
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})
yargs.command({
    command: 'list',
    describe: 'List notes',
    builder:{
        title:{
            describe: 'Note title',
            type: 'string'
        }},
    handler: function (argv){
        notes.listNote();
    }
})
yargs.command({
    command: 'read',
    describe: 'read notes',
    title:{
        describe: 'Note title',
        demandOption:true,
        type: 'string'
    },
    handler: function (argv){
        notes.readNote(argv.title,argv.body);
    }
})
yargs.parse();
