export enum ETransactionServices {
	SERVICE_INVALID = 2209654107,
	SERVICE_SPEND_MECHANIC_WAGE = 2649738075,
	SERVICE_SPEND_UTILITY_BILLS = 3709248901,
	SERVICE_SPEND_PROSTITUTES = 2935592169,
	SERVICE_SPEND_STRIP_CLUB = 454359403,
	SERVICE_SPEND_CINEMA = 3312573245,
	SERVICE_SPEND_FAIRGROUND = 1643659499,
	SERVICE_SPEND_LOTTERY = 2222677642,
	SERVICE_SPEND_TELESCOPE = 650665123,
	SERVICE_SPEND_CALL_PLAYER = 1654961868,
	SERVICE_SPEND_VEHICLE_INSURANCE = 3418119454,
	SERVICE_SPEND_VEHICLE_INSURANCE_PREMIUM = 68030260,
	SERVICE_SPEND_CAR_REPAIR = 2172668013,
	SERVICE_SPEND_PERSONAL_VEHICLE_DROPOFF = 366672791,
	SERVICE_SPEND_PEGASUS_DELIVERY = 283351220,
	SERVICE_SPEND_CAR_IMPOUND = 291576838,
	SERVICE_SPEND_CARWASH = 1182673174,
	SERVICE_SPEND_HEALTHCARE = 3778748250,
	SERVICE_SPEND_OTHER_PLAYER_HEALTHCARE = 1036455748,
	SERVICE_SPEND_ARREST_BAIL = 277665518,
	SERVICE_SPEND_CASH_DROP = 2043854386,
	SERVICE_SPEND_ROBBED_BY_MUGGER = 1839532116,
	SERVICE_SPEND_CASH_DROP_HOLDUP = 1022400740,
	SERVICE_SPEND_MATCH_ENTRY_FEE = 1940862352,
	SERVICE_SPEND_RACE_VEHICLE_RENTAL = 2905739390,
	SERVICE_SPEND_CHALLENGE_WAGER = 711665950,
	SERVICE_SPEND_BETTING = 1704445500,
	SERVICE_SPEND_AIRSTRIKE = 1515774909,
	SERVICE_SPEND_AMMO_DROP = 1173654533,
	SERVICE_SPEND_BACKUP_GANG = 3395164992,
	SERVICE_SPEND_BACKUP_HELI = 3631022961,
	SERVICE_SPEND_BOAT_PICKUP = 1208553146,
	SERVICE_SPEND_BOUNTY = 3681746286,
	SERVICE_SPEND_BULL_SHARK = 3623904420,
	SERVICE_SPEND_COPS_TURN_EYE = 3887766060,
	SERVICE_SPEND_HELI_PICKUP = 3540943093,
	SERVICE_SPEND_HIRE_MERCENARY = 2409522409,
	SERVICE_SPEND_HIRE_MUGGER = 1931729587,
	SERVICE_SPEND_LOCATE_VEHICLE = 1064954035,
	SERVICE_SPEND_LOSE_WANTED_LEVEL = 4114826223,
	SERVICE_SPEND_OFF_THE_RADAR = 2131324797,
	SERVICE_SPEND_PASSIVE = 1612072658,
	SERVICE_SPEND_REQUEST_HEIST = 3777519894,
	SERVICE_SPEND_REQUEST_JOB = 1948102096,
	SERVICE_SPEND_REVEAL_PLAYERS = 1108628223,
	SERVICE_SPEND_TAXI = 2460920732,
	SERVICE_SPEND_BANK_INTEREST = 3055958484,
	SERVICE_SPEND_CASH_GIFT = 4072603454,
	SERVICE_SPEND_CASH_SHARED = 3018288428,
	SERVICE_SPEND_IMPROMPTU_RACE_FEE = 1564537328,
	SERVICE_SPEND_BOUNTY_DM = 4198373795,
	SERVICE_SPEND_STYLIST_FEE = 2874163910,
	SERVICE_SPEND_MOVE_YACHT = 631654431,
	SERVICE_SPEND_BOSS_BUY_IN = 3632420201,
	SERVICE_SPEND_PAY_BOSS = 2050093329,
	SERVICE_SPEND_PAY_GOON = 2542479227,
	SERVICE_SPEND_WAGER = 742499889,
	SERVICE_SPEND_RENAME_ORGANIZATION = 634375935,
	SERVICE_SPEND_YACHT_HELI = 2739940681,
	SERVICE_SPEND_YACHT_BOAT = 522351365,
	SERVICE_SPEND_CONTRABAND = 1560712661,
	SERVICE_SPEND_CONTRABAND_MISSION = 891296584,
	SERVICE_SPEND_PA_SERVICE_HELI = 1035322964,
	SERVICE_SPEND_PA_SERVICE_VEHICLE = 819165432,
	SERVICE_SPEND_PA_SERVICE_SNACK = 3011076135,
	SERVICE_SPEND_PA_SERVICE_DANCER = 2165185470,
	SERVICE_SPEND_PA_SERVICE_IMPOUND = 74383614,
	SERVICE_SPEND_PA_SERVICE_HELI_PICKUP = 1941570214,
	SERVICE_SPEND_ORDER_WAREHOUSE_VEHICLE = 2964212290,
	SERVICE_SPEND_ORDER_BODYGUARD_VEHICLE = 665109499,
	SERVICE_SPEND_JUKEBOX = 1976384368,
	SERVICE_SPEND_BA_VP_BOUNTY = 1869490922,
	SERVICE_SPEND_BA_VP_BULLSHARK = 3958163446,
	SERVICE_SPEND_BA_SARGE_AMMO = 2882274531,
	SERVICE_SPEND_BA_SARGE_MOLOTOV = 618167454,
	SERVICE_SPEND_BA_ENFORCER_ARMOUR = 980623936,
	SERVICE_SPEND_BUSINESS = 268924934,
	SERVICE_SPEND_VEHICLE_EXPORT_MODS = 437291904,
	SERVICE_SPEND_PLAYER_APPEARANCE = 703449113,
	SERVICE_SPEND_IMPORT_EXPORT_REPAIR = 4159154248,
	NETWORK_SPEND_HANGAR_UTILITY = 1567360147,
	NETWORK_SPEND_HANGAR_STAFF = 2308579407,
	SERVICE_SPEND_GANGOPS_CANNON = 2874057976,
	SERVICE_SPEND_GANGOPS_SKIP_MISSION = 2561569253,
	SERVICE_SPEND_GANGOPS_START_STRAND = 2402207034,
	SERVICE_SPEND_GANGOPS_TRIP_SKIP = 2749230248,
	SERVICE_SPEND_EMPLOY_ASSASSINS = 3364862819,
	SERVICE_SPEND_ORBITAL_MANUAL = 1004698854,
	SERVICE_SPEND_ORBITAL_AUTO = 3185747874,
	SERVICE_SPEND_GANGOPS_REPAIR_COST = 2039302543,
	SERVICE_SPEND_NIGHTCLUB_ENTRY_FEE = 402505853,
	SERVICE_SPEND_NIGHTCLUB_BAR_DRINK = 3151457114,
	SERVICE_SPEND_NIGHTCLUB_DJ_REHIRE = 1678112166,
	SERVICE_SPEND_ARENA_JOIN_SPECTATOR = 837955913,
	SERVICE_SPEND_ARENA_SPECTATOR_BOX = 2762500152,
	SERVICE_SPEND_SPIN_THE_WHEEL_PAYMENT = 2952902635,
	SERVICE_SPEND_MAKE_IT_RAIN = 1815541181,
	SERVICE_SPEND_ARENA_PREMIUM_EVENT_ENTRY = 3696988851,
	SERVICE_SPEND_CASINO_MEMBERSHIP = 3945621184,
	SERVICE_SPEND_CASINO_GENERIC = 2601396541,
	SERVICE_SPEND_ARCADE_GAME = 1868043300,
	SERVICE_SPEND_ARCADE_GENERIC = 3597718413,
	SERVICE_SPEND_CASINO_HEIST_SKIP_MISSION = 2999421501,
	SERVICE_SPEND_CASINO_HEIST_SETUP_HEIST = 914079366,
	SERVICE_SPEND_CASINO_HEIST_CASINO_MODEL = 395122350,
	SERVICE_SPEND_CASINO_HEIST_VAULT_DOOR = 3962986220,
	SERVICE_SPEND_CASINO_HEIST_DOOR_SECURITY = 1671535231,
	SERVICE_SPEND_ISLAND_HEIST_SUPPORT_AIRSTRIKE = 2398360572,
	SERVICE_SPEND_ISLAND_HEIST_SUPPORT_HEAVY_WEAPON = 3003533723,
	SERVICE_SPEND_ISLAND_HEIST_SUPPORT_SNIPER = 538631715,
	SERVICE_SPEND_ISLAND_HEIST_SUPPORT_AIR_SUPPORT = 133782822,
	SERVICE_SPEND_ISLAND_HEIST_SUPPORT_DRONE = 2081885153,
	SERVICE_SPEND_ISLAND_HEIST_SUPPORT_WEAPON_STASH = 2980601951,
	SERVICE_SPEND_ISLAND_HEIST_SUPPRESSORS = 1322977732,
	SERVICE_SPEND_ISLAND_HEIST_REPLAY = 396623013,
	SERVICE_SPEND_BEACH_PARTY_GENERIC = 1981664462,
	SERVICE_SPEND_CASINO_CLUB_GENERIC = 3383999008,
	SERVICE_SPEND_SUBMARINE_UTILITY_FEE = 2373716475,
	SERVICE_SPEND_SUBMARINE_BOAT = 2924235749,
	SERVICE_SPEND_SUBMARINE_RELOCATION = 1683798242,
	SERVICE_SPEND_INTERACTION_MENU_ABILITY = 1051883823,
	SERVICE_SPEND_BUSINESS_EXPENSES = 4126647918,
	SERVICE_SPEND_REQUEST_SUPPLY = 2636741375,
	SERVICE_SPEND_REQUEST_SOURCE_MOTORCYCLE = 3743131696,
	SERVICE_SPEND_REQUEST_OUT_OF_SIGHT = 3064279671,
	SERVICE_SPEND_FIXER_HQ_CONCIERGE = 1637817605,
	SERVICE_SPEND_REQUEST_COMPANY_SUV = 830018386,
	SERVICE_SPEND_SOURCE_CARGO = 2153938272,
	SERVICE_SPEND_AGENT_14_VEHICLE_REQUEST = 2281207000,
	SERVICE_SPEND_TONY_LIMO = 3261078292,
	SERVICE_SPEND_JUGALLO_BOSS_VEHICLE_REQUEST = 1089562091,
	SERVICE_EARN_PICKUP = 4263810419,
	SERVICE_EARN_CASHING_OUT = 1347433368,
	SERVICE_EARN_INITIAL_CASH = 1718438689,
	SERVICE_EARN_JOBS = 3267748665,
	SERVICE_EARN_BETTING = 2896648878,
	SERVICE_EARN_LOTTERY = 1652884147,
	SERVICE_EARN_CHALLENGE_WIN = 4237099040,
	SERVICE_EARN_PROPERTY_SALES = 3078478004,
	SERVICE_EARN_VEHICLE_SALES = 4248344981,
	SERVICE_EARN_LESTER_TARGET_KILL = 3942610365,
	SERVICE_EARN_BOUNTY_COLLECTED = 3304681061,
	SERVICE_EARN_CRATE_DROP = 563463121,
	SERVICE_EARN_HOLDUPS = 1734805203,
	SERVICE_EARN_IMPORT_EXPORT = 941287179,
	SERVICE_EARN_ARMORED_TRUCKS = 3108887451,
	SERVICE_EARN_JOBSHARE_CASH = 2309817038,
	SERVICE_EARN_NOT_BADSPORT = 3167945912,
	SERVICE_EARN_BANK_INTEREST = 4185766010,
	SERVICE_EARN_ROCKSTAR = 312105838,
	SERVICE_EARN_DEBUG = 1982688246,
	SERVICE_EARN_CNCW = 3633936878,
	SERVICE_EARN_CNCB = 1301046174,
	SERVICE_EARN_JOB_BONUS = 2708796979,
	SERVICE_EARN_JOB_BONUS_CRIMINAL_MASTERMIND = 1052472386,
	SERVICE_EARN_JOB_BONUS_HEIST_AWARD = 2164767625,
	SERVICE_EARN_JOB_BONUS_FIRST_TIME_BONUS = 3067312758,
	SERVICE_EARN_BEND_JOB = 393059668,
	SERVICE_EARN_PREMIUM_JOB = 4247420391,
	SERVICE_EARN_PERSONAL_VEHICLE = 23796958,
	SERVICE_EARN_DAILY_OBJECTIVES = 3217811126,
	SERVICE_EARN_AMBIENT_JOB_PLANE_TAKEDOWN = 1780666425,
	SERVICE_EARN_AMBIENT_JOB_DISTRACT_COPS = 2251272238,
	SERVICE_EARN_AMBIENT_JOB_DESTROY_VEH = 2372412947,
	SERVICE_EARN_REFUND_BACKUP_VAGOS = 1287308202,
	SERVICE_EARN_REFUND_BACKUP_LOST = 691372038,
	SERVICE_EARN_REFUND_BACKUP_FAMILIES = 1480707108,
	SERVICE_EARN_REFUND_HIRE_MUGGER = 1512499951,
	SERVICE_EARN_REFUND_HIRE_MERCENARY = 562283735,
	SERVICE_EARN_REFUND_BUY_CARDROPOFF = 4140234963,
	SERVICE_EARN_REFUND_HELI_PICKUP = 2932306805,
	SERVICE_EARN_REFUND_BOAT_PICKUP = 645708827,
	SERVICE_EARN_REFUND_CLEAR_WANTED = 767907967,
	SERVICE_EARN_REFUND_HEAD_2_HEAD = 2324815990,
	SERVICE_EARN_REFUND_CHALLENGE = 718859568,
	SERVICE_EARN_REFUND_SHARE_LAST_JOB = 2339402525,
	SERVICE_EARN_REFUND_LOTTERY = 892388724,
	SERVICE_EARN_GANGATTACK_PICKUP = 1349151477,
	SERVICE_EARN_AMBIENT_JOB_HOT_TARGET_DELIVER = 1620609399,
	SERVICE_EARN_AMBIENT_JOB_HOT_TARGET_KILL = 1961641934,
	SERVICE_EARN_AMBIENT_JOB_PLANE_DROP = 1841563381,
	SERVICE_EARN_AMBIENT_JOB_URBAN_WARFARE = 210955503,
	SERVICE_EARN_AMBIENT_JOB_CHECKPOINT_COLLECTION = 4235299214,
	SERVICE_EARN_AMBIENT_JOB_TIME_TRIAL = 1736933716,
	SERVICE_EARN_AMBIENT_JOB_CHALLENGES = 2826443171,
	SERVICE_EARN_AMBIENT_JOB_HELI_HOT_TARGET = 111573502,
	SERVICE_EARN_AMBIENT_JOB_DEAD_DROP = 1525644423,
	SERVICE_EARN_AMBIENT_JOB_PENNED_IN = 968073639,
	SERVICE_EARN_AMBIENT_JOB_MULTI_TARGET = 1524702415,
	SERVICE_EARN_AMBIENT_JOB_PASS_PARCEL = 1577781788,
	SERVICE_EARN_AMBIENT_JOB_BLAST = 3360501964,
	SERVICE_EARN_AMBIENT_JOB_HOT_PROPERTY = 3100714174,
	SERVICE_EARN_AMBIENT_JOB_KING = 4082360211,
	SERVICE_EARN_AMBIENT_JOB_INFECT = 211022587,
	SERVICE_EARN_AMBIENT_JOB_MYSTERY_TEXT = 1181422469,
	SERVICE_EARN_AMBIENT_JOB_BEAST = 3479420741,
	SERVICE_EARN_BOSS = 1048226110,
	SERVICE_EARN_GOON = 569170531,
	SERVICE_EARN_BOSS_AGENCY = 3438960429,
	SERVICE_EARN_WAGE_PAYMENT = 4193659516,
	SERVICE_EARN_WAGE_PAYMENT_BONUS = 1550217370,
	SERVICE_EARN_FROM_CONTRABAND = 208223429,
	SERVICE_EARN_FROM_WAREHOUSE = 2313540078,
	SERVICE_EARN_FROM_DESTROYING_CONTRABAND = 848090538,
	SERVICE_EARN_FROM_BUSINESS_PRODUCT = 2720329715,
	SERVICE_EARN_REFUNDAPPEARANCE = 2868046458,
	SERVICE_EARN_FROM_VEHICLE_EXPORT = 4001907056,
	SERVICE_EARN_RDR_BONUS_ALL_SLOTS = 2182218551,
	SERVICE_EARN_SMUGGLER_AGENCY = 463142405,
	SERVICE_EARN_REFUNDAMMODROP = 3630369731,
	SERVICE_EARN_SALVAGE_CHECKPOINT_COLLECTION = 599804707,
	SERVICE_EARN_AMBIENT_MUGGING = 3967048882,
	SERVICE_EARN_AMBIENT_PICKUP = 550898518,
	SERVICE_EARN_DEATHMATCH_BOUNTY = 835976347,
	SERVICE_EARN_REFUND_ORBITAL_MANUAL = 1864522104,
	SERVICE_EARN_REFUND_ORBITAL_AUTO = 215608230,
	SERVICE_EARN_GANGOPS_WAGES = 3418954532,
	SERVICE_EARN_GANGOPS_WAGES_BONUS = 3572072971,
	SERVICE_EARN_DAR_CHALLENGE = 1861649154,
	SERVICE_EARN_GANGOPS_PREP_PARTICIPATION = 1407278493,
	SERVICE_EARN_GANGOPS_SETUP = 2715572802,
	SERVICE_EARN_GANGOPS_SETUP_FAIL = 4267523385,
	SERVICE_EARN_GANGOPS_FINALE = 1179783540,
	SERVICE_EARN_GANGOPS_AWARD_MASTERMIND_2 = 923419301,
	SERVICE_EARN_GANGOPS_AWARD_MASTERMIND_3 = 3986141121,
	SERVICE_EARN_GANGOPS_AWARD_MASTERMIND_4 = 603298940,
	SERVICE_EARN_GANGOPS_AWARD_LOYALTY_AWARD_2 = 4282347442,
	SERVICE_EARN_GANGOPS_AWARD_LOYALTY_AWARD_3 = 3983854621,
	SERVICE_EARN_GANGOPS_AWARD_LOYALTY_AWARD_4 = 870439158,
	SERVICE_EARN_GANGOPS_AWARD_FIRST_TIME_XM_BASE = 3320678556,
	SERVICE_EARN_GANGOPS_AWARD_FIRST_TIME_XM_SUBMARINE = 4290828642,
	SERVICE_EARN_GANGOPS_AWARD_FIRST_TIME_XM_SILO = 3114013174,
	SERVICE_EARN_GANGOPS_AWARD_SUPPORTING = 2376916280,
	SERVICE_EARN_GANGOPS_AWARD_ORDER = 844330594,
	SERVICE_EARN_GANGOPS_ELITE_XM_BASE = 1934825517,
	SERVICE_EARN_GANGOPS_ELITE_XM_SUBMARINE = 1852024236,
	SERVICE_EARN_GANGOPS_ELITE_XM_SILO = 2099238988,
	SERVICE_EARN_GANGOPS_RIVAL_DELIVERY = 1952643559,
	SERVICE_EARN_DOOMSDAY_FINALE_BONUS = 3122066507,
	SERVICE_EARN_BOUNTY_HUNTER_REWARD = 2279567963,
	SERVICE_EARN_FROM_BUSINESS_BATTLE = 2720171655,
	SERVICE_EARN_FROM_CLUB_MANAGEMENT_PARTICIPATION = 3333932415,
	SERVICE_EARN_FROM_FMBB_PHONECALL_MISSION = 1135468152,
	SERVICE_EARN_FROM_BUSINESS_HUB_SELL = 1265272476,
	SERVICE_EARN_FROM_FMBB_BOSS_WORK = 3660240660,
	SERVICE_EARN_FMBB_WAGE_BONUS = 696556762,
	SERVICE_EARN_NIGHTCLUB_DANCING_AWARD = 443347049,
	SERVICE_EARN_RDR_BONUS_ALL_SLOTS_1 = 3691554369,
	SERVICE_EARN_BB_EVENT_BONUS = 403506509,
	SERVICE_EARN_ARENA_SKILL_LVL_AWARD = 3411090882,
	SERVICE_EARN_ASSASSINATE_TARGET_KILLED = 1240683675,
	SERVICE_EARN_SPIN_THE_WHEEL_CASH = 3733955243,
	SERVICE_EARN_ARENA_CAREER_TIER_PROGRESSION_1 = 3230816581,
	SERVICE_EARN_ARENA_CAREER_TIER_PROGRESSION_2 = 2907714241,
	SERVICE_EARN_ARENA_CAREER_TIER_PROGRESSION_3 = 3578004144,
	SERVICE_EARN_ARENA_CAREER_TIER_PROGRESSION_4 = 1138089938,
	SERVICE_EARN_ARENA_WAR = 1241904665,
	SERVICE_EARN_REFUND_ARENA_SPEC_BOX_ENTRY = 3194003497,
	SERVICE_EARN_AMBIENT_JOB_RC_TIME_TRIAL = 3800402237,
	SERVICE_EARN_DAILY_OBJECTIVE_EVENT = 827308208,
	SERVICE_EARN_COLLECTABLES_ACTION_FIGURES = 2437282104,
	SERVICE_EARN_CASINO_MISSION_REWARD = 1698417709,
	SERVICE_EARN_CASINO_STORY_MISSION_REWARD = 2277042259,
	SERVICE_EARN_CASINO_AWARD_MISSION_ONE_FIRST_TIME = 1057653594,
	SERVICE_EARN_CASINO_AWARD_MISSION_TWO_FIRST_TIME = 1810506918,
	SERVICE_EARN_CASINO_AWARD_MISSION_THREE_FIRST_TIME = 451427308,
	SERVICE_EARN_CASINO_AWARD_MISSION_FOUR_FIRST_TIME = 824622151,
	SERVICE_EARN_CASINO_AWARD_MISSION_FIVE_FIRST_TIME = 1253978276,
	SERVICE_EARN_CASINO_AWARD_MISSION_SIX_FIRST_TIME = 2718886530,
	SERVICE_EARN_CASINO_AWARD_STRAIGHT_FLUSH = 1508411869,
	SERVICE_EARN_CASINO_AWARD_TOP_PAIR = 1428501742,
	SERVICE_EARN_CASINO_AWARD_FULL_HOUSE = 2376000145,
	SERVICE_EARN_CASINO_AWARD_LUCKY_LUCKY = 1261538664,
	SERVICE_EARN_CASINO_AWARD_HIGH_ROLLER_BRONZE = 1180397655,
	SERVICE_EARN_CASINO_AWARD_HIGH_ROLLER_SILVER = 1414674366,
	SERVICE_EARN_CASINO_AWARD_HIGH_ROLLER_GOLD = 261460130,
	SERVICE_EARN_CASINO_AWARD_HIGH_ROLLER_PLATINUM = 2267308920,
	SERVICE_EARN_CASINO_HEIST_SETUP_MISSION = 1668610896,
	SERVICE_EARN_CASINO_HEIST_PREP_MISSION = 2262437735,
	SERVICE_EARN_CASINO_HEIST_FINALE = 3070487849,
	SERVICE_EARN_CASINO_HEIST_AWARD_SMASH_N_GRAB = 3975660607,
	SERVICE_EARN_CASINO_HEIST_AWARD_IN_PLAIN_SIGHT = 3828440032,
	SERVICE_EARN_CASINO_HEIST_AWARD_UNDETECTED = 1925965142,
	SERVICE_EARN_CASINO_HEIST_AWARD_ALL_ROUNDER = 592152676,
	SERVICE_EARN_CASINO_HEIST_AWARD_ELITE_THIEF = 2035612943,
	SERVICE_EARN_CASINO_HEIST_AWARD_PROFESSIONAL = 1568659720,
	SERVICE_EARN_CASINO_HEIST_ELITE_STEALTH = 1220095570,
	SERVICE_EARN_CASINO_HEIST_ELITE_SUBTERFUGE = 2050320631,
	SERVICE_EARN_CASINO_HEIST_ELITE_DIRECT = 592672421,
	SERVICE_EARN_COLLECTABLE_ITEM = 1775876058,
	SERVICE_EARN_COLLECTABLE_COMPLETED_COLLECTION = 3452904320,
	SERVICE_EARN_COLLECTABLES_SIGNAL_JAMMERS = 3776315386,
	SERVICE_EARN_COLLECTABLES_SIGNAL_JAMMERS_COMPLETE = 14658715,
	SERVICE_EARN_ISLAND_HEIST_FINALE = 3690173704,
	SERVICE_EARN_ISLAND_HEIST_ELITE_CHALLENGE = 3471540904,
	SERVICE_EARN_ISLAND_HEIST_AWARD_PROFESSIONAL = 2893104316,
	SERVICE_EARN_ISLAND_HEIST_AWARD_ELITE_THIEF = 4121613022,
	SERVICE_EARN_ISLAND_HEIST_AWARD_THE_ISLAND_HEIST = 409533976,
	SERVICE_EARN_ISLAND_HEIST_AWARD_GOING_ALONE = 2822444959,
	SERVICE_EARN_ISLAND_HEIST_AWARD_TEAM_WORK = 542574408,
	SERVICE_EARN_ISLAND_HEIST_AWARD_CAT_BURGLAR = 3033168233,
	SERVICE_EARN_ISLAND_HEIST_AWARD_PRO_THIEF = 784631574,
	SERVICE_EARN_ISLAND_HEIST_AWARD_MIXING_IT_UP = 2267488140,
	SERVICE_EARN_ISLAND_HEIST_PREP = 3457276655,
	SERVICE_EARN_ISLAND_HEIST_DJ_MISSION = 3265294958,
	SERVICE_EARN_TUNER_ROBBERY_PREP = 2791217326,
	SERVICE_EARN_TUNER_ROBBERY_FINALE = 2451558204,
	SERVICE_EARN_TUNER_CAR_CLUB_MEMBERSHIP = 1669058563,
	SERVICE_EARN_TUNER_DAILY_VEHICLE = 2102747615,
	SERVICE_EARN_TUNER_DAILY_VEHICLE_BONUS = 2030771998,
	SERVICE_EARN_TUNER_AWARD_UNION_DEPOSITORY = 1708747007,
	SERVICE_EARN_TUNER_AWARD_MILITARY_CONVOY = 645293860,
	SERVICE_EARN_TUNER_AWARD_FLEECA_BANK = 3476108103,
	SERVICE_EARN_TUNER_AWARD_FREIGHT_TRAIN = 300796227,
	SERVICE_EARN_TUNER_AWARD_BOLINGBROKE_ASS = 2295134950,
	SERVICE_EARN_TUNER_AWARD_IAA_RAID = 1058055395,
	SERVICE_EARN_TUNER_AWARD_METH_JOB = 3973816171,
	SERVICE_EARN_TUNER_AWARD_BUNKER_RAID = 2078731875,
	SERVICE_EARN_AMBIENT_JOB_HSW_TIME_TRIAL = 67714907,
	SERVICE_EARN_AUTO_SHOP_DELIVERY_AWARD = 1280785534,
	SERVICE_EARN_AGENCY_SECURITY_CONTRACT = 2416142522,
	SERVICE_EARN_AGENCY_PAYPHONE_HIT = 247992227,
	SERVICE_EARN_AGENCY_STORY_PREP = 4065729938,
	SERVICE_EARN_AGENCY_STORY_FINALE = 3171783907,
	SERVICE_EARN_FIXER_RIVAL_DELIVERY = 4131549857,
	SERVICE_EARN_FIXER_AWARD_SEC_CON = 1814197076,
	SERVICE_EARN_FIXER_AWARD_PHONE_HIT = 713955548,
	SERVICE_EARN_FIXER_AWARD_AGENCY_STORY = 2268422772,
	SERVICE_EARN_FIXER_AWARD_SHORT_TRIP = 3575387158,
	SERVICE_EARN_MUSIC_STUDIO_SHORT_TRIP = 3744549722,
	SERVICE_EARN_NCLUB_TROUBLEMAKER = 2861895404,
	SERVICE_EARN_CLUBHOUSE_DUFFLE_BAG = 486530720,
	SERVICE_EARN_SIGHTSEEING_REWARD = 761999406,
	SERVICE_EARN_AMBIENT_JOB_CLUBHOUSE_CONTRACT = 3193025533,
	SERVICE_EARN_AMBIENT_JOB_UNDERWATER_CARGO = 1748245957,
	SERVICE_EARN_AMBIENT_JOB_CRIME_SCENE = 1036772696,
	SERVICE_EARN_AMBIENT_JOB_METAL_DETECTOR = 2910318761,
	SERVICE_EARN_AMBIENT_JOB_SMUGGLER_PLANE = 3494929488,
	SERVICE_EARN_AMBIENT_JOB_SMUGGLER_TRAIL = 3599115176,
	SERVICE_EARN_AMBIENT_JOB_GOLDEN_GUN = 77355315,
	SERVICE_EARN_AMBIENT_JOB_AMMUNATION_DELIVERY = 2097889166,
	SERVICE_EARN_AMBIENT_JOB_SOURCE_RESEARCH = 1707592130,
	SERVICE_EARN_YOHAN_SOURCE_GOODS = 1628412596,
}