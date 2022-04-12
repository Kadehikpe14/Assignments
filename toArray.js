var args = process.argv.splice(2);

args.forEach(function(data){
    console.log(data);
});
console.log("The length of the Array is: " + args.length);

if(args.length == 0){
console.log("There is nothing in this array.");

}

