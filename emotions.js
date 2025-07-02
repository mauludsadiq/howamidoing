const emotions = {
  "abandon":15,"abandoned":15,"abandonment":15,"abate":8,"abhor":17,"abhorrence":17,"abhorrent":17,"abiding":1,"ability":1,"able":1,"abnormal":12,"abolish":13,"abominable":17,"abomination":17,"abound":5,"absolve":8,"absorbed":9,"absurd":12,"abundance":0,"abundant":0,
  "abuse":13,"abusive":13,"accept":1,"acceptable":1,"acceptance":1,"accepted":1,"accessible":1,"acclaim":7,"acclaimed":7,"accolade":7,"accommodate":1,"accomplish":7,"accomplished":7,"accomplishment":7,"accord":1,"accountable":1,"accumulate":1,"accurate":1,"accusation":13,"accuse":13,
  "accused":13,"accusing":13,"ache":15,"achieve":7,"achievement":7,"acknowledge":6,"acquiesce":1,"active":5,"activist":5,"actor":1,"actual":1,"acumen":1,"adapt":1,"addict":19,"addicted":19,"addiction":19,"adept":1,"adequate":1,"adhere":1,"adjourn":1,
  "admire":6,"admired":6,"admirer":6,"admiring":6,"admission":1,"admit":1,"adorable":3,"adore":3,"adored":3,"adoring":3,"adoration":3,"adorn":3,"advance":7,"advantage":1,"adventure":5,"adversary":13,"adversity":15,"advice":1,"advise":1,"advised":1,
  "advocate":1,"affable":2,"affection":3,"affectionate":3,"affectionately":3,"affinity":3,"affirm":1,"affirmation":1,"afflict":15,"affliction":15,"affluent":7,"afraid":14,"aggravate":13,"aggravated":13,"aggravating":13,"aggression":13,"aggressive":13,"aggressor":13,"agitated":19,"agitation":19,
  "agonize":15,"agonized":15,"agonizing":15,"agony":15,"agree":1,"agreeable":1,"agreement":1,"aid":1,"ailment":15,"aim":1,"air":9,"alarm":14,"alarmed":14,"alarming":14,"alert":14,"alienate":16,"alienated":16,"alienation":16,"alive":5,"allay":8,
  "allegiance":1,"alliance":1,"allocate":1,"allow":1,"allowed":1,"allowing":1,"allure":3,"alluring":3,"ally":1,"altruism":6,"altruistic":6,"amaze":5,"amazed":5,"amazement":5,"amazing":5,"ambassador":1,"ambiguous":12,"ambition":5,"ambitious":5,"ameliorate":8,
  "amenable":1,"amiable":2,"amicable":2,"amity":2,"amorous":3,"amuse":5,"amused":5,"amusement":5,"amusing":5,"anger":13,"angered":13,"angering":13,"angry":13,"anguish":15,"anguished":15,"animate":5,"animated":5,"animation":5,"annihilate":13,"annihilation":13,
  "annoy":13,"annoyance":13,"annoyed":13,"annoying":13,"anonymous":10,"antagonism":13,"antagonist":13,"antagonistic":13,"anticipate":5,"anticipation":5,"anxiety":19,"anxious":19,"apathetic":11,"apathy":11,"apologetic":8,"apologize":8,"apology":8,"appeal":5,"appealing":5,"appetite":1,
  "applaud":7,"applause":7,"appreciate":6,"appreciated":6,"appreciating":6,"appreciation":6,"apprehend":14,"apprehension":14,"apprehensive":14,"approve":1,"approved":1,"ardent":3,"ardor":3,"arduous":15,"arouse":5,"aroused":5,"arousing":5,"arrest":13,"arrival":1,"arrogance":7,
  "arrogant":7,"ashamed":18,"aspiration":4,"aspire":4,"aspiring":4,"assassinate":13,"assassination":13,"assault":13,"assert":1,"assertive":1,"assess":1,"asset":1,"assist":1,"assistance":1,"associate":1,"assume":1,"assurance":1,"assure":1,"astonish":5,"astonished":5,
  "astonishing":5,"astonishment":5,"astound":5,"astounded":5,"astounding":5,"astutely":1,"atone":8,"atrocity":13,"attach":3,"attached":3,"attachment":3,"attain":7,"attainment":7,"attempt":1,"attentive":1,"attraction":3,"attractive":3,"attractiveness":3,"audacious":5,"awe":5,
  "awesome":5,"awful":17,"awkward":12,"back":1,"backing":1,"bad":15,"badger":13,"baffle":12,"baffled":12,"baffling":12,"balance":1,"balanced":1,"balm":8,"ban":13,"banish":13,"bankrupt":15,"barbaric":17,"barrier":12,"base":15,"bashful":18,
  "battle":13,"battling":13,"bearable":8,"beast":13,"beautiful":0,"beauty":0,"beckon":3,"becoming":1,"befall":15,"befriend":1,"beg":8,"begrudge":16,"believe":1,"believer":1,"belittle":13,"belittling":13,"belong":1,"beloved":3,"benefactor":6,"beneficent":6,
  "beneficial":1,"benefit":1,"benevolence":6,"benevolent":6,"bereave":15,"bereavement":15,"bestow":6,"betray":16,"betrayal":16,"bewilder":12,"bewildered":12,"bewildering":12,"bewitch":3,"bias":13,"biased":13,"bigot":13,"bigoted":13,"bigotry":13,"bind":1,"birth":0
    "bitterness":15,"bizarre":12,"blackmail":13,"blame":13,"blamed":13,"blameless":8,"blameworthy":18,"bland":11,"blast":5,"blatant":13,"bleak":15,"bless":6,"blessed":6,"blessing":6,"blight":15,"blind":12,"bliss":0,"blissful":0,"block":12,"blood":13,
  "bloody":13,"blunder":12,"blur":12,"blush":18,"boast":7,"boastful":7,"bold":5,"boldness":5,"bond":1,"boost":7,"bored":11,"boring":11,"bother":13,"bothered":13,"bothersome":13,"bound":1,"bountiful":0,"bow":1,"boycott":13,"brace":1,
  "brave":5,"bravery":5,"brazen":5,"break":15,"breakdown":15,"breakthrough":7,"breathtaking":0,"breed":1,"bribe":13,"brilliance":7,"brilliant":7,"brim":0,"brisk":5,"broaden":1,"broken":15,"broker":1,"brood":15,"brooding":15,"brotherhood":1,"bruise":15,
  "brutal":13,"brutality":13,"brutally":13,"brute":13,"buck":13,"buddy":1,"buffet":13,"bully":13,"bullying":13,"bumpy":12,"burden":15,"burdensome":15,"burn":13,"burned":13,"burning":13,"burst":5,"bury":15,"busy":5,"butcher":13,"buzz":5,
  "cage":13,"calamity":15,"calculate":1,"calm":2,"calmed":2,"calming":2,"calumny":13,"campaign":1,"can":1,"cancel":13,"candid":1,"candle":0,"capable":1,"capacity":1,"capital":1,"captivate":3,"captivated":3,"captivating":3,"capture":13,"care":6,
  "carefree":2,"careful":1,"careless":13,"caricature":13,"caring":6,"carnage":13,"carve":1,"case":1,"cash":1,"cast":1,"catastrophe":15,"catastrophic":15,"catch":1,"categorize":1,"cause":1,"caution":14,"cautious":14,"celebrate":7,"celebrated":7,"celebration":7,
  "censor":13,"center":1,"central":1,"certain":1,"certainty":1,"certify":1,"challenge":5,"champion":7,"chance":1,"change":1,"chaos":12,"chaotic":12,"charge":1,"charisma":7,"charismatic":7,"charitable":6,"charity":6,"charm":3,"charmed":3,"charming":3,
  "charmingly":3,"chase":5,"chastise":13,"cheat":13,"cheated":13,"cheating":13,"cheer":0,"cheerful":0,"cheering":0,"cheery":0,"cherish":3,"cherished":3,"chill":2,"chilling":14,"chivalrous":1,"choice":1,"choose":1,"chorus":5,"chuckle":5,"circuit":1,
  "circumstance":1,"citizen":1,"civic":1,"civil":1,"civilian":1,"claim":1,"clamor":13,"clarify":1,"clarity":1,"clash":13,"classy":7,"clean":1,"cleanse":8,"clear":1,"cleared":1,"clearing":1,"clever":1,"climb":7,"cling":15,"close":1,
  "closed":1,"closeness":3,"cloud":15,"clueless":12,"clumsy":12,"cluster":1,"clutch":1,"coach":1,"coalesce":1,"coax":1,"coerce":13,"coercion":13,"coercive":13,"cold":15,"collapse":15,"colleague":1,"collect":1,"colossal":5,"combat":13,"combine":1,
  "come":1,"comfort":8,"comfortable":8,"comforted":8,"comforting":8,"command":1,"commend":7,"commended":7,"commendable":7,"comment":1,"commerce":1,"commit":1,"commitment":1,"committed":1,"companion":1,"companionship":1,"compare":1,"compassion":6,"compassionate":6,"compel":13,
  "compelling":5,"compete":5,"competition":5,"competitive":5,"complain":13,"complaint":13,"complete":1,"completed":1,"completion":1,"complex":12,"complicated":12,"complication":12,"compliment":6,"complimentary":6,"comply":1,"compose":1,"composed":2,"composer":1,"composure":2,"compromise":1,
  "compulsion":19,"compulsive":19,"conceal":13,"concealed":13,"conceit":7,"conceited":7,"concentrate":1,"concern":15,"concerned":15,"conciliate":8,"condemn":13,"condemned":13,"condemning":13,"condolence":8,"condone":1,"conducive":1,"confess":8,"confession":8,"confidence":1,"confident":1,"confide":1,"confidently":1,
"confine":13,"confined":13,"conflict":13,"conform":1,"confound":12,"confounded":12,"confront":13,"confuse":12,"confused":12,"confusing":12,"confusion":12,"congratulate":7,"congratulated":7,"congratulation":7,"conquer":7,"conquest":7,"consensus":1,"consent":1,"consequence":15,"conservative":1,
"consider":1,"considerate":6,"consideration":6,"consist":1,"consistent":1,"consolation":8,"console":8,"conspicuous":1,"conspiracy":13,"conspire":13,"constancy":1,"constant":1,"constraint":13,"construct":1,"constructive":1,"consult":1,"consume":1,"consummate":1,"contact":1,"contain":1,
"contaminate":13,"contaminated":13,"contemplate":1,"content":0,"contented":0,"contentment":0,"contest":5,"contested":5,"contingency":1,"continual":1,"continue":1,"continuous":1,"contract":1,"contradict":13,"contradiction":13,"contradictory":13,"contrast":1,"contribute":1,"contribution":1,"control":1,
"controversial":12,"controversy":12,"convenient":1,"converge":1,"convert":1,"convict":13,"conviction":7,"convince":1,"convinced":1,"cooperate":1,"cooperation":1,"cooperative":1,"coordinate":1,"cope":8,"coping":8,"cordial":2,"core":1,"corner":1,"correct":1,"correction":1,
"correlate":1,"corrupt":13,"corruption":13,"corruptly":13,"counsel":1,"count":1,"countenance":1,"courage":5,"courageous":5,"courteous":2,"courtesy":2,"courtly":2,"covet":16,"coveted":16,"coward":14,"cowardice":14,"cowardly":14,"cozy":2,"crack":15,"cracked":15,
"craft":1,"crafty":13,"crash":15,"crashing":15,"crave":19,"craving":19,"craze":19,"crazy":12,"creak":15,"create":1,"creative":1,"credibility":1,"credible":1,"credit":1,"creep":14,"creepy":14,"crest":1,"crime":13,"criminal":13,"cripple":15,
"crippled":15,"crisis":15,"critic":13,"criticism":13,"criticize":13,"criticized":13,"critical":13,"critique":1,"crony":13,"crooked":13,"cross":13,"crossing":1,"crowd":1,"cruel":13,"cruelty":13,"crumble":15,"crushed":15,"crushing":15,"cry":15,"cryptic":12,
"cuddly":3,"cultivate":1,"culture":1,"cure":8,"curious":9,"curiosity":9,"curse":13,"cursed":13,"curtail":13,"cut":15,"cute":3,"cutting":13,"cynical":13,"cynicism":13,"dabble":1,"damage":15,"damaged":15,"damaging":15,"damnation":13,"damp":15,
"danger":14,"dangerous":14,"daring":5,"dark":15,"darkness":15,"darn":13,"dash":5,"daunt":14,"daunting":14,"dazzle":5,"dazzling":5,"dead":15,"deadly":14,"deaf":12,"deal":1,"dear":3,"death":15,"debacle":15,"debase":13,"debauch":13,
"debt":15,"deceit":13,"deceitful":13,"deceive":13,"deceived":13,"deceiving":13,"deception":13,"decide":1,"decisive":1,"declare":1,"decline":15,"decompose":15,"decorate":3,"decorous":1,"dedicate":1,"dedicated":1,"dedication":1,"defeat":15,"defeated":15,"defeatist":15,
"defect":15,"defective":15,"defend":1,"defense":1,"defensive":1,"defer":1,"defiant":13,"deficient":15,"deficit":15,"defile":17,"definite":1,"definitive":1,"deflate":15,"deflation":15,"deflect":1,"defraud":13,"defunct":15,"defy":13,"degenerate":15,"degradation":15
,"degrade":15,"degraded":15,"degrading":15,"delay":15,"delegate":1,"deliberate":1,"delicate":1,"delicious":0,"delight":0,"delighted":0,"delightful":0,"delirious":5,"deliver":1,"delivery":1,"delude":13,"deluded":13,"deluge":15,"demand":13,"demanding":15,"demean":13,
"demeaning":13,"demise":15,"demolish":15,"demolished":15,"demon":13,"demonic":13,"demoralize":15,"denial":13,"denounce":13,"deny":13,"denying":13,"depart":15,"departure":15,"depend":1,"dependable":1,"dependence":15,"dependent":15,"depict":1,"deplete":15,"deplorable":15,
"deplore":15,"deploring":15,"deploy":1,"deport":13,"depose":13,"depress":15,"depressed":15,"depressing":15,"deprivation":15,"deprive":15,"deprived":15,"depth":1,"derail":15,"deride":13,"derision":13,"derogatory":13,"descend":15,"descent":15,"desert":15,"deserted":15,
"deserve":1,"design":1,"desirable":0,"desire":19,"desired":19,"desiring":19,"desolate":15,"despair":15,"despairing":15,"desperate":19,"desperation":19,"despicable":17,"despise":17,"despised":17,"despoil":13,"destroy":15,"destroyed":15,"destroyer":13,"destruction":15,"destructive":15,
"detach":16,"detached":16,"detain":13,"detect":1,"deter":14,"detest":17,"detract":13,"detrimental":15,"devastate":15,"devastated":15,"devastating":15,"develop":1,"developed":1,"development":1,"devil":13,"devilish":13,"devotion":3,"devour":13,"dexterous":1,"diagnose":1,
"diagnosis":1,"dialogue":1,"dictate":13,"dictator":13,"dictatorship":13,"die":15,"died":15,"dies":15,"difficult":15,"difficulty":15,"diffident":18,"dig":1,"dignified":7,"dignity":7,"diligent":1,"dilute":15,"dim":15,"diminish":15,"diminished":15,"diminishing":15,
"diplomatic":1,"dire":15,"direct":1,"direction":1,"directive":1,"dirt":17,"dirty":17,"disable":15,"disabled":15,"disadvantage":15,"disaffected":16,"disagree":13,"disagreement":13,"disallow":13,"disappear":15,"disappoint":15,"disappointed":15,"disappointing":15,"disappointment":15,"disapproval":13,
"disapprove":13,"disarm":8,"disaster":15,"disastrous":15,"disband":15,"disbelief":13,"discard":15,"discern":1,"discharge":1,"discipline":1,"disclose":1,"discomfort":15,"disconnect":16,"discontent":15,"discontented":15,"discord":13,"discount":1,"discourage":15,"discouraged":15,"discourse":1,
"discover":1,"discovery":1,"discredit":13,"discreet":1,"discriminate":13,"discrimination":13,"disdain":17,"disease":15,"disgrace":18,"disgraced":18,"disgraceful":18,"disgust":17,"disgusted":17,"disgusting":17,"dishearten":15,"disheartened":15,"disheveled":15,"dishonor":18,"dishonorable":18,"dishonesty":13,
"dishonest":13,"disillusion":15,"disillusioned":15,"disinclined":15,"disinterested":11,"disjointed":12,"dislike":13,"disliked":13,"dislocate":15,"dismal":15,"dismay":15,"dismayed":15,"dismiss":13,"dismissal":13,"disobedience":13,"disobey":13,"disorder":12,"disorganized":12,"disown":16,"disparage":13
,"disparaging":13,"disparity":15,"displace":15,"displaced":15,"display":1,"displease":13,"displeased":13,"displeasure":13,"disposable":1,"dispose":1,"disprove":13,"dispute":13,"disqualified":15,"disregard":13,"disregarded":13,"disrepair":15,"disrepute":18,"disrespect":13,"disrespected":13,"disrespectful":13,
"disrupt":13,"disrupted":13,"disruption":13,"dissatisfaction":15,"dissatisfied":15,"dissent":13,"dissident":13,"dissolve":15,"dissonance":12,"dissuade":14,"distance":16,"distant":16,"distinct":1,"distinction":1,"distinguish":1,"distort":13,"distorted":13,"distortion":13,"distract":12,"distracted":12,
"distracting":12,"distraction":12,"distress":15,"distressed":15,"distressing":15,"distrust":13,"distrusted":13,"disturb":13,"disturbance":13,"disturbed":13,"disturbing":13,"diverge":12,"diverse":1,"divert":1,"divide":13,"divided":13,"divorce":16,"dizzy":12,"do":1,"docile":1,
"doctor":1,"doctrine":1,"document":1,"dodgy":13,"dogged":1,"dominance":7,"dominant":7,"dominate":13,"dominated":13,"domination":13,"donate":6,"donation":6,"doom":15,"doomed":15,"door":1,"doubt":12,"doubtful":12,"doubtless":1,"down":15,"downcast":15,
"downfall":15,"downhearted":15,"downright":1,"downsize":15,"downtrodden":15,"drab":11,"drag":15,"drain":15,"drained":15,"dramatic":5,"dread":14,"dreaded":14,"dreadful":14,"dream":4,"dreary":15,"drench":15,"dress":1,"drift":15,"drill":1,"drink":1,
"drip":15,"drive":1,"driven":1,"drown":15,"drowsy":12,"drudgery":15,"drug":19,"drunk":19,"dry":11,"dual":1,"dubious":12,"due":1,"dull":11,"dullness":11,"dumb":12,"dumbfound":12,"dumbfounded":12,"dump":15,"durable":1,"duration":1,
"dusk":15,"dust":15,"duty":1,"dwell":15,"dying":15,"dynamic":5,"eager":5,"eagerly":5,"eagerness":5,"earl":1,"early":1,"earn":1,"earnest":1,"earnestly":1,"earnestness":1,"ease":8,"eased":8,"easel":1,"easier":8,"easiest":8,
"easily":8,"easy":8,"ebb":15,"eccentric":12,"echo":1,"eclectic":1,"economic":1,"economical":1,"economics":1,"economy":1,"ecstasy":0,"ecstatic":0,"edgy":19,"edit":1,"educated":1,"education":1,"effect":1,"effective":1,"effectiveness":1,"efficiency":1,
"efficient":1,"effort":1,"effortless":8,"effrontery":13,"ego":7,"egotism":7,"egotistical":7,"elaborate":1,"elated":0,"elation":0,"elegance":7,"elegant":7,"element":1,"elevate":7,"elevated":7,"elevation":7,"eligible":1,"eliminate":15,"elite":7,"eloquence":7
,"eloquent":7,"embarrass":18,"embarrassed":18,"embarrassing":18,"embarrassment":18,"embellish":3,"embezzle":13,"embody":1,"embrace":3,"emergency":15,"eminent":7,"emit":1,"emotion":1,"emotional":1,"empathize":6,"empathy":6,"emperor":1,"emphatic":1,"empire":1,"empower":7,
"empowered":7,"empowering":7,"emptiness":15,"empty":15,"enable":1,"enchant":3,"enchanted":3,"enchanting":3,"encircle":1,"encompass":1,"encourage":6,"encouraged":6,"encouragement":6,"encouraging":6,"end":15,"endanger":14,"endearing":3,"endeavor":1,"endless":1,"endorse":1,
"endure":1,"endurance":1,"energetic":5,"energy":5,"enforce":1,"engage":5,"engaged":5,"engaging":5,"engineer":1,"enhance":7,"enjoy":0,"enjoyable":0,"enjoyment":0,"enlarge":1,"enlighten":7,"enlightened":7,"enlightening":7,"enlist":1,"enliven":5,"enormous":5,
"enrage":13,"enraged":13,"enslave":13,"ensnare":13,"ensure":1,"entangle":12,"entangled":12,"enter":1,"enterprise":1,"enthusiasm":5,"enthusiastic":5,"entice":3,"enticed":3,"enticing":3,"entire":1,"entrance":3,"entranced":3,"entrancing":3,"entreat":8,"entreaty":8,
"entrust":1,"envious":16,"envy":16,"epic":7,"equal":1,"equality":1,"equanimity":2,"equip":1,"equipped":1,"equitable":1,"equity":1,"erase":15,"erect":1,"erode":15,"err":13,"error":13,"erupt":15,"eruption":15,"escalate":15,"escape":8,
"escort":1,"esteem":7,"esteemed":7,"eternal":1,"ethic":1,"ethical":1,"eulogize":7,"euphoria":0,"euphoric":0,"evacuate":8,"evade":13,"evaluate":1,"evaporate":15,"evict":13,"evil":13,"evildoer":13,"evolution":1,"exacerbate":13,"exaggerate":13,"exaggerated":13,
"exalt":7,"exalted":7,"examination":1,"examine":1,"example":1,"exasperate":13,"exasperated":13,"excavate":1,"exceed":7,"excel":7,"excellence":7,"excellent":7,"exceptional":7,"excerpt":1,"excess":15,"excessive":15,"exchange":1,"excite":5,"excited":5,"excitement":5,
"exciting":5,"exclaim":5,"exclude":13,"excluded":13,"exclusive":1,"excuse":8,"exemplary":7,"exempt":1,"exercise":1,"exert":1,"exhaust":15,"exhausted":15,"exhaustion":15,"exhilarate":5,"exhilarated":5,"exhilarating":5,"exhort":8,"exile":15,"exist":1,"existence":1
,"exit":1,"exonerate":8,"exotic":5,"expand":1,"expansion":1,"expect":4,"expectation":4,"expected":4,"expedient":1,"expel":13,"expend":1,"expense":15,"expensive":15,"experience":1,"experienced":1,"experiment":1,"expert":1,"expertise":1,"expire":15,"explain":1,
"explanation":1,"explicit":1,"explode":15,"exploit":13,"exploitation":13,"explore":9,"explosion":15,"exponent":1,"export":1,"expose":13,"exposed":13,"exposure":13,"express":1,"expression":1,"expressive":1,"exquisite":0,"extend":1,"extension":1,"extensive":1,"extent":1,
"exterior":1,"external":1,"extra":1,"extraordinary":7,"extravagant":7,"extreme":15,"extremely":15,"exuberance":0,"exuberant":0,"eye-catching":3,"fabulous":0,"face":1,"facet":1,"facilitate":1,"facility":1,"fact":1,"factual":1,"fade":15,"fail":15,"failed":15,
"failing":15,"failure":15,"faint":15,"fair":1,"fairness":1,"faith":1,"faithful":1,"faithfully":1,"faithfulness":1,"fake":13,"fall":15,"fallen":15,"falling":15,"falter":15,"fame":7,"familiar":1,"familiarity":1,"famous":7,"fanatic":13,"fanatical":13
};
const emotionColors = {
  0: {h:100, s:60, l:50},  // happy/calm - green
  1: {h:200, s:70, l:55},  // neutral - light blue
  2: {h:100, s:30, l:70},  // gentle - pale green
  3: {h:330, s:70, l:55},  // love - pink
  4: {h:45,  s:85, l:55},  // hope - yellow
  5: {h:30,  s:90, l:50},  // excitement - orange
  6: {h:180, s:65, l:50},  // encouragement - teal
  7: {h:90,  s:80, l:50},  // excellence - bright green
  8: {h:190, s:50, l:75},  // soothing - pale blue
  9: {h:260, s:70, l:50},  // curiosity - purple
  10:{h:50,  s:80, l:40},  // authority - gold
  11:{h:0,   s:0,  l:75},  // apathy - light gray
  12:{h:0,   s:0,  l:50},  // confusion - gray
  13:{h:0,   s:85, l:50},  // aggression - red
  14:{h:20,  s:80, l:50},  // fear - coral
  15:{h:220, s:50, l:60},  // sadness - soft blue
  16:{h:280, s:70, l:50},  // jealousy - purple
  17:{h:0,   s:95, l:35},  // hate - dark red
  18:{h:30,  s:60, l:35},  // guilt - brown
  19:{h:330, s:90, l:50}   // craving - hot pink
};
function getColorForEmotion(emotionId, typingSpeed) {
  const base = emotionColors[emotionId];
  // Typing speed range: 0-100+ words per minute (or another metric you choose)
  // Map speed to a lightness adjustment:
  // slow typing -> lighter (l +10), fast typing -> darker (l -10)
  const speedFactor = Math.max(0, Math.min(typingSpeed, 100)) / 100; // 0..1
  const intensityShift = (0.5 - speedFactor) * 20; // shift by ±10
  const adjustedL = Math.max(10, Math.min(90, base.l + intensityShift));
  return `hsl(${base.h}, ${base.s}%, ${adjustedL}%)`;
}
const color = getColorForEmotion(5, typingSpeed); // get color for excitement
colorBox.style.backgroundColor = color;


