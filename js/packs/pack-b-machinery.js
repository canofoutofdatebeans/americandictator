/* ============================================================
   PACK B — THE MACHINERY  (term months 6–34)
   Agencies, courts, money, enforcement. The part of the term
   where the country actually changes shape.
   60 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ---------- justice & enforcement ---------- */

{ id:'b-prosecutor', title:'The US Attorney', who:C.ag, min:8, max:34, tags:['justice','courts'],
  text:'The prosecutor in the district that covers your businesses has opened a file. ' +
       'She serves at your pleasure. Bo says the phrase "serves at your pleasure" four times, each time slightly differently.',
  choices:[
    { label:'Fire her tonight. Replace her with someone local and loyal.', eff:{base:+4,courts:-11,press:-5,congress:-7,auth:+11},
      res:'She is gone by Saturday. The file is not, because a file is a physical object in a building full of people who noticed what happened to her.' },
    { label:'Leave her. Firing her is the story, not the file.', eff:{courts:+8,press:+7,congress:+5,base:-6,auth:-2},
      res:'The file closes in fourteen months with no charges. Nobody ever learns it existed, which was available the entire time.' },
    { label:'Promote her. To something impressive, in another city.', eff:{courts:-4,press:-4,base:+3,auth:+8},
      res:'She takes the promotion because it is a good job. Her successor inherits the file and reads the room instead of the file.' },
    { label:'Promote her to run the whole department. Watch what happens.', eff:{base:-8,congress:+3,courts:+4,press:+4,auth:-2}, wild:true,
      res:'She takes the job and closes your file in four months on the merits, because it was thin, which you would have known if you had ever asked.' }]},

{ id:'b-pardon-friend', title:'The Friend', who:C.lawyer, min:12, max:44, tags:['justice','power'],
  text:'A man who worked for you and refused to cooperate has been convicted. He has said, publicly and repeatedly, ' +
       'that he will not "flip." Sy notes that this is either loyalty or a message, and that the distinction is not legally relevant.',
  choices:[
    { label:'Pardon him. Immediately. Full and unconditional.', eff:{base:+5,courts:-10,press:-5,congress:-8,auth:+12},
      res:'You have demonstrated that silence is rewarded. Three other witnesses in unrelated matters revise their positions within the month, without being asked.' },
    { label:'Commute the sentence, don\'t erase the conviction.', eff:{base:+4,courts:-5,press:-4,congress:-4,auth:+7},
      res:'He is home by Christmas and still a felon, which is enough for him and deniable for you.' },
    { label:'Nothing. Let it run.', eff:{courts:+9,press:+8,congress:+6,base:-8,auth:-4},
      res:'He serves fourteen months and writes a book. The book is not kind and it is extremely detailed.' },
    { label:'Pardon him for something else entirely. A parking offence from 1994.', eff:{base:+2,courts:-4,press:-1,street:-1,auth:+2}, wild:true,
      res:'A full and unconditional pardon for one count of illegal parking. He is furious. Nobody can determine whether it was a message or an error, including you.' }]},

{ id:'b-whistleblower', title:'The Complaint', who:C.ag, min:10, max:38, tags:['justice','press'],
  text:'A career official has filed a whistleblower complaint through the proper statutory channel. ' +
       'The statute says it goes to Congress. Bo has found four readings of the statute under which it does not.',
  choices:[
    { label:'Take the reading where it stays here. Bury it.', eff:{base:+5,congress:-10,courts:-8,press:-8,auth:+11},
      res:'It leaks in eleven days, as buried things do, and the burial is now a bigger story than the complaint was.' },
    { label:'Transmit it. Fight it on the merits.', eff:{congress:+8,courts:+7,press:+6,base:-6,auth:-2},
      res:'The complaint turns out to be thin. Because you sent it, everyone believes the finding.' },
    { label:'Transmit it and open an investigation into the complainant.', eff:{base:+6,congress:-6,courts:-7,press:-9,street:-5,auth:+10},
      res:'The complaint is dismissed and the complainant is unemployable within a year. Every official in the building takes the correct lesson.' },
    { label:'Transmit it, and add four of your own complaints to the same envelope.', eff:{base:+2,congress:+2,courts:+1,press:-2,street:-3,auth:+3}, wild:true,
      res:'The committee receives one whistleblower complaint and four presidential grievances in a single package. It takes them eleven weeks to work out which is which.' }]},

{ id:'b-fbi-list', title:'The Names', who:C.fbi, min:14, max:44, tags:['justice','power'],
  text:'You have asked Quist for a list of Bureau personnel who worked on cases involving you. ' +
       '"Sir, that is four hundred and twelve agents. I would like to understand what the list is for."',
  choices:[
    { label:'"It\'s for me." Take the list. Reassign all four hundred.', eff:{base:+5,courts:-12,press:-5,congress:-8,street:-7,auth:+15},
      res:'The Bureau loses a generation of counterintelligence experience in a fortnight. Two foreign services notice the gap before your own people do.' },
    { label:'Withdraw the request. Some lists shouldn\'t exist.', eff:{courts:+9,press:+8,congress:+7,street:+6,base:-8,auth:-6},
      res:'Quist does not thank you. She does, however, later decline three separate opportunities to make your life harder.' },
    { label:'Ask instead for the ones who leaked. Just those.', eff:{courts:-6,press:-4,base:+5,auth:+9},
      res:'A narrow, defensible, entirely reasonable request that produces a list of nine and a chilling effect across four hundred.' },
    { label:'Ask instead for the list of agents who are good at their jobs. Promote those.', eff:{base:-6,congress:+3,courts:+4,press:+2,street:+2,auth:-2}, wild:true,
      res:'Quist provides it in an hour and looks at you for a long moment afterwards. Counterintelligence output rises 40% over two years.' }]},

{ id:'b-fisa', title:'The Warrant', who:C.spy, min:16, max:46, tags:['security','courts'],
  text:'"A surveillance authority is up for renewal. It is used, overwhelmingly, against foreign targets." ' +
       'Hance pauses. "It is also the authority under which Americans are incidentally collected. You have asked about the incidental part."',
  choices:[
    { label:'Renew it. Expand the incidental part. Quietly.', eff:{base:+1,courts:-10,press:-5,street:-9,congress:-6,auth:+13},breaks:'search',
      res:'The expansion is four words long, buried in a reauthorisation, and passes on a voice vote. It is the most consequential thing that happens that year.' },
    { label:'Renew it with new warrant requirements attached.', eff:{courts:+9,press:+7,street:+6,congress:+5,base:-5,auth:-2},
      res:'Hance objects on operational grounds and complies fully. The requirement survives you by twenty years.' },
    { label:'Let it lapse. See who panics.', eff:{street:-6,congress:-7,base:+4,press:+3,auth:+4},
      res:'Four agencies and two allied governments panic. It is renewed in nine days on worse terms than were originally on the table.' },
    { label:'Renew it, but require the Director to read every warrant aloud to you personally.', eff:{base:+1,congress:+2,courts:+3,press:-2,street:-2,auth:-2}, wild:true,
      res:'Nine hundred warrants a year read aloud in a small room. Applications drop 60% within a quarter, entirely because of the tedium, which is a form of oversight nobody had tried.' }]},

{ id:'b-marshal', title:'The Contempt Order', who:C.ag, min:20, max:48, tags:['courts','power'],
  text:'A judge has held a cabinet secretary in contempt and ordered the US Marshals to enforce it. ' +
       'The Marshals report to the Justice Department. The Justice Department reports to you.',
  choices:[
    { label:'Order the Marshals to stand down.', eff:{base:+2,courts:-15,press:-5,congress:-9,street:-8,auth:+16},breaks:'judicial',
      res:'This is the thing everyone has been describing as the line. It is crossed on a Wednesday, by memo, and there is no procedure at all for what happens next.' },
    { label:'Let them enforce it. Then pardon the contempt.', eff:{courts:-6,press:-4,congress:-5,base:+4,auth:+10},
      res:'The order is obeyed and then erased. The judiciary keeps its authority and loses its consequence, which is the half worth having.' },
    { label:'Comply. Have the secretary purge the documents first.', eff:{courts:+6,press:+3,base:+3,auth:+7},
      res:'Full compliance with an order about a filing cabinet that is now empty. Perfectly legal, entirely useless, and nobody can prove otherwise.' },
    { label:'Comply, and send the judge flowers.', eff:{base:+1,congress:+2,courts:+4,press:-1,street:-3,auth:-2}, wild:true,
      res:'The flowers are logged, valued, and declined. The compliance is not declined. It is the cheapest de-escalation in the history of the executive branch.' }]},

/* ---------- agencies ---------- */

{ id:'b-reorg', title:'The Reorganisation', who:C.cos, min:8, max:36, tags:['agencies','power'],
  text:'"Three departments do overlapping work. We can merge them by executive order, which is legal, ' +
       'or abolish them, which is not." Deborah turns the page. "Or we can merge them and staff the merger at forty percent."',
  choices:[
    { label:'Merge and staff at forty percent.', eff:{base:+6,congress:-8,courts:-6,street:-8,press:-5,auth:+12},
      res:'You abolished two departments without abolishing anything. There is no law to challenge because no law was broken. There is simply nobody left to answer the phones.' },
    { label:'Clean merger, full staffing. Sell it as efficiency.', eff:{congress:+5,street:+4,press:+4,base:-3,auth:+4},
      res:'It saves $2 billion and works. It is announced twice and reported once.' },
    { label:'Leave them. Three overlapping departments is three sets of friends.', eff:{congress:+7,base:-3,auth:+2},
      res:'Every one of them now owes you their continued existence, which is a subscription rather than a purchase.' },
    { label:'Merge them and name the result something nobody can pronounce.', eff:{base:+1,congress:-6,press:-4,street:-4,auth:+7}, wild:true,
      res:'The Bureau of Interagency Coordination and Administrative Realignment. Nobody testifies about it because nobody can say it, and its budget goes unexamined for six years.' }]},

{ id:'b-scientists', title:'The Report', who:C.energy, min:10, max:40, tags:['agencies','press'],
  text:'Cassandra Doyle has a congressionally mandated scientific assessment. It is due by statute. ' +
       'It says something you have publicly denied eleven times. "Sir, I have to publish it. The question is when and how loudly."',
  choices:[
    { label:'Publish it at 5pm on the Friday before a holiday.', eff:{press:-5,street:-4,base:+4,auth:+5},
      res:'Fully compliant with the statute. Covered by two outlets. Cited in every lawsuit against you for the next six years.' },
    { label:'Publish it with a foreword disputing it.', eff:{base:+6,press:-8,street:-7,courts:-4,auth:+6},
      res:'The government publishes a document and a rebuttal of that document, simultaneously, under the same seal. Doyle signs neither.' },
    { label:'Publish it properly. Say you disagree and move on.', eff:{press:+8,street:+7,congress:+5,base:-6,auth:-1},
      res:'Disagreeing with a finding out loud costs you nothing and removes an entire genre of story about suppression.' },
    { label:'Publish it, and read the abstract aloud at a rally.', eff:{base:-4,congress:+2,press:+2,street:+3,auth:-2}, wild:true,
      res:'Eleven thousand people at a fairground hear a peer-reviewed abstract read in full. They boo. You keep reading. It is the strangest four minutes of the campaign.' }]},

{ id:'b-hurricane', title:'The Response', who:C.home, min:8, max:44, tags:['street','press'],
  text:'A category four has taken out the power grid of an entire state — one that voted against you by nineteen points. ' +
       'Duane needs the disaster declaration signed. He has the form. It is one page.',
  choices:[
    { label:'Sign it immediately. Send everything. Go there Tuesday.', eff:{street:+11,press:+9,congress:+7,base:-3,cash:-0.3,auth:+2},
      res:'Federal response times are the best in eleven years. The governor who has sued you nine times says something generous on camera and means it.' },
    { label:'Sign it, but slow-walk the money pending "review."', eff:{base:+4,street:-11,press:-9,congress:-6,auth:+6},
      res:'Aid arrives in fourteen weeks instead of four. The delay is invisible in any document and entirely visible in the mortality statistics.' },
    { label:'Tie the aid to the state changing a policy you dislike.', eff:{base:+6,street:-13,press:-11,courts:-8,congress:-9,auth:+12},
      res:'You have used a natural disaster as leverage on a domestic policy dispute. Four members of your own party say so publicly, using their names.' },
    { label:'Sign it and go and stay there. Three weeks. Run the country from a school gym.', eff:{base:+2,congress:+3,street:+2,auth:-2,cash:-0.2}, wild:true,
      res:'The federal government operates from a high school gymnasium for twenty-one days. Response times are the best on record and four agencies quietly adopt the model permanently.' }]},

{ id:'b-census', title:'The Question', who:C.cos, min:14, max:44, tags:['power','courts'],
  text:'"One additional question on the census. It is constitutionally required to count everyone. ' +
       'The question would cause a specific population to not answer the door." She looks up. "That is the mechanism, not a side effect."',
  choices:[
    { label:'Add it. Apportionment for a decade runs off this.', eff:{base:+4,courts:-11,press:-5,street:-9,congress:-7,auth:+14},
      res:'The Court strikes it down on the grounds that the stated reason was, in the Chief Justice\'s phrase, "contrived." The undercount happens anyway, in the states that heard about it.' },
    { label:'Drop the question. Fund outreach in those areas instead.', eff:{street:+8,press:+7,courts:+6,base:-7,auth:-3},
      res:'An accurate census. Ten years of correct apportionment, correct funding formulas and correct maps. Nobody thanks anybody for a census.' },
    { label:'Drop it publicly, then defund enumeration in those counties.', eff:{base:+4,street:-7,press:-4,courts:-4,auth:+11},
      res:'No question, no lawsuit, no headline — and a 4% undercount in exactly the places the question was aimed at. This is the version that works.' },
    { label:'Add a question so boring nobody notices it, then use the data anyway.', eff:{base:+1,courts:-9,press:-8,street:-8,auth:+9}, wild:true,
      res:'\'How many rooms does your dwelling have?\' It correlates with everything you actually wanted and it is entirely, unimpeachably innocent.' }]},

{ id:'b-vets', title:'The Waiting List', who:C.vet, min:10, max:42, tags:['street','money'],
  text:'Gus Renner has the real numbers: average wait, fourteen weeks. The published number is four. ' +
       'The gap is a scheduling practice that four previous administrations also used.',
  choices:[
    { label:'Publish the real number. Own it. Fix it.', eff:{street:+10,press:+9,congress:+7,base:+4,cash:-0.4,auth:-1},
      res:'You take four weeks of terrible coverage and then eleven months of the best coverage of your presidency, because the number goes down and stays down.' },
    { label:'Keep the published number. Fix it quietly.', eff:{street:+5,press:-3,base:+2,auth:+3},
      res:'The wait falls to nine weeks. Nobody knows, so nobody credits you, so the funding for it is cut in the next cycle.' },
    { label:'Privatise it. Vouchers. Let the market sort it.', eff:{base:+7,street:-7,congress:-5,press:-4,cash:+0.3,auth:+4},
      res:'Wait times fall for veterans near cities and rise sharply for veterans who are not. Renner resigns over the second half of that sentence.' },
    { label:'Publish the real number and personally call the hundred longest-waiting.', eff:{base:+2,congress:+3,street:+1,auth:-2,cash:-0.3}, wild:true,
      res:'It takes four days of phone calls. Nine of the hundred have died waiting. You are told this on the calls, by their families, one at a time.' }]},

{ id:'b-schools', title:'The Curriculum', who:C.edu, min:12, max:44, tags:['culture','power'],
  text:'Bernadette Ollis notes that education is a state matter and the federal government cannot set curriculum. ' +
       '"However. We do administer $30 billion in grants, and grants have conditions."',
  choices:[
    { label:'Condition every grant on the curriculum you want.', eff:{base:+7,courts:-9,street:-8,press:-5,congress:-5,auth:+12},
      res:'Nineteen states comply within a year because $30 billion is $30 billion. You have set national curriculum without the authority to set national curriculum.' },
    { label:'Fund a model curriculum. Make it optional and excellent.', eff:{street:+5,press:+5,congress:+4,base:+3,cash:-0.2,auth:+3},
      res:'Eleven states adopt it voluntarily because it is good. This takes six years and outlives three administrations.' },
    { label:'Abolish the department. Block-grant it to the states.', eff:{base:+9,courts:-6,street:-7,congress:-8,press:-4,auth:+9},
      res:'The department survives on paper with a staff of forty. The money goes out with no conditions at all, which several governors find alarming rather than liberating.' },
    { label:'Condition the grants on schools teaching the Constitution. Actually teaching it.', eff:{base:+2,congress:+2,courts:+2,press:-1,auth:-2}, wild:true,
      res:'It is the only curriculum condition nobody can object to. It also produces, in about eleven years, a generation markedly less impressed by everything you did.' }]},

{ id:'b-drug-price', title:'The Price', who:C.health, min:10, max:44, tags:['economy','street'],
  text:'Dr. Pike has the negotiating position on eleven drugs. The industry has offered to fund a $200 million ' +
       'advertising campaign praising your leadership on healthcare if the list becomes four drugs.',
  choices:[
    { label:'Eleven drugs. No campaign. Fight them.', eff:{street:+10,press:+8,base:+6,congress:-7,cash:-0.3,auth:+3},
      res:'Prices fall for nine million people. The industry spends $400 million against you anyway and you win the argument in every poll ever taken on it.' },
    { label:'Four drugs and the campaign.', eff:{base:+6,street:-5,press:-4,congress:+4,cash:+0.5,auth:+3},
      res:'The advertisements are excellent and run for eleven months. Insulin is not on the list of four.' },
    { label:'Announce eleven. Deliver four. Let the ads run anyway.', eff:{base:+5,street:-6,press:-5,courts:-3,cash:+0.5,auth:+6},
      res:'The announcement is covered nationally. The final rule is covered in a trade publication with a circulation of nine thousand.' },
    { label:'Negotiate all eleven yourself. In the room. Personally.', eff:{base:+3,congress:-9,press:+3,street:+4,auth:-2,cash:-0.2}, wild:true,
      res:'You are, it turns out, extremely good at this. Prices fall 40% on nine of the eleven. The industry never asks for a face-to-face meeting again.' }]},

{ id:'b-inspector-again', title:'The Audit', who:C.treas, min:16, max:46, tags:['money','agencies'],
  text:'An audit of a $60 billion emergency programme has found that $9 billion went to entities that do not appear to exist. ' +
       'Lyle notes that four of the non-existent entities share a mailing address with a real donor.',
  choices:[
    { label:'Bury the audit. Reassign the auditors.', eff:{base:+1,congress:-9,courts:-8,press:-5,street:-6,auth:+11},
      res:'It surfaces eleven months later through a FOIA request filed by a graduate student. The delay converts a scandal into a cover-up.' },
    { label:'Publish it. Prosecute the fraud. All of it.', eff:{press:+10,congress:+8,courts:+7,street:+7,base:-6,cash:-0.4,auth:-2},
      res:'$4 billion is recovered and eleven people go to prison, two of whom raised money for you. It is the best week the Justice Department has all term.' },
    { label:'Publish it. Prosecute everyone except the four.', eff:{press:+4,congress:+3,courts:-6,base:+3,cash:+0.4,auth:+7},
      res:'Sixty prosecutions and four conspicuous absences. A reporter notices the pattern in year three and it takes another two years to prove.' },
    { label:'Publish it and prosecute yourself for the ones with your name on.', eff:{base:+1,congress:+3,courts:+4,street:-1,auth:-2}, wild:true,
      res:'A referral naming the President is transmitted by the President. It goes nowhere for obvious reasons and it makes the other sixty prosecutions unstoppable.' }]},

/* ---------- economy & money ---------- */

{ id:'b-jobs-number', title:'The Jobs Number', who:C.treas, min:8, max:46, tags:['economy','press'],
  text:'The monthly figure is bad. It is compiled by career statisticians at an agency whose independence ' +
       'is protected by nothing except the fact that nobody has ever attacked it.',
  choices:[
    { label:'Fire the commissioner. Say the number is rigged.', eff:{base:+6,street:-10,press:-10,congress:-8,courts:-5,auth:+11},
      res:'Every subsequent number is now disbelieved by everyone, including the ones that are good, including yours. You have broken a thermometer you will need in eighteen months.' },
    { label:'Accept the number. Announce a plan.', eff:{street:+7,press:+6,congress:+5,base:-4,auth:+1},
      res:'Dull competence. The next three numbers are better and everyone believes them, which is worth more than the numbers.' },
    { label:'Release it on schedule and post about a different number.', eff:{base:+5,press:-4,street:-3,auth:+3},
      res:'You have not disputed anything. You have simply pointed at a stock index for four days. It works completely.' },
    { label:'Read the bad number out yourself, at the podium, first.', eff:{base:+1,congress:+3,street:+1,auth:-2}, wild:true,
      res:'Delivering your own bad news removes the entire genre of story about hiding it. Three subsequent bad months are covered as routine.' }]},

{ id:'b-bailout', title:'The Bailout', who:C.fed, min:14, max:46, tags:['economy','money'],
  text:'A bank with $400 billion in deposits fails on a Friday. Lindqvist and Pemberton want a guarantee announced ' +
       'before Asia opens. Eleven of the largest uninsured depositors are people who have hosted fundraisers for you.',
  choices:[
    { label:'Guarantee everything. Sunday night. No limits.', eff:{street:+8,congress:-5,press:-5,base:-6,cash:+0.4,auth:+5},
      res:'The panic stops in nine hours. You have also established that deposit insurance limits are advisory for anyone large enough, which is now permanent.' },
    { label:'Guarantee insured deposits only. Let the rest burn.', eff:{base:+9,street:-9,press:-4,congress:-6,cash:-0.5,auth:+4},
      res:'Four regional banks fail the following week. It is principled, it is consistent, and it costs the economy $60 billion.' },
    { label:'Guarantee everything and take equity in the survivors.', eff:{street:+7,congress:+4,press:+5,base:-3,cash:+0.8,auth:+8},
      res:'The Treasury eventually turns a $12 billion profit and holds board influence over four systemically important banks, which nobody quite noticed you acquiring.' },
    { label:'Guarantee it and personally buy the failed bank for one dollar.', eff:{base:+2,congress:-8,press:-6,street:+3,auth:+5,cash:+1.2}, wild:true,
      res:'You acquire $400 billion in deposits for a dollar. It is legal under a resolution authority written in 1991 by people who did not imagine this.' }]},

{ id:'b-crypto-reserve', title:'The Reserve', who:C.treas, min:16, max:46, tags:['money','economy'],
  text:'"A strategic national reserve of the digital asset you personally issue." Lyle sets down the memo as if it were warm. ' +
       '"Sir, the Treasury would be buying a thing you own. With public money. I have been asked to describe the mechanism neutrally and I have now done that."',
  choices:[
    { label:'Do it. Announce it Sunday night.', eff:{base:+2,press:-5,congress:-9,courts:-8,street:-6,cash:+1.5,auth:+9},breaks:'emoluments',
      res:'The asset triples in ninety minutes on the announcement alone. Your holdings are worth $4 billion by Monday and the reserve is worth considerably less than it paid.' },
    { label:'A reserve of the established asset. Not yours.', eff:{base:+4,press:-3,congress:-3,cash:+0.4,auth:+4},
      res:'Defensible, popular with a loud constituency, and you make money anyway because everything in the sector moves together.' },
    { label:'No reserve. The Treasury is not a customer.', eff:{press:+8,congress:+7,courts:+6,street:+5,base:-5,cash:-0.3},
      res:'Lyle sleeps for the first time in nine weeks. It is the single largest sum of money you decline all term.' },
    { label:'Build the reserve out of arcade tokens. See if anyone checks.', eff:{base:+2,congress:-4,press:-4,street:-3,auth:+4}, wild:true,
      res:'Four hundred thousand arcade tokens in a vault in West Virginia, valued on the books at $4 billion. Nobody checks for nine years.' }]},

{ id:'b-antitrust', title:'The Merger', who:C.ag, min:14, max:46, tags:['money','press'],
  text:'A $90 billion merger needs approval. One of the merging parties owns a network that has been kind to you. ' +
       'The other has been described in your posts, by name, eleven times.',
  choices:[
    { label:'Approve it. The kind one will be kinder.', eff:{press:-8,courts:-6,congress:-5,base:+4,cash:+0.4,auth:+8},
      res:'Coverage on that network improves measurably within six weeks. Three economists publish a paper measuring exactly how much.' },
    { label:'Block it. Punish the one who insulted you.', eff:{base:+6,press:-9,courts:-8,congress:-6,street:-4,auth:+9},
      res:'The stated grounds are competition. The actual grounds are in your posting history, which is a public document, and which is entered into evidence.' },
    { label:'Let the career staff decide. Don\'t touch it.', eff:{courts:+8,press:+7,congress:+6,base:-4,auth:-1},
      res:'They block it on genuine competition grounds. Because you were nowhere near it, the block survives appeal.' },
    { label:'Approve it on condition they merge with a third company nobody likes.', eff:{base:+1,congress:+1,courts:+1,press:-3,street:-3,auth:+4}, wild:true,
      res:'The forced third partner is a struggling regional broadcaster. It is saved, eleven hundred jobs survive, and both original parties are furious for a decade.' }]},

{ id:'b-farm', title:'The Farmers', who:C.treas, min:12, max:44, tags:['economy','base'],
  text:'Your tariffs have cost soybean growers their entire export market. These are your voters. ' +
       'Lyle has a $28 billion payment programme drafted, funded through a Depression-era authority that requires no vote.',
  choices:[
    { label:'Pay them. All of it. No vote needed.', eff:{base:+9,congress:-7,street:+4,press:-5,cash:-0.4,auth:+8},
      res:'You have taxed consumers to fund a trade war and then paid the losers with money Congress never appropriated. Every part of this is legal and no part of it was voted on.' },
    { label:'Pay half and drop the tariff.', eff:{base:+4,street:+7,press:+5,congress:+5,cash:-0.2,auth:+1},
      res:'The market comes back in eighteen months at 70% of what it was, because the buyers found somebody else and stayed.' },
    { label:'Nothing. They knew the deal.', eff:{base:-12,street:-6,congress:-5,press:+3,auth:+2},
      res:'Eleven farm-state senators discover principles they had not previously mentioned. Two of them stop returning your calls entirely.' },
    { label:'Buy the entire crop yourself and give it away abroad.', eff:{base:+3,congress:-9,press:+3,street:+3,auth:+3,cash:-0.9}, wild:true,
      res:'Nine million tonnes of soybeans distributed as food aid. It is enormously expensive, enormously popular, and four famines are measurably shorter.' }]},

{ id:'b-shutdown-two', title:'The Debt Ceiling', who:C.speaker, min:18, max:46, tags:['congress','economy'],
  text:'Nine days to default on debt already incurred. Hal cannot pass a clean raise. ' +
       'Lyle has a memo about a constitutional clause and a memo about a coin. He is holding both at arm\'s length.',
  choices:[
    { label:'Ignore the ceiling. Cite the Fourteenth Amendment. Keep paying.', eff:{congress:-12,courts:-9,street:+6,press:-4,base:+4,auth:+14},
      res:'You have unilaterally declared a statutory limit unconstitutional and continued borrowing. Markets are relieved and every future president now has this option.' },
    { label:'Cut a deal. Give them the spending caps.', eff:{congress:+10,street:+7,press:+6,base:-8,auth:-3},
      res:'Default averted at the cost of your entire domestic agenda. This is what the ceiling is for and it worked exactly as designed against you.' },
    { label:'Let it breach. Prioritise payments by hand.', eff:{street:-13,congress:-8,press:-5,base:+4,courts:-5,auth:+9},
      res:'For four days the Treasury chooses who gets paid, which is a power no statute grants and no statute forbids. Borrowing costs rise permanently by 0.4%.' },
    { label:'Mint the coin. The trillion-dollar coin. Actually do it.', eff:{base:+3,congress:-14,courts:-9,press:-6,street:+2,auth:+11},breaks:'purse', wild:true,
      res:'It is struck in platinum, deposited, and works. The statute permits it. Four economists have aneurysms and the debt ceiling is never again taken seriously by anybody.' }]},

/* ---------- immigration & security ---------- */

{ id:'b-quota', title:'The Quota', who:C.home, min:10, max:42, tags:['immigration','street'],
  text:'Duane has been given a daily arrest target. To hit it, agents have moved from targeted enforcement ' +
       'to courthouse and workplace sweeps. "Sir, the number is achievable. It is just not achievable the way you described it."',
  choices:[
    { label:'Raise the target. I don\'t care where they come from.', eff:{base:+7,street:-12,press:-5,courts:-8,congress:-6,auth:+11},
      res:'Sweeps at a hospital and a primary school in the same week. Four hundred children are collected from classrooms by county workers because nobody came for them.' },
    { label:'Keep the target, exempt schools, hospitals and courts.', eff:{base:+5,street:-4,press:-3,courts:-2,auth:+6},
      res:'The exemptions are real and are honoured. The number is met by increasing pressure everywhere else, which is fine, because everywhere else is not photogenic.' },
    { label:'Scrap targets. Go back to who the agents were actually after.', eff:{street:+8,courts:+7,press:+7,base:-9,auth:-3},
      res:'Arrests fall by 60% and the proportion with serious criminal records rises from 11% to 74%. Both numbers are used against you, by different people.' },
    { label:'Set the target at zero and see whether anyone notices.', eff:{base:-9,congress:+2,courts:+4,press:+4,street:+4,auth:-2}, wild:true,
      res:'Nobody notices for eleven weeks. Enforcement continues at exactly the same rate, driven entirely by habit, which tells you something permanent about targets.' }]},

{ id:'b-refugee-cap', title:'The Ceiling', who:C.state, min:12, max:44, tags:['immigration','foreign'],
  text:'The annual refugee admissions ceiling is yours to set by proclamation, with no floor. ' +
       'Muriel has the historical range. The lowest it has ever been is 15,000. She has written that number in pencil.',
  choices:[
    { label:'Set it at 2,000. Effectively closed.', eff:{base:+6,press:-5,street:-7,congress:-5,auth:+8},
      res:'Resettlement agencies that took forty years to build close in eleven months. Rebuilding them, when someone eventually wants to, takes a decade.' },
    { label:'Set it at 15,000. The historical floor, no lower.', eff:{base:+4,press:-2,street:-2,auth:+4},
      res:'A record low that is also a limit, which is a distinction the people who work in this field notice and nobody else does.' },
    { label:'Set it at 90,000 and make it about the persecuted Christians.', eff:{base:+6,press:+6,street:+6,congress:+4,auth:+2},
      res:'You have found the one framing under which your own coalition applauds a large refugee number. It works, and 90,000 people are admitted.' },
    { label:'Set it at one and interview the applicant personally.', eff:{base:+2,congress:-4,auth:+2}, wild:true,
      res:'You spend two hours with a single family. They are admitted. You are, afterwards, quieter than usual for about a week and you raise the cap to 30,000 in March.' }]},

{ id:'b-wall-money', title:'The Money For The Wall', who:C.gen, min:12, max:44, tags:['power','congress'],
  text:'Congress appropriated $1.4 billion. You asked for $8. General Tarrant notes that military construction funds ' +
       'can be redirected during a declared emergency, and that the projects those funds are currently building are schools on bases.',
  choices:[
    { label:'Take the military construction money. All of it.', eff:{base:+8,congress:-11,courts:-8,street:-6,press:-5,auth:+13},breaks:'purse',
      res:'Eleven base schools and a hospital are cancelled to build 42 miles of fence. The affected districts are, in nine cases out of eleven, represented by your own party.' },
    { label:'Build $1.4 billion worth. Say it\'s the best part.', eff:{base:+3,congress:+6,courts:+5,press:+3,auth:+3},
      res:'Ninety miles of genuinely effective barrier in the places where barriers work. It is completed, on budget, and mentioned by nobody.' },
    { label:'Take it from counter-narcotics instead. Less photogenic.', eff:{base:+6,congress:-6,courts:-5,street:-4,auth:+9},
      res:'Nobody cries about a counter-narcotics line item. The seizure rate falls 22% over two years and appears in exactly one hearing.' },
    { label:'Build it out of something cheap and paint it to look expensive.', eff:{base:+2,congress:-6,press:-6,street:-4,auth:+4,cash:+0.3}, wild:true,
      res:'Ninety miles of painted steel mesh at a fifth of the price. It works exactly as well as the expensive version, which is the uncomfortable finding of a 2031 GAO report.' }]},

{ id:'b-tariff-exempt', title:'The Exemptions', who:C.treas, min:14, max:46, tags:['economy','money'],
  text:'Eleven thousand companies have applied for tariff exemptions. Each is decided by your office. ' +
       'Lyle notes that four of the eleven thousand have retained your former campaign manager as a consultant.',
  choices:[
    { label:'Decide them personally. All eleven thousand.', eff:{base:+2,press:-5,courts:-7,congress:-7,cash:+0.9,auth:+11},
      res:'The approval rate for firms represented by people you know is 71%. For everyone else it is 19%. Both numbers are eventually published.' },
    { label:'Publish objective criteria. Let career staff apply them.', eff:{press:+8,congress:+7,courts:+6,street:+5,base:-4,cash:-0.3},
      res:'It removes an entire influence economy overnight and makes you nine hundred quiet enemies who had already paid their retainers.' },
    { label:'Approve everything. Tariffs are a threat, not a tax.', eff:{street:+7,congress:+5,base:-5,press:+3,auth:+4},
      res:'The tariff exists and applies to almost nobody. It continues to work perfectly as leverage, which was always the actual product.' },
    { label:'Decide all eleven thousand by coin toss. Publish the coin.', eff:{base:+2,congress:+2,courts:+1,press:-2,street:-3,auth:+2}, wild:true,
      res:'A livestreamed coin, eleven thousand tosses, six weeks. It is demonstrably fairer than any previous process and four trade lawyers describe it as \'unfortunately, an improvement.\'' }]},

/* ---------- media & information ---------- */

{ id:'b-briefing-end', title:'The Briefing Room', who:C.press, min:10, max:44, tags:['press'],
  text:'Kaylee has held four briefings in nine months. "Sir, the room exists. If we don\'t use it, they fill the time ' +
       'with sources instead of me, and sources are worse for us than I am."',
  choices:[
    { label:'End briefings entirely. Post statements instead.', eff:{base:+5,press:-11,street:-5,congress:-4,auth:+8},
      res:'Coverage gets worse, not better, because the only quotes available are from people who dislike you and are not on the record.' },
    { label:'Daily briefings. Let her take the hits.', eff:{press:+9,street:+5,congress:+4,base:-4,auth:+1},
      res:'She is extremely good at it. The daily grind absorbs eleven stories a week that would otherwise have run.' },
    { label:'Replace the press corps with friendly podcasters.', eff:{base:+9,press:-10,street:-6,courts:-3,auth:+9},
      res:'The new seating chart has four podcasters in the front row. The questions are gentler and, within a year, the podcasters are more influential than the newspapers were.', flag:'newMedia' },
    { label:'Hold them yourself. Every day. Two hours.', eff:{base:+3,congress:-4,press:+1,street:+1,auth:-2}, wild:true,
      res:'Two hours a day, unscripted, for four years. You generate more news, more gaffes and more goodwill than any communications strategy ever devised, all at once.' }]},

{ id:'b-buy-paper', title:'The Sale', who:C.lawyer, min:18, max:46, tags:['press','money'],
  text:'The nation\'s second paper of record is for sale. Sy has a buyer who would like your blessing ' +
       'and, separately, a favourable ruling from an agency. "He is not asking for a quid pro quo. He is describing two facts in one sentence."',
  choices:[
    { label:'Bless the sale. Grant the ruling. Separately, obviously.', eff:{press:-11,courts:-6,congress:-6,cash:+0.5,auth:+11},
      res:'The paper\'s editorial board is replaced within a year. Nine senior reporters leave and start a newsletter that is read by everyone who matters and nobody who votes.' },
    { label:'Stay out of it entirely.', eff:{press:+8,courts:+5,congress:+4,base:-3},
      res:'It is bought by a foundation with a hundred-year charter and becomes, annoyingly, better funded and harder to intimidate than before.' },
    { label:'Have an ally buy it and change nothing.', eff:{press:-4,base:+3,cash:+0.2,auth:+7},
      res:'The best version: the paper keeps its reputation, keeps its staff, and quietly stops running one particular kind of story. Nobody can point at what changed.' },
    { label:'Start your own newspaper. A real one. Hire actual reporters.', eff:{base:+2,press:-2,street:-2,auth:+3,cash:-0.7}, wild:true,
      res:'You hire nine serious journalists and, to everyone\'s astonishment, do not interfere. It wins a prize in year three for an investigation into your own Interior Department.' }]},

{ id:'b-algorithm', title:'The Algorithm', who:C.social, min:16, max:46, tags:['press','power'],
  text:'A platform with 200 million domestic users has changed its recommendation system and your reach is down 40%. ' +
       'Brayden has three options and one of them is a regulatory threat.',
  choices:[
    { label:'Threaten their liability shield until they change it back.', eff:{base:+7,press:-10,courts:-7,congress:-6,street:-5,auth:+12},
      res:'Reach is restored in nine days without a single document changing hands. Every platform in the country updates its internal risk model permanently.' },
    { label:'Buy reach like everyone else.', eff:{base:+4,cash:-0.4,press:+2,auth:+2},
      res:'$90 million and it works fine. Deeply unsatisfying and completely unobjectionable.' },
    { label:'Build your own platform and move the whole movement onto it.', eff:{base:+8,press:-5,street:-3,cash:-0.6,auth:+6},
      res:'Four million users, all of whom already agree with you, none of whom needed convincing. You have built a very comfortable room with no windows.', flag:'ownPlatform' },
    { label:'Post exclusively in rhyming couplets until the algorithm gives up.', eff:{base:+3,press:-2,street:-2,auth:+1}, wild:true,
      res:'Engagement quadruples. The recommendation system, unable to classify you, promotes you everywhere. You have defeated a $900 billion company with poetry.' }]},

{ id:'b-foia', title:'The Request', who:C.cos, min:12, max:44, tags:['press','power'],
  text:'A records request would produce eleven thousand pages including the scheduling logs. ' +
       'Deborah notes that the statute has deadlines, that the deadlines have no penalty, and that the average court order takes three years.',
  choices:[
    { label:'Deny in full. Cite every exemption at once.', eff:{press:-8,courts:-7,congress:-5,base:+4,auth:+9},
      res:'A judge orders release in year three. By then you have left office and the documents are a history project rather than a news story, which was the entire plan.' },
    { label:'Release it. Redact only what actually needs redacting.', eff:{press:+9,courts:+7,congress:+6,base:-6,auth:-2},
      res:'Eleven thousand pages produce four mildly embarrassing stories over two weeks and then nothing, forever, because that is what documents usually contain.' },
    { label:'Stop keeping the logs.', eff:{press:-6,courts:-6,congress:-5,base:+3,auth:+11},
      res:'You cannot be ordered to produce a record that was never created. It is the single most effective transparency measure ever taken against transparency.' },
    { label:'Release everything proactively. All of it. Before anyone asks.', eff:{base:-6,congress:+3,courts:+4,press:+3,street:+3,auth:-2}, wild:true,
      res:'Eleven thousand pages posted on a Tuesday with no redactions. Four mildly embarrassing stories run and then nothing, forever, because there is nothing left to request.' }]},

{ id:'b-correspondents', title:'The Dinner', who:C.press, min:8, max:44, tags:['press','levity'],
  text:'The annual dinner where the press mock the President and the President mocks back. ' +
       'The comedian booked this year has a reputation. Kaylee has read the set. She has described it as "surgical."',
  choices:[
    { label:'Go. Sit through it. Roast them back harder.', eff:{press:+8,street:+6,base:+5,auth:+1},
      res:'You are funnier than the comedian. It is the single most disarming forty minutes of your presidency and three of your worst critics laugh out loud on camera.' },
    { label:'Skip it. Hold a rally the same night, same hour.', eff:{base:+8,press:-8,street:-4,auth:+3},
      res:'Split-screen: eleven thousand people cheering you, and a ballroom of journalists watching themselves be ignored. It is, tactically, excellent.' },
    { label:'Go, and walk out mid-set.', eff:{base:+6,press:-9,street:-5,auth:+2},
      res:'The walk-out is the story rather than the joke, which means the joke is repeated for eleven days by people explaining the walk-out.' },
    { label:'Do the comedian\'s set yourself. Same jokes. About yourself.', eff:{base:+3,auth:-2}, wild:true,
      res:'You obtain the material in advance and perform it first, better, and to your own detriment. The comedian has to improvise for eleven minutes and never fully recovers.' }]},

/* ---------- culture & symbols ---------- */

{ id:'b-statue', title:'The Statues', who:C.hist, min:12, max:44, tags:['culture','street'],
  text:'Four cities are removing monuments. Dr. Weir notes, without editorialising, that most were erected sixty years ' +
       'after the events they commemorate, during a period she can date precisely.',
  choices:[
    { label:'Federal order protecting every monument. Prosecute removals.', eff:{base:+8,street:-10,courts:-7,press:-5,auth:+10},
      res:'Ten-year sentences are announced for defacing federal property. The monuments stay. The argument moves from the statues to the sentences and gets louder.' },
    { label:'It\'s a local matter. Say so and mean it.', eff:{street:+7,press:+6,courts:+5,congress:+4,base:-8},
      res:'Federalism, applied consistently, for once. Your base experiences this as a betrayal and says so for four years.' },
    { label:'Build new ones. A National Garden of Heroes.', eff:{base:+8,press:-4,street:-3,cash:-0.4,auth:+5},
      res:'Two hundred and fifty statues commissioned by executive order with a list you personally edited. Four sculptors decline. The garden is never finished.' },
    { label:'Replace them all with statues of local schoolteachers.', eff:{base:-6,congress:+3,courts:+2,press:+3,street:+4,auth:-2}, wild:true,
      res:'Four hundred monuments to named teachers from the towns they stood in. Nobody, on any side, can find a way to be against it, which infuriates everybody.' }]},

{ id:'b-museum', title:'The Exhibit', who:C.hist, min:16, max:46, tags:['culture','power'],
  text:'A federally funded museum has an exhibit you dislike. You appoint the board. ' +
       'Dr. Weir points out that the museum\'s charter guarantees curatorial independence, and that charters can be amended by the board you appoint.',
  choices:[
    { label:'Replace the board. Amend the charter. Pull the exhibit.', eff:{base:+5,press:-5,street:-8,courts:-5,congress:-5,auth:+11},
      res:'Nine curators resign. The exhibit reopens in a private gallery four blocks away and has eleven times the attendance it would have had.' },
    { label:'Fund a competing exhibit instead. Bigger. Next door.', eff:{base:+6,press:+3,street:+2,cash:-0.3,auth:+4},
      res:'Two exhibits, adjacent, arguing. It is the most genuinely American solution available and it is, unexpectedly, a hit.' },
    { label:'Leave it. It\'s a museum.', eff:{press:+6,street:+5,courts:+4,base:-6},
      res:'Eleven thousand people see it. If you had pulled it, four million would have.' },
    { label:'Fund it more. Ask them to make it bigger.', eff:{base:-6,congress:+2,courts:+2,press:+3,street:+3,auth:-2,cash:-0.2}, wild:true,
      res:'The exhibit you dislike is expanded with your money and your name on the plaque. It is the single most confusing thing your base experiences all year.' }]},

{ id:'b-flag-code', title:'The Flag Code', who:C.ag, min:14, max:46, tags:['culture','courts'],
  text:'You would like flag desecration to be a federal crime. Bo has the precedent in front of him. ' +
       '"It is settled, sir. It was settled in 1989. The majority opinion was written by a conservative and it is very short."',
  choices:[
    { label:'Sign it anyway. Make them re-decide it.', eff:{base:+8,courts:-9,press:-5,street:-5,auth:+8},
      res:'Struck down 7–2 in fourteen months. The two dissents are cited approvingly in your speeches for the remainder of your presidency.' },
    { label:'Propose an amendment. It fails, but slowly and visibly.', eff:{base:+6,congress:-3,press:-2,auth:+3},
      res:'It gets 61 votes in the Senate, seven short. The seven are named at every rally for two years and four of them lose primaries.' },
    { label:'Drop it. It\'s speech and you know it.', eff:{courts:+7,press:+6,street:+4,base:-7,auth:-2},
      res:'A genuinely principled position that is indistinguishable, from the outside, from not caring.' },
    { label:'Propose a law requiring people to be nice about the flag.', eff:{base:+2,courts:-6,auth:+2}, wild:true,
      res:'It is unenforceable, unconstitutional and four sentences long. It passes the House 291-144 because nobody wants the vote against it on their record.' }]},

{ id:'b-holiday-new', title:'The New Holiday', who:C.cos, min:18, max:46, tags:['vanity','culture'],
  text:'"A new federal holiday. Congress usually does this, but you can close the executive branch by order, ' +
       'and in practice that is what a federal holiday is." Deborah pauses. "You have suggested a date in June."',
  choices:[
    { label:'My birthday. Free admission to national parks.', eff:{base:+6,press:-5,street:-6,congress:-6,courts:-4,auth:+8},
      res:'Four million people visit a national park for free on your birthday and most of them do not know why the parks are free.' },
    { label:'A veterans\' day the country actually lacks.', eff:{street:+8,press:+7,congress:+6,base:+4,auth:+2},
      res:'It passes both chambers unanimously within a year, which nothing else you propose ever does.' },
    { label:'Both. Package them together.', eff:{base:+7,press:-4,street:+3,congress:-3,auth:+6},
      res:'Nobody can vote against the veterans, so nobody votes against the birthday. It is the single most elegant thing you do all term.' },
    { label:'Make it a holiday celebrating the eleven people who said no to you.', eff:{base:-9,congress:+4,courts:+4,press:+4,street:+4,auth:-5}, wild:true,
      res:'It passes unanimously. It is observed, genuinely, every year. It is the single most damaging thing you could possibly have done to your own project and you did it on purpose.' }]},

/* ---------- foreign ---------- */

{ id:'b-summit', title:'The Summit', who:C.state, min:14, max:46, tags:['foreign','press'],
  text:'A one-on-one with an adversary head of state. No aides, no notetaker, and — at his request — ' +
       'his interpreter only. Muriel is being extremely careful with her face.',
  choices:[
    { label:'Do it his way. Nobody in the room but us.', eff:{base:+6,press:-10,congress:-9,street:-7,courts:-4,auth:+9},
      res:'Two hours with no American record. Your own government learns what was agreed from his foreign ministry\'s readout, which is the only readout that exists.' },
    { label:'Insist on your own interpreter and a notetaker.', eff:{press:+7,congress:+7,street:+5,base:-4,auth:+2},
      res:'He agrees instantly, because he was always going to agree, because he was only ever asking.' },
    { label:'Do it alone, then write your own memo afterwards.', eff:{press:-5,congress:-4,base:+4,auth:+7},
      res:'A memo written by one participant from memory, four hours later. It is now the official US record of the meeting and it is, in three places, wrong.' },
    { label:'Bring a notetaker anyway and introduce her as your niece.', eff:{base:+1,congress:+2,press:-2,street:-2,auth:+5}, wild:true,
      res:'There is an American record of the meeting. It is taken by a fluent Russian-speaking career official described in the readout as \'family.\' Nobody objects because nobody can.' }]},

{ id:'b-troops-out', title:'The Withdrawal', who:C.gen, min:16, max:46, tags:['foreign','military'],
  text:'Eleven thousand troops in a country you promised to leave. Tarrant has three plans: fast, orderly, and conditional. ' +
       '"The fast one is achievable, sir. I want to be clear that achievable and advisable are different words."',
  choices:[
    { label:'Fast. Announce the date publicly. Hold it.', eff:{base:+7,street:-8,press:-5,congress:-7,auth:+7},
      res:'The government you leave behind lasts eleven days. The images from the airport are the defining images of your foreign policy for the rest of your life.' },
    { label:'Orderly. Eighteen months. Conditions-based.', eff:{street:+5,press:+6,congress:+6,base:-8,auth:+1},
      res:'It works. It takes two years. Your base calls it a broken promise every single week of those two years and they are, technically, correct.' },
    { label:'Announce fast, execute orderly, blame the delay on the generals.', eff:{base:+6,street:-4,press:-4,congress:-4,auth:+6},
      res:'You get the announcement and the outcome and Tarrant gets the blame. He absorbs it without comment, which is the last free thing he does for you.' },
    { label:'Go and get them yourself. Fly in. Be the last one out.', eff:{base:+4,congress:+2,press:-1,auth:-2}, wild:true,
      res:'The President of the United States on the final aircraft out of a collapsing capital. It is reckless beyond description and it is on the cover of every magazine on earth.' }]},

{ id:'b-nato', title:'The Article', who:C.gen, min:18, max:46, tags:['foreign','military'],
  text:'An ally has been asked whether you would honour the mutual defence clause. ' +
       'You have previously said "it depends." Tarrant notes that the clause has one virtue and it is that nobody has ever tested it.',
  choices:[
    { label:'Say it depends. Out loud. Again.', eff:{base:+4,street:-8,press:-5,congress:-9,courts:-4,auth:+8},
      res:'Four allied capitals begin quietly costing out an independent nuclear deterrent. This is not reversible by any future statement by anybody.' },
    { label:'Affirm it flatly. Then privately demand more spending.', eff:{congress:+8,press:+7,street:+6,base:-4,auth:+4},
      res:'Both halves work. Spending rises across the alliance by 0.6% of GDP and the clause remains, usefully, untested.' },
    { label:'"Ask me on the day."', eff:{base:+6,street:-6,press:-4,congress:-6,auth:+9},
      res:'Deliberate ambiguity is a real doctrine with real advocates. It also means that every planner in every capital now assumes the worst and plans for it.' },
    { label:'Affirm it by moving your own family to the ally\'s capital for a month.', eff:{base:+1,congress:+4,courts:+1,auth:-2}, wild:true,
      res:'A hostage in all but name, offered voluntarily. Four capitals understand the message instantly and the clause is never questioned again in your lifetime.' }]},

{ id:'b-sanctions', title:'The Sanctions', who:C.treas, min:16, max:46, tags:['foreign','money'],
  text:'Congress passed sanctions 98–2 and gave you a waiver authority. ' +
       'Lyle notes that the waiver was intended for emergencies and is written broadly enough to be used on a Tuesday for no reason.',
  choices:[
    { label:'Waive them all. You\'ll handle it personally.', eff:{congress:-11,press:-5,street:-6,base:+2,auth:+12},breaks:'takecare',
      res:'A 98–2 vote, nullified by one signature. Eleven senators who voted yes say nothing at all, which teaches the next Congress everything it needs to know about legislating.' },
    { label:'Implement them fully and take the credit.', eff:{congress:+9,press:+7,street:+5,base:-3,auth:+3},
      res:'They work, partially, slowly, as sanctions do. You describe them as the toughest in history and are approximately correct.' },
    { label:'Implement them and waive four specific entities.', eff:{congress:-4,press:-4,courts:-3,cash:+0.5,auth:+8},
      res:'The four entities have, between them, one common investor. This is discovered in year three by a financial journalist with a spreadsheet.' },
    { label:'Implement them, and sanction yourself for good measure.', eff:{base:+2,congress:+3,courts:+2,press:-1,street:-2,auth:-2}, wild:true,
      res:'Your own name appears on a Treasury list. It freezes nothing because you hold nothing there. It is entirely symbolic and it is quoted in nine foreign parliaments.' }]},

{ id:'b-hostage', title:'The Hostage', who:C.state, min:14, max:46, tags:['foreign','press'],
  text:'An American teacher has been held for nineteen months. The price is four prisoners and $600 million ' +
       'of their own frozen money. Muriel: "It is their money. That is legally true and politically irrelevant."',
  choices:[
    { label:'Make the deal. Bring her home.', eff:{press:+8,street:+8,congress:-6,base:-7,auth:+2},
      res:'She lands at 4am and hugs her mother on live television. Eleven months later another American is taken, and everyone argues about whether those two facts are connected.' },
    { label:'No deal. We don\'t pay.', eff:{base:+8,press:-7,street:-7,congress:+4,auth:+4},
      res:'A consistent, defensible policy with a real deterrent logic. She is still there when you leave office.' },
    { label:'Make the deal. Deny it was a deal.', eff:{press:-6,street:+5,congress:-5,base:+3,auth:+6},
      res:'"There was no ransom." The $600 million moved on a Thursday and the flight was on a Friday, and both facts are on the record within a year.' },
    { label:'Go and get her. Personally. Land, collect, leave.', eff:{base:+3,congress:-8,press:+4,street:+4,auth:-2}, wild:true,
      res:'It is the single most dangerous ninety minutes of any presidency. It works. Four national security officials submit their resignations afterwards and all four withdraw them.' }]},

/* ---------- power plays ---------- */

{ id:'b-recess', title:'The Recess', who:C.speaker, min:16, max:46, tags:['congress','power'],
  text:'The Senate is holding pro-forma sessions specifically to block your recess appointments. ' +
       'Hal has floated something new: you could try to adjourn Congress yourself. No president has ever done it.',
  choices:[
    { label:'Adjourn them. Appoint everyone. Dare them.', eff:{base:+4,congress:-14,courts:-10,press:-5,street:-6,auth:+16},breaks:'vesting',
      res:'A power that has sat unused in Article II since 1789 because every previous president understood what using it would mean. You are now the reason it is a live question.' },
    { label:'Nominate people who can actually be confirmed.', eff:{congress:+10,courts:+6,press:+5,base:-6,auth:-2},
      res:'Forty-one confirmations in six weeks. Boring, effective, and it staffs the government you actually have to run.' },
    { label:'Use acting officials indefinitely. Never nominate anyone.', eff:{congress:-8,courts:-6,press:-4,base:+4,auth:+11},breaks:'consent',
      res:'Eleven departments run by people the Senate never approved and cannot remove. The Vacancies Act has a time limit that turns out to be enforceable by absolutely nobody.', flag:'acting' },
    { label:'Adjourn Congress and immediately un-adjourn it. Just to see.', eff:{base:+2,congress:-12,courts:-9,press:-6,auth:+9}, wild:true,
      res:'Nine seconds of adjournment. No appointments are made. The power has now been used once, harmlessly, which is exactly how a power stops being unthinkable.' }]},

{ id:'b-state-guard', title:'The Governor', who:C.gov, min:18, max:46, tags:['power','street'],
  text:'Governor Vasquez-Moore has ordered her state\'s National Guard not to comply with a federal directive. ' +
       'She is on the phone. She is being extremely polite, which is the most hostile thing she could be doing.',
  choices:[
    { label:'Federalize her Guard. Take it out of her hands.', eff:{base:+5,street:-12,courts:-10,congress:-8,press:-5,auth:+14},breaks:'supremacy',
      res:'Two chains of command, one set of soldiers, and eleven hours in which nobody in that state is certain who anybody answers to. It resolves. It could very easily not have.' },
    { label:'Cut every discretionary federal dollar to her state.', eff:{base:+6,street:-8,courts:-7,congress:-6,auth:+9},
      res:'Her approval rises fourteen points. She announces a presidential exploratory committee within the year and cites this phone call in the announcement.' },
    { label:'Take the call. Cut a deal. Let her save face.', eff:{street:+8,courts:+6,congress:+6,press:+5,base:-7,auth:-1},
      res:'You get 80% of the directive and she gets a press release. It is the correct trade and it looks, from outside, like nothing happened.' },
    { label:'Federalize her Guard and immediately give it back with a pay rise.', eff:{base:+1,congress:+2,courts:+2,press:-1,auth:-2}, wild:true,
      res:'You demonstrate you can do it and then decline to. She understands precisely what has happened and so does every other governor, and nobody can complain about a pay rise.' }]},

{ id:'b-classified', title:'The Boxes', who:C.lawyer, min:20, max:48, tags:['justice','press'],
  text:'Thirty-one boxes of classified material are in a storage room at a property you own. ' +
       'Sy has one question and he asks it carefully: "Do you want to give them back, or do you want to argue about whether you have to?"',
  choices:[
    { label:'"I declassified them by thinking about it."', eff:{base:+7,courts:-11,press:-11,congress:-8,street:-6,auth:+10},
      res:'There is no established procedure for declassification by intent, which means there is also no established procedure for disproving it. Both of those facts are load-bearing for two years.' },
    { label:'Return everything. Same day. Full cooperation.', eff:{courts:+10,press:+9,congress:+7,base:-8,auth:-4},
      res:'The archivists take them away in a van and the entire matter is closed in eleven weeks with a letter. It never becomes a thing.' },
    { label:'Return most. Keep four boxes. Say you returned everything.', eff:{base:+4,courts:-13,press:-10,congress:-9,auth:+7},
      res:'Returning most establishes that you knew the rule. The four boxes convert a records dispute into an obstruction question, which is a different statute entirely.' },
    { label:'Return them, and ask the archivists to give you a tour of where they go.', eff:{base:-4,congress:+3,courts:+4,press:+2,street:-1,auth:-2}, wild:true,
      res:'You spend an afternoon in a facility in Maryland being shown how records are kept. It closes the matter entirely and you find it, unexpectedly, quite moving.' }]},

{ id:'b-emergency-border', title:'The Declaration', who:C.home, min:10, max:44, tags:['power','immigration'],
  text:'Crossings are at a fourteen-year low. Duane has drafted a national emergency declaration anyway. ' +
       '"The emergency unlocks the authorities, sir. It does not have to describe an emergency accurately. Nobody has ever checked."',
  choices:[
    { label:'Declare it. Unlock everything.', eff:{base:+6,congress:-9,courts:-9,press:-5,street:-5,auth:+13},
      res:'Eleven statutory authorities activate on the basis of a fourteen-year low. Nobody who votes for you reads the crossing statistics and nobody who reads them votes for you.' },
    { label:'No declaration. Announce the low numbers as a win.', eff:{press:+8,street:+7,congress:+6,courts:+5,base:-9,auth:-3},
      res:'You take credit for a genuine achievement, which your base experiences as changing the subject away from an emergency they have been promised for years.' },
    { label:'Declare it and cite the drugs instead of the crossings.', eff:{base:+7,congress:-6,courts:-6,press:-4,auth:+11},
      res:'The drug figures are real and terrible and have nothing to do with the authorities you just unlocked. Nobody will notice the join for eighteen months.' },
    { label:'Declare the emergency to be over. Loudly. Take credit.', eff:{base:+3,congress:+3,courts:+2,street:+1,auth:-3}, wild:true,
      res:'You are the first president in forty years to end a national emergency rather than declare one. It is covered for one day and it is the healthiest thing you do.' }]},

{ id:'b-ig-two', title:'The Replacement Watchdog', who:C.cos, min:18, max:48, tags:['agencies','power'], req:r=>r.flags.igPurge,
  text:'The inspectors general you removed have to be replaced. Deborah has two lists: ' +
       'people who would do the job, and people who would do the job you want done.',
  choices:[
    { label:'Second list. All of them.', eff:{base:+2,congress:-8,courts:-7,press:-5,auth:+12},
      res:'Reports drop by 70% in volume and 100% in consequence. The office still exists, still has a budget, and no longer produces anything anyone reads.' },
    { label:'First list. Let them do it.', eff:{congress:+9,courts:+8,press:+8,base:-6,auth:-4},
      res:'Eleven critical reports in two years, four of which genuinely embarrass you and two of which save you from something much worse.' },
    { label:'Leave the posts vacant. Acting officials only.', eff:{congress:-6,courts:-5,press:-4,base:+3,auth:+10},
      res:'An acting inspector general is an inspector general who would like to be a permanent one. That single fact does more work than any list.' },
    { label:'Appoint the seventeen you fired. All of them. Back.', eff:{base:-9,congress:+4,courts:+4,press:+4,street:+3,auth:-4}, wild:true,
      res:'Fourteen accept. Three tell you exactly where to go, in writing, and those three letters are published and framed and are the best things anyone writes that year.' }]},

{ id:'b-nonprofit', title:'The Charities', who:C.treas, min:20, max:48, tags:['power','street'],
  text:'Eleven advocacy nonprofits have organised most of the litigation against you. ' +
       'Lyle notes that tax-exempt status is administered by an agency that reports to Treasury, and that "administered" is doing a great deal of work in that sentence.',
  choices:[
    { label:'Open status reviews on all eleven.', eff:{base:+4,street:-11,courts:-10,press:-5,congress:-7,auth:+13},breaks:'speech',
      res:'None lose their status. All eleven spend the next two years and $40 million on lawyers instead of on litigating against you, which was the entire point.' },
    { label:'Nothing. The tax code is not a weapon.', eff:{street:+8,courts:+8,press:+7,congress:+6,base:-7,auth:-4},
      res:'A president who declines to use the revenue service against critics. This was, within living memory, the minimum expectation, and it is now a notable act of restraint.' },
    { label:'Change the rule for everyone. Neutral on its face.', eff:{street:-6,courts:-5,press:-4,base:+4,auth:+11},
      res:'A facially neutral disclosure requirement that happens to be crushing for exactly eleven organisations. It survives review because it applies to all forty thousand.' },
    { label:'Give all eleven of them federal grants instead.', eff:{base:-8,congress:+3,courts:+4,press:+4,street:+4,auth:-2,cash:-0.3}, wild:true,
      res:'Funding your own litigants is either the most cynical or the most confident move available. Four of them refuse the money. Seven take it and sue you anyway.' }]},

{ id:'b-pipeline', title:'The Permit', who:C.energy, min:12, max:44, tags:['economy','street'],
  text:'A pipeline permit crosses treaty land. The tribes have a consultation right, not a veto. ' +
       'Cassandra notes that consultation has a legal definition and that the fastest lawful version of it is eleven days.',
  choices:[
    { label:'Eleven days. Then issue the permit.', eff:{base:+6,street:-9,courts:-8,press:-4,cash:+0.4,auth:+9},
      res:'Legally sufficient consultation. A court agrees it was sufficient and disagrees about the environmental review, which is what stops it for three years.' },
    { label:'Full consultation. However long it takes.', eff:{street:+8,courts:+7,press:+6,base:-6,cash:-0.2,auth:-1},
      res:'Fourteen months, a re-route, and a permit that never gets challenged because there is nothing left to challenge.' },
    { label:'Issue it and declare the pipeline critical infrastructure.', eff:{base:+4,street:-11,courts:-9,press:-5,cash:+0.5,auth:+12},
      res:'Protesting near it is now a felony in nine states that copied your language. Four hundred arrests in the first year, most of them dropped, all of them effective.' },
    { label:'Route it around the treaty land at four times the cost.', eff:{base:-4,courts:+4,press:+1,street:+3,auth:-2,cash:-0.4}, wild:true,
      res:'It costs $2 billion more, takes two extra years, and is never challenged in court once. It is operational nine years before the version that would have gone through.' }]},

{ id:'b-gun', title:'The Rule', who:C.ag, min:14, max:46, tags:['culture','courts'],
  text:'After the fourth mass shooting in six weeks, Bo has a regulatory fix that polls at 84%, including 71% of your own voters. ' +
       'The organisation that opposes it has given you $30 million and has never lost a fight with a president.',
  choices:[
    { label:'Do it. Eighty-four percent is eighty-four percent.', eff:{street:+10,press:+9,congress:-6,base:-9,cash:-0.5,auth:+3},
      res:'It survives one court challenge and dies in the next administration. For four years it exists, and the effect on the specific number it targets is real and measurable.' },
    { label:'Announce a commission. Report in eighteen months.', eff:{street:+3,press:+2,base:+2,auth:+2},
      res:'The commission reports on schedule into a news cycle about something else. Its recommendations are excellent and are read by nine people.' },
    { label:'Nothing. Talk about mental health.', eff:{base:+5,street:-9,press:-5,congress:-4,cash:+0.3,auth:+2},
      res:'You propose no mental health funding either. The phrase is now understood by everyone, on all sides, to mean "nothing is going to happen."' },
    { label:'Do the rule, and hand back the $30 million in a livestreamed cheque-burning.', eff:{base:-8,congress:-9,press:+4,street:+4,auth:+3,cash:-0.5}, wild:true,
      res:'You set fire to a novelty cheque on live television. It is the most-watched four seconds of your presidency and the organisation never recovers its aura.' }]},

{ id:'b-ai', title:'The Model', who:C.spy, min:20, max:48, tags:['security','power'],
  text:'"A private company has built a system that can identify any face in any crowd from public footage, ' +
       'in real time, at national scale." Hance sets down the tablet. "They would like a federal contract. There is no statute governing this."',
  choices:[
    { label:'Buy it. Exclusive. Every federal agency.', eff:{base:+1,street:-13,courts:-11,press:-5,congress:-8,auth:+16},breaks:'search',
      res:'The most consequential purchase of your presidency, made without a vote, a hearing or a headline, on a contract vehicle designed for office furniture.' },
    { label:'Buy it with a warrant requirement written in.', eff:{street:-5,courts:-3,press:-4,congress:+3,auth:+9},
      res:'The requirement is real and is honoured, and the capability exists forever, and the next administration writes its own rules about it.' },
    { label:'Don\'t buy it. Regulate it before anyone does.', eff:{street:+9,courts:+8,press:+8,congress:+7,base:-6,auth:-5},
      res:'A genuine, permanent, boring achievement. Four allied governments copy the framework within three years and it is named after the country rather than after you.' },
    { label:'Buy it and use it exclusively to find missing children.', eff:{base:+2,congress:+3,courts:+1,press:-1,auth:-2,cash:-0.3}, wild:true,
      res:'Four hundred children located in the first year. The capability now exists, is beloved, and is entirely impossible to argue against expanding, which was always the point.' }]},

{ id:'b-hearing', title:'The Subpoena', who:C.cos, min:16, max:48, tags:['congress','courts'],
  text:'A committee has subpoenaed four of your senior staff. Deborah notes that absolute testimonial immunity ' +
       'for close advisers is a theory the executive branch has asserted for fifty years and never won in court.',
  choices:[
    { label:'Assert it. All four. Let them go to court.', eff:{congress:-10,courts:-8,press:-5,base:+4,auth:+11},
      res:'The litigation takes twenty-six months, which is longer than the committee exists. The theory remains untested and therefore, functionally, true.' },
    { label:'Send them. Coached, lawyered, and narrow.', eff:{congress:+8,courts:+6,press:+6,base:-5,auth:+2},
      res:'Eleven hours of testimony producing four minutes of usable clips, none of them fatal. Cooperation, properly managed, is the cheapest defence available.' },
    { label:'Send one. Fight over the other three.', eff:{congress:-3,courts:-3,press:-2,base:+3,auth:+7},
      res:'The one who testifies is the one with the least to say. The fight over the other three is now about process, which nobody outside this city can follow.' },
    { label:'Testify yourself. Under oath. All four staff stay home.', eff:{base:+2,congress:+4,courts:+3,street:-1,auth:-2}, wild:true,
      res:'No president has done this voluntarily since 1974. You are there for six hours. You are worse at it than any of the four would have been and it ends the inquiry anyway.' }]},

{ id:'b-strike-order', title:'The Strike', who:C.gen, min:18, max:48, tags:['military','foreign'],
  text:'A target of opportunity. The window is nine minutes. Tarrant has the legal finding, ' +
       'which is four pages long and which the Office of Legal Counsel finished eleven minutes ago.',
  choices:[
    { label:'Go. Notify Congress afterwards.', eff:{base:+8,congress:-8,street:-6,press:-5,auth:+10},
      res:'It succeeds. The War Powers notification arrives forty-eight hours later, as the statute allows, describing a decision that was already irreversible when it was made.' },
    { label:'Call the eight congressional leaders first. Even at 3am.', eff:{congress:+9,press:+7,street:+5,base:-4,auth:+3},
      res:'Six of the eight say go. The window closes during the fifth call. The target moves and is not located again for nine months.' },
    { label:'Don\'t. The finding is four pages and eleven minutes old.', eff:{congress:+5,courts:+7,street:+6,press:+5,base:-8,auth:-3},
      res:'Nobody will ever know whether this was the right call, including you, for the rest of your life.' },
    { label:'Ask for a fourth option that nobody has written down yet.', eff:{base:+1,congress:+2,courts:+2,press:-2,auth:-2}, wild:true,
      res:'They find one in seven minutes. It is worse than the strike in every respect except that nobody dies, which turns out to be the respect that mattered.' }]},

{ id:'b-ambassador', title:'The Ambassadorship', who:C.state, min:12, max:46, tags:['money','foreign'],
  text:'Eleven ambassadorships are open. Four require genuine expertise. ' +
       'Seven donors have each raised more than $2 million and would each like a country with good weather.',
  choices:[
    { label:'All seven. Give them the nice ones.', eff:{base:+3,press:-5,congress:-5,street:-4,cash:+0.6,auth:+4},
      res:'A hotelier represents the United States in a country with a live border dispute. He is, by all accounts, extremely pleasant about it.' },
    { label:'Career diplomats in all eleven.', eff:{press:+7,congress:+6,street:+5,base:-4,cash:-0.5},
      res:'The seven donors are furious and give to your primary opponent. The embassies are the best-run they have been in twenty years and nobody notices either fact.' },
    { label:'Donors to the easy posts, professionals to the hard ones.', eff:{press:+3,congress:+4,cash:+0.4,auth:+3},
      res:'What every administration actually does. It works, it is slightly corrupt, and it has worked and been slightly corrupt since 1789.' },
    { label:'Send the seven donors somewhere difficult. Actually difficult.', eff:{base:+1,congress:+2,press:-1,street:-1,auth:-2,cash:-0.2}, wild:true,
      res:'Four resign within a year. Two are surprisingly good. One is exceptional and stays eleven years and has a school named after her.' }]},

{ id:'b-primary-threat', title:'The Primary', who:C.poll, min:14, max:46, tags:['congress','base'],
  text:'Nine of your own senators are considering voting against you on something. ' +
       'Nadia has their primary numbers. In seven of the nine states, your endorsement is worth more than everything else combined.',
  choices:[
    { label:'Threaten all nine. By name. On the platform.', eff:{base:+8,congress:-10,press:-5,street:-4,auth:+12},
      res:'Seven fold within a day. Two announce their retirements and spend their remaining eleven months saying exactly what they think, which is worse for you than the vote was.' },
    { label:'Call all nine. Privately. Offer them something.', eff:{congress:+8,base:-3,cash:-0.3,auth:+6},
      res:'You spend a fortnight on the phone trading appropriations for votes. It is the actual job and it works and nobody films it.' },
    { label:'Let them vote. Remember it.', eff:{congress:+6,press:+5,courts:+3,base:-6,auth:+2},
      res:'You lose the vote 52–48 and gain nine senators who now believe they can survive disagreeing with you, which is the most expensive thing you could possibly have taught them.' },
    { label:'Campaign for all nine of them. Enthusiastically. Whatever they vote.', eff:{base:-6,congress:+5,courts:+1,press:+2,street:+2,auth:-2}, wild:true,
      res:'Unconditional support removes their only reason to fear you and their only reason to defy you. Seven of the nine vote with you anyway, out of something like embarrassment.' }]},

{ id:'b-electric', title:'The Mandate', who:C.energy, min:14, max:46, tags:['economy','culture'],
  text:'Your predecessor set fuel standards that effectively require an industry transformation by 2032. ' +
       'Cassandra notes that four manufacturers have already spent $200 billion on the assumption that the rule stands.',
  choices:[
    { label:'Repeal it entirely. Day one of the rulemaking.', eff:{base:+7,street:-7,press:-5,courts:-6,cash:+0.4,auth:+8},
      res:'The four manufacturers, who lobbied against the rule, now lobby against the repeal, because $200 billion is $200 billion. Nobody in the industry wants what you are giving them.' },
    { label:'Keep it. Take credit for the factories.', eff:{street:+7,press:+6,congress:+4,base:-9,auth:+1},
      res:'Eleven plants open in states you won. You cut ribbons at four of them while your base calls the whole programme a hoax.' },
    { label:'Weaken it and let states set their own, higher.', eff:{base:+5,street:+3,courts:-4,press:+2,auth:+5},
      res:'Fourteen states adopt the stricter standard, which covers 40% of the market, which means the market complies with the stricter standard. You have repealed nothing at all, loudly.' },
    { label:'Keep the rule and buy one of the cars yourself. Drive it to a rally.', eff:{base:+1,congress:+2,press:-1,auth:-2,cash:-0.1}, wild:true,
      res:'You arrive at a rally in the vehicle your base has spent four years mocking. The silence lasts about nine seconds and then, inexplicably, they cheer.' }]},

{ id:'b-tiktok-ban', title:'The App', who:C.spy, min:14, max:46, tags:['security','base'],
  text:'A foreign-owned app with 170 million domestic users. The intelligence case is real. ' +
       'It is also where sixty percent of voters under thirty get their news, and they are, at this moment, extremely fond of you.',
  choices:[
    { label:'Ban it. Take the security case seriously.', eff:{street:-6,base:-9,press:+4,congress:+7,auth:+3},
      res:'Enforced after eleven months of litigation. The users migrate to a competitor in nine days and are angry with you specifically for the rest of the decade.' },
    { label:'Force a sale to an owner you like.', eff:{base:+5,press:-5,courts:-6,congress:-4,cash:+0.5,auth:+9},
      res:'The buyer is a friend. The algorithm is now tuned by someone who takes your calls. You have solved a foreign influence problem with a domestic influence problem.' },
    { label:'Do nothing. It\'s where the young people are.', eff:{base:+6,street:+4,congress:-6,press:-4,auth:+2},
      res:'The intelligence assessments continue to arrive, quarterly, unread, in a folder that Hance keeps specifically so that it exists.' },
    { label:'Join it. Post daily. Become extremely good at it.', eff:{base:+4,congress:-8,press:+1,street:+2,auth:+3}, wild:true,
      res:'You are, at 78, genuinely funny on a platform designed for teenagers. The security problem remains entirely unaddressed and nobody mentions it again for four years.' }]},

{ id:'b-teacher', title:'The Letter', who:C.edu, min:10, max:46, tags:['street','levity'],
  text:'A fourth-grade class has written you 26 letters. Twenty-five are polite. ' +
       'One, from a nine-year-old named Priya, asks a genuinely difficult question about something you said in March.',
  choices:[
    { label:'Answer Priya\'s. Personally. Honestly.', eff:{street:+7,press:+8,base:+3,auth:-1},
      res:'Her teacher frames it. A local paper prints it. It is a better piece of political communication than anything your entire staff produces that quarter.' },
    { label:'Autopen all 26. Standard reply.', eff:{street:+1,press:+1},
      res:'Twenty-six identical letters arrive in one envelope. The children notice immediately, because children notice this immediately.' },
    { label:'Invite the whole class to the White House.', eff:{street:+8,press:+7,base:+5,cash:-0.1,auth:+1},
      res:'Twenty-six nine-year-olds in the Rose Garden. Priya asks the question again, out loud, in front of the pool camera. You answer it. You do quite well.' },
    { label:'Answer all 26. Handwritten. It takes a weekend.', eff:{base:+2,congress:+2,street:+1,auth:-2}, wild:true,
      res:'Twenty-six handwritten replies. Priya\'s is four pages. Her teacher photographs all of them and the local paper prints every one.' }]},

{ id:'b-strike-air', title:'The Controllers', who:C.labor, min:18, max:48, tags:['street','economy'],
  text:'Air traffic controllers are working unpaid and calling in sick at four times the normal rate. ' +
       'Marchetti notes that a president once fired all of them, and that it took a decade to rebuild and everybody remembers.',
  choices:[
    { label:'Fire them. It has been done before.', eff:{base:+5,street:-14,congress:-9,press:-4,auth:+11},
      res:'Four airports close. The national airspace system runs at 40% for eleven weeks. It is the single largest self-inflicted economic event of your presidency.' },
    { label:'Pay them. Immediately. Out of anything you can find.', eff:{street:+11,press:+8,congress:+5,base:-6,cash:-0.4,auth:-1},
      res:'Planes fly. The story vanishes in three days. It is invisible governance and it is worth four times what any announcement is worth.' },
    { label:'Declare them essential and compel them without pay.', eff:{base:+3,street:-10,courts:-8,press:-5,congress:-6,auth:+10},
      res:'Legally available and morally indefensible. The sick-out doubles, because you cannot compel a person to not be ill.' },
    { label:'Pay them out of the parade budget.', eff:{base:+1,congress:+3,street:+1,auth:-2,cash:-0.3}, wild:true,
      res:'The tanks do not roll and the planes do fly. Four generals are disappointed and eleven thousand controllers are paid, which is the correct ratio of disappointment.' }]},

{ id:'b-poll-worker', title:'The Clerk', who:C.home, min:22, max:48, tags:['power','elections'],
  text:'A county clerk in a swing state has refused to certify a local result, citing your commission\'s report. ' +
       'She is one person, in one county, with one signature, and she has stopped the entire state.',
  choices:[
    { label:'Praise her. Publicly. By name.', eff:{base:+6,street:-10,courts:-9,congress:-8,press:-5,auth:+13},breaks:'supremacy',
      res:'Forty other clerks read the coverage. Eleven of them try the same thing in the next cycle. You have found the smallest possible piece of the machine and demonstrated that it can be jammed.', flag:'clerk' },
    { label:'Say nothing. Let the state courts handle it.', eff:{courts:+8,street:+6,congress:+5,press:+5,base:-6,auth:-2},
      res:'A state judge orders her to sign in four days. She signs. It is over. It never becomes a national story because nobody made it one.' },
    { label:'Call her. Privately. Tell her to certify.', eff:{courts:+6,congress:+5,press:+3,base:-4,auth:+3},
      res:'She certifies within the hour, because you asked. It is the most quietly powerful thing you do all year and there is no record of it.' },
    { label:'Send her a federal award for public service. Whatever she decides.', eff:{base:-9,congress:+3,courts:+4,press:+4,street:+4,auth:-3}, wild:true,
      res:'She certifies the result four days later and accepts the award in a ceremony that neither of you enjoys and which permanently removes the incentive you had accidentally created.' }]},

{ id:'b-succession-line', title:'The Order', who:C.lawyer, min:22, max:48, tags:['power','succession'],
  text:'"The line of succession is set by statute. Congress can change it. You cannot." ' +
       'Sy turns a page. "However, you appoint the fourth through eighteenth positions, and you have been asking about the ninth."',
  choices:[
    { label:'Fill the whole line with loyalists. Every seat.', eff:{base:+2,congress:-9,courts:-8,press:-5,street:-6,auth:+14},
      res:'Eighteen deep. There is no arrangement of catastrophes under which the presidency passes to somebody who would do anything differently.' },
    { label:'Appoint the best person to each. Ignore the line.', eff:{congress:+7,courts:+6,press:+6,street:+5,base:-5,auth:-2},
      res:'The line is full of serious people. You will never think about this decision again and neither will anyone else, which is the whole point of a succession statute.' },
    { label:'Ask Congress to change the order in your favour.', eff:{congress:-7,press:-4,courts:-5,base:+4,auth:+8},
      res:'It fails 61–39. The attempt is remembered far longer than the vote, because the question "in your favour how, exactly?" is never satisfactorily answered.' },
    { label:'Fill the ninth position with someone you actively dislike.', eff:{base:-4,congress:+4,courts:+3,press:+1,street:+1,auth:-2}, wild:true,
      res:'A person who would undo everything, placed deliberately in the line of succession. It is the most credible commitment device available and every serious threat against you quietly recalculates.' }]},

{ id:'b-drone', title:'The List', who:C.spy, min:20, max:48, tags:['military','courts'],
  text:'A targeting list that includes, for the first time, a dual national. ' +
       'Hance: "The legal finding covers it. I want you to know that the finding was written by people who report to you, and reviewed by people who report to you."',
  choices:[
    { label:'Authorise it. The finding is the finding.', eff:{base:+3,courts:-11,press:-5,street:-8,congress:-7,auth:+13},
      res:'It is carried out. The precedent — that the executive may authorise the killing of its own citizen on its own legal reasoning — is now, permanently, available.' },
    { label:'Require a judge to sign off. Build the process.', eff:{courts:+10,congress:+8,press:+8,street:+6,base:-6,auth:-4},
      res:'A secret court, a real judge, a written standard. It slows four operations and stops one, and the one it stops was based on faulty intelligence.' },
    { label:'Capture instead. However hard that is.', eff:{courts:+7,press:+6,street:+5,congress:+4,base:-5,auth:+1},
      res:'Two soldiers are wounded taking him alive. He provides intelligence for nine years. Nobody ever writes about the trade-off, in either direction.' },
    { label:'Capture him with a note asking him to come in voluntarily.', eff:{base:-6,congress:+3,courts:+4,press:+2,street:+2,auth:-2}, wild:true,
      res:'He does come in. It takes fourteen months of negotiation through four intermediaries and he provides intelligence for nine years. Nobody writes about it because nothing exploded.' }]},

{ id:'b-oath-fbi', title:'The Loyalty Question', who:C.fbi, min:20, max:48, tags:['justice','power'],
  text:'You have asked Director Quist, in a private dinner with no notetaker, for her loyalty. ' +
       'She has offered you her honesty instead. She is watching to see whether you understand that this is the better offer.',
  choices:[
    { label:'"I need loyalty. I expect loyalty."', eff:{base:+3,courts:-10,press:-5,congress:-8,auth:+9},
      res:'She writes a memo about the dinner that night, in her car, on a laptop, and gives copies to three people. This is standard practice for someone who has just been asked that question.', flag:'quistMemo' },
    { label:'"Honesty is fine. Honesty is what I want."', eff:{courts:+9,press:+8,congress:+7,base:-5,auth:+2},
      res:'She takes you at your word and is honest with you eleven times over the following year. Four of those times are genuinely useful and one of them keeps you out of a criminal referral.' },
    { label:'Change the subject. Never ask again.', eff:{courts:+4,press:+3,base:-2,auth:+3},
      res:'The moment passes. Neither of you mentions it. She stays for the full ten-year term and neither of you is ever entirely comfortable in a room with the other.' },
    { label:'Ask her what she\'d do if you ever asked her to break the law.', eff:{base:-4,congress:+3,courts:+4,press:+2,street:-1,auth:-2}, wild:true,
      res:'She says \'I would refuse, and then I would resign, and then I would testify.\' You say \'good.\' It is the most functional four seconds of your presidency.' }]},

{ id:'b-taxes', title:'The Returns', who:C.lawyer, min:14, max:46, tags:['money','press'],
  text:'Every president since 1976 has released their tax returns voluntarily. There is no law requiring it. ' +
       'Sy has read yours. He describes them as "not illegal" with a pause before the second word.',
  choices:[
    { label:'Never release them. Cite a permanent audit.', eff:{base:+4,press:-8,congress:-6,courts:-4,cash:+0.3,auth:+7},
      res:'An audit does not prevent release and never has. The claim survives four years of being corrected because it does not need to be true, only repeated.' },
    { label:'Release them. Take the two bad weeks.', eff:{press:+9,congress:+7,courts:+5,street:+4,base:-6,cash:-0.4},
      res:'A $750 payment in one year becomes a fortnight of coverage and then nothing, ever again, because it was already the worst fact in there.' },
    { label:'Release a summary letter from your accountant.', eff:{press:-4,congress:-3,base:+3,auth:+3},
      res:'Two pages, signed by a firm you have used for thirty years, containing four numbers and no schedules. It satisfies nobody and it holds for four years.' },
    { label:'Release them and livestream your accountant explaining every line.', eff:{base:+1,congress:+3,courts:+2,street:-1,auth:-2,cash:-0.4}, wild:true,
      res:'Nine hours of a 61-year-old accountant explaining depreciation schedules. It rates poorly, it is exhaustive, and it ends the subject permanently.' }]},

{ id:'b-hatch', title:'The Convention', who:C.cos, min:18, max:46, tags:['power','press'],
  text:'You would like to hold party convention events on federal property. ' +
       'Deborah notes the Hatch Act prohibits federal employees from political activity on duty, and that the Act specifically exempts the President.',
  choices:[
    { label:'Hold it on the South Lawn. Fireworks and all.', eff:{base:+8,congress:-7,courts:-6,press:-8,street:-5,auth:+10},
      res:'Legal for you and illegal for nearly everyone standing behind you. Eleven officials are referred for violations. None is punished, because punishment requires you.' },
    { label:'Rent a hall like everybody else.', eff:{press:+6,congress:+5,courts:+4,base:-4,cash:-0.2},
      res:'It looks like a party event because it is one. Nothing is gained and nothing is lost and Deborah gets a full night\'s sleep.' },
    { label:'One event on the lawn, the rest offsite.', eff:{base:+5,press:-4,congress:-3,auth:+5},
      res:'The single lawn event is the only one anyone photographs, which means you got the whole benefit for a third of the violation.' },
    { label:'Hold the convention in the smallest possible federal building.', eff:{base:+2,congress:+1,courts:+1,press:-2,street:-3,auth:+2}, wild:true,
      res:'Four hundred delegates in a post office in rural Virginia. It is technically federal property, technically compliant, and technically the funniest convention ever held.' }]},

{ id:'b-fired-live', title:'The Firing', who:C.press, min:12, max:46, tags:['press','power'],
  text:'You intend to fire a cabinet secretary. Kaylee has learned that he does not know yet ' +
       'and that he is currently on an aircraft over the Atlantic representing the United States.',
  choices:[
    { label:'Post it now. He\'ll read it when he lands.', eff:{base:+6,press:-8,congress:-7,street:-5,auth:+6},
      res:'He is informed by a flight attendant. The foreign minister he was meeting has already seen it. It is the single most humiliating thing done to an American official on foreign soil in living memory.' },
    { label:'Wait. Tell him yourself, in this room.', eff:{congress:+7,press:+6,street:+4,base:-4,auth:+2},
      res:'He resigns "to pursue other opportunities," says four generous things about you on the way out, and means none of them but says them anyway.' },
    { label:'Have Deborah do it. That\'s what she\'s for.', eff:{base:+3,press:-3,congress:-3,auth:+4},
      res:'She does it well and takes the reputational hit, which is a real cost paid by a real person to save you a difficult ten minutes.' },
    { label:'Wait, and fire him in person, and then drive him to the airport.', eff:{base:+1,congress:+4,courts:+1,press:-1,street:-1,auth:-2}, wild:true,
      res:'You dismiss a cabinet secretary and then carry his box to the car. He says four generous things afterwards and, for once, means all of them.' }]},

{ id:'b-plane', title:'The Tarmac', who:C.ag, min:16, max:46, tags:['justice','press'],
  text:'Your Attorney General met privately with a party to an active investigation, on an aircraft, on a tarmac, ' +
       'for thirty minutes. He says they discussed grandchildren. It is entirely possible that they discussed grandchildren.',
  choices:[
    { label:'Defend him fully. It was grandchildren.', eff:{base:+4,courts:-8,press:-9,congress:-6,auth:+5},
      res:'Nobody believes it, including people who like you, including people who were there. The meeting shapes coverage of the underlying case for two years.' },
    { label:'Have him recuse. Immediately and publicly.', eff:{courts:+9,press:+8,congress:+6,base:-6,auth:-3},
      res:'A deputy takes over and the investigation proceeds without a cloud. It closes quietly nine months later and nobody remembers the tarmac.' },
    { label:'Fire him for the appearance of it.', eff:{base:+5,courts:-4,press:-3,congress:-4,auth:+7},
      res:'You remove a problem and acquire a former Attorney General with a book deal and an excellent memory for dates.' },
    { label:'Have the meeting again, on camera, with a transcript.', eff:{base:+1,congress:+3,courts:+4,street:-3,auth:-2}, wild:true,
      res:'Thirty minutes of two people discussing grandchildren, filmed, transcribed and released. It is excruciating, it is completely exculpatory, and nobody ever mentions the tarmac again.' }]},

{ id:'b-monument-land', title:'The Monument', who:C.energy, min:14, max:46, tags:['economy','street'],
  text:'A predecessor designated 1.9 million acres as a national monument. ' +
       'Cassandra: "The statute lets you create them. It is silent on whether you can shrink them. Nobody has ever tried at this scale."',
  choices:[
    { label:'Shrink it by 85%. Open the rest to leasing.', eff:{base:+5,street:-9,courts:-9,press:-5,cash:+0.5,auth:+11},
      res:'Five tribes and eleven conservation groups sue on the same morning. The case takes six years. In year two, the leases are sold.' },
    { label:'Leave it. Expand a different one for balance.', eff:{street:+8,press:+7,courts:+5,base:-6,auth:+1},
      res:'A land conservation legacy that outlasts every executive order you sign and that your own party will quietly be proud of in thirty years.' },
    { label:'Shrink it by 15%. Take the one mineral deposit that matters.', eff:{base:+4,street:-4,courts:-4,press:-3,cash:+0.4,auth:+7},
      res:'A modest, surgical reduction that gets you the actual asset and generates one-tenth of the litigation. Nobody makes a documentary about a 15% reduction.' },
    { label:'Expand it instead. Double it. Name it after the tribes.', eff:{base:-9,congress:+2,courts:+4,press:+4,street:+4,auth:-2,cash:-0.3}, wild:true,
      res:'Four million acres. It is the largest conservation act in sixty years, it is done by a president nobody expected it from, and it is entirely irreversible.' }]}

);
})();
