function speakText(text)
{
    // Check if the browser supports the Speech Synthesis API
    if ('speechSynthesis' in window) {
        var utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else
    {
        console.error('This browser does not support the Speech Synthesis API.');
        alert('Sorry, your browser does not support text-to-speech!\nUse another browser and try again!');
    }
}