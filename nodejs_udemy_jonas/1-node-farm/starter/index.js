import { readFileSync, writeFileSync } from 'fs'; 
const textin = readFileSync("./txt/input.txt","utf-8"); 
console.log(textin);

const textout = `This is what we know ${textin}.\n Date created ${Date.now()}`; 
writeFileSync("./txt/output.txt",textout); 
