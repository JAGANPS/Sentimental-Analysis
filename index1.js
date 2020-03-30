'use strict';

quickstart();
async function quickstart(){
    const language=require('@google-cloud/language');
    const client=new language.LanguageServiceClient();
    const text='i love to eat food but i hate junk foods ';
    const document={
        content: text,
        type:'PLAIN_TEXT',
    };
    const[result]=await client.analyzeSentiment({document: document});
    const sentiment=result.documentSentiment;

    console.log('Text:'+ text);
    console.log('sentiment score: '+ sentiment.score);
    console.log('Sentiment magnitude:'+ sentiment.magnitude);
}
