/* ============================================================
   PACK C — CONSOLIDATION  (term months 22–48)
   The back half, where the things you built start being used
   for the thing you built them for.
   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

{ id:'c-registry', title:'The Registry', who:C.home, min:26, max:48, tags:['power','street'],
  text:'"A federal registry. Everyone in four visa categories, biometrics, address on file, check-in quarterly." ' +
       'Duane sets it down. "Sir, we built one of these in 2002. It produced zero terrorism convictions and eighty-four thousand deportations."',
  choices:[
    { label:'Build it. All four categories.', eff:{base:+6,street:-12,courts:-10,press:-5,congress:-6,auth:+14},breaks:'search',
      res:'A list of nine hundred thousand people, sorted by nationality, held by an agency that reports to you. Every subsequent thing anyone wants to do to that population is now a database query.' },
    { label:'Build it for one category. Prove it works first.', eff:{base:+5,street:-6,courts:-5,press:-4,auth:+9},
      res:'A pilot. Pilots are permanent. It is expanded twice in four years by career staff who no longer need to ask.' },
    { label:'Kill it. We have the same data in nine other systems.', eff:{street:+8,courts:+7,press:+7,congress:+5,base:-7,auth:-3},
      res:'Entirely true and entirely unsatisfying to everyone who wanted the announcement rather than the capability.' },
    { label:'Build it, and put yourself on it as entry number one.', eff:{base:+2,courts:+1,press:-2,street:-1,auth:+3}, wild:true,
      res:'Your biometrics, address and quarterly check-in are the first record in the system. It is a genuinely disarming gesture and it does not make the database one bit less dangerous.' }]},

{ id:'c-blacklist', title:'The Contractors', who:C.treas, min:26, max:48, tags:['power','money'],
  text:'Six hundred billion in federal contracts, awarded annually, at your department heads\' discretion. ' +
       'Lyle has a memo proposing a "values alignment" question on every bid. It is one line long.',
  choices:[
    { label:'Add the question. One line. Every contract.', eff:{base:+4,street:-9,courts:-8,press:-5,congress:-7,auth:+14},
      res:'No company is ever refused for its answer. Every company changes its public positions within a year, because $600 billion is $600 billion and the question is on the form.' },
    { label:'Blacklist four companies by name. Make examples.', eff:{base:+5,courts:-11,press:-4,congress:-6,street:-5,auth:+10},
      res:'All four win in court in eighteen months. Nine hundred companies that were never blacklisted quietly reorganise their donations in the meantime.' },
    { label:'Leave procurement alone. It\'s the last clean system.', eff:{courts:+8,press:+7,congress:+6,street:+5,base:-6,auth:-4},
      res:'Lyle takes the memo back and shreds it in front of you, which is theatrical and which he has clearly been wanting to do.' },
    { label:'Add the question, but make the required answer \'no\'.', eff:{base:+1,congress:+1,courts:+2,press:-2,street:-3,auth:+3}, wild:true,
      res:'Every contractor in America must certify that it is not aligned with anything. Nine hundred compliance departments spend four months determining what this means.' }]},

{ id:'c-bar', title:'The Bar Association', who:C.ag, min:28, max:48, tags:['courts','power'],
  text:'"Judicial nominees are rated by a private bar association. Four of yours were rated not qualified." ' +
       'Bo shrugs. "It is advisory. It has been advisory since 1953 and every president has pretended it is binding."',
  choices:[
    { label:'Stop submitting nominees to them entirely.', eff:{base:+5,courts:-8,press:-5,congress:-5,auth:+11},
      res:'The rating disappears from the confirmation process in one memo. Nine of your appointees would not have been confirmed with it and all nine serve for life.' },
    { label:'Submit them and confirm the not-qualified ones anyway.', eff:{base:+6,courts:-6,press:-4,congress:-6,auth:+9},
      res:'Three of the four turn out to be perfectly competent. The fourth writes an opinion in year six that is cited in a law review article titled "How?"' },
    { label:'Only nominate people who\'d be rated well.', eff:{courts:+9,congress:+7,press:+6,base:-5,auth:+4},
      res:'Two hundred and thirty judges, all serious, all yours, all confirmable, all there for thirty years. It is the most durable thing you build.' },
    { label:'Submit yourself to them for a rating.', eff:{base:+2,congress:+2,courts:+3,press:-1,street:-3,auth:-2}, wild:true,
      res:'You are rated \'Not Qualified\' by a unanimous panel for an office you already hold. You have it printed on a mug. It is, weirdly, a very good bit.' }]},

{ id:'c-supreme-expand', title:'The Ninth Seat', who:C.cj, min:30, max:48, tags:['courts','power'],
  text:'The Chief Justice has requested a meeting. She has heard that your allies are drafting a bill to expand the Court to thirteen. ' +
       '"I am here to ask whether you support it. I would like to hear the answer from you."',
  choices:[
    { label:'"I support it. Thirteen is a fine number."', eff:{base:+5,courts:-14,congress:-9,press:-5,street:-7,auth:+15},
      res:'The bill fails by four votes. The threat does not fail. Three rulings over the next year go your way by margins that surprise everyone, including the justices who provided them.' },
    { label:'"No. Nine is nine."', eff:{courts:+12,press:+9,congress:+8,street:+6,base:-8,auth:-5},
      res:'She says thank you and means it. Two years later she writes a majority opinion against you and, in a footnote, does not mention this conversation.' },
    { label:'"I have no position." Let the threat sit there.', eff:{courts:-7,press:-4,base:+5,auth:+10},
      res:'Refusing to rule it out is the entire play. The bill never moves and never dies, and it is on the table in every conference the Court holds for four years.' },
    { label:'Propose shrinking it to seven instead. Watch them scramble.', eff:{base:+2,congress:-8,courts:-12,press:-6,auth:+9}, wild:true,
      res:'Nobody has a prepared argument against shrinkage. Two justices publicly defend a number they had never previously thought about and the confusion buys you four rulings.' }]},

{ id:'c-archive', title:'The Records', who:C.hist, min:30, max:48, tags:['power','press'],
  text:'Dr. Weir is required by statute to preserve every presidential record. ' +
       '"Sir, four categories of material have stopped arriving in my office. I am obliged to notify Congress. I am telling you first, as a courtesy."',
  choices:[
    { label:'Reclassify the four categories as personal.', eff:{base:+4,congress:-9,courts:-9,press:-9,auth:+12},
      res:'The Presidential Records Act says the President decides what is personal. It has said so since 1978 and nobody has ever tested what happens when a President decides everything is.' },
    { label:'Restore the flow. All four categories.', eff:{congress:+8,courts:+8,press:+8,base:-6,auth:-4},
      res:'Weir gets her records. In thirty years a historian writes the definitive account of your presidency using them, and it is fairer to you than anything written while you were alive.' },
    { label:'Restore three. Keep the fourth on a private server.', eff:{congress:-4,courts:-5,press:-5,base:+3,auth:+8},
      res:'The fourth category is discovered in year six by a subpoena in an unrelated case, which is how these things are always discovered.' },
    { label:'Give her everything, including the things she did not ask for.', eff:{base:-8,congress:+4,courts:+4,press:+4,auth:-3}, wild:true,
      res:'Eleven thousand additional documents nobody requested. Dr. Weir writes a four-line acknowledgment that historians will still be quoting in a century.' }]},

{ id:'c-emergency-net', title:'The Kill Switch', who:C.spy, min:32, max:48, tags:['power','street'],
  text:'"A 1934 statute gives the President authority over wire communications during a declared national emergency. ' +
       'It was written about telegraphs." Hance does not blink. "It has never been repealed and it does not say telegraphs."',
  choices:[
    { label:'Have the lawyers write the finding. Just to have it.', eff:{street:-10,courts:-9,press:-5,congress:-7,auth:+15},
      res:'The finding is four pages and is never used. Its existence leaks in year three and the phrase "internet kill switch" enters American politics permanently.' },
    { label:'Ask Congress to repeal the 1934 provision.', eff:{congress:+9,courts:+8,press:+9,street:+8,base:-7,auth:-8},
      res:'It passes 91–9. You are the president who voluntarily gave up a power, which four columnists write about and nobody else notices.' },
    { label:'Don\'t write the finding. Don\'t ask. Leave it.', eff:{courts:+4,press:+3,street:+3,auth:+2},
      res:'The statute sits there, as it has since 1934, waiting for somebody less careful. Hance closes the folder with visible relief.' },
    { label:'Have the finding written, then read it aloud on live television.', eff:{base:+1,congress:+3,courts:+3,auth:-2}, wild:true,
      res:'You explain, in detail, a power you could seize and are choosing not to. Congress repeals the 1934 provision within nine weeks out of sheer alarm.' }]},

{ id:'c-hospital', title:'The Board', who:C.health, min:26, max:48, tags:['culture','power'],
  text:'Dr. Pike notes that the accreditation body for every hospital in the country is a private nonprofit ' +
       'whose recognition can be withdrawn by his department. "Withdrawing it would close every hospital in America, so the leverage is theoretical." He pauses. "It is also total."',
  choices:[
    { label:'Use the leverage. Get the policy changed.', eff:{base:+5,street:-10,courts:-8,press:-5,congress:-6,auth:+13},
      res:'They fold in eleven days without a single письмо being sent, because the alternative is unthinkable and everyone can do the arithmetic.' },
    { label:'Legislate it properly. Take the eighteen months.', eff:{congress:+7,courts:+6,press:+5,base:-4,auth:+3},
      res:'It passes in a watered-down form and survives three subsequent administrations, which the eleven-day version would not have.' },
    { label:'Note the leverage. Never mention it again.', eff:{courts:+5,press:+4,street:+4,auth:+4},
      res:'Pike is relieved in a way he does not entirely conceal. The leverage remains, unused and now known to both of you.' },
    { label:'Use the leverage to make them fix the thing that is actually broken.', eff:{base:+1,congress:+3,courts:+2,street:+1,auth:-2}, wild:true,
      res:'You threaten the entire hospital system of the United States into adopting a sepsis protocol. It saves an estimated eleven thousand lives a year. It was still a threat.' }]},

{ id:'c-passport', title:'The Passport', who:C.state, min:30, max:48, tags:['power','courts'],
  text:'Muriel: "Passports are issued at the Secretary\'s discretion and revoked at the Secretary\'s discretion. ' +
       'There is a review process. It takes two years. During those two years the person cannot leave the country."',
  choices:[
    { label:'Revoke the passports of eleven named critics.', eff:{base:+1,street:-12,courts:-12,press:-5,congress:-9,auth:+15},
      res:'Nine win their appeals. All eleven spend two years unable to travel, work abroad or attend their own conferences. The appeals do not give the two years back.' },
    { label:'Revoke one. The one with the actual legal issue.', eff:{courts:-4,press:-4,base:+4,auth:+8},
      res:'A genuinely defensible revocation with a genuine legal basis, which establishes that it can be done at all.' },
    { label:'Never. A passport is not a privilege.', eff:{courts:+9,press:+9,street:+8,congress:+6,base:-6,auth:-5},
      res:'Muriel puts the folder in a drawer she does not use for anything else.' },
    { label:'Revoke your own. See how the review process feels.', eff:{base:+1,congress:+2,courts:+4,auth:-2}, wild:true,
      res:'You cannot leave the country for eleven weeks and the appeal takes four months. You quietly abandon the entire idea afterwards and never explain why.' }]},

{ id:'c-university-accredit', title:'The Accreditor', who:C.edu, min:28, max:48, tags:['culture','power'], req:r=>r.flags.university,
  text:'Ollis: "Universities need accreditation for their students to get federal aid. Accreditors need recognition from me. ' +
       'You have asked whether we can recognise a new accreditor with different standards. We can. It takes a form."',
  choices:[
    { label:'Create it. Recognise it. Watch them switch.', eff:{base:+6,street:-9,courts:-8,press:-5,congress:-6,auth:+14},
      res:'Fourteen institutions switch in three years because the new standards are easier and the aid is the same. You have created a parallel higher education system by filling in a form.' },
    { label:'Pressure the existing accreditors instead.', eff:{base:+5,street:-5,courts:-5,press:-4,auth:+9},
      res:'Two of the seven adjust their diversity standards within a year without being asked twice. The other five do not and nothing happens to them.' },
    { label:'Leave accreditation alone. It\'s load-bearing.', eff:{street:+7,courts:+6,press:+6,congress:+5,base:-7,auth:-3},
      res:'A genuinely conservative instinct about not breaking a system you do not fully understand. It is the last time you have it.' },
    { label:'Create the accreditor and staff it with the professors who hate you.', eff:{base:-8,congress:+2,courts:+2,press:+4,street:+4,auth:-2}, wild:true,
      res:'They accept, on principle, and write the most rigorous standards in the country. Fourteen institutions switch to it and their graduates are measurably better.' }]},

{ id:'c-parade-troops', title:'The Review', who:C.gen, min:32, max:48, tags:['military','vanity'],
  text:'You would like the troops at the next event to march past the reviewing stand in formation. ' +
       'Tarrant: "They will do it, sir. They are extremely good at it. I would ask you to consider what the photograph is for."',
  choices:[
    { label:'Do it. Full review. Anthem, flyover, salute.', eff:{base:+6,street:-8,press:-4,congress:-6,courts:-4,auth:+9},
      res:'It is magnificent and it is on the cover of four foreign newspapers under headlines that do not translate kindly.' },
    { label:'A ceremony without the march-past.', eff:{base:+4,street:+2,press:+2,auth:+2},
      res:'Warm, traditional, and it generates precisely zero comparisons to anywhere else.' },
    { label:'Do it, and have them march past a portrait of me.', eff:{base:+3,street:-12,press:-5,congress:-9,courts:-7,auth:+13},
      res:'Tarrant executes the order flawlessly and submits his retirement paperwork the following Monday, with a letter that is eleven words long.' },
    { label:'Have them march past a portrait of Tarrant instead.', eff:{base:+1,congress:+3,courts:+2,press:-1,street:+1,auth:-2}, wild:true,
      res:'The Chairman of the Joint Chiefs is visibly appalled and cannot say so. It is the only order of the year he wishes he had refused.' }]},

{ id:'c-textbook', title:'The Standards', who:C.edu, min:30, max:48, tags:['culture','power'],
  text:'Four states buy 60% of the nation\'s textbooks, so four state boards effectively write what the country learns. ' +
       'Three of the four boards now have majorities you helped elect.',
  choices:[
    { label:'Send them a model curriculum. Have them adopt it.', eff:{base:+6,street:-8,press:-5,courts:-5,congress:-4,auth:+13},
      res:'Publishers write to the largest market, as they always have. Within four years the majority of American children learn a version of the last decade that you personally edited.' },
    { label:'Fund a competing set of materials. Let schools choose.', eff:{base:+4,street:+3,press:+3,cash:-0.3,auth:+5},
      res:'About 20% adoption, entirely in places that already agreed with you. Choice, it turns out, mostly sorts people into what they already believed.' },
    { label:'Stay out of it. Curriculum is genuinely not federal.', eff:{street:+7,courts:+6,press:+6,congress:+5,base:-8,auth:-4},
      res:'The four boards do it anyway, without you, slightly less thoroughly, and you get none of the credit or the blame.' },
    { label:'Send them a curriculum that is just the primary documents. No commentary.', eff:{base:+1,congress:+2,courts:+2,press:-1,auth:-2}, wild:true,
      res:'Four state boards adopt it because nobody can object to the actual text of anything. The consequences arrive in about fifteen years and are not the ones you wanted.' }]},

{ id:'c-vote-machines', title:'The Machines', who:C.home, min:32, max:48, tags:['elections','power'], req:r=>r.flags.commission,
  text:'"Voting machines are certified by a federal commission, which you now appoint a majority of. ' +
       'Decertifying a vendor would force nine states to buy new equipment they cannot afford before the next election."',
  choices:[
    { label:'Decertify the largest vendor. Cite security.', eff:{base:+4,street:-13,courts:-12,congress:-10,press:-5,auth:+16},breaks:'supremacy',
      res:'Nine states face an election with equipment they are told is uncertified and cannot replace. Four of them adopt hand counts. The margin of error in a hand count is not small.' },
    { label:'Order a genuine security audit. Publish it.', eff:{street:+9,courts:+8,press:+8,congress:+7,base:-6,auth:-3},
      res:'The audit finds four real vulnerabilities and no fraud. Both halves are published. Nobody reads the second half and everybody quotes the first.' },
    { label:'Threaten decertification. Never do it.', eff:{base:+5,street:-6,courts:-6,press:-4,auth:+10},
      res:'Every vendor in the country now takes your calls personally. The threat costs nothing and buys more than the act would have.' },
    { label:'Decertify all of them and mandate paper. Hand-counted. Everywhere.', eff:{base:+3,congress:-10,courts:-9,press:-8,street:-12,auth:+8}, wild:true,
      res:'The country counts by hand for the first time since 1962. It takes eleven days, it costs $4 billion, and the result is the most verifiable in American history and not the one you wanted.' }]},

{ id:'c-mail-vote', title:'The Postal Service', who:C.cos, min:32, max:48, tags:['elections','power'],
  text:'"The Postmaster General is chosen by a board you appoint. He has proposed removing four hundred high-speed sorting machines ' +
       'for efficiency reasons." Deborah looks up. "The efficiency reasons are real. So is the timing."',
  choices:[
    { label:'Approve it. Efficiency is efficiency.', eff:{base:+3,street:-11,courts:-9,press:-4,congress:-9,auth:+13},
      res:'Delivery times rise 22% in eleven states, most sharply in urban counties. Every part of this is a documented operational decision and every part of it lands where you would have aimed it.' },
    { label:'Postpone it until after the election.', eff:{street:+8,press:+8,congress:+7,courts:+5,base:-5,auth:+1},
      res:'The machines go in December. Nobody writes a word about it, because in December it is what it always was: a boring logistics decision.' },
    { label:'Approve it and say mail voting is fraudulent.', eff:{base:+4,street:-12,courts:-11,press:-5,congress:-10,auth:+15},
      res:'You have degraded the system and pre-declared its output invalid. Your own voters use it least as a result, which costs you four counties nobody predicted.' },
    { label:'Approve it, and hand-deliver the first ballot yourself.', eff:{base:+2,congress:+2,press:-1,street:-1,auth:-2}, wild:true,
      res:'A photograph of the President putting a mail ballot into a mailbox. It single-handedly raises mail voting among your own supporters by nine points, which costs you two states.' }]},

{ id:'c-national-id', title:'The Card', who:C.home, min:34, max:48, tags:['power','street'],
  text:'"A national identity standard. It has been law since 2005 and enforced by nobody. ' +
       'Full enforcement means no boarding a domestic flight without it, and about eleven million adults do not have one."',
  choices:[
    { label:'Enforce it fully. Next quarter.', eff:{base:+5,street:-12,courts:-9,press:-5,congress:-7,auth:+14},
      res:'Eleven million people discover their state has a four-month appointment backlog. Enforcement is quietly deferred after eleven weeks, but the deadline is now real and moves every year.' },
    { label:'Enforce it with a two-year funded rollout.', eff:{base:+4,street:-4,courts:-3,press:-3,cash:-0.3,auth:+8},
      res:'It works. Everyone gets a card. The country has a national identity system and there was never a single day anyone could point at.' },
    { label:'Keep deferring it. It has been deferred since 2005.', eff:{street:+6,courts:+5,press:+4,base:-4},
      res:'You are the fifth president to defer it, which is itself a kind of tradition.' },
    { label:'Enforce it, and make the card free, with a mobile unit in every county.', eff:{base:+1,congress:+2,courts:+2,press:-1,auth:-2,cash:-0.4}, wild:true,
      res:'Eleven million people get identification they did not have. It is a competent, humane rollout of a system with permanent surveillance value, which is the most effective way to build one.' }]},

{ id:'c-church', title:'The Pulpit', who:C.pastor, min:28, max:48, tags:['culture','base'],
  text:'Reverend Muncy would like the rule against churches endorsing candidates repealed. ' +
       'It is a tax provision. It has been on the books since 1954 and is enforced approximately never.',
  choices:[
    { label:'Order the revenue service to stop enforcing it entirely.', eff:{base:+8,street:-7,courts:-7,press:-5,congress:-5,auth:+11},breaks:'religion',
      res:'Three hundred thousand tax-exempt organisations may now spend freely on politics with no disclosure. It is the largest single change to campaign finance in fifty years and it is done by memo.' },
    { label:'Support a repeal bill. Let Congress own it.', eff:{base:+6,congress:-4,press:-4,auth:+4},
      res:'It dies in committee. Muncy blames four senators from the pulpit, by name, which is itself a violation of the rule nobody enforces.' },
    { label:'Leave it. Churches don\'t need to become PACs.', eff:{press:+6,street:+5,courts:+5,base:-8},
      res:'Muncy prays for you on air, at length, in a tone that his four million listeners correctly identify as a rebuke.' },
    { label:'Repeal it, and immediately register your own church.', eff:{base:+3,courts:-6,press:-6,street:-4,auth:+5,cash:+0.5}, wild:true,
      res:'The Church of the Grateful Republic is tax-exempt within eleven days and raises $200 million in a year. Four other politicians copy it before the end of the decade.' }]},

{ id:'c-broadcast-license', title:'The Renewal', who:C.press, min:30, max:48, tags:['press','power'], req:r=>r.flags.settle,
  text:'Eleven local station licences in four swing states are up for renewal. ' +
       'Renewal is routine. It has been routine for sixty years. It is routine because nobody has ever made it not routine.',
  choices:[
    { label:'Designate all eleven for hearing. Make them fight.', eff:{base:+6,press:-14,courts:-10,congress:-8,street:-7,auth:+15},breaks:'speech',
      res:'Every one is eventually renewed. Every one spends $2 million and eighteen months on it, and every station group in America now has a compliance officer whose job is your press office.' },
    { label:'Renew them all. Say something pointed at the ceremony.', eff:{base:+4,press:-4,auth:+5},
      res:'A joke about coverage, at a licensing event, from the President. Everyone laughs. Nobody forgets.' },
    { label:'Renew them. Say nothing. It\'s a licence.', eff:{press:+9,courts:+7,congress:+6,base:-5,auth:-3},
      res:'The most boring possible handling of a routine administrative matter, which is what a licence renewal is supposed to be.' },
    { label:'Designate them for hearing, then attend every hearing personally.', eff:{base:+2,congress:-4,courts:-6,press:-9,auth:+5}, wild:true,
      res:'The President of the United States sits through eleven licence renewal hearings in a windowless room in Maryland. The stations renew. Nobody understands what happened and everybody is frightened.' }]},

{ id:'c-general-purge', title:'The Promotion Board', who:C.gen, min:32, max:48, tags:['military','power'],
  text:'Tarrant has the flag officer promotion list. You have asked for the political affiliations of the nominees. ' +
       '"Sir, we do not collect that. It would be unlawful to collect that. I want to be certain you heard the second sentence."',
  choices:[
    { label:'"Then find out another way."', eff:{base:+3,street:-11,courts:-9,congress:-9,press:-5,auth:+15},
      res:'Somebody does find out another way. Four names are removed from a list of ninety and nobody can say why, which is a thing that has now happened and can happen again.' },
    { label:'Withdraw it. Approve the list as submitted.', eff:{street:+9,congress:+8,press:+7,courts:+6,base:-7,auth:-5},
      res:'Ninety officers promoted on merit. Eleven of them are still serving twenty years later and one of them refuses an unlawful order in 2041.' },
    { label:'Interview the top four personally. Just a chat.', eff:{street:-5,congress:-4,press:-4,base:+4,auth:+9},
      res:'A friendly conversation with no notes taken. All four are promoted. All four understood exactly what the conversation was, because all four are not stupid.' },
    { label:'Ask the promotion board to rank them by who would refuse you.', eff:{base:-6,congress:+3,courts:+3,press:+2,street:+4,auth:-3}, wild:true,
      res:'The list comes back with ninety names on it. Tarrant hands it over and says these are the ones worth promoting, and you look at it for a long time, and then you promote them.' }]},

{ id:'c-state-dept-purge', title:'The Dissent Channel', who:C.state, min:30, max:48, tags:['agencies','power'],
  text:'Muriel: "There is a formal channel for career diplomats to register dissent. It is protected by regulation. ' +
       'Four hundred officers have signed a single cable. That has never happened."',
  choices:[
    { label:'Get me the four hundred names.', eff:{base:+3,street:-9,courts:-8,press:-5,congress:-7,auth:+13},
      res:'Nobody is fired. Within two years, one hundred and forty of them have resigned and the channel receives four cables, all of them procedural.' },
    { label:'Read the cable. Meet the four who wrote it.', eff:{street:+8,press:+7,congress:+6,courts:+5,base:-6,auth:+1},
      res:'They are right about two of the six points. You change one policy. The channel keeps working, which means you keep finding out things nobody wants to tell you.' },
    { label:'"They can dissent or they can resign."', eff:{base:+5,street:-8,press:-4,congress:-6,auth:+10},
      res:'Nine hundred years of combined diplomatic experience leaves the building over eighteen months. The replacements are loyal and cannot pronounce the capital.' },
    { label:'Read the cable aloud at the next Cabinet meeting. All of it.', eff:{base:-6,congress:+3,courts:+2,press:+3,street:+4,auth:-2}, wild:true,
      res:'Nine minutes of four hundred diplomats\' dissent, read by the President, to the Cabinet, on the record. Two secretaries change their positions that afternoon.' }]},

{ id:'c-fed-fire', title:'The Governor of the Fed', who:C.fed, min:34, max:48, tags:['economy','power'],
  text:'You have found a pretext to remove a Fed governor "for cause." ' +
       'Lindqvist has come in person. "Sir. If that word means whatever you say it means, then there is no independent central bank. There is only a delay."',
  choices:[
    { label:'Do it. Cause is what I say it is.', eff:{base:+2,street:-13,congress:-11,courts:-11,press:-5,auth:+16},
      res:'The dollar falls 4% in a session. It recovers. What does not recover is the assumption, held since 1951, that this could not happen.' },
    { label:'Withdraw it. Wait for the term to expire.', eff:{street:+9,congress:+8,courts:+8,press:+7,base:-6,auth:-4},
      res:'Her term expires in fourteen months. You appoint your candidate. You get the identical outcome for the price of waiting.' },
    { label:'Leak that you\'re considering it. Never do it.', eff:{street:-6,press:-4,congress:-4,base:+4,auth:+9},
      res:'Every governor now factors your reaction into their vote without ever admitting they do. The threat is doing what the act could not: it is deniable.' },
    { label:'Appoint her to something better and let her resign upward.', eff:{base:+1,congress:+3,courts:+3,press:-2,auth:-2}, wild:true,
      res:'She takes an ambassadorship, the seat opens legitimately, and you get your candidate without ever testing whether \'for cause\' means anything. It is the most competent thing you do all year.' }]},

{ id:'c-insurrection-act', title:'The 1807 Act', who:C.ag, min:34, max:48, tags:['military','power'], req:r=>r.flags.guard,
  text:'"The Insurrection Act. Two hundred and eighteen years old, four paragraphs, and it lets you use the regular Army domestically ' +
       'whenever you determine it is necessary." Bo closes the book. "The determination is yours. There is no review."',
  choices:[
    { label:'Invoke it. Regular Army. Four cities.', eff:{base:+3,street:-15,courts:-12,congress:-11,press:-5,auth:+18},breaks:'posse',
      res:'It is lawful. That is the whole problem and it has been the whole problem since 1807. Regular infantry on an American street with no court able to say otherwise.' },
    { label:'Threaten it in a speech. Don\'t sign.', eff:{base:+6,street:-8,courts:-5,press:-4,congress:-5,auth:+10},
      res:'Four governors deploy their own Guards pre-emptively to avoid giving you the pretext. You have achieved the deployment without signing anything.' },
    { label:'Rule it out publicly. In terms.', eff:{street:+11,courts:+9,congress:+8,press:+8,base:-9,auth:-7},
      res:'The single most de-escalatory sentence of your presidency. Three cities calm down inside a week and nobody ever credits the sentence.' },
    { label:'Invoke it, and deploy them to rebuild a bridge.', eff:{base:+2,congress:+2,courts:-6,press:+2,street:+3,auth:-2}, wild:true,
      res:'Regular Army on an American street, laying concrete. The precedent is established under the most benign possible circumstances, which is precisely how precedents should be established if you intend to use them later.' }]},

{ id:'c-oath-military', title:'The Oath', who:C.gen, min:34, max:48, tags:['military','power'],
  text:'A junior officer has asked, in a public forum, what she should do if given an unlawful order. ' +
       'Tarrant answered her honestly and it is on video. He is here to tell you before you see it elsewhere.',
  choices:[
    { label:'Discipline him for undermining the chain of command.', eff:{base:+4,street:-12,congress:-10,press:-5,courts:-8,auth:+13},
      res:'The oath is to the Constitution. It has been since 1789. Punishing a general for saying so is covered in every service academy ethics class from that year onward, using your name.' },
    { label:'Back him publicly. "That\'s the right answer."', eff:{street:+10,congress:+9,press:+9,courts:+7,base:-8,auth:-6},
      res:'It costs you nothing you were going to use and buys you an officer corps that does not spend the next two years quietly planning for your worst day.' },
    { label:'Say nothing. Let it pass.', eff:{street:+3,press:+2,base:-2,auth:+2},
      res:'The video has eleven million views by Friday. Your silence is read, correctly, as neither approval nor objection, which is the most any of them expected.' },
    { label:'Have him repeat the answer at every service academy. Make it a tour.', eff:{base:-9,congress:+4,courts:+3,press:+4,street:+4,auth:-6}, wild:true,
      res:'Tarrant delivers it forty times to forty thousand cadets. It is the single most consequential thing that happens in your presidency and it happens entirely without you.' }]},

{ id:'c-successor-purge', title:'The Shortlist', who:C.vp, min:34, max:48, tags:['succession','base'],
  text:'Chet has brought you a list of four people who could succeed you. ' +
       'He is on it. He has put himself third, which is the single most calculated thing he has ever done in front of you.',
  choices:[
    { label:'Endorse the fourth name. The weakest one.', eff:{base:-6,congress:-5,press:-3,auth:+9},
      res:'You have made yourself the only viable option by removing every other one. Chet understands this within about four seconds and says "great choice, sir."' },
    { label:'Endorse Chet. He\'s earned it and he\'s dangerous unendorsed.', eff:{base:+9,congress:+7,press:+4,auth:-9},
      res:'He is grateful for eleven weeks. By the twelfth he has his own donors, his own polling, and a schedule that no longer routes through your office.' },
    { label:'Tear up the list in front of him.', eff:{base:+4,congress:-6,press:-5,street:-4,auth:+11},
      res:'He picks up the pieces, puts them in his pocket, and thanks you for the meeting. That he took the pieces is the part you think about later.' },
    { label:'Add a fifth name: yourself. See how he reacts.', eff:{base:+2,congress:-6,press:-6,auth:+7}, wild:true,
      res:'Chet does not blink, does not laugh and does not object. He writes it down carefully at the bottom of the list. It is the most frightening thing he has ever done.' }]},

{ id:'c-pardon-self', title:'The Question Nobody Asks', who:C.lawyer, min:36, max:48, tags:['justice','power'],
  text:'Sy has a four-page memo. "Whether a president can pardon himself. It has never been done, never been tested, ' +
       'and the Office of Legal Counsel said no in 1974 in a memo that is three sentences long and reasons from a maxim about being a judge in your own case."',
  choices:[
    { label:'Do it. Sign a pardon for yourself. Publish it.', eff:{base:+1,courts:-14,congress:-12,press:-5,street:-10,auth:+18},
      res:'It will be litigated for a decade and may well be void. In the meantime, no prosecutor in the country will bring a case they might lose on that question, which is the entire benefit.' },
    { label:'Have it drafted. Keep it in a drawer. Unsigned.', eff:{courts:-5,press:-4,base:+3,auth:+11},
      res:'An unsigned pardon in a drawer is worth almost as much as a signed one and costs nothing at all until the day it does.' },
    { label:'"No. That one\'s actually a line."', eff:{courts:+11,congress:+9,press:+10,street:+8,base:-6,auth:-6},
      res:'Sy shreds the memo. It is the only document of the administration that is destroyed for a good reason.' },
    { label:'Pardon everyone in the country for everything. Universal amnesty.', eff:{base:+3,congress:-12,courts:-14,press:-9,street:+2,auth:+10}, wild:true,
      res:'Four hundred thousand federal convictions vacated at a stroke, including yours, buried in the middle. It is the largest single act of clemency in human history and it was a hiding place.' }]},

{ id:'c-cabinet-25', title:'The Twenty-Fifth', who:C.cos, min:34, max:48, tags:['succession','power'],
  text:'Deborah is speaking very carefully. "There has been a conversation among four cabinet secretaries about Section Four. ' +
       'It did not get past a conversation. I am telling you because you would rather hear it from me."',
  choices:[
    { label:'Fire all four. Today. Before lunch.', eff:{base:+5,congress:-11,courts:-8,press:-4,street:-8,auth:+14},
      res:'You have removed the four people who thought about it and taught the remaining eighteen that thinking about it is detectable. Nobody thinks about it again.' },
    { label:'Meet all four. Alone. Ask what they saw.', eff:{congress:+9,press:+7,street:+6,courts:+5,base:-6,auth:-3},
      res:'Two of them tell you something genuinely useful about how you have been behaving. You do not enjoy the meeting and you are better for eleven months afterwards.' },
    { label:'Replace the whole cabinet with acting officials.', eff:{base:+2,congress:-13,courts:-10,press:-5,street:-7,auth:+17},breaks:'consent',
      res:'Section Four requires a majority of "the principal officers of the executive departments." It is not clear that acting officials count. Nobody wants to find out, which means nobody can act.', flag:'actingCabinet' },
    { label:'Convene them and ask, formally, whether they think you are fit.', eff:{base:-9,congress:+4,courts:+4,press:+4,street:+3,auth:-4}, wild:true,
      res:'Nineteen say yes. Three abstain. You thank the three by name, publicly, and it is the single most stabilising act of your presidency.' }]},

{ id:'c-treaty', title:'The Treaty', who:C.state, min:30, max:48, tags:['foreign','congress'],
  text:'"You want out of a treaty ratified by the Senate 92–5. The Constitution says how to get in. ' +
       'It is entirely silent on how to get out." Muriel spreads her hands. "Four presidents have simply left. Nobody stopped them."',
  choices:[
    { label:'Withdraw by letter. Tomorrow.', eff:{base:+5,congress:-10,courts:-6,press:-5,street:-6,auth:+13},
      res:'One signature undoes a 92–5 vote. Eleven senators write a letter of protest, which is precisely as effective as it sounds.' },
    { label:'Send it to the Senate for a withdrawal vote.', eff:{congress:+10,courts:+7,press:+7,base:-6,auth:-2},
      res:'They vote 68–32 to stay. You have voluntarily created a constraint that did not exist and then lost to it.' },
    { label:'Stay in it and simply stop complying.', eff:{congress:-5,press:-4,street:-4,base:+5,auth:+11},breaks:'presentment',
      res:'The treaty is intact, the obligations are unmet, and there is no forum with jurisdiction. It is the most efficient version and the least honest one.' },
    { label:'Withdraw, and immediately apply to rejoin on worse terms.', eff:{base:+2,congress:-8,press:+2,street:+1,auth:+3}, wild:true,
      res:'You leave a treaty and re-enter it in eleven weeks having conceded two additional points. Four allied governments conclude, permanently, that the process is the product.' }]},

{ id:'c-inspector-final', title:'The Last Report', who:C.ethics, min:36, max:48, tags:['press','money'],
  text:'A final ethics report, 900 pages, covering four years. Miriam Applewhite came back specifically to finish it. ' +
       '"It publishes on the fourteenth. I am not asking your permission. I am extending you the courtesy I extend everyone."',
  choices:[
    { label:'Have the department contest every finding.', eff:{base:+4,press:-9,congress:-7,courts:-7,auth:+9},
      res:'The rebuttal is 400 pages and is published alongside. Nobody reads either. Both are cited for twenty years by people who read only the summaries.' },
    { label:'Let it publish. Say nothing at all.', eff:{press:+8,congress:+6,courts:+5,street:+4,base:-4,auth:-1},
      res:'It lands on a busy news day and is forgotten in seventy-two hours, which is what happens to a 900-page document that nobody is fighting about.' },
    { label:'Reclassify four chapters as national security material.', eff:{base:+3,press:-11,congress:-9,courts:-9,street:-6,auth:+12},
      res:'Four chapters of an ethics report are now classified. The classification itself becomes the story and the four chapters are described, accurately, as "the ones about the money."' },
    { label:'Write the foreword to it yourself.', eff:{base:+1,congress:+3,courts:+3,street:-1,auth:-2}, wild:true,
      res:'Two pages, in your own voice, at the front of a 900-page indictment of your own administration. It is disarming, entirely unrepentant, and it is the only part anybody reads.' }]},

{ id:'c-final-year', title:'The Last Twelve Months', who:C.cos, min:36, max:48, tags:['power'],
  text:'"Twelve months. Everything that is not finished will be undone by whoever comes next, unless it is a judge, ' +
       'a treaty withdrawal, or a fact on the ground." Deborah has three columns. "So: judges, withdrawals, or facts?"',
  choices:[
    { label:'Facts on the ground. Build things that can\'t be unbuilt.', eff:{base:+6,street:-6,courts:-5,press:-4,congress:-4,auth:+12},
      res:'Nine hundred miles of infrastructure, four relocated agencies and a personnel system rebuilt from the studs. None of it can be reversed by a signature and all of it outlives you.' },
    { label:'Judges. As many as the Senate will confirm.', eff:{courts:+13,congress:-5,press:+2,base:+3,auth:+9},
      res:'Sixty-one in twelve months, average age forty-eight. It is the highest-return decision of your entire presidency and it is entirely invisible for a decade.' },
    { label:'Withdrawals. Break the commitments while you can.', eff:{base:+5,congress:-8,street:-6,press:-5,courts:-4,auth:+10},
      res:'Eleven treaties and agreements exited in a year. Four are rejoined within eighteen months of your departure. Seven are not, because the other parties have moved on.' },
    { label:'Spend it entirely on things that will be named after somebody else.', eff:{base:-6,congress:+3,courts:+2,press:+3,street:+4,auth:-2}, wild:true,
      res:'Nine hospitals, four bridges and a research institute, none bearing your name. It is the most durable thing you build and in thirty years most people do not know you built it.' }]},

{ id:'c-monument-self', title:'The Likeness', who:C.hist, min:36, max:48, tags:['vanity','power'],
  text:'A bill has been introduced to add your likeness to a national monument. ' +
       'Dr. Weir has been asked for a technical assessment. "Sir, the mountain is structurally unsuitable. That is my entire assessment."',
  choices:[
    { label:'Commission a feasibility study anyway.', eff:{base:+6,press:-5,street:-5,congress:-4,cash:-0.2,auth:+5},
      res:'It costs $4 million and concludes what Dr. Weir concluded in one sentence for free. You quote the parts of it that are ambiguous.' },
    { label:'A statue somewhere flat instead.', eff:{base:+6,press:-4,street:-3,cash:-0.2,auth:+4},
      res:'Eleven feet of bronze outside a federal building in a state you won by thirty. It is toppled in 2049 and re-erected in 2061.' },
    { label:'"Put someone else up there. Somebody who earned it."', eff:{press:+8,street:+7,congress:+6,base:-5,auth:-1},
      res:'You nominate a woman who cracked a code in 1943 and died in a rented room. It passes unanimously. It is the best thing with your signature on it.' },
    { label:'Commission it, but carve it facing away from the country.', eff:{base:+2,press:-2,street:-2,auth:+3,cash:-0.2}, wild:true,
      res:'Four hundred feet of granite looking out at the Pacific with its back to the United States. Sculptors and critics argue about whether this was intentional for eleven decades.' }]},

{ id:'c-data-center', title:'The Facility', who:C.spy, min:34, max:48, tags:['security','power'],
  text:'"A consolidated federal data facility. Tax, benefits, immigration, health, travel, licensing — one index, one query." ' +
       'Hance is not selling it. "Sir, the reason this has never been built is not technical."',
  choices:[
    { label:'Build it. One index. Full access.', eff:{street:-14,courts:-12,press:-5,congress:-9,auth:+18},breaks:'search',
      res:'Every fact the government holds about every person, in one place, queryable by anyone you authorise. Four decades of deliberate fragmentation undone by a procurement decision.' },
    { label:'Build it with statutory access controls and an audit log.', eff:{street:-5,courts:-3,congress:+4,press:-3,auth:+11},
      res:'The audit log is real and it catches four unauthorised queries in the first year, three of them by people in this building.' },
    { label:'No. The fragmentation is the safeguard.', eff:{street:+10,courts:+9,press:+9,congress:+7,base:-5,auth:-6},
      res:'Hance nods once. He had written both briefing papers and he had hoped you would ask for the second one.' },
    { label:'Build it, then give the access keys to a bipartisan panel of nine.', eff:{base:+1,congress:+4,courts:+3,press:-1,auth:-2}, wild:true,
      res:'You build the most powerful surveillance instrument ever assembled and then hand the keys to people who dislike you. It is unusable by anyone and it still exists.' }]},

{ id:'c-emergency-extend', title:'The Renewal', who:C.lawyer, min:30, max:48, tags:['power'],
  text:'Every national emergency must be renewed annually by the President or it lapses. ' +
       'Sy has eleven renewal notices. Four of them are for emergencies declared before you were born.',
  choices:[
    { label:'Renew all eleven. Add a twelfth.', eff:{congress:-8,courts:-7,press:-5,street:-5,base:+4,auth:+13},
      res:'Twelve concurrent national emergencies. The oldest concerns a country that no longer exists under that name. All twelve unlock authorities and none of them describe anything happening now.' },
    { label:'Renew the four that are real. Let seven lapse.', eff:{congress:+8,courts:+7,press:+6,street:+5,base:-4,auth:-2},
      res:'Seven emergencies end. It makes news for one day under the headline "There Were Seven?"' },
    { label:'Renew all eleven and stop publishing the list.', eff:{congress:-9,courts:-8,press:-4,base:+1,auth:+15},
      res:'The publication requirement is in the statute. The statute does not specify where. It is now published in a quarterly bulletin with a circulation of four hundred.' },
    { label:'Renew all eleven under a single order titled \'Everything\'.', eff:{base:+1,congress:-9,courts:-9,press:-8,auth:+11},breaks:'vesting', wild:true,
      res:'One page, one signature, forty-one statutory authorities, and a title so unhelpful that four separate FOIA requests fail to identify what it covers.' }]},

{ id:'c-gerrymander', title:'The Map', who:C.speaker, min:30, max:48, tags:['elections','congress'],
  text:'Hal has a mid-decade redistricting plan for four states you control. ' +
       'It is legal in three of them and untested in the fourth. It is worth eleven seats.',
  choices:[
    { label:'All four states. Draw them as tight as they\'ll go.', eff:{base:+4,congress:+11,street:-10,courts:-9,press:-5,auth:+11},
      res:'Eleven seats, locked for six years. Two of the maps are struck down and redrawn to be marginally less egregious, which still leaves you nine.' },
    { label:'The three legal ones. Leave the fourth.', eff:{congress:+8,courts:-4,press:-4,street:-5,base:+4,auth:+8},
      res:'Eight seats and no landmark case with your name on it. Restraint, applied to gerrymandering, purely for reasons of litigation risk.' },
    { label:'Back an independent commission instead.', eff:{street:+9,press:+9,courts:+8,congress:-9,base:-7,auth:-4},
      res:'You lose four seats and gain a genuinely competitive politics in three states. Nobody in your party speaks to you for a fortnight.' },
    { label:'Draw the maps to be as competitive as mathematically possible.', eff:{base:-12,congress:-14,courts:+4,press:+4,street:+4,auth:-5}, wild:true,
      res:'Every seat in four states becomes genuinely marginal. Your party loses eleven of them and gains, over about twenty years, the ability to win arguments again.' }]},

{ id:'c-primary-cancel', title:'The Primary', who:C.poll, min:34, max:48, tags:['elections','base'],
  text:'Four state parties have cancelled their presidential primaries, citing cost. ' +
       'Nadia notes that all four are chaired by people you appointed and that the cost argument is, in three cases, about $200,000.',
  choices:[
    { label:'Encourage the rest to do the same.', eff:{base:+4,street:-9,press:-5,congress:-7,courts:-6,auth:+13},
      res:'Fourteen states hold no presidential primary. It is entirely a matter for the parties, which are private organisations, which is exactly why it works.' },
    { label:'Insist all fifty hold one. You\'ll win them anyway.', eff:{base:+8,press:+8,street:+7,congress:+5,courts:+4,auth:+2},
      res:'You win forty-eight of fifty with over 80%. It is worth more than the cancellations were, and it cost you nothing but a few weekends.' },
    { label:'Say nothing. It\'s a party matter.', eff:{base:+3,press:-4,street:-4,auth:+6},
      res:'Four becomes nine by March without a word from you, which is how these things propagate when nobody objects.' },
    { label:'Encourage every state to hold one and enter as a write-in.', eff:{base:+3,congress:+2,courts:+1,press:-1,auth:-2}, wild:true,
      res:'You win forty-four states as a write-in candidate against yourself, which is a sentence that requires four readings and is nonetheless accurate.' }]},

{ id:'c-observer', title:'The Observers', who:C.state, min:36, max:48, tags:['elections','foreign'],
  text:'International election observers have requested access, as they have to every US election since 2002. ' +
       'Muriel: "We invite them. It is voluntary. Declining would be the first refusal by a member state in twenty years."',
  choices:[
    { label:'Decline. It\'s an insult to suggest we need them.', eff:{base:+5,press:-5,street:-8,congress:-7,courts:-5,auth:+11},
      res:'It is reported in every capital in Europe within the hour and cited by four autocracies within the week as precedent for their own refusals.' },
    { label:'Invite them. Full access. Every state.', eff:{press:+9,street:+8,congress:+7,courts:+6,base:-7,auth:-3},
      res:'Their report finds the election free and fair with four procedural recommendations. You quote the first six words for the rest of your life.' },
    { label:'Invite them to nine states. The ones that are fine.', eff:{base:+4,press:-4,street:-3,auth:+7},
      res:'A partial invitation is a technically true "we invited observers" and a functionally complete "they did not see anything."' },
    { label:'Invite them, and ask them to observe the White House as well.', eff:{base:-6,congress:+3,courts:+3,press:+3,street:+4,auth:-2}, wild:true,
      res:'International monitors are given access to the executive branch. Their report contains four recommendations, three of which you implement, which nobody expected including them.' }]},

{ id:'c-transition-out', title:'The Transition', who:C.cos, min:40, max:48, tags:['power','press'],
  text:'"By statute, the transition begins when the administrator of a small federal agency signs a letter of ascertainment. ' +
       'One person. One signature. There is no deadline in the statute and no penalty for not signing."',
  choices:[
    { label:'Instruct her not to sign. Indefinitely.', eff:{base:+6,congress:-11,courts:-10,press:-11,street:-9,auth:+16},
      res:'A career civil servant nobody has heard of becomes, for eleven days, the most important person in the country. She receives threats at her home and signs on day twelve.' },
    { label:'Have her sign the morning after.', eff:{congress:+9,courts:+8,press:+9,street:+8,base:-8,auth:-5},
      res:'Briefing books are handed over, offices are walked through, and the pandemic response team meets its successors. It is invisible and it is the whole point of the statute.' },
    { label:'Sign it, and give them nothing but the letter.', eff:{congress:+3,courts:+3,press:+2,base:+3,auth:+7},
      res:'Full technical compliance and zero cooperation. The incoming team spends four months finding out what they were not told.' },
    { label:'Sign it early and personally walk the successor through the building.', eff:{base:-10,congress:+4,courts:+4,press:+4,street:+4,auth:-5}, wild:true,
      res:'Six hours, room by room, including the ones with no windows. You tell them things that are not in any briefing book. It is the single most patriotic afternoon of your life and nobody films it.' }]},

{ id:'c-list-final', title:'The Enemies List', who:C.ag, min:38, max:48, tags:['justice','power'], req:r=>r.flags.weapon,
  text:'"The list has grown to four hundred and eleven names." Bo puts it down without opening it. ' +
       '"Sir, at the beginning it was people who had investigated you. It is now people who have criticised you. I do not know when that changed."',
  choices:[
    { label:'Work the whole list. All four hundred and eleven.', eff:{base:+2,courts:-14,press:-5,congress:-11,street:-11,auth:+18},
      res:'Nine indictments, two convictions, four hundred lives disrupted. Both convictions are overturned on appeal in 2033 and by then all four hundred and eleven have learned the lesson.' },
    { label:'Cut it to the original nine. The actual investigators.', eff:{courts:-6,press:-4,congress:-5,base:+4,auth:+9},
      res:'Narrow, focused, and arguably about something. It is still a list of people the government is pursuing because of what they did to you.' },
    { label:'Burn it. In front of him.', eff:{courts:+12,press:+11,congress:+9,street:+9,base:-8,auth:-8},
      res:'Bo watches the whole thing, says "thank you, sir," and goes back to his office and closes the door for a while.' },
    { label:'Send all four hundred and eleven a Christmas card.', eff:{base:+2,congress:+2,courts:+2,press:-1,street:-1,auth:-2}, wild:true,
      res:'A signed card to every person on the enemies list. Nobody can determine whether it is a threat or a joke, including the recipients, and that ambiguity does more work than any indictment.' }]},

{ id:'c-loyalty-cabinet', title:'The Signing Ceremony', who:C.vp, min:38, max:48, tags:['power','base'],
  text:'Chet has proposed that every cabinet secretary sign a statement of personal commitment to you, in the Rose Garden, ' +
       'on camera. "It\'s a unity thing," he says, and he does not look at you when he says it.',
  choices:[
    { label:'Do it. All twenty-two. One at a time.', eff:{base:+5,congress:-10,courts:-9,press:-5,street:-9,auth:+14},
      res:'Twenty-two officials sign a personal pledge to a person, on federal property, under the seal. Chet signs last and holds his up longest.' },
    { label:'Have them re-take the oath to the Constitution instead.', eff:{press:+9,street:+8,congress:+7,courts:+7,base:-3,auth:+2},
      res:'Same ceremony, same cameras, entirely different meaning, and Chet cannot object to it without saying out loud what he actually wanted.' },
    { label:'"That\'s a bad idea, Chet."', eff:{congress:+5,press:+5,courts:+4,base:-4,auth:+3},
      res:'He agrees immediately and enthusiastically, which tells you he was testing whether you would say yes rather than hoping you would.' },
    { label:'Have them sign a pledge to the Constitution and then frame the Constitution.', eff:{base:+1,congress:+3,courts:+4,auth:-2}, wild:true,
      res:'Chet cannot object without explaining what he actually wanted, and he is not going to do that in a garden, on camera, in front of twenty-two people.' }]},

{ id:'c-anniversary', title:'The Anniversary', who:C.writer, min:40, max:48, tags:['press','base'],
  text:'Gideon has drafted remarks for the anniversary of the day the building was stormed on your behalf. ' +
       'He has written two versions. He would like you to read both before choosing, which is not how he normally puts it.',
  choices:[
    { label:'The one where they were patriots.', eff:{base:+9,street:-11,press:-11,congress:-9,courts:-7,auth:+10},
      res:'Four officers who were there that day are watching. Two of them give interviews the following morning. The interviews are quiet and specific and they are the ones that get repeated.' },
    { label:'The one where it was a dark day and we move on.', eff:{press:+9,street:+8,congress:+7,courts:+6,base:-11,auth:-4},
      res:'It is nine sentences long and entirely conventional and it is treated as a major political event, which tells you everything about where the bar now is.' },
    { label:'Say nothing. Schedule something else that day.', eff:{base:+3,press:-5,street:-4,congress:-3,auth:+3},
      res:'You hold a manufacturing event in another state. Every network splits the screen with the anniversary coverage anyway, all day.' },
    { label:'Spend the day visiting the four officers who were there.', eff:{base:-12,congress:+4,courts:+3,press:+4,street:+4,auth:-4}, wild:true,
      res:'No press, no statement, four living rooms. One of them will not see you. Three of them do, and one of those three says something afterwards that is quoted for thirty years.' }]},

{ id:'c-final-pardon', title:'The Last Pardons', who:C.lawyer, min:44, max:48, tags:['justice','power'],
  text:'Sy has the final clemency list. Four hundred names. He has separated them into two folders: ' +
       'people with a case, and people with a connection. The second folder is thicker.',
  choices:[
    { label:'Sign both folders. All four hundred.', eff:{base:+1,courts:-12,press:-4,congress:-10,street:-8,cash:+0.6,auth:+13},
      res:'Eleven of them paid consultants who were paid to reach you. The pardon power has no reviewability, which means the market in access to it has no downside.' },
    { label:'Sign the first folder only. The real cases.', eff:{courts:+9,press:+9,street:+8,congress:+6,base:-5,auth:-1},
      res:'Two hundred and six people, mostly serving decades for things that are no longer decade-length crimes. It is genuinely the most good you ever do in a single afternoon.' },
    { label:'Sign the second folder only. Loyalty is a case.', eff:{base:+4,courts:-13,press:-5,congress:-11,street:-9,cash:+0.7,auth:+14},
      res:'The list is published at 12:01am. By 6am it has been read by everyone and there is nothing anybody can do about any of it, ever, which is the design of the clause.' },
    { label:'Sign the first folder and publish the second one unsigned.', eff:{base:-6,congress:+4,courts:+4,press:+3,street:+3,auth:-2}, wild:true,
      res:'Two hundred pardons granted and two hundred names published as people who sought one and did not get it. It is the cruellest and most useful document of the term.' }]},

{ id:'c-goodbye', title:'The Farewell Address', who:C.writer, min:44, max:48, tags:['press','power'],
  text:'Gideon has one last draft. Every president gets one of these and about four of them are remembered. ' +
       '"You can warn the country about something, sir. It is traditional. It is also the only part anybody quotes in a hundred years."',
  choices:[
    { label:'Warn them about the people who tried to stop me.', eff:{base:+8,press:-10,street:-9,congress:-8,courts:-7,auth:+9},
      res:'A grievance delivered from the Oval Office at the end of a presidency. It is quoted for a century, in full, in a section of the textbook with a heading you would not have chosen.' },
    { label:'Warn them about the powers I found sitting here.', eff:{press:+11,street:+10,congress:+9,courts:+9,base:-9,auth:-6},
      res:'You list them. All of them. The emergency statutes, the vacancies, the immunity, the letter of ascertainment. It is the most useful thing ever said from that desk and the next four presidents ignore every word.' },
    { label:'Thank everyone. Say nothing. Leave.', eff:{press:+5,street:+4,congress:+4,base:+2},
      res:'Eleven minutes, gracious, forgettable. Gideon files the other two drafts and publishes them in 2044.' },
    { label:'Warn them about yourself. By name. Specifically.', eff:{base:-14,congress:+4,courts:+4,press:+5,street:+4,auth:-8}, wild:true,
      res:'Eleven minutes describing exactly how you did it, what worked, and what should be closed. It is the most valuable document in modern American civics and the next four presidents ignore all of it.' }]}

);
})();
