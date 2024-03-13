const promptButton = document.getElementById('promptButton');
promptButton.addEventListener('click', async () => {
  const inputSentence = await prompt('Enter your message:');
  // Asynchronously process the sentence
  promptButton.textContent = 'Processing...';
  let finished = false;
  let activeSentence;
  let passiveSentence;
  const pollInterval = setInterval(() => {
    if (finished) {
      clearInterval(pollInterval);
      promptButton.textContent = 'Active sentence:';
      console.log('Active sentence:', activeSentence);
      promptButton.textContent = 'Passive sentence:';
      console.log('Passive sentence:', passiveSentence);
    }
  }, 10); // milliseconds
  try {
    const { activeSentence, passiveSentence } = await processSentence(inputSentence);
    finished = true;
  } catch (error) {
    console.error(error);
}});