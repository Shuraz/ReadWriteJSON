const jsonfile = require("jsonfile");
const randomstring = require("randomstring");
const got = require("got");

const inputFile = "input1.json";
const inputURL = "https://jsonplaceholder.typicode.com/posts/1";
const outputFile = "output1.json";

var output = {}
console.log("loading input json from url", inputURL);
got(inputURL).then(response => {
  console.log("loaded input url content", response.body);
  output.post = response.body;
  console.log("loading input file", inputFile);
  jsonfile.readFile(inputFile, function(err, body){
    console.log("loaded input file content", body);
    output.document = body;
    console.log("generating 10 pieces of 20 character nonsense");
    output.nonsense = [];
    for (var i=0; i<10; i++) {
      output.nonsense.push(randomstring.generate(20));
    }
    console.log("generated nonsense", output.nonsense);
    console.log("saving output file formatted with 2 space indenting");
    jsonfile.writeFile(outputFile, output, {spaces: 2}, function(err) {
      console.log("All done!");
    });
  });
}).catch(err => {
  console.log(err)
})