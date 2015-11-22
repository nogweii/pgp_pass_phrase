// less typing. I'm lazy.
var $id = document.getElementById.bind(document);

var PGPPassPhrase = {
  pgp_word_list: [
    ['aardvark', 'adroitness'],
    ['absurd', 'adviser'],
    ['accrue', 'aftermath'],
    ['acme', 'aggregate'],
    ['adrift', 'alkali'],
    ['adult', 'almighty'],
    ['afflict', 'amulet'],
    ['ahead', 'amusement'],
    ['aimless', 'antenna'],
    ['Algol', 'applicant'],
    ['allow', 'Apollo'],
    ['alone', 'armistice'],
    ['ammo', 'article'],
    ['ancient', 'asteroid'],
    ['apple', 'Atlantic'],
    ['artist', 'atmosphere'],
    ['assume', 'autopsy'],
    ['Athens', 'Babylon'],
    ['atlas', 'backwater'],
    ['Aztec', 'barbecue'],
    ['baboon', 'belowground'],
    ['backfield', 'bifocals'],
    ['backward', 'bodyguard'],
    ['banjo', 'bookseller'],
    ['beaming', 'borderline'],
    ['bedlamp', 'bottomless'],
    ['beehive', 'Bradbury'],
    ['beeswax', 'bravado'],
    ['befriend', 'Brazilian'],
    ['Belfast', 'breakaway'],
    ['berserk', 'Burlington'],
    ['billiard', 'businessman'],
    ['bison', 'butterfat'],
    ['blackjack', 'Camelot'],
    ['blockade', 'candidate'],
    ['blowtorch', 'cannonball'],
    ['bluebird', 'Capricorn'],
    ['bombast', 'caravan'],
    ['bookshelf', 'caretaker'],
    ['brackish', 'celebrate'],
    ['breadline', 'cellulose'],
    ['breakup', 'certify'],
    ['brickyard', 'chambermaid'],
    ['briefcase', 'Cherokee'],
    ['Burbank', 'Chicago'],
    ['button', 'clergyman'],
    ['buzzard', 'coherence'],
    ['cement', 'combustion'],
    ['chairlift', 'commando'],
    ['chatter', 'company'],
    ['checkup', 'component'],
    ['chisel', 'concurrent'],
    ['choking', 'confidence'],
    ['chopper', 'conformist'],
    ['Christmas', 'congregate'],
    ['clamshell', 'consensus'],
    ['classic', 'consulting'],
    ['classroom', 'corporate'],
    ['cleanup', 'corrosion'],
    ['clockwork', 'councilman'],
    ['cobra', 'crossover'],
    ['commence', 'crucifix'],
    ['concert', 'cumbersome'],
    ['cowbell', 'customer'],
    ['crackdown', 'Dakota'],
    ['cranky', 'decadence'],
    ['crowfoot', 'December'],
    ['crucial', 'decimal'],
    ['crumpled', 'designing'],
    ['crusade', 'detector'],
    ['cubic', 'detergent'],
    ['dashboard', 'determine'],
    ['deadbolt', 'dictator'],
    ['deckhand', 'dinosaur'],
    ['dogsled', 'direction'],
    ['dragnet', 'disable'],
    ['drainage', 'disbelief'],
    ['dreadful', 'disruptive'],
    ['drifter', 'distortion'],
    ['dropper', 'document'],
    ['drumbeat', 'embezzle'],
    ['drunken', 'enchanting'],
    ['Dupont', 'enrollment'],
    ['dwelling', 'enterprise'],
    ['eating', 'equation'],
    ['edict', 'equipment'],
    ['egghead', 'escapade'],
    ['eightball', 'Eskimo'],
    ['endorse', 'everyday'],
    ['endow', 'examine'],
    ['enlist', 'existence'],
    ['erase', 'exodus'],
    ['escape', 'fascinate'],
    ['exceed', 'filament'],
    ['eyeglass', 'finicky'],
    ['eyetooth', 'forever'],
    ['facial', 'fortitude'],
    ['fallout', 'frequency'],
    ['flagpole', 'gadgetry'],
    ['flatfoot', 'Galveston'],
    ['flytrap', 'getaway'],
    ['fracture', 'glossary'],
    ['framework', 'gossamer'],
    ['freedom', 'graduate'],
    ['frighten', 'gravity'],
    ['gazelle', 'guitarist'],
    ['Geiger', 'hamburger'],
    ['glitter', 'Hamilton'],
    ['glucose', 'handiwork'],
    ['goggles', 'hazardous'],
    ['goldfish', 'headwaters'],
    ['gremlin', 'hemisphere'],
    ['guidance', 'hesitate'],
    ['hamlet', 'hideaway'],
    ['highchair', 'holiness'],
    ['hockey', 'hurricane'],
    ['indoors', 'hydraulic'],
    ['indulge', 'impartial'],
    ['inverse', 'impetus'],
    ['involve', 'inception'],
    ['island', 'indigo'],
    ['jawbone', 'inertia'],
    ['keyboard', 'infancy'],
    ['kickoff', 'inferno'],
    ['kiwi', 'informant'],
    ['klaxon', 'insincere'],
    ['locale', 'insurgent'],
    ['lockup', 'integrate'],
    ['merit', 'intention'],
    ['minnow', 'inventive'],
    ['miser', 'Istanbul'],
    ['Mohawk', 'Jamaica'],
    ['mural', 'Jupiter'],
    ['music', 'leprosy'],
    ['necklace', 'letterhead'],
    ['Neptune', 'liberty'],
    ['newborn', 'maritime'],
    ['nightbird', 'matchmaker'],
    ['Oakland', 'maverick'],
    ['obtuse', 'Medusa'],
    ['offload', 'megaton'],
    ['optic', 'microscope'],
    ['orca', 'microwave'],
    ['payday', 'midsummer'],
    ['peachy', 'millionaire'],
    ['pheasant', 'miracle'],
    ['physique', 'misnomer'],
    ['playhouse', 'molasses'],
    ['Pluto', 'molecule'],
    ['preclude', 'Montana'],
    ['prefer', 'monument'],
    ['preshrunk', 'mosquito'],
    ['printer', 'narrative'],
    ['prowler', 'nebula'],
    ['pupil', 'newsletter'],
    ['puppy', 'Norwegian'],
    ['python', 'October'],
    ['quadrant', 'Ohio'],
    ['quiver', 'onlooker'],
    ['quota', 'opulent'],
    ['ragtime', 'Orlando'],
    ['ratchet', 'outfielder'],
    ['rebirth', 'Pacific'],
    ['reform', 'pandemic'],
    ['regain', 'Pandora'],
    ['reindeer', 'paperweight'],
    ['rematch', 'paragon'],
    ['repay', 'paragraph'],
    ['retouch', 'paramount'],
    ['revenge', 'passenger'],
    ['reward', 'pedigree'],
    ['rhythm', 'Pegasus'],
    ['ribcage', 'penetrate'],
    ['ringbolt', 'perceptive'],
    ['robust', 'performance'],
    ['rocker', 'pharmacy'],
    ['ruffled', 'phonetic'],
    ['sailboat', 'photograph'],
    ['sawdust', 'pioneer'],
    ['scallion', 'pocketful'],
    ['scenic', 'politeness'],
    ['scorecard', 'positive'],
    ['Scotland', 'potato'],
    ['seabird', 'processor'],
    ['select', 'provincial'],
    ['sentence', 'proximate'],
    ['shadow', 'puberty'],
    ['shamrock', 'publisher'],
    ['showgirl', 'pyramid'],
    ['skullcap', 'quantity'],
    ['skydive', 'racketeer'],
    ['slingshot', 'rebellion'],
    ['slowdown', 'recipe'],
    ['snapline', 'recover'],
    ['snapshot', 'repellent'],
    ['snowcap', 'replica'],
    ['snowslide', 'reproduce'],
    ['solo', 'resistor'],
    ['southward', 'responsive'],
    ['soybean', 'retraction'],
    ['spaniel', 'retrieval'],
    ['spearhead', 'retrospect'],
    ['spellbind', 'revenue'],
    ['spheroid', 'revival'],
    ['spigot', 'revolver'],
    ['spindle', 'sandalwood'],
    ['spyglass', 'sardonic'],
    ['stagehand', 'Saturday'],
    ['stagnate', 'savagery'],
    ['stairway', 'scavenger'],
    ['standard', 'sensation'],
    ['stapler', 'sociable'],
    ['steamship', 'souvenir'],
    ['sterling', 'specialist'],
    ['stockman', 'speculate'],
    ['stopwatch', 'stethoscope'],
    ['stormy', 'stupendous'],
    ['sugar', 'supportive'],
    ['surmount', 'surrender'],
    ['suspense', 'suspicious'],
    ['sweatband', 'sympathy'],
    ['swelter', 'tambourine'],
    ['tactics', 'telephone'],
    ['talon', 'therapist'],
    ['tapeworm', 'tobacco'],
    ['tempest', 'tolerance'],
    ['tiger', 'tomorrow'],
    ['tissue', 'torpedo'],
    ['tonic', 'tradition'],
    ['topmost', 'travesty'],
    ['tracker', 'trombonist'],
    ['transit', 'truncated'],
    ['trauma', 'typewriter'],
    ['treadmill', 'ultimate'],
    ['Trojan', 'undaunted'],
    ['trouble', 'underfoot'],
    ['tumor', 'unicorn'],
    ['tunnel', 'unify'],
    ['tycoon', 'universe'],
    ['uncut', 'unravel'],
    ['unearth', 'upcoming'],
    ['unwind', 'vacancy'],
    ['uproot', 'vagabond'],
    ['upset', 'vertigo'],
    ['upshot', 'Virginia'],
    ['vapor', 'visitor'],
    ['village', 'vocalist'],
    ['virus', 'voyager'],
    ['Vulcan', 'warranty'],
    ['waffle', 'Waterloo'],
    ['wallet', 'whimsical'],
    ['watchword', 'Wichita'],
    ['wayside', 'Wilmington'],
    ['willow', 'Wyoming'],
    ['woodlark', 'yesteryear'],
    ['Zulu', 'Yucatan']
  ],

  // Get a random word from the PGP word list. The word list contains 2 256-long
  // lists, both with distinct properties. The intended use is that when
  // generating a pass phrase, the words in the odd positions use the second list
  // instead of the first.
  randomPGPWord: function(odd_position) {
    var objCrypto = window.crypto || window.msCrypto;
    if (objCrypto && objCrypto.getRandomValues) {
      var values = new Uint32Array(2);
      objCrypto.getRandomValues(values);
      var i = values[1] % 256;
    } else {
      var i = Math.floor(Math.random()*256);
    }
    return PGPPassPhrase.pgp_word_list[i][odd_position ? 1 : 0];
  },

  // Generate a pass phrase of X words long. It will handle the odd/even wordlist
  // choice automatically for you.
  generatePhrase: function(count) {
    var phrase_words = [];
    for (j = 1; j <= count; j++) {
      if (j%2 == 0) {
        phrase_words.push(PGPPassPhrase.randomPGPWord(false));
      } else {
        phrase_words.push(PGPPassPhrase.randomPGPWord(true));
      }
    }

    return phrase_words.join(' ');
  },

  // Toggle display of the flappers used in the stylized view with the plain text
  // span. Also update the button label!
  togglePlainText: function() {
    if ($id('phrase_text').style.display == 'block') {
      console.log('showing stylized flapper');
      $id('phrase_text').style.display = 'none';
      $id('phrase_container').style.display = 'block';
      $id('plain_text_btn').innerHTML = 'Plain text';
    } else {
      console.log('showing plain text');
      $id('phrase_text').style.display = 'block';
      $id('phrase_container').style.display = 'none';
      $id('plain_text_btn').innerHTML = 'Stylized';
    }
  },

  // Do the preparatory work for Clipboard.js
  setupClipboard: function() {
    var clipboard = new Clipboard('#copy_btn', {
      text: function() {
        return $id('phrase_words').value;
      }
    });

    clipboard.on('success', function(e) {
      $id('copy_btn').innerHTML = 'Copied!';
      setTimeout(function() {
        $id('copy_btn').innerHTML = 'Copy';
      }, 2500);
    });

    clipboard.on('error', function(e) {
      console.log(e);
      $id('copy_btn').innerHTML = 'Press Ctrl-C';
      setTimeout(function() {
        $id('copy_btn').innerHTML = 'Copy';
      }, 3500); // give an extra second for users to actually hit Ctrl-C while directions are visible
    });
  },

  // How many ms between making new a new pass phrase automatically
  regenerationDelay: 30000,

  setupProgressBar: function() {
    NProgress.start();
    NProgress.set(0.999); // Don't set immediately to 1, just very close to it
    $id('nprogress').addEventListener('transitionend', PGPPassPhrase.fillinPassPhrase);
  },

  // Generate the pass phrase & update the DOM
  fillinPassPhrase: function() {
    console.log('generating new passpharse');
    NProgress.remove();
    NProgress.configure({ speed: 100 });
    NProgress.set(0);
    NProgress.configure({ speed: PGPPassPhrase.regenerationDelay });

    var phrase = PGPPassPhrase.generatePhrase(7);
    $id('phrase_words').value = phrase;
    $id('phrase_text').innerHTML = phrase;
    // Delete the current flapper if it exists
    if (document.getElementsByClassName('flapper')[0])
      document.getElementsByClassName('flapper')[0].remove();
    $('#phrase_words').flapper({width: phrase.length, chars_preset: 'alpha', on_anim_end: PGPPassPhrase.setupProgressBar}).val(phrase).change();
  }

}

$(document).ready(function() {
  NProgress.configure({ easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)', speed: PGPPassPhrase.regenerationDelay, showSpinner: false, trickle: false, minimum: 0, parent: '#phrase_container' });
  PGPPassPhrase.fillinPassPhrase();
  PGPPassPhrase.setupClipboard();
  $id('plain_text_btn').addEventListener('click', PGPPassPhrase.togglePlainText);
  $id('new_btn').addEventListener('click', PGPPassPhrase.fillinPassPhrase);
})
