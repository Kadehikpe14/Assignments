var fs = require('fs');

if (process.argv.length > 3) {
    console.log("Only one arg is read in through the command line");

}else {
    var buffer = fs.readFileSync(process.argv[2]);
    var output = buffer.toString();
    var words = output.split('\r\n');
    
    if (words.length < 3) {
        console.log("The File has less than three lines.");

    } else if (words.length == 3) {
        var jsonOB = { 'fname': words[0], 'lname': words[1], 'location': words[2], 'other': 'N/A' };
        console.log(jsonOB);
        
    } else {
        var str = '';
        for (var i = 3; i < words.length; i++) {
            str = str + words[i] + ' ';
        }
        var jsonOB = { 'fname': words[0], 'lname': words[1], 'location': words[2], 'other': str };
        console.log(jsonOB);
    }
}