/* ============================================================
   PACK O, HEALTH & SCIENCE
   A new outbreak, the briefing-room theatre around it, quack cures
   suggested live, a science agency told to change a number, vaccines
   and the base, a hurricane of misinformation, a vanity mission to
   the Moon and Mars, and a weather-control conspiracy or two. The
   danger is real throughout; the handling of it is the joke.
   Original satire in the house voice, INSPIRED BY THE GENRE, NEVER
   COPIED FROM ANY REAL PERSON. Fictional stand-ins only.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE OUTBREAK ══════════════ */

{ id:'o-outbreak-briefing', title:'The First Briefing', who:C.health, min:1, max:20, tags:['health','press'],
  src:'a novel virus emerging and the administration\'s first public briefing about it',
  text:'Wendell is holding two folders. "The virus is new, sir, and the honest numbers in this folder are not ' +
       'good. The optimistic numbers in this folder are not real. The podium is in twelve minutes and I need to ' +
       'know which folder you want me holding."',
  choices:[
    { label:'Hold the folder with the good numbers.', eff:{base:+6,press:-6,street:-4,auth:+2},
      res:'Wendell reads projections invented specifically to be read aloud. Reporters write them down anyway, because that is the job, and the actual curve does not care what was said at the podium.' },
    { label:'Let him read the real numbers, plainly.', eff:{base:-4,press:+6,street:+3,auth:+1},
      res:'The real numbers are bad and delivered without adjectives. It is the least reassuring, most useful thing said at a podium all year.' },
    { label:'Skip the folders. Say "we have it totally under control."', eff:{base:+5,press:-5,street:-3,auth:+1},
      res:'Four words, zero data, immediate applause from the people who were always going to applaud. The case count does not attend the briefing.' },
    { label:'Send Wendell home. Take the briefing yourself, off-script.', eff:{base:+3,press:-9,street:-6,courts:-2,auth:0}, wild:true,
      res:'You ad-lib epidemiology for forty minutes. Wendell watches from the wings with the specific stillness of a man updating his resume in his head.' }]},

{ id:'o-podium-theatrics', title:'The Podium', who:C.press, tags:['press','levity'],
  src:'a press briefing turned into stagecraft',
  text:'Kaylee has redesigned the briefing room: charts with your face watermarked in the corner, a laugh track ' +
       'cue for the sympathetic reporters, and a physical bell for cutting off the ones who are not. "It tests ' +
       'well, sir. It does not inform anyone of anything, but it tests very well."',
  choices:[
    { label:'Install the bell. Ring it often.', eff:{base:+7,press:-7,street:-2,auth:+3},
      res:'The bell becomes the most-clipped sound of the news cycle. Nobody remembers a single answer given between rings.' },
    { label:'Cut the theatrics. Just take the questions.', eff:{base:-3,press:+5,congress:+2,auth:0},
      res:'A briefing that briefs. It is a genuinely strange sight and three outlets note it as news in itself.' },
    { label:'Add a countdown clock and a studio audience.', eff:{base:+6,press:-6,street:-2,auth:+2},
      res:'The podium now resembles a game show, because it has, at Kaylee\'s quiet insistence, become one.' },
    { label:'Let Brayden take the next one solo, live, unscripted.', eff:{base:+2,press:-8,street:-3,congress:-2,auth:0}, wild:true,
      res:'A nineteen-year-old fields questions about mortality rates for forty straight minutes. He is, against all odds, oddly compelling, and utterly unprepared.' }]},

{ id:'o-injecting-light', title:'A Bright Idea', who:C.doc, min:4, max:24, tags:['health','gaffe','press'],
  src:'a live suggestion that light or disinfectant might treat the sick',
  text:'You floated it live, on camera, as a question: something about light, inside the body, cleaning things ' +
       'out. Ronny is standing very still. "Sir, I would like the record to reflect that I did not say that, ' +
       'was not asked, and am currently drafting a clarification I very much do not want to have to draft."',
  choices:[
    { label:'Double down. It was a serious scientific question.', eff:{base:+7,press:-9,courts:-2,auth:+3},
      res:'You insist, at length, that the idea deserves study. Poison control lines light up nationwide with callers who took you literally, because you were speaking literally.' },
    { label:'Let Ronny correct it, fast and flat.', eff:{base:-5,press:+7,street:+4,auth:+1},
      res:'Ronny reads a two-sentence clarification with the warmth of a man reading a parking citation. It works. Fewer people drink cleaning fluid this week than would have otherwise.' },
    { label:'Clarify that you were being sarcastic.', eff:{base:+3,press:-5,street:-3,auth:+1},
      res:'You explain that the nation failed to detect your sarcasm. The nation, watching the tape back, remains unconvinced that any existed.' },
    { label:'Announce a national research grant into light-based wellness.', eff:{base:+4,press:-4,courts:-2,congress:-3,cash:-0.3,auth:+1}, wild:true,
      res:'Federal money now funds a study into something you said off the cuff on a Tuesday. Grant applicants describe the review panel as "unusually earnest."' }]},

{ id:'o-quack-cure-tonic', title:'The Tonic', who:C.social, min:2, max:22, tags:['health','base','money'],
  src:'an unproven remedy embraced by the base and monetized fast',
  text:'Brayden has a bottle. "It\'s called Vitalume, sir. An influencer the base trusts swears it cured her ' +
       'cousin. It has not been tested on anyone\'s cousin, technically, but it has sold four hundred thousand ' +
       'units since Tuesday and somebody wants a photo of you holding one."',
  choices:[
    { label:'Hold the bottle. Smile. Say nothing false, technically.', eff:{base:+8,press:-6,courts:-3,auth:+2},
      res:'You hold a bottle of unproven tonic and let the photograph do the lying for you. Sales triple. A poison control hotline adds a second phone line.' },
    { label:'Have the health department test it. Quietly.', eff:{base:-3,press:+5,courts:+3,auth:0},
      res:'A lab runs the tonic through the standard panel. It is mostly water and citrus. The report is accurate, dull, and read by absolutely no one who bought a bottle.' },
    { label:'Endorse it by name in a speech.', eff:{base:+6,press:-7,courts:-4,street:-2,auth:+2},
      res:'You say the brand name from a podium with the seal of your office behind you. Legal counsel spends the following month explaining what an implied endorsement is.' },
    { label:'Launch a rival tonic under your own name.', eff:{base:+5,press:-5,courts:-4,cash:+0.2,auth:+1}, wild:true,
      res:'A competing bottle appears within the week, same water, better label. The two tonics now compete for the same untested cousin.' }]},

/* ══════════════ THE NUMBERS ══════════════ */

{ id:'o-change-the-count', title:'The Adjusted Figure', who:C.health, min:6, max:34, tags:['health','press'],
  src:'pressure on a health agency to revise a public infection number',
  text:'Wendell is holding a memo he clearly wishes he were not. "The instruction came down to lower the ' +
       'reported case count before the weekend numbers post, sir. Not because the testing changed. Because the ' +
       'number looked bad next to last month\'s."',
  choices:[
    { label:'Change the methodology. Change the number.', eff:{base:+7,press:-6,courts:-4,street:-3,auth:+3},
      res:'The case count drops by a third overnight through a footnote about counting methods that nobody reads and everybody feels the effects of.' },
    { label:'Publish the real number. Explain the trend.', eff:{base:-4,press:+6,congress:+3,street:+3,auth:+1},
      res:'The real figure is worse and it is reported that way, with context. It is unglamorous and it is, structurally, the only version of this job that keeps people alive.' },
    { label:'Stop counting a category entirely.', eff:{base:+5,press:-7,courts:-5,street:-3,auth:+2},
      res:'An entire class of case is quietly reclassified out of the dataset. The number falls. Everything the number was supposed to measure does not.' },
    { label:'Publish both numbers, side by side, unexplained.', eff:{base:+2,press:-7,courts:-2,congress:-2,auth:0}, wild:true,
      res:'Two contradictory figures run in the same release with no note on which is real. Three data journalists build entire careers untangling it by Friday.' }]},

{ id:'o-death-toll-math', title:'The Efficiency Review', who:C.broom, min:10, max:40, tags:['health','money','press'],
  src:'a mortality figure reframed through bureaucratic accounting',
  text:'Roscoe has a spreadsheet. "I\'ve run the excess mortality figures through the same efficiency model we ' +
       'use for the mail service, sir, and I can report the outbreak\'s per-death administrative cost is ' +
       'actually quite reasonable. I recognize how that sentence sounds."',
  choices:[
    { label:'Cite the efficiency figure publicly. It sounds authoritative.', eff:{base:+7,press:-8,street:-5,auth:+3},
      res:'You quote a per-death cost figure on camera as though it settles something. It settles nothing and haunts every future press availability you give.' },
    { label:'Shelve the spreadsheet. Fund the response instead.', eff:{base:-4,press:+5,street:+5,cash:-0.3,auth:0},
      res:'The number goes in a drawer and the money goes where the outbreak actually is. It is the correct decision and it generates zero headlines.' },
    { label:'Have Roscoe brief Congress on it directly.', eff:{base:+4,press:-6,congress:-6,street:-4,auth:+2},
      res:'Roscoe presents mortality as a line item to a room that goes very quiet. Two members walk out. He considers the walkout a form of engagement.' },
    { label:'Give Roscoe a medal for the spreadsheet.', eff:{base:+3,press:-7,street:-4,congress:-3,auth:0}, wild:true,
      res:'You publicly honor the efficiency review that measured human death in administrative overhead. Roscoe accepts the medal with the calm of a man who does not see the problem.' }]}

,

/* ══════════════ VACCINES AND THE BASE ══════════════ */

{ id:'o-vaccine-rollout', title:'The Rollout', who:C.health, min:10, max:40, tags:['health'],
  src:'a vaccine rollout complicated by political messaging',
  text:'Wendell lays out the distribution plan. "It works, sir. It is ready, it is tested, and by every model I ' +
       'have it is the single fastest way out of this. The complication is entirely political: a significant ' +
       'share of your own coalition currently believes it contains a tracking chip."',
  choices:[
    { label:'Brand it with your name. Sell it as the win.', eff:{base:+8,press:-4,congress:-2,auth:+3},
      res:'The vaccine gets your name on the box and your face on the ad. Uptake among the base rises for exactly the wrong reason and falls the instant anyone else praises it.' },
    { label:'Let the doctors make the case. Repeatedly. Patiently.', eff:{base:-4,press:+6,street:+5,auth:+1},
      res:'No branding, no rally, just the same three doctors explaining the same data on every outlet that will have them. It is slow and it is, eventually, what actually moves the number.' },
    { label:'Make it mandatory for federal benefits.', eff:{base:+3,press:-4,courts:-6,street:-6,congress:-3,auth:+4},
      res:'You tie the shot to a benefit check. It is legally aggressive, immediately litigated, and effective on exactly the people who were never going to sue you.' },
    { label:'Offer a lottery. Get the shot, win a truck.', eff:{base:+4,press:-3,congress:-4,cash:-0.5,auth:0}, wild:true,
      res:'A truck a week, drawn from vaccination records, live on television. It works, embarrassingly well, and nobody in the room can fully explain why.' }]},

{ id:'o-vaccine-rally-resistance', title:'The Trust Gap', who:C.poll, min:8, max:38, tags:['health','base'],
  src:'internal polling on vaccine hesitancy within a political coalition',
  text:'Nadia sets the memo down carefully. "Sixty-one percent of your own voters say they will not take it, ' +
       'sir, and the number that should worry you is this one: the ones who trust you most trust it least. ' +
       'Whatever you say next either fixes that or fossilizes it."',
  choices:[
    { label:'Tell the base it\'s their choice. Say nothing more.', eff:{base:+6,street:-6,press:-3,auth:+1},
      res:'You decline to spend any capital moving the number. Neutrality reads, to a room already suspicious, as confirmation. The number does not move.' },
    { label:'Get the shot yourself, on camera, no fanfare.', eff:{base:-2,press:+5,street:+6,auth:0},
      res:'You roll up a sleeve without a speech attached. It is a small, quiet piece of evidence and it moves the number more than any speech would have.' },
    { label:'Suggest it\'s the other party\'s vaccine.', eff:{base:+5,press:-5,congress:-4,street:-4,auth:+1},
      res:'You imply, without quite saying it, that the shot has a party affiliation. The number splits further along exactly that line, permanently.' },
    { label:'Bet a senator publicly he won\'t get one either.', eff:{base:+3,press:-4,congress:-5,street:-3,auth:0}, wild:true,
      res:'A televised dare between two men who should be discussing public health. The senator takes the bet. Neither man learns anything from it.' }]},

{ id:'o-storm-shelter-outbreak', title:'The Shelter', who:C.home, min:6, max:44, tags:['health','street'],
  src:'a disease spreading through crowded emergency shelters after a disaster',
  text:'Duane has the shelter logs. "Twelve thousand people under one roof after the storm, sir, cots eighteen ' +
       'inches apart, and now we have a second emergency stacked on the first one. The evacuees didn\'t sign up ' +
       'for two crises. We only budgeted for one."',
  choices:[
    { label:'Close the shelter. Send them home to flooded houses.', eff:{base:+4,press:-5,street:-8,courts:-3,auth:+2},
      res:'You solve the outbreak by removing its address. Twelve thousand people return to houses with no roof, which is a different emergency with worse photographs.' },
    { label:'Split the shelters. Slower, costlier, safer.', eff:{base:-3,press:+4,street:+6,cash:-0.4,auth:0},
      res:'Three buildings instead of one, more cots, more staff, more cost. It is the unglamorous logistics that actually contains it, and nobody photographs a spreadsheet.' },
    { label:'Ration the good cots by donation history.', eff:{base:+5,press:-5,courts:-5,street:-6,auth:+2},
      res:'Loyalty determines who gets the cot away from the draft. It leaks within a day and the photograph that runs is exactly the one you\'d expect.' },
    { label:'Send the National Guard band to boost morale instead of medics.', eff:{base:+3,press:-5,street:-8,auth:0}, wild:true,
      res:'A brass rendition of a patriotic standard plays over a room of feverish evacuees. Morale is, against expectation, not the bottleneck.' }]},

{ id:'o-misinfo-hurricane', title:'The Hurricane', who:C.social, min:4, max:36, tags:['health','press','tech'],
  src:'a wave of viral health misinformation outrunning the facts',
  text:'Brayden shows you the dashboard. Forty million shares in six hours: the virus is a hoax, the virus is a ' +
       'bioweapon, the cure is in your pantry, the cure is a scam. "It\'s not one lie, sir, it\'s a hurricane of ' +
       'them, and they\'re all moving faster than anything true has ever moved on this platform."',
  choices:[
    { label:'Ride it. Repost the ones that help you.', eff:{base:+7,press:-6,street:-4,auth:+2},
      res:'You amplify the ones that flatter the story you want told. The storm gets one more gust and you personally supply it.' },
    { label:'Fund a plain-language rebuttal feed. Boring. Fast.', eff:{base:-3,press:+6,street:+4,cash:-0.2,auth:0},
      res:'No outrage, no virality, just correct information posted quickly, over and over, by people with no charisma at all. It reaches a fraction of the audience and every bit of it counts.' },
    { label:'Blame the platform. Threaten to shut it down.', eff:{base:+5,press:-6,courts:-4,congress:-3,auth:+2},
      res:'You threaten the messenger for the volume of the message. The platform survives. The threat becomes its own viral moment, feeding the exact storm you meant to stop.' },
    { label:'Have Brayden post nothing but cat videos for a week.', eff:{base:+2,press:-4,street:-5,auth:-2}, wild:true,
      res:'The official account goes dark on the crisis and posts only cats for seven days. Engagement collapses along with any claim that you were managing this.' }]}

,

/* ══════════════ THE SPACE PROGRAM ══════════════ */

{ id:'o-moon-vanity-mission', title:'Project Daybreak', who:C.nasa, min:2, max:44, tags:['vanity','levity'],
  src:'a lunar mission announced for reasons unrelated to lunar science',
  text:'Dr. Brennan has the mission plan and a face that suggests she has read it more carefully than you have. ' +
       '"You want boots on the Moon before the midterms, sir. The engineering timeline says thirty-one months. ' +
       'The political timeline you announced says fourteen."',
  choices:[
    { label:'Announce the date anyway. Fourteen months. Publicly.', eff:{base:+9,press:-4,congress:-3,cash:-0.4,auth:+3},
      res:'You give a rocket a campaign deadline it cannot physically meet. Engineers now report to a calendar instead of a checklist, which is how checklists stop mattering.' },
    { label:'Take the thirty-one months. Say so, once, plainly.', eff:{base:-4,press:+5,congress:+3,auth:+1},
      res:'You announce a real date for a real mission and let it be less exciting than promised. It is the single most reliable thing said about the program all year.' },
    { label:'Move the flag-planting up. Leave the science payload behind.', eff:{base:+6,press:-4,courts:-2,cash:-0.3,auth:+2},
      res:'The mission arrives on schedule with a flag and no instruments. It is, technically, a landing. It measures nothing.' },
    { label:'Rename the mission after your hotel chain.', eff:{base:+5,press:-5,courts:-3,congress:-3,auth:+1}, wild:true,
      res:'A publicly funded lunar mission now shares a name with a resort property. Dr. Brennan submits the paperwork with her jaw visibly set.' }]},

{ id:'o-mars-timeline-promise', title:'The Mars Promise', who:C.nasa, min:14, max:48, tags:['vanity'],
  src:'a Mars timeline announced well ahead of any engineering consensus',
  text:'"You told a rally we\'d have people on Mars by the end of your second term, sir." Dr. Brennan says it ' +
       'the way one reads a charge back to a defendant. "I would like it noted for the record that no one in ' +
       'my agency was in the room when you said that."',
  choices:[
    { label:'Order the agency to hit the date. Find a way.', eff:{base:+8,press:-3,congress:-3,cash:-0.5,auth:+3},
      res:'You instruct physics to move faster on your schedule. It does not. Contractors bill for the attempt anyway, which is the one part of the plan that works exactly as promised.' },
    { label:'Correct the record. Give the real decade.', eff:{base:-5,press:+5,congress:+3,auth:+1},
      res:'You quietly walk the date back to something an engineer would sign their name to. It costs you a headline and buys the mission an actual chance of happening.' },
    { label:'Announce a "preparatory" crewed flyby to buy time.', eff:{base:+5,press:-4,courts:-2,cash:-0.3,auth:+2},
      res:'A mission that goes near Mars and does not land is unveiled as a milestone. It is, generously, a very expensive photograph.' },
    { label:'Promise to go yourself, personally, at the podium.', eff:{base:+6,press:-5,congress:-2,auth:0}, wild:true,
      res:'You pledge to be the first President on Mars. The Secret Service opens a file. Nobody in that file believes this is happening, including, eventually, you.' }]},

/* ══════════════ WEATHER AND THE WEB ══════════════ */

{ id:'o-weather-control-conspiracy', title:'Who\'s Steering the Storm', who:C.energy, min:6, max:40, tags:['science','base'],
  src:'a cloud-seeding program feeding conspiracy theories about engineered weather',
  text:'Cassandra is defending a drought-relief cloud-seeding program that has existed, quietly, for a decade. ' +
       '"The theory going around, sir, is that we\'re steering the hurricanes deliberately, at people who ' +
       'didn\'t vote for you. I would like to state, for the fourth time this week, that we seed clouds over ' +
       'three counties, not entire coastlines."',
  choices:[
    { label:'Let the theory run. It makes you sound powerful.', eff:{base:+7,street:-5,press:-4,courts:-2,auth:+2},
      res:'You decline to correct a conspiracy theory that flatters your own reach. It is cheap and it is corrosive and it costs you nothing today, which is exactly the kind of cost that compounds.' },
    { label:'Publish the actual program data. All of it.', eff:{base:-3,press:+5,street:+4,auth:0},
      res:'Ten years of cloud-seeding logs go online, itemized by county and rainfall inch. It is exhaustive, unglamorous, and it is the only thing that has ever actually dented a conspiracy theory.' },
    { label:'Cancel the real program to "prove" there\'s nothing to hide.', eff:{base:+3,press:-3,street:-3,cash:+0.1,auth:0},
      res:'You shut down a functioning drought program to disprove a theory about a different, imaginary one. The drought does not know the difference.' },
    { label:'Claim credit for controlling the weather. All of it.', eff:{base:+6,press:-5,street:-4,courts:-2,auth:+1}, wild:true,
      res:'You accept responsibility for every storm in the hemisphere, on the record. Meteorologists are delighted to now have someone to blame personally for a cold front.' }]},

{ id:'o-mask-mandate-flip', title:'Masks On, Masks Off', who:C.health, min:6, max:30, tags:['health'],
  src:'a mask guidance reversed for political rather than clinical reasons',
  text:'Wendell has two press releases open on his laptop, identical except for one word. "The data hasn\'t ' +
       'changed since the guidance we issued in March, sir. What\'s changed is that wearing one has become, ' +
       'apparently, a statement about you personally, and I\'m told that\'s now the deciding factor."',
  choices:[
    { label:'Reverse the guidance to match the base\'s mood.', eff:{base:+6,press:-5,street:-4,auth:+2},
      res:'The mandate flips to track a poll, not a curve. The next spike does not check which press release is current before it arrives.' },
    { label:'Keep the guidance tied to the data. Say so.', eff:{base:-3,press:+5,street:+4,auth:0},
      res:'The recommendation stays anchored to the actual numbers, unfashionable as that is. It is the correct call and, this month, an unpopular one.' },
    { label:'Make it a state-by-state vote. Let it get political.', eff:{base:+4,press:-4,congress:-3,street:-3,auth:+1},
      res:'Fifty different answers to one clinical question, decided by fifty different legislatures. The virus does not check jurisdiction either.' },
    { label:'Wear a mask shaped like the flag. Compromise.', eff:{base:+3,press:-5,street:-3,auth:0}, wild:true,
      res:'A patriotic-print mask satisfies no epidemiologist and delights several novelty vendors. Wendell asks, quietly, whether the print affects the filtration. It does, slightly, for the worse.' }]}

,

/* ══════════════ THE AGENCY ══════════════ */

{ id:'o-testing-suppression', title:'Fewer Tests, Fewer Cases', who:C.health, min:4, max:26, tags:['health','press'],
  src:'a suggestion that reducing testing would reduce the reported case count',
  text:'You floated it in a smaller meeting, half as a joke: if we just tested fewer people, the number goes ' +
       'down. Wendell did not laugh. "That is true, sir, in exactly the sense that turning off a smoke detector ' +
       'reduces the number of reported fires."',
  choices:[
    { label:'Slow the testing rollout. Quietly.', eff:{base:+6,press:-6,street:-5,courts:-2,auth:+2},
      res:'Testing sites shrink and so, obediently, does the number. What the number was measuring does not shrink with it, it just stops being counted.' },
    { label:'Expand testing. Publish the real trend.', eff:{base:-4,press:+6,street:+5,cash:-0.3,auth:0},
      res:'More tests, a worse-looking number, and a genuinely useful picture of where the outbreak actually is. It is the whole job and it will never trend.' },
    { label:'Say the high number is a testing "hoax."', eff:{base:+5,press:-7,street:-4,auth:+2},
      res:'You describe accurate data as a conspiracy against you personally. The data continues, indifferently, to be accurate.' },
    { label:'Order testing sites moved to areas that already vote for you.', eff:{base:+4,press:-6,street:-6,courts:-3,auth:+1}, wild:true,
      res:'Testing access is quietly redistributed by electoral map instead of by outbreak map. The two maps do not match, and the mismatch has a body count.' }]},

{ id:'o-agency-director-fired', title:'The Fall Guy', who:C.health, min:12, max:44, tags:['health','loyalty','press'],
  src:'a health official removed after publicly contradicting the administration',
  text:'Deborah has the resignation letter drafted; it just needs Wendell\'s signature, which he has not yet ' +
       'given. "He corrected you on television, sir, on a number, in front of eleven million people. He was ' +
       'right. That is somehow the part that makes this worse."',
  choices:[
    { label:'Fire him tonight. Announce it yourself.', eff:{base:+7,press:-7,courts:-3,congress:-3,auth:+3},
      res:'You remove the one official the room actually trusted, live, for the crime of accuracy. His successor is chosen, going forward, primarily for agreeableness.' },
    { label:'Keep him. Thank him for the correction.', eff:{base:-4,press:+7,congress:+4,street:+3,auth:0},
      res:'You let a subordinate correct you in public and survive it. It is a small, strange act of confidence and it buys the department more credibility than a year of good press.' },
    { label:'Reassign him to a windowless research post.', eff:{base:+4,press:-5,street:-3,auth:+2},
      res:'He keeps his title and loses his podium, transferred to a facility that studies soil composition. The demotion is, everyone agrees, extremely well disguised.' },
    { label:'Promote him. Put him in charge of your messaging instead.', eff:{base:+3,press:-3,congress:-4,auth:-2}, wild:true,
      res:'The man who corrects you on air is now responsible for what you say on air. He treats the promotion as a hostage situation and, to his credit, negotiates well.' }]},

{ id:'o-surgeon-general-muzzled', title:'The Gag', who:C.doc, min:6, max:34, tags:['health','loyalty','press'],
  src:'a government physician instructed to stop speaking to the press independently',
  text:'Ronny has been told, gently, that his media appearances now require sign-off forty-eight hours in ' +
       'advance. "I understand the concept of message discipline, sir. I would like it noted that outbreaks do ' +
       'not honor a forty-eight-hour review window."',
  choices:[
    { label:'Enforce the review window. No exceptions.', eff:{base:+6,press:-6,street:-4,auth:+2},
      res:'The nation\'s physician now needs a permission slip to answer a question about a fever. The next outbreak update arrives two days after it would have been useful.' },
    { label:'Give him a standing weekly slot instead.', eff:{base:-3,press:+6,street:+4,auth:0},
      res:'A scheduled, unfiltered briefing, every week, on the record. It is the least controlling option available and it is, by a wide margin, the most trusted thing on the calendar.' },
    { label:'Have him cleared only through Kaylee, message by message.', eff:{base:+4,press:-5,street:-3,auth:+1},
      res:'Every clinical answer now passes through the press office first. The answers get shorter, vaguer, and considerably later.' },
    { label:'Give Ronny his own late-night call-in show.', eff:{base:+3,press:-4,congress:-3,auth:-1}, wild:true,
      res:'The Physician to the President now takes live caller questions about rashes at eleven at night. Ratings are modest. Public health, unexpectedly, is served.' }]},

/* ══════════════ THE UNIFORM AND THE DOOR ══════════════ */

{ id:'o-military-vaccine-mandate', title:'Standing Orders', who:C.gen, min:14, max:44, tags:['health','war'],
  src:'a vaccine requirement for service members contested inside the ranks',
  text:'General Tarrant does not enjoy delivering personnel numbers as casualties. "Fourteen thousand refuse ' +
       'the shot on principle, sir, and under standing regulations that\'s fourteen thousand discharges I have ' +
       'to process in a force that is already short-staffed."',
  choices:[
    { label:'Enforce it. Discharge every refusal.', eff:{base:+6,press:-4,street:-4,congress:-3,auth:+3},
      res:'Fourteen thousand service members are separated on a public health rule enforced with military precision. Readiness drops. The rule, on paper, is satisfied perfectly.' },
    { label:'Grant a structured exemption process. Slower, quieter.', eff:{base:-3,press:+4,congress:+3,auth:0},
      res:'A review board, case by case, unglamorous as paperwork always is. Fewer discharges, more shots eventually taken, and no single dramatic headline.' },
    { label:'Make refusal a matter of personal loyalty to you.', eff:{base:+5,press:-5,congress:-4,street:-3,auth:+3},
      res:'You reframe a clinical requirement as a loyalty test. Tarrant\'s face does the thing it does when he is composing, silently, his eventual resignation letter.' },
    { label:'Offer refusers a transfer to a base in Antarctica instead.', eff:{base:+3,press:-5,congress:-3,auth:-1}, wild:true,
      res:'A remote posting is offered as an alternative to discharge. Nine volunteers accept. The logistics office did not have a plan for nine, and now has one.' }]},

{ id:'o-vaccine-passport-program', title:'The Passport', who:C.home, min:10, max:40, tags:['health','courts'],
  src:'a proof-of-vaccination system proposed for domestic travel',
  text:'Duane lays out the app mockup. "A digital pass, sir, checked at airports and stadiums, tied to ' +
       'vaccination status. It would genuinely slow the spread. It would also mean the federal government ' +
       'checking a health record before letting a citizen through a door."',
  choices:[
    { label:'Build it. Mandatory, nationwide, by fall.', eff:{base:+5,press:-5,courts:-6,street:-6,congress:-3,auth:+4},
      res:'A federal health check becomes a condition of movement. It works, clinically. It also hands your successor a tool you will not enjoy seeing in different hands.' },
    { label:'Leave it optional, state by state.', eff:{base:-2,press:+4,congress:+4,courts:+2,auth:0},
      res:'No federal mandate, just a voluntary standard states can adopt. It is slower, patchier, and the one version that survives every court challenge intact.' },
    { label:'Require it only for flights to opposition-run cities.', eff:{base:+5,press:-5,courts:-6,congress:-4,auth:+2},
      res:'The requirement is quietly asymmetric by destination. It is discovered within a week and it is, by then, the entire story.' },
    { label:'Replace the app with a physical wax seal on the hand.', eff:{base:+3,press:-5,courts:-3,street:-3,auth:0}, wild:true,
      res:'A literal stamp, ink and all, in place of a digital record. It is somehow more alarming to civil libertarians than the app was, and considerably easier to forge.' }]}

,

{ id:'o-fish-tank-cleaner', title:'The Stockpile', who:C.broom, min:2, max:20, tags:['health','money'],
  src:'a rush on an unproven treatment causing shortages in an unrelated market',
  text:'Roscoe reports a supply problem nobody modeled for. "The unproven remedy you praised on television is ' +
       'chemically identical to a livestock dewormer, sir, and we have now purchased the national supply. ' +
       'Farmers cannot get it for actual livestock. This is, procurement-wise, a new kind of problem."',
  choices:[
    { label:'Keep buying. Announce a "strategic reserve."', eff:{base:+6,press:-5,courts:-3,cash:-0.4,auth:+2},
      res:'A federal reserve of livestock dewormer is declared a matter of public health. Two agricultural states run out within the month. Nobody planned for this to be the crisis.' },
    { label:'Release the stockpile back to farmers. Correct the record.', eff:{base:-4,press:+5,street:+3,cash:+0.2,auth:0},
      res:'The supply goes back where it was needed and the remedy gets a public, unglamorous correction. It is the whole job, again, and it will not trend.' },
    { label:'Ration it: half for the remedy, half for livestock.', eff:{base:+3,press:-4,street:-3,cash:-0.1,auth:+1},
      res:'A compromise that serves neither problem well. The livestock get less than they need and the remedy still does nothing for the people taking it.' },
    { label:'Have Roscoe personally test a dose on camera.', eff:{base:+3,press:-5,street:-3,courts:-2,auth:-1}, wild:true,
      res:'The Efficiency Czar swallows a dose of livestock dewormer for the cameras to prove a point nobody asked him to prove. He survives. His approval rating, briefly, exceeds yours.' }]},

{ id:'o-faith-healer-oval', title:'Laying On of Hands', who:C.pastor, min:8, max:40, tags:['health','levity'],
  src:'a spiritual figure invited to address a public health crisis directly',
  text:'Reverend Muncy has brought a guest: a healer who claims a documented cure rate through touch alone, ' +
       'unreviewed by anyone with a medical license. "She has a following larger than the health department\'s, ' +
       'sir. I am not asking you to believe it. I am asking you to consider what it costs you to let her in ' +
       'the room."',
  choices:[
    { label:'Let her pray over the cameras. Full access.', eff:{base:+7,press:-5,street:-4,auth:+2},
      res:'A faith healer receives a White House photo-op in place of a clinical briefing. The footage moves further than any press release you have issued this year, in a direction with no data behind it.' },
    { label:'Meet privately. Keep it off the record entirely.', eff:{base:-2,press:+4,street:+2,auth:0},
      res:'A quiet, respectful, unphotographed conversation. Nobody\'s faith is mocked and nobody mistakes a laying-on of hands for a clinical trial. It costs you nothing and gains you nothing measurable either.' },
    { label:'Have her replace the health briefing on the schedule.', eff:{base:+5,press:-5,street:-4,courts:-2,auth:+2},
      res:'The daily health update is bumped for a healing service. The department reschedules to a slot with a fraction of the audience and none of the incense.' },
    { label:'Ask her to heal the budget deficit while she\'s here.', eff:{base:+4,press:-4,congress:-3,auth:0}, wild:true,
      res:'You ask, apparently sincerely, whether the touch works on fiscal matters. The Reverend looks at you the way one looks at a man who has finally said the quiet part out loud.' }]},

{ id:'o-5g-conspiracy-post', title:'The Repost', who:C.social, min:4, max:26, tags:['health','tech','press'],
  src:'a wireless-network conspiracy theory linked to a disease outbreak',
  text:'Brayden reposted something at 1 a.m. from the official account: a theory linking new cell towers to the ' +
       'outbreak, unsourced, already at two million views by breakfast. "It was already trending, sir. I just, ' +
       'you know. Amplified it. That\'s the job description, technically."',
  choices:[
    { label:'Leave it up. Let the base run with it.', eff:{base:+6,street:-6,press:-6,auth:+1},
      res:'The theory stays live under the presidential seal. Cell technicians start receiving threats over infrastructure that transmits nothing more dangerous than a weather app.' },
    { label:'Delete it. Post a correction, no excuses.', eff:{base:-4,press:+5,street:+4,auth:0},
      res:'The post comes down within the hour with a plain correction attached. It is a small, boring act of hygiene and it is worth more than it looks.' },
    { label:'Say it was "just a question," not an endorsement.', eff:{base:+3,press:-4,street:-3,auth:0},
      res:'You describe amplifying a baseless theory to your entire following as merely "asking questions." The technicians keep receiving the threats regardless of the framing.' },
    { label:'Have Brayden visit a cell tower on camera to disprove it.', eff:{base:+3,press:-4,street:-4,auth:-1}, wild:true,
      res:'A nineteen-year-old stands next to a cell tower for forty-five minutes to prove a negative. It works better than the correction did, for reasons no communications theory fully explains.' }]},

{ id:'o-superspreader-rally', title:'Rally Must Go On', who:C.poll, min:2, max:24, tags:['health','base'],
  src:'a large political rally held against public health advice',
  text:'Nadia has the numbers on both sides of this. "Cancel it and the base reads it as fear, sir. Hold it, ' +
       'indoors, twelve thousand people, no distancing, and the health department\'s own model says we\'ll see ' +
       'a case spike inside two weeks that traces straight back to the venue."',
  choices:[
    { label:'Hold it. Bigger venue. No masks required.', eff:{base:+9,street:-6,press:-5,auth:+3},
      res:'Twelve thousand people cheer in one room. The spike arrives on schedule, exactly where the model said it would, and the rally is remembered fondly by everyone who was not in the hospital afterward.' },
    { label:'Move it outdoors. Smaller. Distanced.', eff:{base:-3,press:+4,street:+4,auth:0},
      res:'A smaller, safer event that reads, on television, as slightly less thrilling. It is the correct trade and it will never be the thing anyone chants about.' },
    { label:'Hold it indoors but require a signed waiver first.', eff:{base:+5,press:-5,courts:-4,street:-3,auth:+2},
      res:'A legal document absolves the campaign of the outcome the health department already predicted. It changes nothing about the physics of the room.' },
    { label:'Livestream a virtual rally. Hologram of yourself on stage.', eff:{base:+1,press:-5,street:-4,cash:-0.3,auth:-1}, wild:true,
      res:'A flickering projection of you addresses an empty arena. Attendance is zero. Nobody catches anything. The reviews call it, unkindly but accurately, a rehearsal.' }]},

{ id:'o-school-reopening-pressure', title:'Back in the Building', who:C.edu, min:8, max:32, tags:['health'],
  src:'pressure to reopen schools ahead of public health guidance',
  text:'Bernadette has the two conflicting memos. "The health department\'s model says wait six weeks, sir. The ' +
       'base wants classrooms open Monday. I can hand you either memo. I cannot hand you one that satisfies ' +
       'both, because they are describing different diseases at different speeds."',
  choices:[
    { label:'Open Monday. Announce it as a return to normal.', eff:{base:+7,press:-5,street:-6,congress:-2,auth:+2},
      res:'Classrooms fill on schedule and the case curve does not consult the school calendar before it climbs. "Normal" turns out to have been a choice, not a fact.' },
    { label:'Follow the six-week model. Fund remote learning meanwhile.', eff:{base:-4,press:+5,street:+4,cash:-0.3,auth:0},
      res:'Six more weeks of laptops and patience, funded properly this time. It satisfies nobody\'s sense of urgency and it is, measurably, the safer number.' },
    { label:'Reopen, but only in districts that supported you.', eff:{base:+5,press:-5,street:-6,courts:-4,congress:-3,auth:+2},
      res:'The reopening map is quietly redrawn along electoral lines instead of infection lines. A teacher in an opposition district asks, on camera, which map the virus is using.' },
    { label:'Hold class outdoors. All of it. Every subject.', eff:{base:+2,press:-5,street:-4,cash:-0.2,auth:-1}, wild:true,
      res:'Trigonometry under a tent in October. It is colder than anyone anticipated and, epidemiologically, it is not a bad idea at all.' }]},

/* ══════════════ THE WORLD ══════════════ */

{ id:'o-withdraw-world-health-body', title:'The Withdrawal Letter', who:C.state, min:10, max:44, tags:['health','diplomacy'],
  src:'withdrawal from an international public health organization mid-crisis',
  text:'Muriel has the exit letter drafted and unsigned. "Leaving the international health body saves us the ' +
       'dues, sir, and it also removes us from the room where the next outbreak gets named, tracked, and ' +
       'shared before it reaches our shores. Those are not unrelated facts."',
  choices:[
    { label:'Sign it. Withdraw immediately, mid-crisis.', eff:{base:+7,press:-5,courts:-2,congress:-3,auth:+3},
      res:'You leave the room during the meeting that matters most. The savings are real and modest. The information you no longer receive first is neither.' },
    { label:'Stay in. Push for reform from inside.', eff:{base:-4,press:+4,congress:+3,auth:0},
      res:'A slower, less satisfying path: staying, complaining, and occasionally getting a vote changed. It keeps the early-warning pipeline open, which nobody notices until it saves someone.' },
    { label:'Withdraw, then quietly rejoin under a different name.', eff:{base:+3,press:-4,congress:-3,auth:+1},
      res:'You leave loudly and rejoin discreetly, renegotiating the same dues under a new letterhead. The base sees the exit. It does not see the return.' },
    { label:'Start a rival health body with three allied nations.', eff:{base:+4,press:-4,congress:-4,cash:-0.4,auth:0}, wild:true,
      res:'A new alliance is founded, headquartered in a borrowed conference room, with a mandate nobody has finished drafting. It shares no data with anyone yet, including you.' }]},

{ id:'o-ppe-hoarding', title:'The Good Masks', who:C.home, min:2, max:20, tags:['health','money'],
  src:'protective equipment diverted to well-connected recipients during a shortage',
  text:'Duane has a list he did not create but must now defend. "The national stockpile is short, sir, ' +
       'hospitals in three states are reusing masks meant for single use, and forty thousand of the good ones ' +
       'went, this morning, to a donor\'s private clinic. I would like it on record that I flagged this."',
  choices:[
    { label:'Let the donor keep them. He earned it.', eff:{base:+5,press:-5,street:-6,courts:-2,auth:+2},
      res:'Forty thousand masks stay with a man who did not need them as urgently as three hospitals did. The optics arrive before the shipment does.' },
    { label:'Recall them. Redirect to the shortage states.', eff:{base:-3,press:+5,street:+5,auth:0},
      res:'An uncomfortable phone call to a donor and a truck rerouted to where the shortage actually is. It costs a friendship and saves a shift\'s worth of nurses from reusing single-use gear.' },
    { label:'Split the shipment. Half to the donor, half to hospitals.', eff:{base:+3,press:-4,street:-3,auth:+1},
      res:'A compromise that leaves both sides short. The donor is mildly annoyed and the hospitals are still rationing, just with slightly better arithmetic.' },
    { label:'Have Alvin ship the residence\'s own linen-closet masks to the hospitals.', eff:{base:+2,press:-3,street:-4,auth:-2}, wild:true,
      res:'A modest box of decorative cloth masks from the Residence arrives at a hospital loading dock. The gesture is sincere, small, and clinically almost useless.' }]},

{ id:'o-ventilator-manufacturing', title:'The Contract', who:C.broom, min:2, max:22, tags:['health','money'],
  src:'an emergency equipment contract awarded for speed over qualification',
  text:'Roscoe found a manufacturer who can deliver ventilators in nine days instead of ninety. "They have ' +
       'never built a ventilator before, sir. They build vending machines. I want to stress that the mechanical ' +
       'principle is not the same, and I want to stress it before you sign anything."',
  choices:[
    { label:'Sign it. Nine days beats ninety, always.', eff:{base:+6,press:-4,courts:-3,cash:-0.3,auth:+2},
      res:'A vending machine company retools for ventilators on a nine-day sprint. Some units work perfectly. The recall on the rest happens quietly, later, after the headline has already run.' },
    { label:'Go with the ninety-day qualified manufacturer.', eff:{base:-3,press:+4,courts:+3,cash:-0.2,auth:0},
      res:'The slower, boring, qualified option. Every unit works. Nobody covers the story of the ventilator that functioned exactly as intended.' },
    { label:'Split the order between both manufacturers. Hedge it.', eff:{base:+2,press:-3,courts:-2,cash:-0.4,auth:+1},
      res:'Half a fast bet and half a safe one. It costs more than either option alone and satisfies the part of the building that likes to feel it covered every angle.' },
    { label:'Have Roscoe personally inspect every unit off the line.', eff:{base:+3,press:-4,street:-3,cash:-0.1,auth:-1}, wild:true,
      res:'The Efficiency Czar spends three weeks on a factory floor checking valves by hand. He becomes, unexpectedly, quite good at it. The factory offers him a job.' }]}

,

{ id:'o-lab-funding-cut', title:'The Grant', who:C.health, min:8, max:38, tags:['health','congress'],
  src:'research funding for a virology lab cut amid political controversy',
  text:'Wendell is defending a grant that has become, overnight, a talking point. "The lab studies exactly the ' +
       'kind of virus we\'re currently fighting, sir. It\'s also become shorthand on cable news for something ' +
       'sinister, and cutting it plays well for about a week before the next outbreak reminds everyone why it ' +
       'existed."',
  choices:[
    { label:'Cut the funding. Announce it as accountability.', eff:{base:+7,press:-4,congress:-3,auth:+2},
      res:'The lab closes and the research stops. The applause lasts roughly a news cycle. The next unfamiliar virus arrives with one fewer team who would have recognized it early.' },
    { label:'Keep the funding. Add outside oversight.', eff:{base:-4,press:+5,congress:+3,courts:+2,auth:0},
      res:'The lab stays open under a new layer of independent review. It satisfies almost nobody loudly and it is, on the evidence, the responsible call.' },
    { label:'Cut it, then quietly fund the same work under a new grant name.', eff:{base:+4,press:-4,congress:-2,auth:+1},
      res:'The politically toxic line item disappears and reappears under friendlier language. The research continues. The paper trail becomes considerably harder to explain later.' },
    { label:'Move the lab to a military base to "keep an eye on it."', eff:{base:+4,press:-4,congress:-3,courts:-2,auth:0}, wild:true,
      res:'Basic virology research relocates behind a checkpoint that was not built for petri dishes. The scientists now need a security clearance to reach their own microscopes.' }]},

{ id:'o-herd-immunity-pitch', title:'The Contrarian', who:C.doc, min:6, max:30, tags:['health'],
  src:'a fringe medical adviser proposing to let an outbreak spread unchecked',
  text:'A doctor from outside the department has your ear, and Ronny does not care for it. "He\'s proposing we ' +
       'let it run through the population deliberately, sir, and call the survivors immune. I want it noted ' +
       'that \'the survivors\' is doing an enormous amount of work in that sentence, and he is not a specialist ' +
       'in anything relevant."',
  choices:[
    { label:'Adopt the strategy. Announce it as bold and modern.', eff:{base:+7,press:-5,street:-7,courts:-2,auth:+3},
      res:'You let the outbreak run on the theory that the ones who make it through will be enough. The department stops calling it a strategy and starts calling it, privately, an outcome.' },
    { label:'Reject it. Stick with containment, unglamorous as it is.', eff:{base:-3,press:+5,street:+5,auth:0},
      res:'You decline the bold, terrible idea in favor of the boring, working one. It costs you a headline about being decisive and saves you several thousand others.' },
    { label:'Adopt it quietly, without the announcement.', eff:{base:+3,press:-5,street:-8,courts:-3,auth:+2},
      res:'The strategy runs without ever being named as one. It is discovered anyway, the way all of these things are, and the absence of an announcement is treated as an admission.' },
    { label:'Put the contrarian doctor and Ronny on a televised debate.', eff:{base:+3,press:-4,street:-3,auth:-1}, wild:true,
      res:'Two doctors argue population-level ethics on daytime television. Ronny wins on substance. The other man wins the clip that gets shared, which is its own small lesson about the medium.' }]},

{ id:'o-pharma-donor-favor', title:'The Fast Lane', who:C.ethics, min:10, max:40, tags:['health','money'],
  src:'a favorable regulatory decision following a large campaign contribution',
  text:'Miriam is holding two documents that arrived within a day of each other: a seven-figure donation, and ' +
       'an approval memo for the donor\'s drug that skipped two review stages. "I\'m not alleging anything, ' +
       'sir. I\'m just observing that these two pieces of paper are dated Tuesday and Wednesday."',
  choices:[
    { label:'Approve it. Timing is a coincidence.', eff:{base:+5,press:-5,courts:-6,congress:-3,auth:+2},
      res:'The drug clears review two stages early, one day after a large check clears the bank. Nobody in the room believes the coincidence, including, quietly, you.' },
    { label:'Send it back through full review. No exceptions.', eff:{base:-3,press:+5,courts:+4,auth:0},
      res:'The drug goes through every stage it was supposed to, donation or not. It takes longer, it satisfies the process, and the donor\'s calls go unreturned for a while.' },
    { label:'Approve it, but return the donation to look clean.', eff:{base:+3,press:-4,courts:-4,cash:+0.1,auth:+1},
      res:'You keep the fast-tracked approval and hand back the check as a gesture. The paper trail still shows what it shows. The gesture fools exactly no one who can read a date.' },
    { label:'Refer the whole thing to Miriam\'s office for a public ruling.', eff:{base:-2,press:+2,congress:-6,courts:-3,auth:-3}, wild:true,
      res:'You hand your own ethics office the authority to rule on you, publicly, with no preview of the outcome. It is either principled or reckless, and you will not know which until the ruling lands.' }]},

{ id:'o-measles-comeback', title:'The Return', who:C.health, min:14, max:44, tags:['health'],
  src:'a preventable childhood disease resurfacing due to declining vaccination rates',
  text:'Wendell has a case count for a disease the department considered solved twenty years ago. "It\'s back, ' +
       'sir, in three states, entirely among unvaccinated children, because a rate that used to run ninety-five ' +
       'percent has drifted under seventy. This was, until recently, considered a finished problem."',
  choices:[
    { label:'Blame the schools for not catching it sooner.', eff:{base:+4,press:-5,street:-4,auth:+1},
      res:'You point at the classroom instead of the exemption form that made the classroom possible. The rate does not move and neither does the blame land anywhere useful.' },
    { label:'Fund a plain outreach campaign. No mandates, just clinics.', eff:{base:-3,press:+5,street:+4,cash:-0.2,auth:0},
      res:'Mobile clinics and a straightforward pamphlet, nothing more dramatic than that. It is slow, it is unglamorous, and the rate ticks up a point at a time.' },
    { label:'Tighten the exemption rules statewide, forcibly.', eff:{base:+4,press:-4,street:-5,congress:-3,auth:+3},
      res:'You remove the easy exemption in one legislative push. It works clinically and it hands the opposition a rallying cry about parental rights that outlives the outbreak.' },
    { label:'Send Brayden to livestream a clinic visit with a costume mascot.', eff:{base:+2,press:-5,street:-3,cash:-0.1,auth:-1}, wild:true,
      res:'A giant foam microbe mascot dances outside a vaccination clinic for the cameras. Turnout ticks up two percent among people who would never admit the mascot worked on them.' }]},

{ id:'o-fast-track-approval', title:'Skip the Line', who:C.health, min:6, max:30, tags:['health'],
  src:'political pressure to approve a treatment ahead of completed trials',
  text:'Wendell is holding the trial data, which is not finished. "Phase three isn\'t done, sir. We have ' +
       'promising numbers and an unfinished picture, and you have told a rally it will be available by name ' +
       'next month. Those are two different documents and only one of them is true yet."',
  choices:[
    { label:'Approve it now. Announce it as a victory.', eff:{base:+7,press:-5,courts:-4,auth:+3},
      res:'The treatment ships before the trial finishes, on schedule with the rally, not the science. Most who take it are fine. The department spends the next year explaining the ones who were not.' },
    { label:'Wait for the full data. Say so publicly.', eff:{base:-5,press:+6,courts:+4,auth:+1},
      res:'You tell a crowd that wanted a victory lap that the data isn\'t ready yet. It is deeply unsatisfying and it is the entire reason the approval process exists.' },
    { label:'Approve it for "emergency use" only, quietly expanding it.', eff:{base:+5,press:-5,courts:-5,auth:+2},
      res:'A narrow emergency approval widens, memo by memo, until it covers nearly everyone. The paperwork tracks it precisely. The actual use outran it months ago.' },
    { label:'Take it yourself on camera to prove confidence in the data.', eff:{base:+4,press:-5,courts:-3,auth:0}, wild:true,
      res:'You take an unfinished treatment on live television as a demonstration of faith in a process you have not let finish. Ronny watches with the expression of a man counting his own remaining options.' }]},

/* ══════════════ COURTS AND CONGRESS ══════════════ */

{ id:'o-quarantine-order-court', title:'The Order', who:C.ag, min:4, max:30, tags:['health','courts'],
  src:'a mandatory quarantine order challenged on constitutional grounds',
  text:'Bo has the quarantine order and the lawsuit against it on the same desk. "It\'s defensible, sir, ' +
       'legally, if it\'s narrow and time-limited. What you signed is neither. A judge is going to ask why ' +
       'we\'re detaining people who tested negative, and I do not currently have an answer that survives ' +
       'cross-examination."',
  choices:[
    { label:'Defend it as written. Broad and indefinite.', eff:{base:+6,courts:-7,street:-5,press:-3,auth:+3},
      res:'You argue for a quarantine with no clear end and no clear standard. The judge finds against you in language that will be quoted in law schools for a decade.' },
    { label:'Narrow it. Testing-based, fourteen-day cap.', eff:{base:-3,courts:+6,press:+4,auth:0},
      res:'The order gets an actual scope and an actual end date. It survives review, which is the entire point of writing a law like a law.' },
    { label:'Quarantine only in districts that voted against you.', eff:{base:+4,press:-5,street:-6,courts:-7,congress:-3,auth:+2},
      res:'The order\'s geography tracks the electoral map, not the infection map. It is enjoined within the week and the injunction reads your intent back to you in plain English.' },
    { label:'Offer voluntary house arrest with a stipend instead.', eff:{base:+2,press:-4,courts:-3,congress:-2,cash:-0.4,auth:-1}, wild:true,
      res:'A cash-for-compliance quarantine program launches overnight. It is expensive, oddly popular, and legally far cleaner than the order it replaced.' }]},

{ id:'o-scientist-contradicts-congress', title:'The Hearing', who:C.speaker, min:10, max:40, tags:['health','congress'],
  src:'a government scientist testifying against the administration\'s official line',
  text:'Hal Grimes is not enjoying this call. "Your own department\'s lead scientist just told my committee, ' +
       'under oath, that the numbers your press office has been using are eight months out of date, sir. It\'s ' +
       'on the record now. It was already on the record when he said it."',
  choices:[
    { label:'Discredit him publicly. Question his credentials.', eff:{base:+6,press:-5,congress:-5,courts:-2,auth:+2},
      res:'You attack the messenger\'s credentials on television. The transcript of his sworn testimony does not change, and neither, eventually, does anyone\'s read of who was telling the truth.' },
    { label:'Update the public numbers. Thank him for the correction.', eff:{base:-4,press:+6,congress:+5,auth:+1},
      res:'You let a scientist correct the record under oath and adjust the messaging to match. It is a strange kind of dignity for a White House to display and it is, quietly, correct.' },
    { label:'Claim the testimony was taken out of context.', eff:{base:+4,press:-4,congress:-4,auth:+1},
      res:'You dispute a sworn transcript\'s context without disputing its content. The distinction persuades roughly the same people who were already persuaded.' },
    { label:'Invite him to brief you personally, off the record, weekly.', eff:{base:+1,press:-5,congress:-2,courts:-3,auth:-2}, wild:true,
      res:'You start a private weekly session with the man who embarrassed you in public, entirely outside the committee that has jurisdiction over him. It is, against every instinct in the building, useful, and it is also not remotely how oversight is supposed to work.' }]},

{ id:'o-fake-vaccine-cards', title:'The Forgery Ring', who:C.fbi, min:12, max:44, tags:['health','justice'],
  src:'a black market in forged proof-of-vaccination documents',
  text:'Director Quist has a raid ready to go. "Forged vaccination cards, sir, sold at scale, a supply chain ' +
       'running through six states. We can shut it down cleanly. I want to flag that some of the buyers are ' +
       'people who work for you, which complicates the press conference."',
  choices:[
    { label:'Raid it publicly. Big press conference, all of it.', eff:{base:+6,press:-4,street:-3,auth:+2},
      res:'A televised bust names the forgery ring and, inconveniently, several of its customers. Two of them work three doors down from your own office.' },
    { label:'Shut it down quietly. No press conference.', eff:{base:-2,press:+4,street:+3,courts:+3,auth:0},
      res:'The ring is dismantled without a camera in sight. Fewer forged cards enter circulation and nobody has to explain who was buying them.' },
    { label:'Bury the buyer list. Prosecute only the sellers.', eff:{base:+4,press:-5,courts:-5,street:-4,auth:+2},
      res:'The people who ran the ring go to court. The people who bought from it, some of them yours, do not appear anywhere in the filing.' },
    { label:'Have Quist trace which forged cards made it into your own building.', eff:{base:+2,press:-4,street:-4,congress:-2,auth:-1}, wild:true,
      res:'An internal audit finds a forged card three offices from yours. The staffer resigns before Quist finishes the sentence explaining the finding.' }]}

,

{ id:'o-satellite-budget-cut', title:'The Blind Spot', who:C.nasa, min:16, max:46, tags:['science','money'],
  src:'weather-monitoring satellite funding cut ahead of a major storm season',
  text:'Dr. Brennan is not pleased about the line item Roscoe found. "Cutting the weather satellite program ' +
       'saves you a rounding error against the federal budget, sir, and it also means we will be tracking the ' +
       'next major hurricane with instruments that are, on average, eleven years past their design life."',
  choices:[
    { label:'Cut it. Redirect the money to the Mars program.', eff:{base:+5,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'The forecasting budget shrinks and the Mars budget grows. The next storm arrives with a wider, less confident forecast cone, which is a strange trade to explain to a coastal governor.' },
    { label:'Keep the funding. Cut something less load-bearing.', eff:{base:-3,press:+4,congress:+2,cash:-0.2,auth:0},
      res:'The satellites stay funded and the cut lands somewhere with a shorter memory. It is the boring, correct call and it will not make the highlight reel.' },
    { label:'Cut it, then blame the old satellites for a bad forecast.', eff:{base:+4,press:-5,street:-4,auth:+1},
      res:'You defund the instruments and then criticize their accuracy. The next storm\'s cone is wider than it needed to be, for reasons entirely of your own making.' },
    { label:'Launch a single replacement satellite named after yourself.', eff:{base:+4,press:-5,congress:-3,cash:-0.4,auth:+1}, wild:true,
      res:'One satellite goes up, eponymous and alone, covering a fraction of the old network\'s range. It photographs beautifully at the launch and thins out considerably by hurricane season.' }]},

{ id:'o-blame-foreign-lab', title:'The Origin Story', who:C.state, min:2, max:28, tags:['health','diplomacy'],
  src:'a diplomatic incident over the disputed origin of an outbreak',
  text:'Muriel is holding a cable from Cathay\'s foreign ministry, and it is not a friendly one. "You said, on ' +
       'camera, that the outbreak started in a lab there, sir, with no evidence behind it that our own ' +
       'intelligence service will confirm. They are now demanding a retraction. We do not currently have ' +
       'grounds to give them one, or to refuse it."',
  choices:[
    { label:'Repeat the claim. Louder. Name the lab.', eff:{base:+7,press:-5,street:-3,auth:+2},
      res:'You escalate an unproven claim into a diplomatic incident on purpose. It plays extremely well domestically and ends a trade conversation that took three years to start.' },
    { label:'Walk it back. Cite the intelligence review honestly.', eff:{base:-4,press:+5,congress:+2,auth:+1},
      res:'You correct yourself using the actual, inconclusive intelligence report. It is deeply unsatisfying to an audience that wanted a villain and it is, factually, the accurate version.' },
    { label:'Deny you ever said it. It\'s on video.', eff:{base:+3,press:-5,street:-3,auth:0},
      res:'You dispute a claim that exists, clearly, on tape. The clip resurfaces at every subsequent briefing, permanently, like a piece of furniture nobody remembers buying.' },
    { label:'Propose a joint, independent investigation with Cathay.', eff:{base:-2,press:+2,street:+1,congress:-8,auth:-3}, wild:true,
      res:'You offer to actually find out the truth together, on the record, with no guaranteed outcome favorable to you. Muriel looks, briefly, like she might cry with relief.' }]},

{ id:'o-physician-reassigned', title:'The Second Opinion', who:C.doc, min:8, max:36, tags:['health','loyalty','press'],
  src:'a presidential physician disciplined after an honest diagnosis became public',
  text:'Ronny gave an honest answer to a direct question about your own recent bloodwork, and it leaked within ' +
       'the hour. "I answered the question I was asked, sir. I understand that\'s now apparently a fireable ' +
       'offense, and I would like to note that it did not used to be, in any hospital I have ever worked in."',
  choices:[
    { label:'Reassign him. Bring in someone more careful with words.', eff:{base:+6,press:-6,street:-3,auth:+2},
      res:'Ronny is quietly moved to a ceremonial post and replaced by a doctor who answers every question with the phrase "the President is in excellent health." Nobody asks a follow-up.' },
    { label:'Keep him. Own the diagnosis publicly.', eff:{base:-4,press:+6,street:+4,auth:+1},
      res:'You let the honest answer stand and confirm it yourself, plainly, once. It is a genuinely uncomfortable afternoon and it is the last time this particular story runs.' },
    { label:'Claim the leaked bloodwork was doctored.', eff:{base:+4,press:-6,courts:-3,auth:+1},
      res:'You accuse your own physician\'s honest paperwork of being fake. Ronny does not contradict you publicly. He also does not agree, which reads as its own answer.' },
    { label:'Have Ronny undergo the same test on live television, for transparency.', eff:{base:+2,press:-5,street:-3,auth:-1}, wild:true,
      res:'Your physician draws his own blood on camera to prove a point about your blood. It is the strangest segment of television produced that year, and it works.' }]},

/* ══════════════ THE BASE, AGAIN ══════════════ */

{ id:'o-essential-oils-cure', title:'The Drops', who:C.social, min:2, max:20, tags:['health','base','levity'],
  src:'a wellness-influencer remedy embraced informally by the administration',
  text:'Brayden has a bottle of something called Glow Drops, endorsed by an influencer with nine million ' +
       'followers who calls herself "Coach Baby." "She wants a photo with you holding it, sir. She says it ' +
       '\'supports the body\'s natural light.\' I don\'t know what that means. Neither, I think, does she."',
  choices:[
    { label:'Take the photo. Post it yourself.', eff:{base:+6,press:-5,courts:-2,auth:+1},
      res:'You hold a bottle of citrus-scented oil endorsed by a claim nobody can define, and your account posts it without comment. The bottle sells out. The claim remains undefined.' },
    { label:'Decline the photo. No comment, no bottle.', eff:{base:-2,press:+3,auth:0},
      res:'You simply do not participate. It is the least eventful choice available and it is also the one that generates no headline requiring a correction later.' },
    { label:'Have Brayden post it "unofficially," deniably.', eff:{base:+4,press:-5,street:-2,auth:+1},
      res:'The photo goes up from a personal account with no title attached, fooling exactly nobody about whose office is in the background.' },
    { label:'Ask Wendell to formally review "Glow Drops" for efficacy.', eff:{base:+1,press:-5,congress:-3,auth:-2}, wild:true,
      res:'The Health Secretary is instructed to scientifically evaluate a product called Glow Drops. He does. The full report is four sentences long and ends the conversation permanently.' }]},

{ id:'o-donor-queue-jump', title:'The List', who:C.treas, min:6, max:34, tags:['health','money'],
  src:'wealthy patrons receiving priority access to a scarce treatment',
  text:'Lyle has a list of names that were never supposed to exist. "Forty-one donors, sir, moved to the front ' +
       'of the treatment queue ahead of a waiting list with names on it that arrived first for medical, not ' +
       'financial, reasons. I want to say this plainly: the list has your handwriting on three of the additions."',
  choices:[
    { label:'Keep the list. Add two more names.', eff:{base:+4,press:-5,courts:-5,street:-6,auth:+2},
      res:'The queue stays donor-first and grows by two. Someone with a documented medical priority waits longer so someone with a bigger check does not.' },
    { label:'Scrap the list. Strict medical-priority order, published.', eff:{base:-4,press:+5,courts:+4,street:+4,auth:0},
      res:'The queue reverts to the boring, defensible criterion: who needs it most, medically, first. It disappoints forty-one donors and satisfies the actual point of a waiting list.' },
    { label:'Keep the list but rename it a "research cohort."', eff:{base:+3,press:-5,courts:-4,auth:+1},
      res:'The same forty-one names get a new heading that sounds clinical and is not. The waiting list underneath does not move any faster for the relabeling.' },
    { label:'Publish the full donor list yourself, unprompted.', eff:{base:-3,press:+4,street:+3,congress:-8,auth:-4}, wild:true,
      res:'You release the names before anyone leaks them, along with an apology nobody asked you to write. It is either the bravest thing you do all term or a serious tactical error, and even Lyle isn\'t sure which.' }]}

);
})();
