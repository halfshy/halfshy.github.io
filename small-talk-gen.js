const allQues = [
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO’S THE BEST BOSS YOU’VE EVER HAD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "A HAPPY HOME LIFE AND A BORING CAREER, OR A SUCCESSFUL CAREER AND BORING HOME LIFE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT WOULD BE THE FIRST THING YOU WOULD DO IF YOU WON THE LOTTERY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU BE RELUCTANT TO TELL YOUR FRIENDS HOW MUCH YOU EARN?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "WHAT POSSIBLE GOVERNMENT ACTION WOULD MAKE YOU LEAVE THE COUNTRY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU FEEL HAPPIER SPENDING OR SAVING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT DO YOU KNOW ABOUT YOUR FAMILY TREE BEYOND YOUR GREAT GRANDPARENTS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT ARE THE BEST THINGS YOU OWE TO YOUR PARENTS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "GROWING UP, WHO WAS THE FAVORITE IN YOUR FAMILY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "IF YOU KNEW YOU ONLY HAD ONE YEAR TO LIVE FROM NOW, HOW WOULD YOU SPEND THE NEXT 12 MONTHS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT ARE YOUR HAPPIEST MEMORIES OF YOUR PARENTS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHEN ARE YOU COMPETITIVE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "OF THE PEOPLE YOU SPEND TIME WITH, WHO BRINGS OUT YOUR BEST QUALITIES?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE MOST SURPRISING CONVERSATION YOU’VE EVER HAD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT’S THE KINDEST THING ANYONE’S EVER DONE FOR YOU?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DESCRIBE AN IMPORTANT TEACHER IN YOUR LIFE- OUTSIDE OF SCHOOL."
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "IS THERE ANYONE YOU REGRET LOSING TOUCH WITH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "ARE YOU RELUCTANT OR OPEN TO BRINGING TOGETHER PEOPLE FROM DIFFERENT PARTS OF YOUR LIFE?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "DO YOU THINK THERE’S ANY TRUTH IN THE LINES: “THEY FUCK YOU UP, YOUR MOM AND DAD. THEY MAY NOT MEAN TO, BUT THEY DO.”?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT NEWS CHANNEL DO YOU FOLLOW THE MOST? DO YOU BELIEVE IT IS UNBIASED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HAS ART OR LITERATURE EVER DIRECTLY INFLUENCED YOUR LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHERE DOES YOUR MODEL OF A NORMAL LIFE COME FROM?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "IS THERE ANYTHING YOU REGRET NOT DOING DUE TO FEAR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHEN DO YOU FEEL SHY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HAVE YOU EVER HAD A RECURRING DREAM?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT’S THE BEST EVENING YOU’VE EVER HAD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU WERE IN CHARGE OF THE BILL & MELINDA GATES FOUNDATION, BUT COULD ONLY SPEND THE FUNDS TACKLING ONE ISSUE, WHAT WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "ARE YOU GOOD AT TAKING CRITICISM?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT’S THE WORST THING THAT COULD HAPPEN TO YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU HAVE ANY ENEMIES?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHY DO YOU HAVE THE AMBITIONS YOU HAVE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHEN WAS THE LAST TIME YOU EXPERIENCED 'SCHADENFREUDE?' WHAT TRIGGERED IT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF YOU COULD OWN ANY ONE PIECE OF ART, WHAT WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "CAN YOU DESCRIBE YOUR OWN TASTE IN INTERIORS AND DESIGN?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "IN WHAT WAYS HAVE YOUR PARENTS INFLUENCED YOUR CHOICE OR CHOICES OF PARTNER?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "DO YOU HAVE A RELATIONSHIP PATTERN? IF SO, HAS IT TENDED TO LEAD TO SUITABLE OR UNSUITABLE PARTNERS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU COULD ONLY HAVE ONE, WHICH ONE WOULD YOU CHOOSE: ART, FILM, LITERATURE, OR MUSIC?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "IN WHAT WAYS ARE YOU A DIFFICULT PERSON TO HAVE A RELATIONSHIP WITH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HAVE YOU AND YOUR PARTNER OR FRIENDS EVER ARGUED ABOUT TASTE?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "IF YOU HAD MARRIED YOUR FIRST BOY/GIRLFRIEND, WHAT MIGHT YOUR LIFE BE LIKE NOW?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "IF YOU READ YOUR PARTNER’S EMAILS, WHAT DO YOU FEAR YOU MIGHT DISCOVER THAT WOULD UPSET YOU?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHICH OF YOUR EX-PARTNERS HURT YOU THE MOST?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT DO YOU AND YOUR PARTNER ARGUE ABOUT THE MOST?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "ARE SEXUAL FANTASIES A GOOD THING TO BE SHARED?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT WOULD YOUR IDEAL PORNOGRAPHY BE LIKE?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "CAN ADULTERY EVER BE ACCEPTABLE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU LIKE TO LIVE MORE IN YOUR BODY OR MORE IN YOUR HEAD?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHO OR WHAT MIGHT HAVE STOPPED YOU FROM REALIZING YOUR FULL POTENTIAL?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "UNDER WHAT CONDITIONS COULD YOU HAVE AN OPEN RELATIONSHIP AND MAKE IT WORK?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHEN DID YOU LAST THROW YOUR HEAD BACK IN LAUGHTER?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHEN DO YOU FEEL LONELY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHEN DID YOU LAST CRY WITH PAIN OR SADNESS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHERE DO YOU FEEL MOST AT HOME?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHEN YOU’RE SAD, DOES CRYING MAKE YOU FEEL BETTER OR WORSE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "ARE YOU WHERE YOU WANTED TO BE AT THIS STAGE IN YOUR LIFE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT WORK WERE YOU DOING THE LAST TIME YOU FORGOT TIME ALTOGETHER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT ARE THE SKILLS OF THE IDEAL HOST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF YOU HAD TO WRITE A BOOK, WHAT WOULD IT BE ABOUT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WOULD YOU CONSIDER HAVING PSYCHOTHERAPY AND WHAT WOULD YOU HOPE TO DISCOVER FROM IT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO IS YOUR BIGGEST FAN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DESCRIBE A MEMORY OF A TASTE OR SMELL AND WHAT IT EVOKES?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MAKES YOU MOST STRESSED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DESCRIBE A SIMPLE PLEASURE."
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT MAKES YOU ENVIOUS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU HAVE A TECHNIQUE FOR KEEPING CALM?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHICH CLOSE RELATIVE DO YOU LIKE THE LEAST - AND WHY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU PREFER TO BE A PSYCHOANALYST OR DOCTOR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO HAS OFFERED YOU THE MOST USEFUL CAREER ADVICE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "ARE YOU INCLINED TO BELIEVE THAT THERE IS LIFE ON OTHER PLANETS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HAVE YOU EVER TRAVELLED ON YOUR OWN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU PREFER A VIEW OF THE DESERT OR THE SEA - WHY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "CAN INCOMPATIBILITY EVER BE A STRENGTH IN A RELATIONSHIP?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHEN YOU LOOK IN THE MIRROR, WHAT’S THE FIRST THING YOU CHECK?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MUSIC HAS INFLUENCED YOUR ATTITUDE TO LIFE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DESCRIBE A PIECE OF ART THAT YOU REALLY LIKE AND WHY."
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DOES THE PRICE OF A WORK OF ART EVER REFLECT HOW GOOD IT IS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IS THERE AN ART TO LOADING THE DISHWASHER?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO PEOPLE ENVY ABOUT YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHO HAS BEEN A BAD INFLUENCE ON YOU?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WOULD YOU LIKE TO BELIEVE IN GOD?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "HAVE YOU EVER HAD A RELIGIOUS EXPERIENCE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO YOU IMAGINE PEOPLE SAY WHEN THEY GOSSIP ABOUT YOU?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU THINK OTHER PEOPLE REGARD YOU AS A GOOD LISTENER?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "IN WHAT RESPECTS ARE YOU STILL THE SAME PERSON YOU WERE AS A CHILD?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHEN HAVE YOU ACTED WITHOUT 100% INTEGRITY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "ARE YOU GOOD AT SAYING YOU’RE SORRY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "IN WHAT WAYS ARE YOU PRONE TO ADDICTION?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IN WHAT AREA ARE YOU HAPPY TO BE ‘GOOD ENOUGH’?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "ARE THERE MISTAKES YOU REPEAT FROM ONE HOLIDAY TO THE NEXT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MAKES A PERSON A GOOD TRAVELLING COMPANION?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF YOU HAD TO LIVE SOMEWHERE ELSE, WHERE WOULD YOU LIVE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU WERE ON VACATION AND HAD TO CHOOSE BETWEEN A GOOD MEAL AND A BAD HOTEL, OR A BAD MEAL AND A GOOD HOTEL - WHICH WOULD YOU PREFER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "ARE YOU MORE ATTRACTED TO A NOMADIC OR SETTLED LIFE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT ARE THE BEST FEATURES OF MIDDLE AGE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "FOR YOU, WHAT WOULD BE A GOOD DEATH?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HOW COULD OLDER PEOPLE BE VALUED MORE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF WE ASKED THE CHILDHOOD YOU WHAT JOB YOU WANTED TO DO, WHAT WOULD YOU SAY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HAVE YOU EVER SABOTAGED YOUR OWN SUCCESS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IN WHAT WAYS MIGHT YOU BE A DIFFICULT PERSON TO WORK WITH OR FOR?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "ARE YOU MORE ATTRACTED TO SOMEONE LIKE YOURSELF, OR YOUR OPPOSITE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "GIVEN THE CHOICE OF ANYONE IN THE WORLD, WHOM WOULD YOU WANT AS A DINNER GUEST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU LIKE TO BE FAMOUS? IN WHAT WAY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "BEFORE MAKING A TELEPHONE CALL, DO YOU EVER REHEARSE WHAT YOU ARE GOING TO SAY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD CONSTITUTE A “PERFECT” DAY FOR YOU?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHEN DID YOU LAST SING TO YOURSELF? TO SOMEONE ELSE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU WERE ABLE TO LIFE TO THE AGE OF 90 AND RETAIN EITHER THE MIND OR BODY OF A 30-YEAR OLD FOR THE LAST 60 YEARS OF YOUR LIFE, WHICH WOULD YOU WANT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU HAVE A SECRET HUNCH ABOUT HOW YOU WILL DIE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "NAME THREE THINGS YOU AND THE PERSON NEXT TO YOU APPEAR TO HAVE IN COMMON."
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "FOR WHAT IN YOUR LIFE DO YOU FEEL MOST GRATEFUL?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "IF YOU COULD CHANGE ANYTHING ABOUT THE WAY YOU WERE RAISED, WHAT WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU COULD WAKE UP TOMORROW HAVING GAINED ANY ONE QUALITY OR ABILITY WHAT WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF A CRYSTAL BALL COULD TELL YOU ANYTHING ABOUT THE FUTURE, WHAT WOULD YOU WANT TO KNOW?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IS THERE SOMETHING THAT YOU’VE DREAMED OF DOING FOR A LONG TIME? WHY HAVEN’T YOU DONE IT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS THE GREATEST ACCOMPLISHMENT OF YOUR LIFE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO YOU VALUE MOST IN A FRIENDSHIP?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS YOUR MOST TREASURED MEMORY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS YOUR MOST TERRIBLE MEMORY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU CHANGE ANYTHING ABOUT THE WAY YOU ARE LIVING NOW? WHY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DOES FRIENDSHIP MEAN TO YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT ROLES DO LOVE AND AFFECTION PLAY IN YOUR LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU FEEL YOUR CHILDHOOD WAS HAPPIER THAN MOST OTHER PEOPLE’S?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HOW DO YOU FEEL ABOUT YOUR RELATIONSHIP WITH YOUR MOTHER?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "I WISH I HAD SOMEONE WITH WHOM I COULD SHARE..."
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO YOU WANT YOUR CLOSE FRIENDS TO KNOW ABOUT YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WOULD YOU LIKE NEW FRIENDS TO UNDERSTAND ABOUT YOU?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS AN EMBARRASSING MOMENT IN YOUR LIFE?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT, IF ANYTHING, IS TOO SERIOUS TO BE JOKED ABOUT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "IF YOU WERE TO DIE TODAY, WHAT WOULD YOU MOST REGRET NOT HAVING TOLD SOMEONE? WHY HAVEN’T YOU TOLD THEM?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT ONE PHYSICAL ITEM WOULD YOU SAVE IN A FIRE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "OF ALL THE PEOPLE IN YOUR FAMILY, WHOSE DEATH WOULD YOU FIND MOST DISTURBING? WHY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO WAS YOUR FIRST CRUSH?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DOES HAVING KIDS MAKE FOR A BETTER LIFE?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT IS THE ‘HARDEST’ DRUG YOU’VE TAKEN?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "DO YOU WANT TO BE CREMATED OR BURIED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT IS YOUR MIDDLE NAME? DO YOU LIKE IT? WHEN WAS THE LAST TIME YOU USED IT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HAVE YOU EVER EXPERIENCED A SIGNIFICANT HEALTH SCARE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU HAVE ANY PHOBIAS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT’S THE MEANEST THING YOU’VE EVER DONE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU BELIEVE LASTING LOVE IS POSSIBLE FOR EVERYONE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT HAPPENS WHEN WE DIE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WOULD YOU RATHER DIE OR SPEND LIFE IN PRISON?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "ARE YOU AT ALL SUPERSTITIOUS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "ARE YOU A COLLECTOR OF ANYTHING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HOW MUCH TIME DOES IT TAKE YOU TO GET READY DAILY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS A SMELL THAT IS TIED TO A SPECIFIC MEMORY? WHAT MEMORY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HAVE YOU EVER BEEN IN A CAR ACCIDENT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU WATCH YOURSELF IN WINDOW REFLECTIONS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO PEOPLE GET WHAT THEY DESERVE IN LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU, OR HAVE YOU, HAD ANY ADDICTIONS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "IN WHICH PART OF YOUR LIFE ARE YOU MOST EXPERIMENTAL?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DID YOU HAVE A NICKNAME AS A CHILD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS YOUR ZODIAC SIGN? DOES THAT MEAN ANYTHING TO YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU GET ALONG BETTER WITH YOUR MOTHER OR YOUR FATHER?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU FEEL LIKE ANYONE TRULY UNDERSTANDS YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HAVE YOU EVER READ ANY SELF-HELP BOOKS? WHAT FOR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WAS YOUR SOCIAL NICHE IN JUNIOR HIGH & HIGH SCHOOL?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT PHYSICAL ITEM HOLDS THE MOST SENTIMENTAL VALUE FOR YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "IN YOUR PREVIOUS RELATIONSHIPS, DID YOU BREAK HEARTS OR HAVE YOURS BROKEN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU SUBSCRIBE TO ANY MAGAZINES? HAVE YOU BEFORE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU FEEL COMFORTABLE GIVING ADVICE TO FRIENDS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DOES YOUR DREAM HOUSE LOOK LIKE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IN WHAT POSITION DO YOU SLEEP AT NIGHT? HAS THAT CHANGED OVER TIME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU THINK OF YOURSELF AS A GOOD LEADER?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHEN WAS THE LAST TIME YOU FELT CONFIDENT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT EVENT DIVIDES MY LIFE INTO 'BEFORE' AND 'AFTER'?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S AT THE TOP OF MY BUCKET LIST?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT HAVE I GIVEN UP ON?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT IS SOMETHING THAT MY PARENTS TAUGHT ME THAT TURNED OUT TO BE COMPLETELY WRONG?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WILL MY GRAVESTONE SAY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO I KNOW MORE ABOUT THAN ANYONE ELSE IN THE ROOM?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF I WERE A DRUG, WHAT WOULD BE MY SIDE EFFECT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT SHORT PHRASE CAN SOMEONE SAY TO MAKE ME INSTANTLY DISLIKE THEM?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT'S SOMETHING MY PARENTS DID WHEN I WAS GROWING UP THAT I DIDN'T REALIZE WAS WEIRD UNTIL YEARS LATER?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT MOVIE TITLE BEST DESCRIBES MY SEX LIFE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT IS SOMETHING I ENJOY THAT MOST PEOPLE WOULD BE SURPRISED TO FIND OUT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO I REGRET NOT DOING IN HIGH SCHOOL?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT HAVE I ALREADY DONE FOR THE LAST TIME IN MY LIFE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT KITCHEN APPLIANCE IS AN ACCURATE REPRESENTATION OF MY RELATIONSHIP WITH MY BOSS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT WOULD I PICK IF I WERE ABLE TO RECOVER ONE ITEM THAT I'VE LOST FROM THE PAST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT HAVE I TRIED FOR THE FIRST TIME WITHIN THE LAST YEAR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS MY KRYPTONITE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHERE WOULD I RATHER BE RIGHT NOW?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE HARDEST THING I'VE EVER HAD TO SAY 'NO' TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT CAN SOMEONE DO TO GAIN MY RESPECT IMMEDIATELY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS SOMETHING THAT I WISH I ENJOYED?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO PEOPLE WRONGLY ASSUME ABOUT ME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD I CHOOSE TO BE PAID WITH IF MONEY WASN'T AN OPTION?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT IS THE MOST DANGEROUS ANIMAL I COULD BEAT IN A FIGHT TO THE DEATH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO WAS MY CHILDHOOD HERO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT WOULD BE THE HARDEST WORD FOR ME TO NEVER BE ABLE TO SAY AGAIN?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "I'M IN THE MINORITY BUT I BELIEVE...?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT IS SOMETHING I FIND INTERESTING THAT MOST PEOPLE FIND BORING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT ANIMAL WOULD I CHOOSE IF I COULD TRANSFORM INTO ONE FOR A DAY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT SONG ALWAYS MAKES ME SING ALONG?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT COULD I GIVE A LECTURE ON AT THE LOCAL UNIVERSITY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS SOMETHING I HOPE TO NEVER BECOME?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT DO I LOVE TO WATCH BUT WOULD HATE TO PARTAKE IN?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT EVENT IN MY LIFE WOULD I BE MOST DISAPPOINTED TO FIND OUT WAS ONLY JUST A DREAM?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS THE STRANGEST THING I DO ON A DAILY BASIS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS MY GO TO STORY TO IMPRESS SOMEONE I JUST MET?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS AN UNWRITTEN RULE THAT I BELIEVE EVERYONE SHOULD FOLLOW?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT LEGAL THING AM I ADDICTED TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MEANT THE MOST TO ME WHEN I WAS FIFTEEN YEARS OLD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHEN I GO HOME TONIGHT WHAT'S THE FIRST THING I'M GOING TO DO?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT HAVE I RECENTLY CHANGED MY OPINION ON?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT DO MOST PEOPLE FIND ATTRACTIVE THAT I DON'T?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT PUTS ME IN A GOOD MOOD IMMEDIATELY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE CLOSEST I'VE COME TO DEATH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DID I DO JUST TO BE COOL WHEN I WAS IN MIDDLE SCHOOL?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT WERE YOU SELF-CONSCIOUS ABOUT AS A CHILD THAT YOU'VE GROWN OUT OF? WHAT HAVEN'T YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WOULD I LIKE TO EXPERIENCE AGAIN FOR THE FIRST TIME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WAS THE BIGGEST MISCONCEPTION I HAD AS A CHILD?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WOULD I LIKE TO CHANGE ABOUT THE SOCIETY WE LIVE IN?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO I HAVE ZERO TOLERANCE FOR?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT DO I DO THAT'S STEREOTYPICAL OF THE OPPOSITE GENDER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT FUTURE INVENTION AM I REALLY LOOKING FORWARD TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S MY BIGGEST PET PEEVE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT IS SOMETHING THAT I'VE ACCEPTED THAT I WILL NEVER UNDERSTAND?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS SOMETHING I WISH I DID MORE OFTEN?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS SOMETHING I REGRET NOT HAVING DONE YET IN MY LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT LAW HAVE I BROKEN AND GOTTEN AWAY WITH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT AM I LOOKING FORWARD TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT TYPICALLY SOUNDS BAD TO EVERYONE ELSE BUT SOUNDS AMAZING TO ME?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT INTERROGATION TECHNIQUE WOULD BREAK ME THE FASTEST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD I BE DOING WITH MY LIFE IF MONEY WASN'T A PROBLEM?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "I KNOW I'VE HAD ONE TOO MANY DRINKS WHEN I'M...?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "IF I COULD SMOKE A JOINT WITH ANYONE DEAD OR ALIVE WHO WOULD I CHOOSE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT KEEPS ME UP AT NIGHT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE MOST TERRIBLE THING I DID IN HIGH SCHOOL?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT HUMAN EXPERIMENT WOULD I LIKE TO SEE THE RESULTS OF IF ETHICS WEREN'T AN ISSUE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT IS SOMETHING THE STEREOTYPICAL OPPOSITE GENDER DOES THAT DISGUSTS ME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT ALWAYS SEEMS TO COME UP WHEN MY FAMILY IS TRYING TO EMBARASS ME?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT IS SOMETHING I LOVE THAT'S STEREOTYPICALLY RESERVED FOR THE OPPOSITE SEX?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT IS A CONTROVERSIAL BELIEF OF MINE?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT IS THE WORST DRUG RELATED EXPERIENCE I'VE EVER HAD?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS MY PORNOGRAPHY PET PEEVE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT TWO PEOPLE WOULD I LIKE TO HAVE A THREESOME WITH?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT HAS MADE ME QUESTION MY SEXUALITY?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT IS THE MOST ILLEGAL THING I'VE EVER DONE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS SOMETHING THAT OFFENDS ME?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS ON MY SEXUAL BUCKET LIST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO I SILENTLY JUDGE PEOPLE FOR?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT IS A STEREOTYPE THAT I BELIEVE TO BE TRUE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT SONG DO I WANT PLAYED AT MY FUNERAL?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS SOMETHING I DISLIKE ABOUT SEX?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WOULD I SACRIFICE MY LIFE FOR?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS SOMETHING THAT IMMEDIATELY TURNS ME OFF?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHERE DID I LOSE MY VIRGINITY?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHERE IS THE LAST PLACE ON EARTH I'D WANT TO HAVE SEX?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO I WISH WAS SOCIALLY ACCEPTABLE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS MY FAVORITE SEX POSITION?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT SONG WOULD BE THE HARDEST FOR ME TO HAVE SEX TO?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT CAN SOMEONE I'M NOT ATTRACTED TO DO TO TURN ME ON?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHICH TWO PEOPLE WOULD I BE MOST EXCITED TO SEE STAR IN A PORN VIDEO TOGETHER?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "I'M HORNY AND READY TO GO, WHAT WOULD BE THE MOST EFFECTIVE WAY FOR MY PARTNER TO KILL THE MOOD?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT'S THE STRANGEST THING I'LL ADMIT TO TURNING ME ON?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT WOULD I LIKE TO CHANGE ABOUT MY SEX LIFE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS THE MOST SEXUALLY ADVENTUROUS THING I'VE EVER DONE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT DO I REFUSE TO DO UNLESS I'M DRUNK?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT WOULD I GET A GOLD MEDAL FOR IN THE BEDROOM?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS THE TITLE OF MY FAVORITE PORN VIDEO?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT WOULD I BE MOST ASHAMED OF IF MY INTERNET HISTORY WAS PUBLISHED IN THE PAPER?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT SEX POSITION DO I ENJOY THE MOST?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "IF I COULD GIVE MY PARTNER ONE PIECE OF ADVICE KNOWING THAT THEY WOULDN'T BE OFFENDED WHAT WOULD IT BE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT GETS HARDER FOR ME WHEN I'M DRUNK?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT WOULD I BUY WITH A $100 GIFT CARD TO AN ADULT GIFT STORE?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "IN MY OPINION...WHAT SHOULD MAKE SOMEONE INELIGIBLE TO REPRODUCE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS MY FANTASY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WOULD BE MY SIGNATURE IF I WERE A SERIAL KILLER?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT PROFESSION DO I FIND THE SEXIEST?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS THE STRANGEST THING I'VE EVER BOUGHT ONLINE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHO IS THE OLDEST PERSON I FIND UNDENIABLY SEXY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHO WOULD I CHOOSE TO SPEND TOMORROW AS IF I COULD CHOOSE ANYONE IN THE WORLD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO WOULD I HAVE THE HARDEST TIME LIVING WITH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT CAN I NEVER GET ENOUGH OF?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT IS SOMETHING THAT I THOUGHT I'D NEVER DO? THEN I TRIED IT. NOW I LOVE IT."
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT STRANGE FOOD COMBINATION DO I LOVE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS SOMETHING I WOULDN'T DO FOR $1,000,000?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT WOULD I KILL FOR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS THE MOST IMPRESSIVE THING I CAN MAKE WITHOUT A RECIPE?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT WAS I WAY TOO YOUNG FOR WHEN I DID IT THE FIRST TIME?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT ARE THE CLIFF-NOTES OF MY FIRST KISS?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT WOULD I DO TO TAKE ADVANTAGE IF EVERYTHING WAS MADE LEGAL FOR 24 HOURS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT SHOULD BE MY NEW NICKNAME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT WOULD I PUT IN A TIME CAPSULE TODAY TO REMIND ME OF MY LIFE IN TEN YEARS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS SOMETHING I'VE GIVEN 10 OUT OF 10?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT HAS THE POWER TO MAKE ME INSTANTLY HORNY?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "BESIDES LOOKS, WHAT IS THE NUMBER ONE THING I FIND ATTRACTIVE IN SOMEONE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT NON-SEXUAL THING DO I FIND REALLY SEXUALLY AROUSING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHERE IS THE WORST PLACE SOMEONE COULD TAKE ME ON A FIRST DATE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF EVERYONE HAD TO WEAR A WARNING LABEL EVERYWHERE THEY WENT, WHAT WOULD MINE SAY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WE'RE ALL AT A POTLUCK, WHAT DID I BRING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT OR WHO IS MY SPIRIT ANIMAL?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WILL I DO IN MY LIFETIME THAT NO ONE ELSE HERE WILL?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHICH OF MY POSSESSIONS WOULD DISAPPOINT MY MOM THE MOST?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "I'VE ORGANIZED A PROTEST OF 5,000 PEOPLE. WHAT'S IT FOR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS SOMETHING MOST PEOPLE LOVE BUT I HATE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS THE MOST DANGEROUS THING I'VE EVER DONE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT COMPLIMENT DO I RECEIVE MOST OFTEN?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT IS THE WEIRDEST 'PET NAME' A PARTNER OF A MINE HAS HAD FOR ME?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "WHAT QUESTION WOULD I REFUSE TO ANSWER HONESTLY IN TRUTH OR DARE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF I WERE THE 8TH DWARF, WHAT WOULD MY NAME BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT FICTIONAL CHARACTER WOULD I LOVE TO DATE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT ALWAYS LEAVES ME WANTING MORE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT IS THE MOST RIDICULOUS THING I'VE BULLSHITTED SOMEONE INTO BELIEVING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO IS MY CELEBRITY CRUSH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT ONE RULE WOULD I MAKE IF EVERYONE IN THE WORLD HAD TO FOLLOW IT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT ONE WORD WOULD MY FIRST GRADE TEACHER HAVE USED TO DESCRIBE ME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT BREED WOULD I BE IF I WERE A DOG?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT ARE TWO THINGS WOULD I CONSIDER A DEAL-BREAKER ON A FIRST DATE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "I'M ON THE FRONT PAGE OF NEXT SUNDAY'S EDITION OF THE LOCAL PAPER, WHAT'S THE HEADLINE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT COMMON TASK AM I SURPRISINGLY BAD AT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WOULD I WRITE ON MY CARDBOARD SIGN IF I WERE HOMELESS?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT DO I CRAVE BUT RARELY GET?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HOW CAN SOMEONE PUSH MY BUTTONS?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT ONE WORD DESCRIBES MY RELATIONSHIP WITH ALCOHOL?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT COULD I NOT LIVE WITHOUT?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT GETS EASIER FOR ME THE DRUNKER I GET?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT WAS MY LAST GOOGLE SEARCH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT WOULD I DO TO PASS THE TIME IF I WAS STUCK IN AN ELEVATOR FOR HOURS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT ABOUT ME WOULD MAKE SOMEONE DRIVE PAST ME IF I WERE HITCHHIKING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT SUPERLATIVE DID I GET IN MY HIGH SCHOOL YEARBOOK?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "WHAT QUESTION WOULD I NEVER SAY 'YES' TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT JEOPARDY CATEGORY WOULD I GET 100% OF THE QUESTIONS CORRECT FOR?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT IS AN INAPPROPRIATE QUESTION THAT I'VE ALWAYS WANTED TO ASK?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS SOMETHING I ENJOY THAT'S NOT TYPICAL FOR MY AGE GROUP?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DATING ADVICE WOULD I GIVE TO MYSELF AT AGE 16?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHY WERE YOU GIVEN YOUR NAME? WHAT DOES IT MEAN?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DID YOU EVER RUN AWAY FROM HOME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HOW DID YOU GET TO SCHOOL AS A KID?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WAS YOUR FIRST EXPERIENCE WITH DEATH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DESCRIBE YOUR CHILDHOOD BEDROOM."
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DID YOU HAVE ANY SERIOUS ACCIDENTS AS A CHILD?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHO, IF ANYONE, WAS AT HOME WHEN YOU RETURNED FROM SCHOOL?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DID YOU EVER PLAY HOOKY?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "DID RELIGION PLAY A PART IN YOUR CHILDHOOD SOCIAL ACTIVITIES?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "AS A KID, WERE YOU GENERALLY POPULAR OR UNPOPULAR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT OBJECT DO YOU REMEMBER VIVIDLY FROM YOUR CHILDHOOD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO WAS YOUR FAVORITE TEACHER IN SCHOOL?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WAS THERE EVER A BULLY IN YOUR LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS STILL THE SAME ABOUT YOU AS WHEN YOU WERE YOUNG?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE MOST PAINFUL MEMORY OF YOUR PARENTS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WAS YOUR PARENT'S RELATIONSHIP LIKE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT FAMILY MEMBER DO YOU TAKE AFTER THE MOST?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS AN ATTRIBUTE IN YOUR PARENTS YOU SEE MOST IN YOURSELF?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "HAVE YOU OR YOUR FAMILY EVER BEEN AFFECTED BY A NATURAL DISASTER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WAS THERE A SECRET HIDEOUT OF YOUR YOUTH?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT ARE YOU AFRAID OF LOSING THE MOST?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT IS SOMETHING YOU WOULD HAVE LIKED TO HAVE CHANGED IN YOUR PARENT'S LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WERE THE STUPIDEST RULES YOUR PARENTS HAD?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "DID YOU BECOME WHO YOU ARE BECAUSE OF OR IN SPITE OF YOUR PARENTS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HAVE YOU EVER FORGIVEN SOMEONE WHO HURT YOU?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT STORY DO YOU TELL THE MOST?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HOW OFTEN DO YOU WORRY ABOUT WHAT PEOPLE THINK OF YOU?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "HAVE YOU EVER GIVEN SOMEONE A NICKNAME YOU KNEW THEY WOULD BE HURT BY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT KINDS OF PEOPLE DO YOU LIKE THE MOST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO IS THE KINDEST PERSON YOU HAVE EVER KNOWN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT ARE THREE GOOD REASONS SOMEONE SHOULD HAVE YOU FOR A FRIEND?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT ARE THE DIFFERENCES BETWEEN YOUR MOTHER AND FATHER?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT IS THE BEST JOKE YOU HAVE EVER HEARD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD YOU LIKE TO BE ABLE TO CREATE WITH YOUR OWN HANDS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT SONG DO YOU PLAY TO MAKE YOURSELF FEEL BETTER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU RATHER BROWSE THROUGH A BOOKSTORE OR A RECORD STORE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT GAME SHOW DO YOU THINK YOU COULD WIN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MOVIE DID YOU LIKE THAT EVERYBODY ELSE HATED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DANCE DO YOU KNOW ALL THE MOVES TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT ALBUM HAVE YOU LISTENED TO THE MOST TIMES? WHY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE BEST JOKE YOU EVER PLAYED ON SOMEONE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "CAN YOU DO A GOOD IMITATION OF ANYONE OR ANYTHING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT FUTURE TECHNOLOGY WOULD YOU MOST LIKE TO EXPERIENCE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HAVE YOU EVER PERFORMED IN FRONT OF AN AUDIENCE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT HOBBY WOULD YOU LIKE TO MAKE INTO A CAREER?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT SONG MAKES YOU SENTIMENTAL? WHAT DOES IT REMIND YOU OF?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT HOW-TO INSTRUCTION BOOK WOULD YOU LIKE TO WRITE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS YOUR GREATEST FEAR?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE TRAIT YOU LIKE LEAST IN YOURSELF?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE TRAIT YOU MOST DEPLORE IN OTHERS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH LIVING PERSON DO YOU MOST ADMIRE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS YOUR GREATEST EXTRAVAGANCE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO YOU CONSIDER THE MOST OVERRATED VIRTUE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "ON WHAT OCCASION DO YOU LIE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO YOU MOST DISLIKE ABOUT YOUR APPEARANCE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHICH LIVING PERSON DO YOU MOST DESPISE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH WORDS OR PHRASES DO YOU MOST OVERUSE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT OR WHO IS THE GREATEST LOVE OF YOUR LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHEN AND WHERE WERE YOU HAPPIEST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH TALENT WOULD YOU MOST LIKE TO HAVE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "IF YOU COULD CHANGE ONE THING ABOUT YOURSELF, WHAT WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO YOU CONSIDER YOUR GREATEST ACHIEVEMENT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU WERE TO DIE AND COME BACK AS A PERSON OR A THING, WHAT WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHERE WOULD YOU MOST LIKE TO LIVE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS YOUR MOST TREASURED POSSESSION?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT WOULD YOUR OWN PERSONAL HELL BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT HAS BEEN YOUR FAVORITE JOB?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS YOUR MOST MARKED CHARACTERISTIC?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO YOU MOST VALUE IN YOUR FRIENDS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS YOUR GREATEST REGRET?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS YOUR MOTTO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT CAN YOU DO WITH YOUR EYES CLOSED?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHERE IS IT DIFFICULT TO BE HONEST WITH YOURSELF?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "OVER THE COURSE OF YOUR LIFE, WHAT HAVE YOU PROBABLY SPENT MORE TIME PONDERING THAN ANYTHING ELSE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT ABOUT YOURSELF WOULD YOU LIKE TO ALWAYS KEEP THE SAME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU PUT YOUR RIGHT OR LEFT SOCK ON FIRST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MAKES YOU PROCRASTINATE THE MOST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT KINDS OF THINGS DO YOU HATE SPENDING MONEY ON?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT THINGS ARE YOU CRITICIZED FOR?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT ARE YOUR GO-TO SWEAR WORDS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HOW WOULD YOU LIKE TO SPEND MOST OF YOUR TIME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS A ROUTINE YOU REMEMBER FROM YOUR CHILDHOOD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS YOUR IDEAL PILLOW NUMBER AND TYPE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT THINGS DO YOU CHECK AT NIGHT BEFORE GOING TO BED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WAS THE LAST BET YOU WON?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT IS THE LAST THING YOU SEE BEFORE YOU CLOSE YOUR EYES AT NIGHT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "ARE YOU CONSIDERED A REGULAR AT ANY EATING ESTABLISHMENT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS YOUR MAIN SLEEP POSITION?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS YOUR MOST RECENT LIE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HAVE YOU EVER TRIED TO HELP SOMEONE TO GIVE UP A HABIT?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHEN WAS THE LAST TIME YOU WERE REALLY DRUNK?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MAKES YOU ROLL YOUR EYES EVERY TIME YOU HEAR IT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT ARE YOU CURRENTLY WORRIED ABOUT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU LOOK TO THE FUTURE MORE WITH ANTICIPATION OR ANXIETY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "IF YOU COULD CHOOSE THE MANNER OF YOUR DEATH, WHAT WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "DO YOU DO MORE LISTENING OR TALKING? MIGHT IT BE GOOD FOR YOU TO SHIFT THAT BALANCE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO YOU LOOK FOR IN A BEST FRIEND?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question: "DO YOU WISH YOU HAD SLEPT WITH MORE OR FEWER PEOPLE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT PERSON DID YOU UNSUCCESSFULLY PURSUE OVER A LONG PERIOD OF TIME?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question:
      "WHAT WOULD YOU SAY TO YOUR LATEST EX IF YOU SAW THEM AGAIN TODAY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "ARE YOUR PARENTS STILL TOGETHER? DO YOU KNOW WHY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO CAN ALWAYS MAKE YOU SMILE?"
  },
  {
    SPR: true,
    HEAVY: false,
    Question: "WHAT HAS BEEN YOUR MOST PHYSICALLY PAINFUL EXPERIENCE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE STRANGEST THING YOU'VE DONE TO FIT IN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO YOU DO IN YOUR LIFE THAT COULD BE CALLED INSPIRING?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS ONE THING THAT GOT MORE CLEAR AS YOU GOT OLDER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT TYPE OF HUMOR MAKES YOU LAUGH THE MOST?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "DO YOU CHANGE THE PITCH OF YOUR VOICE DEPENDING ON WHO YOU TALK TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT HAVE YOU LOST THAT YOU WOULD LIKE TO FIND?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF YOU DIED RICH, WHAT CHARITY WOULD YOU GIVE ALL YOUR MONEY TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WAS YOUR FAVORITE CHILDHOOD MEAL?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF YOU COULD BE BRILLIANT IN ONE SUBJECT WHICH WOULD YOU CHOOSE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE MOST AMAZING WEATHER YOU'VE SEEN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S YOUR FAVORITE FAST FOOD MEAL?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE MOST BEAUTIFUL PLACE YOU'VE EVER SEEN?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO YOU MOST ADMIRE ABOUT YOUR PARENTS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE MOST BEAUTIFUL DRIVE YOU'VE TAKEN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF YOU NEEDED TO CHANGE YOUR NAME WHAT WOULD YOU CHOOSE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT CHANGES HAVE YOU MADE TO REDUCE YOUR IMPACT ON THE ENVIRONMENT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO YOU COMPLAIN ABOUT MORE THAN ANYTHING ELSE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT CHANGE WOULD YOU MOST LIKE TO MAKE FOR YOUR HEALTH?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "IF YOU COULD GIVE ALL HUMAN BEINGS ONE VIRTUE WHICH WOULD YOU CHOOSE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU RATHER AGE FORWARD OR BACKWARDS FROM THIS POINT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO YOU MISS ABOUT CHILDHOOD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IN WHICH ACTIVITY WOULD YOU LIKE A LESSON FROM AN EXPERT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU BE LIKELY TO SURVIVE ALONE IN THE WILDERNESS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT OBLIGATION DO YOU BELIEVE YOU HAVE TO YOUR COUNTRY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF MONEY WERE NO OBJECT WHAT KIND OF PARTY WOULD YOU THROW?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU RATHER BE A GREAT ARTIST, BUSINESSPERSON, OR ATHLETE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT WOULD YOU MOST LIKE TO DO FOR SOMEONE ELSE IF YOU HAD THE MONEY AND TIME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD YOU TRY IF YOU HAD NO FEAR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU GOT A TATTOO WHAT WOULD YOU GET AND WHERE WOULD YOU PUT IT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WAS YOUR FAVORITE GAME TO PLAY AS A CHILD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU COULD DESIGN AND BUILD A ROOM OF YOUR OWN WHAT WOULD IT BE LIKE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT ONE GOAL DO YOU HOPE TO ACCOMPLISH THIS YEAR?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DO YOU LET THE LITTLE THINGS GET IN THE WAY OF THE BIG THINGS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO TAUGHT YOU HOW TO RIDE A BIKE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "DO YOU POSSESS ANY OF THE QUALITIES OF YOUR ASTROLOGICAL SIGN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S YOUR DREAM JOB?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU KNEW THAT YOU WERE GOING TO INHERIT A FORTUNE HOW WOULD YOUR PLANS FOR THE FUTURE CHANGE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH OF YOUR PERSONALITY TRAITS WOULD YOU LIKE TO CHANGE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S YOUR PROUDEST ACCOMPLISHMENT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MAKES A HOUSE A HOME?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT FASHION TREND YOU FOLLOWED WAS VERY COOL THEN BUT NOW LOOKS RIDICULOUS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF YOU COULD MASTER ONE INSTRUMENT WHICH WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "HAVE YOU EVER HAD AN EXPERIENCE THAT LED YOU TO BELIEVE IN ANGELS OR GHOSTS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH CELEBRITY DO PEOPLE SAY YOU RESEMBLE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU COULD HAVE ANY VIEW FROM YOUR BACK PORCH WHAT WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU STOP EATING ALL JUNK FOOD TO LIVE FIVE YEARS LONGER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO'S THE FUNNIEST PERSON ALIVE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH FABULOUSLY IMPRACTICAL CAR WOULD YOU LIKE TO OWN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT THREE ADJECTIVES WOULD YOUR FAMILY USE TO DESCRIBE YOU?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HOW WOULD YOU LIKE TO SPEND YOUR ELDER YEARS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU COULD WORK AS AN ASSISTANT TO ANYONE FOR A YEAR WHO WOULD YOU CHOOSE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WOULD YOU PREFER MONEY FOR A HOUSEKEEPER, COOK, GARDENER, OR PERSONAL ASSISTANT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH OF YOUR ANCESTORS WOULD YOU MOST LIKE TO MEET?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WOULD YOU LIKE TO BE PROUDEST OF YOUR ACCOMPLISHMENTS OR YOUR CHARACTER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT POSTERS DID YOU HAVE IN YOUR ROOM WHEN YOU WERE YOUNG?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HOW MANY DIFFERENT PLACES HAVE YOU LIVED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT REMAINS UNDONE THAT YOU'VE WANTED TO GET DONE FOR YEARS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO YOU WISH YOU WERE BETTER AT SAYING 'NO' TO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE BIGGEST LIE YOU TOLD AS A CHILD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S YOUR FAVORITE PART OF HOLIDAY DINNERS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT ONE FEAR WOULD YOU LIKE TO CONQUER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU COULD DO SOMETHING DANGEROUS JUST ONCE WITH NO RISKS WHAT WOULD YOU DO?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WOULD YOU RATHER LIVE BY THE BEACH OR IN THE MOUNTAINS?"
  },
  {
    SPR: true,
    HEAVY: true,
    Question:
      "IF YOU DECIDED TO GO ON A SPIRITUAL JOURNEY WHERE WOULD YOU GO AND WHAT WOULD YOU DO?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "IS IT MORE ESSENTIAL TO DEVELOP BELIEFS OR GAIN KNOWLEDGE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU LIVED TO BE ONE HUNDRED WOULD YOU RATHER HAVE A SHARP MIND OR A FIT BODY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WOULD YOU RATHER MEET YOUR GREAT GREAT GRANDPARENTS OR YOUR GREAT GREAT GRANDCHILDREN?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT HOUSEHOLD DISASTER HAPPENED TO YOU?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE SCARIEST MOVIE OF ALL TIME?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "IS JUSTICE OR FORGIVENESS MORE IMPORTANT?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DID YOU GET INTO TROUBLE FOR WHEN YOU WERE YOUNG?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE SECRET TO STAYING YOUNG?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT ARE THE MOST IMPORTANT QUALITIES IN FRIENDS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HAVE YOU EVER BOUGHT ANYTHING FROM A TV INFOMERCIAL?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH LANGUAGE WOULD YOU LIKE TO SPEAK FLUENTLY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "ARE YOU MENTALLY OR PHYSICALLY TOUGHER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE MOST FUN PARTY YOU EVER ATTENDED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO WOULD YOU LIKE TO TRADE PLACES WITH FOR ONE MONTH?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IS SCIENCE OR ART MORE ESSENTIAL TO HUMANITY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IS IT MORE IMPORTANT TO BE BOOK-SMART OR STREET-SMART?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHICH IS MORE IMPORTANT - THE RESPECT OF YOUR CHILDREN OR YOUR PARENTS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WOULD YOU CHOOSE TO BE THE WORST PLAYER ON A WINNING TEAM OR THE BEST PLAYER ON A LOSING TEAM?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "IF YOU OWNED A BOAT WHAT NAME WOULD YOU CHOOSE FOR IT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT'S THE HARDEST THING YOU'VE EVER DONE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD YOU LOVE TO FIND AT A YARD SALE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH AMERICAN LANDMARK WOULD YOU MOST LIKE TO SEE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WAS YOUR MOST MEMORABLE MEAL EVER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE STRANGEST THING YOU'VE EVER EATEN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHICH EVENT IN THE PAST, PRESENT, OR FUTURE WOULD YOU LIKE TO WITNESS IN PERSON?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S THE FUNNIEST ADVICE YOUR MOTHER OR FATHER GAVE YOU?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S YOUR FAVORITE SONG TO PLAY IN THE CAR?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HOW DO YOU DEFINE SUCCESS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD YOU MISS MOST ABOUT YOUR HOME IF YOU MOVED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO'S THE MOST OPTIMISTIC PERSON YOU KNOW?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHICH PIECE OF LAND WOULD YOU PRESERVE FOREVER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT'S YOUR FAVORITE QUOTATION?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT'S THE SECRET TO HAVING A GOOD MARRIAGE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT DO YOU LOVE ABOUT YOUR HOMETOWN?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHEN YOU'RE DOWN WHAT MAKES YOU FEEL BETTER?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT PETS HAVE YOU HAD IN YOUR LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HAVE YOU EVER BEEN FOLLOWED?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD YOU LIKE OLD AGE TO LOOK LIKE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT MEAL DO YOU REMEMBER MOST FROM YOUR CHILDHOOD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "IF YOU COULD BE MENTORED BY ANYONE IN THE WORLD, WHO WOULD IT BE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD YOU TELL YOUR 20 YEAR OLD SELF?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS ONE OF THE LESSONS LEARNED FROM A HEARTBREAK?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT IS A CONVERSATION THAT YOU KNOW THAT YOU NEED TO HAVE WITH YOURSELF?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHEN DID YOU KNOW THAT YOU WERE NO LONGER A CHILD?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT'S THE BEST PIECE OF ADVICE YOU'VE EVER RECEIVED?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DOES YOUR FAMILY DO RIGHT WHEN IT COMES TO RELATIONSHIPS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT IS AN ASPECT YOU'D LIKE TO CHANGE ABOUT THE WAY YOU LOOK AT RELATIONSHIPS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT'S A CHALLENGE THAT YOU HAVE SUCCESSFULLY FACED AND HOW YOU HAVE HANDLED IT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT WOULD YOU SAY MAKES YOU NOT THE EASIEST PERSON TO LIVE WITH?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "DESCRIBE A TIME WHEN YOU CHANGED YOUR MIND."
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT WOULD YOU DO IF YOU HAD A DIFFERENT CAREER?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WERE YOU RAISED FOR AUTONOMY OR RAISED FOR LOYALTY?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHAT IS SOMETHING YOU WISHED YOU HAD KNOWN OR BEEN TOLD AS A CHILD?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHAT IS A TOPIC YOU WISH YOU WERE TAUGHT IN SCHOOL?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT GIVES YOU A SENSE OR PURPOSE AND MEANING IN YOUR LIFE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HOW DID YOU LEARN TO LOVE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT IS PART OF YOUR IDENTITY THAT WAS GIVEN TO YOU? WHAT IS PART THAT YOU HAVE CHOSEN?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "IS YOUR BEHAVIOR PRIMARILY GEARED TOWARD BEING LOVED, OR EXPRESSING LOVE?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "HOW DO YOU EXPRESS YOUR LOVE FOR OTHERS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "HOW GOOD ARE YOU AT RECEIVING PRAISE AND COMPLIMENTS?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question:
      "WHEN WAS THE LAST TIME YOU DID SOMETHING NICE FOR SOMEONE? WHAT WAS IT?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS THE MAIN RELATIONSHIP LEGACY YOU BRING FROM YOUR FAMILY?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question:
      "WHAT IS ONE THING YOU'D LIKE TO DO DIFFERENTLY IN YOUR RELATIONSHIPS?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT IS A TRUTH YOU HAVE NEVER SAID OUT LOUD?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT DO YOU REGRET SAYING 'YES' TO?"
  },
  {
    SPR: false,
    HEAVY: true,
    Question: "WHAT HAS BEEN YOUR MOST EMOTIONALLY PAINFUL EXPERIENCE?"
  },
  {
    SPR: false,
    HEAVY: false,
    Question: "WHO IS THE MOST SUCCESSFUL PERSON IN YOUR FRIEND GROUP?"
  }
];

function heavyArray() {
  const hvQues = allQues
    .filter(q => {
      return q.HEAVY == true && q.SPR == false;
    })
    .map(q => q.Question);
  //randomizes the returned array and places it in the "result" id html
  var randomize = Math.floor(Math.random() * hvQues.length);
  document.getElementById("result").innerHTML = hvQues[randomize];
}

function sprArray() {
  const sprQues = allQues
    .filter(q => {
      return q.SPR == true && q.HEAVY == false;
    })
    .map(q => q.Question);
  var randomize = Math.floor(Math.random() * sprQues.length);
  document.getElementById("result").innerHTML = sprQues[randomize];
}
function ltArray() {
  const ltQues = allQues
    //this is filtering all the objects that have spr as true
    .filter(q => {
      return q.HEAVY == false && q.SPR == false;
    })
    .map(q => q.Question);
  var randomize = Math.floor(Math.random() * ltQues.length);
  document.getElementById("result").innerHTML = ltQues[randomize];
}
function allArray() {
  const mxQues = allQues.map(q => q.Question);
  //randomizes the returned array and places it in the "result" id html
  var randomize = Math.floor(Math.random() * allQues.length);
  document.getElementById("result").innerHTML = mxQues[randomize];
}

function resetArray() { 
  var div = document.getElementById("result");
  while(div.firstChild){
      div.removeChild(div.firstChild);  
  }
} 