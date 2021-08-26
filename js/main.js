const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
let rev = '';
document.getElementById('submit').addEventListener("click", function ()
{
    for (const word of inputText.value) {
        rev = word + rev;
    }
    outputText.value = rev;
    inputText.value = '';
})

document.getElementById('input-text').addEventListener("keyup", function (e)
{
    if (e.keyCode == 13) {
        for (const word of inputText.value) {
            rev = word + rev;
        }
        outputText.value = rev;
        inputText.value = '';
    }
})

document.getElementById('copy').addEventListener('click', function ()
{
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);

})