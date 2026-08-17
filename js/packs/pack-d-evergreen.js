/* ============================================================
   PACK D — EVERGREEN  (any month)
   The pacing pack. Gaffes, ceremonies, staff, small absurdities
   and the ordinary indignities of the office. Tag `levity` cards
   are weighted UP before term month 14 and down after.
   66 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ---------- gaffes & language ---------- */

{ id:'e-two-words', title:'Two Words', who:C.press, tags:['gaffe','press','levity'],
  text:'You have used a word at a podium that is not a word. You used it with total confidence, twice, ' +
       'and a follow-up question was asked and answered using it a third time.',
  choices:[
    { label:'"It\'s a word. Look it up." Insist for four days.', eff:{base:+7,press:-5,auth:+2},
      res:'A dictionary publisher posts a definition as a joke. Eleven million people look it up. It is added to the dictionary in 2031, seriously, with your name in the etymology.' },
    { label:'Laugh at yourself. Move on.', eff:{press:+6,street:+5,base:-2},
      res:'Self-deprecation from you is so unexpected that it leads three broadcasts, warmly, which is a category of coverage you did not know was available.' },
    { label:'Blame the teleprompter operator by name.', eff:{base:+3,press:-6,street:-4,auth:+2},
      res:'The teleprompter operator is twenty-three, did not write it, and now has eleven thousand messages. She gives one interview and it is devastating.' },
    { label:'Publish a dictionary of words you have invented. Sell it.', eff:{base:+3,press:-2,street:-2,auth:+1,cash:+0.2}, wild:true,
      res:'Four hundred entries, hardback, $34. It sells 900,000 copies and two of the words enter genuine usage, which linguists find more distressing than anything else you do.' }]},

{ id:'e-hot-mic', title:'The Hot Mic', who:C.cos, tags:['gaffe','press'],
  text:'A microphone you believed was off was not off. What you said was about a foreign leader, ' +
       'ran nine seconds, and used a word Deborah will not repeat in this room.',
  choices:[
    { label:'"I stand by it. He knows what he did."', eff:{base:+8,press:-6,congress:-5,street:-4,auth:+4},
      res:'The leader responds with a single sentence in his own language that is far crueller and translates beautifully. He wins the exchange decisively.' },
    { label:'Call him personally. Apologise. Mean it.', eff:{press:+6,congress:+6,street:+5,base:-6,auth:-1},
      res:'He accepts graciously and mentions it, gently, at every bilateral for six years.' },
    { label:'Claim it was doctored.', eff:{base:+4,press:-9,street:-5,courts:-3,auth:+3},
      res:'Four independent forensic labs confirm the audio within a day. The claim survives anyway among people who needed it to.' },
    { label:'Release the full recording. All nine seconds and the four minutes around it.', eff:{base:+1,congress:+3,press:-1,street:-1,auth:-2}, wild:true,
      res:'The surrounding context is worse. You release it anyway. It works, because nobody expects the worse version to be volunteered.' }]},

{ id:'e-map', title:'The Map', who:C.state, tags:['gaffe','foreign','levity'],
  text:'You have referred to a country by the name of a different country. Twice. In a joint press conference. ' +
       'While standing beside the president of the first country.',
  choices:[
    { label:'Keep going. Confidence is a foreign policy.', eff:{base:+5,press:-4,street:-3,auth:+2},
      res:'He is extremely gracious about it, which is worse. His foreign ministry issues a correction so polite that four papers run it as satire.' },
    { label:'Correct yourself. Make a joke of it.', eff:{press:+5,street:+4,congress:+3,base:-1},
      res:'You blame the map on the wall behind you, which is genuinely out of date by nine years. It is a good joke and it is also true.' },
    { label:'Have the State Department issue a statement that you were right.', eff:{base:+3,press:-5,street:-5,congress:-4,auth:+3},
      res:'A career desk officer is required to write four paragraphs defending a geography error. It is published, archived, and cited in a textbook about institutional decay.' },
    { label:'Invent a country and refer to it confidently for a week.', eff:{base:+3,congress:-4,auth:+1}, wild:true,
      res:'\'Ventasia\' is mentioned in four speeches. Two think tanks publish analysis of your Ventasia policy before anybody establishes that it does not exist.' }]},

{ id:'e-height', title:'The Number', who:C.doc, tags:['gaffe','levity','vanity'],
  text:'The official record lists your height as one inch more than your driving licence and your weight as fourteen pounds less than the scale. ' +
       'Admiral Prine has both documents and a facial expression.',
  choices:[
    { label:'Use the good numbers. They\'re within margin of error.', eff:{base:+4,press:-4,auth:+1},
      res:'A journalist obtains the licence. The discrepancy becomes a running unit of measurement used by commentators for four years.' },
    { label:'Use the real numbers. Who cares.', eff:{press:+6,street:+4,base:-2},
      res:'Nobody cares. Nobody has ever cared. The story does not exist because you did not make one.' },
    { label:'Have the licence reissued with the new numbers.', eff:{base:+2,press:-5,courts:-4,street:-3,auth:+3},
      res:'A state DMV is asked to amend a record for the President of the United States. A clerk refuses on procedure and becomes, for one week, a folk hero.' },
    { label:'Have the record amended to list you as nine feet tall.', eff:{base:+2,press:-3,street:-2,auth:+1}, wild:true,
      res:'A clerk enters it because the form has no upper bound. It appears in a federal database for eleven years and is discovered by a data journalist in 2039.' }]},

{ id:'e-autopen', title:'The Autopen', who:C.cos, tags:['levity','power'],
  text:'Four hundred documents require your signature this week. The autopen is legal, has been used since 1804, ' +
       'and produces a signature indistinguishable from yours. Deborah wants to know which pile it can touch.',
  choices:[
    { label:'Everything. That\'s what it\'s for.', eff:{press:-3,congress:-3,auth:+4},
      res:'Four hundred documents signed by a machine, including two pardons. In year six a lawyer argues that a pardon signed by a machine is not a pardon and gets further than anyone expects.' },
    { label:'Sign everything by hand. Every one.', eff:{press:+4,congress:+4,street:+3,base:+2,auth:-1},
      res:'It takes eleven hours across four days. You read about nine of them properly, and two of those nine you change.' },
    { label:'Autopen the routine, hand-sign anything with a name on it.', eff:{congress:+3,press:+2,auth:+3},
      res:'A sensible rule, consistently applied, which is a sentence that appears exactly once in the history of this administration.' },
    { label:'Sign them with a different signature each time. See if anyone notices.', eff:{base:+1,courts:-6,press:-4,auth:+3}, wild:true,
      res:'Four hundred documents, four hundred signatures, no two alike. It is discovered nine years later and invalidates nothing, because nobody can be bothered to litigate it.' }]},

{ id:'e-birthday', title:'The Cake', who:C.usher, tags:['levity','vanity'],
  text:'Alvin has arranged a small cake for the residence staff to present to you. ' +
       'Brayden has separately arranged a cake for the South Lawn, for four thousand people, with a flyover.',
  choices:[
    { label:'The South Lawn. Obviously the South Lawn.', eff:{base:+7,press:-5,street:-4,cash:-0.2,auth:+3},
      res:'A military flyover for a birthday costs $1.4 million and appears in a GAO report under "other."' },
    { label:'The staff cake. In the kitchen. With the staff.', eff:{press:+6,street:+6,base:+3},
      res:'Somebody takes a photograph on a phone. It leaks. It is the most humanising image of your presidency and it was not planned by anyone.' },
    { label:'Both. Why is this a choice.', eff:{base:+6,press:-3,street:-2,cash:-0.2,auth:+2},
      res:'You eat two cakes in one day. Admiral Prine notes it in a file he keeps for no reason he can articulate.' },
    { label:'Cancel both. Work through it. Tell nobody it was your birthday.', eff:{base:-4,congress:+2,press:+1,street:+2,auth:-2}, wild:true,
      res:'It comes out four days later from a scheduler. The story of a President who worked through his own birthday does more for you than any flyover could have.' }]},

{ id:'e-diet', title:'The Diet Order', who:C.usher, tags:['levity'],
  text:'The kitchen has been instructed to serve you what you actually want rather than what the nutritionist specifies. ' +
       'Alvin has been fielding this instruction from four different people, all of whom claim to speak for you.',
  choices:[
    { label:'"Whatever I ask for. Every time."', eff:{base:+3,press:-2,street:-2,auth:+2},
      res:'The nutritionist resigns after eleven months and is not replaced, which is itself a decision that nobody makes.' },
    { label:'Follow the plan. You\'re sixty-something and it\'s a hard job.', eff:{press:+4,street:+4,base:-2},
      res:'You lose eleven pounds and sleep better and are, by every account, measurably less irritable in meetings. Nobody connects the two things publicly.' },
    { label:'Have the nutritionist reassigned to a base in Alaska.', eff:{base:+2,press:-5,street:-4,auth:+3},
      res:'She is a commissioned officer of the Public Health Service and the reassignment is entirely lawful. She writes a very good book from Alaska.' },
    { label:'Eat exactly what the White House kitchen serves the staff.', eff:{base:+1,congress:+1,press:-2}, wild:true,
      res:'You eat the staff meal for four years. The kitchen raises its own standards enormously. It is the only diet you have ever successfully maintained.' }]},

{ id:'e-sleep', title:'Executive Time', who:C.sched, tags:['levity','press'],
  text:'Boyd\'s draft schedule has nine hours a day marked "Executive Time." ' +
       'He notes, without inflection, that this is a real category and that it means unstructured time in the residence.',
  choices:[
    { label:'Keep it. That\'s when I actually think.', eff:{base:+3,press:-6,congress:-4,street:-3,auth:+2},
      res:'The schedule leaks in full. "Executive Time" enters the language as a euphemism and is used against four subsequent presidents who did not invent it.' },
    { label:'Fill it. Meetings, briefings, calls.', eff:{congress:+6,street:+5,press:+4,base:-3,auth:+3},
      res:'You are exhausted by week three and considerably better informed. Both effects persist.' },
    { label:'Keep it, but call it "Policy Development."', eff:{base:+2,press:-2,auth:+3},
      res:'Renaming it delays the story by nine months and makes it worse when it arrives, because now there is a euphemism for the euphemism.' },
    { label:'Rename it \'Thinking\' and put it on the public schedule.', eff:{base:+2,press:-3,street:-2,auth:+2}, wild:true,
      res:'Nine hours of publicly scheduled Thinking. Four newspapers attack it and eleven million exhausted people quietly conclude it is the most relatable thing you have ever done.' }]},

/* ---------- ceremonies & protocol ---------- */

{ id:'e-medal', title:'The Medal', who:C.cos, tags:['vanity','levity'],
  text:'The nation\'s highest civilian honour. You have a list of eleven recipients. ' +
       'Four are genuinely extraordinary Americans. Seven have been on television being nice about you.',
  choices:[
    { label:'All eleven. It\'s my medal.', eff:{base:+5,press:-4,street:-6,congress:-4,auth:+4},
      res:'The four extraordinary Americans have to stand in a line with the seven. Two of them decline the invitation and give the same reason in different words.' },
    { label:'The four. Do it properly.', eff:{press:+8,street:+8,congress:+6,base:-4},
      res:'A ceremony with real weight. A ninety-one-year-old cryptographer speaks for four minutes and the room does not move.' },
    { label:'The seven. And a posthumous one for a golfer.', eff:{base:+5,press:-5,street:-7,congress:-6,auth:+3},
      res:'It is, technically, entirely within your discretion. Everything about it is within your discretion. That is the entire problem with it.' },
    { label:'Give it to eleven people nobody has heard of.', eff:{base:+1,congress:+2,street:+1,auth:-2}, wild:true,
      res:'A lock-keeper, a night nurse, a school caretaker of forty-one years. The ceremony runs long because four of them have never spoken into a microphone. It is extraordinary.' }]},

{ id:'e-state-dinner', title:'The Seating Chart', who:C.state, tags:['foreign','levity'],
  text:'A state dinner for an allied head of government. Muriel has the seating chart. ' +
       'You have moved four people and one of the moves puts a hostile senator directly opposite the guest of honour.',
  choices:[
    { label:'Leave it. It\'ll be entertaining.', eff:{base:+5,press:-4,congress:-6,street:-3,auth:+3},
      res:'They get on famously. They are photographed laughing. He votes with you twice that month out of sheer good mood, which nobody predicted including him.' },
    { label:'Move him back. It\'s a state dinner.', eff:{congress:+5,press:+4,street:+3,base:-2},
      res:'The dinner is flawless and generates no story at all, which is the definition of a successful state dinner.' },
    { label:'Disinvite him entirely.', eff:{base:+4,congress:-7,press:-5,street:-3,auth:+3},
      res:'He posts the disinvitation. It is a single line and it is funnier than anything anyone says at the dinner.' },
    { label:'Seat everyone alphabetically and let chaos take its course.', eff:{base:+2,congress:+1,press:-2,street:-2,auth:+1}, wild:true,
      res:'A hostile senator sits between two ambassadors and an opera singer. Four unexpected alliances form. The State Department adopts alphabetical seating permanently.' }]},

{ id:'e-easter', title:'The Egg Roll', who:C.sched, tags:['levity'],
  text:'Thirty thousand children on the South Lawn. Boyd has the run of show. ' +
       'You are scheduled to appear for six minutes and read a story to a group of four-year-olds.',
  choices:[
    { label:'Do the six minutes. Read the story properly.', eff:{press:+6,street:+6,base:+4},
      res:'You do voices. You are good at it. A four-year-old corrects your pronunciation and you accept the correction gravely, on camera, and it is charming.' },
    { label:'Turn the remarks into a policy speech.', eff:{base:+4,press:-5,street:-6,auth:+2},
      res:'Eleven minutes on trade policy to an audience of children and their exhausted parents. Four networks cut away mid-sentence.' },
    { label:'Skip it. Send the Vice President.', eff:{base:-3,press:-4,street:-4},
      res:'Chet reads the story, does voices, and is photographed with a small child asleep on his shoulder. He posts it himself, twice.' },
    { label:'Cancel the remarks and just roll eggs for two hours.', eff:{base:+2,press:-1,auth:-2}, wild:true,
      res:'You are on your knees on the South Lawn losing repeatedly to seven-year-olds. It is the best photograph any president has taken in forty years.' }]},

{ id:'e-tree', title:'The Tree', who:C.usher, tags:['levity'],
  text:'The official tree is twenty-two feet, sourced from a farm that has supplied it since 1966. ' +
       'The decoration theme has been chosen by tradition. Alvin says the word "tradition" with faint hope.',
  choices:[
    { label:'Keep the theme. Keep the farm. Keep everything.', eff:{press:+4,street:+4,base:+2},
      res:'The farm family gets their photograph. They have it framed. Their grandchildren will have it framed.' },
    { label:'Redo it entirely. Red. All of it. Every corridor.', eff:{base:+4,press:-4,street:-3,cash:-0.1,auth:+1},
      res:'The corridor of red trees is photographed from a low angle by four outlets and becomes, permanently, a reaction image.' },
    { label:'Put my face on the ornaments.', eff:{base:+6,press:-5,street:-5,cash:+0.2,auth:+3},
      res:'They sell out in nine hours at $45 each. The gift shop is, and remains, the most reliably profitable arm of the movement.' },
    { label:'Let the youngest White House staffer choose the theme.', eff:{base:+1,congress:+1,press:-1,auth:-2}, wild:true,
      res:'A 22-year-old from the mail room picks the theme. It is unfashionable, sincere and universally adored, and she is invited back every year for a decade.' }]},

{ id:'e-sports', title:'The Champions', who:C.sched, tags:['culture','levity'],
  text:'A championship team has been invited. Nine of the roster have said publicly they will not come. ' +
       'Boyd notes that the remaining fourteen are enthusiastic and that fourteen is enough for a photograph.',
  choices:[
    { label:'Disinvite the whole team. Post about it.', eff:{base:+7,press:-5,street:-7,auth:+3},
      res:'The nine hold their own event at a public library in their city. Four thousand people come. It is on the news for longer than your event would have been.' },
    { label:'Host the fourteen. Say nothing about the nine.', eff:{base:+4,press:+3,street:+2,auth:+1},
      res:'A perfectly nice ceremony. Two of the fourteen later say they regretted going and two say they did not, which is a normal distribution of opinions among fourteen adults.' },
    { label:'Invite the nine personally. Ask what it would take.', eff:{press:+8,street:+7,congress:+4,base:-6,auth:+1},
      res:'Four of the nine come. One of them raises an issue in the Oval Office that leads to an actual policy change nine months later. Nobody covers that part.' },
    { label:'Fly out and visit the nine who refused. In their city.', eff:{base:-8,congress:+2,press:+4,street:+4,auth:-2}, wild:true,
      res:'Seven of the nine meet you. It is awkward for eleven minutes and then it is not. Two of them attend the White House event the following year without being asked.' }]},

{ id:'e-nobel', title:'The Nomination', who:C.press, tags:['vanity','press','levity'],
  text:'You have been nominated for a major international prize by a legislator from a country of six hundred thousand people. ' +
       'Kaylee notes that anyone in that category may nominate anyone, and that there were 338 nominations this year.',
  choices:[
    { label:'Mention it at every event for four months.', eff:{base:+5,press:-7,street:-4,auth:+2},
      res:'You mention it 61 times. The nominating legislator gives an interview in which he explains he did it to get attention, and it worked.' },
    { label:'Mention it once, lightly, and let it go.', eff:{base:+3,press:+2,auth:+1},
      res:'A single graceful reference. It is the correct dosage and you will never administer it again.' },
    { label:'Campaign for it. Have the State Department help.', eff:{base:+4,press:-8,street:-5,congress:-5,auth:+3},
      res:'Four ambassadors are tasked with lobbying a committee that does not accept lobbying. The cables leak in year three and are, in places, genuinely funny.' },
    { label:'Nominate the nominating legislator right back.', eff:{base:+2,press:-1,street:-1,auth:+1}, wild:true,
      res:'He is delighted, gives four interviews about it, and the entire nomination process is revealed to be exactly as unserious as it actually is.' }]},

/* ---------- staff & the building ---------- */

{ id:'e-resignation', title:'The Resignation Letter', who:C.cos, tags:['press','power'],
  text:'A senior official has resigned with a letter that will be published in a newspaper tomorrow morning. ' +
       'Deborah has an advance copy. She describes it as "four paragraphs, no adjectives, and completely devastating."',
  choices:[
    { label:'Attack him before it publishes. Get ahead of it.', eff:{base:+5,press:-8,congress:-6,street:-4,auth:+4},
      res:'Attacking a letter before anyone has read it guarantees everyone reads it. It is the most-read op-ed of the year by a factor of four.' },
    { label:'Say he served with distinction. Nothing more.', eff:{press:+7,congress:+6,street:+5,base:-4,auth:+1},
      res:'Denied a fight, the letter is a one-day story. Two hundred thousand people read it instead of eleven million.' },
    { label:'Have his security detail removed the same afternoon.', eff:{base:+4,press:-9,congress:-7,courts:-5,street:-5,auth:+6},
      res:'It is petty, visible, and legal. Four other officials with details reconsider what they would say on the way out, which was the actual objective.' },
    { label:'Publish your own reply alongside it. Same length. Same tone.', eff:{base:+2,congress:+2,press:-1,street:-1,auth:-2}, wild:true,
      res:'Four paragraphs, no adjectives, equally devastating. It is the only time anyone in your administration wins one of these exchanges.' }]},

{ id:'e-anonymous', title:'Anonymous', who:C.press, tags:['press','power'],
  text:'A senior official has written an anonymous essay describing an internal effort to restrain you. ' +
       'It is in print. It is credible. Kaylee has a list of forty-one people who could have written it.',
  choices:[
    { label:'Hunt them. Interviews, phone records, the lot.', eff:{base:+6,press:-9,street:-6,congress:-6,courts:-5,auth:+9},
      res:'The hunt takes eleven months, finds nobody, and confirms every claim in the essay through the simple fact of its existence.' },
    { label:'Ignore it entirely. Never say the word.', eff:{press:+7,congress:+5,street:+4,base:-4,auth:+2},
      res:'Starved of a reaction, it is gone in nine days. The author, whoever they are, is genuinely disappointed.' },
    { label:'Demand the newspaper hand them over. Publicly.', eff:{base:+5,press:-11,courts:-8,congress:-6,auth:+6},
      res:'The paper declines in a two-sentence statement that is framed and hung in newsrooms. Your demand is quoted in press freedom reports about four other countries.' },
    { label:'Write a rival anonymous essay attacking yourself. Better than theirs.', eff:{base:+2,press:-1,street:-1,auth:+2}, wild:true,
      res:'It is sharper than the original and everybody assumes it is by a second official. Four investigations look for a person who is sitting in the Oval Office.' }]},

{ id:'e-tell-all', title:'The Book', who:C.lawyer, tags:['press','money'],
  text:'A former aide has a book coming. Sy has the manuscript. ' +
       '"Sir, there is nothing illegal in here. There are eleven things that are extremely embarrassing and one that is quite sad."',
  choices:[
    { label:'Sue to block publication.', eff:{base:+4,press:-10,courts:-8,congress:-5,cash:-0.3,auth:+5},
      res:'Prior restraint has lost every time since 1971. You lose in nine days and the injunction attempt adds 400,000 copies to the first printing.' },
    { label:'Say nothing. Let it come out.', eff:{press:+7,street:+5,congress:+4,base:-4},
      res:'It sells well for three weeks and is remaindered by autumn, as tell-alls are, because there are eleven of them a year.' },
    { label:'Enforce the NDA she signed.', eff:{base:+5,press:-8,courts:-7,cash:-0.2,auth:+6},
      res:'A court holds that a government employee cannot be bound by a private nondisclosure agreement about public duties. The ruling is short and is cited against you four more times.' },
    { label:'Write the foreword to her book.', eff:{base:+2,congress:+2,auth:-2,cash:+0.1}, wild:true,
      res:'Two pages, generous, funny, and completely disarming. The book sells four times as many copies and does one-tenth of the damage.' }]},

{ id:'e-intern', title:'The Intern', who:C.intern, tags:['levity','press'],
  text:'Madison has accidentally sent an internal strategy memo to the entire press distribution list. ' +
       'She is twenty. She has been crying. She has also, Deborah notes, already drafted her own resignation.',
  choices:[
    { label:'Accept the resignation. Make an example.', eff:{base:+2,press:-6,street:-5,auth:+2},
      res:'A twenty-year-old is named in four outlets for an email error. She is a policy director at a foundation within six years and is asked about this in every interview.' },
    { label:'"Everybody does it once." Tear it up.', eff:{press:+6,street:+6,congress:+4,base:-1},
      res:'It gets out that you were kind about it, because these things always get out. It buys you more goodwill in the building than any speech.' },
    { label:'Keep her and put her on the leak investigation.', eff:{press:+4,street:+3,auth:+4},
      res:'She becomes ferociously loyal and unusually good at the job, and is one of four people who does not write a book afterwards.' },
    { label:'Give her a promotion and put the memo on the website.', eff:{base:+1,congress:+2,press:-1,auth:-2}, wild:true,
      res:'The leaked strategy memo is published deliberately, in full, as official policy. It is now boring. Madison is a deputy director within four years.' }]},

{ id:'e-photographer', title:'The Photograph', who:C.photog, tags:['press','vanity'],
  text:'Renata has taken a photograph of you in an unguarded moment that is, professionally speaking, the best image of the presidency so far. ' +
       'It is also not flattering in the way you usually mean that word.',
  choices:[
    { label:'Release it. It\'s the real thing.', eff:{press:+9,street:+7,congress:+5,base:-4},
      res:'It runs everywhere and wins an award. In twenty years it is the image on the cover of every book about you, including the sympathetic ones.' },
    { label:'Kill it. Release the approved set.', eff:{base:+3,press:-5,street:-3,auth:+2},
      res:'The approved set is competent and lifeless. Renata leaves in year two and the official photographic record of your presidency is, from then on, indistinguishable from advertising.' },
    { label:'Kill it and take her camera cards at the end of each day.', eff:{base:+2,press:-8,street:-5,courts:-3,auth:+4},
      res:'The official photographer is now subject to a nightly review. Four decades of White House photographic practice ends in one email.' },
    { label:'Release it, and every other unflattering frame she has.', eff:{base:-4,congress:+2,press:+2,street:+3,auth:-2}, wild:true,
      res:'Four hundred thousand frames, unedited, on a public server. It is the most complete photographic record of any presidency and it destroys the concept of the approved image.' }]},

{ id:'e-pool', title:'The Pool Report', who:C.press, tags:['press','levity'],
  text:'The pool reporter has filed a report noting you had a second scoop of ice cream while guests had one. ' +
       'Kaylee is here because you have asked her four times who wrote it.',
  choices:[
    { label:'Find out. Pull their credential.', eff:{base:+4,press:-10,street:-5,auth:+5},
      res:'A credential is pulled over ice cream. It is reported in nine countries. The phrase "two scoops" follows you until you die.' },
    { label:'Lean in. Order three next time. On camera.', eff:{base:+6,press:+5,street:+4,auth:+1},
      res:'You eat three scoops at a state dinner with total commitment. It is funny, it is human, and it ends the story by absorbing it.' },
    { label:'Say nothing. It\'s ice cream.', eff:{press:+4,street:+3,base:-1},
      res:'It is ice cream. Nothing further happens. This outcome was available at every stage.' },
    { label:'Send the pool reporter a tub of the ice cream. Every week.', eff:{base:+2,street:-1,auth:-2}, wild:true,
      res:'A weekly delivery to the press workspace for four years. It is transparently a bribe, it costs $9 a week, and it works far better than any communications strategy.' }]},

{ id:'e-doorknob', title:'The Door', who:C.usher, tags:['levity'],
  text:'You have been filmed pulling on a door that opens outward, for eleven seconds, in front of a foreign delegation. ' +
       'Alvin notes the door has opened outward since 1902.',
  choices:[
    { label:'Have the door rehung to open inward.', eff:{base:+2,press:-4,street:-3,cash:-0.1,auth:+2},
      res:'The historic preservation office objects in writing. The door is rehung. The objection letter is the most-requested document in the archive for four years.' },
    { label:'Laugh about it at the next event.', eff:{press:+6,street:+5,base:+3},
      res:'"I have the codes but I do not have the door." It is your best joke of the year and you did not write it.' },
    { label:'Have the eleven seconds removed from the official feed.', eff:{base:+1,press:-5,street:-4,auth:+3},
      res:'Four outlets already had it. The removal is noticed within an hour and becomes a bigger story than a man and a door.' },
    { label:'Hold a press conference about the door. Take questions.', eff:{base:+2,press:-1,street:-1}, wild:true,
      res:'Eleven minutes on the door, entirely deadpan, taking it completely seriously. It is the funniest thing you ever do and four reporters have to leave the room.' }]},

{ id:'e-nickname-self', title:'The Title', who:C.social, tags:['vanity','levity'],
  text:'Brayden has noticed that supporters have started using a grandiose honorific for you online. ' +
       'It is not an office. It is not a rank. It has about four million uses a month and it is growing.',
  choices:[
    { label:'Use it. In official communications.', eff:{base:+7,press:-8,street:-6,congress:-5,courts:-4,auth:+7},
      res:'It appears on a federal webpage. A career web administrator removes it. It reappears. This continues for nine weeks until the administrator is reassigned.' },
    { label:'Enjoy it. Never use it yourself.', eff:{base:+5,press:-1,auth:+3},
      res:'Perfect. The movement uses it, you never do, and you get the whole benefit with none of the citation.' },
    { label:'Discourage it. "I work for them."', eff:{press:+8,street:+7,congress:+5,base:-7,auth:-3},
      res:'A single sentence that four historians later call the most important thing you ever said, and which your own supporters ignore completely.' },
    { label:'Adopt it, but only for internal memos.', eff:{base:+2,congress:-4,courts:-4,press:+1,auth:+5}, wild:true,
      res:'It appears on four thousand internal documents and never once in public. It is discovered in an archive release in 2046 and is far more damning than any speech.' }]},

{ id:'e-cousin', title:'The Cousin', who:C.lawyer, tags:['money','levity'],
  text:'A cousin you have met four times is selling "presidential-adjacent" consulting services for $90,000 a month. ' +
       'Sy notes that this is not illegal, that the clients are getting nothing, and that four of them are foreign.',
  choices:[
    { label:'Shut it down. Have him told, firmly.', eff:{press:+6,courts:+5,congress:+4,base:-2,cash:-0.1},
      res:'He stops within a week and complains about it at every family event for the rest of your life.' },
    { label:'Nothing. He\'s selling air. Let him.', eff:{press:-4,courts:-5,congress:-4,base:+3,cash:+0.1,auth:+3},
      res:'Four foreign clients pay $4 million for meetings that never happen. In year three, one of them is asked about it under oath.' },
    { label:'Have him give the clients something. Small.', eff:{base:-2,press:-5,courts:-7,congress:-6,cash:+0.5,auth:+5},
      res:'The moment a meeting actually happens, it stops being a man selling air and starts being a channel. The distinction is the entire criminal statute.' },
    { label:'Hire him properly. Give him a real job with a real salary.', eff:{base:+1,congress:+2,courts:+2,press:-1,street:-3,auth:-2,cash:-0.1}, wild:true,
      res:'He is bad at the job and cannot sell access to a position he visibly holds. It costs $190,000 a year and removes a nine-figure liability.' }]},

/* ---------- press & information ---------- */

{ id:'e-interview', title:'The Interview', who:C.press, tags:['press'],
  text:'A serious journalist has requested an hour, on the record, on tape, no topics off limits. ' +
       'Kaylee thinks it is a trap. Kaylee is right that it is a risk and wrong that it is a trap.',
  choices:[
    { label:'Do it. The full hour. No conditions.', eff:{press:+9,street:+7,congress:+5,base:-5,auth:+2},
      res:'You are better at this than anyone expects for forty minutes and worse than anyone expects for four. Both halves run. The forty helps more than the four hurts.' },
    { label:'Fifteen minutes with a friendly outlet instead.', eff:{base:+5,press:-4,auth:+2},
      res:'Comfortable, useless, and it convinces the people who arranged it that you are being covered fairly.' },
    { label:'Do it, then release your own unedited recording.', eff:{press:+4,base:+6,street:+3,auth:+4},
      res:'A tactic that spreads to every politician in the country within two years and permanently changes how interviews are conducted. Genuinely innovative and entirely defensive.' },
    { label:'Do it, and let her edit the final cut herself.', eff:{base:-6,congress:+3,press:+4,street:+4,auth:-2}, wild:true,
      res:'You surrender editorial control of your own interview to a hostile journalist. She cuts it fairly, because she is a professional, and the gesture is worth more than the hour.' }]},

{ id:'e-fact-check', title:'The Fact Check', who:C.social, tags:['press'],
  text:'A wire service has counted your false or misleading claims and published a running total. ' +
       'It is at 8,411. Brayden thinks the number is the story and can be turned around.',
  choices:[
    { label:'Attack the counters. Question the methodology.', eff:{base:+7,press:-7,street:-4,auth:+3},
      res:'The methodology is published, detailed and boring, and holds up entirely. The counter reaches 30,000 by the end of the term and becomes its own headline.' },
    { label:'Ignore it completely.', eff:{press:+3,base:+2,auth:+1},
      res:'A number that nobody defends against is just a number. It is published four times a year and read by the people who already read it.' },
    { label:'Sell a hat with the number on it.', eff:{base:+9,press:-4,street:-3,cash:+0.3,auth:+3},
      res:'You have converted an indictment into merchandise. It sells 900,000 units and the wire service quietly stops updating the counter.' },
    { label:'Hire the fact-checkers. Put them in the building.', eff:{base:+1,congress:+3,courts:+2,auth:-2}, wild:true,
      res:'Four of them, paid, with a desk and a mandate to publish. The count keeps rising. It is published on a government website. Nobody can work out whether you have won or lost.' }]},

{ id:'e-leak-personal', title:'The Photograph Of A Document', who:C.spy, tags:['security','press'],
  text:'A photograph taken over your shoulder at an event shows a briefing page in legible detail. ' +
       'Hance: "It is classified. It is on the internet. The person who took it is a supporter with a phone."',
  choices:[
    { label:'Prosecute the photographer.', eff:{base:+3,press:-8,courts:-6,street:-6,auth:+5},
      res:'He is 61, drove four hours to see you, and is charged under a 1917 statute. The case is dropped in eleven weeks and he votes for you anyway.' },
    { label:'Change the procedure. Nobody reads paper in public.', eff:{street:+6,congress:+5,press:+4,auth:+3},
      res:'A sensible operational fix that a staffer suggested on day one and that nobody implemented until a photograph forced it.' },
    { label:'Declassify the page retroactively. Problem solved.', eff:{base:+4,press:-5,courts:-4,congress:-4,auth:+8},
      res:'You can do this. That you can do this is the reason the classification system has, since your presidency, been described in academic papers as "discretionary in both directions."' },
    { label:'Declassify the entire page and hand out copies at the rally.', eff:{base:+3,congress:-6,courts:-4,press:-6,street:-8,auth:+6}, wild:true,
      res:'Eleven thousand people receive a photocopy of a classified briefing page, now legally unclassified. Four allied services stop sharing that category of material permanently.' }]},

{ id:'e-poll-bad', title:'The Bad Poll', who:C.poll, tags:['press','base','levity'],
  text:'A poll has you eleven points down. Nadia has checked the methodology. ' +
       'It is a good poll from a good outfit with a sample of 1,800 and she cannot find anything wrong with it.',
  choices:[
    { label:'Call it a fake poll. Cite four better ones.', eff:{base:+6,press:-5,auth:+2},
      res:'The four better ones are internal, unpublished and were commissioned by you. This is disclosed in the fine print of a fundraising email.' },
    { label:'Accept it. Change something.', eff:{street:+7,press:+6,congress:+4,base:-4,auth:+1},
      res:'You adjust one policy in response to an actual measurement of what people want. It moves four points. This works and you never do it again.' },
    { label:'Commission nine polls until one is good. Release that one.', eff:{base:+5,press:-4,cash:-0.2,auth:+3},
      res:'The ninth poll has you up two. It has a sample of 400 and a four-day field period. It is the one that goes on the wall.' },
    { label:'Call the pollster and ask what you should do differently.', eff:{base:-4,congress:+2,press:+2,street:+3,auth:-2}, wild:true,
      res:'She is so surprised she needs a moment. She tells you three concrete things. You do two of them and gain six points, and she never fully believes it happened.' }]},

{ id:'e-conspiracy', title:'The Theory', who:C.social, tags:['base','press'],
  text:'A theory circulating among your supporters involves four government agencies, a shipping container and a number. ' +
       'Brayden notes it has eleven million impressions and that you have been asked about it four times.',
  choices:[
    { label:'"A lot of people are saying it. I don\'t know."', eff:{base:+8,press:-8,street:-6,congress:-4,auth:+4},
      res:'Not endorsing it is not the same as not endorsing it. Belief in it doubles in six weeks among people who heard you decline to deny it.' },
    { label:'Debunk it flatly. It\'s nonsense and you know it.', eff:{press:+8,street:+7,congress:+5,base:-9,auth:-2},
      res:'Belief drops nine points overnight, which demonstrates you could have done this at any time about any of them.' },
    { label:'Say nothing and post about something else.', eff:{base:+2,press:-2,auth:+1},
      res:'It burns for three weeks and is replaced by a different theory involving four different agencies and a different number.' },
    { label:'Invent a rival theory that is obviously nonsense and see which one wins.', eff:{base:+2,courts:-4,press:-6,street:-6,auth:+3}, wild:true,
      res:'Yours involves a lighthouse. It overtakes the original within eleven days. You have proved something about the information environment that you find genuinely upsetting.' }]},

{ id:'e-weather', title:'The Forecast', who:C.press, tags:['levity','press'],
  text:'You have contradicted the National Weather Service about tomorrow\'s conditions in a specific city, on air, with confidence. ' +
       'They have four supercomputers. You have a feeling.',
  choices:[
    { label:'Stand by it. Weather is a prediction, not a fact.', eff:{base:+4,press:-5,street:-3,auth:+2},
      res:'It rains. You claim it did not rain where you meant. Four meteorologists post the radar loop and one of them becomes briefly famous.' },
    { label:'"I\'m not a meteorologist." Move on.', eff:{press:+5,street:+4,base:-1},
      res:'An unexpectedly effective sentence that you could deploy about eleven other subjects and never do.' },
    { label:'Have the Weather Service issue a supportive statement.', eff:{base:+3,press:-8,street:-6,auth:+4},
      res:'They issue it. A field office in the affected city puts out a contradicting forecast four hours later because that is their actual job.' },
    { label:'Take a meteorology exam on live television.', eff:{base:+2,press:-1,auth:-2}, wild:true,
      res:'You score 31%. You are cheerful about it. The National Weather Service gains four hundred thousand new social followers and a permanent affection for you.' }]},

/* ---------- foreign & travel ---------- */

{ id:'e-handshake', title:'The Handshake', who:C.state, tags:['foreign','levity'],
  text:'A head of government has developed a technique of gripping your hand and not letting go for eleven seconds. ' +
       'It is on video from four angles. He is doing it deliberately and everybody knows it.',
  choices:[
    { label:'Out-grip him next time. Make it a contest.', eff:{base:+6,press:-3,street:-2,auth:+2},
      res:'The rematch runs nineteen seconds and is broadcast live. Two heads of state are visibly straining. It is the single most watched diplomatic clip of the decade.' },
    { label:'Refuse the handshake entirely. Nod instead.', eff:{base:+4,press:-5,congress:-4,street:-3,auth:+3},
      res:'The refusal is the story for four days. His office says nothing at all, which is the correct play and which they clearly rehearsed.' },
    { label:'Let him have it. It\'s a handshake.', eff:{press:+5,congress:+4,street:+3,base:-3},
      res:'You get a trade concession out of him three months later. He keeps the handshake and you keep the tariff schedule.' },
    { label:'Bring a second hand. Shake with both.', eff:{base:+3,congress:+1,press:-1,street:-1,auth:-2}, wild:true,
      res:'A two-handed grip of unnerving warmth held for nineteen seconds. He never attempts the technique again with anybody, ever.' }]},

{ id:'e-motorcade', title:'The Motorcade', who:C.home, tags:['street','levity'],
  text:'Your motorcade has closed a major artery in a city of nine million during rush hour for the fourth time this month. ' +
       'Duane has the numbers: eleven thousand vehicles, average delay fifty minutes.',
  choices:[
    { label:'Fly instead. Even for short trips.', eff:{street:+5,press:+3,cash:-0.3,auth:+1},
      res:'A helicopter costs $18,000 an hour and saves eleven thousand people fifty minutes each. It is, remarkably, a rational trade.' },
    { label:'Keep the motorcade. Add outriders.', eff:{base:+3,street:-6,press:-4,auth:+3},
      res:'A woman in labour is delayed twenty-two minutes and gives an interview. It runs in every local outlet in the metro area.' },
    { label:'Move the events to weekends.', eff:{street:+6,press:+4,base:-2,auth:+1},
      res:'Nobody notices, which is the entire objective, and Boyd rearranges four months of scheduling to achieve it.' },
    { label:'Take the subway.', eff:{base:+2,congress:+2,street:+1,auth:-2}, wild:true,
      res:'The Secret Service ages visibly. You are on a public train for eleven minutes with about ninety commuters, four of whom say something you think about for years.' }]},

{ id:'e-rain', title:'The Cemetery', who:C.gen, tags:['military','press'],
  text:'A visit to an overseas military cemetery has been scrubbed. The stated reason is weather. ' +
       'Tarrant notes that four other delegations went, by car, in the same weather.',
  choices:[
    { label:'Stand by the weather. It was the helicopter.', eff:{base:+3,street:-9,press:-9,congress:-8,auth:+2},
      res:'Four staff who were there give accounts, on the record, using their names. It becomes one of the four things everyone knows about your presidency.' },
    { label:'Go by car. Late. In the rain.', eff:{street:+9,press:+8,congress:+7,base:+3,auth:+1},
      res:'You stand in the rain for forty minutes with no press pool present. Somebody photographs it anyway from a road and it is the best picture of you that exists.' },
    { label:'Reschedule for the morning. Say why plainly.', eff:{street:+6,press:+6,congress:+5},
      res:'"The helicopter could not fly and the drive was two hours and I made a bad call." Nine words of honesty removes a four-year story.' },
    { label:'Walk. It\'s four miles. Go on foot in the rain.', eff:{base:+2,congress:+4,street:+1,auth:-2}, wild:true,
      res:'Four miles, ninety minutes, soaked through, no umbrella. You arrive late and filthy at a cemetery. It is the single best decision of your presidency.' }]},

{ id:'e-toast', title:'The Toast', who:C.state, tags:['foreign','levity'],
  text:'You are required to give a toast in a country whose leader you have insulted publicly four times. ' +
       'Muriel has written something gracious. You have written something else.',
  choices:[
    { label:'Read hers. Word for word.', eff:{press:+6,congress:+5,street:+4,base:-4},
      res:'It is warm, specific and mentions his mother\'s hometown. He is visibly moved. Muriel spent four hours on it and nobody will ever know.' },
    { label:'Read yours. Make it about you.', eff:{base:+5,press:-5,congress:-5,street:-4,auth:+2},
      res:'Eleven minutes about your electoral performance, delivered to a room of people who did not vote in it.' },
    { label:'Go off-script and be unexpectedly generous.', eff:{press:+7,congress:+6,street:+5,base:-2,auth:+2},
      res:'You say something true about his country that nobody wrote for you. It is reported there for a week and it is worth more than the trade annexe.' },
    { label:'Toast his mother. Learn nine words of the language first.', eff:{base:+1,congress:+3,press:-1,street:-1,auth:-2}, wild:true,
      res:'You get four of the nine words wrong. His mother, who is 91 and present, is delighted. The bilateral relationship improves measurably for a decade.' }]},

{ id:'e-gift-give', title:'The Gift', who:C.state, tags:['foreign','levity'],
  text:'Protocol requires a gift for a visiting monarch. The office has proposed a first-edition book and a hand-bound atlas. ' +
       'You have proposed a signed photograph of yourself.',
  choices:[
    { label:'The photograph. It\'s personal.', eff:{base:+4,press:-5,congress:-4,street:-3,auth:+2},
      res:'It is accepted with impeccable grace and appears in no photograph of any room in that palace, ever.' },
    { label:'The atlas. It took someone nine months.', eff:{press:+5,congress:+5,street:+3},
      res:'It is displayed. It is mentioned in his memoir. The binder is invited to the palace and cries.' },
    { label:'Both. And a hat.', eff:{base:+5,press:+2,auth:+1},
      res:'He wears the hat. Once. For eleven seconds. The photograph exists and both governments have quietly agreed never to mention it.' },
    { label:'Give him the dog\'s favourite toy. Explain why.', eff:{base:+2,congress:+1,press:-1,auth:-2}, wild:true,
      res:'A chewed rubber duck, presented sincerely, with an explanation. It is in a glass case in a palace and is mentioned in his memoir at greater length than any treaty.' }]},

/* ---------- odds & ends ---------- */

{ id:'e-bunker', title:'The Bunker', who:C.home, tags:['street','press'],
  text:'During a protest outside, the detail moved you to the secure facility below the residence for fifty minutes. ' +
       'This is standard procedure. It has also leaked, and the word being used is not "procedure."',
  choices:[
    { label:'"I went down to inspect it."', eff:{base:+4,press:-8,street:-6,congress:-4,auth:+2},
      res:'Nobody believes it. The word attaches to you permanently and is chanted, outside, that same night, by more people than were there before.' },
    { label:'"The detail moved me. That\'s their job."', eff:{press:+7,street:+5,congress:+4,base:-3},
      res:'Entirely true, entirely normal, and it kills the story in a day because there was never a story.' },
    { label:'Walk out through the protest the next morning.', eff:{base:+8,street:-7,press:-5,auth:+5},
      res:'A cleared route, four hundred officers, and a photograph on the other side. It is either courage or a set, and the argument about which never resolves.' },
    { label:'Hold a press conference from inside the bunker.', eff:{base:+2,congress:+1,press:+1,street:-5,auth:+2}, wild:true,
      res:'You take questions from a reinforced room fourteen metres underground. It is absurd, it is transparent, and it removes the word from the story entirely.' }]},

{ id:'e-eclipse', title:'The Eclipse', who:C.doc, tags:['levity','press'],
  text:'A total eclipse is passing over the capital. Everyone has been issued protective glasses. ' +
       'Admiral Prine has issued four separate written warnings about looking directly at it.',
  choices:[
    { label:'Look at it. Briefly. Without the glasses.', eff:{base:+5,press:-3,street:-2},
      res:'It is photographed from eleven angles. It becomes a reaction image within nine minutes and remains one for a decade. Your vision is fine.' },
    { label:'Wear the glasses like a normal person.', eff:{press:+4,street:+3},
      res:'A photograph of a president in cardboard glasses, grinning. Warm, silly, entirely without consequence.' },
    { label:'Watch it on television from indoors.', eff:{press:+1,base:-2},
      res:'Nothing happens. It is the only recorded instance of a decision by you producing no effect whatsoever.' },
    { label:'Declare the eclipse a federal holiday. Effective in four minutes.', eff:{base:+3,congress:-4,press:+1,street:+2,auth:-2}, wild:true,
      res:'The federal government closes for ninety minutes. Nine hundred thousand employees go outside and look up. It is, by a distance, the most popular executive order of the term.' }]},

{ id:'e-mispronounce', title:'The Name', who:C.hist, tags:['levity','press'],
  text:'You have mispronounced the name of a national landmark four times in one speech, each time differently. ' +
       'Dr. Weir has helpfully written it phonetically on a card, which is now in front of you.',
  choices:[
    { label:'Read the card. Get it right.', eff:{press:+4,street:+3,base:+1},
      res:'You get it right and pause slightly afterwards, pleased with yourself, which is caught on camera and is genuinely endearing.' },
    { label:'"That\'s how I say it." Keep going.', eff:{base:+4,press:-3,street:-2,auth:+1},
      res:'Four thousand residents of that area post the correct pronunciation. It becomes a local point of pride and a tourism campaign.' },
    { label:'Suggest the landmark be renamed something easier.', eff:{base:+5,press:-6,street:-5,congress:-3,auth:+3},
      res:'A bill is actually introduced. It has four cosponsors. It dies, but it existed, and Dr. Weir keeps a copy.' },
    { label:'Learn to say it perfectly and then say it forty times.', eff:{base:+2,press:-2,street:-1,auth:+1}, wild:true,
      res:'Dr. Weir coaches you for an hour. You then use the name at every opportunity for a fortnight, correctly, with visible pride. It is oddly endearing.' }]},

{ id:'e-thermostat', title:'The Thermostat', who:C.usher, tags:['levity'],
  text:'The Oval Office is being kept at a temperature that four separate visiting delegations have described, ' +
       'independently, as "notable." Alvin has been asked to raise it further.',
  choices:[
    { label:'Raise it. I like it warm.', eff:{base:+2,press:-2,congress:-3,auth:+1},
      res:'A foreign minister nearly faints during a bilateral. It is in his memoir, in a chapter about negotiating tactics, where he assumes it was one.' },
    { label:'Leave it. It\'s a shared room.', eff:{congress:+3,press:+2},
      res:'Nobody mentions the temperature again, which is what happens when a room is a normal temperature.' },
    { label:'Raise it, and never tell anyone why.', eff:{base:+2,congress:-4,press:-2,auth:+3},
      res:'Four separate columnists write theories about it as a negotiating technique. Two of them are published in serious outlets. It was because you like it warm.' },
    { label:'Set it by public vote. Live. Every morning.', eff:{base:+2,congress:+1,press:-1,street:-1,auth:-2}, wild:true,
      res:'The nation votes daily on the temperature of the Oval Office. Turnout exceeds four million. It is the most participatory thing the federal government has ever attempted.' }]},

{ id:'e-pen', title:'The Pens', who:C.cos, tags:['levity','vanity'],
  text:'You have been signing with a pen bearing your signature in gold. ' +
       'Deborah notes the tradition is to use many pens and give them away, and that you have given away zero.',
  choices:[
    { label:'Keep them. They\'re mine.', eff:{base:+2,congress:-4,press:-2,auth:+2},
      res:'A tradition that cost nothing and made eleven legislators feel important is discontinued. Four of them mention it, unprompted, in later interviews.' },
    { label:'Give them out. All of them. Every signing.', eff:{congress:+7,press:+4,street:+3,base:-1,cash:-0.1},
      res:'It costs $9,000 a year and buys more legislative goodwill than a $40 million advertising campaign. It is the best value in Washington.' },
    { label:'Sell them. Signed, numbered, limited edition.', eff:{base:+6,press:-5,congress:-5,cash:+0.3,auth:+2},
      res:'Four hundred pens at $2,500 each. They sell in nine minutes. An ethics office asks a question and is told the pens are personal property.' },
    { label:'Give the pens to the people the bill actually affects.', eff:{base:+1,congress:+2,street:+1,auth:-2}, wild:true,
      res:'Forty pens posted to forty people named in the legislation. Nine of them write back. Two of the letters are framed in the West Wing for the rest of the term.' }]},

{ id:'e-helicopter', title:'The Lawn Interview', who:C.press, tags:['press','levity'],
  text:'You have started taking questions on the lawn with the helicopter running behind you. ' +
       'Kaylee notes it is loud enough that nobody can quote you accurately and that you appear to have worked this out.',
  choices:[
    { label:'Keep doing it. Every time.', eff:{base:+5,press:-6,street:-3,auth:+5},
      res:'You take four hundred questions in a year and answer none of them in a way that can be transcribed. It is the most effective press strategy of the modern era.' },
    { label:'Shut the engine off. Take real questions.', eff:{press:+8,street:+6,congress:+4,base:-4},
      res:'Eleven minutes of audible answers. Four of them are news. Two of them are problems. You never do it again.' },
    { label:'Do it, but hand out a written transcript afterwards.', eff:{press:+5,base:+3,auth:+3},
      res:'The transcript is accurate and the noise remains, so you get the deniability and the record simultaneously. Genuinely clever.' },
    { label:'Turn the engine off and answer questions until they run out.', eff:{base:+1,congress:+2,auth:-2}, wild:true,
      res:'Four hours. They run out at 11:40pm. Nobody has ever exhausted a press corps before and nobody manages it again.' }]},

{ id:'e-cat', title:'The Cat', who:C.usher, tags:['levity'],
  text:'A cat has been living in the residence for approximately nine years across two administrations. ' +
       'Nobody brought it. Nobody owns it. Alvin refers to it, formally, as "the resident."',
  choices:[
    { label:'Adopt it officially. Give it a title.', eff:{press:+6,street:+5,base:+4},
      res:'"Chief Mouser to the Executive Residence." It has a social account with two million followers within a year and its approval rating is never measured below 80%.' },
    { label:'Have it removed.', eff:{press:-5,street:-7,base:-7},
      res:'You cannot remove it. Four separate attempts fail. Alvin is, all four times, deeply unhelpful in ways that cannot be proven.' },
    { label:'Ignore it. It was here first.', eff:{press:+3,street:+2},
      res:'It sits on the Resolute Desk during a televised address, in shot, for six minutes. Nobody watching hears a word you say.' },
    { label:'Hold a state funeral for the cat when the time comes. Full honours.', eff:{base:+2,congress:+1,press:-1,street:+1,auth:-2}, wild:true,
      res:'It happens in year three. Nine hundred people attend. Four networks carry it live and there is not one cynical word said about it anywhere.' }]},

{ id:'e-elevator', title:'The Elevator', who:C.gov, tags:['street','press'],
  text:'You have been caught in a lift for eleven minutes with Governor Vasquez-Moore, who has sued you nine times. ' +
       'There is no press, no staff and no signal.',
  choices:[
    { label:'Talk to her. Actually talk.', eff:{street:+8,press:+6,congress:+6,courts:+4,base:-5},
      res:'You find out she has a son in the service and that her ninth suit was about something you did not know was happening. Two policies change quietly within a month.' },
    { label:'Stand in silence for eleven minutes.', eff:{base:+2,press:-1},
      res:'Eleven minutes. She hums, once, which she later says was deliberate.' },
    { label:'Threaten her. Nobody\'s recording.', eff:{base:+3,street:-9,courts:-8,press:-8,congress:-7,auth:+5},
      res:'She writes it down in the car, dates it, and sends it to her counsel. It appears, verbatim, in a filing four years later.' },
    { label:'Press every button. Extend the eleven minutes to forty.', eff:{base:-6,congress:+3,courts:+2,press:+2,street:+4,auth:-2}, wild:true,
      res:'Forty minutes with your most effective opponent and no way out for either of you. Two policies change. She never tells anyone you pressed the buttons deliberately.' }]},

{ id:'e-anthem-forget', title:'The Words', who:C.press, tags:['levity','press'],
  text:'You have been filmed at a stadium not singing the anthem. The clip is eleven seconds. ' +
       'Kaylee notes that you have criticised four other people for exactly this.',
  choices:[
    { label:'"I was singing internally."', eff:{base:+4,press:-4,street:-3,auth:+1},
      res:'A phrase that immediately becomes a unit of American irony, applied to every unfulfilled commitment for a decade.' },
    { label:'Learn the second verse and sing it next time.', eff:{base:+5,press:+4,street:+4},
      res:'Almost nobody knows there is a second verse. You sing it at four events. It is, unaccountably, a genuine hit with your base.' },
    { label:'Say nothing. Sing next time.', eff:{press:+3,street:+2},
      res:'You sing next time. Nobody films it, because nobody films a man singing an anthem correctly.' },
    { label:'Learn all four verses. Sing them all. Every time.', eff:{base:+3,press:-2,street:-1,auth:+1}, wild:true,
      res:'Nobody knows there are four verses. Stadium anthem performances now run six minutes because you will not stop and nobody is willing to be the one to interrupt.' }]},

{ id:'e-signature', title:'The Signature', who:C.hist, tags:['levity','vanity'],
  text:'Dr. Weir notes your signature has grown 40% larger over eighteen months and now takes up most of the page. ' +
       'She mentions this as an archival storage issue. She is not, entirely, mentioning it as an archival storage issue.',
  choices:[
    { label:'Make it bigger. It should be visible from space.', eff:{base:+4,press:-3,street:-2,auth:+2},
      res:'A graphologist gives four interviews. The interviews are unkind and unfalsifiable and everyone enjoys them enormously.' },
    { label:'Shrink it back. Fit the box.', eff:{press:+3,congress:+2},
      res:'Nobody notices. Weir updates the storage specification and moves on with her life.' },
    { label:'"Is that a real field of study?"', eff:{press:+4,street:+3,base:+2},
      res:'She explains, honestly, that it is not, and that she raised it because of the boxes. You believe her and she is telling the truth and you are both, briefly, on the same side.' },
    { label:'Shrink it until it is illegible and see if anything is invalid.', eff:{base:+1,courts:-6,auth:+3}, wild:true,
      res:'A four-millimetre mark that no expert can authenticate. Nine documents from this period are later disputed on exactly this ground and it takes a decade to resolve.' }]},

{ id:'e-fly', title:'The Fly', who:C.press, tags:['levity','press'],
  text:'During a televised event, a fly landed on your head and remained there for two minutes and three seconds. ' +
       'It was the most-clipped moment of the broadcast by a factor of forty.',
  choices:[
    { label:'Never acknowledge it.', eff:{base:+2,press:-2},
      res:'Two million fly-related products are sold by other people within a week. You see none of it.' },
    { label:'Sell a fly swatter. Merchandise it in nine hours.', eff:{base:+6,press:+4,cash:+0.2,auth:+1},
      res:'Forty thousand units at $25. You have monetised a humiliation faster than anyone in political history and it is, honestly, impressive.' },
    { label:'Blame the venue and demand an inquiry.', eff:{base:+1,press:-6,street:-4,auth:+1},
      res:'A federal facilities inquiry into a fly. It costs $40,000 and produces a four-page report that is FOIA\'d immediately and read by everyone.' },
    { label:'Appoint the fly to a federal advisory board.', eff:{base:+3,congress:-4,press:+1,street:+1,auth:-2}, wild:true,
      res:'It has a name, a term of office and, briefly, a page on a government website. The page is preserved by an archival service and is still online.' }]},

{ id:'e-jacket', title:'The Jacket', who:C.girl, tags:['press','levity'],
  text:'A member of your family wore a jacket with a printed slogan on it to a serious event. ' +
       'The slogan is four words long and can be read two ways, both bad.',
  choices:[
    { label:'"It was about the media." Explain it.', eff:{base:+4,press:-7,street:-6,auth:+2},
      res:'The explanation requires four sentences and creates two new stories. Nobody has ever successfully explained a jacket.' },
    { label:'Say nothing at all about the jacket.', eff:{press:+3,street:+2,base:-1},
      res:'It runs for three days and dies, because a jacket that nobody defends is just a jacket.' },
    { label:'Have her apologise plainly.', eff:{press:+6,street:+6,congress:+3,base:-4},
      res:'A four-sentence apology, delivered once, without qualification. It ends the story completely, which nobody in this building believed was possible.' },
    { label:'Wear the same jacket yourself the following day.', eff:{base:+3,press:-2,street:-1,auth:+1}, wild:true,
      res:'Solidarity through escalation. The story becomes about two people in one bad jacket rather than about the slogan, which is a downgrade and therefore a win.' }]},

{ id:'e-tweet-delete', title:'The Deleted Post', who:C.social, tags:['press','levity'],
  text:'You deleted a post after nine minutes. Four archival services captured it. ' +
       'Brayden notes that the Presidential Records Act arguably makes deleting it unlawful, and that this is now the story.',
  choices:[
    { label:'"It was a typo." Move on.', eff:{base:+3,press:-3,auth:+1},
      res:'It was not a typo and everyone has the original, but "typo" is a socially agreed exit and everybody takes it.' },
    { label:'Repost it, corrected, and keep both up.', eff:{press:+5,courts:+4,base:+2,auth:+1},
      res:'Full compliance with a records statute nobody thought about, achieved by accident, and it removes the entire story.' },
    { label:'Delete posts routinely from now on.', eff:{press:-7,courts:-6,congress:-4,base:+2,auth:+5},
      res:'Four thousand posts vanish over the term. An archival nonprofit sues, wins on the principle, and recovers all of them anyway.' },
    { label:'Post the deleted one again, with a note saying you deleted it.', eff:{base:+2,courts:+2,press:-1,street:-1,auth:-2}, wild:true,
      res:'Total compliance with a records statute nobody had thought about, achieved by being annoying. Four archival nonprofits publicly thank you, which nobody enjoys.' }]},

{ id:'e-golf-score', title:'The Scorecard', who:C.sched, tags:['levity','press'],
  text:'Your reported handicap has improved by four strokes in nine months at an age when handicaps do not improve. ' +
       'Boyd has the scorecards. He has not looked at the scorecards.',
  choices:[
    { label:'It\'s accurate. I\'ve been practising.', eff:{base:+3,press:-4,auth:+1},
      res:'Four playing partners give anonymous quotes to a golf magazine. The golf magazine piece is the single most detailed investigative work anyone does about you.' },
    { label:'Stop reporting a handicap at all.', eff:{press:+3,base:-1},
      res:'The story dies instantly. Nobody can write about a number that does not exist.' },
    { label:'Play a televised round against a professional.', eff:{base:+7,press:+5,street:+4,auth:+2},
      res:'You lose by eleven strokes, cheerfully, on camera, and it is the most likeable thing you do that year.' },
    { label:'Publish every scorecard for four years. All of them.', eff:{base:+1,auth:-2}, wild:true,
      res:'Nine hundred rounds, unedited. The handicap improvement is revealed to be entirely real and entirely due to playing nine hundred rounds, which is its own kind of indictment.' }]},

{ id:'e-ancestry', title:'The Ancestry', who:C.hist, tags:['levity','press'],
  text:'A genealogist has published research on your family line. Two claims you have made about it are wrong. ' +
       'One of them is a story you have told, warmly, at four hundred events.',
  choices:[
    { label:'Keep telling the story. It\'s a good story.', eff:{base:+4,press:-5,street:-3,auth:+1},
      res:'The genealogist keeps a running count of retellings. It reaches 611 and is published as a chart, which is somehow more devastating than an article.' },
    { label:'Correct it. Tell the real one instead.', eff:{press:+6,street:+5,base:+2},
      res:'The real one is better — an actual immigrant, an actual boat, an actual terrible job. You should have been telling it from the start.' },
    { label:'Have the genealogist attacked online.', eff:{base:+3,press:-8,street:-6,auth:+2},
      res:'She is 74, works alone, and receives four thousand messages. She publishes the full documentation in response and it is airtight.' },
    { label:'Fly the genealogist in and record a documentary with her.', eff:{base:+1,congress:+2,auth:-2}, wild:true,
      res:'Four episodes. She is 74, merciless and extremely good television. It is the highest-rated thing the administration ever produces.' }]},

{ id:'e-tv-appearance', title:'The Morning Show', who:C.social, tags:['press','base'],
  text:'A friendly morning programme has a standing offer for a weekly phone-in. ' +
       'Brayden thinks it is free airtime. Kaylee thinks it is forty unscripted minutes a week, on tape, forever.',
  choices:[
    { label:'Do it weekly. Never miss one.', eff:{base:+8,press:-6,street:-4,auth:+3},
      res:'Two hundred appearances over four years. It is the single most effective communication channel you have and it also generates, on tape, eleven of the fourteen worst things you ever say.' },
    { label:'Once a month. Prepared.', eff:{base:+4,press:-1,auth:+2},
      res:'Controlled, useful, and Kaylee gets to sleep on Tuesdays.' },
    { label:'No standing arrangement. Keep them wanting it.', eff:{base:-3,press:+4,auth:+2},
      res:'Scarcity works. Each appearance is now an event covered by outlets that would otherwise have ignored it.' },
    { label:'Do the weekly call, but take listener questions only.', eff:{base:+3,congress:+1,press:-2,auth:-2}, wild:true,
      res:'Four years of ordinary people asking direct questions on live radio. You are worse at it than with hosts and it is, by every measure, more effective.' }]},

{ id:'e-teleprompter', title:'The Two Speeches', who:C.writer, tags:['press','base'],
  text:'Gideon notes that you now reliably give two speeches: the one on the prompter, and the one you give instead. ' +
       'He has started writing both. He would like to know which one to put on the prompter.',
  choices:[
    { label:'Put the wild one on the prompter. Read it as written.', eff:{base:+7,press:-6,street:-5,congress:-4,auth:+4},
      res:'A written, vetted, staffed-out version of your improvisation. It is worse than the improvisation because the improvisation was at least sincere.' },
    { label:'Prompter for the substance, ten free minutes at the end.', eff:{base:+6,press:+3,street:+2,auth:+3},
      res:'The structure works so well that four other politicians adopt it within a year and one of them beats you with it.' },
    { label:'No prompter ever again.', eff:{base:+7,press:-7,street:-6,congress:-5,auth:+3},
      res:'Ninety minutes, unscripted, four nights a week. Gideon resigns in the spring and the speeches get, by any measure, considerably longer.' },
    { label:'Put the prompter on a delay so it lags four seconds behind you.', eff:{base:+2,press:-6,street:-4,auth:+2}, wild:true,
      res:'You spend eleven speeches arguing with a machine in front of an audience. Gideon watches from the wings with an expression nobody can read.' }]},

{ id:'e-secret-service', title:'The Detail', who:C.home, tags:['security','levity'],
  text:'Your protective detail has requested you stop the unannounced walkabouts. ' +
       'They have a memo. It is four pages. Duane is reading you the first paragraph and watching your face.',
  choices:[
    { label:'Keep doing it. That\'s the whole point of the job.', eff:{base:+7,street:+6,press:+5,congress:-3,auth:+2},
      res:'It is genuinely dangerous and genuinely popular. Four agents ask to be reassigned and eleven ask to be assigned.' },
    { label:'Stop. They do this for a living.', eff:{street:-3,press:-2,base:-3,congress:+3},
      res:'The detail is visibly relieved. You are visibly bored. Both conditions persist for four years.' },
    { label:'Compromise: announced walkabouts, cleared routes.', eff:{street:+4,press:+3,base:+3},
      res:'A cleared route with real people on it. It is 70% of the benefit at 10% of the risk and everybody involved considers it a good trade.' },
    { label:'Read the memo aloud to them and then do it anyway.', eff:{base:+3,congress:-4,street:+1,auth:+2}, wild:true,
      res:'You acknowledge every risk in detail, on the record, and proceed. The detail cannot object further and four of them privately respect it enormously.' }]},

{ id:'e-oval-decor', title:'The Portraits', who:C.hist, tags:['vanity','levity'],
  text:'Every president rearranges the Oval Office portraits. It is the most-analysed interior decorating in the world. ' +
       'Dr. Weir has the inventory. You have four requests and one of them is a mirror.',
  choices:[
    { label:'A populist and a general. And the mirror.', eff:{base:+5,press:-4,street:-3,auth:+2},
      res:'Four historians write four columns about the two portraits. Nobody writes about the mirror, which is the one that actually tells you something.' },
    { label:'Leave the room exactly as you found it.', eff:{press:+5,street:+4,congress:+3,base:-2},
      res:'The first president in sixty years to change nothing. Dr. Weir notes it in the record with what a reader could reasonably interpret as affection.' },
    { label:'A portrait of yourself, above the fireplace.', eff:{base:+3,press:-5,street:-6,congress:-5,auth:+4},
      res:'A portrait of the sitting president in the office of the sitting president. Every visiting delegation photographs it. Four of them do so specifically to send home.' },
    { label:'Hang a portrait of your least favourite predecessor.', eff:{base:-4,congress:+3,courts:+2,press:+2,street:+2,auth:-2}, wild:true,
      res:'Nobody can decide whether it is humility, provocation or a mistake. Four historians write four different columns and all of them are wrong.' }]},

{ id:'e-rally-late', title:'The Wait', who:C.sched, tags:['base','levity'],
  text:'Eleven thousand people have been standing in a field for four hours. It is 41 degrees. ' +
       'Boyd notes that nine people have been treated for exposure and that you are still ninety minutes out.',
  choices:[
    { label:'Get there. Now. Cut the last meeting.', eff:{base:+7,street:+5,press:+4},
      res:'You arrive forty minutes early instead of ninety late and mention the cold from the stage. They stay another hour after you finish.' },
    { label:'Keep them waiting. It builds the room.', eff:{base:+4,street:-6,press:-5,auth:+2},
      res:'It does build the room. It also puts four people in an ambulance, and the local paper leads with the ambulances.' },
    { label:'Send water and heaters ahead of you.', eff:{base:+6,street:+6,press:+5,cash:-0.1},
      res:'Nine hundred cases of water and forty heaters at a cost of $60,000. It is mentioned from the stage by a local organiser and the crowd cheers louder for that than for you.' },
    { label:'Go out and stand in the field with them for the ninety minutes.', eff:{base:+4,press:-1,street:+1,auth:-2}, wild:true,
      res:'You wait with the crowd rather than making them wait for you. Eleven thousand people in a cold field with the President standing among them. It is talked about for years.' }]},

{ id:'e-obit', title:'The Obituary', who:C.press, tags:['press','levity'],
  text:'A newspaper has, as every newspaper does, an obituary prepared for you. ' +
       'A draft has leaked. It is 4,000 words. Kaylee has read it and describes the last paragraph as "actually quite generous."',
  choices:[
    { label:'Demand it be rewritten.', eff:{base:+3,press:-7,street:-4,auth:+2},
      res:'Every newspaper in the world confirms they have one prepared for everyone. You have taught eleven million people how obituaries work.' },
    { label:'Read it. Correct four factual errors. Send them in.', eff:{press:+7,street:+5,base:+2,auth:+1},
      res:'The paper accepts all four corrections and adds a line thanking you. It is the strangest, most civilised interaction of your presidency.' },
    { label:'Post the generous last paragraph as an endorsement.', eff:{base:+6,press:+3,street:+2,auth:+2},
      res:'Quoting your own obituary approvingly, while alive, is a genuinely new thing for a human being to do and it is very funny.' },
    { label:'Record your own video obituary and give it to them.', eff:{base:+2,auth:-2}, wild:true,
      res:'Eleven minutes, to camera, embargoed until death. It is released in 2047 and it is far more honest than anything you said while alive.' }]},

{ id:'e-storm-photo', title:'The Flood', who:C.home, tags:['street','press'],
  text:'A flood has taken four hundred homes. Duane has a route through the worst of it. ' +
       'Boyd has a route past a rebuilt street with better light and no standing water.',
  choices:[
    { label:'The worst of it. Boots on, waders, all day.', eff:{street:+10,press:+9,congress:+6,base:+4,auth:+1},
      res:'You are photographed carrying somebody\'s dog. It is not staged, nobody planned it, and it is the image that runs for a decade.' },
    { label:'The good street. Better pictures.', eff:{base:+3,street:-7,press:-7,auth:+1},
      res:'A local reporter drives four blocks in the other direction and files the comparison. The comparison is the story.' },
    { label:'Don\'t go. Send money faster instead.', eff:{street:+6,congress:+4,press:-3,base:-3,cash:-0.2},
      res:'The money arrives nine days sooner because you were not there absorbing four hundred staff hours. Nobody notices. It helps more.' },
    { label:'Go to the worst street and stay the night in the shelter.', eff:{base:+2,congress:+3,street:+2,auth:-2}, wild:true,
      res:'You sleep on a camp bed in a school gym with four hundred people who have lost everything. No press. It leaks. It is the defining image of your presidency.' }]},

{ id:'e-farewell-staff', title:'The Departure', who:C.cos, tags:['power','press'],
  text:'Deborah Krank is leaving. She has served longer than anyone in the role in forty years. ' +
       'She has an envelope. "It\'s a memo. Read it after I\'ve gone, or don\'t."',
  choices:[
    { label:'Read it in front of her.', eff:{press:+6,street:+5,congress:+5,base:-3,auth:+2},
      res:'It is four paragraphs about what she thinks you are good at and one sentence about what she thinks will end you. You read it twice. She waits.' },
    { label:'Thank her. Don\'t read it.', eff:{press:+4,street:+3,base:+2},
      res:'You never read it. It surfaces in her memoir in 2039, in full, and the last sentence is quoted in every review.' },
    { label:'Attack her on the way out. Pre-empt the book.', eff:{base:+4,press:-9,congress:-7,street:-6,auth:+3},
      res:'She says nothing at all in response, ever, which is far more damaging than anything she could have said.' },
    { label:'Read it aloud to the whole senior staff, right there.', eff:{base:-6,congress:+3,courts:+2,press:+3,street:+3,auth:-2}, wild:true,
      res:'Forty people hear Deborah Krank\'s assessment of the President, in his own voice, including the last sentence. Nobody moves for some time afterwards.' }]},

{ id:'e-question-child', title:'The Question', who:C.press, tags:['press','levity'],
  text:'At a take-your-child-to-work event, an eight-year-old has asked you, into a live microphone, ' +
       'whether you have ever done something wrong and not admitted it.',
  choices:[
    { label:'"Yes. Lots of times." And mean it.', eff:{press:+9,street:+8,congress:+5,base:-4},
      res:'Four words. The room goes quiet. It leads every broadcast and is the only unguarded thing you say in public in four years.' },
    { label:'Make a joke and move to the next question.', eff:{base:+3,press:+1},
      res:'The joke is fine. The clip of the question, without your answer, is the one that circulates.' },
    { label:'"No. Not that I can think of."', eff:{base:+5,press:-7,street:-6,auth:+2},
      res:'The eight-year-old\'s face does a thing. The camera catches it. Her face, not your answer, is the image.' },
    { label:'Ask her what she thinks you should do about it.', eff:{base:+1,congress:+2,street:+1,auth:-2}, wild:true,
      res:'She thinks for four seconds and gives a better answer than your policy staff. You adopt it. It is genuinely adopted and it genuinely works.' }]},

{ id:'e-veterans-letter', title:'The Letters', who:C.vet, tags:['street','press'],
  text:'Gus Renner has brought eleven condolence letters for signature. Presidents have signed these by hand since 1917. ' +
       'There are, this month, eleven of them, and each one takes about four minutes if you read the file first.',
  choices:[
    { label:'Read every file. Sign every letter. Take the hour.', eff:{street:+9,press:+7,congress:+6,base:+4},
      res:'You call two of the families afterwards without telling anyone. One of those calls is described, eleven years later, in a book about the war, by the mother.' },
    { label:'Sign them. Don\'t read the files.', eff:{street:+3,press:+2},
      res:'Eleven signatures in nine minutes. It is the same letter to the families and a different thing to you.' },
    { label:'Autopen them. Renner can hand them over.', eff:{street:-8,press:-6,congress:-5,base:-4,auth:+2},
      res:'A family notices the signature is identical to one in a framed letter from another family. They post both. It runs for a week.' },
    { label:'Write eleven extra letters to the families of those who died waiting.', eff:{base:+1,congress:+3,street:+1,auth:-2}, wild:true,
      res:'Nobody asked you to. Nobody would have known. Four of the families release the letters and all four are, unmistakably, in your own handwriting.' }]},

{ id:'e-thanksgiving-call', title:'The Troops Call', who:C.gen, tags:['military','press'],
  text:'The traditional holiday video call to deployed units. Four locations, eleven time zones. ' +
       'Tarrant notes that one commander has been briefed to expect a question about the mission and has an honest answer prepared.',
  choices:[
    { label:'Ask the question. Take the honest answer live.', eff:{street:+8,press:+8,congress:+6,base:-4,auth:+1},
      res:'He says the mission is harder than anyone at home understands and needs eighteen more months. It is on live television. It is the most useful thing anyone tells the country that year.' },
    { label:'Keep it to thanks and holiday wishes.', eff:{street:+5,press:+4,base:+3},
      res:'Warm, appropriate, forty minutes, and four hundred people got to see their President say their unit\'s name.' },
    { label:'Use it to talk about domestic politics.', eff:{base:+5,street:-9,press:-8,congress:-7,auth:+2},
      res:'Serving personnel are used as a backdrop for a partisan message. Four of them are visible not reacting, which is its own kind of statement.' },
    { label:'Ask every unit what they actually need. Then get it for them.', eff:{base:+2,congress:+3,street:+1,auth:-2,cash:-0.3}, wild:true,
      res:'Four hundred specific requests, from socks to a better generator. All four hundred are filled within nine weeks. It is the most efficient procurement in Pentagon history.' }]},

{ id:'e-airport', title:'The Name On The Airport', who:C.sched, tags:['vanity','levity'],
  text:'A state legislature has voted to rename its largest airport after you. ' +
       'It passed by four votes. The city council of the city that owns the airport has voted the other way, by nine.',
  choices:[
    { label:'Accept enthusiastically. Attend the ceremony.', eff:{base:+6,press:-4,street:-5,auth:+3},
      res:'The signage costs $11 million and the city sues over ownership. Four years of litigation later the airport has two names on two different sets of signs.' },
    { label:'Decline. Suggest they name it after a local hero.', eff:{press:+7,street:+7,congress:+5,base:-4},
      res:'They name it after a nurse who ran a field hospital in 1944. It is unanimous. You are invited and you go and it is lovely.' },
    { label:'Accept and ask about the second-largest one too.', eff:{base:+4,press:-5,street:-6,congress:-4,auth:+3},
      res:'The request leaks. "And the other one" becomes shorthand, for four years, for a specific kind of ask.' },
    { label:'Accept, on condition it is named after both you and the nurse.', eff:{base:+2,congress:+2,press:-1,auth:-2}, wild:true,
      res:'Two names on one airport. The compromise is universally mocked for a fortnight and then universally accepted, and the nurse\'s family cries at the ceremony.' }]},

{ id:'e-time-cover', title:'The Cover', who:C.social, tags:['vanity','press','levity'],
  text:'A framed magazine cover featuring you hangs in four of your properties. ' +
       'Brayden has been asked about it by a reporter. The magazine says the issue does not exist.',
  choices:[
    { label:'Take them down quietly. All four.', eff:{press:+3,base:-2},
      res:'They come down over a weekend. The story runs anyway with photographs of the walls, which now have four rectangles of unfaded paint.' },
    { label:'Leave them up. It\'s a tribute.', eff:{base:+3,press:-6,street:-4,auth:+1},
      res:'A fabricated magazine cover, framed, in a building where foreign leaders are entertained. It is described in a diplomatic cable that leaks in 2038.' },
    { label:'Get on a real cover. Give them the interview.', eff:{press:+6,base:+4,street:+3,auth:+2},
      res:'You do the interview and get the cover. The cover line is not the one you wanted, but the cover is real, and it replaces all four.' },
    { label:'Frame the fake covers next to a real rejection letter.', eff:{base:+2,auth:-2}, wild:true,
      res:'The forgery and the refusal, side by side, in four properties. It is either startling self-awareness or a complete absence of it and nobody has ever established which.' }]},

{ id:'e-heckler', title:'The Heckler', who:C.cos, tags:['base','street','levity'],
  text:'A single heckler in a crowd of nine thousand. Security is moving. ' +
       'The crowd has noticed. The cameras have definitely noticed.',
  choices:[
    { label:'"Get him out of here." Watch it happen.', eff:{base:+7,street:-6,press:-5,auth:+3},
      res:'He is removed roughly by four people. The clip is eleven seconds and is played at every subsequent rally by everyone who is not you.' },
    { label:'Answer him. Directly. Take the question.', eff:{press:+8,street:+7,congress:+4,base:-3,auth:+2},
      res:'You answer, he answers back, and you get the better of it in front of nine thousand people. It is real and it is genuinely impressive.' },
    { label:'"Let him stay. He paid for a ticket." Move on.', eff:{base:+5,press:+6,street:+5},
      res:'The tickets were free, which makes it funnier, and the crowd laughs, and the heckler sits down.' },
    { label:'Bring him up on stage and give him the microphone for two minutes.', eff:{base:+3,congress:+2,street:+1,auth:-2}, wild:true,
      res:'He is nervous, rambling and eventually rather moving. Nine thousand people listen to a man who hates you. It is the most confident thing you ever do at a rally.' }]},

{ id:'e-ai-video', title:'The Fake', who:C.spy, tags:['press','security'],
  text:'A synthetic video of you saying something you did not say has eleven million views. ' +
       'It is good. Hance notes that four analysts needed sixteen hours to be sure, and that they were the four best in the country.',
  choices:[
    { label:'Demand platforms remove all synthetic media of you.', eff:{base:+5,press:-7,courts:-6,street:-4,auth:+8},
      res:'This includes satire, which is protected, which is the argument that the case turns on. You lose narrowly and the ruling protects the fakes too.' },
    { label:'Release the authenticated original. Build a verification standard.', eff:{press:+9,street:+8,congress:+7,courts:+6,base:-3,auth:+3},
      res:'A cryptographic signing standard for official media, adopted by four governments within two years. It is the most forward-looking thing you do.' },
    { label:'Say nothing. Use it later to deny a real one.', eff:{base:+4,press:-6,street:-5,courts:-4,auth:+9},
      res:'Nine months later you dismiss an authentic recording as synthetic and a meaningful number of people accept it. The technology cuts precisely both ways and you have found the sharp side.' },
    { label:'Make four more fakes of yourself, worse, and release them all.', eff:{base:+2,courts:-6,press:+2,street:-4,auth:+5}, wild:true,
      res:'You flood the zone with your own forgeries. Nothing attributed to you can ever be verified again, by anybody, including things you actually said.' }]},

{ id:'e-late-night', title:'The Monologue', who:C.social, tags:['press','culture'],
  text:'A late-night host has done 400 consecutive monologues about you. ' +
       'Brayden has an idea: go on the show. Kaylee thinks it is the worst idea she has ever heard, and she has heard all of them.',
  choices:[
    { label:'Go on. Sit in the chair. Take it.', eff:{press:+8,street:+7,base:-3,auth:+2},
      res:'You are funny, self-aware and disarming for eleven minutes. His writers privately admit it set them back six months.' },
    { label:'Attack the show. Demand equal time.', eff:{base:+6,press:-8,street:-5,courts:-4,auth:+4},
      res:'The equal-time rule does not apply to comedy programmes. Four regulators say so publicly and the segment becomes a recurring bit.' },
    { label:'Ignore it. It\'s a comedy show.', eff:{press:+4,base:+2,auth:+1},
      res:'The ratings decline 30% over two years, as they were always going to, because the material depends on you reacting and you are not reacting.' },
    { label:'Write his monologue for one night. Let him perform it.', eff:{base:+2,auth:-2}, wild:true,
      res:'Four hundred words of the President attacking himself, delivered by his loudest critic. The host says afterwards it was the strangest professional experience of his life.' }]},

{ id:'e-old-quote', title:'The Old Interview', who:C.press, tags:['press','levity'],
  text:'A 1998 interview has resurfaced in which you argue, articulately and at length, for the exact opposite of your current position. ' +
       'You were, Kaylee notes, extremely persuasive.',
  choices:[
    { label:'"I evolved. People are allowed to evolve."', eff:{press:+5,street:+4,base:-3,auth:+1},
      res:'Entirely reasonable and entirely true and it works, because it is the one defence nobody can argue with.' },
    { label:'Deny you said it.', eff:{base:+3,press:-8,street:-5,auth:+1},
      res:'It is on tape. In colour. With your name on the screen. The denial is played alongside the clip for four years.' },
    { label:'"I was right then and I\'m right now." Explain how.', eff:{base:+6,press:-4,street:-3,auth:+3},
      res:'You attempt a nine-minute reconciliation of two contradictory positions. It should not work. With this audience, it does.' },
    { label:'Debate your 1998 self. Split screen. Live.', eff:{base:+2,congress:+2,auth:-2}, wild:true,
      res:'Ninety minutes against archive footage. The 1998 version wins on points. You concede this cheerfully and it does you more good than winning would have.' }]},

{ id:'e-hurricane-name', title:'The Naming', who:C.energy, tags:['levity','press'],
  text:'The hurricane naming list is set six years in advance by an international committee. ' +
       'This year\'s list includes a name that is also the surname of a senator who voted against you. Four outlets have noticed.',
  choices:[
    { label:'Post the joke. It writes itself.', eff:{base:+6,press:-4,street:-3,auth:+1},
      res:'The senator posts a better joke back within nine minutes. He wins the exchange and it is generally agreed that he won it.' },
    { label:'Say nothing. It\'s a hurricane.', eff:{press:+3,street:+3},
      res:'It makes landfall and kills eleven people. Nobody makes any jokes at all after that, including the four outlets.' },
    { label:'Ask whether the list can be changed.', eff:{base:+2,press:-5,street:-4,auth:+2},
      res:'A career official has to explain to the White House that hurricane names are set by a multinational committee in Geneva. The email leaks. It is very funny and very bad.' },
    { label:'Ask that it be renamed after you instead.', eff:{base:+2,press:+1,street:-6,auth:+2}, wild:true,
      res:'The committee in Geneva declines, politely, in four languages. The exchange of letters is published and is the driest comedy ever produced by a meteorological body.' }]},

{ id:'e-flag-half', title:'Half Staff', who:C.usher, tags:['press','street'],
  text:'A shooting has killed nine people. Protocol is for the flag to be lowered. ' +
       'Alvin notes it has already been raised again after four days, which is standard, and that a family has asked why.',
  choices:[
    { label:'Lower it again. For as long as they want.', eff:{street:+8,press:+7,congress:+5,base:+2},
      res:'It stays down for eleven days. The family sends a letter. Alvin frames it and hangs it in the usher\'s office, where it still is.' },
    { label:'Follow the protocol. It exists for a reason.', eff:{press:+3,street:+2,congress:+3},
      res:'Correct, defensible, and it satisfies nobody who was actually asking, because they were not asking about the protocol.' },
    { label:'Have somebody explain the protocol to them.', eff:{street:-6,press:-6,base:-2,auth:+1},
      res:'A deputy press officer explains flag protocol to a grieving family on background. The quote runs. It is four sentences long and it is the worst thing published about you that month.' },
    { label:'Call the family. Ask them how long.', eff:{base:+1,congress:+3,street:+1,auth:-2}, wild:true,
      res:'They say eleven days. You give them eleven days. It costs nothing, it is not a policy, and it is the only thing they will ever remember about your administration.' }]},

{ id:'e-second-scoop', title:'The Boring Wednesday', who:C.cos, tags:['levity'],
  text:'Nothing has happened. No crisis, no leak, no ruling, no summit. Deborah has checked twice. ' +
       'There are four hours of unstructured time and no reason for any of them.',
  choices:[
    { label:'Call four senators you don\'t need anything from.', eff:{congress:+8,press:+3,auth:+3},
      res:'Four calls, no asks. All four remember it. Two of them vote your way six months later and neither can fully explain why.' },
    { label:'Post for four hours.', eff:{base:+6,press:-5,street:-4,congress:-4,auth:+2},
      res:'Sixty-one posts. Four of them create actual news. One of them creates an actual diplomatic incident.' },
    { label:'Read the thing Deborah has been asking you to read.', eff:{congress:+4,courts:+4,street:+4,press:+3,auth:+4},
      res:'It is ninety pages about an agency you have never thought about and it contains one paragraph that saves you an enormous amount of trouble in eighteen months.' },
    { label:'Walk to the Lincoln Memorial and sit on the steps for an hour.', eff:{base:+1,congress:+2,press:-1,auth:-2}, wild:true,
      res:'About forty people recognise you. Four sit down. One of them argues with you for twenty minutes and you let him finish, which he tells people about for the rest of his life.' }]}

);
})();
