/* ============================================================
   PACK K, THE FAMILY BUSINESS  (any month)
   Nepotism, the adult children with jobs and clearances, the
   son-in-law's peace plan, the branded hotels and resorts, the
   trust that is not blind, and foreign money renting the
   ballroom. Original satire in the house voice, INSPIRED BY THE
   GENRE, NEVER COPIED FROM ANY REAL PERSON. Fictional stand-ins
   only; real countries, invented leaders, invented family.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE CLEARANCE ══════════════ */

{ id:'k-security-clearance', title:'The Clearance', who:C.spy, min:2, max:30, tags:['family','loyalty'],
  src:'a background investigation flagging a relative for a top-level clearance',
  text:'Errol has the file on his lap like it might go off. "Your son failed the background check twice, sir. ' +
       'Foreign business partners, undisclosed loans, a company in Cathay nobody can quite explain. The analysts ' +
       'recommend denial. I recommend you not ask me to override it a third time."',
  choices:[
    { label:'Override it personally. He gets the badge.', eff:{base:+7,courts:-4,congress:-3,street:-2,auth:+3},
      res:'You sign the waiver yourself. Trent Jr. gets a badge, a desk, and a security detail that now has to pretend not to notice the Cathay calls.' },
    { label:'Let the denial stand. He works from home.', eff:{base:-4,courts:+5,congress:+3,auth:+1},
      res:'The system works exactly as designed, on your own son, and it stings in a way you were not prepared for. He takes it fine, publicly.' },
    { label:'Create him a new title with no clearance required.', eff:{base:+4,press:-3,courts:-2,auth:+2},
      res:'"Special Adviser for Family Engagement" needs no badge, no file, no questions. He keeps the office. Nobody can say what the office does.' },
    { label:'Send him on an unrelated goodwill tour instead.', eff:{base:-4,press:-4,congress:-5,street:-2,auth:-2}, wild:true,
      res:'You ship your son to three countries, on the travel budget, to hand out certificates and cut ribbons. Two senators ask, in writing, what exactly he is promoting. It solves nothing about Cathay.' }]},

/* ══════════════ THE PEACE PLAN ══════════════ */

{ id:'k-son-in-law-plan', title:'The Peace Plan', who:C.state, min:6, max:46, tags:['family','diplomacy'],
  src:'a family member handed a sweeping, informal diplomatic portfolio',
  text:'Muriel chooses her words like they are live wires. "Your son-in-law has a peace plan, sir. Thirty-eight ' +
       'pages, no career diplomat consulted, and a real estate valuation appendix that should not, structurally, ' +
       'be part of a peace plan. Both governments are asking who he actually is."',
  choices:[
    { label:'Announce it from the podium yourself. Today.', eff:{base:+8,congress:-4,courts:-2,auth:+3},
      res:'You unveil a peace plan with a real estate appendix as though that were normal. Two foreign ministries request, in writing, to speak with an adult.' },
    { label:'Route it through State first. Quietly edit page nine.', eff:{base:-3,press:+4,congress:+4,auth:+1},
      res:'Muriel\'s staff spends a weekend removing the property valuations. What remains is thin but at least it will not be laughed at in translation.' },
    { label:'Give him an ambassador title to match the swagger.', eff:{base:+5,congress:-4,courts:-2,auth:+2},
      res:'A title with no confirmation hearing and a portfolio the size of a hemisphere. The career service updates its org chart and says nothing else.' },
    { label:'Send the plan to a university think tank for peer review.', eff:{base:-5,press:-4,congress:-3,street:-3,auth:-4}, wild:true,
      res:'Six professors annotate it for free, live, on a panel that airs opposite the evening news. The appendix on real estate gets a footnote reading, in full, "see conflict of interest, above." He is not thrilled, and neither is anyone else.' }]},

/* ══════════════ THE TRUST ══════════════ */

{ id:'k-blind-trust', title:'The Trust', who:C.ethics, min:1, max:48, tags:['family','money'],
  src:'a management arrangement for a family business that stops short of an actual blind trust',
  text:'Miriam lays out the org chart with the patience of a woman who has done this before. "It is called a trust, ' +
       'sir, and your children run it, and you can call them any time you like. A blind trust does not work that ' +
       'way. This is, at best, a trust wearing sunglasses."',
  choices:[
    { label:'Keep it as is. It is legal, technically.', eff:{base:+5,courts:-4,press:-3,congress:-2,auth:+2},
      res:'The arrangement survives on a technicality Miriam personally hates. The children run the business and you run the country and everyone insists the two never speak.' },
    { label:'Divest for real. Sell the whole portfolio.', eff:{base:-6,cash:-0.4,courts:+5,press:+5,congress:+4,auth:0},
      res:'You actually sell it. The family is furious, the ethics office is stunned into silence, and a reporter has to be told twice before she believes it.' },
    { label:'Rename it the "Patriot Trust." Change nothing else.', eff:{base:+4,press:-3,courts:-2,auth:+1},
      res:'A new name, the same sunglasses. Miriam updates one document and requests, formally, to be reassigned.' },
    { label:'Put the trust in the family dog\'s name.', eff:{base:+6,press:-3,courts:-4,auth:+1}, wild:true,
      res:'A cocker spaniel is now, on paper, a holding company. The dog cannot be deposed, which several lawyers point out is the entire design.' }]},

/* ══════════════ THE HOTEL BLOCK ══════════════ */

{ id:'k-hotel-block', title:'The Block Booking', who:C.usher, min:4, max:44, tags:['family','money'],
  src:'a foreign delegation booking out a family-branded property during an official visit',
  text:'Alvin brings the reservation printout like a subpoena. "The Qadiran delegation has booked forty-one rooms ' +
       'at the family hotel for a trip with, officially, six delegates, sir. They also bought out the spa. Nobody ' +
       'is scheduled to use the spa."',
  choices:[
    { label:'Thank them publicly for their business.', eff:{base:+6,courts:-4,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'You praise the "friendship" in a toast, on camera, next to a bill for a spa nobody used. Even the base goes quiet for a second.' },
    { label:'Refuse the booking. Refund the deposit.', eff:{base:-4,courts:+5,press:+4,cash:-0.1,auth:+1},
      res:'The family business turns down real money to avoid the appearance of a bribe, which is itself the closest thing to proof the appearance was accurate.' },
    { label:'Have the delegation move to a rival hotel instead.', eff:{base:+3,press:-3,congress:-2,cash:-0.2,auth:+1},
      res:'You solve the optics problem by costing your own family real money and telling them it was strategy. They do not entirely believe you.' },
    { label:'Comp the delegation\'s rooms. Call it diplomacy.', eff:{base:+5,press:-4,courts:-5,congress:-3,cash:-0.2,auth:+1}, wild:true,
      res:'You give away forty-one free rooms to a foreign government, which is somehow a worse headline than charging them, and costs actual money to boot.' }]},

/* ══════════════ THE BALLROOM ══════════════ */

{ id:'k-ballroom-rental', title:'The Ballroom Rental', who:C.state, min:8, max:48, tags:['family','money','diplomacy'],
  src:'a foreign lobbying arm renting a family venue for an event timed to a policy decision',
  text:'Muriel slides across a rental invoice with a foreign consulate\'s letterhead. "They booked the ballroom for ' +
       'a gala two days before your decision on their trade case, sir. Sixty thousand dollars, paid in full, ' +
       'itemised as \'venue.\' It is technically just a rental."',
  choices:[
    { label:'Take the meeting. Take the money. Decide later.', eff:{base:+6,courts:-5,press:-4,congress:-2,cash:+0.2,auth:+2},
      res:'The gala goes ahead, the check clears, and the trade decision lands two weeks later in their favour. Nobody can prove a sequence is a bribe.' },
    { label:'Have the venue office decline the booking.', eff:{base:-4,courts:+5,press:+4,cash:-0.1,auth:+1},
      res:'The ballroom stays dark that Friday. It costs the family a booking fee and buys everyone else a full night\'s sleep.' },
    { label:'Take the booking, recuse yourself from the case on paper.', eff:{base:+3,press:-3,courts:-3,congress:-2,cash:+0.2,auth:+1},
      res:'A recusal memo is filed the same afternoon the check clears. Both facts are true and sit in the same folder, which is somehow worse than either alone.' },
    { label:'Open the ballroom to the public that same night instead.', eff:{base:-4,press:-3,congress:-4,courts:-3,street:+3,cash:-0.3,auth:-3}, wild:true,
      res:'You cancel the gala and let three hundred schoolchildren tour the chandeliers for free, live on local news. The consulate calls it a snub. Congress calls it grandstanding on the public dime.' }]},

/* ══════════════ THE GOLF SUMMIT ══════════════ */

{ id:'k-branded-golf', title:'The Golf Summit', who:C.state, min:10, max:46, tags:['family','diplomacy','money'],
  src:'a bilateral summit relocated to a family-owned resort property',
  text:'Muriel has the venue memo. "The Northmark delegation prefers your golf resort, sir. Room rate is set by ' +
       'the family, catering is set by the family, and the greens fees for the delegation\'s free afternoon are, ' +
       'also, set by the family. The summit itself will take four hours."',
  choices:[
    { label:'Host it there. Charge the standard rate.', eff:{base:+6,courts:-5,press:-4,congress:-3,cash:+0.4,auth:+3},
      res:'The summit happens on your own greens and the invoice goes to the federal government. Somewhere an auditor starts a very long spreadsheet.' },
    { label:'Move the summit to a neutral government facility.', eff:{base:-4,courts:+5,press:+4,congress:+3,auth:+1},
      res:'A conference room with bad coffee and no revenue stream. The delegation is mildly disappointed. The audit that would have happened, does not.' },
    { label:'Host it there, waive the fee, call it a gift to the taxpayer.', eff:{base:+4,press:-4,courts:-4,cash:-0.1,auth:+1},
      res:'Free venue, same conflict, better press release. The family absorbs the loss and calls it a donation on next year\'s taxes.' },
    { label:'Hold the whole summit on the eighteenth green, live.', eff:{base:+7,press:-4,courts:-3,congress:-2,street:-2,cash:+0.2,auth:+2}, wild:true,
      res:'Two heads of state finalize a trade framework between putts, on television, sponsored, in effect, by your own scorecard. It is a lot to explain to historians.' }]},

/* ══════════════ THE DAUGHTER\'S BRAND ══════════════ */

{ id:'k-daughter-brand', title:'The Trademark', who:C.girl, min:5, max:40, tags:['family','money','diplomacy'],
  src:'a foreign government fast-tracking trademark approvals for a relative\'s consumer brand',
  text:'Ivy is beaming, and holding a folder. "Cathay approved eleven trademarks for the jewelry line in one week, ' +
       'Dad. Usually that takes years. It happened the same week you softened the export tariff. I know how that ' +
       'sounds. It is also just good news for the line."',
  choices:[
    { label:'Congratulate her on the podium. Mention the brand by name.', eff:{base:+6,courts:-4,press:-4,congress:-2,cash:+0.2,auth:+2},
      res:'You plug your daughter\'s jewelry line from the presidential podium next to a country whose trademarks just cleared in record time. The word "coincidence" gets a real workout.' },
    { label:'Have counsel confirm the approvals were routine.', eff:{base:-3,courts:+4,press:+3,auth:+1},
      res:'A memo confirms nothing improper happened, which is the sort of thing that is true and also does not help.' },
    { label:'Ask her to license the brand somewhere less politically loud.', eff:{base:-2,press:+3,congress:+2,cash:-0.1,auth:0},
      res:'The line moves its manufacturing story to a country with no pending trade case. It is quieter. It is also, notably, the correct call.' },
    { label:'Launch a competing line under the presidential seal.', eff:{base:+6,press:-4,courts:-3,cash:+0.1,auth:+1}, wild:true,
      res:'A presidential-seal accessories collection appears, undercutting your own daughter\'s prices by design. Thanksgiving is, by all reports, tense.' }]},

/* ══════════════ THE SON\'S DEAL ══════════════ */

{ id:'k-son-business-deal', title:'The Overseas Deal', who:C.son, min:3, max:42, tags:['family','money'],
  src:'a relative closing a lucrative overseas business arrangement shortly after taking office',
  text:'Trent Jr. is on speakerphone, delighted with himself. "Dad, the Rusalka deal closed. Two hundred million, ' +
       'over ten years, my name on the building. They kept saying how much they respect the family. I did not ' +
       'even have to negotiate."',
  choices:[
    { label:'Congratulate him. Do not ask any follow-up questions.', eff:{base:+6,courts:-5,press:-4,congress:-2,cash:+0.4,auth:+2},
      res:'You tell him well done and hang up. The building goes up with his name on it eleven stories from a naval base. You did, technically, not ask.' },
    { label:'Have counsel review it for conflicts before he signs anything else.', eff:{base:-3,courts:+5,press:+3,auth:+1},
      res:'Sy spends a week reading a contract he did not want to read and finds three clauses that should embarrass everyone involved. He flags them. Trent Jr. signs anyway.' },
    { label:'Ask him to at least change the building\'s name.', eff:{base:+2,press:-2,cash:+0.2,auth:+1},
      res:'The tower keeps the deal and loses the family surname on the facade. It is the least he could do, and he does exactly that much.' },
    { label:'Have him donate the proceeds to a foundation. That you also run.', eff:{base:+5,press:-4,courts:-4,cash:+0.3,auth:+1}, wild:true,
      res:'Two hundred million dollars moves from one family entity to another, tax-advantaged, and is described in the press release as generosity.' }]},

/* ══════════════ THE NEPO HIRE ══════════════ */

{ id:'k-nepo-hire', title:'The Cousin', who:C.cos, min:1, max:20, tags:['family','loyalty'],
  src:'a relative installed atop an agency with no relevant background',
  text:'Deborah has the resume, such as it is. "Your cousin wants to run the small business agency, sir. His ' +
       'background is a failed chain of tanning salons and total loyalty to you personally. Those are, ' +
       'unfortunately, the only two qualifications anyone is asking about."',
  choices:[
    { label:'Give him the agency. Loyalty is a qualification.', eff:{base:+6,congress:-4,courts:-2,press:-3,auth:+3},
      res:'A man whose last venture went bankrupt three times now oversees loans to small businesses. He is, everyone agrees, extremely loyal.' },
    { label:'Give him a ceremonial title instead. No budget authority.', eff:{base:-3,congress:+4,press:+3,auth:+1},
      res:'He gets a nice office, a nameplate, and zero ability to sign anything. He is thrilled. The agency is unharmed.' },
    { label:'Hire someone qualified. Make him a "senior advisor" to that person.', eff:{base:+2,congress:-2,press:-2,auth:+1},
      res:'A real administrator runs the agency while your cousin shadows her everywhere, offering opinions she is professionally obligated to nod at.' },
    { label:'Send him to run the least important embassy you can find.', eff:{base:+3,press:-3,congress:-4,courts:-2,auth:+2}, wild:true,
      res:'He is now Ambassador to a nation of eleven thousand people and a great deal of coral. The coral, reportedly, is unbothered.' }]},

/* ══════════════ THE INAUGURAL SLUSH ══════════════ */

{ id:'k-inauguration-fund', title:'The Inaugural Fund', who:C.treas, min:1, max:6, tags:['family','money'],
  src:'a record-breaking inaugural fund with unusually loose accounting',
  text:'Lyle has the ledger open to a page he clearly wishes he could close. "The inaugural committee raised more ' +
       'than any in history, sir. A third of it is unaccounted for. Your daughter chaired the committee. This is ' +
       'not, strictly, my department, but somebody had to say it out loud."',
  choices:[
    { label:'Do not audit it. It was a great party.', eff:{base:+6,courts:-4,press:-4,cash:+0.3,auth:+2},
      res:'The unaccounted third stays unaccounted. The party, everyone agrees, really was excellent.' },
    { label:'Order an independent audit of the committee.', eff:{base:-4,courts:+5,press:+4,cash:-0.1,auth:+1},
      res:'An outside firm counts every dollar. It finds sloppiness, not theft, which is a relief that costs you a headline anyway.' },
    { label:'Quietly reimburse the missing third from the campaign account.', eff:{base:+2,press:-3,cash:-0.3,auth:+1},
      res:'The gap is papered over with money from a different pot entirely, which creates a new question nobody asks yet.' },
    { label:'Declare the inauguration a nonprofit retroactively.', eff:{base:+5,press:-3,courts:-4,cash:+0.2,auth:+1}, wild:true,
      res:'A one-day black-tie gala is reclassified, after the fact, as a charitable event. The IRS requests a phone call. You do not take it.' }]},

/* ══════════════ THE DETAIL BILL ══════════════ */

{ id:'k-secret-service-bill', title:'The Detail Bill', who:C.home, min:2, max:48, tags:['family','money'],
  src:'protective agents billed at market rate for staying at a family-owned property',
  text:'Duane reads the invoice flatly, the way a man reads a number he cannot change. "Protecting your ' +
       'grandchildren cost the government one point one million dollars this quarter, sir, most of it in room ' +
       'nights at properties the family owns. The rate charged is the standard rate. That is somehow the part ' +
       'that bothers people most."',
  choices:[
    { label:'The market rate is the market rate. Bill it.', eff:{base:+5,courts:-4,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'The government pays retail to a company you own to protect people who share your name. The logic is airtight and the optics are radioactive.' },
    { label:'Have the family comp the rooms.', eff:{base:-3,press:+4,congress:+3,cash:-0.2,auth:+1},
      res:'Free rooms for federal agents. It costs the business real revenue and buys you exactly one clean news cycle.' },
    { label:'Move the grandchildren to a government facility instead.', eff:{base:-2,press:+3,congress:+2,street:+1,auth:0},
      res:'Fewer amenities, no conflict, no headline. Somebody\'s Niece Madison calls it "a very normal choice to have to praise."' },
    { label:'Bill it at a discount and call the discount a "patriotic rate."', eff:{base:+4,press:-4,courts:-3,cash:+0.1,auth:+1}, wild:true,
      res:'A new invented rate, applied retroactively, described as generosity by the very company setting it. Nobody at Treasury can find the discount schedule.' }]},

/* ══════════════ THE CHRISTMAS CARD ══════════════ */

{ id:'k-family-christmas-card', title:'The Christmas Card', who:C.photog, min:10, max:14, tags:['family','levity'],
  src:'an official holiday card doubling as brand promotion for the family business',
  text:'Renata holds up the proof. "It is a lovely photo, sir. Everyone in matching sweaters. The problem is the ' +
       'small print under the tree reads \'Happy Holidays from the Family and the Resort Collection.\' It went to ' +
       'four hundred thousand government addresses before anyone caught it."',
  choices:[
    { label:'Send it as-is. It is only a logo.', eff:{base:+4,press:-4,courts:-3,cash:+0.1,auth:+1},
      res:'Four hundred thousand federal employees receive, in effect, a holiday advertisement. Three of them frame it anyway.' },
    { label:'Reprint without the small print. Eat the cost.', eff:{base:-2,press:+4,cash:-0.1,auth:0},
      res:'A clean, boring, logo-free card goes out a week late. It is warmly received and generates zero follow-up stories, which was the entire point.' },
    { label:'Blame the printer for the small print.', eff:{base:+2,press:-3,auth:0},
      res:'A print shop in a swing state is publicly blamed for a decision made two floors above them. The print shop says nothing and loses no sleep.' },
    { label:'Lean in. Add a discount code to next year\'s card.', eff:{base:+5,press:-4,courts:-3,congress:-2,cash:+0.2,auth:0}, wild:true,
      res:'Next year\'s card includes fifteen percent off a spa weekend. A senator frames it and reads it aloud on the floor for a full nine minutes.' }]},

/* ══════════════ THE IN-LAWS\' VISA ══════════════ */

{ id:'k-in-laws-visa', title:'The Fast Lane', who:C.home, min:4, max:40, tags:['family','loyalty'],
  src:'a relative\'s extended family receiving unusually rapid immigration processing',
  text:'Duane double-checks the file before he says it out loud. "Your son-in-law\'s parents cleared full ' +
       'residency review in eleven days, sir. The average is fourteen months. Nobody broke a rule exactly, they ' +
       'just moved everyone else\'s paperwork out of the way to do it."',
  choices:[
    { label:'It is family. Expedite it further.', eff:{base:+5,courts:-4,congress:-3,street:-3,auth:+2},
      res:'Eleven days becomes six on the next application. The people whose files got shoved aside are, by definition, not the ones with cameras pointed at them.' },
    { label:'Put them back in the normal queue.', eff:{base:-3,street:+4,courts:+3,congress:+2,auth:0},
      res:'The paperwork rejoins fourteen months of ordinary Americans waiting for ordinary reasons. It is fair. Nobody at the family dinner calls it that.' },
    { label:'Approve it, but require the same speed for everyone.', eff:{base:-2,street:+5,congress:+3,cash:-0.2,auth:-1},
      res:'You order the whole system sped up so the favor stops looking like a favor. It is expensive, it is right, and it is the least dramatic fix available.' },
    { label:'Have the in-laws publicly volunteer for extra vetting instead.', eff:{base:-3,press:-4,congress:-3,street:+3,auth:-3}, wild:true,
      res:'The in-laws request additional background checks, on camera, which plays as a stunt to half the press and satisfies no one in Congress still demanding real reform.' }]},

/* ══════════════ THE RESORT SUMMIT ══════════════ */

{ id:'k-resort-summit', title:'The Resort Summit', who:C.state, min:12, max:48, tags:['family','diplomacy','money'],
  src:'a major multilateral summit held at a family resort over the objections of the protocol office',
  text:'Muriel has already lost this argument once. "Protocol wants a neutral government site, sir, for the usual ' +
       'reasons. You want the resort because the ballroom photographs better and the family gets the booking. ' +
       'I am telling you both facts so that later, nobody can say I didn\'t."',
  choices:[
    { label:'The resort. Final answer.', eff:{base:+7,courts:-5,press:-5,congress:-3,cash:+0.5,auth:+3},
      res:'Six heads of state convene under a chandelier your family sold to the government at a markup. The photos are, admittedly, spectacular.' },
    { label:'Take protocol\'s advice. Neutral site.', eff:{base:-4,courts:+5,press:+4,congress:+3,auth:+1},
      res:'A government conference center with worse lighting and no conflict of interest. It is the choice that ages well and thrills nobody in the room.' },
    { label:'Resort for the gala, government site for the actual talks.', eff:{base:+3,press:-3,courts:-3,cash:+0.2,auth:+1},
      res:'A split-the-difference compromise that gives the family half the booking and the ethics office half a headache. Everyone leaves unsatisfied, which Muriel calls progress.' },
    { label:'Hold the summit on a naval vessel instead. Nobody\'s hotel.', eff:{base:-4,press:-3,congress:-2,courts:-3,street:+2,cash:-0.3,auth:-3}, wild:true,
      res:'Six world leaders convene on a destroyer in choppy water. Two get seasick, protocol calls it a diplomatic incident waiting to happen, and a congressman asks who is paying the fuel bill.' }]},

/* ══════════════ THE MEMBERSHIP DRIVE ══════════════ */

{ id:'k-golf-membership', title:'The Membership Drive', who:C.ethics, min:6, max:48, tags:['family','money'],
  src:'foreign officials purchasing club memberships at a family property shortly before seeking access',
  text:'Miriam has a list of new members that reads like a seating chart from a state dinner. "Fourteen new ' +
       'memberships at the club this quarter, sir, all foreign nationals, all seeking meetings with your staff ' +
       'within the month. The initiation fee alone is two hundred thousand dollars. It buys a locker and, ' +
       'apparently, a callback."',
  choices:[
    { label:'Take the meetings. Business is business.', eff:{base:+5,courts:-5,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'Fourteen lockers, fourteen meetings, one very efficient calendar. Miriam\'s office opens a file it will never be allowed to close.' },
    { label:'Cap foreign memberships and freeze new sign-ups.', eff:{base:-4,courts:+5,press:+4,cash:-0.2,auth:+1},
      res:'The club stops selling access disguised as golf. It is the correct fix and it costs the family a real, quantifiable amount of money.' },
    { label:'Take the meetings, skip the golf, call it a coincidence.', eff:{base:+3,press:-3,courts:-3,cash:+0.2,auth:+1},
      res:'Same calendar, no clubs in hand. The distinction satisfies nobody but is, technically, a distinction.' },
    { label:'Publish the membership list. All of it. Today.', eff:{base:-3,press:+3,courts:+2,congress:-4,cash:-0.2,auth:-4}, wild:true,
      res:'Full transparency, immediately, before anyone asked for it. Fourteen members quietly resign within the week, and four allies on the Hill call it an unforced disaster for the family\'s fundraising.' }]},

/* ══════════════ THE DISCLOSURE FORM ══════════════ */

{ id:'k-financial-disclosure', title:'The Disclosure Form', who:C.ethics, min:10, max:14, tags:['family','money'],
  src:'an annual personal financial disclosure with entries left deliberately vague',
  text:'Miriam has highlighted eleven lines in yellow. "Your annual disclosure, sir. \'Asset value: between one ' +
       'and fifty million dollars\' is technically permitted and technically useless. You have done this to ' +
       'eleven different line items. It is either extraordinary caution or extraordinary evasion, and I am not ' +
       'allowed to guess which."',
  choices:[
    { label:'File it exactly like this. Every year.', eff:{base:+4,courts:-4,press:-3,congress:-2,auth:+2},
      res:'Eleven ranges so wide they mean almost nothing become an annual tradition. It is legal. Miriam files it and requests, again, a transfer.' },
    { label:'Tighten every range to the real figure.', eff:{base:-4,courts:+5,press:+4,auth:+1},
      res:'The real numbers go on the record, which is unusual, uncomfortable, and exactly what the form was designed to do.' },
    { label:'Tighten half the ranges. Leave the embarrassing ones vague.', eff:{base:+1,press:-2,courts:-2,auth:+1},
      res:'A selective transparency that satisfies the form and fools nobody paying attention, which turns out to be almost everybody paying attention.' },
    { label:'File a hand-written note instead of the form.', eff:{base:+4,press:-4,courts:-4,congress:-2,auth:+1}, wild:true,
      res:'A single page reading, in full, "It\'s complicated, ask my accountant" is submitted in place of a federal disclosure. It is, against all odds, accepted and logged.' }]},

/* ══════════════ THE NIECE\'S PROMOTION ══════════════ */

{ id:'k-niece-madison-job', title:'The Promotion', who:C.intern, min:1, max:24, tags:['family','loyalty','levity'],
  src:'an unpaid relative\'s intern-tier position quietly upgraded into a real title',
  text:'Madison, twenty-two, is holding a business card that says "Deputy Director of Strategic Initiatives." ' +
       '"I don\'t really know what it means either, Uncle," she says. "But I have a badge now and Deborah says ' +
       'I have to sit in on the budget meeting. Should I say things in the budget meeting?"',
  choices:[
    { label:'Give her real authority. Family runs deep.', eff:{base:+5,congress:-4,press:-3,courts:-2,auth:+2},
      res:'A twenty-two-year-old with a business card now has line authority over people twice her age. Two of them start updating their resumes that afternoon.' },
    { label:'Keep the title ceremonial. No sign-off power.', eff:{base:-2,congress:+3,press:+2,auth:0},
      res:'Madison keeps the badge and loses the budget meeting. She seems, if anything, relieved.' },
    { label:'Send her to run something small and far away instead.', eff:{base:+2,congress:-2,press:-2,auth:1},
      res:'She now oversees a regional outreach office nobody has visited since a reorganization two administrations ago. She throws herself into it, genuinely.' },
    { label:'Have her shadow Deborah full time. No title at all.', eff:{base:-5,congress:+2,press:-3,auth:-2}, wild:true,
      res:'No badge, no card, just eighteen months learning the actual job from the person who is best at it. Reporters call it a demotion dressed as humility, and Madison\'s mother calls you nightly to complain.' }]},

/* ══════════════ THE EMOLUMENTS SUIT ══════════════ */

{ id:'k-hotel-emoluments-suit', title:'The Emoluments Suit', who:C.lawyer, min:14, max:48, tags:['family','courts','money'],
  src:'a constitutional challenge over foreign payments flowing to a family business',
  text:'Sy has the complaint filed against you personally, which he finds professionally exciting and personally ' +
       'exhausting. "Two hundred and six members of Congress signed on, sir. Their theory is that a foreign ' +
       'government paying your hotel is, functionally, a foreign government paying you. It is, respectfully, ' +
       'not a bad theory."',
  choices:[
    { label:'Fight it. Every court, every appeal.', eff:{base:+6,courts:-6,congress:-4,press:-3,cash:-0.2,auth:+2},
      res:'Three years and several million dollars in legal fees establish, eventually, that the clause is real but very hard to enforce. You call this a win.' },
    { label:'Settle. Donate the disputed profits to charity.', eff:{base:-3,courts:+5,press:+4,cash:-0.3,auth:+1},
      res:'The family writes a check to a food bank equal to the foreign profits and the suit is dropped. It is cheaper than the lawyers and looks, for once, like the easy part was correct.' },
    { label:'Argue the Constitution doesn\'t really mean that.', eff:{base:+4,courts:-5,press:-3,auth:+2},
      res:'Your lawyers argue, with a straight face, that a two-hundred-year-old anti-corruption clause does not apply to hotels. Three judges ask them to repeat that slower.' },
    { label:'Sell the hotel to a blind auction. Genuinely blind.', eff:{base:-5,courts:+3,press:+3,congress:-5,cash:+0.3,auth:-4}, wild:true,
      res:'The property goes to the highest sealed bidder, identity unknown even to you, at your own insistence. The lawyers do not believe you actually did it until the wire clears, and half your own donors call it an act of self-sabotage.' }]},

/* ══════════════ THE OFFICIAL PORTRAIT ══════════════ */

{ id:'k-family-portrait', title:'The Official Portrait', who:C.photog, min:1, max:48, tags:['family','levity'],
  src:'an official government portrait subtly reworked to include personal branding',
  text:'Renata unveils the canvas. "The official portrait, sir. Painted exactly to spec, except the artist has, ' +
       'unbidden, worked the family resort\'s skyline into the window behind you. It is either a tribute or a ' +
       'four-figure invoice disguised as art. I cannot tell which and neither can she."',
  choices:[
    { label:'Hang it. The skyline stays.', eff:{base:+4,press:-4,courts:-2,auth:+1},
      res:'Every visiting dignitary who stands in that hallway now gets a free look at your hotel\'s silhouette. The artist gets a very good line for her next commission.' },
    { label:'Have the skyline painted out. Neutral background.', eff:{base:-2,press:+3,auth:0},
      res:'A generic government blue replaces the skyline. It is duller and it is correct, and Renata never mentions the invoice again.' },
    { label:'Commission a second portrait, just of the resort.', eff:{base:+3,press:-3,cash:-0.1,auth:+1},
      res:'Two portraits now hang in the same hallway. One of you, one of a building you own. A tour guide starts fielding a question she was not trained for.' },
    { label:'Let the artist paint whatever she wants for the rest of the term.', eff:{base:-4,press:+2,congress:-4,street:+2,cash:-0.2,auth:-3}, wild:true,
      res:'Renata is given full creative license for every remaining official image. The results are strange, occasionally beautiful, and three agency heads request, formally, not to be depicted holding fruit.' }]},

/* ══════════════ THE POST ══════════════ */

{ id:'k-son-tweet', title:'The Post', who:C.social, min:1, max:48, tags:['family','press','levity'],
  src:'a relative posting an unfiltered, off-message account of a private policy conversation',
  text:'Brayden has the screenshot already saved in three places. "Your son posted about the trade meeting, sir. ' +
       'Live. From the room. He called Northmark\'s trade rep, quote, \'kind of a pushover, honestly.\' It has ' +
       'four hundred thousand likes and the Northmark embassy has already called twice."',
  choices:[
    { label:'Repost it with a fire emoji.', eff:{base:+6,press:-5,congress:-3,auth:+2},
      res:'You amplify your own son insulting a trade partner mid-negotiation. The base finds it hilarious. The negotiation does not.' },
    { label:'Delete it. Have him call the embassy to apologize.', eff:{base:-3,press:+4,congress:+3,auth:+1},
      res:'A quiet deletion and an awkward, sincere phone call fix ninety percent of the damage. The screenshot, obviously, already exists forever.' },
    { label:'Claim the account was hacked.', eff:{base:+2,press:-4,street:-2,auth:0},
      res:'You blame a hacker for your son\'s honest opinion, live-tweeted from a secure room he should not have had his phone in. Nobody believes you, including your son.' },
    { label:'Have Brayden ghost-write his posts from now on.', eff:{base:-5,press:-3,congress:-2,auth:-3}, wild:true,
      res:'A nineteen-year-old is now the sole editorial filter on a grown man\'s foreign policy commentary. The switch leaks within a week, and the coverage of a ghostwritten president\'s son is, if anything, worse than the original post.' }]},

/* ══════════════ THE SEAT AT THE TABLE ══════════════ */

{ id:'k-daughter-un-seat', title:'The Seat at the Table', who:C.amb, min:16, max:48, tags:['family','diplomacy'],
  src:'a relative given a formal seat in a high-level multilateral delegation with no prior credential',
  text:'Priya is trying very hard to be diplomatic about diplomacy. "Your daughter has a seat at the General ' +
       'Assembly delegation table, sir, between the Secretary and myself. She has no title, no vote, and no ' +
       'briefing. Four other delegations have quietly asked who she is."',
  choices:[
    { label:'Give her a real title to match the seat.', eff:{base:+5,congress:-4,courts:-2,press:-3,auth:+2},
      res:'"Special Representative" appears on the nameplate by lunch. It answers the question and raises three more.' },
    { label:'Move her seat to the gallery. Observer only.', eff:{base:-3,congress:+4,press:+3,auth:0},
      res:'She watches from the gallery like everyone else who is not, technically, a diplomat. It is correct and she is visibly bored by it.' },
    { label:'Have her run a side event instead. Photogenic, low stakes.', eff:{base:+3,press:-2,congress:-2,auth:+1},
      res:'A panel on youth entrepreneurship, well-lit, off the record, and entirely separate from anything binding. Everyone gets what they wanted.' },
    { label:'Have her formally credentialed as press for the week.', eff:{base:+2,press:-4,congress:-3,auth:+1}, wild:true,
      res:'Your daughter covers the summit as accredited media, asking her own father\'s delegation softball questions from the second row. Three actual journalists request a comment. On the record.' }]},

/* ══════════════ THE HEALTH INSPECTOR ══════════════ */

{ id:'k-hotel-inspection', title:'The Inspection', who:C.health, min:6, max:40, tags:['family','money'],
  src:'a routine health inspection at a family-owned property flagged for violations and then quietly closed out',
  text:'Wendell has the citation report. "Fourteen violations at the family hotel kitchen, sir, four of them ' +
       'serious. The regional office wants it published, standard procedure. I have been asked, informally, ' +
       'twice today, whether standard procedure is really necessary here."',
  choices:[
    { label:'Have it quietly reclassified as minor.', eff:{base:+4,courts:-4,press:-3,auth:+2},
      res:'Fourteen violations become four footnotes. The inspector who wrote the original report is reassigned to a region with fewer hotels in it.' },
    { label:'Publish it. Same as any other property.', eff:{base:-3,press:+4,courts:+3,auth:+1},
      res:'The report runs exactly as written. The kitchen fixes the violations in nine days flat, which is, incidentally, a new company record.' },
    { label:'Fix it fast, quietly, before the report goes out.', eff:{base:+1,press:-2,courts:-1,cash:-0.1,auth:+1},
      res:'A very fast, very expensive overnight renovation makes the follow-up inspection clean. The original report, technically, still exists somewhere.' },
    { label:'Invite the health board to a ribbon-cutting for the fixed kitchen.', eff:{base:+4,press:-3,courts:-3,congress:-2,cash:-0.1,auth:+1}, wild:true,
      res:'A ribbon-cutting ceremony for compliance with a law every other restaurant in the country just follows without a ceremony. Wendell cuts the ribbon and says nothing memorable, on purpose.' }]},

/* ══════════════ THE LICENSING DEAL ══════════════ */

{ id:'k-license-deal', title:'The Licensing Deal', who:C.treas, min:10, max:46, tags:['family','money'],
  src:'a foreign state-linked developer licensing the family name for a tower shortly before a related trade concession',
  text:'Lyle has traced the money three layers deep and stopped, exhausted. "A state-linked developer in Qadira ' +
       'wants to license the family name for a tower, sir. Forty million, up front, non-refundable. Six weeks ' +
       'later your trade office is due to rule on their tariff exemption. I did not draw that timeline. It drew itself."',
  choices:[
    { label:'Sign the license. Let the tariff ruling happen when it happens.', eff:{base:+6,courts:-5,press:-4,congress:-2,cash:+0.5,auth:+2},
      res:'The tower gets a familiar name in gold letters and forty million dollars moves before anyone rules on anything. The ruling, when it comes, goes their way.' },
    { label:'Decline the license until after the ruling, whichever way it goes.', eff:{base:-4,courts:+5,press:+4,cash:-0.1,auth:+1},
      res:'The family turns down forty million dollars to keep the sequence clean. It is the single most expensive ethical decision of the term.' },
    { label:'Sign it, recuse from the ruling, let a deputy decide.', eff:{base:+3,press:-3,courts:-3,cash:+0.4,auth:+1},
      res:'The deputy rules the same way you would have. The recusal memo is airtight and satisfies exactly the people already inclined to trust you.' },
    { label:'Sign the license and personally deny the tariff exemption out of spite.', eff:{base:+4,press:-4,congress:-4,cash:+0.4,auth:+1}, wild:true,
      res:'You take their forty million and then rule against them anyway, to prove you cannot be bought. A trade lawyer calls it "the strangest possible way to prove a negative."' }]},

/* ══════════════ THE FAMILY CABINET MEETING ══════════════ */

{ id:'k-family-cabinet-meeting', title:'The Extra Chair', who:C.cos, min:2, max:30, tags:['family','loyalty'],
  src:'family members sitting in on formal cabinet-level deliberations with no official role',
  text:'Deborah counts heads at the cabinet table and comes up two over budget. "Your son and daughter are both ' +
       'in the room for the tariff briefing, sir. Neither holds a position that requires clearance for this. ' +
       'The Secretary of Commerce has started addressing his remarks to them instead of me."',
  choices:[
    { label:'They stay. They are smarter than half this table.', eff:{base:+5,congress:-4,courts:-2,auth:+2},
      res:'Two chairs with no titles now outrank a cabinet secretary in practice if not on paper. He adjusts his talking points accordingly, which is its own kind of answer.' },
    { label:'Family meets separately. Cabinet stays cabinet.', eff:{base:-3,congress:+4,press:+3,auth:0},
      res:'A hard line, drawn late, holds anyway. The next briefing runs eleven minutes shorter and nobody can quite say why it feels different.' },
    { label:'Give them a standing invite but no speaking role.', eff:{base:+2,congress:-2,press:-1,auth:+1},
      res:'They sit, they listen, they say nothing out loud in the room. What happens in the hallway afterward is a separate matter entirely.' },
    { label:'Add two more empty chairs. Let the whole family attend.', eff:{base:+4,congress:-4,press:-3,courts:-2,auth:+1}, wild:true,
      res:'Six family members now attend a national security briefing that used to require background checks. The room needs a bigger table before it needs anything else.' }]},

/* ══════════════ THE IN-LAW\'S POSTING ══════════════ */

{ id:'k-in-law-ambassadorship', title:'The Posting', who:C.state, min:8, max:44, tags:['family','diplomacy'],
  src:'an in-law appointed to a plum ambassadorship with no diplomatic background',
  text:'Muriel reads the nominee\'s qualifications one more time in case she missed something. "Your ' +
       'brother-in-law speaks no French, sir, has never held public office, and donated eleven million dollars ' +
       'to your campaign. The posting is Paris. The confirmation hearing is going to be, and I use this word ' +
       'professionally, brutal."',
  choices:[
    { label:'Nominate him anyway. Push it through.', eff:{base:+6,congress:-5,courts:-2,press:-3,auth:+3},
      res:'He is confirmed on a party-line vote after a hearing where he cannot name the French foreign minister. He learns the job, slowly, in public.' },
    { label:'Nominate a career diplomat instead. Give him something ceremonial.', eff:{base:-3,congress:+4,press:+3,auth:+1},
      res:'The embassy gets someone who has actually done this before. Your brother-in-law gets a plaque and a standing dinner invitation.' },
    { label:'Nominate him for a smaller posting. Lower the stakes.', eff:{base:+3,congress:-2,press:-2,auth:+1},
      res:'He becomes ambassador to a country with fewer reporters and a shorter flight home. The donation was, evidently, worth roughly this much.' },
    { label:'Have him learn French on a crash course before the hearing.', eff:{base:-4,press:-2,congress:-3,auth:-3}, wild:true,
      res:'Six weeks of immersive lessons produce a man who can order lunch and little else. He uses exactly four French words in the hearing; three senators call the whole spectacle patronizing, and the fourth just laughs.' }]},

/* ══════════════ THE GOLF COURSE TAX BREAK ══════════════ */

{ id:'k-golf-tax', title:'The Conservation Easement', who:C.treas, min:12, max:48, tags:['family','money'],
  src:'a large tax deduction claimed for a conservation restriction on a family golf property',
  text:'Lyle has the appraisal, and the second, wildly different appraisal. "The family claimed a conservation ' +
       'easement on the golf course, sir. Twenty-one million dollar deduction. An independent appraiser puts the ' +
       'actual value at closer to four. That is not a rounding error. That is a different course."',
  choices:[
    { label:'File the higher number. Let the IRS come find you.', eff:{base:+5,courts:-5,press:-3,cash:+0.4,auth:+2},
      res:'The bigger deduction goes in. It saves real money now and buys a multi-year audit later that several accountants privately hoped would just go away.' },
    { label:'Amend it to the honest appraisal.', eff:{base:-4,courts:+5,press:+3,cash:-0.3,auth:+1},
      res:'The family voluntarily gives back seventeen million dollars in claimed value. The accountant who recommended it retires early, satisfied and rich.' },
    { label:'Split the difference. File a number in between.', eff:{base:+1,courts:-2,cash:+0.1,auth:+1},
      res:'A compromise figure that pleases no appraiser and satisfies no auditor, but is defensible enough to survive a first review.' },
    { label:'Donate the golf course to a wildlife sanctuary instead.', eff:{base:-4,press:+2,courts:+2,congress:-5,cash:-0.5,street:+2,auth:-4}, wild:true,
      res:'Eighteen holes become, actually and permanently, a bird sanctuary. It is the single most expensive joke anyone in the family has ever made about themselves, and every donor who wanted that tax break calls the same afternoon, furious.' }]},

/* ══════════════ THE JOINT NOMINATION ══════════════ */

{ id:'k-peace-prize-plan', title:'The Joint Nomination', who:C.state, min:20, max:48, tags:['family','diplomacy','vanity'],
  src:'a relative nominated alongside the President for the same international honor',
  text:'Muriel reads the nomination letter twice to be sure. "Your son-in-law has submitted a joint nomination, ' +
       'sir. Both your names, for the peace framework he negotiated with your signature on it. The committee\'s ' +
       'reply asked, politely, whether this was a family plan or a foreign policy."',
  choices:[
    { label:'Approve the joint nomination. Share the marquee.', eff:{base:+5,press:-4,congress:-2,auth:+1},
      res:'Two names on one nomination letter for one framework nobody outside the family fully understands. The committee\'s reply gets drier each round.' },
    { label:'Nominate him alone. Take yourself off it.', eff:{base:-2,press:+5,congress:+3,street:+2,auth:0},
      res:'You step back from your own prize nomination to let the actual negotiator have it. It is a strange thing to be proud of and you are, quietly, proud of it.' },
    { label:'Withdraw both names. Nominate the career diplomat who did the real work.', eff:{base:-4,press:+6,congress:+4,street:+3,auth:-1},
      res:'A staffer nobody has heard of gets the credit and, eventually, a real shot at the honor. It is the single most selfless thing that happens all term and nobody outside the building notices.' },
    { label:'Have Trent Jr. also submit a nomination. For himself. Unrelated.', eff:{base:+4,press:-5,congress:-2,courts:-2,auth:0}, wild:true,
      res:'Your son files his own, entirely separate nomination for a humanitarian award tied to a golf tournament fundraiser. The committee now has three family members on file in one cycle.' }]},

/* ══════════════ THE DETAIL AT THE RESORT ══════════════ */

{ id:'k-security-detail-cost', title:'The Standing Detail', who:C.home, min:4, max:48, tags:['family','money'],
  src:'the ongoing cost of a permanent protective detail stationed at a privately owned family property',
  text:'Duane has the annualized figure and is bracing for the reaction. "Protecting the family at the resort ' +
       'runs eighty-two thousand dollars a day when you are in residence, sir. Most of it is room rentals, at the ' +
       'family\'s own posted rate, paid by the taxpayer, to the family."',
  choices:[
    { label:'Residency stays. The number is the cost of security.', eff:{base:+4,courts:-4,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'Eighty-two thousand dollars a day becomes a line item nobody in the family questions and everybody outside it does.' },
    { label:'Relocate. Use a government retreat instead.', eff:{base:-3,courts:+4,press:+4,congress:+2,auth:0},
      res:'A modest federal property with worse views and no billing conflict. The detail costs a fraction as much and photographs like a punishment.' },
    { label:'Negotiate the daily rate down. Publicly.', eff:{base:+2,press:+2,cash:+0.1,auth:+1},
      res:'The family agrees to a discounted government rate, announced with some fanfare, that still comes out well above what a hotel two towns over would charge.' },
    { label:'Have the detail camp on the grounds instead. Tents.', eff:{base:+2,press:-4,congress:-3,street:-2,cash:+0.1,auth:0}, wild:true,
      res:'Federal agents pitch tents on the back nine to avoid billing the government for rooms. It saves money and is, by any measure, an insane image to explain later.' }]},

/* ══════════════ THE FAMILY PLEDGE ══════════════ */

{ id:'k-family-ethics-pledge', title:'The Family Pledge', who:C.ethics, min:1, max:10, tags:['family','loyalty'],
  src:'a voluntary ethics pledge for family members with no enforcement mechanism attached',
  text:'Miriam has drafted a pledge she does not expect anyone to sign meaningfully. "It asks family members to ' +
       'avoid new foreign deals while you are in office, sir. It is voluntary, unenforceable, and mostly exists ' +
       'so that when it is violated, which it will be, someone can point at the piece of paper."',
  choices:[
    { label:'Have everyone sign it. Ceremony, cameras, the works.', eff:{base:+5,press:-3,courts:-2,auth:+2},
      res:'A signing ceremony for a document with no teeth generates excellent photographs and zero actual restraint. Miriam files it and waits.' },
    { label:'Make it binding. Real penalties for violations.', eff:{base:-4,courts:+5,congress:+3,auth:+1},
      res:'A pledge with actual consequences gets signed reluctantly, by fewer people, and means something for exactly that reason.' },
    { label:'Skip the pledge. Issue a statement of values instead.', eff:{base:+2,press:-2,auth:+1},
      res:'A statement of values requires no signature and creates no record. It is, in its way, the most honest document the family produces all year.' },
    { label:'Have the family pledge to each other instead of the ethics office.', eff:{base:+3,press:-3,courts:-3,congress:-2,auth:0}, wild:true,
      res:'A private, notarized pledge between family members, filed nowhere the government can see it. Miriam asks, reasonably, what that was even for.' }]},

/* ══════════════ THE MARKUP ══════════════ */

{ id:'k-resort-markup', title:'The Markup', who:C.usher, min:10, max:48, tags:['family','money'],
  src:'presidential travel routed to include stays at family properties billed above comparable market rates',
  text:'Alvin has cross-referenced eleven trips against eleven comparable hotels. "Every domestic trip this year ' +
       'included at least one night at a family property, sir, at a rate roughly forty percent above the market ' +
       'average nearby. The travel office has started calling it \'the premium,\' quietly, among themselves."',
  choices:[
    { label:'Keep booking there. It is convenient.', eff:{base:+5,courts:-4,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'"The premium" becomes a permanent, unspoken line item in the federal travel budget. It is convenient, in the sense that everyone stops asking about it.' },
    { label:'Cap the rate at the government per diem.', eff:{base:-4,courts:+5,press:+4,cash:-0.2,auth:+1},
      res:'The family accepts the standard government rate like any other vendor. It costs them a real amount of quarterly revenue and buys back a real amount of credibility.' },
    { label:'Book fewer nights there. Spread the trips around.', eff:{base:+1,press:+1,cash:-0.1,auth:0},
      res:'The travel office diversifies the itinerary slightly. The premium shrinks. Nobody notices the improvement, which is the best kind.' },
    { label:'Publish "the premium" as a transparency initiative.', eff:{base:-4,press:+2,congress:-4,courts:+2,cash:-0.1,auth:-3}, wild:true,
      res:'You order the markup published, line by line, as a show of openness. It is openly, undeniably embarrassing, and several allies on the Hill ask why you did not warn them first.' }]},

/* ══════════════ THE FASHION TRADEMARK ══════════════ */

{ id:'k-daughter-fashion-trademark', title:'The Foreign Trademark', who:C.girl, min:14, max:46, tags:['family','money','diplomacy'],
  src:'a rapid batch of trademark approvals for a relative\'s fashion brand tied to a state visit',
  text:'Ivy has the good news and, characteristically, does not see the bad news attached to it. "Rusalka just ' +
       'approved the whole handbag line, Dad, seven trademarks in one afternoon. It happens to be the same ' +
       'afternoon their president is visiting. I promise I did not plan the timing."',
  choices:[
    { label:'Mention the handbags warmly during the state visit toast.', eff:{base:+5,courts:-4,press:-4,congress:-2,cash:+0.2,auth:+2},
      res:'A state dinner toast includes an unprompted plug for a handbag line. The visiting president smiles for the cameras and mentions it to nobody afterward, which somehow says more.' },
    { label:'Ask her to hold the launch until after the visit ends.', eff:{base:-2,press:+3,congress:+2,cash:-0.1,auth:0},
      res:'A two-week delay separates the trademarks from the toast on the calendar, at least. She is annoyed. It is, again, the correct call.' },
    { label:'Say nothing. Let the trademarks speak for themselves.', eff:{base:+2,press:-2,auth:+1},
      res:'You decline to mention it publicly, which does not stop a business reporter from noticing the date stamps anyway.' },
    { label:'Have her donate the line\'s profits from that country specifically.', eff:{base:-3,press:+2,congress:-4,street:+2,cash:-0.1,auth:-2}, wild:true,
      res:'Every dollar earned from that particular country, that particular week, goes to a refugee charity, publicly, itemized. It is oddly specific and oddly effective.' }]},

/* ══════════════ THE REALITY SHOW ══════════════ */

{ id:'k-son-reality-show', title:'The Pitch Meeting', who:C.press, min:6, max:40, tags:['family','press','levity'],
  src:'a relative pursuing a media deal built around proximity to the office',
  text:'Kaylee has read the pitch deck twice, hoping it improves on a second pass. "A streaming network wants to ' +
       'give your son a reality show, sir. Working title, and I am reading this exactly as written, \'First Son.\' ' +
       'They are offering eight figures. He has already picked out a theme song."',
  choices:[
    { label:'Let him do it. Great exposure for the family.', eff:{base:+6,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'Eight episodes air of your son narrating his own proximity to power. Ratings are strong. The White House counsel\'s office watches every episode with visible dread.' },
    { label:'Have him decline. Perception of exploiting the office.', eff:{base:-3,press:+4,congress:+3,auth:+1},
      res:'He turns down eight figures, loudly and publicly, framed as principle. It is, this once, also just principle.' },
    { label:'Negotiate for a smaller, "tasteful" documentary instead.', eff:{base:+2,press:-2,cash:+0.1,auth:+1},
      res:'A single hour-long special replaces a full season. It is somehow both more dignified and still, unmistakably, an ad for the family.' },
    { label:'Demand creative control and turn it into a cooking show.', eff:{base:+4,press:-4,congress:-2,street:-2,cash:+0.2,auth:0}, wild:true,
      res:'"First Son" becomes a cooking competition with zero mentions of policy. It is a genuine hit. Culinary critics are baffled and, grudgingly, complimentary.' }]},

/* ══════════════ THANKSGIVING ══════════════ */

{ id:'k-thanksgiving', title:'Thanksgiving', who:C.cos, min:1, max:48, tags:['family','levity'],
  src:'a family holiday gathering that turns into an impromptu personnel meeting',
  text:'Deborah stands at the edge of the dining room, uninvited but summoned anyway. "Your son wants the ' +
       'Commerce job, sir. Your daughter wants him to have literally any other job. This is happening over the ' +
       'turkey, in front of the in-laws, and I was told to \'just be here in case.\' I would like it on record ' +
       'that I did not choose this."',
  choices:[
    { label:'Settle it right there. Give him Commerce.', eff:{base:+5,congress:-4,courts:-2,auth:+2},
      res:'A cabinet appointment is decided over gravy, in front of relatives who will now expect the same treatment. Deborah writes the actual paperwork Monday.' },
    { label:'Table it. "We\'ll discuss this Monday, in my office."', eff:{base:-2,congress:+3,press:+2,auth:+1},
      res:'The decision waits for a conference room instead of a dinner table. The turkey gets cold. The precedent, for once, holds.' },
    { label:'Give the job to neither. Announce a third cousin instead.', eff:{base:+2,congress:-2,press:-1,auth:+1},
      res:'A surprise appointment nobody at the table saw coming ends the argument by making everyone equally unhappy. Deborah calls this a personal specialty.' },
    { label:'Hold a family vote. Grandma gets a tiebreak.', eff:{base:+4,press:-3,congress:-3,street:-2,auth:-2}, wild:true,
      res:'A cabinet secretary is selected by a show of hands at a holiday table, with a tiebreaking vote from a ninety-one-year-old who thought the question was about the stuffing.' }]},

/* ══════════════ THE FOUNDATION AUDIT ══════════════ */

{ id:'k-family-foundation', title:'The Foundation Audit', who:C.lawyer, min:16, max:48, tags:['family','money','courts'],
  src:'a family charitable foundation under scrutiny for spending that benefits the family directly',
  text:'Sy has the foundation\'s books spread across his desk like a crime scene, because in a sense it is one. ' +
       '"The foundation paid for a portrait of you, sir, hung at the resort. It paid a settlement in your name. ' +
       'Charitable foundations are not supposed to do either of those things. This is not a gray area. This is a ' +
       'very clearly marked area."',
  choices:[
    { label:'Keep the foundation running exactly as-is.', eff:{base:+5,courts:-6,press:-4,congress:-2,auth:+2},
      res:'Nothing changes. The state attorney general\'s office opens a file with your family\'s name on the tab, in permanent marker.' },
    { label:'Dissolve the foundation. Distribute remaining funds to real charities.', eff:{base:-5,courts:+6,press:+5,cash:-0.2,auth:+1},
      res:'The whole vehicle is shut down and what is left is actually given away, to organizations that were not you. It is late, expensive, and correct.' },
    { label:'Reimburse the portrait and settlement personally. Keep the foundation.', eff:{base:-2,courts:+3,press:+2,cash:-0.2,auth:+1},
      res:'A personal check covers the two clearest violations while the entity itself survives to make smaller mistakes later.' },
    { label:'Rebrand the foundation as a "legacy institute" and start over.', eff:{base:+4,press:-4,courts:-4,auth:+1}, wild:true,
      res:'Same assets, same family, new letterhead. The attorney general\'s office notes, dryly, that a new name does not constitute new conduct.' }]},

/* ══════════════ THE SITUATION ROOM ══════════════ */

{ id:'k-grandkids-situation-room', title:'The Situation Room', who:C.gen, min:6, max:48, tags:['family','levity','war'],
  src:'family members brought into a secure briefing space intended for classified deliberations',
  text:'General Tarrant is choosing his words with the care of a man defusing something for a second time this ' +
       'month. "Your grandchildren were in the Situation Room during the briefing, sir. Not near it. In it. One ' +
       'of them asked whether the red phone was real. I did not know how to answer honestly and also keep my job."',
  choices:[
    { label:'They can watch. It is educational.', eff:{base:+5,courts:-4,congress:-3,auth:+2},
      res:'Two children now have incidental exposure to material well above their pay grade, and everyone else\'s. Tarrant requests, formally, that the couches be removed.' },
    { label:'No more visits during briefings. Full stop.', eff:{base:-3,courts:+4,congress:+3,auth:0},
      res:'A hard, simple rule that should never have needed stating gets stated. The room goes back to being a room for exactly what it is for.' },
    { label:'Let them visit, but only the "fun" unclassified room next door.', eff:{base:+2,congress:-1,auth:+1},
      res:'A decoy briefing room with a globe and no secrets satisfies everyone under the age of twelve. Nobody tells them it is decoy.' },
    { label:'Give the whole family a tour and a group photo at the table.', eff:{base:+4,press:-4,courts:-3,congress:-3,auth:+1}, wild:true,
      res:'A family portrait is taken at the actual table, in front of the actual screens, several of which are, at that moment, still displaying something.' }]},

/* ══════════════ THE FOREIGN LOAN ══════════════ */

{ id:'k-in-law-foreign-loan', title:'The Bridge Loan', who:C.fed, min:18, max:48, tags:['family','money'],
  src:'a distressed family property refinanced through a loan from a foreign sovereign-linked fund',
  text:'Arthur is careful to note this is technically not his jurisdiction before he says it anyway. "A ' +
       'sovereign wealth fund tied to Qadira just refinanced eight hundred million dollars of the family\'s debt, ' +
       'sir. Below-market rate, no collateral audit, six months after you eased their sanctions review. The Fed ' +
       'does not usually comment on family finance. I am making an exception."',
  choices:[
    { label:'Take the loan. The property needed the cash.', eff:{base:+6,courts:-5,press:-4,congress:-3,cash:+0.5,auth:+2},
      res:'Eight hundred million dollars in relief arrives from exactly the government whose sanctions you just eased. Even Arthur, a man who does not editorialize, editorializes.' },
    { label:'Decline. Refinance domestically at a worse rate.', eff:{base:-4,courts:+5,press:+4,cash:-0.4,auth:+1},
      res:'The family pays real market rates from a real domestic bank, at real cost, to avoid a headline that would otherwise write itself.' },
    { label:'Take the loan, reverse the sanctions relief to compensate.', eff:{base:+2,congress:-2,cash:+0.3,auth:+1},
      res:'You take the money and then punish the lender\'s government anyway, which nobody involved can fully explain as a strategy but which does muddy the story.' },
    { label:'Publicize the loan terms in full before anyone leaks them.', eff:{base:-4,press:+2,courts:+2,congress:-4,cash:0,auth:-4}, wild:true,
      res:'You get ahead of it and release the full loan documents yourself. It is still bad. It is, notably, much less bad than being caught hiding it.' }]},

/* ══════════════ THE HOTEL STRIKE ══════════════ */

{ id:'k-hotel-strike', title:'The Picket Line', who:C.labor, min:10, max:44, tags:['family','money'],
  src:'a labor dispute at a family property escalating during the President\'s own visit',
  text:'Tony has the strike notice and a look that suggests he already knows how this goes. "Housekeeping at the ' +
       'family hotel is walking out over wages, sir, timed to your visit next week. Two hundred workers, ' +
       'national cameras. You will be photographed either crossing a picket line or standing next to one you own."',
  choices:[
    { label:'Reschedule nothing. Walk right past them.', eff:{base:+5,press:-5,street:-5,congress:-2,auth:+2},
      res:'You cross your own family\'s picket line for the cameras. It is a photograph that will outlive the news cycle by years.' },
    { label:'Have the family settle the wage dispute before you arrive.', eff:{base:-3,street:+5,press:+3,cash:-0.3,auth:+1},
      res:'A real raise, negotiated fast and paid for out of family profit, ends the strike two days before you land. It costs money and buys silence, honestly earned.' },
    { label:'Move your visit to a different property.', eff:{base:+1,press:-2,street:+2,auth:0},
      res:'You simply do not show up to the hotel that is on strike. The strike continues, unphotographed, which some call a solution and others call avoidance.' },
    { label:'Join the picket line yourself for a photo, then go inside.', eff:{base:+4,press:-4,street:-3,congress:-2,auth:+1}, wild:true,
      res:'You walk the line for six minutes, wave, and check into a room upstairs. The workers find it insulting. The footage, out of context, plays surprisingly well.' }]},

/* ══════════════ THE NEPO JUDGE ══════════════ */

{ id:'k-nepo-judge', title:'The Bench', who:C.cj, min:20, max:48, tags:['family','courts'],
  src:'a relative with minimal legal experience nominated to a federal judgeship',
  text:'Winifred reviews the nominee\'s file with the flat patience of someone who has seen worse and would ' +
       'rather not say when. "Your nephew has been practicing law for four years, sir, entirely in real estate ' +
       'closings. The seat is a federal appellate bench. The bar association\'s rating is, and I quote directly, ' +
       '\'not qualified.\'"',
  choices:[
    { label:'Nominate him anyway. Push it through committee.', eff:{base:+6,congress:-5,courts:-6,press:-3,auth:+3},
      res:'He is confirmed on a party-line vote and will sit for decades, ruling on cases far outside anything he has handled. The bar association\'s letter is filed and ignored.' },
    { label:'Nominate a qualified judge. Give him a clerkship to learn the ropes.', eff:{base:-4,courts:+5,congress:+4,auth:+1},
      res:'A real appointee takes the bench and your nephew spends two years actually learning the job before anyone lets him near a robe.' },
    { label:'Nominate him for a lower, less consequential court instead.', eff:{base:+3,courts:-3,congress:-2,auth:+1},
      res:'A magistrate seat with a smaller docket and a shorter reach. It is still a stretch. It is a smaller stretch.' },
    { label:'Have him withdraw and write a bar exam prep guide instead.', eff:{base:-4,press:+2,courts:+2,congress:-4,auth:-3}, wild:true,
      res:'He publishes "So You Want to Be a Judge," a surprisingly earnest and well-reviewed guide for actual aspiring judges. It outsells everything else the family has put out this year.' }]},

/* ══════════════ THE SUCCESSION ══════════════ */

{ id:'k-succession', title:'The Succession Question', who:C.vp, min:30, max:48, tags:['family','loyalty'],
  src:'open jockeying between an elected successor and a family member for the mantle of the movement',
  text:'Chet is smiling, which is how you know this is serious. "The base is starting to ask who carries the ' +
       'movement after you, sir. Officially, that is me. Unofficially, your daughter did a rally last month that ' +
       'outdrew mine by forty thousand people. I am not panicking. I would like that noted as a lie."',
  choices:[
    { label:'Signal her as the heir. Publicly, unambiguously.', eff:{base:+6,congress:-4,street:-2,auth:+3},
      res:'You anoint a successor with no primary, no vote, and a surname. Chet starts making calls of his own that afternoon, quietly, to people who are not you.' },
    { label:'Back Chet. The office deserves a normal process.', eff:{base:-3,congress:+4,press:+3,auth:+1},
      res:'You endorse the actual elected Vice President for the actual normal reason. It feels almost quaint, and Chet, for once, looks genuinely moved.' },
    { label:'Refuse to name anyone. Let them fight it out.', eff:{base:+3,congress:-3,street:-2,auth:+2},
      res:'You let the ambiguity fester, on purpose, because a movement fighting over your favor is a movement still entirely about you.' },
    { label:'Announce you are not going anywhere. Ever. Constitutionally speaking.', eff:{base:+7,congress:-6,courts:-5,press:-4,auth:+2}, wild:true,
      res:'You float staying on indefinitely, which resolves the succession question by simply refusing to have one. Chet and your daughter, for the first time all year, agree on something: this is worse for both of them.' }]},

/* ══════════════ THE STATE WEDDING ══════════════ */

{ id:'k-wedding-state-dinner', title:'The Wedding', who:C.state, min:8, max:46, tags:['family','diplomacy','money'],
  src:'a family wedding scheduled to double as an informal state dinner for a foreign delegation',
  text:'Muriel double-checks the guest list against the diplomatic one and finds them nearly identical. "Your ' +
       'niece\'s wedding is booked the same weekend as the Northmark trade delegation\'s visit, sir, at the same ' +
       'venue, with forty percent overlapping guests. Someone on your staff has started calling it, informally, ' +
       'the wedding summit."',
  choices:[
    { label:'Combine them officially. One event, one bill, one government.', eff:{base:+6,courts:-4,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'A wedding and a trade summit merge into a single event with a single caterer and a genuinely confusing seating chart. The government picks up a share of the tab nobody can fully itemize.' },
    { label:'Keep them separate. Different weekends, different budgets.', eff:{base:-3,courts:+4,press:+3,cash:-0.2,auth:+1},
      res:'Two events, two calendars, two budgets, zero overlap. It costs the family a rescheduling fee and buys everyone a clean line between family and government.' },
    { label:'Keep the venue, split the guest lists, call it a coincidence.', eff:{base:+2,press:-2,congress:-1,cash:+0.1,auth:+1},
      res:'Forty percent of the guests attend both events and pretend, gamely, not to notice the overlap.' },
    { label:'Have the delegation attend the wedding instead of a formal dinner.', eff:{base:+4,press:-3,congress:-4,courts:-2,cash:+0.1,auth:+1}, wild:true,
      res:'A foreign trade delegation slow-dances at your niece\'s wedding in lieu of a state dinner. The trade framework gets signed on a napkin at table twelve. It holds up, somehow, in court.' }]}

);
})();
