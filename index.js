
function  greetings() {
    setTimeout(() => {
        console.log("Hello Sir! Welcome to this npm package hope u like this package.");
        greet();
    }, 2000);
    return "Loading..."
} 

function greet() {
    let arr = ["Your brain burns 400-500 calories a day", "Laughing came before language", "You can`t fold a piece of A4 paper more than eight times", "Smells can pass through liquid", "Our dead cells are eaten by other cells in our body", "You can see stars as they were 4,000 years ago with the naked eye", "You inhale 50 potentially harmful bacteria every time you breathe", "'New car smell' is a mix of over 200 chemicals", "Murder rates rise in summer", "You have a 50 per cent chance of sharing a birthday with a friend", "Giraffes hum to communicate with each other", "It rains methane on Saturn`s largest moon", "Electrons might live forever", "Earth is 4.54 billion years old", "People who eat whatever they want and stay slim have a slow metabolism, not fast", "You can smell ants", "Mercury, not Venus, is the closest planet to Earth on average", "The longest anyone has held their breath underwater is over 24.5 minutes.", "You could sweat when you're anxious to alert others", "You remember more dreams when you sleep badly", "The biggest butterfly in the world has a 31cm wingspan", "Football players spit so much because exercise increases the amount of protein in saliva", "All mammals get goosebumps", "A rainbow on Venus is called a glory", "You don't like the sound of your own voice because of the bones in your head", "Martial artists who smile before the start of a match are more likely to lose", "There`s a planet mostly made from diamond", "Your nails grow faster in hot summer", "There are more bacterial cells in your body than human cells", "You travel 2.5 million km a day around the Sun without realising", "Starfish don`t have bodies", "Bacteria on your skin cause your itches", "Hippos can`t swim", "Finland is the happiest country on Earth", "Deaf people are known to use sign language in their sleep", "Bananas are radioactive", "One in 18 people have a third nipple", "Your signature could reveal personality traits", "A horse normally has more than one horsepower", "Sound can be minus decibels", "Snails have teeth", "Wind turbines kill between 10,000 and 100,000 birds each year in the UK", "Football teams wearing red kits play better", "Ants don`t have lungs", "You can actually die laughing", "Comets smell like rotten eggs", 'Earth`s poles are moving', "NASA genuinely faked part of the Moon landing", "Most maps of the world are wrong", "Our solar system has a wall", "Mount Everest isn't the tallest mountain on Earth"]
    let  i = Math.floor(Math.random() * arr.length);
    console.log(`This is a random fact from this npm package: ${arr[i]}`);
}




module.exports = greetings