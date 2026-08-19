/* ============================================================
   PACK L, THE CULTURE WAR  (any month, weighted across the term)
   Schools and textbooks, statues and monuments, holidays renamed,
   sports and the anthem, awards shows, a war on a word, a book, a
   colour, a mascot, the flag, banned and un-banned things, and the
   base's endless appetite for a new enemy this week. Original
   satire in the house voice. Fictional institutions, fictional
   controversies, real countries only in passing. Punches at the
   manufacture of outrage, never at a real vulnerable group.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ SCHOOLS AND TEXTBOOKS ══════════════ */

{ id:'l-textbook-committee', title:'The Textbook Committee', who:C.edu, min:1, max:40, tags:['culture','congress'],
  src:'a state curriculum board editing history textbooks by committee vote',
  text:`Bernadette has the state committee's redline draft. "They want the word 'controversial' removed from forty-one entries and added to four, sir. The four are unrelated to each other and to anything in the news. Nobody on the committee can explain the four."`,
  choices:[
    { label:'Approve the redline. Add a fifth entry.', eff:{base:+8,congress:-4,press:-4,auth:+3},
      res:`A textbook is edited to reflect exactly one man's priorities. The fifth entry, added on your instruction, is about weather.` },
    { label:'Send it back. Ask the committee for citations.', eff:{base:-3,congress:+5,press:+4,auth:+1},
      res:`You require the committee to source its own opinions. Three of the four new entries quietly disappear before Monday.` },
    { label:'Let the base vote on the textbook online.', eff:{base:+6,press:-5,congress:-3,auth:+2},
      res:`A poll with no login requirement decides what a hundred thousand ten-year-olds learn about the 1890s. It closes at 40,000 votes for a decade that lost.` },
    { label:'Print two versions and let schools pick.', eff:{base:+2,congress:-4,press:-3,courts:-1,auth:+1}, wild:true,
      res:`Two textbooks, same cover, different centuries. A shipping error sends the wrong one to eleven states, and nobody in those states notices for a year.` }]},

{ id:'l-banned-book', title:'The Reading List', who:C.edu, min:6, max:48, tags:['culture','congress'],
  src:'a parent group seeking removal of a novel from a required reading list',
  text:`Bernadette flags one line for you specifically. "A parent group wants a novel pulled from the ninth-grade list, sir. Nobody on the group has read it. I have. It is about a lighthouse. I do not know what they think it is about."`,
  choices:[
    { label:'Pull it nationwide. Announce the win.', eff:{base:+8,press:-4,courts:-3,congress:-3,auth:+3},
      res:`A novel about a lighthouse is removed from classrooms in fifty states by executive pressure. Sales of the novel about a lighthouse triple by Friday.` },
    { label:'Leave it to local school boards, as the law says.', eff:{base:-3,congress:+5,courts:+3,press:+3,auth:+1},
      res:`You defer to the people whose actual job this is. It is unglamorous, correct, and generates exactly zero grateful phone calls.` },
    { label:"Ban the whole genre the book is in.", eff:{base:+6,press:-4,courts:-4,congress:-3,auth:+3},
      res:`A committee attempts to define and ban "literary fiction" as a category. The definition takes four months and still includes a cookbook by accident.` },
    { label:'Read it yourself on television, live, unedited.', eff:{base:+2,press:-4,street:-3,congress:-1,auth:0}, wild:true,
      res:`You read a novel about a lighthouse to the nation for six consecutive hours. Ratings collapse by hour two and recover, mysteriously, by hour five.` }]},

{ id:'l-pledge-rewrite', title:'The Pledge', who:C.edu, min:4, max:40, tags:['culture','congress'],
  src:'a proposal to add a loyalty clause to a civic recitation',
  text:`Bernadette reads the proposed line aloud, flatly. "A state wants to add a clause to the pledge, sir. Twenty-two words, all of them about you specifically. Legally we cannot compel students to say it. Politically, apparently, we can compel me to bring it to you at seven in the morning."`,
  choices:[
    { label:'Endorse it. Push other states to adopt it.', eff:{base:+8,courts:-4,congress:-3,press:-3,auth:+3},
      res:`Twenty-two words about a sitting president enter a classroom ritual in one state, with six more considering it. A civics teacher somewhere quietly retires.` },
    { label:'Leave the pledge alone. It is not about you.', eff:{base:-3,courts:+4,congress:+4,auth:0},
      res:`You decline to insert yourself into a recitation eight-year-olds mumble half-asleep. It is a small, correct, unglamorous choice.` },
    { label:'Make the new clause mandatory, no opt-out.', eff:{base:+6,courts:-6,congress:-4,press:-3,auth:+3},
      res:`A court challenge is filed by lunchtime. The judge's opinion is nine pages, four of them, by rough count, sarcasm.` },
    { label:'Write your own separate, entirely optional pledge.', eff:{base:+2,courts:-3,congress:-2,press:-3,auth:+1}, wild:true,
      res:`A second, voluntary pledge is published on a government website. Six classrooms nationwide try it once. None try it twice.` }]},

{ id:'l-dress-code', title:'The Dress Code', who:C.edu, min:1, max:44, tags:['culture','street'],
  src:'a school dress-code fight over a slogan on a t-shirt',
  text:`Bernadette again, tired. "A national school dress code, sir, banning one specific slogan on t-shirts. The slogan changes every few weeks depending on what is trending. We are now, functionally, in the business of tracking teenage fashion in real time."`,
  choices:[
    { label:'Sign the ban. Add three more slogans to the list.', eff:{base:+7,press:-4,street:-3,congress:-2,auth:+3},
      res:`A federal list of banned t-shirt slogans grows to nine entries by Friday. Sales of all nine, among teenagers specifically, triple.` },
    { label:'Leave dress codes to individual schools, as always.', eff:{base:-3,congress:+4,street:+3,auth:0},
      res:`You decline to become the nation's t-shirt regulator. It is not a decision anyone thanks you for, which is usually the sign of a good one.` },
    { label:'Mandate a single approved shirt for all students.', eff:{base:+6,press:-4,street:-4,cash:-0.2,auth:+2},
      res:`A national student uniform is proposed and costed. The estimate is large, the design is beige, and a focus group of actual teenagers calls it, unanimously, "a lot."` },
    { label:'Wear the banned slogan yourself, at a press conference.', eff:{base:+3,press:-4,street:-3,congress:-1,auth:+1}, wild:true,
      res:`You appear on camera in a shirt bearing the exact slogan you banned in schools. The clip outperforms the ban by a factor of ten.` }]},

{ id:'l-speech-code', title:'The Speech Code', who:C.edu, min:12, max:48, tags:['culture','courts'],
  src:'a university speech policy drafted around an undefined term',
  text:`Bernadette, exhausted by now. "Yardvard University wants federal guidance on its speech code, sir, mostly so it can blame someone else when it inevitably fails. The current draft bans language that is 'divisive,' a word the drafting committee has declined, four times, to define."`,
  choices:[
    { label:'Mandate a federal speech code for all universities.', eff:{base:+8,courts:-5,congress:-3,press:-4,auth:+3},
      res:`A national campus speech code is issued from the department of education. Nineteen separate lawsuits are filed before the ink, metaphorically, dries.` },
    { label:'Decline. It is not a federal role.', eff:{base:-3,courts:+5,congress:+4,press:+3,auth:+1},
      res:`You correctly note that a university's speech policy is not the executive branch's to write. Yardvard, left alone, produces a worse policy entirely on its own.` },
    { label:"Cut funding to any school that won't adopt one.", eff:{base:+6,courts:-5,congress:-4,cash:-0.3,auth:+3},
      res:`Funding is tied to compliance with a speech code that does not, itself, legally exist yet. Eleven university presidents write a joint letter that is, structurally, a legal threat wearing a tie.` },
    { label:'Ban the phrase "speech code" from federal documents.', eff:{base:+2,courts:-3,press:-3,congress:-1,auth:0}, wild:true,
      res:`The words "speech code" are banned from appearing in any federal document about speech codes. The policy is renamed "expression guidance" and means, precisely, nothing new.` }]},

{ id:'l-costume-memo', title:'The Costume Memo', who:C.edu, min:1, max:48, tags:['culture','levity'],
  src:'a school district issuing a list of discouraged Halloween costumes',
  text:`Bernadette, holding a memo that should not require a presidential signature. "A school district banned twelve specific Halloween costumes this year, sir, and I want to note that one of the twelve is simply 'ghost.' Nobody can explain what an offensive ghost costume looks like. The memo does not attempt to."`,
  choices:[
    { label:'Endorse the ban. Nationalize the list.', eff:{base:+7,press:-4,congress:-2,auth:+3},
      res:`Twelve Halloween costumes, including "ghost," are discouraged nationwide by department guidance. Costume sales of all twelve rise sharply, as they reliably do whenever anything is discouraged.` },
    { label:'Costumes are a local school matter.', eff:{base:-3,press:+4,congress:+2,auth:0},
      res:`You decline to weigh in on children's Halloween costumes. It is, on reflection, an easy call, and you make it correctly without fanfare.` },
    { label:'Propose a federally approved costume list instead.', eff:{base:+5,press:-4,congress:-3,cash:-0.2,auth:+2},
      res:`A list of eleven pre-approved costumes is drafted by committee. All eleven are variations on "firefighter." Children, reportedly, are unmoved.` },
    { label:'Dress as a ghost yourself, publicly, in solidarity.', eff:{base:+2,press:-4,courts:-2,congress:-1,auth:+1}, wild:true,
      res:`You appear at a press briefing under a plain white sheet with two eye holes, in solidarity with a costume banned by a school district you have no authority over. Kaylee does not introduce you.` }]},

/* ══════════════ MASCOTS ══════════════ */

{ id:'l-mascot-retirement', title:'The Mascot', who:C.gov, min:4, max:48, tags:['culture','street'],
  src:'a high school voluntarily retiring its mascot becoming a national talking point',
  text:`Governor Vasquez-Moore is on the line, unbothered by the hour. "A high school in my state retired its mascot, sir. Locally. Voluntarily. Somehow it is now a federal matter, and somehow I am the villain in your version of it."`,
  choices:[
    { label:'Issue a federal statement demanding it back.', eff:{base:+8,congress:-3,street:-4,auth:+3},
      res:`You issue a formal demand regarding a fifteen-year-old's homecoming banner. The governor reads it aloud on television, slowly, twice.` },
    { label:"It's a local school decision. Say so once.", eff:{base:-3,congress:+4,street:+4,auth:+1},
      res:`You note, correctly, that this is none of your business, and move on. The mascot stays retired. Nobody outside the county notices.` },
    { label:"Threaten the state's federal highway funding.", eff:{base:+7,congress:-5,street:-5,courts:-3,auth:+3},
      res:`You tie asphalt money to a cartoon badger. Three senators from your own party ask, off the record, if you have lost your mind.` },
    { label:'Adopt the retired mascot as your personal mascot.', eff:{base:+3,press:-4,street:-4,courts:-1,auth:+1}, wild:true,
      res:`You appear at a rally in a badger costume borrowed from a school that no longer wants it. The badger, reportedly, has notes.` }]},

{ id:'l-cereal-mascot', title:'The Cereal Box', who:C.social, min:1, max:40, tags:['culture','press'],
  src:'a brand mascot redesign drawing disproportionate online outrage',
  text:`Brayden holds up a phone with a cereal box on it. "The mascot got redesigned, sir. Fewer teeth, calmer eyes, a scarf instead of a cape. Forty thousand people are furious about a cartoon tiger's scarf. The company has not commented. You could be first."`,
  choices:[
    { label:'Demand the old mascot back. Threaten a boycott.', eff:{base:+8,press:-6,street:-2,auth:+3},
      res:`You issue a formal demand regarding cereal box art. The company restores the teeth within a day, purely, its statement notes, "coincidentally."` },
    { label:'Say nothing. It is a cartoon tiger.', eff:{base:-3,press:+5,congress:+2,auth:0},
      res:`You allow a breakfast mascot to have a scarf without federal comment. The republic, against expectations, endures.` },
    { label:"Launch a competing cereal with the old mascot's energy.", eff:{base:+6,press:-6,cash:-0.3,auth:+2},
      res:`A rushed patriotic cereal hits shelves in nine days. The mascot has too many teeth and one eye slightly larger than the other. It sells out anyway.` },
    { label:'Adopt the calm new mascot as a personal role model.', eff:{base:+2,press:-5,street:-2,auth:+1}, wild:true,
      res:`You publicly praise a cartoon tiger for its emotional regulation. A therapist on television calls this "not nothing," and means it as an insult.` }]},

{ id:'l-judge-mascot-ruling', title:'The Ruling', who:C.cj, min:14, max:48, tags:['culture','courts'],
  src:'a federal court asked, absurdly, to weigh in on a school mascot dispute',
  text:`Chief Justice Stone, dryly, as always. "A federal court has ruled on the mascot case, sir. Fourteen pages, unanimous, and I want you to know that the phrase 'this is not a matter for the judiciary' appears three separate times, each time more tired than the last."`,
  choices:[
    { label:'Denounce the ruling. Call for the judges to resign.', eff:{base:+8,courts:-6,press:-3,congress:-2,auth:+3},
      res:`You publicly demand the resignation of three federal judges over a school mascot. The Chief Justice issues a statement that is, technically, one sentence, and somehow still lands like a lecture.` },
    { label:'Accept the ruling. Say it was never a federal matter.', eff:{base:-3,courts:+5,congress:+3,press:+3,auth:+1},
      res:`You agree with the court that a mascot dispute does not require the executive branch. This is, obviously, true, and saying it out loud costs you nothing but a headline.` },
    { label:'Appeal it. All the way up. Over a mascot.', eff:{base:+6,courts:-5,press:-4,cash:-0.2,auth:+2},
      res:`Federal resources are committed to appealing a school mascot ruling to the highest possible court. The docket entry becomes, within days, a punchline in three separate law school lectures.` },
    { label:'Send the judges a gift basket. No note.', eff:{base:+2,courts:-4,press:-3,congress:-1,auth:0}, wild:true,
      res:`An anonymous gift basket arrives at the courthouse. It is traced back within the hour. The judiciary's ethics office opens a file with commendable, if slightly gleeful, speed.` }]},

{ id:'l-fastfood-mascot', title:"The Mascot's Makeover", who:C.broom, min:1, max:48, tags:['culture','money'],
  src:'a corporate mascot softened for branding reasons, litigated as a cultural loss',
  text:`Roscoe, somehow, has an opinion on this too. "A fast food chain softened its mascot's design, sir. Fewer sharp edges, a friendlier font. BROOM has determined this cost the company, and I quote their own filing, 'measurable brand equity.' I am not sure why I am briefing you on a hamburger, but here we are."`,
  choices:[
    { label:'Publicly demand the old mascot back.', eff:{base:+7,press:-5,street:-2,auth:+3},
      res:`A formal presidential statement addresses a hamburger mascot's eyebrows. The company, wisely, says nothing, and sales tick up regardless of which mascot is on the box.` },
    { label:'It is a hamburger. Say nothing.', eff:{base:-3,press:+5,congress:+2,auth:0},
      res:`You decline to have a position on fast food branding. This is, somehow, still notable, given the week you have had.` },
    { label:'Propose a federal mascot design standard.', eff:{base:+5,press:-5,congress:-3,cash:-0.2,auth:+2},
      res:`A draft standard for "acceptable corporate mascot friendliness" is written, then quietly shelved after nobody can define the term "friendliness" to legal's satisfaction.` },
    { label:'Design your own mascot. Sharp edges. Lots of them.', eff:{base:+2,press:-5,courts:-2,auth:+1}, wild:true,
      res:`A new mascot is unveiled, all angles and no warmth, intended to prove a point about softness. Focus groups describe it, unanimously, as "concerning," a word that gets past Kaylee this once because it is, for once, accurate.` }]},

/* ══════════════ STATUES AND MONUMENTS ══════════════ */

{ id:'l-statue-swap', title:'The Statue Swap', who:C.hist, min:10, max:48, tags:['culture','courts'],
  src:'a monument "restoration" that quietly becomes a replacement',
  text:`Dr. Weir speaks carefully, as historians do. "The commission wants to replace the statue in the rotunda, sir. Not remove it, replace it, with a figure of your choosing. They are calling it restoration. I am required to call it that too."`,
  choices:[
    { label:'Choose yourself. Bronze. Heroic pose.', eff:{base:+9,press:-4,courts:-3,congress:-3,auth:+4},
      res:`You are cast in bronze mid-gesture, pointing at something that does not exist. The sculptor bills for the pose separately from the likeness.` },
    { label:'Restore the original. Note the irony quietly.', eff:{base:-3,press:+4,courts:+4,congress:+3,auth:+1},
      res:`The old statue is cleaned, repaired and put back exactly where it stood. It is the least interesting outcome available and the correct one.` },
    { label:'Replace it with a statue of the base itself.', eff:{base:+6,press:-4,courts:-2,auth:+2},
      res:`A twelve-foot bronze of an anonymous, furious citizen now guards the rotunda. Tour guides are instructed to call it "aspirational."` },
    { label:'Commission a statue of the committee, deciding.', eff:{base:+2,press:-4,courts:-3,congress:-2,auth:+1}, wild:true,
      res:`A bronze tableau of seven people arguing about a statue is installed where the statue would have gone. It is, critics agree, the most honest artwork the government has ever produced.` }]},

{ id:'l-new-monument', title:'Your Statue', who:C.hist, min:16, max:48, tags:['culture','vanity'],
  src:'a movement to erect a monument to a sitting official mid-term',
  text:`Dr. Weir again, flatter this time. "A group calling itself Citizens for Permanence wants to erect a monument to you, sir. While you are still in office. While you are, in fact, still deciding policy the monument would commemorate."`,
  choices:[
    { label:'Approve the site. Prime real estate.', eff:{base:+9,press:-5,courts:-3,congress:-2,auth:+4},
      res:`A monument to an unfinished term goes up two blocks from the building where the term is still happening. Editors nationwide reach for the same word: premature.` },
    { label:'Decline. Suggest a scholarship fund instead.', eff:{base:-3,press:+5,congress:+4,auth:+1},
      res:`You ask that the money go to twelve kids' tuition instead of your face in stone. It is, by a wide margin, the more permanent legacy, and gets a third the coverage.` },
    { label:'Approve it, but insist on a bigger one.', eff:{base:+6,press:-5,courts:-2,cash:-0.3,auth:+3},
      res:`The group triples its budget rather than argue. The monument is now visible from the interstate, which was not the brief.` },
    { label:'Have it built, then donate it to a museum as satire.', eff:{base:+3,press:-4,courts:-3,congress:-1,auth:+1}, wild:true,
      res:`The statue is unveiled with a placard reading "Artist Unknown, Purpose Disputed." Nobody involved can tell if you are in on the joke, including you.` }]},

{ id:'l-museum-exhibit', title:'The Exhibit', who:C.hist, min:8, max:48, tags:['culture','congress'],
  src:'legislative oversight extended over a museum wing\'s wall text',
  text:`Dr. Weir brings a floor plan. "The national museum wants to add a wing about a difficult decade, sir. Difficult meaning documented, not meaning disputed. A congressman wants final approval over the wall text. He has not read the wall text."`,
  choices:[
    { label:'Give the congressman approval power over the exhibit.', eff:{base:+7,press:-4,courts:-2,congress:-2,auth:+3},
      res:`A single office now edits museum wall text for tone. The exhibit opens eleven weeks late and four sentences shorter.` },
    { label:'Let the historians write it. Read it once, quietly.', eff:{base:-3,press:+4,courts:+3,congress:+2,auth:+1},
      res:`You let the people with the degrees write the thing about history. The exhibit opens on time and is, by every account, accurate and dull, which is the highest compliment history can receive.` },
    { label:'Cancel the exhibit. Expand the gift shop instead.', eff:{base:+6,press:-4,courts:-3,congress:-2,auth:+2},
      res:`A wing about a difficult decade becomes a wing about branded tote bags. The tote bags, notably, outsell the difficult decade by a wide margin.` },
    { label:'Add a wing about yourself instead, right next to it.', eff:{base:+3,press:-4,courts:-2,congress:-2,auth:+1}, wild:true,
      res:`A new wing opens adjacent to the difficult decade, dedicated entirely to your first term. Visitors, per the exit survey, mostly assume it is the gift shop.` }]},

{ id:'l-self-highway', title:'The Highway', who:C.usher, min:20, max:48, tags:['culture','vanity'],
  src:'infrastructure renamed for a living official',
  text:`Alvin, out of his depth but delivering the message anyway. "A stretch of interstate near your childhood home wants renaming after you, sir. While you're alive. While you could, theoretically, still drive on it and get a ticket on it."`,
  choices:[
    { label:'Approve it. Attend the ribbon cutting personally.', eff:{base:+8,press:-5,congress:-2,courts:-2,cash:-0.2,auth:+3},
      res:`Forty miles of interstate are renamed for a sitting president. Every exit sign needs replacing, at a cost the state quietly bills to a federal grant nobody remembers approving.` },
    { label:'Decline. Suggest a local teacher instead.', eff:{base:-3,press:+5,congress:+3,auth:+1},
      res:`A retired schoolteacher gets a highway named after her instead of you. She is, reportedly, delighted, and considerably less controversial than the alternative.` },
    { label:'Approve it, and add a toll booth shaped like your face.', eff:{base:+6,press:-5,courts:-2,cash:-0.3,auth:+2},
      res:`Commuters now pay a toll into a booth modeled, loosely, on your profile. Traffic backs up for a mile as drivers slow down to look, which was, an aide admits, sort of the idea.` },
    { label:'Rename it, then quietly rename it back next term.', eff:{base:-3,congress:-3,courts:-2,press:-2,auth:-1}, wild:true,
      res:`A promise to reverse the renaming if the state ever wants it back is filed, notarized, and forgotten by everyone except the notary.` }]},

/* ══════════════ HOLIDAYS ══════════════ */

{ id:'l-holiday-rename', title:'The Holiday', who:C.speaker, min:1, max:48, tags:['culture','levity'],
  src:'a bill to rename a federal holiday, co-sponsored for reasons unrelated to the holiday',
  text:`Hal Grimes has a bill nobody asked for. "Renaming Founders Day, sir. Eleven co-sponsors, four different proposed names, and one member who wants it named after his golf course. It will pass. The only question is which embarrassing name it passes with."`,
  choices:[
    { label:'Pick the name yourself. Announce it at a rally.', eff:{base:+8,congress:-3,press:-4,auth:+3},
      res:`A national holiday is renamed by press release before the bill exists. Congress spends a week writing legislation to match an announcement.` },
    { label:'Let Congress work it out. Sign whatever survives.', eff:{base:-3,congress:+5,press:+3,auth:+1},
      res:`You let the legislature do the embarrassing work of choosing a name in public. It takes six weeks and everyone forgets who suggested what.` },
    { label:'Hold a national naming contest. No rules on entries.', eff:{base:+5,press:-5,congress:-2,auth:+2},
      res:`The public submits four hundred thousand entries. The frontrunner, for eleven straight days, is a name involving a beloved fictional dog. Staff intervene.` },
    { label:'Keep the old name. Just add fireworks.', eff:{base:+4,congress:-4,street:-3,cash:-0.2,auth:+1}, wild:true,
      res:`You solve a naming dispute by spending money on pyrotechnics instead. Nobody is satisfied and everybody, for one night, stops arguing to watch.` }]},

{ id:'l-tree-controversy', title:'The Tree', who:C.pastor, min:1, max:48, tags:['culture','levity'],
  src:'a debate over the neutral naming of a seasonal display',
  text:`Reverend Muncy stands by the tree in question. "The question of what to call the tree on the lawn, sir, has consumed four news cycles. I would like to note that the tree does not care. The tree is, I remind you, a tree."`,
  choices:[
    { label:'Declare an official name by proclamation.', eff:{base:+7,press:-4,congress:-2,auth:+3},
      res:`A proclamation formally names a spruce. It is filed, numbered, and will outlive every person currently arguing about it.` },
    { label:'Call it "the tree." Move on.', eff:{base:-2,press:+4,congress:+2,auth:0},
      res:`You decline to weigh in on the noun. The lights go up on schedule and nobody, notably, complains about the lights.` },
    { label:'Hold a nationally televised naming ceremony.', eff:{base:+5,press:-4,cash:-0.2,auth:+2},
      res:`A camera crew, a red ribbon and forty minutes of remarks are deployed for a tree. The tree, again, does not care, and this time it is filmed not caring.` },
    { label:'Leave the tree deliberately nameless, as a statement.', eff:{base:-4,congress:-4,street:-3,press:-1,auth:-1}, wild:true,
      res:`You declare the tree unnamed on purpose, a gesture toward common ground. Nobody understands the gesture. Two op-eds try to explain it and one accuses you of overthinking a tree.` }]},

{ id:'l-reenactment', title:'The Reenactment', who:C.pastor, min:10, max:48, tags:['culture','street'],
  src:"a town pageant's villain role going unfilled for lack of volunteers",
  text:`Reverend Muncy again, this time worried. "The founders' day reenactment, sir. The actor playing the villain has been booed off stage two years running. This year's actor has resigned. Nobody wants the role. I am told they are considering you."`,
  choices:[
    { label:'Refuse. Recast the villain as a rival politician.', eff:{base:+8,press:-4,street:-3,congress:-2,auth:+3},
      res:`The reenactment quietly recasts its villain as an unnamed opposition figure everyone recognizes anyway. The actor gets booed harder than ever, on purpose this time.` },
    { label:"Let the town handle its own pageant.", eff:{base:-3,street:+4,congress:+3,auth:0},
      res:`You decline to involve the federal government in community theater. The pageant proceeds, mildly, as pageants should.` },
    { label:'Rewrite the script so there is no villain at all.', eff:{base:+5,press:-4,street:-3,auth:+2},
      res:`A reenactment with no antagonist runs eleven minutes and satisfies nobody. Historians call it "technically accurate and dramatically inert."` },
    { label:'Play the villain yourself, in full costume.', eff:{base:+3,press:-4,street:-3,congress:-1,auth:+1}, wild:true,
      res:`You take the stage as the villain of your own town's pageant and get booed, on schedule, by people who paid eleven dollars for the privilege. You take a bow anyway.` }]},

/* ══════════════ SPORTS AND THE ANTHEM ══════════════ */

{ id:'l-anthem-verse', title:'The Lost Verse', who:C.gen, min:1, max:48, tags:['culture','levity'],
  src:'a rarely-sung additional verse proposed as mandatory at ceremonies',
  text:`General Tarrant, reluctantly, brings this to you himself. "There is a fourth verse to the anthem, sir. Almost nobody sings it. A congressman wants it mandatory at every federal event, sung in full, starting Monday. I have heard it. It is six minutes long."`,
  choices:[
    { label:'Mandate the full verse. Every event. No exceptions.', eff:{base:+7,congress:-3,street:-3,auth:+3},
      res:`A six-minute verse becomes federal ceremony law. The next honor guard, timed independently by three reporters, runs eleven minutes over.` },
    { label:'Leave tradition as it is. Thank the congressman politely.', eff:{base:-3,congress:+4,street:+3,auth:0},
      res:`You decline to add four unfamiliar minutes to every flag-raising in America. This is, by any honest measure, mercy.` },
    { label:'Mandate it, but only at events you personally attend.', eff:{base:+6,congress:-3,press:-4,auth:+3},
      res:`The anthem now runs a different length depending on whether you showed up. A band director keeps two versions on the stand, just in case.` },
    { label:'Set the lost verse to a pop melody.', eff:{base:+3,press:-4,street:-3,congress:-1,auth:+1}, wild:true,
      res:`A verse nobody knew existed goes viral in a completely different genre. Purists are horrified. Fourteen-year-olds can now, unfortunately, name all four verses.` }]},

{ id:'l-team-rename', title:'The Team Name', who:C.mayor, min:4, max:48, tags:['culture','street'],
  src:"a private sports franchise's rebrand treated as a referendum on the administration",
  text:`Desmond Faulk calls from the capital himself. "The team wants to change its name, sir. Ownership's decision, nothing to do with you, and yet the base has decided it is entirely to do with you. I would like it on record that I did not start this."`,
  choices:[
    { label:"Threaten the team's stadium subsidy over the name.", eff:{base:+7,congress:-4,street:-3,courts:-2,auth:+3},
      res:`You tie a municipal subsidy to a jersey font. The team's lawyers file a very calm letter that ends your involvement within a week.` },
    { label:'It is a private business decision. Say nothing.', eff:{base:-3,congress:+4,street:+3,auth:0},
      res:`You decline to have a federal opinion on a logo. This is, structurally, correct, and generates the usual amount of thanks: none.` },
    { label:'Demand a public referendum on the name.', eff:{base:+6,street:-4,congress:-3,auth:+2},
      res:`A referendum is held on a private company's trademark. It is not legally binding, costs the city eight hundred thousand dollars, and the team keeps the new name anyway.` },
    { label:'Propose an even sillier name as a compromise.', eff:{base:+2,press:-4,street:-3,congress:-1,auth:+1}, wild:true,
      res:`You suggest the team split the difference with a name involving a regional pastry. Ownership does not respond. Merchandise featuring the pastry sells anyway, unofficially, from a truck.` }]},

{ id:'l-take-a-stand', title:'Taking a Stand', who:C.gen, min:1, max:48, tags:['culture','street'],
  src:'a protest gesture during the anthem at a service academy game',
  text:`General Tarrant, again pulled somewhere he did not sign up for. "Players on a service academy team knelt during the anthem, sir. It is, technically, protected. It is also, apparently, a national emergency by Wednesday afternoon."`,
  choices:[
    { label:'Order the academy to bench them.', eff:{base:+8,press:-4,street:-4,courts:-3,auth:+3},
      res:`Cadets are benched for a gesture during a song. A retired general writes an op-ed using the word "chilling," and means the atmosphere, not the weather.` },
    { label:'It is protected speech. Leave the team alone.', eff:{base:-4,street:+5,courts:+4,press:+4,auth:0},
      res:`You decline to punish cadets for exercising a right they are, in fact, training to defend. It is the single most consistent thing you do this term.` },
    { label:'Mandate a hand-over-heart pose, measured by protractor.', eff:{base:+6,press:-4,street:-4,auth:+2},
      res:`An actual angle requirement is drafted for a patriotic gesture. A compliance officer is, briefly and absurdly, appointed to enforce it.` },
    { label:'Kneel yourself, at the next game, for an unrelated reason.', eff:{base:+2,press:-4,street:-3,congress:-1,auth:+1}, wild:true,
      res:`You kneel during the anthem citing a bad knee, which is true, and also convenient, which everyone notices. The gesture is reported four different ways by four different outlets, none of them yours.` }]},

{ id:'l-anthem-singer', title:'The Anthem Singer', who:C.social, min:1, max:48, tags:['culture','press'],
  src:'an elaborate vocal embellishment during the anthem dividing public reaction',
  text:`Brayden, gleeful. "The anthem singer at the game last night added a run on the word 'brave' that lasted, by my count, nine full seconds, sir. Half the internet loved it. The other half wants her arrested for treason, which is not, legally, a thing that applies here."`,
  choices:[
    { label:'Demand a formal apology from the singer.', eff:{base:+7,press:-6,street:-2,auth:+3},
      res:`You demand a public apology for a vocal run. The singer declines, gracefully, on television, and the clip of her declining outperforms the original run three to one.` },
    { label:'It is a song. Let her sing it how she likes.', eff:{base:-3,press:+5,street:+3,auth:0},
      res:`You decline to have a federal opinion on vocal technique. The singer, unbothered, is booked for eleven more games this season.` },
    { label:'Mandate a standard, approved anthem arrangement.', eff:{base:+5,press:-6,street:-3,congress:-2,auth:+2},
      res:`A government-approved anthem arrangement is published, complete with tempo markings. Exactly one singer nationwide agrees to use it, and only because she lost a bet.` },
    { label:'Invite her to sing it again, your way, at your rally.', eff:{base:+3,press:-5,street:-3,congress:-1,auth:+1}, wild:true,
      res:`She accepts, then adds an even longer run out of what witnesses describe as pure spite. It is, against your intentions, the highlight of the night.` }]},

{ id:'l-fight-song', title:'The Fight Song', who:C.vet, min:1, max:48, tags:['culture','street'],
  src:'alumni factions divided over a lyric in a decades-old fight song',
  text:`Gus Renner, a little embarrassed to be raising it. "The academy's fight song has a line in it, sir, that a group of alumni now finds outdated. Another group of alumni finds the complaint outdated. I have been asked to referee a fight about a fight song, which feels, respectfully, beneath my pay grade."`,
  choices:[
    { label:'Order the old lyrics restored, defiantly.', eff:{base:+7,press:-4,street:-3,auth:+3},
      res:`A marching band is instructed to revert eleven words by federal suggestion. Half the stadium sings the old version, half sings the new, and the result is, acoustically, a mess.` },
    { label:'Let the academy and its alumni sort it out.', eff:{base:-3,street:+4,congress:+2,auth:0},
      res:`You decline to arbitrate a dispute about a fight song's lyrics. The alumni association handles it themselves, badly, but on their own time.` },
    { label:'Commission a brand-new fight song from scratch.', eff:{base:+5,press:-4,street:-3,cash:-0.2,auth:+2},
      res:`A new fight song is written, tested, and immediately nicknamed "the substitute" by every student who has to learn it under protest.` },
    { label:'Learn the old lyrics and sing them yourself at the game.', eff:{base:+3,press:-4,street:-3,congress:-1,auth:+1}, wild:true,
      res:`You sing eleven now-contested words into a stadium microphone, off-key, on purpose or not nobody can tell. Both sides of the alumni dispute agree, for one night, that this was worse than either option they proposed.` }]},

/* ══════════════ AWARDS SHOWS ══════════════ */

{ id:'l-awards-boycott', title:'The Boycott', who:C.social, min:1, max:48, tags:['culture','press'],
  src:'an awards ceremony that declined to mention an official, treated as a snub',
  text:`Brayden is reading three hundred replies at once. "The Luster Awards didn't mention you once tonight, sir. The base has decided this is a boycott target. I want to be clear nobody at the Luster Awards knows this is happening yet."`,
  choices:[
    { label:'Call for a national boycott. Tonight.', eff:{base:+8,press:-6,street:-2,auth:+3},
      res:`You organize a boycott of an awards show that was, until this afternoon, checking sound levels. Ratings, contrary to the plan, go up.` },
    { label:"Ignore it. Awards shows aren't governance.", eff:{base:-3,press:+5,congress:+3,auth:0},
      res:`You decline to have an opinion about a trophy ceremony. It is a small act of dignity that nobody will remember by Thursday, including you.` },
    { label:'Announce a rival awards show. Bigger trophies.', eff:{base:+6,press:-6,cash:-0.3,auth:+2},
      res:`A competing ceremony is scheduled for the same night with a trophy forty percent larger by volume. Six celebrities RSVP by accident.` },
    { label:'Watch it. Live-tweet supportive things about the losers.', eff:{base:+2,press:-3,street:-3,congress:-1,auth:+1}, wild:true,
      res:`You spend the evening consoling strangers who did not win awards. It is oddly humane, mildly unhinged, and does not move a single poll number.` }]},

{ id:'l-late-night-monologue', title:'The Monologue', who:C.press, min:1, max:48, tags:['culture','press'],
  src:'a satirical monologue about the administration going viral',
  text:`Kaylee, holding a transcript. "A late-night host did nine minutes on you last night, sir. Six jokes about the ballroom, two about the rollercoaster, and one, I have to say, genuinely well-constructed bit about the tariffs. The base wants a response. I would prefer we not give one."`,
  choices:[
    { label:'Demand equal airtime to respond.', eff:{base:+7,press:-6,congress:-2,auth:+3},
      res:`A formal request for rebuttal time on a comedy show is sent and, politely, declined. The request itself becomes the next night's opening joke.` },
    { label:'Ignore it. It is a comedy show.', eff:{base:-3,press:+5,congress:+2,auth:0},
      res:`You decline to dignify a joke with a response. It is the correct move, and the single hardest one for anyone in this job to make.` },
    { label:'Call for the host to be fired.', eff:{base:+6,press:-6,street:-2,auth:+2},
      res:`You publicly call for a comedian's job over a bit about a rollercoaster. The network runs the bit again the following night, now with your quote attached.` },
    { label:'Go on the show yourself and do the tariff bit better.', eff:{base:+3,press:-5,street:-2,congress:-1,auth:+1}, wild:true,
      res:`You appear as a surprise guest and deliver, by most accounts, a genuinely funny version of the joke about yourself. It is the best press you get all month, and also, somehow, the most humbling.` }]},

{ id:'l-own-trophy', title:'The Trophy', who:C.lawyer, min:20, max:48, tags:['culture','press'],
  src:"a trademarked awards ceremony's top prize, coveted by an official with no claim to it",
  text:`Sy, hands folded. "Sir. Respectfully. You cannot rename the Luster Award's top trophy after yourself. It is a trademarked object owned by a private ceremony. I want to be extremely clear that this is not a gray area. It is, in every legal sense, a trophy."`,
  choices:[
    { label:'Do it anyway. Announce your own version.', eff:{base:+8,press:-5,courts:-4,auth:+3},
      res:`A rival trophy is announced, unsubtly similar in shape to the original, and awarded to yourself at a ceremony you also produced. A cease-and-desist arrives within the week, addressed, politely, to Sy.` },
    { label:'Drop it. Let the ceremony keep its trophy.', eff:{base:-3,press:+4,courts:+4,auth:0},
      res:`You accept that a private awards show gets to name its own trophy. Sy, for once, looks like a man whose week is going to be fine.` },
    { label:'Sue the ceremony for the trophy design.', eff:{base:+6,press:-5,courts:-5,cash:-0.3,auth:+2},
      res:`A federal lawsuit is filed over the shape of a trophy. The judge's footnote calling the claim "novel, in the pejorative sense" is quoted in every law review for a decade.` },
    { label:'Commission a completely different, smaller trophy.', eff:{base:+2,press:-4,courts:-3,auth:+1}, wild:true,
      res:`A modest, unrelated trophy is quietly produced and handed out at a much smaller event. It resembles a bowling award. Nobody at either ceremony seems to mind.` }]},

/* ══════════════ A WORD, A BOOK, A COLOUR ══════════════ */

{ id:'l-banned-word', title:'The Word', who:C.press, min:3, max:44, tags:['culture','press'],
  src:'an internal directive banning a specific word from official use',
  text:`Kaylee has the new list. "One word, sir, banned from the briefing room starting today. I want to note that the word is 'concerning.' I have said it eleven times a day for two years. I am now not allowed to describe anything as concerning."`,
  choices:[
    { label:'Ban five more words. Effective immediately.', eff:{base:+8,press:-7,congress:-2,auth:+3},
      res:`The banned list grows to six words in an afternoon. Reporters begin describing events using only synonyms, several of which are worse.` },
    { label:'Rescind the ban. Let Kaylee talk normally.', eff:{base:-3,press:+6,congress:+3,auth:0},
      res:`You allow your own spokesperson to use ordinary English in a room built for it. It is a startlingly low bar and you clear it.` },
    { label:'Ban the word from the dictionary too. Formally request it.', eff:{base:+5,press:-7,courts:-3,auth:+2},
      res:`A formal letter to a dictionary publisher requests the removal of a common adjective. The publisher declines, and adds a usage note about you specifically.` },
    { label:'Replace the word with an approved substitute: "spicy."', eff:{base:+3,press:-5,courts:-2,congress:-1,auth:+1}, wild:true,
      res:`Every concerning development in America is now, by mandate, "spicy." A wildfire briefing uses the word four times and nobody in the room can hold eye contact.` }]},

{ id:'l-the-colour', title:'The Colour', who:C.broom, min:1, max:48, tags:['culture','money','levity'],
  src:'an efficiency review discovering inconsistent branding colours across agencies',
  text:`Roscoe has swatches. "BROOM has identified an inefficiency, sir: forty-one federal agencies use forty-one different shades of blue. I propose one official Patriot Blue, mandated across every seal, sign, and uniform. The cost of repainting everything is, I will admit, not small."`,
  choices:[
    { label:'Mandate Patriot Blue. Every agency. This quarter.', eff:{base:+7,congress:-3,cash:-0.4,auth:+3},
      res:`Forty-one agencies repaint simultaneously. The new blue is, by three independent measurements, indistinguishable from the old blue at a normal viewing distance.` },
    { label:'Table it. Let agencies keep their own blue.', eff:{base:-3,congress:+4,cash:+0.1,auth:0},
      res:`You decline to spend federal money achieving nothing anyone can see. Roscoe files the swatches under a folder marked, hopefully, "later."` },
    { label:'Mandate a different colour for each branch of government.', eff:{base:+5,congress:-4,press:-3,cash:-0.3,auth:+2},
      res:`The executive gets red, the legislature gets a colour nobody can agree on the name of, and the judiciary refuses to participate on principle.` },
    { label:'Rename an existing colour after yourself.', eff:{base:+3,press:-4,courts:-2,congress:-1,cash:-0.1,auth:+1}, wild:true,
      res:`A paint company agrees, for a fee, to rename a shade of off-white after you. It is not flattering, and nobody tells you which shade it was.` }]},

{ id:'l-cartoon-ban', title:'The Cartoon', who:C.edu, min:1, max:40, tags:['culture','press'],
  src:"a children's cartoon character flagged for ambiguous moral alignment",
  text:`Bernadette, holding a printout of a storyboard. "A children's cartoon got flagged by a parent group, sir, for a talking cloud that is, and I want to stress this is the actual complaint, 'too ambiguous about its intentions.' The network is asking the department for guidance it should not need to ask for."`,
  choices:[
    { label:'Recommend it be pulled from public broadcast.', eff:{base:+7,press:-5,congress:-2,auth:+3},
      res:`A cartoon about a cloud is pulled from public television on federal advice. The show's creator, reached for comment, says only that the cloud "means well."` },
    { label:'No federal role here. Say so and move on.', eff:{base:-3,press:+5,congress:+3,auth:0},
      res:`You decline to adjudicate the moral character of an animated cloud. It remains on the air, ambiguous as ever, and nobody's childhood is harmed.` },
    { label:"Order a review of every cloud in children's programming.", eff:{base:+5,press:-5,congress:-3,cash:-0.2,auth:+2},
      res:`A federal review catalogs forty-one clouds across nine networks for tone. Three are deemed "concerning," a word Kaylee is, this week, still not allowed to use.` },
    { label:'Write the cloud a strongly worded letter.', eff:{base:+2,press:-4,courts:-2,congress:-1,auth:+1}, wild:true,
      res:`A formal letter addressed to a fictional cloud is drafted on White House letterhead, then leaked, then framed and sold as a limited print by the show's merchandise team.` }]},

/* ══════════════ THE FLAG AND OTHER SYMBOLS ══════════════ */

{ id:'l-new-flag', title:'The New Flag', who:C.writer, min:12, max:48, tags:['culture','congress'],
  src:'competing informal proposals to alter the flag\'s design',
  text:`Gideon has three mockups. "A movement wants a new star added, sir, for reasons nobody has explained, and a second movement wants a stripe removed for reasons that are, if anything, worse. I can write a speech defending either flag. I cannot write one defending both by Tuesday."`,
  choices:[
    { label:'Unveil your own redesign. Executive order it in.', eff:{base:+9,congress:-5,courts:-4,press:-4,auth:+4},
      res:`A new flag is unveiled with a design element that resembles, unmistakably, your initials. Congress discovers it does, constitutionally, get a say in this.` },
    { label:'The current flag stays. Say so, briefly.', eff:{base:-4,congress:+5,street:+4,press:+4,auth:+1},
      res:`You decline to redesign a two-hundred-year-old symbol on a Tuesday. It is the single least controversial thing you do all term, and it works.` },
    { label:'Let the base vote between the two proposals.', eff:{base:+6,congress:-4,press:-4,auth:+2},
      res:`A national plebiscite on flag design returns a result nobody proposed: a write-in campaign for the old flag wins by a landslide.` },
    { label:'Add a small flag to the flag.', eff:{base:+2,press:-4,courts:-3,congress:-2,auth:+1}, wild:true,
      res:`A miniature flag is stitched into the canton of the flag, a flag depicting a flag. A vexillologist writes an open letter. Nobody reads it, which the vexillologist finds, somehow, the most upsetting part.` }]},

{ id:'l-seal-redesign', title:'The Seal', who:C.hist, min:10, max:48, tags:['culture','vanity'],
  src:'a routine heraldic update to an official seal used to slip in a personal flourish',
  text:`Dr. Weir unrolls a proof. "A minor update to the presidential seal, sir, is normally routine: a feather adjusted, a talon corrected. Someone on the design committee has added a detail that is, in their words, 'more you.' I have looked at it for eleven minutes and I still cannot tell what it is."`,
  choices:[
    { label:'Approve the new detail. Add one more for good measure.', eff:{base:+8,press:-4,courts:-2,congress:-2,auth:+3},
      res:`The presidential seal is quietly modified for the first time in decades to include an unofficial personal touch. A vexillology forum notices within the hour and does not let it go.` },
    { label:'Keep the seal exactly as it has always been.', eff:{base:-3,press:+4,congress:+3,auth:0},
      res:`You leave a two-hundred-year-old symbol alone. It is the correct call and, characteristically, generates zero coverage of any kind.` },
    { label:'Redesign the whole seal from scratch.', eff:{base:+6,press:-4,courts:-3,congress:-2,auth:+2},
      res:`A brand-new presidential seal debuts with an eagle in a pose a graphic designer generously calls "dynamic." It is retired, quietly, within the year.` },
    { label:'Add the detail, but only to your personal stationery.', eff:{base:+2,press:-4,courts:-2,congress:-1,auth:+1}, wild:true,
      res:`The unofficial flourish appears only on letters you personally sign, a tiny, unauthorized flex visible to approximately nobody but you and your mail carrier.` }]},

{ id:'l-flag-pin', title:'The Flag Pin', who:C.cos, min:1, max:44, tags:['culture','vanity','levity'],
  src:"a lapel pin's size becoming, briefly, national news",
  text:`Deborah, quietly, before a rally. "A rival outlet measured your lapel pin against the Speaker's, sir. Yours is four millimeters larger. There is a chyron about this. There is, somehow, a chyron specifically about the four millimeters."`,
  choices:[
    { label:'Order a bigger pin. Gold-plated.', eff:{base:+7,press:-5,congress:-2,auth:+3},
      res:`A new pin arrives, visibly larger, unmistakably gold. It is reported on for three consecutive nights, which is three more nights than the pin, by any reasonable measure, deserves.` },
    { label:'Wear the standard pin. Say nothing about the size.', eff:{base:-3,press:+4,congress:+2,auth:0},
      res:`You wear an ordinary lapel pin like everyone else in the building. The story dies within a day for lack of anything to measure.` },
    { label:'Have every staffer wear a matching oversized pin.', eff:{base:+5,press:-5,cash:-0.2,auth:+2},
      res:`The entire senior staff appears at the next briefing wearing identical oversized pins. A photographer notes, accurately, that they now resemble a marching band.` },
    { label:'Stop wearing a pin at all.', eff:{base:-3,congress:-3,courts:-2,press:-2,auth:-1}, wild:true,
      res:`You remove the pin entirely, a gesture read by absolutely nobody as humility and by three separate outlets as a coded message about something else entirely.` }]},

{ id:'l-currency-face', title:'The Face on the Bill', who:C.treas, min:18, max:48, tags:['culture','money'],
  src:'a routine anti-counterfeiting redesign used as cover to replace a historical portrait',
  text:`Lyle lays out the redesign mockups. "Anti-counterfeiting update, sir, routine every fifteen years. The committee is using it as cover to quietly drop a Founding Father nobody defends anymore. They need a replacement face by Friday and they are, unsubtly, looking at you."`,
  choices:[
    { label:'Put yourself on the bill. Pick the denomination.', eff:{base:+9,press:-5,courts:-3,congress:-3,cash:-0.3,auth:+4},
      res:`You select a face and a denomination for currency still bearing your term number. The Mint's lawyers produce, within the hour, a memo titled simply "No."` },
    { label:'Let the committee choose a historical replacement.', eff:{base:-3,congress:+4,press:+4,auth:+1},
      res:`A little-known reformer from a century ago gets the honor instead. Nobody protests, mostly because nobody can say who it used to be either.` },
    { label:'Put your dog on the bill. It polls better than you.', eff:{base:+6,press:-5,courts:-3,cash:-0.2,auth:+2},
      res:`A retriever appears on a mock-up of federal currency and, per an internal poll Nadia did not want to share, tests eleven points higher than you did.` },
    { label:'Leave the old face. Add a small asterisk.', eff:{base:-3,congress:-3,courts:-2,press:-2,auth:-1}, wild:true,
      res:`A discreet asterisk is added beneath a Founding Father's portrait, footnoted on the back in six-point type nobody will ever read at a register.` }]},

{ id:'l-new-uniform', title:'The New Uniform', who:C.gen, min:16, max:48, tags:['culture','money'],
  src:'a costly dress-uniform redesign for a service that already had a functioning one',
  text:`General Tarrant, resigned to his fate. "A committee wants to redesign the dress uniform, sir. New colour, new insignia placement. The estimated cost, across every branch, is larger than several small countries' defense budgets, to outfit people who already have uniforms that work."`,
  choices:[
    { label:'Approve the full redesign. Unveil it at a parade.', eff:{base:+8,congress:-4,press:-4,cash:-0.4,auth:+3},
      res:`Every branch is re-outfitted in a new colour scheme unveiled at a parade nobody budgeted for either. Quartermasters across the country begin a very long year.` },
    { label:'Approve minor updates only. Keep the colour.', eff:{base:-3,congress:+4,cash:+0.1,auth:+1},
      res:`A modest, sensible update is approved and the existing colour scheme, and the existing budget, survive intact. Tarrant looks, briefly, ten years younger.` },
    { label:'Redesign it, then redesign it again after complaints.', eff:{base:+6,congress:-4,press:-4,cash:-0.5,auth:+2},
      res:`Two full redesigns are commissioned in one fiscal year. Quartermasters now maintain three separate uniform standards simultaneously, which is, technically, worse than one bad one.` },
    { label:'Let the troops vote on the new colour.', eff:{base:-3,congress:-3,courts:-2,press:-2,auth:-1}, wild:true,
      res:`A servicewide poll on uniform colour returns a result nobody expected: overwhelming support for the exact colour already in use. The redesign is quietly shelved, at real cost, having proven nothing except that it was unnecessary.` }]},

/* ══════════════ BANNED AND UN-BANNED THINGS ══════════════ */

{ id:'l-candy-ban', title:'The Candy', who:C.usher, min:1, max:48, tags:['culture','levity'],
  src:'a snack food banned from a federal building over its packaging',
  text:`Alvin, apologetically, brings up the vending machine. "A candy bar got banned from federal buildings last month, sir, over the wrapper colour. It is back on a shelf downstairs. Somebody restocked it without asking, and I do not want to know who."`,
  choices:[
    { label:'Re-ban it. Publicly. With a statement.', eff:{base:+6,press:-4,street:-2,auth:+2},
      res:`A candy bar is banned from federal property a second time, this time with a press release. Sales, nationwide, go up nine percent.` },
    { label:'Let it stay. It is a candy bar.', eff:{base:-2,press:+4,congress:+2,auth:0},
      res:`You decline to have a national position on chocolate. Alvin visibly relaxes for the first time in a week.` },
    { label:'Ban the whole vending machine. Install a salad one.', eff:{base:+4,press:-4,street:-3,cash:-0.2,auth:+1},
      res:`A federal building loses its only vending machine to a salad dispenser nobody asked for. It jams on day one and stays jammed.` },
    { label:'Personally re-approve it with a signing ceremony.', eff:{base:+3,press:-3,courts:-2,congress:-2,auth:+1}, wild:true,
      res:`You hold a small ceremony re-legalizing a candy bar, pen and all. Four reporters attend out of morbid curiosity. Two stay for the candy.` }]},

{ id:'l-official-emoji', title:'The Official Emoji', who:C.social, min:1, max:48, tags:['culture','levity'],
  src:'a lengthy international standards process for approving new emoji',
  text:`Brayden, far too excited. "We can propose a new official government emoji, sir. There is an actual process. It takes eighteen months and a committee in Northmark has to sign off. I want the eagle to look tougher. I have mockups."`,
  choices:[
    { label:'Submit the tougher eagle. Push to fast-track it.', eff:{base:+7,press:-4,congress:-2,auth:+3},
      res:`An emoji redesign request is fast-tracked through an international committee for the first time in its history, over an eagle's eyebrow angle. The committee grants it, mostly to make you stop calling.` },
    { label:'Submit the standard proposal. Let the process run.', eff:{base:-3,press:+4,congress:+2,auth:0},
      res:`A routine, unremarkable emoji request is filed through the normal eighteen-month process. It will likely be approved after you leave office, which is, honestly, fine.` },
    { label:'Design an entirely new emoji of yourself.', eff:{base:+5,press:-4,courts:-2,auth:+2},
      res:`A submission for a presidential emoji is filed and rejected on the grounds that the standard does not permit depictions of specific living people. This news does not go over well.` },
    { label:"Ban a rival country's flag emoji from federal devices.", eff:{base:+2,press:-4,congress:-2,courts:-1,auth:+1}, wild:true,
      res:`A foreign flag emoji is blocked on government-issued phones. Three staffers discover this only when trying to wish a counterpart a happy national day, which goes, predictably, badly.` }]},

{ id:'l-lunch-menu', title:'The Lunch Menu', who:C.broom, min:6, max:48, tags:['culture','money'],
  src:'a school cafeteria item flagged over its branding rather than its ingredients',
  text:`Roscoe, with a spreadsheet nobody asked for. "School lunch menus, sir. BROOM has flagged one item, a wrap, for what the flagging citizen calls 'un-American branding.' It is a chicken wrap. It has always been a chicken wrap. It will, if left alone, remain a chicken wrap."`,
  choices:[
    { label:'Ban the wrap nationwide. Announce it as a win.', eff:{base:+7,press:-4,congress:-2,auth:+3},
      res:`A federal ban on a specific chicken wrap is announced from the podium. Cafeteria staff in forty states quietly rename it and change nothing else.` },
    { label:'Leave the menu to the districts.', eff:{base:-3,press:+4,congress:+3,auth:0},
      res:`You allow a chicken wrap to remain on school menus without federal review. This is, somehow, treated as a mercy.` },
    { label:'Mandate a new, more patriotic menu nationwide.', eff:{base:+5,press:-4,congress:-3,cash:-0.3,auth:+2},
      res:`A national school lunch menu is redesigned around red, white and blue foods. The blue food proves to be the sticking point, biologically, for three straight weeks.` },
    { label:'Personally rename the wrap and leave the recipe alone.', eff:{base:+2,press:-4,courts:-1,congress:-2,auth:+1}, wild:true,
      res:`The wrap is renamed by presidential suggestion and served, identically, the next day. Nobody in the cafeteria line notices, or cares, which was rather the point Roscoe was trying to make in the first place.` }]},

/* ══════════════ RENAMING THE MAP ══════════════ */

{ id:'l-rename-strait', title:'The Strait', who:C.state, min:8, max:48, tags:['culture','foreign'],
  src:'a unilateral rename of a shared geographic feature',
  text:`Muriel has a map with a sticky note on it. "There is a movement to rename the strait, sir. It has had the same name on every chart for two centuries and three governments. Renaming it requires no other country's agreement. Getting anyone else to use the new name does."`,
  choices:[
    { label:'Rename it by executive order. Update the maps.', eff:{base:+8,press:-4,congress:-2,courts:-2,auth:+3},
      res:`The strait gets a new name on every domestic chart overnight. Every ship still radios in using the old one, out of habit and, frankly, spite.` },
    { label:'Leave it. Let cartographers do their slow, boring job.', eff:{base:-3,congress:+4,press:+4,auth:0},
      res:`You decline to rename a body of water by decree. It is quietly the most respected foreign-policy decision you make all year, and nobody covers it.` },
    { label:'Rename it after yourself. Insist allies adopt it.', eff:{base:+6,press:-4,congress:-3,courts:-2,auth:+3},
      res:`A cable goes out asking allied nations to update their charts to your name. Two comply. One writes back, politely, asking if this is a joke.` },
    { label:'Rename it, then rename it back a week later.', eff:{base:+2,press:-4,congress:-2,courts:-2,auth:+1}, wild:true,
      res:`A strait is renamed and unrenamed within eight days, at real cost to two printing houses. Sailors, to this day, simply call it "the strait."` }]},

{ id:'l-park-rename', title:'The Park', who:C.energy, min:8, max:48, tags:['culture','money'],
  src:'a national park up for renaming after its founder fell out of favor',
  text:`Cassandra Doyle has a briefing nobody wants to give. "A national park is up for renaming, sir. It has had the same name since it was founded by a man nobody currently likes. The park itself, I want to stress, has not changed."`,
  choices:[
    { label:'Rename it after yourself. Unveil a new sign.', eff:{base:+8,press:-4,congress:-2,courts:-2,cash:-0.2,auth:+3},
      res:`A national park is renamed by executive order. Every map, brochure and trailhead marker needs replacing, at a cost nobody budgeted for a mountain.` },
    { label:'Rename it something neutral. Geographic. Boring.', eff:{base:-3,congress:+4,press:+3,auth:0},
      res:`The park is renamed after a nearby ridge instead of a person. It satisfies nobody enough to complain, which is functionally a win.` },
    { label:'Rename it, then rename the visitor center separately, after your dog.', eff:{base:+6,press:-4,cash:-0.2,auth:+2},
      res:`A park and its gift shop now bear two unrelated names, one of them canine. Rangers field the same confused question four hundred times a week.` },
    { label:'Leave the name, add a plaque explaining the controversy instead.', eff:{base:-3,congress:-3,courts:-2,press:-2,auth:-1}, wild:true,
      res:`A small bronze plaque now explains, in careful museum language, that people disagree about a name. It is read by almost nobody and argued about by everybody who reads it.` }]},

/* ══════════════ THE BASE'S APPETITE ══════════════ */

{ id:'l-new-enemy', title:"This Week's Enemy", who:C.poll, min:1, max:48, tags:['culture','base','levity'],
  src:'rally enthusiasm tracked as a function of having an active grievance',
  text:`Nadia has the tracking numbers. "Enthusiasm dips whenever there is nothing to be against, sir. It is not a policy problem. It is a pacing problem. The base needs a new one roughly every eleven days, and we are on day fourteen."`,
  choices:[
    { label:'Pick a target. Announce it at the next rally.', eff:{base:+8,press:-4,street:-2,auth:+3},
      res:`A previously uncontroversial noun becomes, within an hour of the speech, a battle line. Nobody remembers choosing it. Everyone remembers picking a side.` },
    { label:'Talk about actual policy instead. See what happens.', eff:{base:-4,press:+5,congress:+4,auth:+1},
      res:`You spend a rally discussing infrastructure funding in detail. Attendance holds. Enthusiasm, measured honestly, does not, and Nadia writes this down without comment.` },
    { label:'Let the base submit nominations and pick the winner.', eff:{base:+6,press:-4,street:-3,auth:+2},
      res:`An open call for grievances returns four thousand entries. The winner, by a wide and mystifying margin, is a specific brand of reusable straw.` },
    { label:'Let a random online poll pick the enemy. No moderation.', eff:{base:+3,press:-5,congress:-2,street:-1,auth:+1}, wild:true,
      res:`An unmoderated online poll selects this week's target: a specific shade of orange traffic cone. The rally goes ahead as scheduled. Nobody in the crowd fully understands why they are angry, which does not stop them.` }]},

{ id:'l-outrage-wheel', title:'The Wheel', who:C.cos, min:1, max:48, tags:['culture','base','levity'],
  src:"communications staff formalizing the news cycle's grievance rotation",
  text:`Deborah, deadpan, wheeling in an actual wheel. "Communications built this, sir. You spin it, it lands on a topic, that topic is this week's outrage. It is, I want to stress, more honest than the process we were using before, which was nothing, dressed up as strategy."`,
  choices:[
    { label:'Spin it live, on camera, at the next rally.', eff:{base:+8,press:-5,street:-2,auth:+3},
      res:`A literal wheel selects the week's political grievance in front of forty thousand people and several very confused fact-checkers. It lands, at random, on something real for once, which nobody working the podium was prepared for.` },
    { label:'Retire the wheel. Talk about the infrastructure bill.', eff:{base:-4,press:+5,congress:+4,auth:+1},
      res:`You choose substance over spectacle for one news cycle. Enthusiasm dips exactly as much as everyone predicted, and the infrastructure bill gets, for once, an actual sentence on the news.` },
    { label:'Let the base spin the wheel themselves, by app.', eff:{base:+6,press:-5,street:-2,auth:+2},
      res:`A downloadable app lets supporters spin the wheel from home and submit new topics. It crashes twice from load and, in its brief life, generates eleven thousand distinct grievances.` },
    { label:'Add a "day off" wedge to the wheel. One slice, out of forty.', eff:{base:-4,congress:-3,street:-2,press:-2,auth:-1}, wild:true,
      res:`A single slice of the wheel is reserved for nothing happening at all. It has never once landed on it in eleven spins, and Deborah keeps track, quietly, of the odds.` }]}

);
})();
