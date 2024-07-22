import { pipeline, AutoTokenizer } from '@xenova/transformers';

async function sa(msg) {

    let pipe = await pipeline('sentiment-analysis');

    let out = await pipe(msg);

    console.log(out)

};

