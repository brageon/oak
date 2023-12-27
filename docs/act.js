const readline = require('readline');
function activeToPassive(sentence) {
  const tokens = sentence.split(' ');
  const verb = tokens[0];
  const subject = tokens[1];
  if (isModalVerb(verb)) {
    return sentence;
  } else {
    const passiveSentence = `The ${subject} was ${verb.lemma} by ${sentence.slice(2)}`;
    return passiveSentence; }}
function passiveToActive(sentence) {
  const tokens = sentence.split(' ');
  const verb = tokens[2];
  const subject = tokens[0];
  const agent = tokens[4];
  if (isDefiniteArticle(agent[0])) {
    return sentence;
  } else {
    const activeSentence = verb.lemma + ` ${subject} ${sentence.slice(4)}`;
    return activeSentence; }}
function isModalVerb(word) {
  return ['can', 'could', 'may', 'might', 'must', 'should', 'would'].includes(word); }
function isDefiniteArticle(word) {
  return ['the', 'this', 'that', 'these', 'those'].includes(word); }
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout });
rl.question('Enter a sentence: ', (inputSentence) => {
  const activeSentence = activeToPassive(inputSentence);
  const passiveSentence = passiveToActive(inputSentence);
  document.getElementById('userInput').textContent = `Active sentence: ${activeSentence}\nPassive sentence: ${passiveSentence}`;
  rl.close(); });