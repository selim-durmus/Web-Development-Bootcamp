// console.log("hello from args file");
// console.log(process.argv);

const args = process.argv.slice(2);

for (let arg of args) {
  console.log(`hi from ${arg}`);
}
