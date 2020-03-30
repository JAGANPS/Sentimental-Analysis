'use strict';
let rp= require('request-promise');
let options={
      method:'POST',
      uri:'https://us-south.natural-language-understanding.watson.cloud.ibm.com',
      headers:{
      'Authorization':'Basic '+Buffer.from('apikey:IhntbxKPQ6NyUMY6ZjhHCDhbYNuCfVc00ctGm_JevH90').toString('base64'),
      'Content-Type': 'application/json'
      },
      json:true,
      body:{
       'url': 'https://www.ibm.com/us-en/',
      "features": {
     "entities":{
     "emotion":true,
     "sentiment":true,
     "Limit":2
      },
      "keywords":{
      "emotion":true,
      "sentiment":true,
      "limit":2
      }
      }
      }
};
rp(options).then(function(data){
console.log(data);
})
.catch(function(err){
console.log('failed!!!!!');
console.log(err.toString());
});
