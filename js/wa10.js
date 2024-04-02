const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

var storyText = "The air crackled with magic as a wizard set out on a journey. When they reached a mystical clearing known as :inserty:, they were met with a sight straight out of a spellbook. In an instant, :insertz:. A nearby wizard named Merlin, observing the spectacle, couldn't help but marvel — for the adventurer, renowned for their bravery, had stumbled upon a scene even wizards dream of.";

var insertX = ["the Wand of Lumos", "the Cloak of Invisibility", "the Goblet of Fire"];
var insertY = ["the Enchanted Grove", "the Fountain of Dreams", "the Chamber of Secrets"];
var insertZ = ["a shimmering portal to another realm appeared", "ancient runes glowed with ethereal light", "a cascade of silver mist transformed into dancing pixies"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Merlin", name);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}