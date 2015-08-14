//Create test key with a few pirate names.

var pirateArrayFirstName = {a:'Captain Jack', b:'Dirty', c:'Squidlips', d:'Two Toes', e:'Sharkbait', f:'Barnacles', g:'Pegleg', h:'Scallywag', i:'Stinky', j:'RatScallion', k:'Bootlegger', l:'Dead Man', m:'Sea-Legs', n:'Bobbin', o:'Sharkey', p:'Swindles', q:'Swabby', r:'Slappy', s:'Salty Ned', t:'Longbeard', u:'Scurvy', v:'Morgan', w:'Bones', x:'Ted', y:'Seal Clubber', z:'Jampy'};

var pirateArrayFirstName2 = {a:'Doubles', b:'Shooter', c:'Hoover', d:'Lungs', e:'Captain', f:'Shorty', g:'Backroll', h:'Wrong-Way', i:'Bioprene', j:'Bicycle', k:'Beavertail', l:'Kimo', m:'Flotsam', n:'Deco', o:'Farmer John', p:'Octopus', q:'Bowline', r:'Shaka', s:'Zodiac', t:'CESA', u:'Pony Bottle', v:'Nasal', w:'Bendy', x:'Bait Ball', y:'Nemo', z:'Backplate'};

var pirateArrayLastName = {a:'Sparrow', b:'Of The West', c:'Patch', d:'Hornswaggle', e:'McStinky', f:'McSwaggers', g:'Of Dark Water', h:'O\'Fish', i:'Ned', j:'McPlankdancer', k:'Lobster-Legs', l:'Hook Head', m:'Bilgepool', n:'Anchorbottom', o:'McSailorpants', p:'Of The Coast', q:'O\'Sharkbait', r:'McWinky', s:'Longbottom', t:'Rumface', u:'', v:'', w:'', x:'Shipburner', y:'Yer-Cannons', z:'Bloomer'};

var pirateArrayLastName2 = {a:'Jersey Reel', b:'McRoundbelly', c:'Bailout', d:'Homebrew', e:'Clovehitch', f:'Bug Hunter', g:'BubbleMaker', h:'Tompkins', i:'Tankhauler', j:'Zissou', k:'Flotsalot', l:'Offgasser', m:'Seadaddy', n:'MacGyver', o:'Fishhugger', p:'MonkeyWrench', q:'Bubblehead', r:'Double hose', s:'swins-in-circles', t:'Bottom scratcher', u:'Wet Willie', v:'One eyed willie', w:'Jetsum', x:'Abalone', y:'Shark Whisperer', z:'Blue Water'};
//Compare letters to list and output new name.

var horseArrayFirstName = {a:'Aston', b:'Bearwood', c:'Castle Vale', d:'HayChomp', e:'Erdington', f:'Frankley', g:'Great Burr', h:'Handsworth', i:'Harborne', j:'Kings-Heath', k:'Kingstanding', l:'Ladywood', m:'Moseley', n:'Northfield', o:'Nechells', p:'Jampy', q:'Quincy', r:'Ruby', s:'Champ', t:'Tompkins', u:'Winny', v:'Woeley Castle', w:'Winston', x:'Xavier', y:'Yardley', z:'Witton'};

var horseArrayLastName = {a:'Apache', b:'Breeze', c:'Cloud', d:'Dancer', e:'Eclipse', f:'Flash', g:'Gypsy', h:'Hero', i:'Invincible', j:'RoseRunner', k:'Knight', l:'Lightning', m:'Magic', n:'Noon', o:'Orchid', p:'Persimmon', q:'Quil', r:'Roston', s:'Star', t:'Thunder', u:'Universe', v:'Victor', w:'Wizard', x:'Xanadu', y:'Yellow', z:'Zorro'};

superheroArrayFirstName = {a:'The Amazing', b:'The Magnetic', c:'Fire', d:'The Magnificent', e:'Dynamic', f:'Dr.', g:'Wonder', h:'Super', i:'Awesome', j:'Kick-Butt', k:'The Alabaster', l:'Stupendous', m:'Chocolate', n:'Vanilla', o:'Strawberry', p:'Astro', q:'Secret', r:'Space', s:'Orange', t:'Night', u:'The Purple', v:'Judgemental', w:'Sticky', x:'Pretentious', y:'D-Cup', z:'The Bodacious'};

superheroArrayLastName = {a:'Thunderbolt', b:'Storm', c:'Dymano', d:'Octopus', e:'Falcon', f:'Munchkin', g:'Doctor', h:'Tornado', i:'Hurricane', j:'Blizzard', k:'Volcano', l:'McDagger', m:'Laser', n:'Meteor', o:'Rocket', p:'Thunder', q:'Lightning', r:'Avenger', s:'Destroyer', t:'Muffin', u:'Cookie', v:'Exterminator', w:'Assassin', x:'Marshmellow', y:'Sausage', z:'Wierdo'};

// bluesArrayFirstName = {a:'Fat', b:'Buddy', c:'Sticky', d:'Old', e:'Texas', f:'Hollerin\'', g:'Ugly', h:'Brown', i:'Happy', j:'Boney', k:'Curly', l:'Pretty', m:'Jailhouse', n:'Peg Leg', o:'Red', p:'Sleppy', q:'Bald', r:'Skinny', s:'Blind', t:'Big', u:'Yella', v:'Toothless', w:'Scremin\', x:'Washboard', y:'Billy', z:'Steel'};

// bluesArrayLastName = {a:'Jackson', b:'McGee', c:'Hopkins', d:'Dupree', e:'Green', f:'Brown', g:'Jones', h:'Rivers', i:'Malone', j:'Washington', k:'Smith', l:'Parker', m:'Lee', n:'', o:'', p:'', q:'', r:'', s:'', t:'', u:'', v:'', w:'', x:'', y:'', z:''};

var pirateFirst =[pirateArrayFirstName, pirateArrayFirstName2];
var pirateLast = [pirateArrayLastName, pirateArrayLastName2];
var pirate = {name:'pirate', keys:[pirateFirst, pirateLast]};

var horseFirst = [horseArrayFirstName];
var horseLast =  [horseArrayLastName];
var horse = {name:'horse', keys:[horseFirst, horseLast]};

var superheroFirst = [superheroArrayFirstName];
var superheroLast = [superheroArrayLastName];
var superhero = {name:'superhero', keys: [superheroFirst, superheroLast]};

var allKeys = [pirate, horse, superhero];


// blankArrayFirstName2 = {a:'', b:'', c:'', d:'', e:'', f:'', g:'', h:'', i:'', j:'', k:'', l:'', m:'', n:'', o:'', p:'', q:'', r:'', s:'', t:'', u:'', v:'', w:'', x:'', y:'', z:''};

// blankArrayLastName2 = {a:'', b:'', c:'', d:'', e:'', f:'', g:'', h:'', i:'', j:'', k:'', l:'', m:'', n:'', o:'', p:'', q:'', r:'', s:'', t:'', u:'', v:'', w:'', x:'', y:'', z:''};


