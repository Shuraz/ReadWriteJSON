const jsonfile = require("jsonfile");
const inputFile = "input2.json";
const randomstring = require("randomstring");
const outputFile = "output2.json";

const s1="test";
var output = {};
console.log("loading input2.json file", inputFile);
jsonfile.readFile(inputFile, function(err, body){
     console.log("loaded input2.json file content", body);
     output= body;
     output.emails = [];

    console.log(" **** For each name, reverse it, append 5 random characters plus \"@gmail.com\". ****");
    
    output.names.forEach(email => {
        output.emails.push(`${reverseString(email)}${randomstring.generate(5)}@gmail.com`);
        // debugger;
    });
    console.log("generated fake emails", output.emails);
    console.log("saving output2.json");
    jsonfile.writeFile(outputFile, output.emails, function(err) {
        console.log("All done!");
    });

});

function reverseString(str) {
    //Empty string to store reverse string

    // Note
    // My implementation is old school because of question however you can achieve the same result with one line code to reduce the processing time
    // return str.split("").reverse().join("");  
    // above is using build in functon
    
    let reverse  = "";
    const stringL = str.length - 1;
    for (let i = stringL; i >= 0; i--) {
        reverse += str[i];
        // we can use string template as well
    }
    return reverse;
}
