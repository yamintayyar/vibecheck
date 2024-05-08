function sa(msg) {

const {SentimentAnalyzer} = require('node-nlp');

const sentiment = new SentimentAnalyzer({ language: 'en' });

return sentiment.getSentiment(msg)['score'];

}