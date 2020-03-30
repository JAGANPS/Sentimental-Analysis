'use strict';


const Sentiment=require('sentiment');
const sentiment=new Sentiment();
let text='I love you';
let result=sentiment.analyze(text);
console.log(text);
console.log(result);
