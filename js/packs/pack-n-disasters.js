/* ============================================================
   PACK N, DISASTERS AND THE RESPONSE  (any month)
   Hurricanes, wildfires, floods and blackouts, and the cynical
   management of all four: the photo op, the forecast map, the
   relief check, the stadium full of people with nowhere else to
   go. Original satire in the house voice. Sympathy for the
   victims is implied throughout and never the joke; the joke is
   always the management of them.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ HURRICANES AND THE FORECAST ══════════════ */

{ id:'n-storm-name', title:`The Storm's Name`, who:C.press, min:1, max:48, tags:['press','levity','gaffe'],
  text:`The National Weather Service has a hurricane forming in the Freedom Ocean, next on the alphabetical list. ` +
       `Kaylee has the memo. "It's due to be named Delores, sir. You've asked, twice this morning, whether the ` +
       `naming committee could instead call it Hurricane Cordelia, after the Opposition Leader. I want to be ` +
       `honest with you about how that meeting would go."`,
  choices:[
    { label:`Order it. Executive authority covers everything.`, eff:{base:+7,press:-6,congress:-3,courts:-2,auth:+3},
      res:`You direct a federal science agency to rename a hurricane after a political rival. The agency explains, in writing, to several lawyers, that this is not how naming works.` },
    { label:`Let the committee do its job. Say nothing.`, eff:{base:-3,press:+5,congress:+3,auth:+1},
      res:`Hurricane Delores makes landfall on schedule, named by the process built for it. Nobody outside the building notices the process worked, which is the point of a process.` },
    { label:`Name it after yourself instead. Sounds heroic.`, eff:{base:+6,press:-5,street:-3,auth:+2},
      res:`Hurricane Yourname flattens two towns. The branding does not survive first contact with the news cycle, and it never will again.` },
    { label:`Let Brayden run a fan poll for the name.`, eff:{base:+2,press:-7,street:-2,congress:-2,auth:-1}, wild:true,
      res:`The public write-in poll returns "Stormy McStormface" by a landslide of forty million votes. The Weather Service, against its own instincts, honors the result.` }]},

{ id:'n-hurricane-hunters', title:'The Hunter Flight', who:C.gen, min:1, max:48, tags:['vanity','levity'],
  text:`General Tarrant explains, again, what a hurricane hunter aircraft is for. "It flies into the eye of the ` +
       `storm to gather data, sir. It does not fly into the eye of the storm so you can post about it. These are, ` +
       `for the crew, two very different flights, and I would like the President on only one of them."`,
  choices:[
    { label:`Fly it. Livestream the whole descent.`, eff:{base:+8,press:-4,street:-2,congress:-2,auth:+3},
      res:`You post live from inside a hurricane. The ratings are extraordinary. The Air Force's insurance actuary requests a private word with General Tarrant.` },
    { label:`Let the crew fly it. Watch the data feed.`, eff:{base:-2,press:+4,congress:+3,auth:+1},
      res:`You review the pressure readings from the ground like a president who understands what the aircraft is actually for. Nobody writes about it, which is correct.` },
    { label:`Bring a film crew and a second, smaller plane.`, eff:{base:+6,press:-4,street:-3,cash:-0.2,auth:+2},
      res:`Two aircraft enter the eyewall so one can film the other. The pool footage is spectacular. The fuel bill is not, and neither is the memo from Flight Safety.` },
    { label:`Send the Vice President instead. He asked.`, eff:{base:+2,press:-5,street:-3,auth:-2}, wild:true,
      res:`Chet Danforth flies into a category three storm grinning the entire time, for reasons nobody in the West Wing fully investigates. He comes back oddly serene about everything.` }]},

{ id:'n-storm-surge-golf', title:'The Back Nine', who:C.sched, min:2, max:48, tags:['gaffe','press','levity'],
  text:`Boyd has the schedule and the radar loop open side by side. "The storm makes landfall at four, sir. Your ` +
       `tee time is at two. I've held both on the calendar because I was told, explicitly, not to choose for you."`,
  choices:[
    { label:`Play the full eighteen. Storms pass.`, eff:{base:+5,press:-6,street:-4,auth:+2},
      res:`You finish the back nine as the first bands reach the coast. The scorecard and the storm track run side by side on every channel for a week.` },
    { label:`Cancel. Head to the briefing room instead.`, eff:{base:-3,press:+5,street:+3,auth:+1},
      res:`You skip golf to watch a storm come ashore, which used to be an unremarkable thing for a president to do and is now, apparently, newsworthy.` },
    { label:`Play nine, and call it "monitoring conditions."`, eff:{base:+4,press:-5,street:-3,auth:+1},
      res:`A compromise nobody asked for. You watch the radar between shots and lose to your own Chief of Staff by four strokes, on the record.` },
    { label:`Invite the storm chaser network to play through.`, eff:{base:+3,press:-4,street:-3,congress:-1,auth:-1}, wild:true,
      res:`A television meteorologist and his cameraman join your foursome for six holes before the wind gets serious. It is, against all odds, good television for everyone but you.` }]},

{ id:'n-early-evacuation', title:'The Evacuation Order', who:C.home, min:2, max:44, tags:['disaster','street'],
  text:`Duane needs a decision before the six o'clock advisory. "The models agree, sir. Order the evacuation now ` +
       `and it costs us the rally tonight, the one the networks are already setting up for. Wait for the seven ` +
       `o'clock briefing and we lose four hours of daylight people need to actually leave."`,
  choices:[
    { label:`Hold the order till after the rally.`, eff:{base:+7,street:-9,press:-5,congress:-3,auth:+3},
      res:`The rally goes ahead on schedule. The evacuation order goes out four hours later, into the dark, onto roads that are already narrowing.` },
    { label:`Cancel the rally. Order the evacuation now.`, eff:{street:+7,press:+5,congress:+3,base:-6,auth:+1},
      res:`You lose an evening of cheering for four extra hours of daylight on the interstate. Nobody at the rally site ever finds out what they were spared.` },
    { label:`Move the rally to the evacuation route itself.`, eff:{base:+6,street:-10,press:-5,congress:-3,auth:+2},
      res:`Your supporters cheer as evacuating families idle past the stage in traffic. Several of them, understandably, do not cheer back.` },
    { label:`Evacuate the rally stage. Keep the crowd.`, eff:{base:+2,street:-4,press:-4,auth:-2}, wild:true,
      res:`You order your own stage struck and trucked to safety while several thousand supporters remain to hear the news secondhand. The optics defy easy description.` }]},

{ id:'n-confidence-interval', title:'The Confidence Level', who:C.cos, min:1, max:48, tags:['press','gaffe','levity'],
  text:`Deborah has the script for tonight's briefing. "The forecaster wants to say there's a sixty percent ` +
       `chance the storm turns north. You've asked her to say it's 'basically certain.' Those are not the same ` +
       `sentence, sir, and she is a scientist, and she knows the difference even if nobody watching does."`,
  choices:[
    { label:`Script the certainty. She reads what she's given.`, eff:{base:+6,press:-6,courts:-2,congress:-2,auth:+3},
      res:`The chief meteorologist reads a sentence she does not believe, on camera, and her face does the rest of the reporting for her.` },
    { label:`Let her say sixty percent. Explain the uncertainty.`, eff:{base:-3,press:+6,congress:+3,auth:+1},
      res:`The public hears a real number with a real error bar attached to it, which is the entire, unglamorous point of a forecast.` },
    { label:`Round it up to ninety. Closer, not certain.`, eff:{base:+5,press:-5,courts:-2,auth:+2},
      res:`A middle path that satisfies no one: less dishonest than certainty, more dishonest than sixty, and exactly as wrong when the storm does not turn.` },
    { label:`Let her present the raw spaghetti model, unedited.`, eff:{base:+2,press:-4,street:-3,auth:-2}, wild:true,
      res:`Nineteen unlabeled colored lines fill the screen for four minutes while the forecaster explains ensemble modeling to a visibly lost anchor desk. It airs anyway.` }]},

/* ══════════════ WILDFIRES ══════════════ */

{ id:'n-forest-floor', title:'The Raking', who:C.broom, min:4, max:48, tags:['disaster','congress'],
  text:`Roscoe has a slide titled "Efficiency Opportunities, Forest Service." "The fire crews want forty million ` +
       `for underbrush clearance, sir. My analysis says most of that forest just needs somebody out there raking ` +
       `it. I have not personally raked a forest. I stand by the analysis."`,
  choices:[
    { label:`Cut the clearance budget. Fund raking instead.`, eff:{base:+6,congress:-5,street:-4,press:-3,auth:+3},
      res:`Forty million in underbrush clearance becomes a much smaller line item for rakes. The following fire season is, in a coincidence nobody here will confirm, worse.` },
    { label:`Fund the clearance program in full.`, eff:{base:-3,congress:+5,street:+4,cash:-0.3,auth:+1},
      res:`The unglamorous forty million buys crews, chainsaws and containment lines nobody photographs. The next fire season is measurably smaller, and nobody notices the causal thread.` },
    { label:`Cut it entirely. Blame the last administration's forests.`, eff:{base:+6,congress:-6,street:-6,press:-3,auth:+3},
      res:`You attribute this season's fuel load to a president who left office years before this year's trees grew. It works on the people who were already going to believe it.` },
    { label:`Send BROOM interns out with actual rakes.`, eff:{base:+3,congress:-3,street:-3,press:-2,auth:-2}, wild:true,
      res:`Fourteen interns in matching vests rake six acres of a four-hundred-thousand-acre forest over a long weekend. The photos are earnest. The math is not on their side.` }]},

{ id:'n-orange-sky', title:'The Air Quality Index', who:C.health, min:1, max:48, tags:['disaster','press'],
  text:`Wendell has the reading and the recommendation. "The index is at four hundred, sir. That is not ` +
       `'unhealthy,' that is the top of the chart turning a color the chart doesn't usually need. The honest ` +
       `advisory tells eleven million people to stay inside for a week they can't afford to."`,
  choices:[
    { label:`Round the number down. Keep the economy open.`, eff:{base:+6,press:-6,street:-5,courts:-2,auth:+3},
      res:`The public index reads a number lower than the monitor's own number. The sky outside every window disagrees with the government website, loudly, and in orange.` },
    { label:`Publish the real number. Issue real guidance.`, eff:{base:-4,press:+6,street:+5,auth:+1},
      res:`The advisory is exactly as alarming as the air, and exactly as boring as public health always is when it's working. Emergency rooms report fewer visits, not more.` },
    { label:`Say the smoke is foreign and none of our business.`, eff:{base:+5,press:-5,street:-4,congress:-2,auth:+2},
      res:`You attribute a domestic fire's smoke to a neighboring country, geography permitting. Meteorologists find this claim easy to disprove, and do so, cheerfully, all week.` },
    { label:`Personally test the air by jogging outside, on camera.`, eff:{base:+3,press:-4,street:-3,auth:-2}, wild:true,
      res:`You complete a photographed half-mile in visibly unbreathable air to prove a point nobody asked you to prove. Dr. Prine schedules a follow-up before you've finished coughing.` }]},

{ id:'n-arson-theory', title:'The Arson Theory', who:C.fbi, min:6, max:48, tags:['disaster','street'],
  text:`Director Quist is reading from an actual file, which she wants on the record. "There is no evidence of ` +
       `coordinated arson, sir. There is a drought, a heat dome and forty years of fuel buildup. You told a ` +
       `rally it was 'foreign-backed arsonists.' I now have eleven agents fielding tips about a conspiracy that ` +
       `does not exist."`,
  choices:[
    { label:`Stand by it. Announce a federal arson task force.`, eff:{base:+7,street:-6,courts:-4,press:-4,congress:-2,auth:+4},
      res:`A task force is stood up to investigate a crime that isn't happening. It finds, over eight months and at real cost, nothing, and reports so quietly that nobody reads it.` },
    { label:`Correct the record. Fund actual fire science.`, eff:{base:-4,street:+5,press:+5,congress:+3,auth:+1},
      res:`You walk back the claim and fund the drought and fuel-load research instead. It is a smaller, truer story, and it's the one that actually helps next season.` },
    { label:`Name the specific "foreign group" anyway.`, eff:{base:+6,street:-8,press:-5,courts:-4,congress:-3,auth:+3},
      res:`You accuse a specific country of setting the fires with zero evidence. Their embassy issues a statement. Yours issues a walkback three weeks later that nobody reads as closely.` },
    { label:`Offer a reward for tips. Six figures. No leads required.`, eff:{base:+3,street:-5,press:-4,courts:-2,auth:-1}, wild:true,
      res:`A tip line collects four thousand calls, mostly about a neighbor's suspicious barbecue habits. Not one leads anywhere. The line stays open regardless, out of momentum.` }]},

{ id:'n-water-bomber-gift', title:'The Borrowed Planes', who:C.state, min:1, max:48, tags:['diplomacy','disaster'],
  text:`Muriel has the offer in hand. "Cathay is offering four water-bomber aircraft and crews, free of charge, ` +
       `while our own fleet is grounded for maintenance. It is a genuinely generous offer, sir. It is also, ` +
       `undeniably, a photo of their flag over our fire."`,
  choices:[
    { label:`Decline. We do not need anyone's help.`, eff:{base:+5,street:-7,press:-4,congress:-2,auth:+2},
      res:`You turn down four working aircraft on principle while three more subdivisions burn. The principle is intact. The subdivisions are not.` },
    { label:`Accept quietly. Thank them once, briefly.`, eff:{base:-2,street:+6,press:+4,congress:+2,auth:+1},
      res:`The planes fly, the fires slow, and the thank-you is one sentence at the bottom of a briefing. It is exactly as much credit as the moment requires.` },
    { label:`Accept, then claim the planes as an American win.`, eff:{base:+5,press:-5,street:+2,congress:-2,auth:+2},
      res:`You announce the borrowed fleet as evidence of "total American air superiority over fire." Cathay's ambassador requests a correction. You do not issue one.` },
    { label:`Accept, and offer them our national parks in return.`, eff:{base:+3,press:-4,congress:-4,courts:-2,auth:-2}, wild:true,
      res:`A verbal offer to "let them use a national park sometime" is treated, by a very confused State Department, as something that now has to be formally walked back in writing.` }]},

{ id:'n-rebuild-permit', title:'The Fast-Track Permit', who:C.gov, min:8, max:48, tags:['disaster','money'],
  text:`Governor Vasquez-Moore did not request this call. "Your office issued an emergency rebuilding permit to ` +
       `a donor's development company for six hundred acres of the burn scar, sir. In my state. I was informed ` +
       `by a press release, which is a new way to find out about my own state."`,
  choices:[
    { label:`It stands. Federal emergency authority overrides hers.`, eff:{base:+7,congress:-5,courts:-5,street:-3,auth:+4},
      res:`You override a sitting governor's land-use authority for a donor's benefit and call it disaster relief. The paperwork is federal. The optics are not going anywhere.` },
    { label:`Rescind it. Route the parcel through her office.`, eff:{base:-4,congress:+5,courts:+4,street:+3,auth:+1},
      res:`The permit goes back through the normal channel, slower and duller and considerably harder to write a scandal about.` },
    { label:`Fast-track nine more parcels, all to the same donor.`, eff:{base:+6,congress:-6,courts:-6,street:-4,cash:+0.3,auth:+3},
      res:`A single burn scar becomes a single company's real estate portfolio within the month. The paper trail is, at least, consistent.` },
    { label:`Offer the Governor a parcel too, to smooth it over.`, eff:{base:+2,congress:-4,courts:-3,street:-2,auth:-1}, wild:true,
      res:`You offer a sitting governor a plot of scorched land as a peace gesture. She declines in a statement that is somehow more damaging than if she'd simply said nothing.` }]},

/* ══════════════ FLOODS AND THE LEVEES ══════════════ */

{ id:'n-flood-zone-map', title:'The Redrawn Floodplain', who:C.ethics, min:6, max:48, tags:['disaster','courts'],
  text:`Miriam Applewhite does not enjoy this part of the job. "The updated flood-zone map removes forty acres ` +
       `from the hundred-year floodplain, sir. Those forty acres are owned by a company that gave two million to ` +
       `the inaugural fund. The engineers who drew the original line are asking, in writing, why it moved."`,
  choices:[
    { label:`Approve the redraw. Publish it Friday, quietly.`, eff:{base:+6,courts:-6,press:-4,congress:-3,auth:+3},
      res:`The line moves, the parcel becomes buildable, and the flood does not care where the map says it isn't supposed to go.` },
    { label:`Reject it. Let the engineers' line stand.`, eff:{base:-3,courts:+5,press:+4,congress:+2,auth:+1},
      res:`The map stays where the water actually goes, which turns out to be the more useful quality in a flood map.` },
    { label:`Redraw the whole county's floodplain, for consistency.`, eff:{base:+5,courts:-7,press:-5,congress:-3,cash:+0.2,auth:+3},
      res:`Half the county's flood insurance requirements vanish overnight. The insurers notice before the residents do, and reprice everything accordingly.` },
    { label:`Have the intern personally verify the elevation with a level.`, eff:{base:+2,courts:-4,press:-3,auth:-2}, wild:true,
      res:`Madison spends an afternoon in the field with a borrowed surveyor's level and, to everyone's genuine surprise, produces a more defensible number than the original consultant did.` }]},

{ id:'n-levee-inspection', title:'The Deferred Inspection', who:C.treas, min:4, max:48, tags:['disaster','congress'],
  text:`Lyle has the maintenance backlog spreadsheet open. "Six levees are overdue for federal inspection, sir. ` +
       `Funding lapsed eighteen months ago in a bill nobody remembers voting on. One of the six protects a city ` +
       `of four hundred thousand people. I'd like that one moved up the list."`,
  choices:[
    { label:`Defer all six again. Announce a tax cut instead.`, eff:{base:+7,congress:-5,street:-6,cash:+0.4,auth:+3},
      res:`The inspections lapse a second year running, funding the tax cut with money the levees were quietly using to not fail.` },
    { label:`Fund the inspections. All six, this quarter.`, eff:{base:-3,congress:+5,street:+5,cash:-0.4,auth:+1},
      res:`Six unglamorous inspections happen on schedule. Nothing newsworthy occurs, which for a levee is the only outcome anyone should ever want.` },
    { label:`Fund one levee. The one near your golf resort.`, eff:{base:+4,congress:-4,street:-6,cash:-0.1,auth:+2},
      res:`The inspected levee happens to protect a fairway you personally use eleven times a year. The other five, protecting considerably more people, remain on the list.` },
    { label:`Send the Army Corps band to play at each levee instead.`, eff:{base:+3,congress:-4,street:-5,cash:-0.1,auth:-2}, wild:true,
      res:`Six brass ensembles perform at six unrepaired levees. It is, structurally, the same amount of flood protection as before, with a woodwind section.` }]},

{ id:'n-sandbag-shortage', title:'The Sandbag Line', who:C.home, min:1, max:48, tags:['disaster','street'],
  text:`Duane has bad logistics news. "The sandbag supplier tripled the price the moment the river crested, sir. ` +
       `The National Guard can fill bags by hand, slower, or we pay the new price and have them by dawn. Either ` +
       `way, the line outside the depot is four hours long and getting wet."`,
  choices:[
    { label:`Pay it. Announce the surge as a rescue.`, eff:{base:+6,street:-4,press:-4,cash:-0.3,auth:+2},
      res:`You pay triple for sand in bags and hold a press conference about it. The supplier's margins have never looked better. Neither has your speech.` },
    { label:`Guard fills them by hand. Slower, cheaper.`, eff:{base:-3,street:+5,congress:+3,cash:+0.1,auth:0},
      res:`Soldiers fill bags through the night at the old price. It takes two extra hours the water, generously, provides.` },
    { label:`Let the price stand. Free market, free river.`, eff:{base:+3,street:-8,press:-5,congress:-3,auth:+2},
      res:`You cite market principles at a sandbag line four hours long and rising. The line does not find the principle comforting.` },
    { label:`Requisition every sandbag in three states, by force.`, eff:{base:+4,street:-4,congress:-5,courts:-4,cash:-0.2,auth:-1}, wild:true,
      res:`You federally seize a landscaping company's entire sand inventory across three states, including several tons earmarked for a children's beach volleyball tournament. The tournament is furious. The levee holds.` }]},

{ id:'n-dam-release', title:'The Gate at the Dam', who:C.gov, min:4, max:48, tags:['disaster','street'],
  text:`Governor Vasquez-Moore is on a secure line she requested personally. "The engineers say we open the ` +
       `spillway now, we flood eleven farms upstream on purpose, on our schedule. We don't, and the dam decides ` +
       `for us at three in the morning and takes the county seat with it. That decision is federal. It should ` +
       `not also be silent."`,
  choices:[
    { label:`Delay the release. It looks bad either way, so wait.`, eff:{base:+5,street:-9,press:-5,courts:-2,auth:+2},
      res:`The dam makes the decision at three in the morning exactly as predicted, on a schedule nobody chose and nobody can be blamed for choosing, which does not stop them from being blamed.` },
    { label:`Release now. Warn the eleven farms directly, tonight.`, eff:{base:-3,street:+5,press:+4,congress:+2,auth:+1},
      res:`Eleven farms flood on purpose, with warning, in daylight, and a county seat does not. It is a trade nobody thanks you for making correctly.` },
    { label:`Release without warning. Announce it afterward.`, eff:{base:+4,street:-10,press:-5,courts:-3,auth:+2},
      res:`Eleven farms flood with no notice at all, and the explanation arrives after the water does. The explanation, this time, is completely correct and entirely too late.` },
    { label:`Broadcast the release live, your hand on the wheel.`, eff:{base:+3,press:-5,street:-4,courts:-1,auth:-2}, wild:true,
      res:`You are photographed with your hand on a wheel a hydraulic engineer actually operates by computer from four hundred yards away. The wheel is decorative. Three engineers request, formally, that it not happen again.` }]},

{ id:'n-flood-insurance', title:'The Insurance Program', who:C.fed, min:6, max:48, tags:['disaster','money'],
  text:`Arthur Lindqvist brought a chart nobody wanted to see. "The federal flood program is twenty-eight ` +
       `billion underwater, sir, if you'll permit the phrase. Every payout this year is borrowed against payouts ` +
       `nobody's made yet. We can raise premiums, which every homeowner in a flood zone will feel by Tuesday, or ` +
       `keep borrowing."`,
  choices:[
    { label:`Freeze premiums. Blame the insurance industry publicly.`, eff:{base:+6,congress:-5,cash:-0.4,press:-3,auth:+2},
      res:`Premiums stay flat, popular and unfunded, while the program borrows further against a future that keeps arriving on schedule.` },
    { label:`Raise premiums modestly. Phase it over three years.`, eff:{base:-3,congress:+5,cash:+0.3,street:-2,auth:+1},
      res:`A boring, gradual fix that nobody at a ribbon-cutting will ever mention. The program is, for the first time in a decade, closer to solvent.` },
    { label:`Privatize the whole program. Let the market set the price.`, eff:{base:+5,congress:-6,street:-6,cash:+0.5,auth:+2},
      res:`Private insurers immediately price coverage out of reach for the highest-risk, lowest-income flood zones, which is to say, exactly the zones the program existed for.` },
    { label:`Have the Efficiency Czar "streamline" the claims process.`, eff:{base:+3,congress:-4,street:-5,cash:-0.2,auth:-2}, wild:true,
      res:`Roscoe's streamlined form removes a required field. It was the one asking whether the home is currently underwater. Claims get faster and considerably less accurate.` }]},

/* ══════════════ THE BLACKOUT ══════════════ */

{ id:'n-grid-failure', title:'The Grid Goes Down', who:C.energy, min:1, max:48, tags:['disaster','press'],
  text:`Cassandra Doyle has the outage map up, and it is mostly one color. "Nine million customers, sir. The ` +
       `proximate cause is a transformer failure during peak demand. The politically convenient cause, which ` +
       `three of your allies are already saying on television, is windmills. I would like it on the record that ` +
       `it was not windmills."`,
  choices:[
    { label:`Go with windmills. It's already trending.`, eff:{base:+6,press:-6,street:-4,courts:-2,auth:+3},
      res:`You blame a form of power generation responsible for four percent of the grid for an outage caused by a forty-year-old transformer. The transformer, notably, cannot be voted against.` },
    { label:`State the real cause. Fund grid hardening.`, eff:{base:-3,press:+5,congress:+4,street:+3,auth:+1},
      res:`The honest cause gets the honest fix. It will not trend, and it will mean fewer of these calls next summer, which nobody will notice either.` },
    { label:`Blame the last administration's grid neglect.`, eff:{base:+5,press:-4,street:-3,congress:-2,auth:+2},
      res:`You attribute a transformer built two decades before either administration to whoever was in office three years ago. It tests well with people who were not going to check.` },
    { label:`Personally visit the failed transformer for a photo.`, eff:{base:+3,press:-4,street:-3,auth:-2}, wild:true,
      res:`You are photographed standing next to a scorched grey box the size of a delivery van, pointing at it with evident authority. Nobody watching learns anything about the grid. Several learn what a transformer looks like.` }]},

{ id:'n-rolling-blackout', title:'The Rolling Blackout', who:C.energy, min:2, max:48, tags:['disaster','street'],
  text:`Cassandra has the rotation schedule and a problem with it. "To keep the whole grid from collapsing we're ` +
       `rotating outages by district, sir, forty minutes at a time. Someone in Scheduling quietly excluded the ` +
       `donor neighborhoods. I only just found the spreadsheet. I did not build the spreadsheet."`,
  choices:[
    { label:`Keep the exclusions. Deny they exist.`, eff:{base:+5,street:-8,press:-5,congress:-2,auth:+2},
      res:`The donor blocks stay lit through the whole crisis. The spreadsheet, inevitably, leaks, with column headers that make the intent difficult to dispute.` },
    { label:`Fix the rotation. Everyone shares it equally.`, eff:{base:-4,street:+6,press:+4,congress:+3,auth:+1},
      res:`Forty minutes of darkness, shared fairly, is a smaller story than forty minutes of darkness, shared unfairly. That is more or less the entire lesson of the crisis.` },
    { label:`Expand the exclusion list. Add three more donors.`, eff:{base:+5,street:-9,press:-5,congress:-3,cash:+0.2,auth:+2},
      res:`The list grows. So does its eventual audience, which by the time it leaks includes several people who did not ask to be on it.` },
    { label:`Sell tickets to watch the rotation from the balcony.`, eff:{base:+4,press:-5,street:-4,congress:-1,auth:-1}, wild:true,
      res:`You charge two hundred dollars a head to watch the blackout sweep across the city from the best seats in the capital. It sells out. It also becomes the single most quoted image of the whole crisis.` }]},

{ id:'n-generator-line', title:'The Generator List', who:C.cos, min:2, max:48, tags:['disaster','base'],
  text:`Deborah has a delivery manifest she'd rather not be holding. "Emergency generators, sir. Two hundred ` +
       `units, federally supplied, and somebody built the distribution list around donation tiers instead of ` +
       `medical need. There is a dialysis center on the waiting list, behind a car dealership that gave fifty ` +
       `thousand dollars."`,
  choices:[
    { label:`Ship the list as built. Priorities are priorities.`, eff:{base:+6,street:-9,press:-5,congress:-2,auth:+3},
      res:`Two hundred generators arrive exactly where the donor list said they should, and the dialysis center makes do with a smaller backup unit somebody found in a warehouse.` },
    { label:`Rebuild the list by medical need, tonight.`, eff:{base:-3,street:+6,press:+5,congress:+2,auth:+1},
      res:`The dialysis center gets a generator before dawn. The car dealership gets a very polite letter about next quarter's allocation.` },
    { label:`Keep the list. Publicly thank the donors for it.`, eff:{base:+5,street:-9,press:-5,congress:-3,auth:+2},
      res:`You publicly credit named donors for generators their donations directly purchased priority access to. It is, at least, an honest sentence, which is not the same as a defensible one.` },
    { label:`Auction the leftover generators for charity, live.`, eff:{base:+3,press:-4,street:-3,congress:-1,auth:-1}, wild:true,
      res:`You auction the last twenty federal generators for a good cause on live television while people without one are still waiting on a list. The charity total is impressive. So is the list.` }]},

{ id:`n-cyberattack-blame`, title:`The Cyberattack That Wasn't`, who:C.spy, min:6, max:48, tags:['disaster','press'],
  text:`Errol Hance has the actual forensics, which nobody particularly wants. "The grid failure was heat, sir. ` +
       `Demand outran capacity on the hottest day in state history. There is no evidence of a foreign cyberattack. ` +
       `I want to say clearly, before you say it on television, that I have looked, twice, and there is none."`,
  choices:[
    { label:`Announce it anyway. Name Rusalka specifically.`, eff:{base:+7,press:-6,courts:-3,congress:-2,auth:+3},
      res:`You accuse a foreign government of an attack your own intelligence chief says did not happen. Rusalka denies it. For once, they are telling the truth, and everyone in the room knows it.` },
    { label:`Announce the real cause. Demand and heat.`, eff:{base:-3,press:+5,congress:+3,auth:+1},
      res:`The unglamorous truth: too many air conditioners, one very hot day, aging infrastructure. It is a smaller headline and a more useful one.` },
    { label:`Announce an "ongoing investigation." Let it linger.`, eff:{base:+4,press:-5,courts:-3,congress:-2,auth:+2},
      res:`You imply a foreign hand without naming one, indefinitely. It costs nothing to say and everything to eventually walk back, which you do, quietly, in month nine.` },
    { label:`Order Hance to "find" evidence to fit the story.`, eff:{base:+3,press:-5,courts:-5,congress:-2,auth:-3}, wild:true,
      res:`Errol declines, in writing, on the grounds that intelligence assessments are not customizable. It is the single clearest act of insubordination of your term, and also the correct one.` }]},

{ id:'n-candlelight-address', title:'The Candlelight Address', who:C.writer, min:1, max:48, tags:['disaster','press','levity'],
  text:`Gideon has a draft and a lighting problem. "The blackout hits the Residence too, sir, which means the ` +
       `national address happens by candlelight whether we plan it or not. I can write around that, make it ` +
       `look intentional, or we can just say the power's out, like it actually is."`,
  choices:[
    { label:`Stage it as a deliberate show of resolve.`, eff:{base:+7,press:-4,street:-2,auth:+3},
      res:`You deliver eleven minutes of remarks by candlelight, framed as a defiant choice rather than a power outage. Four separate fact-checks establish, gently, that it was in fact a power outage.` },
    { label:`Say plainly the power is out. Keep it short.`, eff:{base:-2,press:+5,street:+3,auth:+1},
      res:`You tell the truth about a blackout in under ninety seconds by candlelight, which reads as more presidential than any lighting rig could have arranged.` },
    { label:`Blame the blackout on the broadcast crew's equipment.`, eff:{base:+4,press:-5,street:-2,auth:+2},
      res:`You suggest, without evidence, that the network's own equipment caused the outage in your own house. The network's engineers, who did not touch your building's power, are unimpressed.` },
    { label:`Read the address by flashlight, held under your chin.`, eff:{base:+2,press:-4,street:-3,auth:-2}, wild:true,
      res:`You deliver a national address lit from below like a campfire story, entirely unprompted. It becomes, within the hour, the most-clipped ninety seconds of your presidency for reasons unrelated to policy.` }]},

/* ══════════════ THE PHOTO OP ══════════════ */

{ id:'n-shelter-visit', title:'The Shelter Visit', who:C.social, min:1, max:48, tags:['disaster','press'],
  text:`Brayden has the gift bags ready. "Two thousand branded tote bags, sir, each with a water bottle, a ` +
       `keychain and a photo card of you giving a thumbs up. The shelter has four hundred people in it. I did ` +
       `the math wrong, or the order was wrong, one of those things is definitely wrong."`,
  choices:[
    { label:`Hand them all out anyway. Photo op first.`, eff:{base:+6,press:-6,street:-4,auth:+2},
      res:`You spend forty minutes distributing branded merchandise to people who lost their homes eleven hours ago. The footage runs everywhere. So does the footage of what people do with a keychain when they wanted a cot.` },
    { label:`Skip the bags. Ask what the shelter needs.`, eff:{base:-3,press:+5,street:+5,auth:+1},
      res:`You ask a shelter director a direct question and act on the answer: more cots, not more keychains. It is the least photogenic hour of the trip and the only useful one.` },
    { label:`Hand them out, and take a selfie with each recipient.`, eff:{base:+5,press:-7,street:-5,auth:+2},
      res:`Four hundred individual photographs are taken over ninety minutes at a disaster shelter, delaying dinner service twice. Every photo shows the same thumbs-up. None of them show a cot.` },
    { label:`Donate the merchandise budget, then give a speech about it.`, eff:{base:+3,press:-5,street:-3,congress:-1,auth:-1}, wild:true,
      res:`You redirect the entire merchandise budget to the shelter's actual costs, then spend forty minutes at a podium four miles away describing your own generosity. The shelter gets the money. The speech gets the headline.` }]},

{ id:`n-photoshopped-visit`, title:`The Trip That Didn't Happen`, who:C.photog, min:1, max:48, tags:['disaster','press','levity'],
  text:`Renata has bad news delivered as calmly as she can manage. "The trip to the flood zone was scrubbed this ` +
       `morning, sir, weather, and nobody told the graphics team. They've already composited you into the ` +
       `sandbag line from stock footage. It is, technically, extremely convincing."`,
  choices:[
    { label:`Release it. Deny it's composited if asked.`, eff:{base:+6,press:-7,courts:-3,street:-2,auth:+2},
      res:`A fabricated photograph of you sandbagging a river is released as real. A teenager on the internet finds the shadow inconsistency in forty minutes. It takes the wire services considerably longer to catch up.` },
    { label:`Kill it. Reschedule the real trip for Thursday.`, eff:{base:-3,press:+5,street:+3,auth:+1},
      res:`Nobody sees a fake photo because nobody released one. The real trip happens two days later, unremarkably, which is the correct amount of remark for a presidential visit.` },
    { label:`Release it with a disclaimer nobody will read.`, eff:{base:+4,press:-6,courts:-3,auth:+2},
      res:`A six-point-font caption reading "composite image, artist's rendering" runs beneath a photo designed to look exactly like it isn't one. The caption satisfies a lawyer. It satisfies nobody else.` },
    { label:`Go stand in a real sandbag line, press pool in tow.`, eff:{base:+3,press:-4,street:-3,congress:-1,auth:-1}, wild:true,
      res:`You show up specifically to disprove the fake photo, trailed by forty accredited journalists elbowing sandbaggers out of the way to get the shot proving it's not staged. It is, somehow, less convincing than the fake.` }]},

{ id:'n-helicopter-flyover', title:'The Flyover', who:C.gen, min:1, max:48, tags:['disaster','street'],
  text:`General Tarrant relays the advance team's assessment. "The crowd at the landing site is not entirely ` +
       `friendly, sir. We can still land, and take what comes, or fly a low pass over the wreckage and continue ` +
       `to the fundraiser. Only one of those is currently something I'm comfortable recommending."`,
  choices:[
    { label:`Fly over. Wave from the window. Keep moving.`, eff:{base:+5,street:-8,press:-5,auth:+2},
      res:`You are seen, from a great height, waving at a disaster you did not land in. The footage of the wave and the footage of the wreckage run in the same segment, unhelpfully, back to back.` },
    { label:`Land. Take the heckling. Walk the site anyway.`, eff:{base:-3,street:+6,press:+5,auth:+1},
      res:`You take twenty minutes of shouted, entirely justified anger in person, and walk the site anyway. It costs you the afternoon and buys you something the flyover never could.` },
    { label:`Cancel the site entirely. Go straight to the fundraiser.`, eff:{base:+4,street:-9,press:-5,congress:-2,auth:+2},
      res:`You skip the wreckage and are photographed, same day, holding a shrimp fork at a resort forty miles away. Nobody involved needs the juxtaposition explained to them.` },
    { label:`Land, but only long enough for the photo, engine running.`, eff:{base:+4,street:-5,press:-4,congress:-1,auth:-1}, wild:true,
      res:`You touch down for ninety seconds with the rotors still turning, wave, and lift off before anyone can ask a question. It technically counts as landing. Nobody watching believes that's what it was.` }]},

{ id:'n-giant-check', title:'The Giant Check', who:C.treas, min:1, max:48, tags:['disaster','press'],
  text:`Lyle has the prop and the real number, and they disagree. "The novelty check for the cameras says two ` +
       `billion, sir. The actual appropriated relief, after the usual congressional haircuts, is four hundred ` +
       `million. Somebody has to hold the giant cardboard one, and it should probably not be me."`,
  choices:[
    { label:`Hold the big number. Let the real one stay buried.`, eff:{base:+6,press:-6,congress:-3,auth:+2},
      res:`You are photographed grinning behind a check for five times the actual relief appropriation. The gap surfaces in a budget hearing four months later, to considerably less coverage than the photo got.` },
    { label:`Present the real number. Skip the prop.`, eff:{base:-3,press:+5,congress:+4,auth:+1},
      res:`Four hundred million, stated plainly, without a cardboard rectangle to inflate it. It is a smaller photo and a truer one.` },
    { label:`Print two checks. Big one for cameras, real one filed quietly.`, eff:{base:+5,press:-6,courts:-2,congress:-3,auth:+2},
      res:`Two documents exist describing the same relief package at two different values. Only one of them is a legal instrument. Both of them end up in evidence somewhere.` },
    { label:`Auction the giant novelty check as a collectible.`, eff:{base:+3,press:-5,street:-3,congress:-1,auth:-1}, wild:true,
      res:`The oversized cardboard check for two billion dollars is auctioned as campaign memorabilia for forty thousand dollars. It is, technically, more money than the check itself represents in some quarters, and considerably better documented.` }]},

{ id:'n-rally-near-ground-zero', title:'The Rally Near the Wreckage', who:C.poll, min:2, max:48, tags:['disaster','street'],
  text:`Nadia has the numbers and the map. "Your approval is strongest within fifty miles of the disaster zone ` +
       `right now, sir, sympathy effect, it happens every time. My honest recommendation is a rally there, this ` +
       `week, while the number's still warm."`,
  choices:[
    { label:`Book it. Stage the rally at the edge of the wreckage.`, eff:{base:+8,street:-6,press:-5,congress:-2,auth:+3},
      res:`You hold a campaign rally with the disaster zone visible over your shoulder, and the sympathy bump you were chasing curdles, on camera, into something closer to disgust.` },
    { label:`Skip the rally. Send resources instead of a stage.`, eff:{base:-3,street:+5,press:+4,auth:+1},
      res:`You let the sympathy be sympathy and send trucks instead of a podium. The poll number rises anyway, more slowly, and holds longer.` },
    { label:`Rally there, and sell merchandise at the door.`, eff:{base:+7,street:-9,press:-5,congress:-3,cash:+0.3,auth:+3},
      res:`A folding table sells branded hats forty yards from a collapsed roof. The receipts are excellent. The footage of the table is the story for the rest of the week.` },
    { label:`Cancel it. Livestream a relief telethon in the same slot.`, eff:{base:+3,press:-4,street:-3,congress:-1,cash:-0.1,auth:-1}, wild:true,
      res:`The rally becomes a telethon in the same time slot with the same production budget. It raises real money and reads, to several critics, as the rally with a different hat on.` }]},

/* ══════════════ RELIEF MONEY AND CONTRACTORS ══════════════ */

{ id:'n-no-bid-contract', title:'The No-Bid Contract', who:C.lawyer, min:6, max:48, tags:['disaster','courts'],
  text:`Sy has the contract flagged in the color he reserves for real problems. "Debris removal, sir, four ` +
       `hundred million dollars, awarded without a bidding process to a company incorporated six weeks ago. Its ` +
       `registered address is a shipping store. Its listed president is your golf caddy's brother-in-law. I ` +
       `checked twice."`,
  choices:[
    { label:`Sign it. Emergencies don't wait for paperwork.`, eff:{base:+6,courts:-7,press:-5,congress:-3,auth:+3},
      res:`Four hundred million moves to a six-week-old company with no equipment, no crew and a shipping store for an address. The debris, notably, remains exactly where it was.` },
    { label:`Cancel it. Open a real, fast bidding process.`, eff:{base:-4,courts:+6,press:+5,congress:+3,auth:+1},
      res:`An actual competitive process, run in days instead of months because the law allows for exactly that in an emergency. Debris starts moving within the week.` },
    { label:`Sign it, and award a second contract to check its work.`, eff:{base:+5,courts:-8,press:-5,congress:-4,cash:-0.2,auth:+3},
      res:`A shell company is now overseen by a second shell company. Neither owns a truck. The debris field is, at this point, essentially a permanent landmark.` },
    { label:`Have the Efficiency Czar personally inspect the address.`, eff:{base:+3,courts:-4,press:-3,auth:-2}, wild:true,
      res:`Roscoe drives to the address himself and stands, for a photo, next to a wall of rented mailboxes. He files a report. The report is one sentence long and extremely accurate.` }]},

{ id:'n-temporary-housing', title:'The Temporary Housing', who:C.home, min:6, max:48, tags:['disaster','street'],
  text:`Duane has an inspection report he'd rather summarize than read aloud. "The emergency housing units, sir. ` +
       `Eleven thousand of them, delivered on schedule, at a very good price. The manufacturer cut corners on ` +
       `ventilation to hit that price. Families have been living in them for four months. The headaches started ` +
       `in month two."`,
  choices:[
    { label:`Deny the ventilation issue. Extend the contract.`, eff:{base:+5,street:-9,press:-5,courts:-3,auth:+3},
      res:`You extend a housing contract for units your own inspectors have flagged as unsafe, and eleven thousand families keep the headaches while the paperwork keeps insisting there aren't any.` },
    { label:`Recall the units. Pay for real remediation.`, eff:{base:-4,street:+6,press:+5,cash:-0.4,auth:+1},
      res:`A recall, a fix, and a much larger bill than anyone wanted to write. Eleven thousand families get a working vent instead of a press release.` },
    { label:`Blame the families for "improper use" of the units.`, eff:{base:+4,street:-10,press:-5,congress:-2,auth:+2},
      res:`You suggest, in an official statement, that displaced families are ventilating their own trailers incorrectly. The statement does not survive contact with a single interview.` },
    { label:`Move into a unit yourself, cameras invited the whole week.`, eff:{base:+3,press:-4,street:-3,congress:-1,auth:-1}, wild:true,
      res:`You spend a televised week in the flagged trailer while camera crews document every headache. Ratings are strong. So, still, is the ventilation problem, four months on.` }]},

{ id:'n-relief-fund-diversion', title:'The Diverted Fund', who:C.speaker, min:8, max:48, tags:['disaster','congress'],
  text:`Hal Grimes is holding the appropriations bill like it might go off. "The relief package cleared ` +
       `committee, sir, four hundred million for the flood zone. Somebody in your office attached a rider ` +
       `redirecting sixty million of it to the Residence ballroom renovation. Eleven arsonists in my caucus are ` +
       `already asking me about it."`,
  choices:[
    { label:`Keep the rider. It's already attached.`, eff:{base:+6,congress:-8,press:-5,street:-4,cash:+0.3,auth:+3},
      res:`Sixty million of flood relief funds a chandelier. The rider survives the vote by two seats and a great many favors that will need repaying.` },
    { label:`Strip the rider. Send the full amount to the flood zone.`, eff:{base:-4,congress:+6,press:+5,street:+4,auth:+1},
      res:`Four hundred million arrives where it says it will arrive. It is a genuinely unremarkable outcome, and it passes committee a second time without incident.` },
    { label:`Double the rider. Add a fountain.`, eff:{base:+5,congress:-9,press:-5,street:-5,cash:+0.2,auth:+3},
      res:`The ballroom now gets a fountain on top of the chandelier, both funded from a flood relief bill. Even the eleven arsonists find something to object to here.` },
    { label:`Let the Speaker defend the rider on the House floor himself.`, eff:{base:+3,congress:-4,press:-4,street:-1,auth:-1}, wild:true,
      res:`You force Hal Grimes to publicly justify a ballroom fountain rider on the House floor, on camera, to his own caucus. He does it, badly, and it is quoted for a decade.` }]},

{ id:'n-price-gouging-law', title:'The Price of Water', who:C.ag, min:2, max:48, tags:['disaster','street'],
  text:`Bo Slaughter has a stack of complaints and a decision to make. "Bottled water is nine dollars a case in ` +
       `the disaster zone, sir. It was two dollars a week ago. The price-gouging statute is clear and it's on my ` +
       `desk. The distributor is also a major donor. I'd like guidance before I do anything a court can ask me ` +
       `about later."`,
  choices:[
    { label:`Let it ride. The market will sort it out.`, eff:{base:+5,street:-9,press:-5,courts:-2,auth:+2},
      res:`Water stays at nine dollars a case for a population that just lost everything. The market does, eventually, sort it out, mostly by people going without.` },
    { label:`Enforce the statute. Cap the price today.`, eff:{base:-3,street:+6,press:+4,congress:+2,auth:+1},
      res:`The law that already existed gets used for what it was written for. Water drops to two dollars by evening. Nobody writes a headline about a law simply working.` },
    { label:`Enforce it, but grant the donor a quiet exemption.`, eff:{base:+4,street:-6,courts:-4,press:-4,auth:+2},
      res:`You enforce a price-gouging law against everyone except the one distributor whose exemption you personally signed. The exemption memo is, unfortunately for you, a public record.` },
    { label:`Airlift water in personally, on the campaign plane.`, eff:{base:+3,press:-5,street:-3,congress:-1,cash:-0.2,auth:-1}, wild:true,
      res:`You have the campaign jet reconfigured to fly pallets of water into the disaster zone personally, at a cost far exceeding the water's value, and call it a rescue mission. It gets four cases to four families and a very good aerial shot.` }]},

{ id:'n-celebrity-telethon', title:'The Telethon', who:C.social, min:2, max:48, tags:['disaster','money','levity'],
  text:`Brayden has the pledge total and a footnote. "Eighty million dollars raised on the telethon, sir. Forty ` +
       `of it is already committed to relief. The other forty is sitting in an 'administrative fund' that, near ` +
       `as I can tell, is mostly paying for the telethon."`,
  choices:[
    { label:`Leave it. Administrative costs are normal.`, eff:{base:+5,press:-5,street:-5,cash:+0.3,auth:+2},
      res:`Half the money raised for disaster victims funds the production that asked for the money. It is, technically, within the range telethons usually run. It is not a range anyone should be proud of.` },
    { label:`Cap admin costs at five percent. Redirect the rest.`, eff:{base:-3,street:+6,press:+5,cash:-0.1,auth:+1},
      res:`Thirty-six million more dollars reaches the flood zone than would have otherwise. It is the least entertaining hour of television produced all year, and the most useful.` },
    { label:`Take a producer credit and a cut of future specials.`, eff:{base:+5,press:-6,street:-6,cash:+0.3,auth:+2},
      res:`You personally attach yourself to the telethon's ongoing revenue stream. A disaster relief broadcast now has a line item for your production fee, which someone eventually finds.` },
    { label:`Match the donations personally, from campaign funds.`, eff:{base:+3,press:-3,courts:-4,cash:-0.5,auth:-2}, wild:true,
      res:`You direct forty million in campaign donations to disaster relief, which several campaign finance lawyers immediately point out is not what campaign funds are legally for. The money still arrives. The filing does not stop being a problem.` }]},

/* ══════════════ THE DISPLACED ══════════════ */

{ id:'n-stadium-shelter', title:'The Stadium', who:C.home, min:1, max:48, tags:['disaster','street'],
  text:`Duane has been at the stadium since dawn. "Six thousand people, sir, in a building meant for events, not ` +
       `for living. The air conditioning is failing in this heat. The bathrooms weren't built for this ` +
       `population for this long. We need to move people out faster than we're moving them in, and right now ` +
       `it's the reverse."`,
  choices:[
    { label:`Keep the cameras out. Manage the story, not the crowd.`, eff:{base:+5,street:-9,press:-5,auth:+2},
      res:`Reporters are kept off the stadium floor while conditions inside get worse. The story runs anyway, three days later, sourced entirely from people who were there and had phones.` },
    { label:`Fix the AC. Bring in mobile showers and staff.`, eff:{base:-3,street:+6,press:+4,cash:-0.3,auth:+1},
      res:`Six thousand people get working air conditioning and clean bathrooms within forty-eight hours. It costs real money and produces no photograph anyone wants to take.` },
    { label:`Move people to a second, smaller stadium instead.`, eff:{base:+4,street:-7,press:-5,auth:+2},
      res:`Six thousand people are relocated to a facility built for four thousand, which solves nothing and adds a bus ride.` },
    { label:`Livestream a 24-hour telethon from inside the stadium.`, eff:{base:+3,press:-5,street:-3,congress:-1,auth:-1}, wild:true,
      res:`A twenty-four hour broadcast is staged inside the stadium among the cots, complete with a house band. It raises meaningful money. Six thousand people try to sleep through a saxophone solo at two in the morning.` }]},

{ id:'n-pets-left-behind', title:'The Pet Policy', who:C.intern, min:1, max:48, tags:['disaster','levity'],
  text:`Madison has been fielding this call all morning, which is unusual, because it is usually not her job. ` +
       `"Sir, the federal shelters don't allow pets, and a lot of people are refusing to evacuate because of it. ` +
       `There's a man on television right now saying he'll ride out the flood with his dog rather than leave ` +
       `him behind."`,
  choices:[
    { label:`Leave the policy. Emphasize personal responsibility.`, eff:{base:+4,street:-8,press:-4,auth:+2},
      res:`The no-pets policy stands, and evacuation compliance in the flood zone drops by nearly a third. Several people ride out a flood they didn't have to, on principle, next to a dog.` },
    { label:`Fund pet-friendly shelter annexes immediately.`, eff:{base:-3,street:+6,press:+4,cash:-0.2,auth:+1},
      res:`A fenced annex next to each shelter, with water bowls and a volunteer vet on call. Compliance jumps overnight, because it turns out the dog was never the problem, the policy was.` },
    { label:`Offer to have pets "processed" by animal control.`, eff:{base:+3,street:-9,press:-5,auth:+2},
      res:`The word "processed" reaches the man on television within the hour. He does not leave the flood zone. Neither does his dog.` },
    { label:`Adopt the man's dog personally, live, on camera.`, eff:{base:+3,press:-4,street:-2,congress:-2,auth:-1}, wild:true,
      res:`You are photographed holding a stranger's golden retriever while the actual owner, three feet away, is still refusing to evacuate, and Animal Control opens a jurisdictional dispute over who technically has custody now.` }]},

{ id:'n-national-guard-standoff', title:'The Federalized Guard', who:C.gov, min:10, max:48, tags:['disaster','congress'],
  text:`Governor Vasquez-Moore is not asking this time, she is informing. "You federalized my National Guard ` +
       `without my request, sir, to run shelter security I did not think needed federalizing. I have four ` +
       `hundred soldiers who report to me every other week of the year suddenly reporting to the Pentagon during ` +
       `the one week my state actually needs them locally."`,
  choices:[
    { label:`Keep them federalized. Command belongs at the top.`, eff:{base:+8,congress:-6,courts:-5,street:-4,auth:+6},
      res:`You seize control of a state's Guard over a shelter security detail, which is a use of federal power roughly a hundred times larger than the problem it solves.` },
    { label:`Return command. Coordinate through her office.`, eff:{base:-4,congress:+6,courts:+5,street:+4,auth:+1},
      res:`Command reverts to the Governor, and the shelters get security through the ordinary chain nobody outside the state ever needed to know existed.` },
    { label:`Federalize a second state's Guard, preemptively.`, eff:{base:+6,congress:-8,courts:-6,street:-5,auth:+5},
      res:`You extend the seizure to a state that hasn't even had a disaster yet, on the theory that it might. Two governors are now coordinating a joint legal response instead of two separate disaster responses.` },
    { label:`Deputize her, but require a federal uniform for the photos.`, eff:{base:+3,congress:-4,street:-3,press:-2,auth:-1}, wild:true,
      res:`You grant genuine authority and then insist on a costume for the cameras. She agrees to the authority and declines the uniform in the same sentence, which becomes the sentence everyone quotes.` }]},

{ id:'n-school-shelter', title:'The School Gym', who:C.edu, min:4, max:48, tags:['disaster','congress'],
  text:`Bernadette Ollis has a calendar problem nobody wants to own. "Fourteen schools are still shelters, sir, ` +
       `four months after the storm. The school year starts in three weeks. We can reopen them and move families ` +
       `out with nowhere to go, or delay the year again, for the second time."`,
  choices:[
    { label:`Reopen on schedule. Move families out this week.`, eff:{base:+5,street:-8,congress:-3,press:-4,auth:+2},
      res:`Fourteen schools reopen on time and several hundred families are relocated to a parking lot with a portable toilet, technically outdoors, technically not the school's problem anymore.` },
    { label:`Delay two weeks. Fund emergency housing in the gap.`, eff:{base:-3,street:+5,congress:+3,cash:-0.2,auth:+1},
      res:`A short, funded delay gives families somewhere real to go before the gym becomes a classroom again. It costs two weeks of school and buys a much smaller headline than the alternative.` },
    { label:`Reopen half. Consolidate shelters into the rest.`, eff:{base:+4,street:-6,congress:-3,press:-3,auth:+2},
      res:`Seven schools reopen and seven get more crowded, doubling the density of shelters that were already at capacity, to hit a schedule nobody examined closely.` },
    { label:`Hold classes inside the shelters, alongside the cots.`, eff:{base:+2,press:-4,street:-2,congress:-3,auth:-2}, wild:true,
      res:`First grade meets six feet from a row of donated cots for three weeks, while the school board sues over instructional-time requirements it insists were violated either way.` }]},

{ id:'n-displaced-vote', title:'The Displaced Voter', who:C.poll, min:12, max:48, tags:['disaster','congress'],
  text:`Nadia has cross-referenced the voter rolls against the shelter rosters, which is not, strictly, her job. ` +
       `"Forty thousand registered voters from the flood zone don't have a mailing address anymore, sir. That ` +
       `district historically leans your opponent's way by six points. There's a decision here about how hard ` +
       `we make it to fix an absentee ballot when you don't have an address."`,
  choices:[
    { label:`Let the address requirement stand. Not our problem.`, eff:{base:+6,street:-8,courts:-5,congress:-3,auth:+3},
      res:`Forty thousand flood survivors lose their vote to a paperwork requirement that assumes everyone still has a mailbox. The district that would have leaned against you, functionally, doesn't get to.` },
    { label:`Waive the requirement. Shelter address counts.`, eff:{base:-4,street:+6,courts:+5,congress:+3,auth:+1},
      res:`A shelter cot becomes, for one election, a legal mailing address. Forty thousand people who lost a house keep a vote, which turns out to be the smaller thing to lose but the harder one to justify taking.` },
    { label:`Waive it, but only in districts that favor you.`, eff:{base:+5,street:-6,courts:-7,congress:-4,auth:+3},
      res:`You extend the waiver selectively, by district, in a memo that states the selection criteria plainly enough for a court to read it back to you.` },
    { label:`Send Madison to hand-deliver forty thousand ballots.`, eff:{base:+2,press:-4,street:-2,congress:-3,auth:-2}, wild:true,
      res:`One intern is assigned forty thousand households, and a press pool insists on filming the first four hundred doors, turning ballot delivery into a campaign ad that congressional staff immediately flag as an in-kind contribution.` }]},

/* ══════════════ BLAME AND OPTICS ══════════════ */

{ id:'n-blame-governor', title:'The Withheld Aid', who:C.gov, min:6, max:48, tags:['disaster','congress'],
  text:`Governor Vasquez-Moore's state has a disaster and a request in, and both have been sitting for eleven ` +
       `days. Deborah delivers the read on it. "She hasn't endorsed the infrastructure bill, sir, and the aid ` +
       `request is sitting on your desk unsigned. I don't think that's a coincidence. I don't think you think ` +
       `it's a coincidence either."`,
  choices:[
    { label:`Hold it. Let her feel the leverage.`, eff:{base:+7,congress:-6,street:-7,press:-5,auth:+4},
      res:`You leave a disaster declaration unsigned to pressure a governor's vote on an unrelated bill, and eleven more days pass in a state that is, by any measure, still flooded.` },
    { label:`Sign it. Aid isn't a bargaining chip.`, eff:{base:-4,congress:+5,street:+6,press:+5,auth:+1},
      res:`The declaration is signed the day it should have been signed. It does not move a single vote on the infrastructure bill, and it was never supposed to.` },
    { label:`Sign it, but route it through a slower agency channel.`, eff:{base:+5,congress:-4,street:-8,press:-5,auth:+3},
      res:`The declaration is technically signed and practically delayed by three more weeks of routine processing that becomes, in this context, very obviously not routine.` },
    { label:`Sign it, but make her ask twice, on live television.`, eff:{base:+3,congress:-4,street:-3,press:-3,auth:-1}, wild:true,
      res:`You stage the call for cameras, making a sitting governor visibly repeat her request for federal disaster aid on live television before you agree. The aid arrives. So does the clip, forever.` }]},

{ id:'n-fire-the-forecaster', title:'The Fired Forecaster', who:C.press, min:2, max:48, tags:['disaster','press'],
  text:`Kaylee has the resignation letter, except it isn't a resignation. "You fired the regional weather ` +
       `service director this morning for a forecast that undershot the storm by six hours, sir. She's been ` +
       `doing this for twenty-two years. The forecast was within the normal error margin for a storm that size. ` +
       `I need to know what I'm telling the room in nine minutes."`,
  choices:[
    { label:`She's fired. Say she cost lives. Move on.`, eff:{base:+6,press:-8,courts:-3,congress:-2,auth:+3},
      res:`You fire a career forecaster over a normal margin of error and announce it as accountability. Every meteorologist who hears about it starts padding their confidence intervals, which makes every future forecast worse.` },
    { label:`Reinstate her. Say the error margin was normal.`, eff:{base:-4,press:+6,congress:+3,auth:+1},
      res:`A twenty-two year career is not ended over statistics doing what statistics do. It's a quiet correction, and the right one.` },
    { label:`Fire her, and the whole regional office with her.`, eff:{base:+5,press:-9,courts:-4,congress:-3,auth:+3},
      res:`An entire regional forecasting office is dismissed over one storm's timing. The next storm in that region is forecast, understaffed, by a team three states away who have never seen the local terrain.` },
    { label:`Offer her your job for a week to see how she likes it.`, eff:{base:+2,press:-4,street:-2,congress:-2,auth:-2}, wild:true,
      res:`You propose, apparently seriously, a one-week job swap with a federal meteorologist. She declines in a two-sentence email that several staffers privately admit is the best writing to come out of the building all month.` }]},

{ id:'n-swing-state-declaration', title:'The Declaration Speed', who:C.cos, min:8, max:48, tags:['disaster','congress'],
  text:`Deborah has the timeline laid out flat on the desk. "The flood in Kansaw, which you carried by nine ` +
       `points, got a disaster declaration in six hours. The flood in Meridia, which you lost, is on day four ` +
       `with no declaration and no explanation from this office as to why."`,
  choices:[
    { label:`Keep the gap. Meridia can wait for the paperwork.`, eff:{base:+6,congress:-6,street:-8,press:-5,auth:+3},
      res:`A state that voted against you waits four extra days for federal disaster relief while an identical flood two states over cleared in an afternoon. Both facts end up in the same news cycle, next to each other.` },
    { label:`Declare both on the same clock. Every time.`, eff:{base:-4,congress:+6,street:+6,press:+5,auth:+1},
      res:`A uniform six-hour standard, regardless of how the county voted. It is unglamorous, and it is, as it happens, the law's actual intent.` },
    { label:`Speed up Kansaw further. Let Meridia sit longer.`, eff:{base:+5,congress:-7,street:-9,press:-5,auth:+3},
      res:`You widen the gap instead of closing it, publicly, while a reporter with a calendar and a map does the rest of the work for you.` },
    { label:`Let Deborah sign both, blind to the electoral maps.`, eff:{base:+3,congress:-3,street:-3,press:-3,auth:-1}, wild:true,
      res:`Deborah signs both declarations blind to the electoral maps, correctly. You then take personal credit for the evenhandedness in a speech that undoes about half the goodwill the decision earned.` }]},

{ id:'n-weather-weapon', title:'The Weather Weapon', who:C.spy, min:6, max:48, tags:['disaster','levity'],
  text:`Errol Hance is choosing his words with visible effort. "A rally speaker said, on stage, last night, that ` +
       `Rusalka has a machine that steers hurricanes. Sir, I run an actual intelligence agency. I would know. ` +
       `Nobody has a hurricane machine. I need you to either say that, or not ask me to help you not say that."`,
  choices:[
    { label:`Neither confirm nor deny. Let it simmer.`, eff:{base:+6,press:-5,street:-3,congress:-2,auth:+3},
      res:`You decline to correct a rally speaker's claim that a rival country controls the weather. The theory metastasizes into three cable segments and a congressional letter demanding a classified briefing on a machine that does not exist.` },
    { label:`Correct it plainly. There is no weather machine.`, eff:{base:-4,press:+6,congress:+3,auth:+1},
      res:`A short, clear, boring statement: no such technology exists, on any side, according to actual intelligence assessments. It ends the story in a day.` },
    { label:`Claim we have a bigger weather machine.`, eff:{base:+5,press:-5,street:-3,courts:-2,auth:+2},
      res:`You imply, without specifics, that American weather-control capability exceeds anyone else's. Errol is asked to brief three senators on a program he has just finished explaining does not exist.` },
    { label:`Request an actual classified briefing on hurricane steering.`, eff:{base:+2,press:-4,congress:-3,auth:-2}, wild:true,
      res:`A genuine intelligence briefing is convened, at real cost, on the feasibility of hurricane steering technology. The answer, delivered after six analysts spend a week on it, is a single word: no.` }]},

{ id:'n-anniversary-tour', title:'The Anniversary Tour', who:C.hist, min:14, max:48, tags:['disaster','press'],
  text:`Dr. Weir has the itinerary and a discomfort about it she is choosing to voice. "It's the one-year ` +
       `anniversary of the flood, sir. The tour plan has you visiting the rebuilt town square, which is real and ` +
       `does look wonderful. It does not mention that six thousand people two miles away are still in temporary ` +
       `housing, off camera, on purpose."`,
  choices:[
    { label:`Keep the route. The square photographs beautifully.`, eff:{base:+6,press:-6,street:-6,auth:+3},
      res:`A single rebuilt block stands in for a recovery that is, two miles away, nowhere close to finished. The footage is genuinely beautiful and genuinely misleading, in exactly equal measure.` },
    { label:`Route through the temporary housing too. Full picture.`, eff:{base:-3,press:+5,street:+6,congress:+2,auth:+1},
      res:`You walk both the finished square and the six thousand people still waiting behind it. It is a worse photo and a truer anniversary.` },
    { label:`Skip the town entirely. Send a wreath instead.`, eff:{base:+3,press:-5,street:-7,auth:+2},
      res:`A wreath arrives by courier in lieu of a president, on the anniversary of a flood that killed people from that town. The gesture is noted, mostly for its distance.` },
    { label:`Move into the temporary housing, but the family moves to a hotel first.`, eff:{base:+3,press:-5,street:-4,congress:-1,auth:-1}, wild:true,
      res:`You spend the anniversary night in a unit vacated, for the occasion, by the family who actually lives there, who spend the night in a hotel you did not offer them again after the cameras left.` }]}

);
})();
