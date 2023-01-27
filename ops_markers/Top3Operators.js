
// Create a map object.
var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 3,
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var wells = [
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Britt Ranch H46-18H",
    "Latitude": 35.51625,
    "Longitude": -100.095917,
    "TotalBaseWaterVolume": 17520000,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Ferguson-McKnight 5272H",
    "Latitude": 28.654144,
    "Longitude": -99.878533,
    "TotalBaseWaterVolume": 3821383,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Ferguson-McKnight 5271H",
    "Latitude": 28.654121,
    "Longitude": -99.878608,
    "TotalBaseWaterVolume": 3574545,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Ferguson McKnight 5273H",
    "Latitude": 28.654166,
    "Longitude": -99.878458,
    "TotalBaseWaterVolume": 3744199,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Watt 01 01H",
    "Latitude": 28.381782,
    "Longitude": -98.290581,
    "TotalBaseWaterVolume": 3228458,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Martin Ranch A 8H",
    "Latitude": 28.526667,
    "Longitude": -98.902222,
    "TotalBaseWaterVolume": 5327219,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Herschel Fulbright 01 01H",
    "Latitude": 28.521236,
    "Longitude": -98.21016,
    "TotalBaseWaterVolume": 3699360,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Letourneau Gas Unit 7 51HH",
    "Latitude": 32.41075653,
    "Longitude": -94.6144599,
    "TotalBaseWaterVolume": 7391538,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Grantham 13 #2",
    "Latitude": 32.2435,
    "Longitude": -101.3902,
    "TotalBaseWaterVolume": 1151585,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "WALSH & WATTS 83-2",
    "Latitude": 31.70826,
    "Longitude": -103.60406,
    "TotalBaseWaterVolume": 157584,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Steller Energy & Investment Corp",
    "WellName": "Eleanor  Hoppe #5",
    "Latitude": 31.99973,
    "Longitude": -101.20238,
    "TotalBaseWaterVolume": 763770,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Halcon Resources Corporation",
    "WellName": "Champion Ranch B1",
    "Latitude": 31.238482,
    "Longitude": -95.9170627,
    "TotalBaseWaterVolume": 2104032,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Kotara Carter Unit #1H",
    "Latitude": 29.000172,
    "Longitude": -97.955136,
    "TotalBaseWaterVolume": 2083116,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Letourneau Gas Unit 7 30HH",
    "Latitude": 32.41075,
    "Longitude": -94.61449,
    "TotalBaseWaterVolume": 6340908,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Justin Tom 01 03H",
    "Latitude": 28.694964,
    "Longitude": -98.277327,
    "TotalBaseWaterVolume": 4074254,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Merritt #2H",
    "Latitude": 29.327403,
    "Longitude": -97.46975,
    "TotalBaseWaterVolume": 4443264,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Green A #6",
    "Latitude": 32.49004038,
    "Longitude": -101.7925314,
    "TotalBaseWaterVolume": 1030757,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "AXP A#2R",
    "Latitude": 31.98496,
    "Longitude": -101.94256,
    "TotalBaseWaterVolume": 1241058,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "SRH-1319",
    "Latitude": 31.47985,
    "Longitude": -101.45896,
    "TotalBaseWaterVolume": 997878,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Davis 2-4",
    "Latitude": 32.29507,
    "Longitude": -101.74353,
    "TotalBaseWaterVolume": 1124973,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Davis - Bussey (SA) 3H",
    "Latitude": 32.4232267,
    "Longitude": -97.3041208,
    "TotalBaseWaterVolume": 4483676,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix A LZS 81",
    "Latitude": 32.276768,
    "Longitude": -102.7354868,
    "TotalBaseWaterVolume": 82055,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Edwards 12 11",
    "Latitude": 31.64907,
    "Longitude": -102.37456,
    "TotalBaseWaterVolume": 358176,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Swift Energy Operating, LLC",
    "WellName": "PCQ EF #7H",
    "Latitude": 28.454854,
    "Longitude": -98.519066,
    "TotalBaseWaterVolume": 4551882,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "BOOTH L P 3H",
    "Latitude": 32.94147,
    "Longitude": -97.74618,
    "TotalBaseWaterVolume": 4514832,
    "StateName": "Texas",
    "CountyName": "PARKER"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Letourneau ET AL 5 24HH",
    "Latitude": 32.41103,
    "Longitude": -94.57185593,
    "TotalBaseWaterVolume": 7253848,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LeNorman Operating LLC",
    "WellName": "T. Boone Pickens 101H",
    "Latitude": 35.93,
    "Longitude": -100.88,
    "TotalBaseWaterVolume": 1534585,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "COLLIER 01 01H",
    "Latitude": 29.131836,
    "Longitude": -97.34644,
    "TotalBaseWaterVolume": 3807804,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Free 4 40M",
    "Latitude": 32.201262,
    "Longitude": -101.4,
    "TotalBaseWaterVolume": 1281471,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Long 7 #1",
    "Latitude": 32.341798,
    "Longitude": -101.50425,
    "TotalBaseWaterVolume": 1137906,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Bass Ernest T 2",
    "Latitude": 31.74548,
    "Longitude": -102.34717,
    "TotalBaseWaterVolume": 1287161,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Hamilton 34-34C",
    "Latitude": 32.30563,
    "Longitude": -101.80245,
    "TotalBaseWaterVolume": 1327910,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "McMahan 22 SL 5H",
    "Latitude": 35.32495,
    "Longitude": -100.09357,
    "TotalBaseWaterVolume": 5119306,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Letourneau GU 3 26HH",
    "Latitude": 32.41097468,
    "Longitude": -94.57186729,
    "TotalBaseWaterVolume": 5910241,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Propel Energy, LLC",
    "WellName": "Johnson 2 #10",
    "Latitude": 31.870473,
    "Longitude": -103.528881,
    "TotalBaseWaterVolume": 19501,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Lang Unit #11H",
    "Latitude": 28.910678,
    "Longitude": -98.206678,
    "TotalBaseWaterVolume": 2953524,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Nobles 30K",
    "Latitude": 31.99314,
    "Longitude": -102.25748,
    "TotalBaseWaterVolume": 1294233,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Brigham Resources Operating, LLC",
    "WellName": "Stewart 101",
    "Latitude": 31.173331,
    "Longitude": -103.183769,
    "TotalBaseWaterVolume": 908082,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Bighorn #1H",
    "Latitude": 28.859469,
    "Longitude": -98.419261,
    "TotalBaseWaterVolume": 4389294,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "HT Chapman 02 02H",
    "Latitude": 28.6733,
    "Longitude": -98.212688,
    "TotalBaseWaterVolume": 3095442,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "SRH 1323",
    "Latitude": 31.47478,
    "Longitude": -101.44882,
    "TotalBaseWaterVolume": 1040004,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 41 #3",
    "Latitude": 31.2092966,
    "Longitude": -103.4429106,
    "TotalBaseWaterVolume": 745183,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Perry State D #7",
    "Latitude": 31.245406,
    "Longitude": -103.4552791,
    "TotalBaseWaterVolume": 1479326,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 40D #0702H",
    "Latitude": 31.0876971,
    "Longitude": -101.1134239,
    "TotalBaseWaterVolume": 13559616,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Martin Ranch B 4H",
    "Latitude": 28.51442,
    "Longitude": -98.915412,
    "TotalBaseWaterVolume": 2981790,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "State of Texas 48-48L",
    "Latitude": 32.28881,
    "Longitude": -101.83362,
    "TotalBaseWaterVolume": 1444993,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Partee Drilling Inc",
    "WellName": "Redfish 3805",
    "Latitude": 32.367061,
    "Longitude": -101.538889,
    "TotalBaseWaterVolume": 589467,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Thelma Brite #8H",
    "Latitude": 28.547753,
    "Longitude": -98.608261,
    "TotalBaseWaterVolume": 5206698,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Coomer Unit 5H",
    "Latitude": 32.87,
    "Longitude": -97.58,
    "TotalBaseWaterVolume": 4445386,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Griffin Petroleum Company",
    "WellName": "Leslie #12",
    "Latitude": 30.8679597,
    "Longitude": -101.8988509,
    "TotalBaseWaterVolume": 16436,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Gill 01 01H",
    "Latitude": 28.66017,
    "Longitude": -98.016034,
    "TotalBaseWaterVolume": 4165896,
    "StateName": "Texas",
    "CountyName": "Bee"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Bob 14 2H",
    "Latitude": 35.62139,
    "Longitude": -100.19733,
    "TotalBaseWaterVolume": 7022736,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Bob 14 4H",
    "Latitude": 35.62089,
    "Longitude": -100.18854,
    "TotalBaseWaterVolume": 7088886,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Aclco #3H",
    "Latitude": 31.47724,
    "Longitude": -94.40181,
    "TotalBaseWaterVolume": 14564928,
    "StateName": "Texas",
    "CountyName": "Nacogdoches"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Coomer Unit 4H",
    "Latitude": 32.8756841,
    "Longitude": -97.5853729,
    "TotalBaseWaterVolume": 5392153,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Wilson 8-8A",
    "Latitude": 32.27535,
    "Longitude": -101.78077,
    "TotalBaseWaterVolume": 1305357,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Aclco #2H",
    "Latitude": 31.47717,
    "Longitude": -94.40178,
    "TotalBaseWaterVolume": 9987180,
    "StateName": "Texas",
    "CountyName": "Nacogdoches"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Calverley 40 #5H",
    "Latitude": 31.90694472,
    "Longitude": -101.4467992,
    "TotalBaseWaterVolume": 6912726,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Brothers Unit #2H",
    "Latitude": 29.331042,
    "Longitude": -97.422267,
    "TotalBaseWaterVolume": 4085382,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Barnes 3 9 C",
    "Latitude": 32.194879,
    "Longitude": -101.332509,
    "TotalBaseWaterVolume": 1103995,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Steller Energy & Investment Corp",
    "WellName": "JRS #5H",
    "Latitude": 32.0255417,
    "Longitude": -101.2053528,
    "TotalBaseWaterVolume": 2277752,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Augusta-Kenton 6H",
    "Latitude": 27.523078,
    "Longitude": -99.28095,
    "TotalBaseWaterVolume": 93957,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 10 Rose A 571 3",
    "Latitude": 28.1758512,
    "Longitude": -99.7492962,
    "TotalBaseWaterVolume": 2057742,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Grimmer Nan D #04",
    "Latitude": 30.61474,
    "Longitude": -101.19961,
    "TotalBaseWaterVolume": 162414,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Callon Petroleum Operating Company",
    "WellName": "Amanda #2",
    "Latitude": 31.920513,
    "Longitude": -102.243615,
    "TotalBaseWaterVolume": 1032612,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Latham, H.L. 5H",
    "Latitude": 32.0195761,
    "Longitude": -94.40141301,
    "TotalBaseWaterVolume": 1160777,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Aclco #6H",
    "Latitude": 31.49266,
    "Longitude": -94.40674,
    "TotalBaseWaterVolume": 8549495,
    "StateName": "Texas",
    "CountyName": "Nacogdoches"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Perry State D #1",
    "Latitude": 31.2528437,
    "Longitude": -103.4719558,
    "TotalBaseWaterVolume": 1457772,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Aclco #7H",
    "Latitude": 31.49263,
    "Longitude": -94.40682,
    "TotalBaseWaterVolume": 10839108,
    "StateName": "Texas",
    "CountyName": "Nacogdoches"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN Waddell ET AL 1330",
    "Latitude": 31.5236871,
    "Longitude": -102.658296,
    "TotalBaseWaterVolume": 100225,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "CBR 6 22",
    "Latitude": 31.99554,
    "Longitude": -103.90061,
    "TotalBaseWaterVolume": 543158,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "Fletcher 2",
    "Latitude": 36.3851,
    "Longitude": -101.47989,
    "TotalBaseWaterVolume": 24074,
    "StateName": "Texas",
    "CountyName": "Hansford"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Washburn Ranch 01 02H",
    "Latitude": 28.3623467,
    "Longitude": -98.8699566,
    "TotalBaseWaterVolume": 3135300,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Zapp A3H",
    "Latitude": 28.321194,
    "Longitude": -99.255776,
    "TotalBaseWaterVolume": 3945504,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Washburn Ranch 01 01H",
    "Latitude": 28.362344,
    "Longitude": -98.8700499,
    "TotalBaseWaterVolume": 3379782,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Maddox Estate Gas Unit 10H",
    "Latitude": 32.14076,
    "Longitude": -94.83975999,
    "TotalBaseWaterVolume": 7241556,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Gibson 7c 8",
    "Latitude": 31.8614,
    "Longitude": -101.46761,
    "TotalBaseWaterVolume": 872172,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Free 40 40E",
    "Latitude": 32.34,
    "Longitude": -101.67,
    "TotalBaseWaterVolume": 1521155,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Newby-Carter 1H",
    "Latitude": 32.9827985,
    "Longitude": -97.6254032,
    "TotalBaseWaterVolume": 2907275,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Strickland 19 #1",
    "Latitude": 32.305697,
    "Longitude": -101.49762,
    "TotalBaseWaterVolume": 1247487,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "GLENNA SANSONE GAS UNIT 2H",
    "Latitude": 32.78,
    "Longitude": -97.74,
    "TotalBaseWaterVolume": 3131658,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Allar 19 19 J",
    "Latitude": 32.24,
    "Longitude": -101.79,
    "TotalBaseWaterVolume": 1475650,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "South Texas Childrens Home 01 02H",
    "Latitude": 28.6063741,
    "Longitude": -98.2792998,
    "TotalBaseWaterVolume": 2220162,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Aclco #5H",
    "Latitude": 31.47731,
    "Longitude": -94.40342,
    "TotalBaseWaterVolume": 7180908,
    "StateName": "Texas",
    "CountyName": "Nacogdoches"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Lesa Lynette 1027-3HM",
    "Latitude": 36.376844,
    "Longitude": -100.539988,
    "TotalBaseWaterVolume": 1721033,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Aclco #4H",
    "Latitude": 31.47724,
    "Longitude": -94.40338,
    "TotalBaseWaterVolume": 8972418,
    "StateName": "Texas",
    "CountyName": "Nacogdoches"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "UNIVERSITY 10-20 #4H",
    "Latitude": 31.24457972,
    "Longitude": -101.4882511,
    "TotalBaseWaterVolume": 10573575,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "King-Guttry-Rives SA 3H",
    "Latitude": 32.2139862,
    "Longitude": -97.5385682,
    "TotalBaseWaterVolume": 6320951,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Young 269 #3",
    "Latitude": 31.2804309,
    "Longitude": -103.4750195,
    "TotalBaseWaterVolume": 1284992,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Henderson State 3 #03",
    "Latitude": 30.59763,
    "Longitude": -101.43063,
    "TotalBaseWaterVolume": 158802,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Storey 4H",
    "Latitude": 28.195186,
    "Longitude": -98.582607,
    "TotalBaseWaterVolume": 105340,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Propel Energy, LLC",
    "WellName": "Johnson 2 #5",
    "Latitude": 31.87164,
    "Longitude": -103.52862,
    "TotalBaseWaterVolume": 17952,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina Ranch 14H",
    "Latitude": 28.30393,
    "Longitude": -99.80891,
    "TotalBaseWaterVolume": 6684846,
    "StateName": "Texas",
    "CountyName": "Dimmit County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Frost Gillaspy 10H",
    "Latitude": 32.0646633,
    "Longitude": -94.20041582,
    "TotalBaseWaterVolume": 775278,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "King Sisters 12H",
    "Latitude": 32.21377,
    "Longitude": -97.5383872,
    "TotalBaseWaterVolume": 2804833,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "King-Guttry-Rives SA 1H",
    "Latitude": 32.2136912,
    "Longitude": -97.5385162,
    "TotalBaseWaterVolume": 7272224,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Three Sisters 01 05H",
    "Latitude": 28.544068,
    "Longitude": -98.2212159,
    "TotalBaseWaterVolume": 4762086,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "SRH 1321",
    "Latitude": 31.47474,
    "Longitude": -101.45945,
    "TotalBaseWaterVolume": 1032438,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Anderson 15 15D",
    "Latitude": 32.152082,
    "Longitude": -101.405333,
    "TotalBaseWaterVolume": 1158024,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gallo Rojo A 5H",
    "Latitude": 28.992061,
    "Longitude": -97.846444,
    "TotalBaseWaterVolume": 3179106,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Weinette 'B' 1078-6HM",
    "Latitude": 36.391021,
    "Longitude": -100.385338,
    "TotalBaseWaterVolume": 1655004,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Jerri Reed 3 1H",
    "Latitude": 35.31408,
    "Longitude": -100.1316,
    "TotalBaseWaterVolume": 7515971,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Jerri Reed 3 SL 2H",
    "Latitude": 35.31,
    "Longitude": -100.132,
    "TotalBaseWaterVolume": 7976133,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Velten 1",
    "Latitude": 33.1186,
    "Longitude": -97.30698,
    "TotalBaseWaterVolume": 1230054,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "H.W. Carver #20",
    "Latitude": 35.9245,
    "Longitude": -101.55502,
    "TotalBaseWaterVolume": 103150,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "SRH 12 1222",
    "Latitude": 31.44854,
    "Longitude": -101.44424,
    "TotalBaseWaterVolume": 1092990,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "Gertrude 2-246",
    "Latitude": 36.40253,
    "Longitude": -101.47132,
    "TotalBaseWaterVolume": 27989,
    "StateName": "Texas",
    "CountyName": "Hansford"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Partee Drilling Inc",
    "WellName": "Rogers 3801",
    "Latitude": 32.36499,
    "Longitude": -101.55113,
    "TotalBaseWaterVolume": 584640,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Owens L #6",
    "Latitude": 31.33089125,
    "Longitude": -101.9127572,
    "TotalBaseWaterVolume": 1365643,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Barstow 33-33 1H",
    "Latitude": 31.434771,
    "Longitude": -103.332327,
    "TotalBaseWaterVolume": 2375654,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 18 51HH",
    "Latitude": 32.14954,
    "Longitude": -94.41145833,
    "TotalBaseWaterVolume": 6713448,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Red Fern 35 O",
    "Latitude": 32.29525,
    "Longitude": -101.77062,
    "TotalBaseWaterVolume": 1155349,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Gaskins 15 #2",
    "Latitude": 32.402333,
    "Longitude": -101.6800978,
    "TotalBaseWaterVolume": 1475353,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Bush 208 #3",
    "Latitude": 31.2311361,
    "Longitude": -103.5478883,
    "TotalBaseWaterVolume": 6967698.164,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Caroline #3H",
    "Latitude": 31.44163,
    "Longitude": -101.97084,
    "TotalBaseWaterVolume": 1305570,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "COSTLOW GU 01 02H",
    "Latitude": 29.0849412,
    "Longitude": -97.3777387,
    "TotalBaseWaterVolume": 2629746,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Brunson #3",
    "Latitude": 31.86763,
    "Longitude": -101.73115,
    "TotalBaseWaterVolume": 876223.9447,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Rawdon-McGee (SA) 1H",
    "Latitude": 32.524311,
    "Longitude": -97.175293,
    "TotalBaseWaterVolume": 10637047,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Hink 3 1H",
    "Latitude": 35.51885,
    "Longitude": -100.03853,
    "TotalBaseWaterVolume": 7242535,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Hink 3 SL 2H",
    "Latitude": 35.51768,
    "Longitude": -100.03641,
    "TotalBaseWaterVolume": 7256983,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 18 52HH",
    "Latitude": 32.14957,
    "Longitude": -94.41143901,
    "TotalBaseWaterVolume": 6432006,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Brunson #2",
    "Latitude": 31.85786,
    "Longitude": -101.72103,
    "TotalBaseWaterVolume": 833821.4243,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Glass 3 #2",
    "Latitude": 32.40011,
    "Longitude": -101.67559,
    "TotalBaseWaterVolume": 2390090,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BBX Operating",
    "WellName": "Frances Kunkel Unit #1H",
    "Latitude": 30.832953,
    "Longitude": -94.135354,
    "TotalBaseWaterVolume": 104496,
    "StateName": "Texas",
    "CountyName": "Jasper"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "Hubert #1",
    "Latitude": 32.7707258,
    "Longitude": -98.1122999,
    "TotalBaseWaterVolume": 31415,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Apollo 2#3",
    "Latitude": 31.2892321,
    "Longitude": -103.4047554,
    "TotalBaseWaterVolume": 1030997.472,
    "StateName": "Texas",
    "CountyName": "Reeves County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 9 51HH",
    "Latitude": 32.14884784,
    "Longitude": -94.40905825,
    "TotalBaseWaterVolume": 7134510,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Graves State #2",
    "Latitude": 31.2229838,
    "Longitude": -103.4597284,
    "TotalBaseWaterVolume": 26158965.56,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Wheat Trust 1-36 4H",
    "Latitude": 31.6422874,
    "Longitude": -103.4668758,
    "TotalBaseWaterVolume": 1277165,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 43A #0805H",
    "Latitude": 31.1237955,
    "Longitude": -101.2600766,
    "TotalBaseWaterVolume": 6154890,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Gerald Burke Schulz 02 01H",
    "Latitude": 28.528021,
    "Longitude": -98.17711,
    "TotalBaseWaterVolume": 2703750,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Long A #8",
    "Latitude": 33.3119899,
    "Longitude": -101.4595009,
    "TotalBaseWaterVolume": 27174,
    "StateName": "Texas",
    "CountyName": "Garza"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Long 'B' #3",
    "Latitude": 33.314978,
    "Longitude": -101.4637917,
    "TotalBaseWaterVolume": 23394,
    "StateName": "Texas",
    "CountyName": "Garza"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 18 53HH",
    "Latitude": 32.14959,
    "Longitude": -94.41142,
    "TotalBaseWaterVolume": 6388116,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mabee Ranch #139 4605",
    "Latitude": 32.174275,
    "Longitude": -102.233178,
    "TotalBaseWaterVolume": 1106486,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Parker 'D' #15",
    "Latitude": 31.8232752,
    "Longitude": -102.5647698,
    "TotalBaseWaterVolume": 51912,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "KENNY-MCGEE (SA) 1H",
    "Latitude": 32.543892,
    "Longitude": -97.195282,
    "TotalBaseWaterVolume": 5170682,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Gaskins A 38C",
    "Latitude": 32.3072,
    "Longitude": -101.84895,
    "TotalBaseWaterVolume": 1278793,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Davidson 22 A-14",
    "Latitude": 31.687046,
    "Longitude": -102.101145,
    "TotalBaseWaterVolume": 1375626,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Lyda `21` 1",
    "Latitude": 31.25251,
    "Longitude": -103.43139,
    "TotalBaseWaterVolume": 1542400,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "ED Books 13 #8",
    "Latitude": 31.728858,
    "Longitude": -101.441151,
    "TotalBaseWaterVolume": 1597344,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "KENNY-MCGEE (SA) 2H",
    "Latitude": 32.543831,
    "Longitude": -97.195343,
    "TotalBaseWaterVolume": 7390861,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "CBR 4 11",
    "Latitude": 31.99895,
    "Longitude": -103.86834,
    "TotalBaseWaterVolume": 355477,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Flannagan, Annie Oil Management/Well No. 2",
    "Latitude": 32.16743,
    "Longitude": -101.79031,
    "TotalBaseWaterVolume": 588756,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Evans #7",
    "Latitude": 31.9682902,
    "Longitude": -101.7860278,
    "TotalBaseWaterVolume": 761040,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Robinson 34-1",
    "Latitude": 31.791151,
    "Longitude": -101.963473,
    "TotalBaseWaterVolume": 1414854,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "CBR 4 11",
    "Latitude": 31.99895,
    "Longitude": -103.8683389,
    "TotalBaseWaterVolume": 355477,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Winslow A #2",
    "Latitude": 32.0517457,
    "Longitude": -101.6910721,
    "TotalBaseWaterVolume": 1688045,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "H W Carver 16",
    "Latitude": 35.9206251,
    "Longitude": -101.5552183,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Mabee 23 #3",
    "Latitude": 32.075088,
    "Longitude": -101.997462,
    "TotalBaseWaterVolume": 1129683,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Perry State `D` 2",
    "Latitude": 31.25345,
    "Longitude": -103.46483,
    "TotalBaseWaterVolume": 1546524,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Funkhouser 20B #1",
    "Latitude": 31.42424825,
    "Longitude": -101.8993364,
    "TotalBaseWaterVolume": 1235512,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Knox Miller 01 01H",
    "Latitude": 28.541792,
    "Longitude": -98.175418,
    "TotalBaseWaterVolume": 3787728,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-1A 1",
    "Latitude": 32.43127788,
    "Longitude": -102.1831939,
    "TotalBaseWaterVolume": 1058748,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Mark & Sandra  1H",
    "Latitude": 28.7047,
    "Longitude": -99.94226,
    "TotalBaseWaterVolume": 240183,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 9 52HH",
    "Latitude": 32.14881,
    "Longitude": -94.40901,
    "TotalBaseWaterVolume": 7007440,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Hendrick State `252` 1",
    "Latitude": 31.21458,
    "Longitude": -103.52594,
    "TotalBaseWaterVolume": 1405471,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Noble 3304",
    "Latitude": 31.98774,
    "Longitude": -102.21518,
    "TotalBaseWaterVolume": 766927,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Craig 16 5",
    "Latitude": 32.351235,
    "Longitude": -101.37367,
    "TotalBaseWaterVolume": 398812,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 43A #0806H",
    "Latitude": 31.1238074,
    "Longitude": -101.2626335,
    "TotalBaseWaterVolume": 6140694,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Watson 01 01H",
    "Latitude": 28.76188,
    "Longitude": -97.8938,
    "TotalBaseWaterVolume": 1974168,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 43A #0804H",
    "Latitude": 31.1238138,
    "Longitude": -101.2575199,
    "TotalBaseWaterVolume": 8959314,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Tyler 3709",
    "Latitude": 31.82908,
    "Longitude": -102.32285,
    "TotalBaseWaterVolume": 1452657,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Cothes \"B\" 4",
    "Latitude": 32.524658,
    "Longitude": -102.681592,
    "TotalBaseWaterVolume": 9722,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Crosby Hatcher -A- 32",
    "Latitude": 35.9095338,
    "Longitude": -101.5336112,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240B-203",
    "Latitude": 32.301973,
    "Longitude": -102.270172,
    "TotalBaseWaterVolume": 1145844,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Huth 2005",
    "Latitude": 35.903493,
    "Longitude": -101.5184024,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Hendricks 252 #3",
    "Latitude": 31.2494701,
    "Longitude": -103.5261133,
    "TotalBaseWaterVolume": 1035245,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Mariinsky State `8` 17",
    "Latitude": 31.28433,
    "Longitude": -103.34135,
    "TotalBaseWaterVolume": 422108,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PETEX",
    "WellName": "Harrell \"4\" Unit #1",
    "Latitude": 32.6306215,
    "Longitude": -98.8766129,
    "TotalBaseWaterVolume": 67704,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Robbie 1",
    "Latitude": 32.0106,
    "Longitude": -102.1031,
    "TotalBaseWaterVolume": 162185,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 9 53HH",
    "Latitude": 32.14888491,
    "Longitude": -94.40910581,
    "TotalBaseWaterVolume": 5850227,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Bettinger 2",
    "Latitude": 31.538596,
    "Longitude": -96.347779,
    "TotalBaseWaterVolume": 360504,
    "StateName": "Texas",
    "CountyName": "Limestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Graves State 7",
    "Latitude": 31.23553,
    "Longitude": -103.46858,
    "TotalBaseWaterVolume": 759209,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Stone 45 3",
    "Latitude": 32.07976982,
    "Longitude": -101.7151281,
    "TotalBaseWaterVolume": 1646176,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Pope 140-3H",
    "Latitude": 36.140371,
    "Longitude": -101.052374,
    "TotalBaseWaterVolume": 1720098,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Perry State `C` 7 2",
    "Latitude": 31.27366,
    "Longitude": -103.46394,
    "TotalBaseWaterVolume": 771977,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newark E&P Operating, LLC",
    "WellName": "Cobra Unit 23H",
    "Latitude": 32.77347,
    "Longitude": -97.04685,
    "TotalBaseWaterVolume": 412020,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 251",
    "Latitude": 32.0107,
    "Longitude": -102.6795,
    "TotalBaseWaterVolume": 64248,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Ratliff A 1710",
    "Latitude": 32.007975,
    "Longitude": -102.341556,
    "TotalBaseWaterVolume": 1244082,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Crosby Hatcher -A- 31",
    "Latitude": 35.9062083,
    "Longitude": -101.5336112,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Carver Area Waterflood Unit 2 40",
    "Latitude": 35.8925472,
    "Longitude": -101.5578445,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newark E&P Operating, LLC",
    "WellName": "Viper 9H",
    "Latitude": 32.77491,
    "Longitude": -97.04617,
    "TotalBaseWaterVolume": 481152,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240C-123",
    "Latitude": 32.296756,
    "Longitude": -102.25969,
    "TotalBaseWaterVolume": 997038,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Bar Inverted T Unit #6H",
    "Latitude": 29.154067,
    "Longitude": -97.626364,
    "TotalBaseWaterVolume": 3146304,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chapman State 3",
    "Latitude": 31.22428,
    "Longitude": -103.44211,
    "TotalBaseWaterVolume": 708683,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Davidson 46-8",
    "Latitude": 31.635754,
    "Longitude": -102.079554,
    "TotalBaseWaterVolume": 1433754,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Puryear 28 14H",
    "Latitude": 35.2820764,
    "Longitude": -100.0838025,
    "TotalBaseWaterVolume": 5385373,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "Pittman 1069",
    "Latitude": 36.20316,
    "Longitude": -101.15104,
    "TotalBaseWaterVolume": 14204,
    "StateName": "Texas",
    "CountyName": "Hansford"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Smolik 01 01H",
    "Latitude": 28.829933,
    "Longitude": -97.818757,
    "TotalBaseWaterVolume": 3626238,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Smolik 01 02H",
    "Latitude": 28.829961,
    "Longitude": -97.818723,
    "TotalBaseWaterVolume": 3914778,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Smolik 01 03H",
    "Latitude": 28.82999,
    "Longitude": -97.818769,
    "TotalBaseWaterVolume": 3983742,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 10 52HH",
    "Latitude": 32.19151906,
    "Longitude": -94.3518596,
    "TotalBaseWaterVolume": 7529371,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Linda 1 #1",
    "Latitude": 31.44891059,
    "Longitude": -101.9210541,
    "TotalBaseWaterVolume": 6300000,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cinco Natural Resources Corporation",
    "WellName": "RNG Unit Well #2H",
    "Latitude": 28.78003,
    "Longitude": -98.58646,
    "TotalBaseWaterVolume": 8393616,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Nancy #2609X",
    "Latitude": 31.52207,
    "Longitude": -102.22368,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 1-12A",
    "Latitude": 28.0507,
    "Longitude": -99.453,
    "TotalBaseWaterVolume": 5023414,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 10-12",
    "Latitude": 28.0507,
    "Longitude": -99.4531,
    "TotalBaseWaterVolume": 5033624,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Britt 9-4H",
    "Latitude": 35.546972,
    "Longitude": -100.054194,
    "TotalBaseWaterVolume": 9344219,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Cinco Terry K1901",
    "Latitude": 30.87023,
    "Longitude": -101.43264,
    "TotalBaseWaterVolume": 1619135,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Jack Russell 917-1HM",
    "Latitude": 36.348033,
    "Longitude": -100.659591,
    "TotalBaseWaterVolume": 1543127,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 2-12A",
    "Latitude": 28.0507,
    "Longitude": -99.453,
    "TotalBaseWaterVolume": 4818486,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Carver, W.A. 64",
    "Latitude": 35.8771389,
    "Longitude": -101.5602723,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "W A Carver 65",
    "Latitude": 35.8855972,
    "Longitude": -101.5509139,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Nobles 2912",
    "Latitude": 32.000066,
    "Longitude": -102.133894,
    "TotalBaseWaterVolume": 1005060,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Robbie Jane #4012",
    "Latitude": 31.5027,
    "Longitude": -102.15478,
    "TotalBaseWaterVolume": 6300000,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Puryear 28 15H",
    "Latitude": 35.2913855,
    "Longitude": -100.081617,
    "TotalBaseWaterVolume": 5670813,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Resolute Natural Resources",
    "WellName": "State Oatman #4",
    "Latitude": 31.49999,
    "Longitude": -103.686336,
    "TotalBaseWaterVolume": 1665480,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Black Trust 49 4H",
    "Latitude": 35.50227,
    "Longitude": -100.16168,
    "TotalBaseWaterVolume": 5292042,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Tyler 3708",
    "Latitude": 31.82444,
    "Longitude": -102.30997,
    "TotalBaseWaterVolume": 777714,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Piedra Operating, LLC",
    "WellName": "Cooper 3",
    "Latitude": 31.9634198,
    "Longitude": -101.669428,
    "TotalBaseWaterVolume": 797216,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Young 33 29",
    "Latitude": 35.68613,
    "Longitude": -100.44099,
    "TotalBaseWaterVolume": 473214,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Propel Energy, LLC",
    "WellName": "Johnson 2 #11",
    "Latitude": 31.870499,
    "Longitude": -103.524366,
    "TotalBaseWaterVolume": 17810,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Black 50 SL 6H",
    "Latitude": 35.50319,
    "Longitude": -100.16921,
    "TotalBaseWaterVolume": 6885085,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lott 1-1",
    "Latitude": 35.319,
    "Longitude": -100.1219,
    "TotalBaseWaterVolume": 640278,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 10 51HH",
    "Latitude": 32.1915515,
    "Longitude": -94.35188958,
    "TotalBaseWaterVolume": 9717036,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ressman 01 02H",
    "Latitude": 29.006644,
    "Longitude": -97.591916,
    "TotalBaseWaterVolume": 3375246,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EP Energy",
    "WellName": "University 43-17 2H",
    "Latitude": 31.10238,
    "Longitude": -101.26801,
    "TotalBaseWaterVolume": 6610968,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Puryear 28 16H",
    "Latitude": 35.2913752,
    "Longitude": -100.0751827,
    "TotalBaseWaterVolume": 5766087,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN Waddell ET AL 274",
    "Latitude": 31.5158391,
    "Longitude": -102.6518184,
    "TotalBaseWaterVolume": 38371,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Nobles #31FF",
    "Latitude": 31.98296,
    "Longitude": -102.24794,
    "TotalBaseWaterVolume": 1023372,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST 44-4",
    "Latitude": 31.961931,
    "Longitude": -102.2300233,
    "TotalBaseWaterVolume": 1117326,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "King 1077-1HM",
    "Latitude": 36.403513,
    "Longitude": -100.368931,
    "TotalBaseWaterVolume": 2315111,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Kreps 257#1 R",
    "Latitude": 31.2919205,
    "Longitude": -103.5150872,
    "TotalBaseWaterVolume": 1060570,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Spurlock 26",
    "Latitude": 35.9236305,
    "Longitude": -101.6127917,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 43A #0802H",
    "Latitude": 31.1238145,
    "Longitude": -101.2524063,
    "TotalBaseWaterVolume": 6699630,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals `17` 2",
    "Latitude": 31.26655,
    "Longitude": -103.35402,
    "TotalBaseWaterVolume": 1143555,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Midenergy Operating, LLC",
    "WellName": "Vaughan 5503",
    "Latitude": 31.492142,
    "Longitude": -102.046218,
    "TotalBaseWaterVolume": 697997,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Ona Black 49 SL 5H",
    "Latitude": 35.50381,
    "Longitude": -100.15628,
    "TotalBaseWaterVolume": 7924392,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "WWJD #5",
    "Latitude": 30.8834685,
    "Longitude": -102.2010179,
    "TotalBaseWaterVolume": 16800,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Ona Black 49 SL 6H",
    "Latitude": 35.50357,
    "Longitude": -100.15016,
    "TotalBaseWaterVolume": 7292384,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Latham, H.L. 6H",
    "Latitude": 32.0206948,
    "Longitude": -94.3938295,
    "TotalBaseWaterVolume": 1280202,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Daniel Huling #3",
    "Latitude": 31.7274,
    "Longitude": -101.5244,
    "TotalBaseWaterVolume": 1194858,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Abraxas 31C #3",
    "Latitude": 32.43552192,
    "Longitude": -101.8365446,
    "TotalBaseWaterVolume": 1348788,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Schorlemer 02 02H",
    "Latitude": 29.021029,
    "Longitude": -97.554958,
    "TotalBaseWaterVolume": 3399396,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Schorlemer 02 03H",
    "Latitude": 29.021061,
    "Longitude": -97.554929,
    "TotalBaseWaterVolume": 3399396,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Driver A #5",
    "Latitude": 31.79764165,
    "Longitude": -101.7980188,
    "TotalBaseWaterVolume": 1575672,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Joseph Unit #7H",
    "Latitude": 28.851964,
    "Longitude": -98.097194,
    "TotalBaseWaterVolume": 2692242,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wood Family 28 #3",
    "Latitude": 31.77938769,
    "Longitude": -101.6099812,
    "TotalBaseWaterVolume": 1520230,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Adele Dubose #2",
    "Latitude": 29.0931,
    "Longitude": -97.3445,
    "TotalBaseWaterVolume": 3172856,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "GOSSETT 3H",
    "Latitude": 36.35,
    "Longitude": -100.02,
    "TotalBaseWaterVolume": 384325,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Vogler 15 #1",
    "Latitude": 32.47665335,
    "Longitude": -102.0516432,
    "TotalBaseWaterVolume": 1352820,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240C-1003",
    "Latitude": 32.286099,
    "Longitude": -102.273985,
    "TotalBaseWaterVolume": 1092840,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Grantham \"50\" #2",
    "Latitude": 32.3850246,
    "Longitude": -101.6901575,
    "TotalBaseWaterVolume": 1352905,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Harbaugh Courson 141-4H",
    "Latitude": 36.08188889,
    "Longitude": -100.868,
    "TotalBaseWaterVolume": 1844126,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Callon Petroleum Operating Company",
    "WellName": "Neal 307",
    "Latitude": 31.305306,
    "Longitude": -101.9027711,
    "TotalBaseWaterVolume": 1262787,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "WWJD #4",
    "Latitude": 30.8844691,
    "Longitude": -102.1975275,
    "TotalBaseWaterVolume": 21378,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Griffin Petroleum Company",
    "WellName": "Ashlee #21",
    "Latitude": 30.8839542,
    "Longitude": -101.9041514,
    "TotalBaseWaterVolume": 11257,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240C-104",
    "Latitude": 32.30841,
    "Longitude": -102.259065,
    "TotalBaseWaterVolume": 1031688,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Schorlemer 02 01H",
    "Latitude": 29.020998,
    "Longitude": -97.554987,
    "TotalBaseWaterVolume": 3399396,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Coronado 2H",
    "Latitude": 31.1531,
    "Longitude": -101.19612,
    "TotalBaseWaterVolume": 6000286,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Hefley 1-37",
    "Latitude": 35.36571,
    "Longitude": -100.16361,
    "TotalBaseWaterVolume": 2129139,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Rogers, Fred Unit 31H",
    "Latitude": 32.18794,
    "Longitude": -94.85879,
    "TotalBaseWaterVolume": 6299286,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluescape Resources",
    "WellName": "HBR 2HB",
    "Latitude": 28.909005,
    "Longitude": -99.237656,
    "TotalBaseWaterVolume": 7125521,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 43A #0803H",
    "Latitude": 31.1245002,
    "Longitude": -101.2549697,
    "TotalBaseWaterVolume": 9285066,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch #13",
    "Latitude": 32.20191831,
    "Longitude": -101.9349182,
    "TotalBaseWaterVolume": 1181124,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Mariinsky State 8 4",
    "Latitude": 31.27595,
    "Longitude": -103.34583,
    "TotalBaseWaterVolume": 791183,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LeNorman Operating LLC",
    "WellName": "T BOONE PICKENS 202 H",
    "Latitude": 35.560383,
    "Longitude": -100.513586,
    "TotalBaseWaterVolume": 2965411,
    "StateName": "Texas",
    "CountyName": "Roberts County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "HighMount Exploration & Production",
    "WellName": "Moore 29 1",
    "Latitude": 30.86915,
    "Longitude": -100.79855,
    "TotalBaseWaterVolume": 1569116,
    "StateName": "Texas",
    "CountyName": "Schleicher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Barstow 11 6",
    "Latitude": 31.44388,
    "Longitude": -103.37109,
    "TotalBaseWaterVolume": 639757,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Nichols 2H",
    "Latitude": 28.184683,
    "Longitude": -98.342324,
    "TotalBaseWaterVolume": 93957,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Zybach-Tipps 12 3H",
    "Latitude": 35.6045,
    "Longitude": -100.20344,
    "TotalBaseWaterVolume": 6845622,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University Andrews 203 Revision A",
    "Latitude": 32.127036,
    "Longitude": -102.713406,
    "TotalBaseWaterVolume": 225398,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45 703H",
    "Latitude": 30.977,
    "Longitude": -101.2816,
    "TotalBaseWaterVolume": 10459302,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluescape Resources",
    "WellName": "HBR 1HB",
    "Latitude": 28.908967,
    "Longitude": -99.237668,
    "TotalBaseWaterVolume": 180804,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Walter Kelly 19-2",
    "Latitude": 32.0639,
    "Longitude": -101.5138,
    "TotalBaseWaterVolume": 994958,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #21B",
    "Latitude": 29.2068792,
    "Longitude": -99.0860667,
    "TotalBaseWaterVolume": 19656,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN Waddell ET AL 1544",
    "Latitude": 31.5303611,
    "Longitude": -102.6297222,
    "TotalBaseWaterVolume": 68827,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Shelby Fayth #3814",
    "Latitude": 31.73758,
    "Longitude": -102.14042,
    "TotalBaseWaterVolume": 1060500,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Betty Jo Graves 133-4H",
    "Latitude": 36.09972222,
    "Longitude": -100.7954444,
    "TotalBaseWaterVolume": 1749749,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Partee Drilling Inc",
    "WellName": "Rogers 3802",
    "Latitude": 32.37224,
    "Longitude": -101.55343,
    "TotalBaseWaterVolume": 619794,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Perry State `C` 7 3",
    "Latitude": 31.28048,
    "Longitude": -103.46603,
    "TotalBaseWaterVolume": 779528,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hannathon Petroleum, LLC",
    "WellName": "Halff 32 #1",
    "Latitude": 31.4174,
    "Longitude": -101.784,
    "TotalBaseWaterVolume": 3092431,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Spurlock 28",
    "Latitude": 35.9179722,
    "Longitude": -101.6193028,
    "TotalBaseWaterVolume": 25165,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Spurlock 29",
    "Latitude": 35.910525,
    "Longitude": -101.6191778,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "DAVID SAENZ 01 01H",
    "Latitude": 28.5816,
    "Longitude": -98.118812,
    "TotalBaseWaterVolume": 3366594,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Wheeler 3 1H",
    "Latitude": 28.398101,
    "Longitude": -98.40857,
    "TotalBaseWaterVolume": 3476508,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Canan Operating, Inc.",
    "WellName": "Scaling Mayfield B # 1H",
    "Latitude": 33.6417,
    "Longitude": -98.0046,
    "TotalBaseWaterVolume": 4326294,
    "StateName": "Texas",
    "CountyName": "Clay"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240B-1604",
    "Latitude": 32.312651,
    "Longitude": -102.273413,
    "TotalBaseWaterVolume": 878178,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Slaughter 29C #1",
    "Latitude": 32.45038669,
    "Longitude": -101.854916,
    "TotalBaseWaterVolume": 1390410,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texakoma Operating, L.P.",
    "WellName": "E McMordie 125 3",
    "Latitude": 35.9058,
    "Longitude": -100.66,
    "TotalBaseWaterVolume": 462057,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Guitar 26 #6",
    "Latitude": 32.176,
    "Longitude": -101.4007,
    "TotalBaseWaterVolume": 1156398,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 43 #0901H",
    "Latitude": 31.1233786,
    "Longitude": -101.2468746,
    "TotalBaseWaterVolume": 5974626,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Turner 1201 #5",
    "Latitude": 31.33927965,
    "Longitude": -101.6779355,
    "TotalBaseWaterVolume": 1684914,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Valence Operating Company",
    "WellName": "L D Williams No 1",
    "Latitude": 31.64023,
    "Longitude": -96.23919,
    "TotalBaseWaterVolume": 314286,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Nobles 2913",
    "Latitude": 32.001042,
    "Longitude": -102.135628,
    "TotalBaseWaterVolume": 1540980,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lea P J Et Al 194",
    "Latitude": 31.40492,
    "Longitude": -102.52479,
    "TotalBaseWaterVolume": 86155,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Charger 16 #1",
    "Latitude": 31.879153,
    "Longitude": -101.331953,
    "TotalBaseWaterVolume": 668220,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Buddy 998-5HM",
    "Latitude": 36.37561111,
    "Longitude": -100.5358333,
    "TotalBaseWaterVolume": 1690595,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240B-1602",
    "Latitude": 32.307007,
    "Longitude": -102.280804,
    "TotalBaseWaterVolume": 1473192,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "CSAU 1022",
    "Latitude": 32.547447,
    "Longitude": -102.617992,
    "TotalBaseWaterVolume": 26814,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fidelity Exploration & Production",
    "WellName": "Chestnut #7 ?",
    "Latitude": 26.240483,
    "Longitude": -98.453098,
    "TotalBaseWaterVolume": 218957,
    "StateName": "Texas",
    "CountyName": "Hidalgo"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Darwin 22 #2",
    "Latitude": 32.3273489,
    "Longitude": -101.8013307,
    "TotalBaseWaterVolume": 1586592,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Fuller 20",
    "Latitude": 36.00484141,
    "Longitude": -101.6421491,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Moore"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Dooney 997-1HM",
    "Latitude": 36.37516667,
    "Longitude": -100.5188333,
    "TotalBaseWaterVolume": 1872436,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Gaskins A 38I",
    "Latitude": 32.3097101,
    "Longitude": -101.844029,
    "TotalBaseWaterVolume": 1322696,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch #11",
    "Latitude": 32.2062751,
    "Longitude": -101.9456589,
    "TotalBaseWaterVolume": 1134168,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MWS Producing, Inc.",
    "WellName": "University 3 #2",
    "Latitude": 30.990274,
    "Longitude": -101.339344,
    "TotalBaseWaterVolume": 96222,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Mid-States Operating Company",
    "WellName": "Felder 21 #4",
    "Latitude": 31.929643,
    "Longitude": -101.964986,
    "TotalBaseWaterVolume": 1718976,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Funkhouser 20 #5",
    "Latitude": 31.42207981,
    "Longitude": -101.9078842,
    "TotalBaseWaterVolume": 1282428,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Neely S T 4",
    "Latitude": 31.44638,
    "Longitude": -103.37834,
    "TotalBaseWaterVolume": 638505,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sandefur 38 #1",
    "Latitude": 32.03461297,
    "Longitude": -101.9706746,
    "TotalBaseWaterVolume": 1615656,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 3-32 #4H",
    "Latitude": 31.202987,
    "Longitude": -101.792131,
    "TotalBaseWaterVolume": 7535220,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Gaskins 38L",
    "Latitude": 32.300603,
    "Longitude": -101.8557054,
    "TotalBaseWaterVolume": 997636,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Letourneau Gas Unit 4 18HH",
    "Latitude": 32.42021759,
    "Longitude": -94.60426924,
    "TotalBaseWaterVolume": 8012764,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN Waddell ET AL 584",
    "Latitude": 31.524589,
    "Longitude": -102.6840124,
    "TotalBaseWaterVolume": 92621,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 43A #0801H",
    "Latitude": 31.1238162,
    "Longitude": -101.2498494,
    "TotalBaseWaterVolume": 7240086,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Shackelford 7 #9",
    "Latitude": 31.64301428,
    "Longitude": -101.9219437,
    "TotalBaseWaterVolume": 1670718,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Covington 34-224 1H",
    "Latitude": 31.5732514,
    "Longitude": -103.4005187,
    "TotalBaseWaterVolume": 1129901,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "University 36-20/Well No. 1",
    "Latitude": 31.68777,
    "Longitude": -103.27447,
    "TotalBaseWaterVolume": 3042312,
    "StateName": "Texas",
    "CountyName": "Winkler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Callon Petroleum Operating Company",
    "WellName": "Annie #3",
    "Latitude": 31.956996,
    "Longitude": -102.250471,
    "TotalBaseWaterVolume": 1126146,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Pritchard -C- 10",
    "Latitude": 36.0009622,
    "Longitude": -101.6283653,
    "TotalBaseWaterVolume": 37026,
    "StateName": "Texas",
    "CountyName": "Moore"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Cook 21 #6",
    "Latitude": 32.46980878,
    "Longitude": -101.8161399,
    "TotalBaseWaterVolume": 1274406,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "E.G.L. Resources, Inc.",
    "WellName": "Spanish Trail #3804",
    "Latitude": 31.98024444,
    "Longitude": -102.1677694,
    "TotalBaseWaterVolume": 731304,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Dobson Ranch 40 4H",
    "Latitude": 35.48885,
    "Longitude": -100.02089,
    "TotalBaseWaterVolume": 7518571,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Sherry 8",
    "Latitude": 31.6802,
    "Longitude": -102.35347,
    "TotalBaseWaterVolume": 9204145,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "WWJD B #2",
    "Latitude": 30.8809417,
    "Longitude": -102.2092368,
    "TotalBaseWaterVolume": 64988,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Turner 1202 #5",
    "Latitude": 31.32000052,
    "Longitude": -101.6740369,
    "TotalBaseWaterVolume": 1681344,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "HighMount Exploration & Production",
    "WellName": "Mayer Edwin S Jr U-15",
    "Latitude": 30.628,
    "Longitude": -100.868,
    "TotalBaseWaterVolume": 97734,
    "StateName": "Texas",
    "CountyName": "Sutton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LCS Production Company",
    "WellName": "WWJD #B2",
    "Latitude": 30.8819417,
    "Longitude": -102.2029368,
    "TotalBaseWaterVolume": 36763,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman-Mascho Unit/Well No. 1732",
    "Latitude": 32.22437,
    "Longitude": -102.70258,
    "TotalBaseWaterVolume": 30114,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Slone B #1H",
    "Latitude": 29.221026,
    "Longitude": -97.294724,
    "TotalBaseWaterVolume": 3727648,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hopper 36 #4",
    "Latitude": 32.32673888,
    "Longitude": -101.8374761,
    "TotalBaseWaterVolume": 1675254,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Vogler 15 #3",
    "Latitude": 32.47550322,
    "Longitude": -102.0567888,
    "TotalBaseWaterVolume": 1617996,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Evans 52 #2",
    "Latitude": 32.0059,
    "Longitude": -101.5306,
    "TotalBaseWaterVolume": 1033262,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "WWJD #6",
    "Latitude": 30.880316,
    "Longitude": -102.1985691,
    "TotalBaseWaterVolume": 35028,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "J. Brown 9 #1",
    "Latitude": 32.57723437,
    "Longitude": -102.0726024,
    "TotalBaseWaterVolume": 1290072,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "DWORACZYK 01 02H",
    "Latitude": 29.022536,
    "Longitude": -97.574852,
    "TotalBaseWaterVolume": 5440932,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "DWORACZYK 01 03H",
    "Latitude": 29.022571,
    "Longitude": -97.574829,
    "TotalBaseWaterVolume": 5371506,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "DWORACZYK 01 04H",
    "Latitude": 29.022607,
    "Longitude": -97.574806,
    "TotalBaseWaterVolume": 5440932,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forestar",
    "WellName": "Shell Fee 61-1H",
    "Latitude": 36.04094,
    "Longitude": -100.24886,
    "TotalBaseWaterVolume": 1548586,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Cravens 31 #6",
    "Latitude": 31.3551963,
    "Longitude": -101.935591,
    "TotalBaseWaterVolume": 1251684,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Dobson Ranch 40 SL 5H",
    "Latitude": 35.48856,
    "Longitude": -100.01447,
    "TotalBaseWaterVolume": 9651302,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Dominion Natural Resources, LLC",
    "WellName": "I.G. Yates #D-121",
    "Latitude": 30.89967,
    "Longitude": -101.91765,
    "TotalBaseWaterVolume": 17052,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Dominion Natural Resources, LLC",
    "WellName": "I.G. Yates #F101",
    "Latitude": 30.90889,
    "Longitude": -101.91424,
    "TotalBaseWaterVolume": 16548,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 40 #1314H",
    "Latitude": 31.080751,
    "Longitude": -101.1988221,
    "TotalBaseWaterVolume": 7076244,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Riley Exploration, LLC",
    "WellName": "Spendlove 1H",
    "Latitude": 29.0053365,
    "Longitude": -97.7977647,
    "TotalBaseWaterVolume": 3821244,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Dominion Natural Resources, LLC",
    "WellName": "I.G. Yates #D-118",
    "Latitude": 30.89638,
    "Longitude": -101.91578,
    "TotalBaseWaterVolume": 17220,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Dominion Natural Resources, LLC",
    "WellName": "I.G. Yates #D-120",
    "Latitude": 30.90202,
    "Longitude": -101.91782,
    "TotalBaseWaterVolume": 17262,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Dominion Natural Resources, LLC",
    "WellName": "I.G. Yates #G-107",
    "Latitude": 30.90529,
    "Longitude": -101.93151,
    "TotalBaseWaterVolume": 16842,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 3-31 #4H",
    "Latitude": 31.2029688,
    "Longitude": -101.7886127,
    "TotalBaseWaterVolume": 7844256,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hannathon Petroleum, LLC",
    "WellName": "Talley 2 #1",
    "Latitude": 31.3307,
    "Longitude": -101.77732,
    "TotalBaseWaterVolume": 3065366,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Letourneau Gas Unit 4 27HH",
    "Latitude": 32.40216693,
    "Longitude": -94.60420526,
    "TotalBaseWaterVolume": 9880810,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240C-1004",
    "Latitude": 32.279032,
    "Longitude": -102.271978,
    "TotalBaseWaterVolume": 1457820,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina North 62H",
    "Latitude": 28.32207778,
    "Longitude": -99.83497,
    "TotalBaseWaterVolume": 5266280,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 51-11 #2",
    "Latitude": 31.278626,
    "Longitude": -103.3906901,
    "TotalBaseWaterVolume": 1112244,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Abbie Laine #3907",
    "Latitude": 31.72779,
    "Longitude": -102.14918,
    "TotalBaseWaterVolume": 1168650,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Courson 126-4H",
    "Latitude": 36.11441667,
    "Longitude": -100.8543889,
    "TotalBaseWaterVolume": 1707421,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Miller Spinney 39 1H",
    "Latitude": 35.467831,
    "Longitude": -100.006313,
    "TotalBaseWaterVolume": 8190630,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Miller Spinney 39 2H",
    "Latitude": 35.50312,
    "Longitude": -100.03394,
    "TotalBaseWaterVolume": 8219820,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Miller Spinney 39 3H",
    "Latitude": 35.4893,
    "Longitude": -100.02405,
    "TotalBaseWaterVolume": 7087450,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Ratliff B 1610",
    "Latitude": 32.009919,
    "Longitude": -102.33335,
    "TotalBaseWaterVolume": 397194,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Tyler 3706",
    "Latitude": 31.830005,
    "Longitude": -102.32609,
    "TotalBaseWaterVolume": 1217691,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "CSAU 401R",
    "Latitude": 32.553514,
    "Longitude": -102.621564,
    "TotalBaseWaterVolume": 19740,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Jim Tom 29 #2",
    "Latitude": 32.12167795,
    "Longitude": -101.7399805,
    "TotalBaseWaterVolume": 1394694,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Fuller 23A",
    "Latitude": 36.002755,
    "Longitude": -101.639679,
    "TotalBaseWaterVolume": 55772,
    "StateName": "Texas",
    "CountyName": "Moore"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W. N. Waddell ET AL Well 584",
    "Latitude": 31.524589,
    "Longitude": -102.6840124,
    "TotalBaseWaterVolume": 92621,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ragland 2 #2",
    "Latitude": 32.18163276,
    "Longitude": -101.7106871,
    "TotalBaseWaterVolume": 1573950,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Clear Fork, Inc.",
    "WellName": "EVB (Canyon Sand Unit) 1459",
    "Latitude": 32.3314377,
    "Longitude": -100.272319,
    "TotalBaseWaterVolume": 28000,
    "StateName": "Texas",
    "CountyName": "Nolan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Bernard Philipp 217-2H",
    "Latitude": 36.10097222,
    "Longitude": -100.7298611,
    "TotalBaseWaterVolume": 1713060,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MWS Producing, Inc.",
    "WellName": "University 3N #4",
    "Latitude": 30.993141,
    "Longitude": -101.348669,
    "TotalBaseWaterVolume": 103152,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "James Worley No. 1",
    "Latitude": 31.20658,
    "Longitude": -95.63593,
    "TotalBaseWaterVolume": 11986,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Wesley Swaim A1H",
    "Latitude": 28.5588888,
    "Longitude": -98.5433333,
    "TotalBaseWaterVolume": 3517040,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Janey 14 1",
    "Latitude": 31.37228149,
    "Longitude": -101.977242,
    "TotalBaseWaterVolume": 1365830,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Barstow -26- 5",
    "Latitude": 31.44962,
    "Longitude": -103.38374,
    "TotalBaseWaterVolume": 639975,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ray Richey Managment Company, Inc.",
    "WellName": "O K Goode #1",
    "Latitude": 33.22997,
    "Longitude": -97.740252,
    "TotalBaseWaterVolume": 8610,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Lloyd, C.E. ETAL Gas Unit 5 8H",
    "Latitude": 32.189707,
    "Longitude": -94.861522,
    "TotalBaseWaterVolume": 4931476,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #1005",
    "Latitude": 31.49588314,
    "Longitude": -101.9419299,
    "TotalBaseWaterVolume": 1250802,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Willeke Unit B 1",
    "Latitude": 28.968464,
    "Longitude": -97.716478,
    "TotalBaseWaterVolume": 3505620,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Bearkat 17 #4",
    "Latitude": 31.873139,
    "Longitude": -101.339028,
    "TotalBaseWaterVolume": 666456,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 10 53HH",
    "Latitude": 32.18760313,
    "Longitude": -94.35559192,
    "TotalBaseWaterVolume": 9241492,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Piedra Operating, LLC",
    "WellName": "Mabee 19  2",
    "Latitude": 32.3620662,
    "Longitude": -102.1456305,
    "TotalBaseWaterVolume": 1012620,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Nobles #2914",
    "Latitude": 32.00148,
    "Longitude": -102.24138,
    "TotalBaseWaterVolume": 1089564,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Cravens 31 #8",
    "Latitude": 31.36393159,
    "Longitude": -101.9328162,
    "TotalBaseWaterVolume": 1447152,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Midland Farms AM 11",
    "Latitude": 32.178636,
    "Longitude": -102.3596,
    "TotalBaseWaterVolume": 668331,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "MIDLAND FARMS AM 11",
    "Latitude": 32.17863611,
    "Longitude": -102.3596,
    "TotalBaseWaterVolume": 668331,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240B-1702",
    "Latitude": 32.308631,
    "Longitude": -102.29016,
    "TotalBaseWaterVolume": 1429638,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Moro Creek 3304H",
    "Latitude": 28.386916,
    "Longitude": -99.795937,
    "TotalBaseWaterVolume": 6626468,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Calverly #2",
    "Latitude": 31.8047885,
    "Longitude": -101.6568089,
    "TotalBaseWaterVolume": 791700,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Weaver #3",
    "Latitude": 31.8242881,
    "Longitude": -101.6609831,
    "TotalBaseWaterVolume": 938616,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "J.P. MEEK 16-69H",
    "Latitude": 35.3825692,
    "Longitude": -100.2226508,
    "TotalBaseWaterVolume": 564258,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "NFR Energy LLC",
    "WellName": "Sustr Unit 1H",
    "Latitude": 29.545644,
    "Longitude": -97.099881,
    "TotalBaseWaterVolume": 8565438,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Baker 46 #1",
    "Latitude": 32.4366139,
    "Longitude": -101.6951204,
    "TotalBaseWaterVolume": 1624752,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Slaughter 87B #1",
    "Latitude": 32.45931846,
    "Longitude": -101.866295,
    "TotalBaseWaterVolume": 1533840,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Midenergy Operating, LLC",
    "WellName": "Neal 5805",
    "Latitude": 31.480876,
    "Longitude": -102.061354,
    "TotalBaseWaterVolume": 75321,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "University Roxanne 5",
    "Latitude": 32.380619,
    "Longitude": -102.402775,
    "TotalBaseWaterVolume": 914150,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sheridan Production Company, LLC",
    "WellName": "BTLT -B- - # 12",
    "Latitude": 26.4885514,
    "Longitude": -98.4619101,
    "TotalBaseWaterVolume": 285469,
    "StateName": "Texas",
    "CountyName": "Hidalgo"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Hill 6-6K",
    "Latitude": 32.386416,
    "Longitude": -101.806129,
    "TotalBaseWaterVolume": 1176462,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "SRH 12 #1223",
    "Latitude": 31.45169,
    "Longitude": -101.43253,
    "TotalBaseWaterVolume": 978614,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Steller Energy & Investment Corp",
    "WellName": "Foster #604",
    "Latitude": 31.97672778,
    "Longitude": -101.2253,
    "TotalBaseWaterVolume": 1117872,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 3-12A",
    "Latitude": 28.0517,
    "Longitude": -99.4518,
    "TotalBaseWaterVolume": 5619906,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 4-12A",
    "Latitude": 28.0517,
    "Longitude": -99.4518,
    "TotalBaseWaterVolume": 5553433,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 6-12A",
    "Latitude": 28.0518,
    "Longitude": -99.4518,
    "TotalBaseWaterVolume": 5378405,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ray Richey Managment Company, Inc.",
    "WellName": "O. K. Goode #1",
    "Latitude": 33.22997,
    "Longitude": -97.740252,
    "TotalBaseWaterVolume": 7602,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MWS Producing, Inc.",
    "WellName": "University 23W #3",
    "Latitude": 30.998291,
    "Longitude": -101.3353262,
    "TotalBaseWaterVolume": 94962,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Corson B5 #4",
    "Latitude": 32.05570506,
    "Longitude": -101.7157984,
    "TotalBaseWaterVolume": 1570968,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "Denise 3275",
    "Latitude": 36.13628,
    "Longitude": -100.20064,
    "TotalBaseWaterVolume": 29941,
    "StateName": "Texas",
    "CountyName": "Lipscomb County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "HighMount Exploration & Production",
    "WellName": "Jones 1661H",
    "Latitude": 36.08532,
    "Longitude": -100.20324,
    "TotalBaseWaterVolume": 2488206,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Dan 590-1HM",
    "Latitude": 36.24497222,
    "Longitude": -100.4829444,
    "TotalBaseWaterVolume": 1734678,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Jack Meeks 01 04H",
    "Latitude": 28.673619,
    "Longitude": -98.27805,
    "TotalBaseWaterVolume": 2812908,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Jack Meeks 01 05H",
    "Latitude": 28.673613,
    "Longitude": -98.21532,
    "TotalBaseWaterVolume": 2318064,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Cooper 15 #4",
    "Latitude": 31.2669444,
    "Longitude": -103.4705556,
    "TotalBaseWaterVolume": 789684,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 8 57HH",
    "Latitude": 32.122989,
    "Longitude": -94.391911,
    "TotalBaseWaterVolume": 7047322,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 239-503",
    "Latitude": 32.265527,
    "Longitude": -102.179156,
    "TotalBaseWaterVolume": 1651482,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 10-13 5H",
    "Latitude": 31.27996527,
    "Longitude": -101.5522165,
    "TotalBaseWaterVolume": 8612016,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Nichols State Unit 3H",
    "Latitude": 28.190969,
    "Longitude": -98.331367,
    "TotalBaseWaterVolume": 161334,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 10 54HH",
    "Latitude": 32.18758828,
    "Longitude": -94.35563714,
    "TotalBaseWaterVolume": 7409208,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "McKnight M B #202",
    "Latitude": 31.56258,
    "Longitude": -102.68005,
    "TotalBaseWaterVolume": 430579,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mary Ellen 3",
    "Latitude": 31.69894,
    "Longitude": -102.33696,
    "TotalBaseWaterVolume": 788235,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Munson #1004H",
    "Latitude": 31.10363,
    "Longitude": -101.033712,
    "TotalBaseWaterVolume": 8751372,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Rufus #7",
    "Latitude": 32.48632386,
    "Longitude": -101.8122164,
    "TotalBaseWaterVolume": 1212721,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Guitar 5 #3",
    "Latitude": 32.28235,
    "Longitude": -101.79654,
    "TotalBaseWaterVolume": 1036854,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Toyah Lake `4` 1",
    "Latitude": 31.28989,
    "Longitude": -103.4316,
    "TotalBaseWaterVolume": 619420,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ray Richey Managment Company, Inc.",
    "WellName": "Yeatts Unit #1H",
    "Latitude": 33.23738,
    "Longitude": -97.726022,
    "TotalBaseWaterVolume": 3035130,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Matador Pawelek Orca 2H",
    "Latitude": 28.82107,
    "Longitude": -98.099567,
    "TotalBaseWaterVolume": 5902847,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Vantage Fort Worth Energy LLC",
    "WellName": "Southcliff North 1H",
    "Latitude": 32.6737,
    "Longitude": -97.3807,
    "TotalBaseWaterVolume": 3423000,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Iverson #9",
    "Latitude": 32.520072,
    "Longitude": -102.684528,
    "TotalBaseWaterVolume": 12945,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Hall #4",
    "Latitude": 32.522961,
    "Longitude": -102.665428,
    "TotalBaseWaterVolume": 12945,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "MCKNIGHT M B 222",
    "Latitude": 31.56301,
    "Longitude": -102.67488,
    "TotalBaseWaterVolume": 438568.2,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "J. Brown 25 #1",
    "Latitude": 32.54844176,
    "Longitude": -102.0924664,
    "TotalBaseWaterVolume": 1126776,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Grantham 12 #3",
    "Latitude": 32.4202295,
    "Longitude": -101.6561827,
    "TotalBaseWaterVolume": 1275794,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Abraxas 30 #3",
    "Latitude": 32.43039442,
    "Longitude": -101.8570686,
    "TotalBaseWaterVolume": 1291332,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek `45` 3",
    "Latitude": 31.6533,
    "Longitude": -102.005922,
    "TotalBaseWaterVolume": 450660,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "CMWW A 104H",
    "Latitude": 28.35287,
    "Longitude": -99.836586,
    "TotalBaseWaterVolume": 2838827,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Tyler 3716",
    "Latitude": 31.83486,
    "Longitude": -102.31304,
    "TotalBaseWaterVolume": 1388856,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "Charles 1",
    "Latitude": 36.31243,
    "Longitude": -101.53175,
    "TotalBaseWaterVolume": 7904,
    "StateName": "Texas",
    "CountyName": "Hansford"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Schmidt Family 01 01H",
    "Latitude": 28.614831,
    "Longitude": -98.089628,
    "TotalBaseWaterVolume": 3872400,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Deatherage 23 #1",
    "Latitude": 32.39800775,
    "Longitude": -101.9536772,
    "TotalBaseWaterVolume": 1123920,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Acola C - Acola A (SA) 1H",
    "Latitude": 33.1257617,
    "Longitude": -97.5027701,
    "TotalBaseWaterVolume": 8166430.2,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Acola C - Acola A (SA) 1H",
    "Latitude": 33.1257617,
    "Longitude": -97.5027701,
    "TotalBaseWaterVolume": 8166430.2,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Petro Pards 1H",
    "Latitude": 28.6933544,
    "Longitude": -99.91492158,
    "TotalBaseWaterVolume": 3134188,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Viejo Energy I, LLC",
    "WellName": "Connell Estate #5",
    "Latitude": 31.6174258,
    "Longitude": -102.5890256,
    "TotalBaseWaterVolume": 90000,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MWS Producing, Inc.",
    "WellName": "University 22A #4",
    "Latitude": 31.0014,
    "Longitude": -101.359919,
    "TotalBaseWaterVolume": 93954,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Pangea West 6601H",
    "Latitude": 31.0174,
    "Longitude": -101.4766,
    "TotalBaseWaterVolume": 10538682,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Pangea West 6602 HX",
    "Latitude": 31.0157,
    "Longitude": -101.4764,
    "TotalBaseWaterVolume": 10498152,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Ratliff C 1809",
    "Latitude": 32.00605,
    "Longitude": -102.367772,
    "TotalBaseWaterVolume": 767928,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #1013",
    "Latitude": 31.51598604,
    "Longitude": -101.9606069,
    "TotalBaseWaterVolume": 1221654,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Adele Clough GU A 9",
    "Latitude": 33.1183991,
    "Longitude": -97.5115901,
    "TotalBaseWaterVolume": 931036,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 58-9A #3",
    "Latitude": 31.31008563,
    "Longitude": -101.8743963,
    "TotalBaseWaterVolume": 1294384,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Petro Pards 2H",
    "Latitude": 28.6933352,
    "Longitude": -99.91491829,
    "TotalBaseWaterVolume": 3357243,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Munson #1002H",
    "Latitude": 31.10351,
    "Longitude": -101.03378,
    "TotalBaseWaterVolume": 8474424,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "S TX Childrens Home 01 03H",
    "Latitude": 28.611772,
    "Longitude": -98.27805,
    "TotalBaseWaterVolume": 2968812,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "McWilliams, J. Gas Unit 10H",
    "Latitude": 32.185094,
    "Longitude": -94.883353,
    "TotalBaseWaterVolume": 5928992,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-1 #9",
    "Latitude": 32.44234495,
    "Longitude": -102.1726175,
    "TotalBaseWaterVolume": 1116473,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "TACOR Resources, Inc.",
    "WellName": "Lee Smith #86",
    "Latitude": 33.07553609,
    "Longitude": -100.2255621,
    "TotalBaseWaterVolume": 166278,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "JRS Farms 22 #8",
    "Latitude": 31.592527,
    "Longitude": -101.954156,
    "TotalBaseWaterVolume": 1174278,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Warren American Oil Company",
    "WellName": "University 234 #7",
    "Latitude": 30.990022,
    "Longitude": -101.322467,
    "TotalBaseWaterVolume": 63,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Calverly #3",
    "Latitude": 31.7981463,
    "Longitude": -101.6546837,
    "TotalBaseWaterVolume": 713202,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Weaver #7",
    "Latitude": 31.812185,
    "Longitude": -101.6591789,
    "TotalBaseWaterVolume": 445326,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Blagrave \"17\" #2",
    "Latitude": 32.18452,
    "Longitude": -101.53832,
    "TotalBaseWaterVolume": 1492359,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Gaskins 14 #2",
    "Latitude": 32.3987632,
    "Longitude": -101.6679682,
    "TotalBaseWaterVolume": 1399758,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Mid-States Operating Company",
    "WellName": "Benners #504",
    "Latitude": 31.975822,
    "Longitude": -101.960093,
    "TotalBaseWaterVolume": 1749300,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Clear Fork, Inc.",
    "WellName": "EVB (Canyon Sand Unit) 1644",
    "Latitude": 32.33069,
    "Longitude": -100.29381,
    "TotalBaseWaterVolume": 28000,
    "StateName": "Texas",
    "CountyName": "Nolan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "SAU 8 #5C",
    "Latitude": 31.46051,
    "Longitude": -101.63547,
    "TotalBaseWaterVolume": 601902,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Globe 1 #1",
    "Latitude": 31.2893896,
    "Longitude": -103.3786062,
    "TotalBaseWaterVolume": 661836,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Morgan 28 #8",
    "Latitude": 31.419517,
    "Longitude": -101.9472515,
    "TotalBaseWaterVolume": 1640730,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ray Richey Managment Company, Inc.",
    "WellName": "Cocanougher-Taylor #1H",
    "Latitude": 33.206518,
    "Longitude": -97.556471,
    "TotalBaseWaterVolume": 3966480,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Harris, Sylvan Gas Unit 5H",
    "Latitude": 32.15424567,
    "Longitude": -94.51484801,
    "TotalBaseWaterVolume": 7300752,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Bettye Jo #3108",
    "Latitude": 31.7477069,
    "Longitude": -102.1300392,
    "TotalBaseWaterVolume": 894247,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Knight #7",
    "Latitude": 32.34195,
    "Longitude": -102.61027,
    "TotalBaseWaterVolume": 76386,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "Knight #1",
    "Latitude": 31.18086,
    "Longitude": -95.53233,
    "TotalBaseWaterVolume": 853178,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hardin 10A #1",
    "Latitude": 32.17186284,
    "Longitude": -101.7231214,
    "TotalBaseWaterVolume": 1351056,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hacienda #13",
    "Latitude": 31.40187434,
    "Longitude": -101.9453832,
    "TotalBaseWaterVolume": 1262856,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Wilson 34-159 1H",
    "Latitude": 31.4786913,
    "Longitude": -103.3274729,
    "TotalBaseWaterVolume": 1243754,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "Smith #1",
    "Latitude": 31.2156,
    "Longitude": -95.55507,
    "TotalBaseWaterVolume": 810865,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Cravens 35A #2",
    "Latitude": 32.11364,
    "Longitude": -101.67595,
    "TotalBaseWaterVolume": 1065750,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Apollo 2 #3",
    "Latitude": 31.2892321,
    "Longitude": -103.4047554,
    "TotalBaseWaterVolume": 606438,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Trammell 1H",
    "Latitude": 36.028177,
    "Longitude": -100.932789,
    "TotalBaseWaterVolume": 1663232,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Seaboard Operating Co.",
    "WellName": "Quito SW Unit 702",
    "Latitude": 31.55205,
    "Longitude": -103.38146,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University NG 5191  (CP5 3001H)",
    "Latitude": 31.067784,
    "Longitude": -101.782975,
    "TotalBaseWaterVolume": 6106552,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Parmer 1-317 #1",
    "Latitude": 32.56249426,
    "Longitude": -102.3872235,
    "TotalBaseWaterVolume": 1355466,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Red Devil 22 #3",
    "Latitude": 31.8622777,
    "Longitude": -101.3099,
    "TotalBaseWaterVolume": 803586,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Crimson Exploration Oper. Inc.",
    "WellName": "A Yates #1H",
    "Latitude": 30.780822,
    "Longitude": -96.096544,
    "TotalBaseWaterVolume": 2940336,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "J.P. Meek 2-69",
    "Latitude": 35.38204,
    "Longitude": -100.21468,
    "TotalBaseWaterVolume": 627888,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "Worley #1",
    "Latitude": 31.20658,
    "Longitude": -95.63593,
    "TotalBaseWaterVolume": 777859,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Jim Tom 32 #2",
    "Latitude": 32.11041494,
    "Longitude": -101.7283462,
    "TotalBaseWaterVolume": 1430688,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Partee Drilling Inc",
    "WellName": "Walleye 1002",
    "Latitude": 32.3505,
    "Longitude": -101.4511,
    "TotalBaseWaterVolume": 712236,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Martin 4 #3",
    "Latitude": 32.25394648,
    "Longitude": -102.0331517,
    "TotalBaseWaterVolume": 1418340,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Welch C #7",
    "Latitude": 31.94211523,
    "Longitude": -101.9683045,
    "TotalBaseWaterVolume": 1245686,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "P.O.&G. Operating, LLC",
    "WellName": "Katherine #1",
    "Latitude": 31.343096,
    "Longitude": -102.9140332,
    "TotalBaseWaterVolume": 71778,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Shell Oil Company affiliate",
    "WellName": "Johnson C26-22 LOV 1H",
    "Latitude": 31.873281,
    "Longitude": -103.473836,
    "TotalBaseWaterVolume": 9922710,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "South Curtis Ranch #215",
    "Latitude": 32.088936,
    "Longitude": -102.095267,
    "TotalBaseWaterVolume": 874207,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Harrell Jeanette 08H",
    "Latitude": 32.10433889,
    "Longitude": -94.47046667,
    "TotalBaseWaterVolume": 3168137,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ray Richey Managment Company, Inc.",
    "WellName": "Taylor 'F' #7H",
    "Latitude": 33.196604,
    "Longitude": -97.556836,
    "TotalBaseWaterVolume": 40354444,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Harris, Sylvan Gas Unit 4H",
    "Latitude": 32.15427261,
    "Longitude": -94.51485445,
    "TotalBaseWaterVolume": 2362950,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "BRUNS 01 02H",
    "Latitude": 29.004842,
    "Longitude": -97.604453,
    "TotalBaseWaterVolume": 3909192,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "BRUNS 01 03H",
    "Latitude": 29.004822,
    "Longitude": -97.604412,
    "TotalBaseWaterVolume": 3939306,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "BRUNS 01 04H",
    "Latitude": 29.004802,
    "Longitude": -97.604371,
    "TotalBaseWaterVolume": 3879120,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Boyles Unit #3H",
    "Latitude": 29.337528,
    "Longitude": -97.388253,
    "TotalBaseWaterVolume": 3686676,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Munson #1001H",
    "Latitude": 31.103515,
    "Longitude": -101.032917,
    "TotalBaseWaterVolume": 9860298,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Tucker 70-2H",
    "Latitude": 36.056448,
    "Longitude": -100.338032,
    "TotalBaseWaterVolume": 1826534,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #1018",
    "Latitude": 31.50786757,
    "Longitude": -101.9481168,
    "TotalBaseWaterVolume": 1202796,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN Waddell ET AL 1204",
    "Latitude": 31.5167136,
    "Longitude": -102.6471625,
    "TotalBaseWaterVolume": 149729,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Elam, WB 11",
    "Latitude": 32.555314,
    "Longitude": -102.663933,
    "TotalBaseWaterVolume": 10571,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Cothes, C R 1R",
    "Latitude": 32.523781,
    "Longitude": -102.685758,
    "TotalBaseWaterVolume": 9563,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Johnson 41 #2",
    "Latitude": 32.2656,
    "Longitude": -101.4346,
    "TotalBaseWaterVolume": 993614,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 239-1402",
    "Latitude": 32.244613,
    "Longitude": -102.185791,
    "TotalBaseWaterVolume": 1650600,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Midenergy Operating, LLC",
    "WellName": "Goliath 2007",
    "Latitude": 32.020513,
    "Longitude": -102.233914,
    "TotalBaseWaterVolume": 970622,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Gilpin 1H",
    "Latitude": 27.595997,
    "Longitude": -99.224957,
    "TotalBaseWaterVolume": 80721,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Baldwin 7 #1",
    "Latitude": 32.46921217,
    "Longitude": -101.9760283,
    "TotalBaseWaterVolume": 1522794,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "ET O Daniel #68",
    "Latitude": 31.9380328,
    "Longitude": -101.8199692,
    "TotalBaseWaterVolume": 1415064,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Janice 99-1H",
    "Latitude": 36.158117,
    "Longitude": -100.843578,
    "TotalBaseWaterVolume": 1729571,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Dobson Ranch 40 3H",
    "Latitude": 35.48774,
    "Longitude": -100.00537,
    "TotalBaseWaterVolume": 4574821,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University Andrews 212",
    "Latitude": 32.121392,
    "Longitude": -102.727222,
    "TotalBaseWaterVolume": 346320,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MWS Producing, Inc.",
    "WellName": "Universtiy 22 #4",
    "Latitude": 31.004302,
    "Longitude": -101.368748,
    "TotalBaseWaterVolume": 95802,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "Smith Joe 1",
    "Latitude": 36.20308,
    "Longitude": -101.1525,
    "TotalBaseWaterVolume": 147630,
    "StateName": "Texas",
    "CountyName": "Hansford"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Dobson Ranch 40 SL 1H",
    "Latitude": 35.48889,
    "Longitude": -100.02028,
    "TotalBaseWaterVolume": 4652041,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ray Richey Managment Company, Inc.",
    "WellName": "Marion Green #4H",
    "Latitude": 33.239558,
    "Longitude": -97.724655,
    "TotalBaseWaterVolume": 1957662,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Miller Spinney 39 SL 6H",
    "Latitude": 35.50084,
    "Longitude": -100.02217,
    "TotalBaseWaterVolume": 6082944,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Miller Spinney 39 SL 6H",
    "Latitude": 35.50165,
    "Longitude": -100.02658,
    "TotalBaseWaterVolume": 6082944,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "University Ruth 423",
    "Latitude": 32.37842,
    "Longitude": -102.44914,
    "TotalBaseWaterVolume": 1519980,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Hughes 49 #2",
    "Latitude": 32.3687267,
    "Longitude": -101.6760957,
    "TotalBaseWaterVolume": 1711006,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Fryar 4 #4ii",
    "Latitude": 32.33363,
    "Longitude": -101.56828,
    "TotalBaseWaterVolume": 705800,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Low Unit 19 #2",
    "Latitude": 32.21253,
    "Longitude": -101.88954,
    "TotalBaseWaterVolume": 1026438,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Abraxas 27B #2",
    "Latitude": 32.45793279,
    "Longitude": -101.8208811,
    "TotalBaseWaterVolume": 1335558,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Callon Petroleum Operating Company",
    "WellName": "Neal 321 H",
    "Latitude": 31.299167,
    "Longitude": -101.897481,
    "TotalBaseWaterVolume": 9110023,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Britt Ranch J36 -14H",
    "Latitude": 35.48875,
    "Longitude": -100.087944,
    "TotalBaseWaterVolume": 2949298,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240A-4205",
    "Latitude": 32.219076,
    "Longitude": -102.275673,
    "TotalBaseWaterVolume": 1724268,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Boyd 'F' #10",
    "Latitude": 32.8691126,
    "Longitude": -100.4934911,
    "TotalBaseWaterVolume": 24108,
    "StateName": "Texas",
    "CountyName": "Fisher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Brunson #4",
    "Latitude": 31.8550437,
    "Longitude": -101.7328584,
    "TotalBaseWaterVolume": 729246,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Bauer #3",
    "Latitude": 32.4989177,
    "Longitude": -101.9499557,
    "TotalBaseWaterVolume": 1642494,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Margaret Young #3",
    "Latitude": 33.088596,
    "Longitude": -97.624741,
    "TotalBaseWaterVolume": 9786,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN Waddell ET AL 1905",
    "Latitude": 31.5035065,
    "Longitude": -102.6601625,
    "TotalBaseWaterVolume": 39977,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "GS Andector Unit R-132",
    "Latitude": 32.050406,
    "Longitude": -102.685289,
    "TotalBaseWaterVolume": 122536,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Brunson #6",
    "Latitude": 31.8616397,
    "Longitude": -101.734902,
    "TotalBaseWaterVolume": 622107,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Munson #1003H",
    "Latitude": 31.1035,
    "Longitude": -101.034644,
    "TotalBaseWaterVolume": 8315454,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 58-16 #4",
    "Latitude": 31.30918181,
    "Longitude": -101.7535694,
    "TotalBaseWaterVolume": 1365966,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Opal Resources Operating Company",
    "WellName": "Mary K Shirk #6",
    "Latitude": 31.172922,
    "Longitude": -102.025835,
    "TotalBaseWaterVolume": 123,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Barstow 38 2",
    "Latitude": 31.45244,
    "Longitude": -103.3782,
    "TotalBaseWaterVolume": 694659,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Warren American Oil Company",
    "WellName": "University 234 #6",
    "Latitude": 30.98801,
    "Longitude": -101.325971,
    "TotalBaseWaterVolume": 16855,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Roman \"20\" #2",
    "Latitude": 32.43217,
    "Longitude": -101.69258,
    "TotalBaseWaterVolume": 1199902,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Curtis #2",
    "Latitude": 32.285357,
    "Longitude": -102.08818,
    "TotalBaseWaterVolume": 897456,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch A #18",
    "Latitude": 32.1867577,
    "Longitude": -101.9350869,
    "TotalBaseWaterVolume": 1094604,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Miller Spinney 39 SL 4H",
    "Latitude": 35.478067,
    "Longitude": -100.04734,
    "TotalBaseWaterVolume": 6585062,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texas American Resources Company",
    "WellName": "Turman 109H",
    "Latitude": 28.654646,
    "Longitude": -99.043729,
    "TotalBaseWaterVolume": 4764466,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Jim Tom 48 #2",
    "Latitude": 32.06658196,
    "Longitude": -101.7550029,
    "TotalBaseWaterVolume": 1255842,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Bearkat 20 #3",
    "Latitude": 31.861325,
    "Longitude": -101.344047,
    "TotalBaseWaterVolume": 676578,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tidal Petroleum, Inc.",
    "WellName": "Kolar #2H",
    "Latitude": 29.62502,
    "Longitude": -97.22085,
    "TotalBaseWaterVolume": 3574726,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker 27 #6",
    "Latitude": 31.3349,
    "Longitude": -101.3031,
    "TotalBaseWaterVolume": 1114860,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texakoma Operating, L.P.",
    "WellName": "McMordie  84-3",
    "Latitude": 35.854,
    "Longitude": -100.7059,
    "TotalBaseWaterVolume": 543412,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Thomas W 5 12H",
    "Latitude": 35.53307,
    "Longitude": -100.12617,
    "TotalBaseWaterVolume": 4634721,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Shell Oil Company affiliate",
    "WellName": "Shell Stephens L 1V",
    "Latitude": 33.1681425,
    "Longitude": -102.0128844,
    "TotalBaseWaterVolume": 728532,
    "StateName": "Texas",
    "CountyName": "Lynn"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Turner 1206 #6",
    "Latitude": 31.33224922,
    "Longitude": -101.6562127,
    "TotalBaseWaterVolume": 1378314,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Holt  20-6H",
    "Latitude": 35.35262,
    "Longitude": -100.0709,
    "TotalBaseWaterVolume": 8893217,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Brunson 35 #4",
    "Latitude": 31.86644639,
    "Longitude": -101.7178408,
    "TotalBaseWaterVolume": 1439844,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "Ulrich #1H",
    "Latitude": 31.1522,
    "Longitude": -95.4297,
    "TotalBaseWaterVolume": 526367,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Herbst-May 1H",
    "Latitude": 28.797389,
    "Longitude": -98.298556,
    "TotalBaseWaterVolume": 8897440,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "University 52-10 2H",
    "Latitude": 31.06531,
    "Longitude": -101.0169,
    "TotalBaseWaterVolume": 7399371,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg 3070 5",
    "Latitude": 31.34123,
    "Longitude": -100.92704,
    "TotalBaseWaterVolume": 251034,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-29 #4",
    "Latitude": 32.38613462,
    "Longitude": -102.1682342,
    "TotalBaseWaterVolume": 1117019,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Cooper 15 #4",
    "Latitude": 31.260246,
    "Longitude": -103.4209125,
    "TotalBaseWaterVolume": 515256,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "CEI Unit #4H",
    "Latitude": 29.074853,
    "Longitude": -97.764608,
    "TotalBaseWaterVolume": 2208234,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Sunset Rose 904-1HM",
    "Latitude": 36.346094,
    "Longitude": -100.427296,
    "TotalBaseWaterVolume": 1640182,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Guitar 5 #4",
    "Latitude": 32.28583,
    "Longitude": -101.79816,
    "TotalBaseWaterVolume": 1120434,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Robbie 24 BB",
    "Latitude": 32.0352177,
    "Longitude": -102.1708013,
    "TotalBaseWaterVolume": 1085868,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek 7",
    "Latitude": 31.63123,
    "Longitude": -102.01689,
    "TotalBaseWaterVolume": 2360946,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Hogan 10",
    "Latitude": 31.773881,
    "Longitude": -102.377247,
    "TotalBaseWaterVolume": 570993,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Abel #9",
    "Latitude": 32.2624519,
    "Longitude": -101.9993568,
    "TotalBaseWaterVolume": 214956,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Walters 11 #1",
    "Latitude": 31.82837,
    "Longitude": -101.59051,
    "TotalBaseWaterVolume": 1067220,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Gaskins A 38J",
    "Latitude": 32.30118119,
    "Longitude": -101.846159,
    "TotalBaseWaterVolume": 1110299,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Judson 21 #1",
    "Latitude": 32.34035,
    "Longitude": -101.89008,
    "TotalBaseWaterVolume": 1021398,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Mohican Operating",
    "WellName": "BHE 13",
    "Latitude": 27.75079,
    "Longitude": -98.98311,
    "TotalBaseWaterVolume": 232344,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Thompson \"B\" 20",
    "Latitude": 32.531208,
    "Longitude": -102.67667,
    "TotalBaseWaterVolume": 11066,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "CSAU 701",
    "Latitude": 32.553353,
    "Longitude": -102.631967,
    "TotalBaseWaterVolume": 11474,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 6-43 #9",
    "Latitude": 32.45464966,
    "Longitude": -102.1808278,
    "TotalBaseWaterVolume": 1412709,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Mary E Turner D #8",
    "Latitude": 31.91748101,
    "Longitude": -101.9030094,
    "TotalBaseWaterVolume": 975828,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Morgan 28 #9",
    "Latitude": 31.4178715,
    "Longitude": -101.9417702,
    "TotalBaseWaterVolume": 1293852,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "Knight #1",
    "Latitude": 31.18086,
    "Longitude": -95.53233,
    "TotalBaseWaterVolume": 5281155,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Foreman 32 #4",
    "Latitude": 32.30721938,
    "Longitude": -101.9061474,
    "TotalBaseWaterVolume": 1612800,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 10-17 #1H",
    "Latitude": 31.26584,
    "Longitude": -101.498,
    "TotalBaseWaterVolume": 8434204,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Mark & Sandra 2H",
    "Latitude": 28.42562,
    "Longitude": -99.56156,
    "TotalBaseWaterVolume": 3192075,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Joe Mahan Unit B 1",
    "Latitude": 28.676336,
    "Longitude": -98.194377,
    "TotalBaseWaterVolume": 2985267,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Beinhorn Ranch 26H",
    "Latitude": 28.31617444,
    "Longitude": -99.69917481,
    "TotalBaseWaterVolume": 5634846,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Hoelscher 46 #1",
    "Latitude": 31.749476,
    "Longitude": -101.592523,
    "TotalBaseWaterVolume": 2277366,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Nichols 17 #2",
    "Latitude": 32.39929,
    "Longitude": -101.67712,
    "TotalBaseWaterVolume": 1524112,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Dawkins #4",
    "Latitude": 32.29543306,
    "Longitude": -101.8896504,
    "TotalBaseWaterVolume": 1041390,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Crimson Exploration Oper. Inc.",
    "WellName": "Payne Unit A #1H",
    "Latitude": 30.886714,
    "Longitude": -96.074258,
    "TotalBaseWaterVolume": 3440304,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Robbie 24 GG",
    "Latitude": 32.015904,
    "Longitude": -102.101379,
    "TotalBaseWaterVolume": 1155378,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Welch C #8",
    "Latitude": 31.94647078,
    "Longitude": -101.9765739,
    "TotalBaseWaterVolume": 1306341,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Sidney 123-3H",
    "Latitude": 36.1143128,
    "Longitude": -100.9025764,
    "TotalBaseWaterVolume": 1715718,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 17 #2",
    "Latitude": 31.2678047,
    "Longitude": -103.3536373,
    "TotalBaseWaterVolume": 715218,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Mark & Sandra 2H",
    "Latitude": 28.7074,
    "Longitude": -99.92190659,
    "TotalBaseWaterVolume": 3192075,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Range Resources Corporation",
    "WellName": "Edmondson A 4219",
    "Latitude": 32,
    "Longitude": -101,
    "TotalBaseWaterVolume": 776294,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Steelhead 33-72/Well No. 2",
    "Latitude": 31.65628,
    "Longitude": -103.55571,
    "TotalBaseWaterVolume": 1130528,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Eagle Energy Acquisitions LP",
    "WellName": "Mabee 2 2A",
    "Latitude": 32,
    "Longitude": -102,
    "TotalBaseWaterVolume": 706976,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix A LZS #67",
    "Latitude": 32.2806447,
    "Longitude": -102.7238131,
    "TotalBaseWaterVolume": 153216,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "H Mueller 18A #1H",
    "Latitude": 28.98947,
    "Longitude": -97.71219,
    "TotalBaseWaterVolume": 4184342,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "H Mueller 18A #1H",
    "Latitude": 28.98921333,
    "Longitude": -97.7119175,
    "TotalBaseWaterVolume": 4184342,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "H Mueller 18A #1H",
    "Latitude": 28.989213,
    "Longitude": -97.711918,
    "TotalBaseWaterVolume": 4184342,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Alta Mesa Services, LP",
    "WellName": "Peters Cole #1",
    "Latitude": 28.918731,
    "Longitude": -96.727733,
    "TotalBaseWaterVolume": 273662,
    "StateName": "Texas",
    "CountyName": "Jackson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Katherine Blau 941-2HM",
    "Latitude": 36.347666,
    "Longitude": -100.499752,
    "TotalBaseWaterVolume": 1797241,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ellis 36A #5",
    "Latitude": 32.31330524,
    "Longitude": -101.7560459,
    "TotalBaseWaterVolume": 1595034,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Walker 28 #3",
    "Latitude": 31.2418321,
    "Longitude": -103.4389367,
    "TotalBaseWaterVolume": 578340,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "S. B. STREET OPERATING, INC.",
    "WellName": "MK GRAHAM 9853",
    "Latitude": 33.05916,
    "Longitude": -99.03567,
    "TotalBaseWaterVolume": 19152,
    "StateName": "Texas",
    "CountyName": "Throckmorton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 3-13 #1",
    "Latitude": 31.2733603,
    "Longitude": -101.8699418,
    "TotalBaseWaterVolume": 1390704,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Colonel Drake 24 2H",
    "Latitude": 31.62949,
    "Longitude": -103.428574,
    "TotalBaseWaterVolume": 1503480,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Huff Bros 2 3H",
    "Latitude": 35.51844,
    "Longitude": -100.11329,
    "TotalBaseWaterVolume": 6706980,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LUCA RESOURCES GROUP, LLC",
    "WellName": "LUCA BARFIELD  2",
    "Latitude": 27.39841,
    "Longitude": -98.70563,
    "TotalBaseWaterVolume": 171891,
    "StateName": "Texas",
    "CountyName": "Duval"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Hogan 11",
    "Latitude": 31.775445,
    "Longitude": -102.384677,
    "TotalBaseWaterVolume": 692925,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Peugh 3-3J",
    "Latitude": 32.39346,
    "Longitude": -101.84056,
    "TotalBaseWaterVolume": 736859,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Donald L Hutt Fee 18",
    "Latitude": 31.84195373,
    "Longitude": -101.9293412,
    "TotalBaseWaterVolume": 1273613,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "HighMount Exploration & Production",
    "WellName": "Foster 6901",
    "Latitude": 30.83738,
    "Longitude": -100.84863,
    "TotalBaseWaterVolume": 1473780,
    "StateName": "Texas",
    "CountyName": "Schleicher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #3024",
    "Latitude": 31.4702983,
    "Longitude": -102.0217954,
    "TotalBaseWaterVolume": 1226610,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Thomas 3 16H",
    "Latitude": 35.51833,
    "Longitude": -100.11333,
    "TotalBaseWaterVolume": 4628145,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 10-17 #2H",
    "Latitude": 31.265822,
    "Longitude": -101.496,
    "TotalBaseWaterVolume": 8287440,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Lloyd, C.E. ETAL Gas Unit 5 6H",
    "Latitude": 32.18686,
    "Longitude": -94.843811,
    "TotalBaseWaterVolume": 9923731,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 16-18",
    "Latitude": 32.16296,
    "Longitude": -102.68925,
    "TotalBaseWaterVolume": 68460,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluescape Resources",
    "WellName": "HBR 7HA",
    "Latitude": 28.872932,
    "Longitude": -99.262519,
    "TotalBaseWaterVolume": 4677750,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Bearkat 20 #4",
    "Latitude": 31.854358,
    "Longitude": -101.341987,
    "TotalBaseWaterVolume": 614838,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Kyle 'B' #5",
    "Latitude": 31.9226816,
    "Longitude": -103.6087487,
    "TotalBaseWaterVolume": 59598,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #8B",
    "Latitude": 29.2076962,
    "Longitude": -99.089872,
    "TotalBaseWaterVolume": 17430,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #9B",
    "Latitude": 29.2076941,
    "Longitude": -99.0908125,
    "TotalBaseWaterVolume": 16044,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #10B",
    "Latitude": 29.2077691,
    "Longitude": -99.0917521,
    "TotalBaseWaterVolume": 16464,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #7B",
    "Latitude": 29.2076982,
    "Longitude": -99.0889315,
    "TotalBaseWaterVolume": 17094,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #6B",
    "Latitude": 29.2077002,
    "Longitude": -99.087991,
    "TotalBaseWaterVolume": 17094,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Williams Pearl A 5602",
    "Latitude": 31.10177,
    "Longitude": -100.71293,
    "TotalBaseWaterVolume": 2447911,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Shaw 13 #3",
    "Latitude": 32.2122,
    "Longitude": -101.472,
    "TotalBaseWaterVolume": 979776,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh Petroleum, Inc.",
    "WellName": "Dupree #5",
    "Latitude": 33.195,
    "Longitude": -102.881,
    "TotalBaseWaterVolume": 95550,
    "StateName": "Texas",
    "CountyName": "Yokaum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Lloyd, C.E. ETAL Gas Unit 5 7H",
    "Latitude": 32.18948,
    "Longitude": -94.847773,
    "TotalBaseWaterVolume": 5675598,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Cothes 'A' 3",
    "Latitude": 32.519008,
    "Longitude": -102.681953,
    "TotalBaseWaterVolume": 11017,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Cole Trusts `576` 2",
    "Latitude": 33.17606,
    "Longitude": -97.25104,
    "TotalBaseWaterVolume": 1453872,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Elam, WB 12R",
    "Latitude": 32.555314,
    "Longitude": -102.663933,
    "TotalBaseWaterVolume": 11267,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Odom 11 #2",
    "Latitude": 31.83481479,
    "Longitude": -101.5968759,
    "TotalBaseWaterVolume": 1463952,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SV Energy Company, LLC",
    "WellName": "Peeler 5",
    "Latitude": 28.58395,
    "Longitude": -98.43498,
    "TotalBaseWaterVolume": 106848,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Evans #8",
    "Latitude": 31.9700599,
    "Longitude": -101.7860278,
    "TotalBaseWaterVolume": 788088,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "T & P Land Trust C #1905",
    "Latitude": 31.4158,
    "Longitude": -102.025,
    "TotalBaseWaterVolume": 947482,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Thomas 3 14H",
    "Latitude": 35.51805,
    "Longitude": -100.14321,
    "TotalBaseWaterVolume": 4229749,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Thomas 3 15H",
    "Latitude": 35.534147,
    "Longitude": -100.166473,
    "TotalBaseWaterVolume": 4561532,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Warren American Oil Company",
    "WellName": "University 233 #3",
    "Latitude": 30.002447,
    "Longitude": -101.368806,
    "TotalBaseWaterVolume": 38010,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Warren American Oil Company",
    "WellName": "University 236 #11",
    "Latitude": 30.985748,
    "Longitude": -101.419694,
    "TotalBaseWaterVolume": 71988,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Baker Deforest Unit #2H",
    "Latitude": 29.303797,
    "Longitude": -97.380322,
    "TotalBaseWaterVolume": 5127696,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Eagle State 28 #2",
    "Latitude": 31.383962,
    "Longitude": -103.419124,
    "TotalBaseWaterVolume": 794514,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluescape Resources",
    "WellName": "HBR 8HA",
    "Latitude": 28.872858,
    "Longitude": -99.262559,
    "TotalBaseWaterVolume": 1956685,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Grantham \"13\" #3",
    "Latitude": 32.41895,
    "Longitude": -101.65162,
    "TotalBaseWaterVolume": 1467154,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Morgan 28 #10",
    "Latitude": 31.4259735,
    "Longitude": -101.9396607,
    "TotalBaseWaterVolume": 1294986,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 41 4",
    "Latitude": 31.49766359,
    "Longitude": -102.1754139,
    "TotalBaseWaterVolume": 1461597,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Custer & Wright Operating, Inc",
    "WellName": "GLF #1",
    "Latitude": 33.0939463,
    "Longitude": -101.6997966,
    "TotalBaseWaterVolume": 63196,
    "StateName": "Texas",
    "CountyName": "Lynn"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-39A #8",
    "Latitude": 32.35059118,
    "Longitude": -102.2055499,
    "TotalBaseWaterVolume": 1235719,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluescape Resources",
    "WellName": "HBR 2HA",
    "Latitude": 28.872896,
    "Longitude": -99.262538,
    "TotalBaseWaterVolume": 4772250,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Embar B-70",
    "Latitude": 32.094936,
    "Longitude": -102.719047,
    "TotalBaseWaterVolume": 188538,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Elk 2",
    "Latitude": 32.43301,
    "Longitude": -102.64729,
    "TotalBaseWaterVolume": 123018,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 42 101H",
    "Latitude": 30.9687,
    "Longitude": -101.2118,
    "TotalBaseWaterVolume": 10825836,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Peggy Smith GU A 5",
    "Latitude": 33.153679,
    "Longitude": -97.370389,
    "TotalBaseWaterVolume": 1092183,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Piedra Operating, LLC",
    "WellName": "Top Chico 1",
    "Latitude": 32.3206793,
    "Longitude": -101.7947284,
    "TotalBaseWaterVolume": 770006,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Blagrave 54-59 #31",
    "Latitude": 32.2318,
    "Longitude": -101.4545,
    "TotalBaseWaterVolume": 936360,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker Rupert PJ # 6",
    "Latitude": 31.325,
    "Longitude": -101.3042,
    "TotalBaseWaterVolume": 1045342,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek 5",
    "Latitude": 31.624025,
    "Longitude": -102.014372,
    "TotalBaseWaterVolume": 1649130,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University Andrews 209",
    "Latitude": 32.13008306,
    "Longitude": -102.724881,
    "TotalBaseWaterVolume": 268816,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Peggy Smith B 11",
    "Latitude": 33.15898,
    "Longitude": -97.378447,
    "TotalBaseWaterVolume": 1229534,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "McDaniel 34 #3",
    "Latitude": 31.77040603,
    "Longitude": -101.5976196,
    "TotalBaseWaterVolume": 1386588,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI Hoch 29 #2",
    "Latitude": 31.7968916,
    "Longitude": -101.5277697,
    "TotalBaseWaterVolume": 1910160,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Baker Deforest Unit #12H",
    "Latitude": 29.303697,
    "Longitude": -97.380431,
    "TotalBaseWaterVolume": 5016816,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hansen Kullin Unit #5H",
    "Latitude": 29.302639,
    "Longitude": -97.427975,
    "TotalBaseWaterVolume": 2651880,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Farmar 2 5",
    "Latitude": 31.32792,
    "Longitude": -100.97179,
    "TotalBaseWaterVolume": 236964,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg 6 3",
    "Latitude": 31.31864,
    "Longitude": -100.94951,
    "TotalBaseWaterVolume": 736176,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Donald L Hutt Fee #24",
    "Latitude": 31.84701978,
    "Longitude": -101.9400473,
    "TotalBaseWaterVolume": 1257186,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh Petroleum, Inc.",
    "WellName": "Lewis 424 #2",
    "Latitude": 33.1877,
    "Longitude": -102.876,
    "TotalBaseWaterVolume": 56070,
    "StateName": "Texas",
    "CountyName": "Yokaum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Shelby Fayth 3710",
    "Latitude": 31.7474752,
    "Longitude": -102.1200481,
    "TotalBaseWaterVolume": 1166783,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "University `B11-7` 1",
    "Latitude": 32.14475,
    "Longitude": -102.82665,
    "TotalBaseWaterVolume": 65965,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN Waddell ET AL 1204",
    "Latitude": 31.5167136,
    "Longitude": -102.6471625,
    "TotalBaseWaterVolume": 149729,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlackBrush O & G, Inc.",
    "WellName": "San Pedro Ranch 1456H",
    "Latitude": 28.23405,
    "Longitude": -99.91303,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Gandu Z-125",
    "Latitude": 32.043131,
    "Longitude": -102.737994,
    "TotalBaseWaterVolume": 159601,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Thomas Crozier Unit #1H",
    "Latitude": 29.140517,
    "Longitude": -97.6427,
    "TotalBaseWaterVolume": 5377596,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch G #8",
    "Latitude": 32.22826349,
    "Longitude": -101.9840152,
    "TotalBaseWaterVolume": 213783,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch G #8",
    "Latitude": 32.22826349,
    "Longitude": -101.9840152,
    "TotalBaseWaterVolume": 218274,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Fulton 36 #2",
    "Latitude": 32.1936,
    "Longitude": -101.4258,
    "TotalBaseWaterVolume": 922954,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Glenn P Shoop C 5",
    "Latitude": 33.116522,
    "Longitude": -97.396939,
    "TotalBaseWaterVolume": 1017029,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kyle, J.R. 'A' 52HH",
    "Latitude": 32.09095154,
    "Longitude": -94.28526972,
    "TotalBaseWaterVolume": 7488366,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kyle, J.R. 'A' 16HH",
    "Latitude": 32.09159912,
    "Longitude": -94.29183388,
    "TotalBaseWaterVolume": 7488366,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "Worley #1",
    "Latitude": 31.2065783,
    "Longitude": -95.6359347,
    "TotalBaseWaterVolume": 3049788,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman-Mascho Unit/Well No. 565 (PA)",
    "Latitude": 32.23662,
    "Longitude": -102.68393,
    "TotalBaseWaterVolume": 28728,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newark E&P Operating, LLC",
    "WellName": "Thoroughbred 2H",
    "Latitude": 32.79561,
    "Longitude": -97.02023,
    "TotalBaseWaterVolume": 10081596,
    "StateName": "Texas",
    "CountyName": "Dallas"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Briscoe Ranch EF 2",
    "Latitude": 28.2608342,
    "Longitude": -99.8093842,
    "TotalBaseWaterVolume": 2221017,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Briscoe Ranch EF 3",
    "Latitude": 28.2601732,
    "Longitude": -99.8104385,
    "TotalBaseWaterVolume": 2265859,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Briscoe Ranch EF 4",
    "Latitude": 28.2595087,
    "Longitude": -99.8114945,
    "TotalBaseWaterVolume": 2202918,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe Catarina East GU1 3H",
    "Latitude": 28.2366117,
    "Longitude": -99.8158514,
    "TotalBaseWaterVolume": 7854714,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Leigh 22G",
    "Latitude": 31.886605,
    "Longitude": -102.2980433,
    "TotalBaseWaterVolume": 947058,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluescape Resources",
    "WellName": "HBR 3HA",
    "Latitude": 28.872819,
    "Longitude": -99.262578,
    "TotalBaseWaterVolume": 5215770,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Mayer SL #5013LH",
    "Latitude": 31.1546469,
    "Longitude": -101.1865306,
    "TotalBaseWaterVolume": 7475588,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "SAM 17 #1",
    "Latitude": 32.30735,
    "Longitude": -101.93699,
    "TotalBaseWaterVolume": 1088094,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wilson A #3",
    "Latitude": 31.89723842,
    "Longitude": -102.0741027,
    "TotalBaseWaterVolume": 1268568,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Shoop A 9",
    "Latitude": 33.12126,
    "Longitude": -97.403029,
    "TotalBaseWaterVolume": 922036,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN WADDELL ET AL 1957",
    "Latitude": 31.4977541,
    "Longitude": -102.6558784,
    "TotalBaseWaterVolume": 57452,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "WN WADDELL ET AL 1970",
    "Latitude": 31.4951954,
    "Longitude": -102.6591876,
    "TotalBaseWaterVolume": 49482,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Arkland Producing Co., Inc.",
    "WellName": "Barfield -5- 1",
    "Latitude": 31.8410261,
    "Longitude": -101.6520719,
    "TotalBaseWaterVolume": 568628,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Winslow B #4",
    "Latitude": 32.03228194,
    "Longitude": -101.686272,
    "TotalBaseWaterVolume": 1581376,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "WD Johnson 16S-2",
    "Latitude": 31.84111,
    "Longitude": -103.54967,
    "TotalBaseWaterVolume": 94556,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "McCampbell 21 #2",
    "Latitude": 32.30229652,
    "Longitude": -102.0080708,
    "TotalBaseWaterVolume": 1090782,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #1",
    "Latitude": 30.7615964,
    "Longitude": -97.0203175,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #2",
    "Latitude": 30.7624205,
    "Longitude": -97.0202995,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #3",
    "Latitude": 30.7634385,
    "Longitude": -97.0202831,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #4",
    "Latitude": 30.7640708,
    "Longitude": -97.0202656,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #5",
    "Latitude": 30.7648955,
    "Longitude": -97.0202484,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Virginia City Cole C 1H",
    "Latitude": 31.8347,
    "Longitude": -101.0854,
    "TotalBaseWaterVolume": 8369265,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #4045",
    "Latitude": 31.46375573,
    "Longitude": -101.9424484,
    "TotalBaseWaterVolume": 1304184,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "JAMEX, Inc.",
    "WellName": "Cox 1",
    "Latitude": 32.361528,
    "Longitude": -95.505596,
    "TotalBaseWaterVolume": 87777,
    "StateName": "Texas",
    "CountyName": "Van Zandt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Glenn P Shoop 5",
    "Latitude": 33.123941,
    "Longitude": -97.400452,
    "TotalBaseWaterVolume": 1014225,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Miranda 1777",
    "Latitude": 32.34074,
    "Longitude": -102.44171,
    "TotalBaseWaterVolume": 1468664,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Tyler 3705",
    "Latitude": 31.83618,
    "Longitude": -102.31231,
    "TotalBaseWaterVolume": 1198722,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Huntington Energy, L.L.C.",
    "WellName": "Courson 3H",
    "Latitude": 36.14576,
    "Longitude": -100.78028,
    "TotalBaseWaterVolume": 1186668,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Glenn P Shoop E 8",
    "Latitude": 33.123855,
    "Longitude": -97.396617,
    "TotalBaseWaterVolume": 1017725,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kyle, J.R. 'A' 53HH",
    "Latitude": 32.09095861,
    "Longitude": -94.28522167,
    "TotalBaseWaterVolume": 8951962,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Schendel Unit A-189 #2",
    "Latitude": 28.955781,
    "Longitude": -97.721778,
    "TotalBaseWaterVolume": 4302627,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Horizon Properties 1H",
    "Latitude": 30.812356,
    "Longitude": -95.334049,
    "TotalBaseWaterVolume": 2560158,
    "StateName": "Texas",
    "CountyName": "Walker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240A-2001",
    "Latitude": 32.244482,
    "Longitude": -102.283108,
    "TotalBaseWaterVolume": 1412124,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University A 4318-1",
    "Latitude": 32.4328,
    "Longitude": -102.65612,
    "TotalBaseWaterVolume": 83034,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cazar Energy, Inc.",
    "WellName": "Franke #1",
    "Latitude": 31.38,
    "Longitude": -99.82,
    "TotalBaseWaterVolume": 29946,
    "StateName": "Texas",
    "CountyName": "Concho"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe Catarina East GU1 2H",
    "Latitude": 28.23658,
    "Longitude": -99.815901,
    "TotalBaseWaterVolume": 7854714,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Todd \"17\" #2",
    "Latitude": 32.38207,
    "Longitude": -101.63147,
    "TotalBaseWaterVolume": 1435905,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hannathon Petroleum, LLC",
    "WellName": "Reagan 7 #1",
    "Latitude": 32.25214,
    "Longitude": -101.36515,
    "TotalBaseWaterVolume": 2841706,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Schenecker 18A #2",
    "Latitude": 32.17046,
    "Longitude": -102.03802,
    "TotalBaseWaterVolume": 737226,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -D-/Well No. 3",
    "Latitude": 32.44336,
    "Longitude": -101.05976,
    "TotalBaseWaterVolume": 51660,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "CHAMBERS 2-5",
    "Latitude": 35.5311,
    "Longitude": -100.382,
    "TotalBaseWaterVolume": 321054,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Sun 28",
    "Latitude": 32.2578,
    "Longitude": -102.6781,
    "TotalBaseWaterVolume": 131247,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Estancia Oil & Gas, LLC",
    "WellName": "MSW Brown-Portefield #2",
    "Latitude": 32.868484,
    "Longitude": -101.608516,
    "TotalBaseWaterVolume": 20370,
    "StateName": "Texas",
    "CountyName": "Borden"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "University 51-9 1H",
    "Latitude": 30.96095861,
    "Longitude": -101.4325856,
    "TotalBaseWaterVolume": 10438030,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "MWS 63 #3",
    "Latitude": 32.245,
    "Longitude": -101.4603,
    "TotalBaseWaterVolume": 866842,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Welch C #6",
    "Latitude": 31.94707221,
    "Longitude": -101.9699278,
    "TotalBaseWaterVolume": 1152100,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -D-/Well No. 4",
    "Latitude": 32.44416,
    "Longitude": -101.06459,
    "TotalBaseWaterVolume": 56154,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh Petroleum, Inc.",
    "WellName": "Crump 424 #2",
    "Latitude": 33.1841,
    "Longitude": -102.876,
    "TotalBaseWaterVolume": 55944,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kyle, J.R. 'A' 51HH",
    "Latitude": 32.09162954,
    "Longitude": -94.29180143,
    "TotalBaseWaterVolume": 7734174,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 6-39 #10",
    "Latitude": 32.46130687,
    "Longitude": -102.236406,
    "TotalBaseWaterVolume": 1216948,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Empresa Energy LLC",
    "WellName": "Murphy 61 1H",
    "Latitude": 33.47394,
    "Longitude": -102.22511,
    "TotalBaseWaterVolume": 4400256,
    "StateName": "Texas",
    "CountyName": "Hockley"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Mayer SL #5013UH",
    "Latitude": 31.1546458,
    "Longitude": -101.1866586,
    "TotalBaseWaterVolume": 8907402,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Evans D-1",
    "Latitude": 32.05573,
    "Longitude": -102.15048,
    "TotalBaseWaterVolume": 973198,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Thornton Trust 4-60 #2H",
    "Latitude": 31.46813676,
    "Longitude": -103.5799317,
    "TotalBaseWaterVolume": 3670787,
    "StateName": "Texas",
    "CountyName": "Reeves County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walter Exploration Company",
    "WellName": "Walter Smith Unit #20",
    "Latitude": 33.0408398,
    "Longitude": -100.1977431,
    "TotalBaseWaterVolume": 19530,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL West 41 7",
    "Latitude": 31.46566,
    "Longitude": -102.22491,
    "TotalBaseWaterVolume": 1476678,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "P.O.&G. Operating, LLC",
    "WellName": "Landon #2",
    "Latitude": 31.3518155,
    "Longitude": -102.8793637,
    "TotalBaseWaterVolume": 88662,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Layline Petroleum",
    "WellName": "I A B Northeast Unit 3202",
    "Latitude": 32.00855,
    "Longitude": -100.5223,
    "TotalBaseWaterVolume": 75852,
    "StateName": "Texas",
    "CountyName": "Coke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Lavaca -38-/Well No. 4",
    "Latitude": 31.66596,
    "Longitude": -101.44317,
    "TotalBaseWaterVolume": 611688,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hansen Kullin Unit #6H",
    "Latitude": 29.290214,
    "Longitude": -97.425242,
    "TotalBaseWaterVolume": 4596942,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forest Oil Corporation",
    "WellName": "Sample Vana 1H",
    "Latitude": 29.38873,
    "Longitude": -97.58881,
    "TotalBaseWaterVolume": 2465988,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Nail 1 #2",
    "Latitude": 32.073,
    "Longitude": -101.5927,
    "TotalBaseWaterVolume": 990968,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Wilkinson Ranch #12",
    "Latitude": 32.30834,
    "Longitude": -101.67677,
    "TotalBaseWaterVolume": 1018500,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Nobles #3314",
    "Latitude": 31.992105,
    "Longitude": -102.220525,
    "TotalBaseWaterVolume": 996912,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Augusta-Kenton 8H",
    "Latitude": 27.523315,
    "Longitude": -99.251116,
    "TotalBaseWaterVolume": 97794,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University E #4",
    "Latitude": 32.41809,
    "Longitude": -102.65449,
    "TotalBaseWaterVolume": 141979,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hancock A #4",
    "Latitude": 32.0585859,
    "Longitude": -101.7386988,
    "TotalBaseWaterVolume": 1536444,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Haley 120-1H",
    "Latitude": 35.8521725,
    "Longitude": -100.292194,
    "TotalBaseWaterVolume": 6475497,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Schneider A #1",
    "Latitude": 32.50932629,
    "Longitude": -101.99717,
    "TotalBaseWaterVolume": 1480836,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 10-20 #6H",
    "Latitude": 31.264881,
    "Longitude": -101.499,
    "TotalBaseWaterVolume": 8871261,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Augusta-Kenton 7H",
    "Latitude": 27.523302,
    "Longitude": -99.281109,
    "TotalBaseWaterVolume": 97147,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe Catarina East GU1 1H",
    "Latitude": 28.2365448,
    "Longitude": -99.8159521,
    "TotalBaseWaterVolume": 7524972,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Evans #6",
    "Latitude": 31.9850306,
    "Longitude": -101.7768765,
    "TotalBaseWaterVolume": 882252,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texakoma Operating, L.P.",
    "WellName": "MCMORDIE 23 1",
    "Latitude": 35.92178,
    "Longitude": -100.66533,
    "TotalBaseWaterVolume": 404979,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "WCCO 4 - ADA MORRIS 15",
    "Latitude": 33.103994,
    "Longitude": -97.477852,
    "TotalBaseWaterVolume": 1082586,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Clear Creek A 37BB",
    "Latitude": 32.3112212,
    "Longitude": -101.8311006,
    "TotalBaseWaterVolume": 1056468,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Shackelford 7 #10",
    "Latitude": 31.63747124,
    "Longitude": -101.9245809,
    "TotalBaseWaterVolume": 1920643,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kyle, J.R. 'A' 15HH",
    "Latitude": 32.09096553,
    "Longitude": -94.28517413,
    "TotalBaseWaterVolume": 8944916,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Three Bar Shallow Unit 101H",
    "Latitude": 32.142,
    "Longitude": -102.823,
    "TotalBaseWaterVolume": 2622511,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "University Frances 4010",
    "Latitude": 32.39621,
    "Longitude": -102.45215,
    "TotalBaseWaterVolume": 1442683,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "CC Lockhart & Brown B 13",
    "Latitude": 32.23303,
    "Longitude": -102.75477,
    "TotalBaseWaterVolume": 87721,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Glass/Well No. 9",
    "Latitude": 31.66468,
    "Longitude": -101.37165,
    "TotalBaseWaterVolume": 633528,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Dudley Taylor 1H",
    "Latitude": 32.6833833,
    "Longitude": -94.3628528,
    "TotalBaseWaterVolume": 3236956,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Nichols '15' #4",
    "Latitude": 32.39561,
    "Longitude": -101.67989,
    "TotalBaseWaterVolume": 1538293,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pfluger M 306",
    "Latitude": 31.51458,
    "Longitude": -101.25617,
    "TotalBaseWaterVolume": 89082,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Love #5H",
    "Latitude": 28.85853122,
    "Longitude": -97.92637372,
    "TotalBaseWaterVolume": 3975980,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Love 6H",
    "Latitude": 28.85844873,
    "Longitude": -97.92637739,
    "TotalBaseWaterVolume": 3823827,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "MABEE RANCH 139 812",
    "Latitude": 32.180264,
    "Longitude": -102.167317,
    "TotalBaseWaterVolume": 545741,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Brennand 'A'/Well No. 6",
    "Latitude": 32.40989,
    "Longitude": -101.08521,
    "TotalBaseWaterVolume": 52920,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Monroe 34-221/212 Unit 1H",
    "Latitude": 31.5762884,
    "Longitude": -103.3540518,
    "TotalBaseWaterVolume": 1240023,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Glass -A-/Well No. 9",
    "Latitude": 31.69192,
    "Longitude": -101.38067,
    "TotalBaseWaterVolume": 650496,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -2-/Well No. 2",
    "Latitude": 31.72913,
    "Longitude": -101.55882,
    "TotalBaseWaterVolume": 735084,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Spanky 2-2H",
    "Latitude": 34.35652,
    "Longitude": -99.627703,
    "TotalBaseWaterVolume": 1997620,
    "StateName": "Texas",
    "CountyName": "Hardeman"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Zybach 26-7H",
    "Latitude": 35.6331,
    "Longitude": -100.242053,
    "TotalBaseWaterVolume": 7121911,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Talbot 3 Unit 3C",
    "Latitude": 32.203867,
    "Longitude": -101.3343,
    "TotalBaseWaterVolume": 734202,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Dallas 1032-2HM",
    "Latitude": 36.37694444,
    "Longitude": -100.4461667,
    "TotalBaseWaterVolume": 1739186,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Madison 30 #1",
    "Latitude": 32.30954022,
    "Longitude": -101.9240682,
    "TotalBaseWaterVolume": 1122606,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Brennand -B-/Well No. 2",
    "Latitude": 32.43661,
    "Longitude": -101.06429,
    "TotalBaseWaterVolume": 42752,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Earp-Estes (SA) B 1H ?",
    "Latitude": 32.98464,
    "Longitude": -97.62113,
    "TotalBaseWaterVolume": 6227033,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Earp-Estes (SA) 1H",
    "Latitude": 32.98464,
    "Longitude": -97.62112,
    "TotalBaseWaterVolume": 374405,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker Rupert P AB #4",
    "Latitude": 31.32,
    "Longitude": -101.3021,
    "TotalBaseWaterVolume": 935176,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University NG 5021H",
    "Latitude": 31.117039,
    "Longitude": -101.858739,
    "TotalBaseWaterVolume": 6205608,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Mobil Jones 3",
    "Latitude": 32.25545,
    "Longitude": -102.667006,
    "TotalBaseWaterVolume": 89019,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Wind River 15",
    "Latitude": 32.2229,
    "Longitude": -102.7204,
    "TotalBaseWaterVolume": 49560,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Caddell-1072, etal No. 7201",
    "Latitude": 33.520424,
    "Longitude": -101.47695,
    "TotalBaseWaterVolume": 86405,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Lazy Seven Ranch 10H",
    "Latitude": 28.49574,
    "Longitude": -98.829984,
    "TotalBaseWaterVolume": 6549621,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Yates 82 #2",
    "Latitude": 32.52210268,
    "Longitude": -101.9265905,
    "TotalBaseWaterVolume": 1575324,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Chandler 38 #2",
    "Latitude": 32.2149083,
    "Longitude": -101.7127154,
    "TotalBaseWaterVolume": 1443953,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Hoopsnake 28 A #2",
    "Latitude": 32.0714,
    "Longitude": -101.4252,
    "TotalBaseWaterVolume": 1143638,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 2210 (PA)",
    "Latitude": 32.44065,
    "Longitude": -101.04603,
    "TotalBaseWaterVolume": 30870,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Valence Operating Company",
    "WellName": "Stewart #1",
    "Latitude": 31.55261,
    "Longitude": -94.328714,
    "TotalBaseWaterVolume": 523989,
    "StateName": "Texas",
    "CountyName": "Nacogdoches"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Pedro 850-2HM",
    "Latitude": 36.31891667,
    "Longitude": -100.5479722,
    "TotalBaseWaterVolume": 2177517,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Dennard #15",
    "Latitude": 32.14345,
    "Longitude": -94.2892342,
    "TotalBaseWaterVolume": 95832,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Steller Energy & Investment Corp",
    "WellName": "Eleanor  Hoppe #6",
    "Latitude": 32.00718,
    "Longitude": -101.2068,
    "TotalBaseWaterVolume": 1258362,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 15 3",
    "Latitude": 31.56005019,
    "Longitude": -102.1705086,
    "TotalBaseWaterVolume": 1340188.971,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Bum A 14",
    "Latitude": 32.098678,
    "Longitude": -102.721994,
    "TotalBaseWaterVolume": 396624,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Thornberry 4W-23",
    "Latitude": 32.27115,
    "Longitude": -102.72623,
    "TotalBaseWaterVolume": 56312,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Smith 7 #3",
    "Latitude": 32.03955,
    "Longitude": -101.73769,
    "TotalBaseWaterVolume": 1187424,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Lazy Seven Ranch 11H",
    "Latitude": 28.495649,
    "Longitude": -98.829919,
    "TotalBaseWaterVolume": 6822376,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Lazy Seven Ranch 12H",
    "Latitude": 28.495607,
    "Longitude": -98.829919,
    "TotalBaseWaterVolume": 6767678,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "APC Fee 1-40 3H",
    "Latitude": 31.6704926,
    "Longitude": -103.4540464,
    "TotalBaseWaterVolume": 1474376,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Clear Creek A 37D",
    "Latitude": 32.31078,
    "Longitude": -101.84122,
    "TotalBaseWaterVolume": 304164,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "WWJD #1",
    "Latitude": 30.8886114,
    "Longitude": -102.1965369,
    "TotalBaseWaterVolume": 13356,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "WWJD #4",
    "Latitude": 30.8844691,
    "Longitude": -102.1975275,
    "TotalBaseWaterVolume": 12222,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "WWJD #B-1",
    "Latitude": 30.8846478,
    "Longitude": -102.2096759,
    "TotalBaseWaterVolume": 12936,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jilpetco, Inc.",
    "WellName": "WWJD #7",
    "Latitude": 30.8806985,
    "Longitude": -102.2058977,
    "TotalBaseWaterVolume": 13524,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 58-19A #5",
    "Latitude": 31.3165941,
    "Longitude": -101.6874528,
    "TotalBaseWaterVolume": 1225292,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Flowers C  8-6",
    "Latitude": 35.5140932,
    "Longitude": -100.3634668,
    "TotalBaseWaterVolume": 813692,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "JV Wilson Trust 146 1H",
    "Latitude": 31.511253,
    "Longitude": -103.242481,
    "TotalBaseWaterVolume": 1973078,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh Petroleum, Inc.",
    "WellName": "Dickinson #4",
    "Latitude": 33.1442,
    "Longitude": -102.963,
    "TotalBaseWaterVolume": 145908,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Block 10 Fuhrman-Mascho Unit/Well No. 1030",
    "Latitude": 32.17961,
    "Longitude": -102.68915,
    "TotalBaseWaterVolume": 14322,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Pangea West 6507H",
    "Latitude": 31.0388,
    "Longitude": -101.5062,
    "TotalBaseWaterVolume": 10325364,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Weyman 22B #3",
    "Latitude": 31.88615113,
    "Longitude": -101.7278196,
    "TotalBaseWaterVolume": 1378050,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mayse 3068 11",
    "Latitude": 31.34643,
    "Longitude": -100.91228,
    "TotalBaseWaterVolume": 661164,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "APC Fee 1-40 4H",
    "Latitude": 31.6646394,
    "Longitude": -103.4493272,
    "TotalBaseWaterVolume": 1541639,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Glass 7 #13",
    "Latitude": 32.19612487,
    "Longitude": -102.054548,
    "TotalBaseWaterVolume": 1290568,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman-Mascho Unit/Well No. 412 (PA)",
    "Latitude": 32.22476,
    "Longitude": -102.71404,
    "TotalBaseWaterVolume": 23520,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "WK Ace Unit 1-1H",
    "Latitude": 28.363383,
    "Longitude": -98.981922,
    "TotalBaseWaterVolume": 2675610,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Hill 29-20 #1H",
    "Latitude": 31.92293,
    "Longitude": -102.11047,
    "TotalBaseWaterVolume": 868480,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Christian, Alice Estate - A-  GU 31H",
    "Latitude": 32.297416,
    "Longitude": -94.816899,
    "TotalBaseWaterVolume": 9649331,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mustang 3412",
    "Latitude": 32.246361,
    "Longitude": -102.246361,
    "TotalBaseWaterVolume": 960581,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Mildred Crnkovic H-1",
    "Latitude": 30.61572,
    "Longitude": -96.60962,
    "TotalBaseWaterVolume": 1154644,
    "StateName": "Texas",
    "CountyName": "Burleson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W N Waddell ET AL 881",
    "Latitude": 31.4862172,
    "Longitude": -102.6809595,
    "TotalBaseWaterVolume": 43504,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Blair Unit A 1",
    "Latitude": 29.072772,
    "Longitude": -97.637139,
    "TotalBaseWaterVolume": 3520916,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Schenecker 24A #3",
    "Latitude": 32.15339,
    "Longitude": -102.02677,
    "TotalBaseWaterVolume": 1042482,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Nichols 49P",
    "Latitude": 32.36782,
    "Longitude": -101.66697,
    "TotalBaseWaterVolume": 932976,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Reese #4",
    "Latitude": 32.17429675,
    "Longitude": -101.9214392,
    "TotalBaseWaterVolume": 191058,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek 45 #10",
    "Latitude": 31.656205,
    "Longitude": -101.994478,
    "TotalBaseWaterVolume": 1751694,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -A-/Well No. 1",
    "Latitude": 32.45585,
    "Longitude": -101.05526,
    "TotalBaseWaterVolume": 67175,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 10-14 #5H",
    "Latitude": 31.28026213,
    "Longitude": -101.5478916,
    "TotalBaseWaterVolume": 8183690,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 10-3 #4H",
    "Latitude": 31.280656,
    "Longitude": -101.518423,
    "TotalBaseWaterVolume": 8326415,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University NG 5021H",
    "Latitude": 31.117039,
    "Longitude": -101.858739,
    "TotalBaseWaterVolume": 6205608,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "CC Sentry #6",
    "Latitude": 32.2350526,
    "Longitude": -102.7450174,
    "TotalBaseWaterVolume": 76067,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Knight 18",
    "Latitude": 32.2352103,
    "Longitude": -102.7402667,
    "TotalBaseWaterVolume": 141303,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "La Vernia Oil",
    "WellName": "Alfred Doege",
    "Latitude": 29.3859864,
    "Longitude": -98.1141231,
    "TotalBaseWaterVolume": 20000,
    "StateName": "Texas",
    "CountyName": "Guadalupe"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "STS A Kennedy State Unit 1-1H",
    "Latitude": 28.216614,
    "Longitude": -98.848783,
    "TotalBaseWaterVolume": 3010518,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Poor Farm -C-/Well No. 4",
    "Latitude": 32.41883,
    "Longitude": -101.08552,
    "TotalBaseWaterVolume": 52704,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Shooter 916-2HM",
    "Latitude": 36.333414,
    "Longitude": -100.652216,
    "TotalBaseWaterVolume": 1560551,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wavle 1205 #5",
    "Latitude": 31.33925062,
    "Longitude": -101.6397839,
    "TotalBaseWaterVolume": 1462878,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Cowden2 2",
    "Latitude": 31.30307,
    "Longitude": -102.03365,
    "TotalBaseWaterVolume": 1444981,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D  5-11",
    "Latitude": 28.1053602,
    "Longitude": -99.7551667,
    "TotalBaseWaterVolume": 4999153,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D  3-11",
    "Latitude": 28.104623,
    "Longitude": -99.7572249,
    "TotalBaseWaterVolume": 5528131,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 4-11",
    "Latitude": 28.1051069,
    "Longitude": -99.756002,
    "TotalBaseWaterVolume": 4804081,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Johanson Oil",
    "WellName": "Walker 'B'",
    "Latitude": 29.2760445,
    "Longitude": -98.0456287,
    "TotalBaseWaterVolume": 20000,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh Petroleum, Inc.",
    "WellName": "Boyd B #2",
    "Latitude": 33.1407,
    "Longitude": -102.955,
    "TotalBaseWaterVolume": 147155,
    "StateName": "Texas",
    "CountyName": "Yokaum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Abbie Laine 3902",
    "Latitude": 31.7381527,
    "Longitude": -102.1582112,
    "TotalBaseWaterVolume": 1073781,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 13-45 #8",
    "Latitude": 32.32618,
    "Longitude": -102.7444,
    "TotalBaseWaterVolume": 135229,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "Ray 2602",
    "Latitude": 31.71907,
    "Longitude": -101.35285,
    "TotalBaseWaterVolume": 2645664,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "South Boxcar 35",
    "Latitude": 31.892301,
    "Longitude": -101.425627,
    "TotalBaseWaterVolume": 2243977,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Trinity -16-/Well No. 7",
    "Latitude": 31.71821,
    "Longitude": -101.49426,
    "TotalBaseWaterVolume": 612318,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SV Energy Company, LLC",
    "WellName": "Peeler 4",
    "Latitude": 28.57696,
    "Longitude": -98.4368,
    "TotalBaseWaterVolume": 114660,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Fred Hall Unit #3",
    "Latitude": 31.5812,
    "Longitude": -101.584,
    "TotalBaseWaterVolume": 820936,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 3604 (PA)",
    "Latitude": 32.4346,
    "Longitude": -101.03919,
    "TotalBaseWaterVolume": 25704,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mann2 2",
    "Latitude": 31.30586,
    "Longitude": -102.03894,
    "TotalBaseWaterVolume": 1156214,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Stephens 9 #1",
    "Latitude": 32.53926168,
    "Longitude": -102.0860482,
    "TotalBaseWaterVolume": 639168,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Gina #36L",
    "Latitude": 31.83789,
    "Longitude": -102.33316,
    "TotalBaseWaterVolume": 628793,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Moss #26",
    "Latitude": 31.7999881,
    "Longitude": -102.5787427,
    "TotalBaseWaterVolume": 61572,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Ratliff \"B\" #3",
    "Latitude": 31.8367853,
    "Longitude": -101.7121677,
    "TotalBaseWaterVolume": 873852,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Hoelscher 46 #2",
    "Latitude": 31.746344,
    "Longitude": -101.591498,
    "TotalBaseWaterVolume": 2382366,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Lazy E 1402H",
    "Latitude": 32.065971,
    "Longitude": -101.5681738,
    "TotalBaseWaterVolume": 10790575,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Guitar 26 #5",
    "Latitude": 32.1732,
    "Longitude": -101.4011,
    "TotalBaseWaterVolume": 963870,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "WK Unit 12-1H",
    "Latitude": 28.361381,
    "Longitude": -98.988814,
    "TotalBaseWaterVolume": 2860536,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SV Energy Company, LLC",
    "WellName": "Peeler 3",
    "Latitude": 28.58943,
    "Longitude": -98.43407,
    "TotalBaseWaterVolume": 115920,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Treadstone Energy Partners, LLC",
    "WellName": "Forrest 2H",
    "Latitude": 31.99733333,
    "Longitude": -95.992,
    "TotalBaseWaterVolume": 2062027,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ellis 36A #3",
    "Latitude": 32.310825,
    "Longitude": -101.7552526,
    "TotalBaseWaterVolume": 1419437,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Houser 36 # 1",
    "Latitude": 31.2276094,
    "Longitude": -103.379075,
    "TotalBaseWaterVolume": 788847,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "HAMPTON-SHOOP C SA `A` 1H",
    "Latitude": 33.168399,
    "Longitude": -97.49749,
    "TotalBaseWaterVolume": 3685584,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "HAMPTON-MCCURDY A SA `A` 1H",
    "Latitude": 33.168344,
    "Longitude": -97.49749,
    "TotalBaseWaterVolume": 9674280,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LCS Production Company",
    "WellName": "Naylor Jennings Sand Unit No. 6",
    "Latitude": 31.78894,
    "Longitude": -99.66892,
    "TotalBaseWaterVolume": 5040,
    "StateName": "Texas",
    "CountyName": "Coleman"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Weyman 26 #12",
    "Latitude": 31.88359985,
    "Longitude": -101.7091599,
    "TotalBaseWaterVolume": 1393228,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Vaqueros 27 #2",
    "Latitude": 31.859261,
    "Longitude": -101.304403,
    "TotalBaseWaterVolume": 726264,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST 40-6",
    "Latitude": 31.97684,
    "Longitude": -102.213405,
    "TotalBaseWaterVolume": 1336692,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texakoma Operating, L.P.",
    "WellName": "McMordie 126-3",
    "Latitude": 35.9147,
    "Longitude": -100.665,
    "TotalBaseWaterVolume": 437891,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LCS Production Company",
    "WellName": "Corsica No.7",
    "Latitude": 33.10972,
    "Longitude": -100.0444,
    "TotalBaseWaterVolume": 59934,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 3-10 #4",
    "Latitude": 31.28051846,
    "Longitude": -101.831333,
    "TotalBaseWaterVolume": 1447768,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Txl T 27 5",
    "Latitude": 31.53895,
    "Longitude": -102.14758,
    "TotalBaseWaterVolume": 1558784,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanguine Gas Exploration",
    "WellName": "Doug 2024",
    "Latitude": 35.1958,
    "Longitude": -100.0422,
    "TotalBaseWaterVolume": 491636,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 14 52HH",
    "Latitude": 32.18661801,
    "Longitude": -94.39209593,
    "TotalBaseWaterVolume": 7884903,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Midway D Unit #3",
    "Latitude": 33.436936,
    "Longitude": -97.394072,
    "TotalBaseWaterVolume": 141708,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "GAU 27-12",
    "Latitude": 31.8963,
    "Longitude": -102.62462,
    "TotalBaseWaterVolume": 167442,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Kaylina 15 #1",
    "Latitude": 32.02335289,
    "Longitude": -101.6923484,
    "TotalBaseWaterVolume": 1497267,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Pawelek A 1H",
    "Latitude": 28.962925,
    "Longitude": -97.884776,
    "TotalBaseWaterVolume": 4170264,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "C4 Ranch  10H",
    "Latitude": 28.464538,
    "Longitude": -99.036706,
    "TotalBaseWaterVolume": 6132902,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Sevengills 54-1-31 6H",
    "Latitude": 31.9136605,
    "Longitude": -103.6906894,
    "TotalBaseWaterVolume": 2614241,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Treadstone Energy Partners, LLC",
    "WellName": "Forrest 3H",
    "Latitude": 31.16783333,
    "Longitude": -96.10733333,
    "TotalBaseWaterVolume": 215962,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FireWheel Operating, LLC",
    "WellName": "Horwood 2151H",
    "Latitude": 31.8865151,
    "Longitude": -100.9407968,
    "TotalBaseWaterVolume": 8155088,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Schwartz 19-1",
    "Latitude": 31.8146227,
    "Longitude": -101.557106,
    "TotalBaseWaterVolume": 2701566,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Thornberry 7N-17",
    "Latitude": 32.25691,
    "Longitude": -102.715846,
    "TotalBaseWaterVolume": 90167,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Anita 24",
    "Latitude": 32.256639,
    "Longitude": -102.715472,
    "TotalBaseWaterVolume": 88757,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "McElreath 18",
    "Latitude": 32.26464,
    "Longitude": -102.68044,
    "TotalBaseWaterVolume": 88930,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Cinco Terry J 1003H",
    "Latitude": 30.9093,
    "Longitude": -101.1275,
    "TotalBaseWaterVolume": 274410,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Martini #3",
    "Latitude": 32.3835,
    "Longitude": -102.0222,
    "TotalBaseWaterVolume": 58594,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Prost 1H",
    "Latitude": 29.385053,
    "Longitude": -97.060451,
    "TotalBaseWaterVolume": 5385414,
    "StateName": "Texas",
    "CountyName": "Fayette"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Prost 2H",
    "Latitude": 29.647361,
    "Longitude": -97.101345,
    "TotalBaseWaterVolume": 3380007,
    "StateName": "Texas",
    "CountyName": "Fayette"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Johnson WD 22S-8",
    "Latitude": 31.83747,
    "Longitude": -103.54543,
    "TotalBaseWaterVolume": 227498,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Pier 22 #2",
    "Latitude": 32.1731,
    "Longitude": -102.0141,
    "TotalBaseWaterVolume": 1053900,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Grimes 1 #1",
    "Latitude": 32.22791,
    "Longitude": -102.01505,
    "TotalBaseWaterVolume": 1073646,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -A-/Well No. 2",
    "Latitude": 32.45437,
    "Longitude": -101.05478,
    "TotalBaseWaterVolume": 12894,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -A-/Well No. 3",
    "Latitude": 32.45541,
    "Longitude": -101.05734,
    "TotalBaseWaterVolume": 49980,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU3 4222",
    "Latitude": 31.61579017,
    "Longitude": -102.1428266,
    "TotalBaseWaterVolume": 956084,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240B-204",
    "Latitude": 32.292902,
    "Longitude": -102.276371,
    "TotalBaseWaterVolume": 1753500,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "FRASER 37-4",
    "Latitude": 31.717186,
    "Longitude": -102.2891,
    "TotalBaseWaterVolume": 728888,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Parker 'B' #14",
    "Latitude": 31.8183794,
    "Longitude": -102.575426,
    "TotalBaseWaterVolume": 61572,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Vee Bar 12 #2",
    "Latitude": 31.94517,
    "Longitude": -102.6728,
    "TotalBaseWaterVolume": 269988,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Culpepper #1H",
    "Latitude": 29.23936562,
    "Longitude": -97.5986917,
    "TotalBaseWaterVolume": 413784,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Lindsay 9 9I",
    "Latitude": 32.155996,
    "Longitude": -101.401262,
    "TotalBaseWaterVolume": 934374,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Trap Rock Oil, LTD.",
    "WellName": "La Brisa Ranch Partners 91 M8",
    "Latitude": 26.4593,
    "Longitude": -98.6528,
    "TotalBaseWaterVolume": 494004,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Cindy B 1316",
    "Latitude": 31.5420119,
    "Longitude": -102.2272772,
    "TotalBaseWaterVolume": 1258197,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "CBR 6A 44",
    "Latitude": 31.988144,
    "Longitude": -103.891586,
    "TotalBaseWaterVolume": 404669,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "CC Sentry #7",
    "Latitude": 32.23562,
    "Longitude": -102.74251,
    "TotalBaseWaterVolume": 82475,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "CC Sentry #8",
    "Latitude": 32.23535,
    "Longitude": -102.74242,
    "TotalBaseWaterVolume": 86745,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Baros Unit A 1",
    "Latitude": 29.181667,
    "Longitude": -97.49,
    "TotalBaseWaterVolume": 4215357,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Stone 46 #3",
    "Latitude": 32.07825584,
    "Longitude": -101.682569,
    "TotalBaseWaterVolume": 1486236,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -2-/Well No. 1",
    "Latitude": 31.74019,
    "Longitude": -101.56256,
    "TotalBaseWaterVolume": 627102,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "Goodwin 1",
    "Latitude": 31.13712,
    "Longitude": -95.4268,
    "TotalBaseWaterVolume": 648805,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Pawelek A 2H",
    "Latitude": 28.962956,
    "Longitude": -97.88472,
    "TotalBaseWaterVolume": 4313568,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gentry 3H",
    "Latitude": 28.408252,
    "Longitude": -98.376293,
    "TotalBaseWaterVolume": 3087630,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Cosper 37 #6",
    "Latitude": 32.0325,
    "Longitude": -101.5111,
    "TotalBaseWaterVolume": 979838,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Huntington Energy, L.L.C.",
    "WellName": "Courson 4H",
    "Latitude": 36.15821,
    "Longitude": -100.76993,
    "TotalBaseWaterVolume": 1531362,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 4-20 #2H",
    "Latitude": 31.15842,
    "Longitude": -101.793506,
    "TotalBaseWaterVolume": 8220739,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #3033",
    "Latitude": 31.47061283,
    "Longitude": -101.9978486,
    "TotalBaseWaterVolume": 1005382.863,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Txl 9 6",
    "Latitude": 31.57603,
    "Longitude": -102.18838,
    "TotalBaseWaterVolume": 1401523,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 6-11",
    "Latitude": 28.093611,
    "Longitude": -99.0743851,
    "TotalBaseWaterVolume": 6873150,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman-Mascho Unit/Well No. 391 (PA)",
    "Latitude": 32.24161,
    "Longitude": -102.70391,
    "TotalBaseWaterVolume": 28518,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "University Camille 113",
    "Latitude": 32.39217,
    "Longitude": -102.39187,
    "TotalBaseWaterVolume": 2064430,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 5121",
    "Latitude": 32.18789,
    "Longitude": -102.72092,
    "TotalBaseWaterVolume": 96356,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Willowbend Investments, Inc.",
    "WellName": "Whitehead #83",
    "Latitude": 31.08892,
    "Longitude": -99.80214,
    "TotalBaseWaterVolume": 3041,
    "StateName": "Texas",
    "CountyName": "Concho"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Ratliff 16-1",
    "Latitude": 31.8599583,
    "Longitude": -101.4331083,
    "TotalBaseWaterVolume": 2543670,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "New Gulf Resources, LLC",
    "WellName": "Lundy #1",
    "Latitude": 31.1294,
    "Longitude": -95.5679,
    "TotalBaseWaterVolume": 530922,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Fryar 5 5G",
    "Latitude": 32.200107,
    "Longitude": -101.352541,
    "TotalBaseWaterVolume": 435582,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "Robinson 5 31",
    "Latitude": 31.99177,
    "Longitude": -103.88645,
    "TotalBaseWaterVolume": 364478,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Slaughter 19C #1",
    "Latitude": 32.46479649,
    "Longitude": -101.8414386,
    "TotalBaseWaterVolume": 1021361,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mustang 3407",
    "Latitude": 32.24285,
    "Longitude": -102.240894,
    "TotalBaseWaterVolume": 872649.6,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Craig/Well No. 6",
    "Latitude": 31.7119,
    "Longitude": -101.39005,
    "TotalBaseWaterVolume": 649614,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Lloyd 10 #1",
    "Latitude": 32.04299051,
    "Longitude": -101.6954647,
    "TotalBaseWaterVolume": 1525884,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "STS C 6H",
    "Latitude": 28.348261,
    "Longitude": -98.751922,
    "TotalBaseWaterVolume": 3630522,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #11B",
    "Latitude": 29.2077733,
    "Longitude": -99.0927559,
    "TotalBaseWaterVolume": 19068,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "TP Land Trust C # 1906",
    "Latitude": 31.421,
    "Longitude": -102.0314,
    "TotalBaseWaterVolume": 663362,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #3039",
    "Latitude": 31.46392113,
    "Longitude": -101.9980701,
    "TotalBaseWaterVolume": 1020184.863,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 45 8",
    "Latitude": 31.4837,
    "Longitude": -102.14913,
    "TotalBaseWaterVolume": 193246,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 45 8",
    "Latitude": 31.4837,
    "Longitude": -102.14913,
    "TotalBaseWaterVolume": 193246,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 14 51HH",
    "Latitude": 32.18660337,
    "Longitude": -94.39214123,
    "TotalBaseWaterVolume": 8168801,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pfluger M 307",
    "Latitude": 31.50965,
    "Longitude": -101.26083,
    "TotalBaseWaterVolume": 794262,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University NG 6021H",
    "Latitude": 31.127025,
    "Longitude": -101.750558,
    "TotalBaseWaterVolume": 6369903,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Wallace-Morris (SA) \"A\" #1H",
    "Latitude": 33.160084,
    "Longitude": -97.489945,
    "TotalBaseWaterVolume": 5762382,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "TG Unit 36H",
    "Latitude": 28.654899,
    "Longitude": -98.425471,
    "TotalBaseWaterVolume": 6909431,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Worsham 6-15 #2H",
    "Latitude": 31.338386,
    "Longitude": -103.323092,
    "TotalBaseWaterVolume": 3057054,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 8-11",
    "Latitude": 28.1073889,
    "Longitude": -99.7510664,
    "TotalBaseWaterVolume": 2355335,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 7-11",
    "Latitude": 28.1066474,
    "Longitude": -99.7528075,
    "TotalBaseWaterVolume": 2379468,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Reed 31 10H",
    "Latitude": 35.50245,
    "Longitude": -100.18065,
    "TotalBaseWaterVolume": 6673863,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "T.D. RICHARDS 1",
    "Latitude": 33.3,
    "Longitude": -97.24,
    "TotalBaseWaterVolume": 471488,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Glass 7 #17",
    "Latitude": 32.20102193,
    "Longitude": -102.051702,
    "TotalBaseWaterVolume": 1425265,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Abraxas 31A #2",
    "Latitude": 32.44085249,
    "Longitude": -101.8470952,
    "TotalBaseWaterVolume": 1119780,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -A-/Well No. 5",
    "Latitude": 32.45407,
    "Longitude": -101.06309,
    "TotalBaseWaterVolume": 47880,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "3-M Energy Corporation",
    "WellName": "Pettit 14A #4",
    "Latitude": 31.4513702,
    "Longitude": -101.6005308,
    "TotalBaseWaterVolume": 435498,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Four Corners TXL Fee 2314U",
    "Latitude": 31.64226111,
    "Longitude": -102.2872139,
    "TotalBaseWaterVolume": 1016088,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "PETERSON-SPAIN `B` SA 1H",
    "Latitude": 33.082411,
    "Longitude": -97.444219,
    "TotalBaseWaterVolume": 6094662,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Ranch 5N-2",
    "Latitude": 32.2687966,
    "Longitude": -102.733704,
    "TotalBaseWaterVolume": 84645,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 1801 #4",
    "Latitude": 32.42478,
    "Longitude": -102.66866,
    "TotalBaseWaterVolume": 68376,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Embar 74",
    "Latitude": 32.06655,
    "Longitude": -102.67145,
    "TotalBaseWaterVolume": 229663,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mathers Ranch 4",
    "Latitude": 35.53298,
    "Longitude": -100.13235,
    "TotalBaseWaterVolume": 820790,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Trinity 37 #3",
    "Latitude": 32.21341592,
    "Longitude": -101.7027809,
    "TotalBaseWaterVolume": 1413425,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "LNE 9 #3",
    "Latitude": 32.3647,
    "Longitude": -101.90233,
    "TotalBaseWaterVolume": 1069866,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Schenecker 18A #4",
    "Latitude": 32.17463,
    "Longitude": -102.03402,
    "TotalBaseWaterVolume": 1001406,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #12B",
    "Latitude": 29.2085921,
    "Longitude": -99.0927428,
    "TotalBaseWaterVolume": 16128,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #13B",
    "Latitude": 29.2094172,
    "Longitude": -99.0927295,
    "TotalBaseWaterVolume": 17220,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #16B",
    "Latitude": 29.2077793,
    "Longitude": -99.0946368,
    "TotalBaseWaterVolume": 17136,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek 45 #5",
    "Latitude": 31.655114,
    "Longitude": -101.998158,
    "TotalBaseWaterVolume": 1698221,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Shirley -B-/Well No. 3815R",
    "Latitude": 31.83611,
    "Longitude": -102.26183,
    "TotalBaseWaterVolume": 640290,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -A-/Well No. 4",
    "Latitude": 32.45365,
    "Longitude": -101.05679,
    "TotalBaseWaterVolume": 30072,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Jack Russell 917-4HM",
    "Latitude": 36.348034,
    "Longitude": -100.659592,
    "TotalBaseWaterVolume": 1460767,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker D #3",
    "Latitude": 31.333,
    "Longitude": -101.3036,
    "TotalBaseWaterVolume": 1060924,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "3-M Energy Corporation",
    "WellName": "Haby 13 #3",
    "Latitude": 31.4582889,
    "Longitude": -101.5846974,
    "TotalBaseWaterVolume": 745752,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Peck State 258 #1",
    "Latitude": 31.306134,
    "Longitude": -103.511767,
    "TotalBaseWaterVolume": 759066,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Steller Energy & Investment Corp",
    "WellName": "Cousins #2",
    "Latitude": 31.99756,
    "Longitude": -101.19074,
    "TotalBaseWaterVolume": 1509532,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "OSBORN HEIRS COMPANY",
    "WellName": "Ella 209",
    "Latitude": 31.2931,
    "Longitude": -102.13383,
    "TotalBaseWaterVolume": 981191,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Neal Ranch 46 C 16",
    "Latitude": 31.48746,
    "Longitude": -102.13883,
    "TotalBaseWaterVolume": 1061882,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "WH Bush B 30",
    "Latitude": 32.30384,
    "Longitude": -102.74185,
    "TotalBaseWaterVolume": 97144,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Vaughan-Lenn 36 #3",
    "Latitude": 31.70525544,
    "Longitude": -102.3927072,
    "TotalBaseWaterVolume": 1136454,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg 3069 2",
    "Latitude": 31.34191,
    "Longitude": -100.91924,
    "TotalBaseWaterVolume": 220122,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #14B",
    "Latitude": 29.2094812,
    "Longitude": -99.0948948,
    "TotalBaseWaterVolume": 17850,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #15B",
    "Latitude": 29.2086038,
    "Longitude": -99.0949371,
    "TotalBaseWaterVolume": 18984,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Russell #32",
    "Latitude": 35.9991726,
    "Longitude": -101.6441815,
    "TotalBaseWaterVolume": 59000,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kudu UNIT 1",
    "Latitude": 30.85833,
    "Longitude": -96.555,
    "TotalBaseWaterVolume": 1222368,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bridwell Oil Company",
    "WellName": "Bridwell Archer Ranch -Q- 7",
    "Latitude": 33.4414,
    "Longitude": -98.5514,
    "TotalBaseWaterVolume": 1000,
    "StateName": "Texas",
    "CountyName": "Archer"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sandalwood Exploration, LP",
    "WellName": "R W Thompson #1",
    "Latitude": 29.99976,
    "Longitude": -96.12015,
    "TotalBaseWaterVolume": 24693,
    "StateName": "Texas",
    "CountyName": "Austin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Cinco Terry L 1802",
    "Latitude": 30.8363,
    "Longitude": -101.1333,
    "TotalBaseWaterVolume": 1522584,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Raw Oil & Gas, Inc.",
    "WellName": "DARRELL",
    "Latitude": 32.91704,
    "Longitude": -101.79893,
    "TotalBaseWaterVolume": 18943,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Frisbie Unit A #1",
    "Latitude": 29.059931,
    "Longitude": -97.608103,
    "TotalBaseWaterVolume": 3585791,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Lacy Creek 24 #2",
    "Latitude": 31.737089,
    "Longitude": -101.341845,
    "TotalBaseWaterVolume": 2170931,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg 3069 7",
    "Latitude": 31.34361,
    "Longitude": -100.9157,
    "TotalBaseWaterVolume": 183918,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mabee Ranch 139 911",
    "Latitude": 32.181208,
    "Longitude": -102.179044,
    "TotalBaseWaterVolume": 752580,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "McAdams 10 #4",
    "Latitude": 32.27712991,
    "Longitude": -101.7541292,
    "TotalBaseWaterVolume": 1481593,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Dallas Production, Inc",
    "WellName": "Ryan 1H",
    "Latitude": 32.745193,
    "Longitude": -98.212037,
    "TotalBaseWaterVolume": 41958,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Barbee/Well No. 1",
    "Latitude": 31.65105,
    "Longitude": -101.35854,
    "TotalBaseWaterVolume": 606690,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "3-M Energy Corporation",
    "WellName": "Haby 13 #2",
    "Latitude": 31.4615314,
    "Longitude": -101.5857078,
    "TotalBaseWaterVolume": 785232,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 29 #4",
    "Latitude": 31.2412291,
    "Longitude": -103.4552581,
    "TotalBaseWaterVolume": 772833.7666,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 43 7",
    "Latitude": 31.47331,
    "Longitude": -102.19121,
    "TotalBaseWaterVolume": 276045,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Reed 31 13H",
    "Latitude": 35.5341,
    "Longitude": -100.17658,
    "TotalBaseWaterVolume": 4238871,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texas Energy Holdings, Inc.",
    "WellName": "KMA Unit 62",
    "Latitude": 33.9286915,
    "Longitude": -98.8120936,
    "TotalBaseWaterVolume": 91602,
    "StateName": "Texas",
    "CountyName": "Wichita"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "McCasland 1",
    "Latitude": 32.55363,
    "Longitude": -103.02987,
    "TotalBaseWaterVolume": 175182,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bluestem Energy Holdings, LLC",
    "WellName": "Brunson #5",
    "Latitude": 31.86195,
    "Longitude": -101.72444,
    "TotalBaseWaterVolume": 914256,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #6",
    "Latitude": 30.7616114,
    "Longitude": -97.0212723,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #7",
    "Latitude": 30.7624361,
    "Longitude": -97.0212553,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #8",
    "Latitude": 30.7632617,
    "Longitude": -97.0212388,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #9",
    "Latitude": 30.7640855,
    "Longitude": -97.0212206,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #10",
    "Latitude": 30.7649113,
    "Longitude": -97.0212042,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University NG 6021H",
    "Latitude": 31.127025,
    "Longitude": -101.750762,
    "TotalBaseWaterVolume": 6369903,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walter Exploration Company",
    "WellName": "Walter Smith Unit #21",
    "Latitude": 33.0334719,
    "Longitude": -100.1961723,
    "TotalBaseWaterVolume": 32004,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 4-20 #3H",
    "Latitude": 31.159307,
    "Longitude": -101.795608,
    "TotalBaseWaterVolume": 8047521,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 17-6 2",
    "Latitude": 32.60822,
    "Longitude": -103.17283,
    "TotalBaseWaterVolume": 80716,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman-Mascho Unit/Well No. 295 (PA)",
    "Latitude": 32.23877,
    "Longitude": -102.70753,
    "TotalBaseWaterVolume": 37170,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Allar 37 37C",
    "Latitude": 32.31759169,
    "Longitude": -101.7475783,
    "TotalBaseWaterVolume": 932820,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch C #7",
    "Latitude": 32.21631576,
    "Longitude": -101.9218884,
    "TotalBaseWaterVolume": 1262428,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hopper 36 #7",
    "Latitude": 32.31624591,
    "Longitude": -101.8290304,
    "TotalBaseWaterVolume": 1283138,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Glover 11H Stage",
    "Latitude": 28.654536,
    "Longitude": -98.414632,
    "TotalBaseWaterVolume": 6373315,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Dollarhide Unit 27-22C",
    "Latitude": 32.15994,
    "Longitude": -103.05082,
    "TotalBaseWaterVolume": 141583,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Dollarhide Unit 23-05CT",
    "Latitude": 32.16012056,
    "Longitude": -103.0284003,
    "TotalBaseWaterVolume": 146407,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Three Bar Shallow Unit 105H",
    "Latitude": 32.144,
    "Longitude": -102.819,
    "TotalBaseWaterVolume": 6898735,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Lacy Creek 36 #1",
    "Latitude": 31.718153,
    "Longitude": -101.322685,
    "TotalBaseWaterVolume": 2170138,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI-Glass 34 #1",
    "Latitude": 31.79837138,
    "Longitude": -101.4930703,
    "TotalBaseWaterVolume": 2704412,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI-Hoch 29 #1",
    "Latitude": 31.79538472,
    "Longitude": -101.536718,
    "TotalBaseWaterVolume": 2793857,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Scharbauer, C. JR. 4216M",
    "Latitude": 31.85750278,
    "Longitude": -102.1151278,
    "TotalBaseWaterVolume": 887675,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Callon Petroleum Operating Company",
    "WellName": "Neal #651H",
    "Latitude": 31.3003,
    "Longitude": -101.994,
    "TotalBaseWaterVolume": 8500000,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Reed 31 11H",
    "Latitude": 35.48937,
    "Longitude": -100.22029,
    "TotalBaseWaterVolume": 4877292,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University Andrews 210",
    "Latitude": 32.12972778,
    "Longitude": -102.721581,
    "TotalBaseWaterVolume": 318781,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "CC Cities Service A 10",
    "Latitude": 32.2335,
    "Longitude": -102.7477,
    "TotalBaseWaterVolume": 72634,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Parker C 15",
    "Latitude": 32.19859,
    "Longitude": -102.72683,
    "TotalBaseWaterVolume": 44268,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Leona C 4",
    "Latitude": 32.2226,
    "Longitude": -102.7307,
    "TotalBaseWaterVolume": 88536,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 6N-10",
    "Latitude": 32.1906,
    "Longitude": -102.7368,
    "TotalBaseWaterVolume": 115287,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Bearkat 904H",
    "Latitude": 31.878132,
    "Longitude": -101.4278338,
    "TotalBaseWaterVolume": 7688826,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "Ray 2701",
    "Latitude": 31.71889,
    "Longitude": -101.35787,
    "TotalBaseWaterVolume": 2645664,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "VS Trust #1",
    "Latitude": 31.9883,
    "Longitude": -101.61547,
    "TotalBaseWaterVolume": 1171170,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Silver Creek Oil & Gas, LLC",
    "WellName": "GC Scarborough 6H",
    "Latitude": 33.754556,
    "Longitude": -96.873675,
    "TotalBaseWaterVolume": 3036091,
    "StateName": "Texas",
    "CountyName": "Grayson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Yates Unit 20K",
    "Latitude": 32.33683,
    "Longitude": -101.82599,
    "TotalBaseWaterVolume": 587274,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Casselman 10 #28",
    "Latitude": 32.04614,
    "Longitude": -102.22032,
    "TotalBaseWaterVolume": 1103659.492,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Mashburn #5",
    "Latitude": 32.0351,
    "Longitude": -101.8373,
    "TotalBaseWaterVolume": 1056000,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -C-/Well No. 1",
    "Latitude": 32.45113,
    "Longitude": -101.05958,
    "TotalBaseWaterVolume": 55524,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "3-M Energy Corporation",
    "WellName": "Haby 13 #1",
    "Latitude": 31.4606468,
    "Longitude": -101.5898163,
    "TotalBaseWaterVolume": 599340,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Morgan `A` 3",
    "Latitude": 31.41674,
    "Longitude": -101.9292416,
    "TotalBaseWaterVolume": 338146,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "TROXELL-KELLEY SA 1H",
    "Latitude": 33.08936,
    "Longitude": -97.45265,
    "TotalBaseWaterVolume": 4191810,
    "StateName": "Texas",
    "CountyName": "WISE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Leona D #8",
    "Latitude": 32.21825,
    "Longitude": -102.73464,
    "TotalBaseWaterVolume": 110734,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45D 905H",
    "Latitude": 30.9738,
    "Longitude": -101.2412,
    "TotalBaseWaterVolume": 11808552,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wheeler-1046 #4658",
    "Latitude": 33.525862,
    "Longitude": -101.496778,
    "TotalBaseWaterVolume": 76120,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Ratliff B 1611",
    "Latitude": 32.008231,
    "Longitude": -102.323652,
    "TotalBaseWaterVolume": 1749594,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Range Resources Corporation",
    "WellName": "Edmonson A 3630",
    "Latitude": 31.726167,
    "Longitude": -101.315111,
    "TotalBaseWaterVolume": 151014,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Frio/Well No. 4",
    "Latitude": 31.68243,
    "Longitude": -101.45639,
    "TotalBaseWaterVolume": 648312,
    "StateName": "Texas",
    "CountyName": "Glassock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Parks 17 #2",
    "Latitude": 32.23141,
    "Longitude": -101.691375,
    "TotalBaseWaterVolume": 979356,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Navidad Resources LLC",
    "WellName": "FSPU 8-2",
    "Latitude": 30.9621,
    "Longitude": -95.6938,
    "TotalBaseWaterVolume": 1809486,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Abraxas 16 #1",
    "Latitude": 32.48076356,
    "Longitude": -101.8376824,
    "TotalBaseWaterVolume": 1366240,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Abraxas 16 #1",
    "Latitude": 32.48076356,
    "Longitude": -101.8376824,
    "TotalBaseWaterVolume": 1366240,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Davis-Baker Unit #1",
    "Latitude": 32.4420829,
    "Longitude": -101.6941965,
    "TotalBaseWaterVolume": 1362893,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Morris 8 #2",
    "Latitude": 32.2419,
    "Longitude": -101.4311,
    "TotalBaseWaterVolume": 995790,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University Cons. IV 3007",
    "Latitude": 32.35306,
    "Longitude": -102.80446,
    "TotalBaseWaterVolume": 239022,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Argo Knight #21",
    "Latitude": 32.249005,
    "Longitude": -102.74469,
    "TotalBaseWaterVolume": 82519,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "University Ruth 403",
    "Latitude": 32.37334,
    "Longitude": -102.44977,
    "TotalBaseWaterVolume": 1564802,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "MA Thornberry Cons. I #58",
    "Latitude": 32.2776,
    "Longitude": -102.6987,
    "TotalBaseWaterVolume": 87271,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Hoelscher 46 #3",
    "Latitude": 31.750731,
    "Longitude": -101.579662,
    "TotalBaseWaterVolume": 2159472,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Wilkinson Ranch #331",
    "Latitude": 32.32189,
    "Longitude": -101.66998,
    "TotalBaseWaterVolume": 1013460,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg 3069 7",
    "Latitude": 31.34361,
    "Longitude": -100.9157,
    "TotalBaseWaterVolume": 183918,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Woods B #2B",
    "Latitude": 29.1860755,
    "Longitude": -99.0612534,
    "TotalBaseWaterVolume": 37128,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Woods B #1B",
    "Latitude": 29.1869836,
    "Longitude": -99.0613542,
    "TotalBaseWaterVolume": 35616,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Teinert B #2",
    "Latitude": 31.92235243,
    "Longitude": -101.994456,
    "TotalBaseWaterVolume": 548814,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Casselman 40 #37",
    "Latitude": 32.07683,
    "Longitude": -102.21835,
    "TotalBaseWaterVolume": 1554488.598,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Scharbauer C. JR. 4216M",
    "Latitude": 31.85750278,
    "Longitude": -102.1151278,
    "TotalBaseWaterVolume": 846489,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Womack -A-/Well No. 6",
    "Latitude": 32.45146,
    "Longitude": -101.06705,
    "TotalBaseWaterVolume": 42294,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker 27 #7",
    "Latitude": 31.3333,
    "Longitude": -101.3026,
    "TotalBaseWaterVolume": 1074204,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker 27 #5",
    "Latitude": 31.3351,
    "Longitude": -101.3103,
    "TotalBaseWaterVolume": 1047954,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "McGarraugh 2H",
    "Latitude": 36.0416231,
    "Longitude": -100.9078642,
    "TotalBaseWaterVolume": 1767612,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Eden 11-8H",
    "Latitude": 35.60544528,
    "Longitude": -100.1936006,
    "TotalBaseWaterVolume": 8378976,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Huff 32-7H",
    "Latitude": 35.48896,
    "Longitude": -100.16491,
    "TotalBaseWaterVolume": 5447345,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240B-902",
    "Latitude": 32.273017,
    "Longitude": -102.279469,
    "TotalBaseWaterVolume": 1922004,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 6N-12",
    "Latitude": 32.19212,
    "Longitude": -102.74173,
    "TotalBaseWaterVolume": 70140,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Koehler Unit A 1",
    "Latitude": 29.092442,
    "Longitude": -97.571586,
    "TotalBaseWaterVolume": 2682120,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "TXL 44-43 #23",
    "Latitude": 31.87603,
    "Longitude": -102.62801,
    "TotalBaseWaterVolume": 140743,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Royalty Land & Dev. Co., Inc.",
    "WellName": "Lois Blalock #B708",
    "Latitude": 31.9317261,
    "Longitude": -101.6985377,
    "TotalBaseWaterVolume": 1654746,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "McPhail  Gas Unit 1H",
    "Latitude": 32.65488,
    "Longitude": -94.48802,
    "TotalBaseWaterVolume": 10034234,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Halcomb 28 1",
    "Latitude": 31.28911,
    "Longitude": -100.9832,
    "TotalBaseWaterVolume": 378743,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Apple #2",
    "Latitude": 32.1426,
    "Longitude": -101.4152,
    "TotalBaseWaterVolume": 699490,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Armstrong 36 #2",
    "Latitude": 31.77584,
    "Longitude": -102.01021,
    "TotalBaseWaterVolume": 1148490,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Fryar 4-4N",
    "Latitude": 32.32821,
    "Longitude": -101.57501,
    "TotalBaseWaterVolume": 12182,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Baumann E #8",
    "Latitude": 31.9573889,
    "Longitude": -102.005744,
    "TotalBaseWaterVolume": 1478011,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #4046",
    "Latitude": 31.45764251,
    "Longitude": -101.9416228,
    "TotalBaseWaterVolume": 1377855,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pegasus Field Unit 3 4910",
    "Latitude": 31.60248,
    "Longitude": -102.14043,
    "TotalBaseWaterVolume": 856976,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "LUNSFORD 3-9H",
    "Latitude": 35.559528,
    "Longitude": -100.276167,
    "TotalBaseWaterVolume": 2959706,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "PATTERSON M L GU A 8",
    "Latitude": 33.10852,
    "Longitude": -97.51392,
    "TotalBaseWaterVolume": 949872,
    "StateName": "Texas",
    "CountyName": "WISE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Morrison 1033H",
    "Latitude": 35.48905,
    "Longitude": -100.4545,
    "TotalBaseWaterVolume": 5099512,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Terrace Energy",
    "WellName": "Swift 2H",
    "Latitude": 31.33214,
    "Longitude": -95.68285,
    "TotalBaseWaterVolume": 2662514,
    "StateName": "Texas",
    "CountyName": "Leon"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 1-30 #2H",
    "Latitude": 31.2004767,
    "Longitude": -101.769308,
    "TotalBaseWaterVolume": 9246264,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 11-11",
    "Latitude": 28.094056,
    "Longitude": -99.736893,
    "TotalBaseWaterVolume": 7481781,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D  9-11",
    "Latitude": 28.1086485,
    "Longitude": -99.7507811,
    "TotalBaseWaterVolume": 2308533,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 10-11",
    "Latitude": 28.1091816,
    "Longitude": -99.7495897,
    "TotalBaseWaterVolume": 2247557,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University Andrews 122",
    "Latitude": 32.13321,
    "Longitude": -102.72724,
    "TotalBaseWaterVolume": 37123,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "MA Thornberry Et al Est. NWS #14",
    "Latitude": 32.266501,
    "Longitude": -102.68775,
    "TotalBaseWaterVolume": 84083,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Parker C 12",
    "Latitude": 32.19952,
    "Longitude": -102.72851,
    "TotalBaseWaterVolume": 39144,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -14-/Well No. 1",
    "Latitude": 31.71078,
    "Longitude": -101.56229,
    "TotalBaseWaterVolume": 670488,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Sharon McCaffity 4H",
    "Latitude": 32.278896,
    "Longitude": -97.5041283,
    "TotalBaseWaterVolume": 6155511,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Allar 37 37D",
    "Latitude": 32.315125,
    "Longitude": -101.7528476,
    "TotalBaseWaterVolume": 865443,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Robason 18 #1",
    "Latitude": 32.492646,
    "Longitude": -102.03976,
    "TotalBaseWaterVolume": 2635794,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 2415W",
    "Latitude": 32.43952,
    "Longitude": -101.04717,
    "TotalBaseWaterVolume": 41580,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "HELMS L V 3",
    "Latitude": 33.1693,
    "Longitude": -97.45069,
    "TotalBaseWaterVolume": 1016190,
    "StateName": "Texas",
    "CountyName": "WISE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 6 55HH",
    "Latitude": 32.18374899,
    "Longitude": -94.36138315,
    "TotalBaseWaterVolume": 7092630,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 13-1 1",
    "Latitude": 32.43012,
    "Longitude": -102.73089,
    "TotalBaseWaterVolume": 28182,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 6-21",
    "Latitude": 32.18737,
    "Longitude": -102.73454,
    "TotalBaseWaterVolume": 83534,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 6N-14",
    "Latitude": 32.19226,
    "Longitude": -102.73519,
    "TotalBaseWaterVolume": 78960,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Killam Oil Co., Ltd.",
    "WellName": "Williams Trust #1",
    "Latitude": 28.514773,
    "Longitude": -98.510405,
    "TotalBaseWaterVolume": 22386,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Raymond Eula #2",
    "Latitude": 32.38301,
    "Longitude": -101.63321,
    "TotalBaseWaterVolume": 1115604,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Schmidt Family 02 01H",
    "Latitude": 28.598733,
    "Longitude": -98.089508,
    "TotalBaseWaterVolume": 3016734,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 239-421",
    "Latitude": 32.257449,
    "Longitude": -102.167765,
    "TotalBaseWaterVolume": 1694280,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Hale Viola #2",
    "Latitude": 32.264,
    "Longitude": -101.4653,
    "TotalBaseWaterVolume": 869640,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 2172W",
    "Latitude": 32.42816,
    "Longitude": -101.05792,
    "TotalBaseWaterVolume": 30395,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Merrian 17 #1",
    "Latitude": 31.2062379,
    "Longitude": -103.4550628,
    "TotalBaseWaterVolume": 781998,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Huff 32 8H",
    "Latitude": 35.48841,
    "Longitude": -100.15173,
    "TotalBaseWaterVolume": 5557906,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Huff 32 9H",
    "Latitude": 35.48795,
    "Longitude": -100.14938,
    "TotalBaseWaterVolume": 6587452,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanguine Gas Exploration",
    "WellName": "Bass 8059H",
    "Latitude": 35.2433,
    "Longitude": -100.042,
    "TotalBaseWaterVolume": 2648044,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanguine Gas Exploration",
    "WellName": "Bass 9059H",
    "Latitude": 35.2433,
    "Longitude": -100.0421,
    "TotalBaseWaterVolume": 2630896,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Eden 11-6H",
    "Latitude": 35.61,
    "Longitude": -100.19,
    "TotalBaseWaterVolume": 8360377,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "BRYAN-ASKEY GAS UNIT 7",
    "Latitude": 33.12713,
    "Longitude": -97.41423,
    "TotalBaseWaterVolume": 1093344,
    "StateName": "Texas",
    "CountyName": "WISE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Carolyn 8609R",
    "Latitude": 31.367427,
    "Longitude": -102.058829,
    "TotalBaseWaterVolume": 1345298,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Byrd 34-170 Unit 1H",
    "Latitude": 31.4908184,
    "Longitude": -103.3435768,
    "TotalBaseWaterVolume": 1266934,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Morrison 1133H",
    "Latitude": 35.48895,
    "Longitude": -100.13811,
    "TotalBaseWaterVolume": 7470894,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Bohannon 26 #13",
    "Latitude": 32.10555,
    "Longitude": -102.26576,
    "TotalBaseWaterVolume": 1615698,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 457H",
    "Latitude": 31.54323,
    "Longitude": -102.67716,
    "TotalBaseWaterVolume": 2502696,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Clyde Cowden 228",
    "Latitude": 31.92595,
    "Longitude": -102.580269,
    "TotalBaseWaterVolume": 148171,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Foster 7 #1",
    "Latitude": 32.62913556,
    "Longitude": -102.5024617,
    "TotalBaseWaterVolume": 1372183,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Royalty Land & Dev. Co., Inc.",
    "WellName": "Doralee #2",
    "Latitude": 31.95854,
    "Longitude": -101.53452,
    "TotalBaseWaterVolume": 1950662,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Llano -8A-/Well No. 4",
    "Latitude": 31.72933,
    "Longitude": -101.51148,
    "TotalBaseWaterVolume": 1662906,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mayse 3068 6",
    "Latitude": 31.35797,
    "Longitude": -100.91325,
    "TotalBaseWaterVolume": 97028,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cheyenne Petroleum Company",
    "WellName": "Zizinia 1H",
    "Latitude": 28.61343,
    "Longitude": -98.86619,
    "TotalBaseWaterVolume": 4075470,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Vollmert 9H",
    "Latitude": 35.85463,
    "Longitude": -100.54348,
    "TotalBaseWaterVolume": 23793,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Cox 19 #6",
    "Latitude": 31.44098876,
    "Longitude": -101.9133124,
    "TotalBaseWaterVolume": 1475953.863,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "JT Lindley #9",
    "Latitude": 32.2783,
    "Longitude": -102.70831,
    "TotalBaseWaterVolume": 45906,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "MA Thornberry Et Al Est NWS 15",
    "Latitude": 32.26665,
    "Longitude": -102.68664,
    "TotalBaseWaterVolume": 87403,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 5125",
    "Latitude": 32.19642,
    "Longitude": -102.72348,
    "TotalBaseWaterVolume": 66864,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Cantu B 3H",
    "Latitude": 29.179093,
    "Longitude": -97.454787,
    "TotalBaseWaterVolume": 3244080,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ICA Energy Operating, LLC",
    "WellName": "Parker Ranchland 22 #2",
    "Latitude": 31.8153,
    "Longitude": -102.56918,
    "TotalBaseWaterVolume": 126444,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Goodrich Petroleum Company, LLC",
    "WellName": "Burns Ranch A 38H",
    "Latitude": 28.5555861,
    "Longitude": -99.022556,
    "TotalBaseWaterVolume": 6780496,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "CBR 16 #1H",
    "Latitude": 31.9696,
    "Longitude": -103.8661,
    "TotalBaseWaterVolume": 3390868,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Clear Creek A 37A",
    "Latitude": 32.31389,
    "Longitude": -101.82763,
    "TotalBaseWaterVolume": 11017,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "RBP Trust #1",
    "Latitude": 32.38714,
    "Longitude": -101.79408,
    "TotalBaseWaterVolume": 1074906,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Hazelwood 34 #2",
    "Latitude": 32.1702,
    "Longitude": -101.9398,
    "TotalBaseWaterVolume": 895314,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker C Enron #7",
    "Latitude": 31.3218,
    "Longitude": -101.2906,
    "TotalBaseWaterVolume": 967862,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Apollo 2 #4",
    "Latitude": 31.2894219,
    "Longitude": -103.3966759,
    "TotalBaseWaterVolume": 1472310,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Doubledays 1H",
    "Latitude": 31.02174,
    "Longitude": -96.6067,
    "TotalBaseWaterVolume": 1648878,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pegasus Field Unit 3 3905",
    "Latitude": 31.6193,
    "Longitude": -102.12746,
    "TotalBaseWaterVolume": 1009760,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Elmer 33-67/Well No. 3",
    "Latitude": 31.65003,
    "Longitude": -103.49832,
    "TotalBaseWaterVolume": 984690,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Monroe 34-220/211 Unit 1H",
    "Latitude": 31.5757017,
    "Longitude": -103.3569011,
    "TotalBaseWaterVolume": 1081481,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "WCCO 4 - MILLER `B1` 7",
    "Latitude": 33.10458,
    "Longitude": -97.50826,
    "TotalBaseWaterVolume": 1082550,
    "StateName": "Texas",
    "CountyName": "WISE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Morrison 1233H",
    "Latitude": 35.50047,
    "Longitude": -100.181923,
    "TotalBaseWaterVolume": 4520523,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Ranch 5N-11",
    "Latitude": 32.2697,
    "Longitude": -102.7326,
    "TotalBaseWaterVolume": 30618,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Benson #1",
    "Latitude": 31.875653,
    "Longitude": -101.332767,
    "TotalBaseWaterVolume": 147672,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "W D Mackey 1H",
    "Latitude": 32.651611,
    "Longitude": -94.713361,
    "TotalBaseWaterVolume": 4468792,
    "StateName": "Texas",
    "CountyName": "Gregg"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Goodrich Petroleum Company, LLC",
    "WellName": "Burns Ranch A 6H",
    "Latitude": 28.5556096,
    "Longitude": -99.0224997,
    "TotalBaseWaterVolume": 6998326,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Karen Wheeler 2H",
    "Latitude": 28.343656,
    "Longitude": -98.534233,
    "TotalBaseWaterVolume": 3529365,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Teinert E #2",
    "Latitude": 31.92919146,
    "Longitude": -101.9898594,
    "TotalBaseWaterVolume": 1222797,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "Louis Werner #6H",
    "Latitude": 32.048201,
    "Longitude": -94.190986,
    "TotalBaseWaterVolume": 5412550,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "C H Sugg B #3",
    "Latitude": 31.53835288,
    "Longitude": -101.4512858,
    "TotalBaseWaterVolume": 1368548.863,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "C H Sugg B #3",
    "Latitude": 31.53835288,
    "Longitude": -101.4512858,
    "TotalBaseWaterVolume": 1368548.863,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "University 18-40 3H",
    "Latitude": 31.5964009,
    "Longitude": -103.338668,
    "TotalBaseWaterVolume": 1295031,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "FARLOW J F GAS UNIT A 3",
    "Latitude": 33.07596,
    "Longitude": -97.55365,
    "TotalBaseWaterVolume": 1016904,
    "StateName": "Texas",
    "CountyName": "WISE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Lasseter & Eppright #1",
    "Latitude": 28.33333333,
    "Longitude": -99.66388888,
    "TotalBaseWaterVolume": 2840412,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "McCloskey 42A #1",
    "Latitude": 32.51295662,
    "Longitude": -101.9894091,
    "TotalBaseWaterVolume": 1618605,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Hasel 25 2",
    "Latitude": 31.33097,
    "Longitude": -102.04228,
    "TotalBaseWaterVolume": 1179973,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Cantu B #4H",
    "Latitude": 29.17908056,
    "Longitude": -97.45483056,
    "TotalBaseWaterVolume": 2722403,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ivas Smith 02 01H",
    "Latitude": 28.536908,
    "Longitude": -98.259399,
    "TotalBaseWaterVolume": 3673068,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Walter Kelly 19 #3",
    "Latitude": 32.0619,
    "Longitude": -101.5132,
    "TotalBaseWaterVolume": 945944,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "RAMSEY G W 1H",
    "Latitude": 33.11852,
    "Longitude": -97.78486,
    "TotalBaseWaterVolume": 2597070,
    "StateName": "Texas",
    "CountyName": "WISE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 9 56HH",
    "Latitude": 32.15299,
    "Longitude": -94.39991,
    "TotalBaseWaterVolume": 8960900,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Casselman 3214",
    "Latitude": 28.37803,
    "Longitude": -93.38582,
    "TotalBaseWaterVolume": 1573017.392,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Walco Ranch 16-1",
    "Latitude": 32.38603,
    "Longitude": -103.05328,
    "TotalBaseWaterVolume": 91860,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "MA Thornberry Et Al Est NWS 17",
    "Latitude": 32.26314,
    "Longitude": -102.68442,
    "TotalBaseWaterVolume": 178294,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Mumme Unit A 1",
    "Latitude": 29.020811,
    "Longitude": -97.699761,
    "TotalBaseWaterVolume": 4529322,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "Melton GU 1H",
    "Latitude": 32.647167,
    "Longitude": -94.705,
    "TotalBaseWaterVolume": 506751,
    "StateName": "Texas",
    "CountyName": "Gregg"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Piedra Operating, LLC",
    "WellName": "Holt Ranch 13",
    "Latitude": 32.3319518,
    "Longitude": -102.1305068,
    "TotalBaseWaterVolume": 1036754,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Faye 26 #2",
    "Latitude": 32.218397,
    "Longitude": -101.8151,
    "TotalBaseWaterVolume": 1928850,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Graves 27 #2",
    "Latitude": 32.0634,
    "Longitude": -101.4802,
    "TotalBaseWaterVolume": 1048844,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Eagle Energy Acquisitions LP",
    "WellName": "Mabee 1 1A",
    "Latitude": 32,
    "Longitude": -102,
    "TotalBaseWaterVolume": 1354992,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "McKandles B.F. #2",
    "Latitude": 31.5301,
    "Longitude": -102.1234,
    "TotalBaseWaterVolume": 738558,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 721",
    "Latitude": 32.45358,
    "Longitude": -101.0494,
    "TotalBaseWaterVolume": 38348,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Ellie P1 1",
    "Latitude": 31.37076,
    "Longitude": -101.97733,
    "TotalBaseWaterVolume": 1294646,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EagleRidge Energy, LLC",
    "WellName": "Cates-Star 2H",
    "Latitude": 33.177887,
    "Longitude": -97.570183,
    "TotalBaseWaterVolume": 3045200,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Griffin Petroleum Company",
    "WellName": "Ridge 10",
    "Latitude": 30.8785554,
    "Longitude": -101.8983062,
    "TotalBaseWaterVolume": 11511,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 6 51HH",
    "Latitude": 32.18370801,
    "Longitude": -94.36139073,
    "TotalBaseWaterVolume": 9061495,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Griffin Petroleum Company",
    "WellName": "Leslie #14",
    "Latitude": 30.8786962,
    "Longitude": -101.8999034,
    "TotalBaseWaterVolume": 5098,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University Andrews 225",
    "Latitude": 32.12388611,
    "Longitude": -102.732336,
    "TotalBaseWaterVolume": 312618,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Leona C 8",
    "Latitude": 32.21948,
    "Longitude": -102.72904,
    "TotalBaseWaterVolume": 73710,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix B 13",
    "Latitude": 32.27959,
    "Longitude": -102.73239,
    "TotalBaseWaterVolume": 64512,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Cinco Terry M 903",
    "Latitude": 30.8654,
    "Longitude": -101.1236,
    "TotalBaseWaterVolume": 1485750,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Vaughan-Lenn 36 #4",
    "Latitude": 31.70080187,
    "Longitude": -102.3956825,
    "TotalBaseWaterVolume": 1068389,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -14-/Well No. 2",
    "Latitude": 31.70012,
    "Longitude": -101.55492,
    "TotalBaseWaterVolume": 2174298,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Sundown Slaughter Unit 1331",
    "Latitude": 33.43749,
    "Longitude": -102.49372,
    "TotalBaseWaterVolume": 27578,
    "StateName": "Texas",
    "CountyName": "Hockley"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Loudamy 45 45L",
    "Latitude": 32.337705,
    "Longitude": -101.584921,
    "TotalBaseWaterVolume": 888678,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Janssen 01 01H",
    "Latitude": 28.884499,
    "Longitude": -97.719684,
    "TotalBaseWaterVolume": 3708222,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hannathon Petroleum, LLC",
    "WellName": "Martin-Madison #1",
    "Latitude": 32.274499,
    "Longitude": -101.76105,
    "TotalBaseWaterVolume": 2360732,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 816",
    "Latitude": 32.44967,
    "Longitude": -101.04877,
    "TotalBaseWaterVolume": 38758,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Priestly Holmes 07",
    "Latitude": 32.0827,
    "Longitude": -94.30679,
    "TotalBaseWaterVolume": 21095,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Sugg D 106 1HU",
    "Latitude": 31.53370278,
    "Longitude": -101.3386194,
    "TotalBaseWaterVolume": 10159303,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #1019H",
    "Latitude": 31.50335471,
    "Longitude": -101.9841956,
    "TotalBaseWaterVolume": 1459217,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Thornberry B-17",
    "Latitude": 32.27197,
    "Longitude": -102.67802,
    "TotalBaseWaterVolume": 93799,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Millard D 1",
    "Latitude": 31.73515,
    "Longitude": -102.6379,
    "TotalBaseWaterVolume": 85644,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "McDowell #19",
    "Latitude": 35.9595444,
    "Longitude": -101.6220695,
    "TotalBaseWaterVolume": 50904,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gentry 2H",
    "Latitude": 28.409443,
    "Longitude": -98.389047,
    "TotalBaseWaterVolume": 3550638,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 7306 (PA)",
    "Latitude": 32.40186,
    "Longitude": -101.0517,
    "TotalBaseWaterVolume": 27846,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 7307 (PA)",
    "Latitude": 32.40026,
    "Longitude": -101.05139,
    "TotalBaseWaterVolume": 31416,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "Louis Werner #5H",
    "Latitude": 32.052376,
    "Longitude": -94.194048,
    "TotalBaseWaterVolume": 3281609,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Discovery Operating, Inc.",
    "WellName": "Greenwood 1",
    "Latitude": 31,
    "Longitude": -103,
    "TotalBaseWaterVolume": 878329,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate B #10",
    "Latitude": 31.43255964,
    "Longitude": -102.0040809,
    "TotalBaseWaterVolume": 1128435.715,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 3-22A #2R",
    "Latitude": 31.24838019,
    "Longitude": -101.8355636,
    "TotalBaseWaterVolume": 1303362,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Jennifer 2",
    "Latitude": 31.45222,
    "Longitude": -102.20669,
    "TotalBaseWaterVolume": 1032175,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "Smith #1",
    "Latitude": 31.2156041,
    "Longitude": -95.5550667,
    "TotalBaseWaterVolume": 7396998,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Griffin Petroleum Company",
    "WellName": "Ashlee #22",
    "Latitude": 30.8860461,
    "Longitude": -101.8973476,
    "TotalBaseWaterVolume": 9837,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 5-6",
    "Latitude": 32.1943,
    "Longitude": -102.7274,
    "TotalBaseWaterVolume": 44478,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix 183",
    "Latitude": 32.27156,
    "Longitude": -102.73672,
    "TotalBaseWaterVolume": 42756,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BI #309",
    "Latitude": 32.042922,
    "Longitude": -102.326133,
    "TotalBaseWaterVolume": 1894523.399,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee 'A' 3909E",
    "Latitude": 31.71513,
    "Longitude": -102.31515,
    "TotalBaseWaterVolume": 1208577,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Deats 8 8D",
    "Latitude": 32.3249095,
    "Longitude": -101.5777569,
    "TotalBaseWaterVolume": 681660,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Molopo Energy Texas, LLC",
    "WellName": "Linthicum Washington 361H",
    "Latitude": 31.13272,
    "Longitude": -101.16022,
    "TotalBaseWaterVolume": 215460,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Foley #5H",
    "Latitude": 31.38868,
    "Longitude": -96.27195,
    "TotalBaseWaterVolume": 1952874,
    "StateName": "Texas",
    "CountyName": "Limestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Johnson, W.D. 53-22/Well No. 2",
    "Latitude": 31.83803,
    "Longitude": -103.5325,
    "TotalBaseWaterVolume": 2322978,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Butchee 21 #8",
    "Latitude": 32.48320179,
    "Longitude": -101.811862,
    "TotalBaseWaterVolume": 1326353,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Resolute Natural Resources",
    "WellName": "State Oatman #2",
    "Latitude": 31.492722,
    "Longitude": -103.677888,
    "TotalBaseWaterVolume": 922033.3123,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Trap Rock Oil, LTD.",
    "WellName": "La Brisa Ranch Partners 91 M9",
    "Latitude": 26.4565,
    "Longitude": -98.6554,
    "TotalBaseWaterVolume": 466662,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek A #2",
    "Latitude": 31.633251,
    "Longitude": -102.007252,
    "TotalBaseWaterVolume": 2302902,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "J.E. Carter (SA) 7H ?",
    "Latitude": 33.11263,
    "Longitude": -97.43442,
    "TotalBaseWaterVolume": 3373023,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240B-304",
    "Latitude": 32.296126,
    "Longitude": -102.294964,
    "TotalBaseWaterVolume": 1914528,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman Mascho Unit/Well No. 1727",
    "Latitude": 32.22525,
    "Longitude": -102.70833,
    "TotalBaseWaterVolume": 30072,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Miranda 1707",
    "Latitude": 32.33915,
    "Longitude": -102.45194,
    "TotalBaseWaterVolume": 1747574,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W N Waddell",
    "Latitude": 31.52573,
    "Longitude": -102.61068,
    "TotalBaseWaterVolume": 35262,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "GeoSouthern Energy Corporation",
    "WellName": "Bishop A #3H",
    "Latitude": 29.212769,
    "Longitude": -97.440292,
    "TotalBaseWaterVolume": 4469769,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Frio -B-/Well No. 1",
    "Latitude": 31.68031,
    "Longitude": -101.46524,
    "TotalBaseWaterVolume": 1811082,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Henkhaus Unit #8H",
    "Latitude": 29.293819,
    "Longitude": -97.369139,
    "TotalBaseWaterVolume": 4201722,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "University 7-30 10",
    "Latitude": 32.385092,
    "Longitude": -102.171494,
    "TotalBaseWaterVolume": 820128,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "University 7-26 B8",
    "Latitude": 32.3839688,
    "Longitude": -102.1941029,
    "TotalBaseWaterVolume": 1862322,
    "StateName": "Texas",
    "CountyName": "Martin County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "TAS 37 #1",
    "Latitude": 32.17425,
    "Longitude": -101.88923,
    "TotalBaseWaterVolume": 1086960,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Nobles 3313",
    "Latitude": 31.9948291,
    "Longitude": -102.2111441,
    "TotalBaseWaterVolume": 1073562,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BE 618",
    "Latitude": 32.05165,
    "Longitude": -102.261914,
    "TotalBaseWaterVolume": 1859538.607,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Shackelford 7 #11",
    "Latitude": 31.63747124,
    "Longitude": -101.9245809,
    "TotalBaseWaterVolume": 2345616,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 3-32 #5H",
    "Latitude": 31.202346,
    "Longitude": -101.806185,
    "TotalBaseWaterVolume": 8662555,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Stout Energy Inc.",
    "WellName": "Cowden B #4",
    "Latitude": 31.79887,
    "Longitude": -103.11381,
    "TotalBaseWaterVolume": 67200,
    "StateName": "Texas",
    "CountyName": "Winkler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tema Oil and Gas Company",
    "WellName": "Bodkins #12",
    "Latitude": 31.30938,
    "Longitude": -103.16741,
    "TotalBaseWaterVolume": 44256,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45C 806H",
    "Latitude": 30.9765,
    "Longitude": -101.2568,
    "TotalBaseWaterVolume": 10290420,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "BAKER JAMES GU 1",
    "Latitude": 33.1134,
    "Longitude": -97.34093,
    "TotalBaseWaterVolume": 959280,
    "StateName": "Texas",
    "CountyName": "DENTON"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sievers 01 02H",
    "Latitude": 29.018863,
    "Longitude": -97.543231,
    "TotalBaseWaterVolume": 2275686,
    "StateName": "Texas",
    "CountyName": "Dewitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Bodden Unit A 1",
    "Latitude": 29.039019,
    "Longitude": -97.747292,
    "TotalBaseWaterVolume": 4652847,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University BL 7201H",
    "Latitude": 31.08045,
    "Longitude": -101.635638,
    "TotalBaseWaterVolume": 6330266,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University BL 7201H",
    "Latitude": 31.08045,
    "Longitude": -101.635638,
    "TotalBaseWaterVolume": 6330266,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Vantage Fort Worth Energy LLC",
    "WellName": "Southcliff South 1H",
    "Latitude": 32.67378821,
    "Longitude": -97.38045421,
    "TotalBaseWaterVolume": 53798052,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "JAMES BAKER GU 3",
    "Latitude": 33.11923,
    "Longitude": -97.34063,
    "TotalBaseWaterVolume": 1014594,
    "StateName": "Texas",
    "CountyName": "DENTON"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Treadstone Energy Partners, LLC",
    "WellName": "Shelly  2",
    "Latitude": 31.60933333,
    "Longitude": -95.74883333,
    "TotalBaseWaterVolume": 1254526,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "1893 Oil and Gas LTD E1",
    "Latitude": 28.585674,
    "Longitude": -98.213328,
    "TotalBaseWaterVolume": 2149366,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gentry 29H",
    "Latitude": 28.406451,
    "Longitude": -98.368608,
    "TotalBaseWaterVolume": 13500,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Priestly Holmes Unit 52HH",
    "Latitude": 32.08459697,
    "Longitude": -94.30587987,
    "TotalBaseWaterVolume": 6309263,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Casselman 3234",
    "Latitude": 32.09986,
    "Longitude": -102.21848,
    "TotalBaseWaterVolume": 1636530,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Parker C 13",
    "Latitude": 32.20029,
    "Longitude": -102.72591,
    "TotalBaseWaterVolume": 42756,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Parker C 10",
    "Latitude": 32.2005,
    "Longitude": -102.726,
    "TotalBaseWaterVolume": 46242,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Newell-Toupal #1",
    "Latitude": 30.64117,
    "Longitude": -96.60853,
    "TotalBaseWaterVolume": 1190925,
    "StateName": "Texas",
    "CountyName": "Robertson County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "GeoSouthern Energy Corporation",
    "WellName": "Bishop A #5H",
    "Latitude": 29.212803,
    "Longitude": -97.440203,
    "TotalBaseWaterVolume": 4287701,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Cantu B 5H",
    "Latitude": 29.179068,
    "Longitude": -97.454875,
    "TotalBaseWaterVolume": 3231732,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EF Energy, LLC",
    "WellName": "Marrs McLean 2H",
    "Latitude": 28.681422,
    "Longitude": -98.865311,
    "TotalBaseWaterVolume": 1483322,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Currie Trust 28 #2",
    "Latitude": 31.824705,
    "Longitude": -101.4089361,
    "TotalBaseWaterVolume": 2253409,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "Lucy GU 1H",
    "Latitude": 32.651,
    "Longitude": -94.72333,
    "TotalBaseWaterVolume": 379417,
    "StateName": "Texas",
    "CountyName": "Gregg"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Tubb 39 #2",
    "Latitude": 32.14712614,
    "Longitude": -101.4954295,
    "TotalBaseWaterVolume": 1236991,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Herring Ranch 04 01H",
    "Latitude": 28.421925,
    "Longitude": -98.23662,
    "TotalBaseWaterVolume": 2784768,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Layline Petroleum",
    "WellName": "Wheeler Lee A-2 6",
    "Latitude": 28.43082,
    "Longitude": -98.42741,
    "TotalBaseWaterVolume": 212016,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Merit Energy Company",
    "WellName": "McMurry B #16",
    "Latitude": 32.18288,
    "Longitude": -101.755266,
    "TotalBaseWaterVolume": 1506708,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 3035W",
    "Latitude": 32.44266,
    "Longitude": -101.02699,
    "TotalBaseWaterVolume": 21420,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 3036W",
    "Latitude": 32.44128,
    "Longitude": -101.02171,
    "TotalBaseWaterVolume": 14826,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "RA Flowers 1",
    "Latitude": 35.86,
    "Longitude": -100.6,
    "TotalBaseWaterVolume": 354134,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Amacker23 SE 2",
    "Latitude": 31.31319,
    "Longitude": -102.05182,
    "TotalBaseWaterVolume": 1237656,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240 #1326",
    "Latitude": 32.269155,
    "Longitude": -102.271261,
    "TotalBaseWaterVolume": 827000,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Barbee -A-/Well No. 1",
    "Latitude": 31.66492,
    "Longitude": -101.35864,
    "TotalBaseWaterVolume": 672966,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Sharon McCaffity 5H",
    "Latitude": 32.2805279,
    "Longitude": -97.4995311,
    "TotalBaseWaterVolume": 7148634,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Goodrich Petroleum Company, LLC",
    "WellName": "Burns Ranch A 39H",
    "Latitude": 28.5533105,
    "Longitude": -99.0280405,
    "TotalBaseWaterVolume": 4507186,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gentry 8H",
    "Latitude": 28.41058,
    "Longitude": -98.386413,
    "TotalBaseWaterVolume": 3431308,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Dilworth 5H",
    "Latitude": 28.3668636,
    "Longitude": -98.667844,
    "TotalBaseWaterVolume": 3241850,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Wolcott 253 #3",
    "Latitude": 32.45296,
    "Longitude": -101.99921,
    "TotalBaseWaterVolume": 980742,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Eiland 34 #2",
    "Latitude": 32.105,
    "Longitude": -101.554,
    "TotalBaseWaterVolume": 761490,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "TXL G#6",
    "Latitude": 31.7394774,
    "Longitude": -102.2156906,
    "TotalBaseWaterVolume": 662517,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Walker 28 #3",
    "Latitude": 31.2410802,
    "Longitude": -103.4637122,
    "TotalBaseWaterVolume": 578340,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Flowers B 13-5",
    "Latitude": 35.50537,
    "Longitude": -100.36442,
    "TotalBaseWaterVolume": 392168,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kangerga Gas Unit 12H",
    "Latitude": 32.224134,
    "Longitude": -94.772364,
    "TotalBaseWaterVolume": 9017255,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 14-22 1",
    "Latitude": 32.4410563,
    "Longitude": -102.7167238,
    "TotalBaseWaterVolume": 96241,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix A LZS 60",
    "Latitude": 32.2862938,
    "Longitude": -102.7213085,
    "TotalBaseWaterVolume": 31752,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Knight 14",
    "Latitude": 32.24005,
    "Longitude": -102.73642,
    "TotalBaseWaterVolume": 162095,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Jansky  Unit B 1",
    "Latitude": 29.043839,
    "Longitude": -97.575303,
    "TotalBaseWaterVolume": 3670018,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Treadstone Energy Partners, LLC",
    "WellName": "Maples 1",
    "Latitude": 32.04966667,
    "Longitude": -95.88616667,
    "TotalBaseWaterVolume": 1325690,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jones-Holton/Well No. 46",
    "Latitude": 32.37727,
    "Longitude": -102.01451,
    "TotalBaseWaterVolume": 676872,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Parks 2 #2",
    "Latitude": 31.4851,
    "Longitude": -102.1406,
    "TotalBaseWaterVolume": 1029546,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 2-32 #5",
    "Latitude": 31.29839122,
    "Longitude": -101.7442438,
    "TotalBaseWaterVolume": 1310631,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Killam Oil Co., Ltd.",
    "WellName": "GEO. H. SPEER STATE -D #10",
    "Latitude": 26.63504687,
    "Longitude": -98.49401215,
    "TotalBaseWaterVolume": 334075,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Range Resources Corporation",
    "WellName": "F Conger 19 1H",
    "Latitude": 31.737694,
    "Longitude": -101.089139,
    "TotalBaseWaterVolume": 6052326,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "SYLVIA #8302",
    "Latitude": 31.40593,
    "Longitude": -102.0846,
    "TotalBaseWaterVolume": 770000,
    "StateName": "Texas",
    "CountyName": "UPTON"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Amacker 48 5",
    "Latitude": 31.38474,
    "Longitude": -102.01412,
    "TotalBaseWaterVolume": 1046081,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU3 2209",
    "Latitude": 31.63415779,
    "Longitude": -102.1501654,
    "TotalBaseWaterVolume": 855297,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 3670",
    "Latitude": 33.01493,
    "Longitude": -102.89234,
    "TotalBaseWaterVolume": 110670,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-41 #8",
    "Latitude": 32.33178425,
    "Longitude": -102.2218323,
    "TotalBaseWaterVolume": 1210159,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Wind River 4",
    "Latitude": 32.2278,
    "Longitude": -102.72292,
    "TotalBaseWaterVolume": 41118,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Ranch 3-8",
    "Latitude": 32.2673,
    "Longitude": -102.6984,
    "TotalBaseWaterVolume": 41916,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 988",
    "Latitude": 32.1755016,
    "Longitude": -102.7042737,
    "TotalBaseWaterVolume": 140458,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Graham 22 #1",
    "Latitude": 32.562969,
    "Longitude": -101.951098,
    "TotalBaseWaterVolume": 1063146,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Isabel #4",
    "Latitude": 32.0097766,
    "Longitude": -102.5905302,
    "TotalBaseWaterVolume": 289254,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "JM Davis 42 #2",
    "Latitude": 32.36119,
    "Longitude": -101.68425,
    "TotalBaseWaterVolume": 1073646,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Goodrich Petroleum Company, LLC",
    "WellName": "Burns Ranch A 25H",
    "Latitude": 28.5533297,
    "Longitude": -99.0279969,
    "TotalBaseWaterVolume": 6360456,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Goodrich Petroleum Company, LLC",
    "WellName": "Burns Ranch A 10H",
    "Latitude": 28.5532939,
    "Longitude": -99.0280808,
    "TotalBaseWaterVolume": 6707134,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Arnold Unit B1",
    "Latitude": 28.684466,
    "Longitude": -98.050099,
    "TotalBaseWaterVolume": 1974177,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Llewellin Operating Company, LLC",
    "WellName": "Pursch Marshall #1H",
    "Latitude": 28.43495861,
    "Longitude": -98.5289775,
    "TotalBaseWaterVolume": 4270465,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 1740",
    "Latitude": 32.13105,
    "Longitude": -102.16465,
    "TotalBaseWaterVolume": 1188264,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Romine 37 A #1",
    "Latitude": 32.1827,
    "Longitude": -101.4505,
    "TotalBaseWaterVolume": 830588,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee AZ #1318",
    "Latitude": 32.020011,
    "Longitude": -102.269989,
    "TotalBaseWaterVolume": 1931574.224,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Herndon 'D' 489-4H",
    "Latitude": 36.217442,
    "Longitude": -100.719804,
    "TotalBaseWaterVolume": 1710485,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Eagle St. 28#3",
    "Latitude": 31.3827998,
    "Longitude": -103.4108771,
    "TotalBaseWaterVolume": 945990,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Vantage Fort Worth Energy LLC",
    "WellName": "Southcliff West 1H",
    "Latitude": 32.67381249,
    "Longitude": -97.380439,
    "TotalBaseWaterVolume": 4040862,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "JRS FARMS 30A-3",
    "Latitude": 31.594399,
    "Longitude": -101.901092,
    "TotalBaseWaterVolume": 2243220,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 3635",
    "Latitude": 33.0157,
    "Longitude": -102.89193,
    "TotalBaseWaterVolume": 104034,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kyle, Fred Gas Unit 53HH",
    "Latitude": 32.08581124,
    "Longitude": -94.32007194,
    "TotalBaseWaterVolume": 10082032,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Priestly Holmes Unit 51HH",
    "Latitude": 32.08459215,
    "Longitude": -94.3059279,
    "TotalBaseWaterVolume": 6575518,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "STS 7H",
    "Latitude": 28.328239,
    "Longitude": -98.935222,
    "TotalBaseWaterVolume": 2909172,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman-Mascho Unit/Well No. 1733",
    "Latitude": 32.22488,
    "Longitude": -102.70028,
    "TotalBaseWaterVolume": 29526,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman-Mascho Unit/Well No. 1731",
    "Latitude": 32.22355,
    "Longitude": -102.70674,
    "TotalBaseWaterVolume": 30828,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix A LZS #71",
    "Latitude": 32.2882892,
    "Longitude": -102.7199442,
    "TotalBaseWaterVolume": 18484,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Emmett 3",
    "Latitude": 31.72863,
    "Longitude": -102.37286,
    "TotalBaseWaterVolume": 1815563,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Llano -8-/Well No. 4",
    "Latitude": 31.73197,
    "Longitude": -101.51679,
    "TotalBaseWaterVolume": 670614,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "East Boxcar 48 #5",
    "Latitude": 31.9035027,
    "Longitude": -101.3911475,
    "TotalBaseWaterVolume": 1982106,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Morrill Ranch 2",
    "Latitude": 28.604444,
    "Longitude": -98.385556,
    "TotalBaseWaterVolume": 1936675,
    "StateName": "Texas",
    "CountyName": "McMullen County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Peters B #6",
    "Latitude": 32.15160853,
    "Longitude": -101.7935825,
    "TotalBaseWaterVolume": 1635804,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "NOA TXL Fee 4705M",
    "Latitude": 31.95018361,
    "Longitude": -102.2821478,
    "TotalBaseWaterVolume": 38225,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Lyda 21 #3",
    "Latitude": 31.2456025,
    "Longitude": -103.438842,
    "TotalBaseWaterVolume": 800195.1647,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Killam Oil Co., Ltd.",
    "WellName": "Geo. H. Speer State -D- #9",
    "Latitude": 26.64024266,
    "Longitude": -98.49073955,
    "TotalBaseWaterVolume": 261785,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Black 50 5H",
    "Latitude": 35.50338,
    "Longitude": -100.17666,
    "TotalBaseWaterVolume": 5506423,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Black 50 4H",
    "Latitude": 35.50342,
    "Longitude": -100.18112,
    "TotalBaseWaterVolume": 4368084,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Harlan Metting 01 02H",
    "Latitude": 29.006845,
    "Longitude": -97.561454,
    "TotalBaseWaterVolume": 3800160,
    "StateName": "Texas",
    "CountyName": "Dewitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "J.E. Carter 7H",
    "Latitude": 32.7765431,
    "Longitude": -97.7602198,
    "TotalBaseWaterVolume": 3376978,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Boswell 01 01H",
    "Latitude": 28.645481,
    "Longitude": -98.021842,
    "TotalBaseWaterVolume": 2951424,
    "StateName": "Texas",
    "CountyName": "Bee"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Cochina East Ranch 27H",
    "Latitude": 28.3746139,
    "Longitude": -99.4711417,
    "TotalBaseWaterVolume": 7772428,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Calverely 40A #6",
    "Latitude": 31.91600972,
    "Longitude": -101.4413116,
    "TotalBaseWaterVolume": 1148105,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Lazy Q unit A1",
    "Latitude": 29.084464,
    "Longitude": -97.648894,
    "TotalBaseWaterVolume": 3941309,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Vajdos Foegelle 2H",
    "Latitude": 28.849981,
    "Longitude": -97.992149,
    "TotalBaseWaterVolume": 2129246,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Vajdos Foegelle 3H",
    "Latitude": 28.849913,
    "Longitude": -97.992141,
    "TotalBaseWaterVolume": 2856989,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240B #1603",
    "Latitude": 32.304738,
    "Longitude": -102.275804,
    "TotalBaseWaterVolume": 1921375,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Bush Rasmussen B 21",
    "Latitude": 32.30298,
    "Longitude": -102.75075,
    "TotalBaseWaterVolume": 43176,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "WH Bush B 28",
    "Latitude": 32.30306,
    "Longitude": -102.75044,
    "TotalBaseWaterVolume": 58758,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 1580",
    "Latitude": 32.1692674,
    "Longitude": -102.6805006,
    "TotalBaseWaterVolume": 64540,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Molopo Energy Texas, LLC",
    "WellName": "Baggett Op 5 40-2H",
    "Latitude": 30.79635,
    "Longitude": -101.23225,
    "TotalBaseWaterVolume": 217476,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Williams A 3H",
    "Latitude": 29.242861,
    "Longitude": -97.3145,
    "TotalBaseWaterVolume": 3864126,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BD #1102",
    "Latitude": 32.037539,
    "Longitude": -102.299008,
    "TotalBaseWaterVolume": 1928357.949,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "U.S. Enercorp, LTD.",
    "WellName": "Stout #1H",
    "Latitude": 28.696905,
    "Longitude": -99.2925217,
    "TotalBaseWaterVolume": 630268,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Currie 3808 H",
    "Latitude": 31.82088345,
    "Longitude": -101.3753326,
    "TotalBaseWaterVolume": 916137,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "ED Books 25 #6",
    "Latitude": 31.704795,
    "Longitude": -101.429167,
    "TotalBaseWaterVolume": 1090950,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "O Borchers D 4H",
    "Latitude": 29.53568,
    "Longitude": -97.31931,
    "TotalBaseWaterVolume": 3359626,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Elm Creek Ranch 34 #5HR",
    "Latitude": 35.720111,
    "Longitude": -100.117833,
    "TotalBaseWaterVolume": 4643521,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Guitar  5 #1",
    "Latitude": 32.1524,
    "Longitude": -101.3236,
    "TotalBaseWaterVolume": 1100568,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Bailey Retzloff 3H",
    "Latitude": 28.765558,
    "Longitude": -97.987103,
    "TotalBaseWaterVolume": 2337668,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Tyler B #1H",
    "Latitude": 28.579496,
    "Longitude": -98.472495,
    "TotalBaseWaterVolume": 7588014,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Tyler C #1H",
    "Latitude": 28.579497,
    "Longitude": -98.473611,
    "TotalBaseWaterVolume": 9130716,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jack Black -15-/Well No. 1",
    "Latitude": 32.51239,
    "Longitude": -101.7285,
    "TotalBaseWaterVolume": 133602,
    "StateName": "Texas",
    "CountyName": 41183
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 3107W",
    "Latitude": 32.44749,
    "Longitude": -101.01997,
    "TotalBaseWaterVolume": 16800,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 4701W",
    "Latitude": 32.42054,
    "Longitude": -101.05824,
    "TotalBaseWaterVolume": 17010,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Cascade F Bar C 1H",
    "Latitude": 31.72752,
    "Longitude": -101.0093,
    "TotalBaseWaterVolume": 25527667,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Cascade F Bar C 1H",
    "Latitude": 31.72724,
    "Longitude": -101.01076,
    "TotalBaseWaterVolume": 25527667,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Tina Marie #4206",
    "Latitude": 31.49607,
    "Longitude": -102.19786,
    "TotalBaseWaterVolume": 693000,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "Davis 64- 6H",
    "Latitude": 35.42,
    "Longitude": -100.03,
    "TotalBaseWaterVolume": 2819539,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Johnson & Ernst Operating Co.",
    "WellName": "Denney No. 2",
    "Latitude": 34.03864,
    "Longitude": -99.28381,
    "TotalBaseWaterVolume": 4200,
    "StateName": "Texas",
    "CountyName": "Wilbarger"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "HUGHES D J GAS UNIT `A` 1H",
    "Latitude": 33.09364,
    "Longitude": -97.80764,
    "TotalBaseWaterVolume": 2948736,
    "StateName": "Texas",
    "CountyName": "WISE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "O.H. McAlister (SA) 25H",
    "Latitude": 33.057572,
    "Longitude": -97.492581,
    "TotalBaseWaterVolume": 7413423,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 6-15",
    "Latitude": 32.18532,
    "Longitude": -102.73199,
    "TotalBaseWaterVolume": 38934,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Jo-Mill Unit 4511",
    "Latitude": 32.64306,
    "Longitude": -101.63085,
    "TotalBaseWaterVolume": 23112.00258,
    "StateName": "Texas",
    "CountyName": "Borden"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Newkirk 3",
    "Latitude": 31.752092,
    "Longitude": -102.387369,
    "TotalBaseWaterVolume": 681420,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Brunson 36 #3",
    "Latitude": 31.86394968,
    "Longitude": -101.6944031,
    "TotalBaseWaterVolume": 1422452,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -2A-/Well No. 1",
    "Latitude": 31.73891,
    "Longitude": -101.5703,
    "TotalBaseWaterVolume": 1660890,
    "StateName": "Texas",
    "CountyName": 41184
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Crimson Exploration Oper. Inc.",
    "WellName": "Covington-Upchurch Unit #1H",
    "Latitude": 30.768583,
    "Longitude": -96.040419,
    "TotalBaseWaterVolume": 1588272,
    "StateName": "Texas",
    "CountyName": "Grimes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "H.W Carver #18",
    "Latitude": 35.9216593,
    "Longitude": -101.5595963,
    "TotalBaseWaterVolume": 31542,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Davenport #13",
    "Latitude": 35.9697596,
    "Longitude": -101.5077835,
    "TotalBaseWaterVolume": 52622,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Morrill Ranch 1",
    "Latitude": 28.604444,
    "Longitude": -98.385556,
    "TotalBaseWaterVolume": 1864514,
    "StateName": "Texas",
    "CountyName": "McMullen County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Scarborough Unit 1 1H",
    "Latitude": 28.431648,
    "Longitude": -98.356476,
    "TotalBaseWaterVolume": 2488668,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Cross Bar Ranch #710",
    "Latitude": 32.16126,
    "Longitude": -102.20777,
    "TotalBaseWaterVolume": 1519560,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-1 #10",
    "Latitude": 32.43989874,
    "Longitude": -102.1808491,
    "TotalBaseWaterVolume": 1316035,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 7105 (PA)",
    "Latitude": 32.4122,
    "Longitude": -101.03877,
    "TotalBaseWaterVolume": 35784,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Daniel 137-4H",
    "Latitude": 36.156782,
    "Longitude": -101.018557,
    "TotalBaseWaterVolume": 1674465,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch A522H",
    "Latitude": 28.097187,
    "Longitude": -99.618348,
    "TotalBaseWaterVolume": 5537364,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Gilbert Ensley 1H",
    "Latitude": 33.348504,
    "Longitude": -97.75629,
    "TotalBaseWaterVolume": 4014555,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240C-2606",
    "Latitude": 32.288451,
    "Longitude": -102.237714,
    "TotalBaseWaterVolume": 2091768,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 9103",
    "Latitude": 32.1758,
    "Longitude": -102.69193,
    "TotalBaseWaterVolume": 133140,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BB 2311",
    "Latitude": 32.004003,
    "Longitude": -102.289356,
    "TotalBaseWaterVolume": 1891168.214,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Clyde Cowden 237",
    "Latitude": 31.940447,
    "Longitude": -102.575869,
    "TotalBaseWaterVolume": 148184,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "Glass 27#1",
    "Latitude": 31.72207,
    "Longitude": -101.35887,
    "TotalBaseWaterVolume": 2626008,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Bell, A.M./Well No. 68 (PA)",
    "Latitude": 32.29132,
    "Longitude": -101.18768,
    "TotalBaseWaterVolume": 6300,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Julie 12H",
    "Latitude": 29.15453,
    "Longitude": -97.69806,
    "TotalBaseWaterVolume": 3519107,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Julie 13H",
    "Latitude": 29.15453,
    "Longitude": -97.69806,
    "TotalBaseWaterVolume": 3531839,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Lone Oak Grocery 10H",
    "Latitude": 28.404794,
    "Longitude": -99.053658,
    "TotalBaseWaterVolume": 10182037,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PetroQuest Energy LLC",
    "WellName": "Hunter B 3H",
    "Latitude": 28.58,
    "Longitude": -99.3,
    "TotalBaseWaterVolume": 4151391,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jones-Holton/Well No. 43",
    "Latitude": 32.36315,
    "Longitude": -102.01924,
    "TotalBaseWaterVolume": 681072,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 2-20 #8",
    "Latitude": 31.26534337,
    "Longitude": -101.7491275,
    "TotalBaseWaterVolume": 1285899.384,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Jesse 27",
    "Latitude": 31.393,
    "Longitude": -102.04122,
    "TotalBaseWaterVolume": 1210873,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe GGU9 State 41H",
    "Latitude": 28.13546,
    "Longitude": -99.90719,
    "TotalBaseWaterVolume": 10872960,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Johnson & Ernst Operating Co.",
    "WellName": "Waggoner W No. 18A",
    "Latitude": 33.96022,
    "Longitude": -99.03093,
    "TotalBaseWaterVolume": 1680,
    "StateName": "Texas",
    "CountyName": "Wilbarger"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-9 #5",
    "Latitude": 32.40000064,
    "Longitude": -102.25234,
    "TotalBaseWaterVolume": 1222435,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Cross Bar Ranch #1709",
    "Latitude": 32.13632,
    "Longitude": -102.23219,
    "TotalBaseWaterVolume": 1204568,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 6N-16",
    "Latitude": 32.1900967,
    "Longitude": -102.7348741,
    "TotalBaseWaterVolume": 33037,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix 135",
    "Latitude": 32.27683,
    "Longitude": -102.72598,
    "TotalBaseWaterVolume": 145087,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 1660",
    "Latitude": 32.16981,
    "Longitude": -102.70224,
    "TotalBaseWaterVolume": 43050,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tecpetrol Operating LLC",
    "WellName": "Sullivan Deep C3 ST1",
    "Latitude": 27.20555,
    "Longitude": -98.01888,
    "TotalBaseWaterVolume": 168298,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "GeoSouthern Energy Corporation",
    "WellName": "Bishop A #4H",
    "Latitude": 29.212786,
    "Longitude": -97.440247,
    "TotalBaseWaterVolume": 4240682,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "GS Andector Unit P-142",
    "Latitude": 32.045892,
    "Longitude": -102.692019,
    "TotalBaseWaterVolume": 91839,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Millie `A` 6",
    "Latitude": 31.66443,
    "Longitude": -102.35666,
    "TotalBaseWaterVolume": 1319422,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Louisa #1",
    "Latitude": 31.9998361,
    "Longitude": -102.5944334,
    "TotalBaseWaterVolume": 295596,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Colorado/Well No. 9",
    "Latitude": 31.65901,
    "Longitude": -101.39619,
    "TotalBaseWaterVolume": 2364348,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "J.E. Cox #3307HU",
    "Latitude": 31.678833,
    "Longitude": -101.481109,
    "TotalBaseWaterVolume": 9630740,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Corlena Oil Company",
    "WellName": "Nix Ranch 69 1H",
    "Latitude": 36.02803,
    "Longitude": -100.3809,
    "TotalBaseWaterVolume": 1509270,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pfluger M 303",
    "Latitude": 31.51774,
    "Longitude": -101.2555,
    "TotalBaseWaterVolume": 897334,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Haveman 01 02H",
    "Latitude": 28.843807,
    "Longitude": -97.766885,
    "TotalBaseWaterVolume": 3699402,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Magnum Hunter Resources Corp",
    "WellName": "Hippo Hunter 1H",
    "Latitude": 29.5971522,
    "Longitude": -97.1723971,
    "TotalBaseWaterVolume": 6720876,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Magnum Hunter Resources Corp",
    "WellName": "Hippo Hunter 2H",
    "Latitude": 29.5980281,
    "Longitude": -97.1705548,
    "TotalBaseWaterVolume": 6406733,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gentry 27H",
    "Latitude": 28.410595,
    "Longitude": -98.386473,
    "TotalBaseWaterVolume": 3244668,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jones-Holton/Well No. 49",
    "Latitude": 32.35724,
    "Longitude": -102.01216,
    "TotalBaseWaterVolume": 672294,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Cook 21 #5",
    "Latitude": 32.47285108,
    "Longitude": -101.8218545,
    "TotalBaseWaterVolume": 1544354,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Daniel 137-4HM",
    "Latitude": 36.157827,
    "Longitude": -101.019754,
    "TotalBaseWaterVolume": 1081480,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 7 #2",
    "Latitude": 31.2823161,
    "Longitude": -103.3705209,
    "TotalBaseWaterVolume": 1419558,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Goolsby #1",
    "Latitude": 32.47862,
    "Longitude": -103.00017,
    "TotalBaseWaterVolume": 110220,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman-Mascho Unit/Well No. 2324",
    "Latitude": 32.21088,
    "Longitude": -102.67431,
    "TotalBaseWaterVolume": 29245,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Grindstone 2 Fee #1H",
    "Latitude": 31.98628333,
    "Longitude": -104.2369278,
    "TotalBaseWaterVolume": 4845667,
    "StateName": "Texas",
    "CountyName": "Culberson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BB #2314",
    "Latitude": 32.002353,
    "Longitude": -102.288836,
    "TotalBaseWaterVolume": 1917265.235,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Cole A #3",
    "Latitude": 31.76676969,
    "Longitude": -101.6279398,
    "TotalBaseWaterVolume": 1496215,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Isaacs 148-4H",
    "Latitude": 35.86678361,
    "Longitude": -100.2176131,
    "TotalBaseWaterVolume": 4331206,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Caroline Pielop 9-9H",
    "Latitude": 28.273944,
    "Longitude": -99.021175,
    "TotalBaseWaterVolume": 3991932,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Caroline Pielop 9H",
    "Latitude": 28.27394,
    "Longitude": -99.02117,
    "TotalBaseWaterVolume": 3960700,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "White #3H",
    "Latitude": 28.608997,
    "Longitude": -98.835281,
    "TotalBaseWaterVolume": 4961754,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Robbie 24 AA",
    "Latitude": 32.0363,
    "Longitude": -102.16703,
    "TotalBaseWaterVolume": 1043138,
    "StateName": "Texas",
    "CountyName": "United States"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 239-405",
    "Latitude": 32.249537,
    "Longitude": -102.178495,
    "TotalBaseWaterVolume": 1532412,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Wapiti Operating, LLC",
    "WellName": "Arco Call and Jones 8AR",
    "Latitude": 30.52196,
    "Longitude": -93.76349,
    "TotalBaseWaterVolume": 77370,
    "StateName": "Texas",
    "CountyName": "Newton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Wapiti Operating, LLC",
    "WellName": "Wapiti Oil & Gas Bp Runnels 1",
    "Latitude": 30.52196,
    "Longitude": -93.76349,
    "TotalBaseWaterVolume": 73080,
    "StateName": "Texas",
    "CountyName": "Newton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 2-32 #10",
    "Latitude": 31.29845419,
    "Longitude": -101.7536647,
    "TotalBaseWaterVolume": 1346841.384,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Resolute Natural Resources",
    "WellName": "State Oatman 5",
    "Latitude": 31.499997,
    "Longitude": -103.677842,
    "TotalBaseWaterVolume": 924685,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Amacker 48 6",
    "Latitude": 31.39151,
    "Longitude": -102.01665,
    "TotalBaseWaterVolume": 843830,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Crawford 46 #2",
    "Latitude": 31.537006,
    "Longitude": -101.951394,
    "TotalBaseWaterVolume": 2375310,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fair Oil, Ltd.",
    "WellName": "Pollard-Johnson Unit 1",
    "Latitude": 32.88457,
    "Longitude": -95.38937,
    "TotalBaseWaterVolume": 45872,
    "StateName": "Texas",
    "CountyName": "Wood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 23 52HH",
    "Latitude": 32.18292223,
    "Longitude": -94.42128729,
    "TotalBaseWaterVolume": 7127812,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 17 51HH",
    "Latitude": 32.20812895,
    "Longitude": -94.39482,
    "TotalBaseWaterVolume": 8929581,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ironwood Oil and Gas, LLC",
    "WellName": "Botard #1",
    "Latitude": 31.477254,
    "Longitude": -96.182026,
    "TotalBaseWaterVolume": 545874,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Hoelscher 46 #4",
    "Latitude": 31.74866,
    "Longitude": -101.57737,
    "TotalBaseWaterVolume": 1823598,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Navidad Resources LLC",
    "WellName": "ESPF A #3",
    "Latitude": 30.99608,
    "Longitude": -95.65409,
    "TotalBaseWaterVolume": 1743168,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "William H. Lackey Oil & Gas Operating Co.",
    "WellName": "Powell C#1",
    "Latitude": 32.22489,
    "Longitude": -101.31726,
    "TotalBaseWaterVolume": 370192,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Goodrich Petroleum Company, LLC",
    "WellName": "Burns Ranch A 29H",
    "Latitude": 28.5596342,
    "Longitude": -99.0599656,
    "TotalBaseWaterVolume": 6100993,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Lowe Pasture #10H",
    "Latitude": 28.492553,
    "Longitude": -98.726308,
    "TotalBaseWaterVolume": 5502462,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Phillips 22 #2",
    "Latitude": 32.24699247,
    "Longitude": -101.7346883,
    "TotalBaseWaterVolume": 1226437,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "WCC07-J.T. Meadows 2H ?",
    "Latitude": 33.115288,
    "Longitude": -97.707145,
    "TotalBaseWaterVolume": 4119425,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kyle, Fred Gas Unit  52HH",
    "Latitude": 32.08587273,
    "Longitude": -94.32006889,
    "TotalBaseWaterVolume": 11661164,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Stevens #1",
    "Latitude": 32.54537,
    "Longitude": -102.97824,
    "TotalBaseWaterVolume": 103504,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Bailey Retzioff 1H",
    "Latitude": 28.765466,
    "Longitude": -97.987397,
    "TotalBaseWaterVolume": 2393684,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Jess B Williams",
    "Latitude": 28.793056,
    "Longitude": -98.0625,
    "TotalBaseWaterVolume": 3513875,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Bp `R` Unit 1",
    "Latitude": 30.56126,
    "Longitude": -94.29637,
    "TotalBaseWaterVolume": 216174,
    "StateName": "Texas",
    "CountyName": "Tyler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "University Frances 4014",
    "Latitude": 32.39215,
    "Longitude": -102.45336,
    "TotalBaseWaterVolume": 1450025,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 5 #9",
    "Latitude": 32.1957193,
    "Longitude": -102.7289782,
    "TotalBaseWaterVolume": 126175,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix B #14",
    "Latitude": 32.2801622,
    "Longitude": -102.7303686,
    "TotalBaseWaterVolume": 100708,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix B #15",
    "Latitude": 32.2798985,
    "Longitude": -102.7302778,
    "TotalBaseWaterVolume": 37328,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix 149",
    "Latitude": 32.28748,
    "Longitude": -102.71669,
    "TotalBaseWaterVolume": 101767,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Rosa Lee 5",
    "Latitude": 32.27665,
    "Longitude": -102.72235,
    "TotalBaseWaterVolume": 90543,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 276H",
    "Latitude": 31.57146,
    "Longitude": -102.67828,
    "TotalBaseWaterVolume": 2449608,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45G 2216H",
    "Latitude": 30.9324,
    "Longitude": -101.2309,
    "TotalBaseWaterVolume": 9958662,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45G 2217H",
    "Latitude": 30.9324,
    "Longitude": -101.2309,
    "TotalBaseWaterVolume": 9912336,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Bednorz A 1H",
    "Latitude": 29.074911,
    "Longitude": -97.614379,
    "TotalBaseWaterVolume": 2650998,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "C A Goldsmith #2200",
    "Latitude": 31.9425512,
    "Longitude": -102.6156527,
    "TotalBaseWaterVolume": 174426,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Chivas Regal 207D",
    "Latitude": 32.0504633,
    "Longitude": -102.3107346,
    "TotalBaseWaterVolume": 1363114.936,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "North Riley Unit 1362",
    "Latitude": 32.66030028,
    "Longitude": -102.8269106,
    "TotalBaseWaterVolume": 157431,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Alley B 9",
    "Latitude": 32.54921,
    "Longitude": -102.97214,
    "TotalBaseWaterVolume": 83538,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fivestones Energy LLC",
    "WellName": "Schwartz 48 2",
    "Latitude": 31.75,
    "Longitude": -101.5455,
    "TotalBaseWaterVolume": 1386023,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Range Resources Corporation",
    "WellName": "Edmondson A 4430",
    "Latitude": 31.7333611,
    "Longitude": -101.3203334,
    "TotalBaseWaterVolume": 1593484,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "Knight #1",
    "Latitude": 31.18086,
    "Longitude": -95.53233,
    "TotalBaseWaterVolume": 3681468,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Borderline Operating Corp",
    "WellName": "Wilton `A` 3",
    "Latitude": 33.23511,
    "Longitude": -98.34779,
    "TotalBaseWaterVolume": 174846,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Brown 1H",
    "Latitude": 33.06322,
    "Longitude": -98.20961,
    "TotalBaseWaterVolume": 2594283,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Butler Ranch A1",
    "Latitude": 28.786536,
    "Longitude": -98.094534,
    "TotalBaseWaterVolume": 2247172,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Carmody Trust A 9H",
    "Latitude": 28.83829312,
    "Longitude": -98.08782924,
    "TotalBaseWaterVolume": 3669834,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Carmody Trust B 8H",
    "Latitude": 28.82913627,
    "Longitude": -98.0753167,
    "TotalBaseWaterVolume": 4279044,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Alta Mesa Services, LP",
    "WellName": "Belin #4",
    "Latitude": 31.068224,
    "Longitude": -96.213242,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Leon"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Barton Jay D Et Al 5313H",
    "Latitude": 36.22932,
    "Longitude": -100.05513,
    "TotalBaseWaterVolume": 561620,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "McCoy 2H",
    "Latitude": 28.620024,
    "Longitude": -98.213418,
    "TotalBaseWaterVolume": 2376606,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "McCoy 3H",
    "Latitude": 28.619956,
    "Longitude": -98.213418,
    "TotalBaseWaterVolume": 3835983,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 1737",
    "Latitude": 32.13454,
    "Longitude": -102.16578,
    "TotalBaseWaterVolume": 1178940,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W&T Offshore, Inc.",
    "WellName": "Patricia Plow #2",
    "Latitude": 32.501742,
    "Longitude": -102.111561,
    "TotalBaseWaterVolume": 7400,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #17B",
    "Latitude": 29.2077814,
    "Longitude": -99.0936963,
    "TotalBaseWaterVolume": 15792,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #18B",
    "Latitude": 29.2069552,
    "Longitude": -99.0942018,
    "TotalBaseWaterVolume": 14868,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Parks 25 #5",
    "Latitude": 31.76471025,
    "Longitude": -102.2023413,
    "TotalBaseWaterVolume": 86088,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 4604W",
    "Latitude": 32.42259,
    "Longitude": -101.05688,
    "TotalBaseWaterVolume": 19488,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 4821W",
    "Latitude": 32.4252,
    "Longitude": -101.03368,
    "TotalBaseWaterVolume": 32508,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 9 #2805H",
    "Latitude": 31.2369444,
    "Longitude": -101.6067417,
    "TotalBaseWaterVolume": 5684280,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Buzzard Stage 21 #2",
    "Latitude": 31.3501062,
    "Longitude": -103.4271073,
    "TotalBaseWaterVolume": 1126104,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "Jessie James 4 #2",
    "Latitude": 31.356534,
    "Longitude": -103.370212,
    "TotalBaseWaterVolume": 1741782,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "ALICE MOORE UNIT 1H",
    "Latitude": 33.344685,
    "Longitude": -97.617376,
    "TotalBaseWaterVolume": 6190031,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "O. H. MCALISTER (SA) 24H",
    "Latitude": 33.06687,
    "Longitude": -97.488183,
    "TotalBaseWaterVolume": 6328516,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-11 #3",
    "Latitude": 32.4089185,
    "Longitude": -102.2157097,
    "TotalBaseWaterVolume": 1306149,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240-1322",
    "Latitude": 32.26184,
    "Longitude": -102.268678,
    "TotalBaseWaterVolume": 1750644,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forge Energy, LLC",
    "WellName": "Fisher -5- 2H",
    "Latitude": 32.4190391,
    "Longitude": -102.6295906,
    "TotalBaseWaterVolume": 4081453,
    "StateName": "Texas",
    "CountyName": "Andrews County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Argo Knight 24",
    "Latitude": 32.24733,
    "Longitude": -102.74456,
    "TotalBaseWaterVolume": 42630,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Brown Et Al 8",
    "Latitude": 32.2375,
    "Longitude": -102.73805,
    "TotalBaseWaterVolume": 95696,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 1663",
    "Latitude": 32.17104,
    "Longitude": -102.69005,
    "TotalBaseWaterVolume": 32046,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU #1664",
    "Latitude": 32.1728936,
    "Longitude": -102.6998099,
    "TotalBaseWaterVolume": 9691,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W N Waddell ET AL 1543",
    "Latitude": 31.526667,
    "Longitude": -102.630278,
    "TotalBaseWaterVolume": 47278,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Bednorz B 1H",
    "Latitude": 29.074927,
    "Longitude": -97.614438,
    "TotalBaseWaterVolume": 2954448,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina Ranch 48H",
    "Latitude": 28.3144111,
    "Longitude": -99.7986861,
    "TotalBaseWaterVolume": 8063286,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Leon 10",
    "Latitude": 31.67711,
    "Longitude": -102.34329,
    "TotalBaseWaterVolume": 1396702,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Cole Ranch 44/Well No. 3",
    "Latitude": 31.73571,
    "Longitude": -101.61377,
    "TotalBaseWaterVolume": 1479828,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Baird Heirs Unit #3H",
    "Latitude": 29.235833,
    "Longitude": -97.533167,
    "TotalBaseWaterVolume": 6770316,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "Goodwin 1H",
    "Latitude": 29.73,
    "Longitude": -93.32,
    "TotalBaseWaterVolume": 5130677,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Borderline Operating Corp",
    "WellName": "Daniels-Eaton 1",
    "Latitude": 33.18086,
    "Longitude": -98.41031,
    "TotalBaseWaterVolume": 549108,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cheyenne Petroleum Company",
    "WellName": "Cromwell 6H",
    "Latitude": 28.62808,
    "Longitude": -98.86792,
    "TotalBaseWaterVolume": 3427284,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "WK Unit 8 1H",
    "Latitude": 28.333883,
    "Longitude": -98.988033,
    "TotalBaseWaterVolume": 2684275,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Wheeler McTee 2H",
    "Latitude": 28.343125,
    "Longitude": -98.540783,
    "TotalBaseWaterVolume": 2630166,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Wilbanks/Well No. 4502",
    "Latitude": 32.35489,
    "Longitude": -101.74312,
    "TotalBaseWaterVolume": 859404,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "TAS 37 #2",
    "Latitude": 32.17118,
    "Longitude": -101.90212,
    "TotalBaseWaterVolume": 1091538,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Holcomb 45 #2",
    "Latitude": 32.3034,
    "Longitude": -101.5656,
    "TotalBaseWaterVolume": 794796,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #19B",
    "Latitude": 29.2069572,
    "Longitude": -99.0932612,
    "TotalBaseWaterVolume": 15498,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Wilson P Unit 2 #20B",
    "Latitude": 29.2069593,
    "Longitude": -99.0923207,
    "TotalBaseWaterVolume": 16968,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Oscar C #1",
    "Latitude": 29.2033041,
    "Longitude": -99.075999,
    "TotalBaseWaterVolume": 16926,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Oscar C #2",
    "Latitude": 29.2032689,
    "Longitude": -99.0750599,
    "TotalBaseWaterVolume": 18312,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Oscar C #3",
    "Latitude": 29.2060688,
    "Longitude": -99.0750668,
    "TotalBaseWaterVolume": 15918,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Oscar C #4",
    "Latitude": 29.2060692,
    "Longitude": -99.0741232,
    "TotalBaseWaterVolume": 15918,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BE 616",
    "Latitude": 32.050211,
    "Longitude": -102.275133,
    "TotalBaseWaterVolume": 1692075.829,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 2505",
    "Latitude": 32.43754,
    "Longitude": -101.04317,
    "TotalBaseWaterVolume": 17682,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EagleRidge Energy, LLC",
    "WellName": "Burgess B Unit 1H",
    "Latitude": 32.94,
    "Longitude": -98.65,
    "TotalBaseWaterVolume": 605444,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Davidson 38-12",
    "Latitude": 31.641734,
    "Longitude": -102.063926,
    "TotalBaseWaterVolume": 1486842,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "State Barrow #5",
    "Latitude": 32.47528,
    "Longitude": -102.99109,
    "TotalBaseWaterVolume": 44088,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "MA Thornberry Cons. III. #51",
    "Latitude": 32.2639,
    "Longitude": -102.7069,
    "TotalBaseWaterVolume": 83897,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 6-14",
    "Latitude": 32.1833,
    "Longitude": -102.7363,
    "TotalBaseWaterVolume": 45066,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 1686",
    "Latitude": 32.17104,
    "Longitude": -102.69867,
    "TotalBaseWaterVolume": 28854,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Anthony W 1H",
    "Latitude": 28.7257211,
    "Longitude": -98.2220015,
    "TotalBaseWaterVolume": 9117793,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Anthony E 1H",
    "Latitude": 28.7257792,
    "Longitude": -98.2219598,
    "TotalBaseWaterVolume": 9095705,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wheeler-1046 No. 4656",
    "Latitude": 33.525863,
    "Longitude": -101.500781,
    "TotalBaseWaterVolume": 74085,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "GeoSouthern Energy Corporation",
    "WellName": "Bishop A #2H",
    "Latitude": 29.212753,
    "Longitude": -97.440333,
    "TotalBaseWaterVolume": 4218039,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Royal Unit B1",
    "Latitude": 28.961322,
    "Longitude": -97.628833,
    "TotalBaseWaterVolume": 3357519,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Stumberg 1H",
    "Latitude": 28.422489,
    "Longitude": -99.640186,
    "TotalBaseWaterVolume": 6386331,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Stumberg 2H",
    "Latitude": 28.422447,
    "Longitude": -99.640247,
    "TotalBaseWaterVolume": 9096704,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Stumberg 3H",
    "Latitude": 28.422489,
    "Longitude": -99.640186,
    "TotalBaseWaterVolume": 9317742,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Stumberg 4H",
    "Latitude": 28.422367,
    "Longitude": -99.640372,
    "TotalBaseWaterVolume": 9372224,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Riley AFGK  #F25",
    "Latitude": 35.9681444,
    "Longitude": -101.5577973,
    "TotalBaseWaterVolume": 53000,
    "StateName": "Texas",
    "CountyName": "Hutchinson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cheyenne Petroleum Company",
    "WellName": "Cromwell 5H",
    "Latitude": 28.62915,
    "Longitude": -98.86638,
    "TotalBaseWaterVolume": 3662358,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Rainbow State 33-70/Well No. 4",
    "Latitude": 31.65242,
    "Longitude": -103.52999,
    "TotalBaseWaterVolume": 1078896,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gentry 7H",
    "Latitude": 28.407529,
    "Longitude": -98.350518,
    "TotalBaseWaterVolume": 2639574,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Abraxas 20 #2",
    "Latitude": 32.47556586,
    "Longitude": -101.8271559,
    "TotalBaseWaterVolume": 1300466,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Abraxas 20 #2",
    "Latitude": 32.47556586,
    "Longitude": -101.8271559,
    "TotalBaseWaterVolume": 1276215,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hannathon Petroleum, LLC",
    "WellName": "Martin-Madison #2",
    "Latitude": 32.271953,
    "Longitude": -101.761782,
    "TotalBaseWaterVolume": 2688504,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Buchanan B #133",
    "Latitude": 31.9493,
    "Longitude": -101.8954,
    "TotalBaseWaterVolume": 913500,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sweatt #12",
    "Latitude": 32.08522263,
    "Longitude": -101.996517,
    "TotalBaseWaterVolume": 663305,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6828 (PA)",
    "Latitude": 32.40362,
    "Longitude": -101.06081,
    "TotalBaseWaterVolume": 19992,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Clear Fork, Inc.",
    "WellName": "Bobby Sanderson #6R",
    "Latitude": 32.09517,
    "Longitude": -100.3914626,
    "TotalBaseWaterVolume": 3402,
    "StateName": "Texas",
    "CountyName": "Nolan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Turner 4 #1",
    "Latitude": 31.36161151,
    "Longitude": -101.6762679,
    "TotalBaseWaterVolume": 1402080.384,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker C Enron",
    "Latitude": 31.3238,
    "Longitude": -101.285,
    "TotalBaseWaterVolume": 915852,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates Rose 05D 12-11",
    "Latitude": 28.1097941,
    "Longitude": -99.7468545,
    "TotalBaseWaterVolume": 2481514,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates Rose 05D 13-11",
    "Latitude": 28.1103888,
    "Longitude": -99.7455242,
    "TotalBaseWaterVolume": 2372346,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates Rose 05D 14-11",
    "Latitude": 28.1108055,
    "Longitude": -99.7444976,
    "TotalBaseWaterVolume": 2728524,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lott 3-2H",
    "Latitude": 35.53,
    "Longitude": -100.21,
    "TotalBaseWaterVolume": 8690720,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Stephens 8 #2",
    "Latitude": 32.52871411,
    "Longitude": -102.0766723,
    "TotalBaseWaterVolume": 1370758,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BI #315",
    "Latitude": 32.039364,
    "Longitude": -102.324986,
    "TotalBaseWaterVolume": 1864362.14,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Allison #2",
    "Latitude": 32.0189699,
    "Longitude": -102.5916485,
    "TotalBaseWaterVolume": 201726,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Chivas Regal 206D",
    "Latitude": 32.047264,
    "Longitude": -102.3099071,
    "TotalBaseWaterVolume": 1363114.936,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Clyde Cowden 238",
    "Latitude": 31.9369,
    "Longitude": -102.57557,
    "TotalBaseWaterVolume": 71531,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Brunson 6 #3",
    "Latitude": 31.94190418,
    "Longitude": -101.6973775,
    "TotalBaseWaterVolume": 1390622,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Jost 25A-2",
    "Latitude": 31.790939,
    "Longitude": -101.561924,
    "TotalBaseWaterVolume": 1295070,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Kohls 22 #3",
    "Latitude": 31.849919,
    "Longitude": -101.399073,
    "TotalBaseWaterVolume": 1989414,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Love 4H",
    "Latitude": 28.84549633,
    "Longitude": -97.9163703,
    "TotalBaseWaterVolume": 3408827,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Love 3H",
    "Latitude": 28.85793466,
    "Longitude": -97.92043981,
    "TotalBaseWaterVolume": 3335751,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Four K Partners #1H",
    "Latitude": 28.626533,
    "Longitude": -98.561567,
    "TotalBaseWaterVolume": 3357270,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Strain 13 #1",
    "Latitude": 32.1522,
    "Longitude": -101.4855,
    "TotalBaseWaterVolume": 876276,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6829 (PA)",
    "Latitude": 32.40198,
    "Longitude": -101.05883,
    "TotalBaseWaterVolume": 12138,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "Miss Kitty 255 #1",
    "Latitude": 31.254916,
    "Longitude": -103.515936,
    "TotalBaseWaterVolume": 1822002,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Griffin, R GU 2H",
    "Latitude": 31.5325389,
    "Longitude": -94.0461889,
    "TotalBaseWaterVolume": 2757458,
    "StateName": "Texas",
    "CountyName": "San Augustine"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Apex GU #02",
    "Latitude": 27.911819,
    "Longitude": -97.362131,
    "TotalBaseWaterVolume": 41748,
    "StateName": "Texas",
    "CountyName": "San Patricio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FireWheel Operating, LLC",
    "WellName": "H&H Ranch 41H",
    "Latitude": 31.8665341,
    "Longitude": -100.9585716,
    "TotalBaseWaterVolume": 10860899,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 3-14A #6",
    "Latitude": 31.27341341,
    "Longitude": -101.8570814,
    "TotalBaseWaterVolume": 1306128,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 21 12",
    "Latitude": 31.54465,
    "Longitude": -102.16763,
    "TotalBaseWaterVolume": 1309690,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Jarzombek Unit #6H",
    "Latitude": 29.085889,
    "Longitude": -97.915222,
    "TotalBaseWaterVolume": 3697386,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Boyd 14-1",
    "Latitude": 32.33274,
    "Longitude": -103.03813,
    "TotalBaseWaterVolume": 79414,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Capstone Natural Resources, LLC",
    "WellName": "Fisher, M M Estate #3",
    "Latitude": 32.39548,
    "Longitude": -102.63428,
    "TotalBaseWaterVolume": 87150,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Ratliff B 1613",
    "Latitude": 32.00285,
    "Longitude": -102.330924,
    "TotalBaseWaterVolume": 1702008,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Range Resources Corporation",
    "WellName": "Edmondson A 4530",
    "Latitude": 31.7306389,
    "Longitude": -101.3211112,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Barsid Unit A1",
    "Latitude": 28.638583,
    "Longitude": -98.215064,
    "TotalBaseWaterVolume": 1985938,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Three Sisters 01 13H",
    "Latitude": 28.574385,
    "Longitude": -98.250693,
    "TotalBaseWaterVolume": 4104114,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Three Sisters 01 12H",
    "Latitude": 28.574016,
    "Longitude": -98.253743,
    "TotalBaseWaterVolume": 3846822,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Three Sisters 01 11H",
    "Latitude": 28.574094,
    "Longitude": -98.253778,
    "TotalBaseWaterVolume": 4064404,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Sevengills 55-1-37 1H",
    "Latitude": 31.9116147,
    "Longitude": -103.7169546,
    "TotalBaseWaterVolume": 7962259,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST NW 36-9",
    "Latitude": 31.977547,
    "Longitude": -102.257475,
    "TotalBaseWaterVolume": 1702974,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Arnett 44 #5",
    "Latitude": 31.37371,
    "Longitude": -101.75762,
    "TotalBaseWaterVolume": 1783824,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Simons #1",
    "Latitude": 33.568475,
    "Longitude": -97.483694,
    "TotalBaseWaterVolume": 23520,
    "StateName": "Texas",
    "CountyName": "San Patricio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch A523H",
    "Latitude": 28.097145,
    "Longitude": -99.618388,
    "TotalBaseWaterVolume": 9356088,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Kyle, Fred Gas Unit 51HH",
    "Latitude": 32.08574928,
    "Longitude": -94.3200806,
    "TotalBaseWaterVolume": 7139395,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tecpetrol Operating LLC",
    "WellName": "Sullivan Deep C-10",
    "Latitude": 27.202819,
    "Longitude": -98.021469,
    "TotalBaseWaterVolume": 78854,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University NG 6211H",
    "Latitude": 31.069058,
    "Longitude": -101.714608,
    "TotalBaseWaterVolume": 6394701,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "J Brown 16 #1",
    "Latitude": 32.55535864,
    "Longitude": -102.1000613,
    "TotalBaseWaterVolume": 1393135,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BD #1105",
    "Latitude": 32.035606,
    "Longitude": -102.301722,
    "TotalBaseWaterVolume": 1952895.96,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Gandu J-105",
    "Latitude": 32.0544,
    "Longitude": -102.71215,
    "TotalBaseWaterVolume": 130338,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "William H. Lackey Oil & Gas Operating Co.",
    "WellName": "Powell C#2",
    "Latitude": 32.22545,
    "Longitude": -101.31316,
    "TotalBaseWaterVolume": 401389,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Lowe Pasture #9H",
    "Latitude": 28.492897,
    "Longitude": -98.728094,
    "TotalBaseWaterVolume": 5814396,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Slatton #7",
    "Latitude": 32.34730888,
    "Longitude": -101.9273477,
    "TotalBaseWaterVolume": 1669478,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Callon Petroleum Operating Company",
    "WellName": "Pecan Acres 23 #6",
    "Latitude": 32.0212,
    "Longitude": -102.1896,
    "TotalBaseWaterVolume": 1758511,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Boynton A #1H",
    "Latitude": 32.08156,
    "Longitude": -97.34743,
    "TotalBaseWaterVolume": 11501742,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Waterfield `A` 8H",
    "Latitude": 35.89455,
    "Longitude": -100.55294,
    "TotalBaseWaterVolume": 2121911,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "JWG H2 4",
    "Latitude": 31.30422,
    "Longitude": -101.99779,
    "TotalBaseWaterVolume": 1241020,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 23 53HH",
    "Latitude": 32.18300382,
    "Longitude": -94.42137345,
    "TotalBaseWaterVolume": 7595333,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Willeke A 2H",
    "Latitude": 29.083289,
    "Longitude": -97.612572,
    "TotalBaseWaterVolume": 3168144,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Baird Heirs Unit #4H",
    "Latitude": 29.235778,
    "Longitude": -97.53325,
    "TotalBaseWaterVolume": 5869542,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Bailey Retzloff 2H",
    "Latitude": 28.765512,
    "Longitude": -97.98725,
    "TotalBaseWaterVolume": 2195087,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "O.H. McAlister 23H",
    "Latitude": 33.074314,
    "Longitude": -97.49273,
    "TotalBaseWaterVolume": 4586397,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix A LZS #66",
    "Latitude": 32.28126017,
    "Longitude": -102.7249121,
    "TotalBaseWaterVolume": 26073,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "University 7 Berkley #10H",
    "Latitude": 32.21331906,
    "Longitude": -102.5289525,
    "TotalBaseWaterVolume": 8851857,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Rosa Lee 7",
    "Latitude": 32.27614,
    "Longitude": -102.72004,
    "TotalBaseWaterVolume": 123982,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Rosa Lee #6",
    "Latitude": 32.2766715,
    "Longitude": -102.7202154,
    "TotalBaseWaterVolume": 90384,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Cordona Lake #162",
    "Latitude": 31.3228087,
    "Longitude": -102.5619209,
    "TotalBaseWaterVolume": 256704,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 263H",
    "Latitude": 31.54302,
    "Longitude": -102.66934,
    "TotalBaseWaterVolume": 2263502,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PPC Operating Company LLC",
    "WellName": "Cowden `60` 10",
    "Latitude": 31.3953,
    "Longitude": -102.49086,
    "TotalBaseWaterVolume": 132766,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Baker B 207H",
    "Latitude": 30.8898,
    "Longitude": -101.2662,
    "TotalBaseWaterVolume": 9324042,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Txl South Unit 5609H",
    "Latitude": 31.81824,
    "Longitude": -102.69968,
    "TotalBaseWaterVolume": 3431358,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "McWatters 44",
    "Latitude": 31.52474,
    "Longitude": -96.23797,
    "TotalBaseWaterVolume": 1837569,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Perry Brooks 1A #3",
    "Latitude": 32.06863,
    "Longitude": -101.65835,
    "TotalBaseWaterVolume": 1018500,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Lawson 14 #1",
    "Latitude": 31.724932,
    "Longitude": -101.45751,
    "TotalBaseWaterVolume": 1344336,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "STS 5H",
    "Latitude": 28.300747,
    "Longitude": -98.929278,
    "TotalBaseWaterVolume": 3827544,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Soliz Unit A1",
    "Latitude": 28.759167,
    "Longitude": -98.1075,
    "TotalBaseWaterVolume": 2073759,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Bull Shark 53-28/Well No. 1",
    "Latitude": 31.81581,
    "Longitude": -103.56386,
    "TotalBaseWaterVolume": 2495094,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 2936",
    "Latitude": 31.12703,
    "Longitude": -94.72199,
    "TotalBaseWaterVolume": 1159875,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Piedra Operating, LLC",
    "WellName": "Holt Ranch 16",
    "Latitude": 32.3446478,
    "Longitude": -102.1279297,
    "TotalBaseWaterVolume": 769969,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 5019W",
    "Latitude": 32.42222,
    "Longitude": -101.05019,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 5221W",
    "Latitude": 32.42949,
    "Longitude": -101.03368,
    "TotalBaseWaterVolume": 14238,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Red River/Well No. 3",
    "Latitude": 31.64312,
    "Longitude": -101.35802,
    "TotalBaseWaterVolume": 642684,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek 44 #7",
    "Latitude": 31.639296,
    "Longitude": -102.019868,
    "TotalBaseWaterVolume": 2214450,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 27 8",
    "Latitude": 31.55526936,
    "Longitude": -102.0490826,
    "TotalBaseWaterVolume": 1473449,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe GGU4 State 17H",
    "Latitude": 28.1454579,
    "Longitude": -99.9056881,
    "TotalBaseWaterVolume": 8010744,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Acadia Oil, LLC",
    "WellName": "Tidewater Sunray #35",
    "Latitude": 33.95915,
    "Longitude": -98.86645,
    "TotalBaseWaterVolume": 3360,
    "StateName": "Texas",
    "CountyName": "Wichita"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Latka Unit 2H",
    "Latitude": 28.9903955,
    "Longitude": -97.8176646,
    "TotalBaseWaterVolume": 9519145,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 16 52HH",
    "Latitude": 32.20808802,
    "Longitude": -94.39490194,
    "TotalBaseWaterVolume": 15754257,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix A LZS #70",
    "Latitude": 32.27842758,
    "Longitude": -102.7208899,
    "TotalBaseWaterVolume": 24133,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Knight 20",
    "Latitude": 32.2345997,
    "Longitude": -102.738566,
    "TotalBaseWaterVolume": 42874,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix A LZS 69",
    "Latitude": 32.27787,
    "Longitude": -102.72377,
    "TotalBaseWaterVolume": 135992,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "The Cumming Company, Inc.",
    "WellName": "Stewart 1H",
    "Latitude": 32.07215,
    "Longitude": -97.738839,
    "TotalBaseWaterVolume": 1444143,
    "StateName": "Texas",
    "CountyName": "Bosque"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Anna Beth Burns 19H",
    "Latitude": 33.153814,
    "Longitude": -97.314403,
    "TotalBaseWaterVolume": 6476521,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Cathey 2 3",
    "Latitude": 32.39036,
    "Longitude": -101.35008,
    "TotalBaseWaterVolume": 221508,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Kotara Unit #4H",
    "Latitude": 29.004231,
    "Longitude": -97.946636,
    "TotalBaseWaterVolume": 3513132,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Reed A1H",
    "Latitude": 28.3483118,
    "Longitude": -99.0281095,
    "TotalBaseWaterVolume": 3277036,
    "StateName": "Texas",
    "CountyName": "LaSalle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Reed A4H",
    "Latitude": 28.3483861,
    "Longitude": -99.0280891,
    "TotalBaseWaterVolume": 3194411,
    "StateName": "Texas",
    "CountyName": "LaSalle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Sevengills 55-1-37 9H",
    "Latitude": 31.911655,
    "Longitude": -103.7030662,
    "TotalBaseWaterVolume": 7521319,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Wheeler Unit 8-1H",
    "Latitude": 28.364303,
    "Longitude": -98.412464,
    "TotalBaseWaterVolume": 4973850,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gentry 12H",
    "Latitude": 28.421889,
    "Longitude": -98.338225,
    "TotalBaseWaterVolume": 2630628,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Dickinson B 6H",
    "Latitude": 28.253027,
    "Longitude": -98.313804,
    "TotalBaseWaterVolume": 94491,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Mims 47 #3",
    "Latitude": 32.291011,
    "Longitude": -101.843121,
    "TotalBaseWaterVolume": 1421505,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BreitBurn",
    "WellName": "Cora 18 #2",
    "Latitude": 32.3098379,
    "Longitude": -101.9603192,
    "TotalBaseWaterVolume": 1213002,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee AZ #1319",
    "Latitude": 32.018231,
    "Longitude": -102.269431,
    "TotalBaseWaterVolume": 2036499.483,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Midkiff #1809",
    "Latitude": 32.02576,
    "Longitude": -102.26764,
    "TotalBaseWaterVolume": 1521954,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texas American Resources Company",
    "WellName": "H B Thompson 39-101H",
    "Latitude": 36.34527284,
    "Longitude": -101.0141406,
    "TotalBaseWaterVolume": 5479421,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Eagle Oil & Gas co.",
    "WellName": "Hornet Stae 26 #2",
    "Latitude": 31.335334,
    "Longitude": -103.344837,
    "TotalBaseWaterVolume": 499956,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 35 10",
    "Latitude": 31.53141,
    "Longitude": -102.13855,
    "TotalBaseWaterVolume": 1595887,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 5123",
    "Latitude": 32.18583,
    "Longitude": -102.72531,
    "TotalBaseWaterVolume": 77329,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Capstone Natural Resources, LLC",
    "WellName": "Fisher #3",
    "Latitude": 32.39292,
    "Longitude": -102.6376,
    "TotalBaseWaterVolume": 91644,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Willeke A 1H",
    "Latitude": 29.083239,
    "Longitude": -97.612604,
    "TotalBaseWaterVolume": 2484552,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Erica 8",
    "Latitude": 31.75771,
    "Longitude": -102.35089,
    "TotalBaseWaterVolume": 1578184,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ricochet Energy, Inc.",
    "WellName": "Kotzebue 1",
    "Latitude": 28.756,
    "Longitude": -99.0673,
    "TotalBaseWaterVolume": 344080,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Frost/Well No. 4",
    "Latitude": 31.68353,
    "Longitude": -101.3637,
    "TotalBaseWaterVolume": 657048,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI-Seidenberger 29 #2",
    "Latitude": 31.8038861,
    "Longitude": -101.534368,
    "TotalBaseWaterVolume": 2723169,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Carpenter 1-2",
    "Latitude": 31.40762,
    "Longitude": -96.28763,
    "TotalBaseWaterVolume": 369674,
    "StateName": "Texas",
    "CountyName": "Limestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Dubree 34 #2",
    "Latitude": 32.1018,
    "Longitude": -101.5603,
    "TotalBaseWaterVolume": 633432,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 1736",
    "Latitude": 31.46738,
    "Longitude": -92.95901,
    "TotalBaseWaterVolume": 1160001.53,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Discovery Operating, Inc.",
    "WellName": "JW 8 7",
    "Latitude": 31,
    "Longitude": -102,
    "TotalBaseWaterVolume": 623938,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Lane Trust-D-45P",
    "Latitude": 31.64425556,
    "Longitude": -101.4609639,
    "TotalBaseWaterVolume": 622117,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "SUGG-C-165K",
    "Latitude": 31.64425556,
    "Longitude": -101.4609639,
    "TotalBaseWaterVolume": 1862223,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LCS Production Company",
    "WellName": "Corsica No.21",
    "Latitude": 33.12028,
    "Longitude": -100.0734,
    "TotalBaseWaterVolume": 56426,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "NorthStar Operating Company",
    "WellName": "Graham #2",
    "Latitude": 31.5013805,
    "Longitude": -102.8109806,
    "TotalBaseWaterVolume": 148886,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 15 SW 3",
    "Latitude": 32.1648489,
    "Longitude": -102.6817865,
    "TotalBaseWaterVolume": 22491,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 463H",
    "Latitude": 31.54249,
    "Longitude": -102.66944,
    "TotalBaseWaterVolume": 1889769,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PPC Operating Company LLC",
    "WellName": "Cowden `58` 100",
    "Latitude": 31.38996,
    "Longitude": -102.47942,
    "TotalBaseWaterVolume": 175308,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark 'A'  No. 3525",
    "Latitude": 33.487749,
    "Longitude": -101.485618,
    "TotalBaseWaterVolume": 37675,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BB #2317",
    "Latitude": 32.0006,
    "Longitude": -102.288283,
    "TotalBaseWaterVolume": 1872865.71,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GOLDSMITH-LANDRETH DEEP UNIT 541",
    "Latitude": 32.032489,
    "Longitude": -102.666006,
    "TotalBaseWaterVolume": 126655,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Jason #3",
    "Latitude": 32.0029521,
    "Longitude": -102.5955091,
    "TotalBaseWaterVolume": 308784,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Sante 1H",
    "Latitude": 29.4237,
    "Longitude": -97.0006,
    "TotalBaseWaterVolume": 2069519,
    "StateName": "Texas",
    "CountyName": "Fayette"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LCS Production Company",
    "WellName": "Alldredge #1",
    "Latitude": 32.54041581,
    "Longitude": -100.348439,
    "TotalBaseWaterVolume": 167706,
    "StateName": "Texas",
    "CountyName": "Fisher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "JE Cox 3306HU",
    "Latitude": 31.689906,
    "Longitude": -101.472863,
    "TotalBaseWaterVolume": 9516252,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Wilkinson 31#6",
    "Latitude": 31.675343,
    "Longitude": -101.504225,
    "TotalBaseWaterVolume": 1603518,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wessendorff 01 02H",
    "Latitude": 28.855599,
    "Longitude": -97.792481,
    "TotalBaseWaterVolume": 4869690,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wessendorff 01 03H",
    "Latitude": 28.855599,
    "Longitude": -97.792481,
    "TotalBaseWaterVolume": 4888800,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wessendorff 01 04H",
    "Latitude": 28.85561,
    "Longitude": -97.792388,
    "TotalBaseWaterVolume": 4959486,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Carpenter-Kellner 1H",
    "Latitude": 28.807648,
    "Longitude": -98.117413,
    "TotalBaseWaterVolume": 3346936,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Chapman-Hummel 1H",
    "Latitude": 28.824359,
    "Longitude": -98.117413,
    "TotalBaseWaterVolume": 2078266,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Magnum Hunter Resources Corp",
    "WellName": "Bertha #1",
    "Latitude": 29.574261,
    "Longitude": -97.1619139,
    "TotalBaseWaterVolume": 5635024,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jones-Holton/Well No. 45",
    "Latitude": 32.36969,
    "Longitude": -102.00644,
    "TotalBaseWaterVolume": 621100,
    "StateName": "Texas",
    "CountyName": "Martin 10/18/12"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Scharbauer Ranch A #19",
    "Latitude": 32.23973032,
    "Longitude": -102.1436951,
    "TotalBaseWaterVolume": 1569946,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Cross Bar Ranch #709",
    "Latitude": 32.15394,
    "Longitude": -102.2054,
    "TotalBaseWaterVolume": 1511370,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Hecker/Well No. 13",
    "Latitude": 32.39221,
    "Longitude": -101.96941,
    "TotalBaseWaterVolume": 726432,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Nail Ranch 2 #4",
    "Latitude": 32.11317,
    "Longitude": -102.00979,
    "TotalBaseWaterVolume": 1083936,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Wade Estate A3 #2",
    "Latitude": 32.562969,
    "Longitude": -101.951098,
    "TotalBaseWaterVolume": 1796424,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Robb A #1",
    "Latitude": 32.10910154,
    "Longitude": -101.7147719,
    "TotalBaseWaterVolume": 1500922,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "TXL G #7",
    "Latitude": 31.7317866,
    "Longitude": -102.2138113,
    "TotalBaseWaterVolume": 1018660,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hulet 138 #10",
    "Latitude": 31.52002512,
    "Longitude": -101.3926807,
    "TotalBaseWaterVolume": 1290173.384,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Divide Draw 126M",
    "Latitude": 31.27894,
    "Longitude": -101.40013,
    "TotalBaseWaterVolume": 1327116,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Perry State 264 #5",
    "Latitude": 31.2830444,
    "Longitude": -103.487547,
    "TotalBaseWaterVolume": 1128120,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Lora Lynn 10",
    "Latitude": 31.38081,
    "Longitude": -102.19513,
    "TotalBaseWaterVolume": 1307410,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PetroPoint Energy Operating, LLC.",
    "WellName": "South Callaghan Ranch 278",
    "Latitude": 27.67858,
    "Longitude": -99.23934,
    "TotalBaseWaterVolume": 45973,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch A524H",
    "Latitude": 28.097103,
    "Longitude": -99.618427,
    "TotalBaseWaterVolume": 9311316,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "O.H. McAlister 16H",
    "Latitude": 33.07,
    "Longitude": -97.48,
    "TotalBaseWaterVolume": 3276659,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Czewski B 1H",
    "Latitude": 33.4144565,
    "Longitude": -97.642293,
    "TotalBaseWaterVolume": 5580614,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 23 54HH",
    "Latitude": 32.18298633,
    "Longitude": -94.4213303,
    "TotalBaseWaterVolume": 6943856,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Rosa Lee 2",
    "Latitude": 32.2785,
    "Longitude": -102.72055,
    "TotalBaseWaterVolume": 47838,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Millie C 6",
    "Latitude": 31.64183,
    "Longitude": -102.32308,
    "TotalBaseWaterVolume": 1472854,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University NG 6211H",
    "Latitude": 31.069058,
    "Longitude": -101.714608,
    "TotalBaseWaterVolume": 6394701,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "D1-D3-SANDERS-D3 SA 1H",
    "Latitude": 33.13298,
    "Longitude": -97.33138,
    "TotalBaseWaterVolume": 5005014,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Mollie/Well No. 6",
    "Latitude": 31.66289,
    "Longitude": -101.37942,
    "TotalBaseWaterVolume": 1661730,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Young 51-2",
    "Latitude": 35.4256641,
    "Longitude": -100.24054,
    "TotalBaseWaterVolume": 1172746,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Murray -A-/Well No. 8 (PA)",
    "Latitude": 32.29904,
    "Longitude": -101.20427,
    "TotalBaseWaterVolume": 25200,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Broughton 23 #1",
    "Latitude": 32.273514,
    "Longitude": -101.5345,
    "TotalBaseWaterVolume": 1186616.87,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg A A 1894 3",
    "Latitude": 31.38663,
    "Longitude": -100.91538,
    "TotalBaseWaterVolume": 245154,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Rock Hollow C 137F",
    "Latitude": 31.27144,
    "Longitude": -101.22314,
    "TotalBaseWaterVolume": 876960,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Four K Partners #2H",
    "Latitude": 28.627881,
    "Longitude": -98.561014,
    "TotalBaseWaterVolume": 3767610,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newark E&P Operating, LLC",
    "WellName": "Kilgust 2",
    "Latitude": 32.97905,
    "Longitude": -98.21995,
    "TotalBaseWaterVolume": 526470,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texakoma Operating, L.P.",
    "WellName": "Crosby 12 2",
    "Latitude": 35.91358333,
    "Longitude": -100.6520556,
    "TotalBaseWaterVolume": 957515,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Midenergy Operating, LLC",
    "WellName": "Neal 4601",
    "Latitude": 32.522416,
    "Longitude": -102.043257,
    "TotalBaseWaterVolume": 803847.0711,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Adobe 22",
    "Latitude": 31.43735,
    "Longitude": -103.457142,
    "TotalBaseWaterVolume": 1952,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 3-10",
    "Latitude": 28.098642,
    "Longitude": -99.730353,
    "TotalBaseWaterVolume": 2658650,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "McAlister - WCCO 4 (SA) A 1H",
    "Latitude": 33.07,
    "Longitude": -97.48,
    "TotalBaseWaterVolume": 7373951,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tecpetrol Operating LLC",
    "WellName": "Sullivan Deep C-10",
    "Latitude": 27.202819,
    "Longitude": -98.021469,
    "TotalBaseWaterVolume": 113263,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "HighMount Exploration & Production",
    "WellName": "University 3-10H",
    "Latitude": 30.935,
    "Longitude": -100.986,
    "TotalBaseWaterVolume": 4247418,
    "StateName": "Texas",
    "CountyName": "CROCKETT"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "FOGMT 7SP",
    "Latitude": 28.2319139,
    "Longitude": -100.0288778,
    "TotalBaseWaterVolume": 7382071,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "CMWW A4501H",
    "Latitude": 28.366577,
    "Longitude": -99.847756,
    "TotalBaseWaterVolume": 8608693,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Txl South Unit 5608H",
    "Latitude": 31.81921,
    "Longitude": -102.69962,
    "TotalBaseWaterVolume": 3838548,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Brunson 24 #6",
    "Latitude": 31.89093581,
    "Longitude": -101.7076595,
    "TotalBaseWaterVolume": 1425306,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Clayton Williams Energy, Inc.",
    "WellName": "Foster 240 #1H",
    "Latitude": 31.9889508,
    "Longitude": -101.3008657,
    "TotalBaseWaterVolume": 2025731,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Gardien #4H",
    "Latitude": 29.194667,
    "Longitude": -97.521222,
    "TotalBaseWaterVolume": 4665108,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg A A 1895 6",
    "Latitude": 31.37314,
    "Longitude": -100.92663,
    "TotalBaseWaterVolume": 181818,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Rock Hollow 190C",
    "Latitude": 31.21723,
    "Longitude": -101.24114,
    "TotalBaseWaterVolume": 854574,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Kotara Unit #9H",
    "Latitude": 29.004283,
    "Longitude": -97.946492,
    "TotalBaseWaterVolume": 3762738,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Pierce 20H",
    "Latitude": 28.320605,
    "Longitude": -99.09798,
    "TotalBaseWaterVolume": 11116674,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Pierce 21H",
    "Latitude": 28.320632,
    "Longitude": -99.098014,
    "TotalBaseWaterVolume": 11733459,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Naylor Jones Unit 63 #1H",
    "Latitude": 28.5023,
    "Longitude": -98.882903,
    "TotalBaseWaterVolume": 5218416,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Live Bee 03 01H",
    "Latitude": 28.630643,
    "Longitude": -98.082292,
    "TotalBaseWaterVolume": 3149874,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Sevengills 55-1-37 6H",
    "Latitude": 31.9116418,
    "Longitude": -103.7076618,
    "TotalBaseWaterVolume": 5538591,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Bivins-LIT 2211",
    "Latitude": 35.612284,
    "Longitude": -102.2599276,
    "TotalBaseWaterVolume": 128819,
    "StateName": "Texas",
    "CountyName": "Oldham"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Newby-Phillips (SA) 5H",
    "Latitude": 32.9876951,
    "Longitude": -97.6511246,
    "TotalBaseWaterVolume": 3486520,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hughes 195 #6",
    "Latitude": 31.2174836,
    "Longitude": -101.3182676,
    "TotalBaseWaterVolume": 1239775.384,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Encana Oil & Gas (USA) Inc.",
    "WellName": "Circle M Ranch-Hoyt GU 01H",
    "Latitude": 31.106249,
    "Longitude": -96.391799,
    "TotalBaseWaterVolume": 12515916,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 15-11",
    "Latitude": 28.098515,
    "Longitude": -99.73042,
    "TotalBaseWaterVolume": 249799,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 16-11",
    "Latitude": 28.1121783,
    "Longitude": -99.7415395,
    "TotalBaseWaterVolume": 2515130,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 12-11",
    "Latitude": 28.095289,
    "Longitude": -99.736101,
    "TotalBaseWaterVolume": 2728524,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 14-11",
    "Latitude": 28.095354,
    "Longitude": -99.735962,
    "TotalBaseWaterVolume": 2728524,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Jeff Fox SA 7H",
    "Latitude": 33.20122,
    "Longitude": -97.43592,
    "TotalBaseWaterVolume": 6055224,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "McElreath 17",
    "Latitude": 32.26547,
    "Longitude": -102.68071,
    "TotalBaseWaterVolume": 99418,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "R May B 2H",
    "Latitude": 28.698047,
    "Longitude": -98.240844,
    "TotalBaseWaterVolume": 2640094,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlackBrush O & G, Inc.",
    "WellName": "San Pedro Ranch 960H",
    "Latitude": 28.28595,
    "Longitude": -99.89468,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Brewer Unit B1",
    "Latitude": 28.592959,
    "Longitude": -98.309709,
    "TotalBaseWaterVolume": 2217115,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Wodbine Acquisition LLC",
    "WellName": "Ruger 1H",
    "Latitude": 30.88952,
    "Longitude": -96.12918,
    "TotalBaseWaterVolume": 2378670,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Harris M 1H",
    "Latitude": 32.24485,
    "Longitude": -100.48401,
    "TotalBaseWaterVolume": 8530074,
    "StateName": "Texas",
    "CountyName": "Nolan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Bivins-LIT 405",
    "Latitude": 35.55465034,
    "Longitude": -102.2577327,
    "TotalBaseWaterVolume": 153819,
    "StateName": "Texas",
    "CountyName": "Oldham"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Encana Oil & Gas (USA) Inc.",
    "WellName": "McMurrey Loraine Trust U 01H",
    "Latitude": 30.992342,
    "Longitude": -96.265964,
    "TotalBaseWaterVolume": 14392854,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Encana Oil & Gas (USA) Inc.",
    "WellName": "McMurrey Loraine Trust U 02H",
    "Latitude": 30.992261,
    "Longitude": -96.265902,
    "TotalBaseWaterVolume": 10157196,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "Moczygemba B 1H",
    "Latitude": 29.01,
    "Longitude": -98.03,
    "TotalBaseWaterVolume": 5218873,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Maddox Estate Gas Unit 11H",
    "Latitude": 32.1647179,
    "Longitude": -94.84315402,
    "TotalBaseWaterVolume": 7662239,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Britt 3402H",
    "Latitude": 35.487122,
    "Longitude": -100.118151,
    "TotalBaseWaterVolume": 5578616,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240C #2608",
    "Latitude": 32.285403,
    "Longitude": -102.237009,
    "TotalBaseWaterVolume": 1588199,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "University Roxanne 6",
    "Latitude": 32.384944,
    "Longitude": -102.415972,
    "TotalBaseWaterVolume": 422574,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "University Camille 106",
    "Latitude": 32.38986,
    "Longitude": -102.39805,
    "TotalBaseWaterVolume": 1843456,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU #5122",
    "Latitude": 32.189522,
    "Longitude": -102.7161318,
    "TotalBaseWaterVolume": 28973,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Baker B 206H",
    "Latitude": 30.8922,
    "Longitude": -101.2662,
    "TotalBaseWaterVolume": 8366652,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "D1-SANDERS-D3-SANDERS-D3 SA 1H",
    "Latitude": 33.13285,
    "Longitude": -97.33166,
    "TotalBaseWaterVolume": 6509580,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Crown Equipment Co.",
    "WellName": "Fields \"A\" #5",
    "Latitude": 32.630078,
    "Longitude": -100.170445,
    "TotalBaseWaterVolume": 78288,
    "StateName": "Texas",
    "CountyName": "Fisher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Silver Creek Oil & Gas, LLC",
    "WellName": "John Marshall 6H",
    "Latitude": 33.74375,
    "Longitude": -96.880667,
    "TotalBaseWaterVolume": 3125430,
    "StateName": "Texas",
    "CountyName": "Grayson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Silver Creek Oil & Gas, LLC",
    "WellName": "MA Scarbrough 8",
    "Latitude": 33.743733,
    "Longitude": -96.880608,
    "TotalBaseWaterVolume": 838446,
    "StateName": "Texas",
    "CountyName": "Grayson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Young 66-2A",
    "Latitude": 35.443948,
    "Longitude": -100.2436756,
    "TotalBaseWaterVolume": 1847572,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Resource Partners, LP",
    "WellName": "M & M Ranch B 8H",
    "Latitude": 32.50941,
    "Longitude": -97.71821,
    "TotalBaseWaterVolume": 3390744,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Lees 22 #2R",
    "Latitude": 32.35469,
    "Longitude": -101.65936,
    "TotalBaseWaterVolume": 1088010,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Jolliff 2H",
    "Latitude": 33.108055,
    "Longitude": -98.175972,
    "TotalBaseWaterVolume": 2803426,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Franklin 1H",
    "Latitude": 28.89183663,
    "Longitude": -98.0361222,
    "TotalBaseWaterVolume": 4637906,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Franklin 2H",
    "Latitude": 28.89183663,
    "Longitude": -98.0361222,
    "TotalBaseWaterVolume": 4342143,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Cochina East Ranch 69H",
    "Latitude": 28.35805231,
    "Longitude": -99.3814391,
    "TotalBaseWaterVolume": 7004592,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Storey-Peebles Unit 5H",
    "Latitude": 28.195206,
    "Longitude": -98.583003,
    "TotalBaseWaterVolume": 167720,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Storey-Peebles Unit 8H",
    "Latitude": 28.195178,
    "Longitude": -98.583003,
    "TotalBaseWaterVolume": 159071,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "CBR 18 1H",
    "Latitude": 31.969683,
    "Longitude": -103.898564,
    "TotalBaseWaterVolume": 3208818,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Regan McElvain 1H",
    "Latitude": 31.72595,
    "Longitude": -103.585419,
    "TotalBaseWaterVolume": 1556518,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "McVey 1H",
    "Latitude": 31.066643,
    "Longitude": -95.978653,
    "TotalBaseWaterVolume": 2040121,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Viola Hale #3",
    "Latitude": 32.2621,
    "Longitude": -101.4708,
    "TotalBaseWaterVolume": 967256,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Scharbauer, C. 4103M",
    "Latitude": 31.88084,
    "Longitude": -102.09536,
    "TotalBaseWaterVolume": 735909,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6351W",
    "Latitude": 32.42328,
    "Longitude": -101.02725,
    "TotalBaseWaterVolume": 14787,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6349W",
    "Latitude": 32.41548,
    "Longitude": -101.03809,
    "TotalBaseWaterVolume": 17472,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Bivins-LIT 2802",
    "Latitude": 35.55450081,
    "Longitude": -102.2441889,
    "TotalBaseWaterVolume": 120440,
    "StateName": "Texas",
    "CountyName": "Oldham"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "MBB 002",
    "Latitude": 31.406839,
    "Longitude": -103.470536,
    "TotalBaseWaterVolume": 112434,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Quicksilver Resources Inc.",
    "WellName": "Vande Ranch #1H",
    "Latitude": 31.09892,
    "Longitude": -101.93958,
    "TotalBaseWaterVolume": 3781085,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Schmieder 1H",
    "Latitude": 30.139324,
    "Longitude": -96.53153,
    "TotalBaseWaterVolume": 3014802,
    "StateName": "Texas",
    "CountyName": "Washington"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "DENVER UNIT 4356",
    "Latitude": 32.97122,
    "Longitude": -102.873244,
    "TotalBaseWaterVolume": 37018,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 9 55HH",
    "Latitude": 32.15277,
    "Longitude": -94.40514241,
    "TotalBaseWaterVolume": 7662239,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Viceroy Petroleum",
    "WellName": "MBA #1",
    "Latitude": 30.6214669,
    "Longitude": -96.9727934,
    "TotalBaseWaterVolume": 35616,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Viceroy Petroleum",
    "WellName": "Betty #1",
    "Latitude": 30.618043,
    "Longitude": -96.9779687,
    "TotalBaseWaterVolume": 22512,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "JT Lindley-Lynne #57",
    "Latitude": 32.2988177,
    "Longitude": -102.7181501,
    "TotalBaseWaterVolume": 91467,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Knight 21",
    "Latitude": 32.2342459,
    "Longitude": -102.7358523,
    "TotalBaseWaterVolume": 22728,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU 5124",
    "Latitude": 32.19837,
    "Longitude": -102.71819,
    "TotalBaseWaterVolume": 136794,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix C LZS 8",
    "Latitude": 32.279164,
    "Longitude": -102.72572,
    "TotalBaseWaterVolume": 154637,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Rosa Lee #4",
    "Latitude": 32.2758354,
    "Longitude": -102.7214302,
    "TotalBaseWaterVolume": 23484,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Mitchell 22 #2",
    "Latitude": 32.5635,
    "Longitude": -101.94382,
    "TotalBaseWaterVolume": 963228,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Ckodre A #1H",
    "Latitude": 29.005125,
    "Longitude": -97.681678,
    "TotalBaseWaterVolume": 3666440,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Ckodre A #1H",
    "Latitude": 29.005125,
    "Longitude": -97.681678,
    "TotalBaseWaterVolume": 3666440,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Millie B 5",
    "Latitude": 31.65808,
    "Longitude": -102.33266,
    "TotalBaseWaterVolume": 851698,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "CC Thompson #43",
    "Latitude": 31.50567,
    "Longitude": -96.27084,
    "TotalBaseWaterVolume": 802704,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Hardy 18 7",
    "Latitude": 31.8528,
    "Longitude": -101.46624,
    "TotalBaseWaterVolume": 1356239,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Gardien #3H",
    "Latitude": 29.194556,
    "Longitude": -97.521222,
    "TotalBaseWaterVolume": 4449060,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Alexander 33 7HA",
    "Latitude": 35.72,
    "Longitude": -100.15,
    "TotalBaseWaterVolume": 6125399,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Resource Partners, LP",
    "WellName": "M & M Ranch B 9H",
    "Latitude": 32.50984,
    "Longitude": -97.71701,
    "TotalBaseWaterVolume": 3725064,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Resource Partners, LP",
    "WellName": "M & M Ranch B 10H",
    "Latitude": 32.50987,
    "Longitude": -97.71697,
    "TotalBaseWaterVolume": 3691968,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "King 13 #2",
    "Latitude": 32.311174,
    "Longitude": -101.526034,
    "TotalBaseWaterVolume": 1220659.78,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Willowbend Investments, Inc.",
    "WellName": "Meers #1R",
    "Latitude": 33.45908,
    "Longitude": -99.56553,
    "TotalBaseWaterVolume": 17178,
    "StateName": "Texas",
    "CountyName": "Knox"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "STS B 5H",
    "Latitude": 28.321881,
    "Longitude": -98.876547,
    "TotalBaseWaterVolume": 2870151,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jones Energy Ltd",
    "WellName": "Graves 11H",
    "Latitude": 36.21665,
    "Longitude": -100.03245,
    "TotalBaseWaterVolume": 332378,
    "StateName": "Texas",
    "CountyName": "Lipscomb County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Duke `856` Cruise 1H",
    "Latitude": 36.33121,
    "Longitude": -100.45057,
    "TotalBaseWaterVolume": 652495,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Curtis A #10",
    "Latitude": 32.25913537,
    "Longitude": -102.1117724,
    "TotalBaseWaterVolume": 1546958,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jones-Holton/Well No. 50",
    "Latitude": 32.35284,
    "Longitude": -102.01591,
    "TotalBaseWaterVolume": 1562148,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Sarah Ann #3807",
    "Latitude": 31.9665,
    "Longitude": -102.27021,
    "TotalBaseWaterVolume": 1366806,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hennigan B Unit #1H",
    "Latitude": 33.6569,
    "Longitude": -97.485256,
    "TotalBaseWaterVolume": 5457396,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Newby-Phillips (SA) A 1H",
    "Latitude": 32.9876946,
    "Longitude": -97.6510567,
    "TotalBaseWaterVolume": 4222949,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Cat Claw B 63G",
    "Latitude": 31.35835,
    "Longitude": -101.28767,
    "TotalBaseWaterVolume": 899178,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "University 12-18 #2H",
    "Latitude": 31.094227,
    "Longitude": -101.560391,
    "TotalBaseWaterVolume": 8499876,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Billy Turner 1-9",
    "Latitude": 31.246,
    "Longitude": -96.43093,
    "TotalBaseWaterVolume": 392163,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 3-31 5H",
    "Latitude": 31.20199685,
    "Longitude": -101.7748927,
    "TotalBaseWaterVolume": 9322918,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "JT Lindley Lynne A 8",
    "Latitude": 32.2980508,
    "Longitude": -102.7336035,
    "TotalBaseWaterVolume": 160465,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix 150",
    "Latitude": 32.2872141,
    "Longitude": -102.7145989,
    "TotalBaseWaterVolume": 95905,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Crozier A 1H",
    "Latitude": 29.114386,
    "Longitude": -97.587928,
    "TotalBaseWaterVolume": 4196850,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Kleine 01 02H",
    "Latitude": 29.047805,
    "Longitude": -97.510632,
    "TotalBaseWaterVolume": 3818724,
    "StateName": "Texas",
    "CountyName": "Dewitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Shoe Bar 2301",
    "Latitude": 31.75487,
    "Longitude": -102.7596,
    "TotalBaseWaterVolume": 135786,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 554",
    "Latitude": 32.032117,
    "Longitude": -102.684342,
    "TotalBaseWaterVolume": 131076,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Headlee #3405",
    "Latitude": 31.96687,
    "Longitude": -102.28809,
    "TotalBaseWaterVolume": 1457736,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Ruby Middleton  #4",
    "Latitude": 31.69193,
    "Longitude": -96.2111,
    "TotalBaseWaterVolume": 839370,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Fred B Houston #4",
    "Latitude": 32.05446699,
    "Longitude": -101.7071299,
    "TotalBaseWaterVolume": 1474651,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jones -46-/Well No. 6",
    "Latitude": 31.66829,
    "Longitude": -101.35546,
    "TotalBaseWaterVolume": 2401854,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Corson 11 #2",
    "Latitude": 32.03140572,
    "Longitude": -101.7081047,
    "TotalBaseWaterVolume": 1583092,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Corson 11 #2",
    "Latitude": 32.03140572,
    "Longitude": -101.7081047,
    "TotalBaseWaterVolume": 1583092,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forest Oil Corporation",
    "WellName": "Moos Cook 1H",
    "Latitude": 29.343592,
    "Longitude": -97.639358,
    "TotalBaseWaterVolume": 2284040,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Broughton 30A #1",
    "Latitude": 32.1726,
    "Longitude": -101.2944,
    "TotalBaseWaterVolume": 885738,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Rock Hollow 186L",
    "Latitude": 31.22253,
    "Longitude": -101.26351,
    "TotalBaseWaterVolume": 860832,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Best Petroleum Explorations, Inc.",
    "WellName": "Clayton #1",
    "Latitude": 33.107,
    "Longitude": -98.26007,
    "TotalBaseWaterVolume": 29190,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Felix A2H ?",
    "Latitude": 28.849682,
    "Longitude": -98.039606,
    "TotalBaseWaterVolume": 3261387,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Swetlick 01 01H",
    "Latitude": 28.508238,
    "Longitude": -98.160274,
    "TotalBaseWaterVolume": 3599652,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Warhawk 1915",
    "Latitude": 32.232022,
    "Longitude": -102.209011,
    "TotalBaseWaterVolume": 651395,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Cox 12A #3",
    "Latitude": 32.1825,
    "Longitude": -102.0112,
    "TotalBaseWaterVolume": 694974,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "NOA TXL Fee 3711M",
    "Latitude": 31.96303944,
    "Longitude": -102.2612158,
    "TotalBaseWaterVolume": 987685,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BE #615",
    "Latitude": 32.051658,
    "Longitude": -102.275589,
    "TotalBaseWaterVolume": 1694348.792,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "WBH Energy Partners LLC",
    "WellName": "Martin B 4H",
    "Latitude": 33.546734,
    "Longitude": -97.48736,
    "TotalBaseWaterVolume": 5408634,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "WBH Energy Partners LLC",
    "WellName": "Martin B 5H",
    "Latitude": 33.546734,
    "Longitude": -97.48736,
    "TotalBaseWaterVolume": 5404098,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "WBH Energy Partners LLC",
    "WellName": "Martin B 6H",
    "Latitude": 33.546738,
    "Longitude": -97.4873,
    "TotalBaseWaterVolume": 5329380,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hulet 164 #6",
    "Latitude": 31.50141612,
    "Longitude": -101.4007717,
    "TotalBaseWaterVolume": 1241130.384,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Callaway 1H",
    "Latitude": 30.910588,
    "Longitude": -96.52793,
    "TotalBaseWaterVolume": 6972504,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W&T Offshore, Inc.",
    "WellName": "Blackstone Colwell A-8 #1",
    "Latitude": 33.04375,
    "Longitude": -102.542086,
    "TotalBaseWaterVolume": 3478570,
    "StateName": "Texas",
    "CountyName": "San Augustine County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Vantage Fort Worth Energy LLC",
    "WellName": "LABC North 2H",
    "Latitude": 32.69529,
    "Longitude": -97.18343,
    "TotalBaseWaterVolume": 5457060,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W&T Offshore, Inc.",
    "WellName": "Blackstone Colwell A-8 #1",
    "Latitude": 33.04375,
    "Longitude": -102.542086,
    "TotalBaseWaterVolume": 3478570,
    "StateName": "Texas",
    "CountyName": "San Augustine County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Dawn #1",
    "Latitude": 31.38607,
    "Longitude": -102.05979,
    "TotalBaseWaterVolume": 616000,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 39 6",
    "Latitude": 31.50831602,
    "Longitude": -102.1486611,
    "TotalBaseWaterVolume": 1436971,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Christian 46 2",
    "Latitude": 31.464181,
    "Longitude": -103.455206,
    "TotalBaseWaterVolume": 1214945,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Monroe 34-116 Unit #1H",
    "Latitude": 31.4533,
    "Longitude": -103.218,
    "TotalBaseWaterVolume": 1213471,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legend Natural Gas, LLC",
    "WellName": "Fletcher A 2H",
    "Latitude": 33.36522,
    "Longitude": -97.40153,
    "TotalBaseWaterVolume": 3999618,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legend Natural Gas, LLC",
    "WellName": "Fletcher A 3H",
    "Latitude": 33.366664,
    "Longitude": -97.4016,
    "TotalBaseWaterVolume": 3198636,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240A-2007",
    "Latitude": 31.247418,
    "Longitude": -102.277776,
    "TotalBaseWaterVolume": 1464834,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark 'J' #3527",
    "Latitude": 33.487758,
    "Longitude": -101.481829,
    "TotalBaseWaterVolume": 40040,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Deford 12",
    "Latitude": 32.01845,
    "Longitude": -102.680667,
    "TotalBaseWaterVolume": 191523,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "The Cumming Company, Inc.",
    "WellName": "Hoeck B-1",
    "Latitude": 32.399535,
    "Longitude": -98.447212,
    "TotalBaseWaterVolume": 351792,
    "StateName": "Texas",
    "CountyName": "Erath"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BP America Production Company",
    "WellName": "Isaacs C 195-6 H",
    "Latitude": 35.877028,
    "Longitude": -100.535889,
    "TotalBaseWaterVolume": 837270,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Rock Hollow 190P",
    "Latitude": 31.20567,
    "Longitude": -101.23322,
    "TotalBaseWaterVolume": 878598,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Manchaca Unit #2H",
    "Latitude": 29.005539,
    "Longitude": -97.990428,
    "TotalBaseWaterVolume": 4731300,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jones Energy Ltd",
    "WellName": "Graves 10H",
    "Latitude": 36.21665,
    "Longitude": -100.03707,
    "TotalBaseWaterVolume": 415947,
    "StateName": "Texas",
    "CountyName": "Lipscomb County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Jambers 10H",
    "Latitude": 28.555811,
    "Longitude": -98.413017,
    "TotalBaseWaterVolume": 8557382,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Jambers 9H",
    "Latitude": 28.555878,
    "Longitude": -98.413036,
    "TotalBaseWaterVolume": 8960305,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 2038",
    "Latitude": 32.11852,
    "Longitude": -102.16959,
    "TotalBaseWaterVolume": 895650,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jones-Holton/Well No. 47",
    "Latitude": 32.36281,
    "Longitude": -102.00422,
    "TotalBaseWaterVolume": 726432,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST S 5-13",
    "Latitude": 31.938797,
    "Longitude": -102.222375,
    "TotalBaseWaterVolume": 1754718,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Berry Petroleum",
    "WellName": "Midkiff 42 #16",
    "Latitude": 31.682746,
    "Longitude": -101.929012,
    "TotalBaseWaterVolume": 892164,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "TXL G #8",
    "Latitude": 31.7342171,
    "Longitude": -102.2196392,
    "TotalBaseWaterVolume": 1359314,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 5206 (PA)",
    "Latitude": 32.4278,
    "Longitude": -101.03562,
    "TotalBaseWaterVolume": 28644,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6309 (PA)",
    "Latitude": 32.41989,
    "Longitude": -101.02972,
    "TotalBaseWaterVolume": 28476,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 3811 (PA)",
    "Latitude": 32.43635,
    "Longitude": -101.0315,
    "TotalBaseWaterVolume": 32886,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Vantage Fort Worth Energy LLC",
    "WellName": "LABC North 3H",
    "Latitude": 32.69529,
    "Longitude": -97.18345437,
    "TotalBaseWaterVolume": 5457060,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU3 2411",
    "Latitude": 31.62277,
    "Longitude": -102.14723,
    "TotalBaseWaterVolume": 951409,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Krueger Hoelscher 1H",
    "Latitude": 28.774979,
    "Longitude": -98.138084,
    "TotalBaseWaterVolume": 2626167,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Krueger Zunker 1H",
    "Latitude": 28.774979,
    "Longitude": -98.138006,
    "TotalBaseWaterVolume": 2124713,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Barkowsky 48 #1",
    "Latitude": 32.53234,
    "Longitude": -101.80599,
    "TotalBaseWaterVolume": 1497959,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 24H",
    "Latitude": 28.3032611,
    "Longitude": -99.8131667,
    "TotalBaseWaterVolume": 9939062,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mary Ellen 12",
    "Latitude": 31.70797,
    "Longitude": -102.33046,
    "TotalBaseWaterVolume": 1871800,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BB #2320",
    "Latitude": 32.99885,
    "Longitude": -102.287733,
    "TotalBaseWaterVolume": 1893449.581,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "The Cumming Company, Inc.",
    "WellName": "Spradling #1",
    "Latitude": 32.468418,
    "Longitude": -98.3184,
    "TotalBaseWaterVolume": 182448,
    "StateName": "Texas",
    "CountyName": "Erath"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Trinity -16-/Well No. 8",
    "Latitude": 31.72578,
    "Longitude": -101.49661,
    "TotalBaseWaterVolume": 2300970,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Houston Ranch 25 #3",
    "Latitude": 32.00062563,
    "Longitude": -101.7430737,
    "TotalBaseWaterVolume": 1323262,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Brunson 35 #3",
    "Latitude": 31.86503535,
    "Longitude": -101.707897,
    "TotalBaseWaterVolume": 1420223,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Denali Oil & Gas Management",
    "WellName": "Hrncir #2H",
    "Latitude": 29.658093,
    "Longitude": -97.204517,
    "TotalBaseWaterVolume": 3254046,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Lindsay LA #94",
    "Latitude": 32.35878,
    "Longitude": -101.65147,
    "TotalBaseWaterVolume": 1251474,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Cochina East Ranch 70 H",
    "Latitude": 28.3580921,
    "Longitude": -99.38142222,
    "TotalBaseWaterVolume": 6958896,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "Leal Unit #1H",
    "Latitude": 29.481535,
    "Longitude": -97.163277,
    "TotalBaseWaterVolume": 4717986,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Edwards B 3H",
    "Latitude": 28.350233,
    "Longitude": -98.628531,
    "TotalBaseWaterVolume": 3460936,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RK Petroleum Corp.",
    "WellName": "Lexi #1",
    "Latitude": 32.3325,
    "Longitude": -101.97,
    "TotalBaseWaterVolume": 1174657.373,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "MWS 63 #2",
    "Latitude": 32.2458,
    "Longitude": -101.4545,
    "TotalBaseWaterVolume": 935000,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch H #19",
    "Latitude": 32.23002999,
    "Longitude": -101.9439924,
    "TotalBaseWaterVolume": 1244734,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mabee Ranch 139 1004",
    "Latitude": 32.199431,
    "Longitude": -102.187656,
    "TotalBaseWaterVolume": 627670,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Eagle Energy Acquisitions LP",
    "WellName": "Holt 5 5B",
    "Latitude": 32,
    "Longitude": -102,
    "TotalBaseWaterVolume": 1010562,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Harper C Unit #1H FTW",
    "Latitude": 33.453706,
    "Longitude": -97.695422,
    "TotalBaseWaterVolume": 4207854,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Harper D Unit #1H FTW",
    "Latitude": 33.453756,
    "Longitude": -97.695364,
    "TotalBaseWaterVolume": 4181394,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Newby-Phillips (SA) 1H",
    "Latitude": 32.9876503,
    "Longitude": -97.6503943,
    "TotalBaseWaterVolume": 1559677,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Caroline 27-1",
    "Latitude": 31.582865,
    "Longitude": -103.575882,
    "TotalBaseWaterVolume": 1307250,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Compnay, Inc",
    "WellName": "Worsham 6-14 #2H",
    "Latitude": 28.97334,
    "Longitude": -93.18468,
    "TotalBaseWaterVolume": 3394902,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Barons 1H",
    "Latitude": 31.0553,
    "Longitude": -96.54362,
    "TotalBaseWaterVolume": 1352106,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Elick #02",
    "Latitude": 27.977919,
    "Longitude": -97.305869,
    "TotalBaseWaterVolume": 86016,
    "StateName": "Texas",
    "CountyName": "San Patricio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Lopez #9",
    "Latitude": 26.903847,
    "Longitude": -97.855382,
    "TotalBaseWaterVolume": 69889,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Halff36 2",
    "Latitude": 31.27629,
    "Longitude": -101.95811,
    "TotalBaseWaterVolume": 993615,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Monroe 1-10 Unit #3H",
    "Latitude": 31.6048272,
    "Longitude": -103.3921127,
    "TotalBaseWaterVolume": 1249968,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe G37H",
    "Latitude": 28.1610076,
    "Longitude": -99.9040512,
    "TotalBaseWaterVolume": 6550866,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe G37H",
    "Latitude": 28.1610076,
    "Longitude": -99.9040512,
    "TotalBaseWaterVolume": 6550866,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Reed 2 SL 6H",
    "Latitude": 35.5459,
    "Longitude": -100.18419,
    "TotalBaseWaterVolume": 6266602,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Reed 2 9H",
    "Latitude": 35.53165,
    "Longitude": -100.18448,
    "TotalBaseWaterVolume": 5237392,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "University 4-21/Well No. 1H",
    "Latitude": 31.77051,
    "Longitude": -103.25096,
    "TotalBaseWaterVolume": 3160122,
    "StateName": "Texas",
    "CountyName": "Winkler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 4517",
    "Latitude": 32.99675,
    "Longitude": -102.91743,
    "TotalBaseWaterVolume": 89586,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 3626",
    "Latitude": 33.012,
    "Longitude": -102.896,
    "TotalBaseWaterVolume": 97734,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Britt 2701H",
    "Latitude": 35.47248,
    "Longitude": -100.1184,
    "TotalBaseWaterVolume": 5348616,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "DCCO 1 SANDERS SA 1H",
    "Latitude": 33.12822,
    "Longitude": -97.32665,
    "TotalBaseWaterVolume": 4855200,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee 'A' 3903E",
    "Latitude": 31.70701333,
    "Longitude": -102.3257675,
    "TotalBaseWaterVolume": 905510,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Gardien #2H",
    "Latitude": 29.194528,
    "Longitude": -97.520944,
    "TotalBaseWaterVolume": 4459812,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Chalk, G.O. -C- 33",
    "Latitude": 32.097942,
    "Longitude": -101.282797,
    "TotalBaseWaterVolume": 322938,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Sevengills 55-1-37 4H",
    "Latitude": 31.9116282,
    "Longitude": -103.7123589,
    "TotalBaseWaterVolume": 7394149,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Wilkinson Ranch #22",
    "Latitude": 32.30206,
    "Longitude": -101.70506,
    "TotalBaseWaterVolume": 988806,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Rocker B N 74H",
    "Latitude": 31.32013761,
    "Longitude": -101.3557005,
    "TotalBaseWaterVolume": 9889437,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Sugg C 27 1HM",
    "Latitude": 31.48315556,
    "Longitude": -101.4157722,
    "TotalBaseWaterVolume": 11391169,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Barbee 70C",
    "Latitude": 31.64931,
    "Longitude": -101.30046,
    "TotalBaseWaterVolume": 1232154,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanguine Gas Exploration",
    "WellName": "Coltharp 3058H",
    "Latitude": 35.40247,
    "Longitude": -100.058853,
    "TotalBaseWaterVolume": 4677950,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Britt 2702H",
    "Latitude": 35.47294,
    "Longitude": -100.11324,
    "TotalBaseWaterVolume": 5435430,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Matador K Love Orca 4H",
    "Latitude": 29.115836,
    "Longitude": -97.583061,
    "TotalBaseWaterVolume": 4691498,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlackBrush O & G, Inc.",
    "WellName": "San Pedro Ranch 1060H",
    "Latitude": 28.28596,
    "Longitude": -99.89473,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Korth C 6H",
    "Latitude": 29.10608002,
    "Longitude": -97.68296667,
    "TotalBaseWaterVolume": 4643898,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Korth C 7H",
    "Latitude": 29.10610971,
    "Longitude": -97.68288141,
    "TotalBaseWaterVolume": 3883236,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Spinn Unit A1",
    "Latitude": 28.597149,
    "Longitude": -98.158995,
    "TotalBaseWaterVolume": 2128564,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Carver 1H",
    "Latitude": 28.510225,
    "Longitude": -98.693331,
    "TotalBaseWaterVolume": 8694193,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "BEK 1H",
    "Latitude": 28.510164,
    "Longitude": -98.693367,
    "TotalBaseWaterVolume": 9181339,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Edwards 1H",
    "Latitude": 28.510106,
    "Longitude": -98.693406,
    "TotalBaseWaterVolume": 6041259,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Carver 2H",
    "Latitude": 28.510044,
    "Longitude": -98.693444,
    "TotalBaseWaterVolume": 8546034,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "Postel  1",
    "Latitude": 30.94242,
    "Longitude": -95.75564,
    "TotalBaseWaterVolume": 778857,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 9 54HH",
    "Latitude": 32.15278829,
    "Longitude": -94.40516735,
    "TotalBaseWaterVolume": 7662239,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mustang 3414",
    "Latitude": 32.240953,
    "Longitude": -102.233531,
    "TotalBaseWaterVolume": 611989,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix #148",
    "Latitude": 32.2878331,
    "Longitude": -102.715278,
    "TotalBaseWaterVolume": 136778,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Yeager & Armstrong #10",
    "Latitude": 32.2665216,
    "Longitude": -102.6771478,
    "TotalBaseWaterVolume": 138242,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "R May B 3H",
    "Latitude": 28.697034,
    "Longitude": -98.239798,
    "TotalBaseWaterVolume": 2349153,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "McCarn B 1H",
    "Latitude": 28.652755,
    "Longitude": -98.037329,
    "TotalBaseWaterVolume": 903252,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "McElroy, J.T., Cons. 188",
    "Latitude": 31.42572083,
    "Longitude": -102.3238736,
    "TotalBaseWaterVolume": 50409,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "McElroy, J.T., Cons. 1609",
    "Latitude": 31.41951944,
    "Longitude": -102.3157917,
    "TotalBaseWaterVolume": 26825,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Big Oak C 1H",
    "Latitude": 29.287095,
    "Longitude": -97.2976,
    "TotalBaseWaterVolume": 2389800,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "FOGMT 8SP",
    "Latitude": 28.23183333,
    "Longitude": -100.0289611,
    "TotalBaseWaterVolume": 7263058,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 50H",
    "Latitude": 28.2991197,
    "Longitude": -99.8187116,
    "TotalBaseWaterVolume": 6197814,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "GSAU #2155",
    "Latitude": 31.9213361,
    "Longitude": -102.6411862,
    "TotalBaseWaterVolume": 127596,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wood Family 28 #4",
    "Latitude": 31.77998957,
    "Longitude": -101.618999,
    "TotalBaseWaterVolume": 1503967,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Marlin 47 #2H",
    "Latitude": 32.023163,
    "Longitude": -101.45018,
    "TotalBaseWaterVolume": 5311685,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Range Resources Corporation",
    "WellName": "Edmondson A 4820",
    "Latitude": 31.7444064,
    "Longitude": -101.3027309,
    "TotalBaseWaterVolume": 1382833,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Maxwell 15 #1",
    "Latitude": 32.3982436,
    "Longitude": -101.6779622,
    "TotalBaseWaterVolume": 1608163,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newark E&P Operating, LLC",
    "WellName": "Hamman East 1H",
    "Latitude": 33.058835,
    "Longitude": -97.924193,
    "TotalBaseWaterVolume": 2608844,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sharp Image Energy, Inc.",
    "WellName": "Double Moutain 56 #10",
    "Latitude": 33.129879,
    "Longitude": -100.897535,
    "TotalBaseWaterVolume": 9954,
    "StateName": "Texas",
    "CountyName": "Kent"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Cochina East Ranch 72H",
    "Latitude": 28.3581671,
    "Longitude": -99.3813862,
    "TotalBaseWaterVolume": 9292458,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "William Kelly 01 02H",
    "Latitude": 28.543893,
    "Longitude": -98.211269,
    "TotalBaseWaterVolume": 4876494,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Forrest Wheeler B 3H",
    "Latitude": 28.382091,
    "Longitude": -98.604084,
    "TotalBaseWaterVolume": 2878722,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Valence Operating Company",
    "WellName": "Murray 2H",
    "Latitude": 28.64203,
    "Longitude": -98.66275,
    "TotalBaseWaterVolume": 7703594.232,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Nail Ranch 3 #3",
    "Latitude": 32.11506,
    "Longitude": -102.02931,
    "TotalBaseWaterVolume": 1023204,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Mid-States Operating Company",
    "WellName": "Felder 21 #3",
    "Latitude": 31.933019,
    "Longitude": -101.971249,
    "TotalBaseWaterVolume": 1601085,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6563W",
    "Latitude": 32.39488,
    "Longitude": -101.06796,
    "TotalBaseWaterVolume": 12390,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Mcgarraugh `136` 2H",
    "Latitude": 36.08666,
    "Longitude": -100.93368,
    "TotalBaseWaterVolume": 551452,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "SRH-A-9U",
    "Latitude": 31.47311389,
    "Longitude": -101.408017,
    "TotalBaseWaterVolume": 1648381,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Perkins F23",
    "Latitude": 31.429833,
    "Longitude": -103.429697,
    "TotalBaseWaterVolume": 243012,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Shady Oak Farm SA Unit 9H",
    "Latitude": 32.799,
    "Longitude": -97.432503,
    "TotalBaseWaterVolume": 3366766.2,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Adair San Andres Unit 1005",
    "Latitude": 32.96066,
    "Longitude": -102.28264,
    "TotalBaseWaterVolume": 102929,
    "StateName": "Texas",
    "CountyName": "Terry"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Discovery Operating, Inc.",
    "WellName": "Andy #3",
    "Latitude": 31,
    "Longitude": -102,
    "TotalBaseWaterVolume": 985194,
    "StateName": "Texas",
    "CountyName": "UPTON"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Hill 34-171 Unit 1H",
    "Latitude": 31.4761244,
    "Longitude": -103.3499016,
    "TotalBaseWaterVolume": 1327201,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1941",
    "Latitude": 31.5863989,
    "Longitude": -103.0054429,
    "TotalBaseWaterVolume": 12103.45828,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "Warnken B 1H",
    "Latitude": 29.03452,
    "Longitude": -98.14033,
    "TotalBaseWaterVolume": 3534826,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "WCCO 7 - H.S. Jones 1H",
    "Latitude": 33.12,
    "Longitude": -97.66,
    "TotalBaseWaterVolume": 4875081,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 4351",
    "Latitude": 32.975727,
    "Longitude": -102.876672,
    "TotalBaseWaterVolume": 36178,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 4257",
    "Latitude": 32.976369,
    "Longitude": -102.901218,
    "TotalBaseWaterVolume": 37149,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mabee 240-1217",
    "Latitude": 32.267458,
    "Longitude": -102.250806,
    "TotalBaseWaterVolume": 1541778,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "SFMU #588",
    "Latitude": 32.1922969,
    "Longitude": -102.7159579,
    "TotalBaseWaterVolume": 31158,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 6N #21",
    "Latitude": 32.1875893,
    "Longitude": -102.7395836,
    "TotalBaseWaterVolume": 36577,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix 151",
    "Latitude": 32.28422,
    "Longitude": -102.71414,
    "TotalBaseWaterVolume": 101304,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "San Miguel B Unit #4H",
    "Latitude": 28.650169,
    "Longitude": -98.520408,
    "TotalBaseWaterVolume": 4530162,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "McElroy, J.T., Cons. 1407",
    "Latitude": 31.4363275,
    "Longitude": -102.3152486,
    "TotalBaseWaterVolume": 22604,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "North McElroy Unit 3301 BH",
    "Latitude": 31.474537,
    "Longitude": -102.37569,
    "TotalBaseWaterVolume": 766154.3222,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Cole Trust 28H",
    "Latitude": 33.19,
    "Longitude": -97.23,
    "TotalBaseWaterVolume": 5710948,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Matador K Love Orca 3H",
    "Latitude": 29.12,
    "Longitude": -97.58,
    "TotalBaseWaterVolume": 4691498,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BB #2323",
    "Latitude": 31.997097,
    "Longitude": -102.287181,
    "TotalBaseWaterVolume": 1900915.249,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mayberry 9",
    "Latitude": 31.73922,
    "Longitude": -102.35915,
    "TotalBaseWaterVolume": 1744852,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ironwood Oil and Gas, LLC",
    "WellName": "Southern Cross Gas Unit #1 1",
    "Latitude": 31.46465,
    "Longitude": -96.14693,
    "TotalBaseWaterVolume": 1165140,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Gibson 7C #12",
    "Latitude": 31.860794,
    "Longitude": -101.46453,
    "TotalBaseWaterVolume": 944174,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Walker Farms 14 11",
    "Latitude": 31.84964,
    "Longitude": -101.48491,
    "TotalBaseWaterVolume": 1072974,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Barnhart #14H",
    "Latitude": 29.237368,
    "Longitude": -97.475846,
    "TotalBaseWaterVolume": 5818027,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Newton 43 #1",
    "Latitude": 32.359524,
    "Longitude": -101.513755,
    "TotalBaseWaterVolume": 1088435.88,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Windy Point A 58B",
    "Latitude": 31.36933,
    "Longitude": -101.22909,
    "TotalBaseWaterVolume": 1048866,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Felix A1H ?",
    "Latitude": 28.849728,
    "Longitude": -98.039547,
    "TotalBaseWaterVolume": 3340192,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Winfield C 50H",
    "Latitude": 28.543555,
    "Longitude": -99.251741,
    "TotalBaseWaterVolume": 5642185,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Winfield C 51H",
    "Latitude": 28.543536,
    "Longitude": -99.251782,
    "TotalBaseWaterVolume": 5866886,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "Byrd 1",
    "Latitude": 30.98844,
    "Longitude": -95.78168,
    "TotalBaseWaterVolume": 1392088,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Scharbauer Ranch 57",
    "Latitude": 32.28204074,
    "Longitude": -102.1191008,
    "TotalBaseWaterVolume": 1553483,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hazelwood C #12",
    "Latitude": 32.15262392,
    "Longitude": -101.9058259,
    "TotalBaseWaterVolume": 1212282,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Resolute Natural Resources",
    "WellName": "Lloyd #42-6",
    "Latitude": 32.3559342,
    "Longitude": -101.6911879,
    "TotalBaseWaterVolume": 795144,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Haag \"A\" #1203",
    "Latitude": 32.03987,
    "Longitude": -102.27706,
    "TotalBaseWaterVolume": 1549283,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST NW 25-16",
    "Latitude": 31.988278,
    "Longitude": -102.261244,
    "TotalBaseWaterVolume": 1368612,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 722W",
    "Latitude": 32.45546,
    "Longitude": -101.05216,
    "TotalBaseWaterVolume": 15750,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Kramer C Unit 2H",
    "Latitude": 33.509609,
    "Longitude": -97.673088,
    "TotalBaseWaterVolume": 4020554,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Kramer A Unit 1H",
    "Latitude": 33.508282,
    "Longitude": -97.674713,
    "TotalBaseWaterVolume": 3999806,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BP America Production Company",
    "WellName": "Mendota Ranch 59-5H",
    "Latitude": 35.811403,
    "Longitude": -100.556425,
    "TotalBaseWaterVolume": 877568,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "McLaughlin Acct. 1 #144",
    "Latitude": 32.69788,
    "Longitude": -101.08957,
    "TotalBaseWaterVolume": 95437,
    "StateName": "Texas",
    "CountyName": "Scurry"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Mclaughlin Acct 1 144",
    "Latitude": 32.69788,
    "Longitude": -101.08957,
    "TotalBaseWaterVolume": 95437,
    "StateName": "Texas",
    "CountyName": "Scurry"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ratliff 32 #2",
    "Latitude": 31.27619921,
    "Longitude": -101.9108464,
    "TotalBaseWaterVolume": 1292763.384,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Davidson 48-7R",
    "Latitude": 31.638049,
    "Longitude": -102.053187,
    "TotalBaseWaterVolume": 1673658,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Lynch North 30 4",
    "Latitude": 31.36268,
    "Longitude": -101.95155,
    "TotalBaseWaterVolume": 1273457,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1361",
    "Latitude": 31.6499869,
    "Longitude": -103.0226442,
    "TotalBaseWaterVolume": 14225.77325,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1380",
    "Latitude": 31.6386966,
    "Longitude": -103.0293631,
    "TotalBaseWaterVolume": 7963.419414,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Buckin Chute 33-61 #2H",
    "Latitude": 31.59496944,
    "Longitude": -103.493075,
    "TotalBaseWaterVolume": 1196582,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Covington 34-224 3H",
    "Latitude": 31.5703079,
    "Longitude": -103.3982274,
    "TotalBaseWaterVolume": 1273045,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Deford 10",
    "Latitude": 32.02209,
    "Longitude": -102.682381,
    "TotalBaseWaterVolume": 68692,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 6-18A #6",
    "Latitude": 35.50132301,
    "Longitude": -102.2586486,
    "TotalBaseWaterVolume": 1454886,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "King B #32",
    "Latitude": 32.2763856,
    "Longitude": -102.6671298,
    "TotalBaseWaterVolume": 268658,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix C LZS 9",
    "Latitude": 32.28033,
    "Longitude": -102.72585,
    "TotalBaseWaterVolume": 153468,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix C LZS #10",
    "Latitude": 32.27954,
    "Longitude": -102.72855,
    "TotalBaseWaterVolume": 140700,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W N Waddell 928",
    "Latitude": 31.5796015,
    "Longitude": -102.4098741,
    "TotalBaseWaterVolume": 74334,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "University 35 A #2",
    "Latitude": 31.4519,
    "Longitude": -102.4247,
    "TotalBaseWaterVolume": 128081.784,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "DCCO 1 SANDERS SA 2H",
    "Latitude": 33.1306,
    "Longitude": -97.33943,
    "TotalBaseWaterVolume": 6256236,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Pilgrim Unit B 1",
    "Latitude": 29.187017,
    "Longitude": -97.481121,
    "TotalBaseWaterVolume": 3539525,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Lewton Francis 2H",
    "Latitude": 29.271589,
    "Longitude": -97.301047,
    "TotalBaseWaterVolume": 7065618,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mooers 12",
    "Latitude": 32.016339,
    "Longitude": -102.652089,
    "TotalBaseWaterVolume": 197716,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Round Top (Palo Pinto) Unit 194",
    "Latitude": 32.86732,
    "Longitude": -100.2937,
    "TotalBaseWaterVolume": 62538,
    "StateName": "Texas",
    "CountyName": "Fisher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ironwood Oil and Gas, LLC",
    "WellName": "Dow #1",
    "Latitude": 31.47566,
    "Longitude": -96.15249,
    "TotalBaseWaterVolume": 892320,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "North Riley Unit 1364",
    "Latitude": 32.65,
    "Longitude": -102.8311917,
    "TotalBaseWaterVolume": 159508,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #505",
    "Latitude": 32.8561124,
    "Longitude": -102.9120508,
    "TotalBaseWaterVolume": 267792,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Quantum Resources Management, LLC",
    "WellName": "Smith, Maud  #9",
    "Latitude": 32.54622,
    "Longitude": -94.8486,
    "TotalBaseWaterVolume": 83202,
    "StateName": "Texas",
    "CountyName": "Gregg"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Lockhart 10-2HD",
    "Latitude": 36.0413889,
    "Longitude": -100.1696861,
    "TotalBaseWaterVolume": 1762850,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Manchaca Unit #3H",
    "Latitude": 29.005475,
    "Longitude": -97.990511,
    "TotalBaseWaterVolume": 5293428,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Deleon Reinhard Unit #9H",
    "Latitude": 29.008383,
    "Longitude": -97.8711,
    "TotalBaseWaterVolume": 6048042,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlackBrush O & G, Inc.",
    "WellName": "Yanta, Edwin 2H",
    "Latitude": 29.03189,
    "Longitude": -96.15368,
    "TotalBaseWaterVolume": 2284464,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hess Corporation",
    "WellName": "Garza Ranch A Unit A-2H",
    "Latitude": 28.48747,
    "Longitude": -99.23687,
    "TotalBaseWaterVolume": 4165585,
    "StateName": "Texas",
    "CountyName": "La Salle County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sharon Fordyce 01 01H",
    "Latitude": 28.677677,
    "Longitude": -98.22453,
    "TotalBaseWaterVolume": 3309012,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Edwards 4H",
    "Latitude": 28.369018,
    "Longitude": -98.646606,
    "TotalBaseWaterVolume": 2605722,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mabee Ranch 139 411",
    "Latitude": 32.184464,
    "Longitude": -102.135508,
    "TotalBaseWaterVolume": 478391,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Derwood 42 #1",
    "Latitude": 32.2633,
    "Longitude": -101.4444,
    "TotalBaseWaterVolume": 808714,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "UNIVERSITY 10-13 #6H",
    "Latitude": 31.28026122,
    "Longitude": -101.5659086,
    "TotalBaseWaterVolume": 9534240,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker C Enron #11",
    "Latitude": 31.3248,
    "Longitude": -101.285,
    "TotalBaseWaterVolume": 940128,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Shady Oak Farm B Unit 11H",
    "Latitude": 32.799014,
    "Longitude": -97.432539,
    "TotalBaseWaterVolume": 3940578.6,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Adobe 23",
    "Latitude": 31.439236,
    "Longitude": -103.454075,
    "TotalBaseWaterVolume": 308532,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Covington 34-224 2H",
    "Latitude": 31.5679088,
    "Longitude": -103.3947845,
    "TotalBaseWaterVolume": 1272937,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "NorthStar Operating Company",
    "WellName": "Winter #6",
    "Latitude": 31.5149,
    "Longitude": -102.81529,
    "TotalBaseWaterVolume": 183622.995,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 4-10",
    "Latitude": 28.100363,
    "Longitude": -99.727816,
    "TotalBaseWaterVolume": 2252757,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Lindley Remuda #12",
    "Latitude": 32.29746,
    "Longitude": -102.72828,
    "TotalBaseWaterVolume": 40614,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "GS Andector Unit J-120",
    "Latitude": 32.089981,
    "Longitude": -102.722875,
    "TotalBaseWaterVolume": 226568,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 183",
    "Latitude": 31.54697,
    "Longitude": -102.67607,
    "TotalBaseWaterVolume": 280804,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark 'J' No. 3505",
    "Latitude": 33.490484,
    "Longitude": -101.485619,
    "TotalBaseWaterVolume": 37070,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Crews B 1H",
    "Latitude": 29.032436,
    "Longitude": -97.808266,
    "TotalBaseWaterVolume": 3123876,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 49H",
    "Latitude": 28.29913333,
    "Longitude": -99.8187556,
    "TotalBaseWaterVolume": 6097757,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Berry Petroleum",
    "WellName": "Gardendale 9 #2",
    "Latitude": 32.026228,
    "Longitude": -102.340184,
    "TotalBaseWaterVolume": 700056,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BD #1111",
    "Latitude": 32.032067,
    "Longitude": -102.300408,
    "TotalBaseWaterVolume": 1952122.286,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Harper Devonian Unit 1903",
    "Latitude": 31.792842,
    "Longitude": -102.56235,
    "TotalBaseWaterVolume": 475671,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee 'B' 0114E",
    "Latitude": 31.66571944,
    "Longitude": -102.3842972,
    "TotalBaseWaterVolume": 729270,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Robertson Unit/Well No. 3316",
    "Latitude": 32.66684,
    "Longitude": -102.811197,
    "TotalBaseWaterVolume": 38640,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "His Blessing 35 #15",
    "Latitude": 31.911496,
    "Longitude": -101.51946,
    "TotalBaseWaterVolume": 1016890,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Guadalupe -48-/Well No. 9",
    "Latitude": 31.65625,
    "Longitude": -101.40861,
    "TotalBaseWaterVolume": 2314872,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Goodner 22 10",
    "Latitude": 31.82771,
    "Longitude": -101.50701,
    "TotalBaseWaterVolume": 1021020,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Ahlhorn Najvar Unit #3H",
    "Latitude": 29.353589,
    "Longitude": -97.424547,
    "TotalBaseWaterVolume": 4159344,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Vollmert 8H",
    "Latitude": 35.85502,
    "Longitude": -100.53262,
    "TotalBaseWaterVolume": 2452800,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Chalk, G.O. -C- 35",
    "Latitude": 32.099569,
    "Longitude": -101.283006,
    "TotalBaseWaterVolume": 333631,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pfluger M 305",
    "Latitude": 31.517,
    "Longitude": -101.26147,
    "TotalBaseWaterVolume": 913878,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Best Petroleum Explorations, Inc.",
    "WellName": "Easter #4",
    "Latitude": 33.242668,
    "Longitude": -98.338753,
    "TotalBaseWaterVolume": 23688,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Bodden Unit B 1",
    "Latitude": 29.028225,
    "Longitude": -97.750656,
    "TotalBaseWaterVolume": 4563989,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Crews A 1H",
    "Latitude": 29.032488,
    "Longitude": -97.8082431,
    "TotalBaseWaterVolume": 3311364,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Weddington 4H",
    "Latitude": 28.91145,
    "Longitude": -98.0662,
    "TotalBaseWaterVolume": 2904694,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "S K East B-90",
    "Latitude": 27.243226,
    "Longitude": -97.647131,
    "TotalBaseWaterVolume": 58086,
    "StateName": "Texas",
    "CountyName": "Kenedy"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Gutierrez 1H",
    "Latitude": 28.105461,
    "Longitude": -99.14155,
    "TotalBaseWaterVolume": 155649,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "Matias Unit #1H",
    "Latitude": 29.476649,
    "Longitude": -97.181058,
    "TotalBaseWaterVolume": 4934076,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Ballentine `794` 1H",
    "Latitude": 36.30417,
    "Longitude": -100.02365,
    "TotalBaseWaterVolume": 459094,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "Leonore C 4H",
    "Latitude": 36.31,
    "Longitude": -100.18,
    "TotalBaseWaterVolume": 776071,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Corlena Oil Company",
    "WellName": "Mcgarraugh 204 1H",
    "Latitude": 36.1131,
    "Longitude": -100.49598,
    "TotalBaseWaterVolume": 1403535,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Swaim #5H",
    "Latitude": 28.551528,
    "Longitude": -98.566858,
    "TotalBaseWaterVolume": 7053522,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Y Bar B1H",
    "Latitude": 28.475994,
    "Longitude": -98.470125,
    "TotalBaseWaterVolume": 3266950,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Y Bar B2H",
    "Latitude": 28.475994,
    "Longitude": -98.470125,
    "TotalBaseWaterVolume": 3128500,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "Samuel GU 1H",
    "Latitude": 30.9589,
    "Longitude": -95.7243,
    "TotalBaseWaterVolume": 25785,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly #2933",
    "Latitude": 32.113796,
    "Longitude": -102.15875,
    "TotalBaseWaterVolume": 1152784,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Jim Tom 31 #7",
    "Latitude": 32.09618581,
    "Longitude": -101.7554639,
    "TotalBaseWaterVolume": 1366416,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Pearl Jam 2407",
    "Latitude": 32.0082026,
    "Longitude": -102.2801823,
    "TotalBaseWaterVolume": 1600760.722,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Baumann E #7",
    "Latitude": 31.96783003,
    "Longitude": -102.0168004,
    "TotalBaseWaterVolume": 1444447,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Green-Betts (SA) 2H",
    "Latitude": 32.9735647,
    "Longitude": -97.5942531,
    "TotalBaseWaterVolume": 5538119,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Green - Yates (SA) 3H",
    "Latitude": 32.9736152,
    "Longitude": -97.594353,
    "TotalBaseWaterVolume": 7310275,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "May_2501",
    "Latitude": 31.1881675,
    "Longitude": -103.1672281,
    "TotalBaseWaterVolume": 793128,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Perrgrine 27 #1",
    "Latitude": 31.3718681,
    "Longitude": -103.4349578,
    "TotalBaseWaterVolume": 1126104,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BP America Production Company",
    "WellName": "Mendota Ranch 59-4H",
    "Latitude": 35.811403,
    "Longitude": -100.556425,
    "TotalBaseWaterVolume": 1025551,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Morgan C #3",
    "Latitude": 31.425794,
    "Longitude": -101.923047,
    "TotalBaseWaterVolume": 1869924,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Amacker23 NW 2",
    "Latitude": 31.31937,
    "Longitude": -102.06461,
    "TotalBaseWaterVolume": 1210532,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlueStone Natural Resources",
    "WellName": "Colburn 2",
    "Latitude": 30.83810361,
    "Longitude": -95.81634028,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Walker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 5-10",
    "Latitude": 28.100348,
    "Longitude": -99.727715,
    "TotalBaseWaterVolume": 1982946,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 6-10",
    "Latitude": 28.100333,
    "Longitude": -99.727614,
    "TotalBaseWaterVolume": 2250723,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "Warnken C 1H",
    "Latitude": 29.022,
    "Longitude": -98.12,
    "TotalBaseWaterVolume": 4666141,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 4352",
    "Latitude": 32.974507,
    "Longitude": -102.872502,
    "TotalBaseWaterVolume": 36300,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 3249",
    "Latitude": 32.979693,
    "Longitude": -102.90136,
    "TotalBaseWaterVolume": 36149,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -3A-/Well No. 2",
    "Latitude": 31.73801,
    "Longitude": -101.57475,
    "TotalBaseWaterVolume": 2279970,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mabee Ranch 139 4705",
    "Latitude": 32.166869,
    "Longitude": -102.259139,
    "TotalBaseWaterVolume": 596107,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forge Energy, LLC",
    "WellName": "UL 13 Keene-34-12H",
    "Latitude": 32.4103556,
    "Longitude": -102.7249992,
    "TotalBaseWaterVolume": 3289497,
    "StateName": "Texas",
    "CountyName": "Andrews County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 212",
    "Latitude": 31.54708,
    "Longitude": -102.68121,
    "TotalBaseWaterVolume": 440118,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Emma 2",
    "Latitude": 31.64334,
    "Longitude": -102.35015,
    "TotalBaseWaterVolume": 1578194,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Warren American Oil Company",
    "WellName": "University 236-12",
    "Latitude": 30.990873,
    "Longitude": -101.419602,
    "TotalBaseWaterVolume": 61326.85003,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University BL 6301H Revision A",
    "Latitude": 31.071236,
    "Longitude": -101.672169,
    "TotalBaseWaterVolume": 866263,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University BL 6301H",
    "Latitude": 31.071236,
    "Longitude": -101.672169,
    "TotalBaseWaterVolume": 866263,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina Ranch 46H",
    "Latitude": 28.31436111,
    "Longitude": -99.79876111,
    "TotalBaseWaterVolume": 7995624,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "East Penwell San Andres Unit/Well No. 1401",
    "Latitude": 31.71369,
    "Longitude": -102.58032,
    "TotalBaseWaterVolume": 26460,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #261",
    "Latitude": 32.8674519,
    "Longitude": -102.9025397,
    "TotalBaseWaterVolume": 103194,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Thames C T 1",
    "Latitude": 32.95608,
    "Longitude": -102.75385,
    "TotalBaseWaterVolume": 116046,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "East Mallet Unit 148",
    "Latitude": 33.48079,
    "Longitude": -102.53792,
    "TotalBaseWaterVolume": 24704,
    "StateName": "Texas",
    "CountyName": "Hockley"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Cravens 35A #3",
    "Latitude": 32.11363,
    "Longitude": -101.69092,
    "TotalBaseWaterVolume": 1032024,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Mallard 3040A",
    "Latitude": 31.4009,
    "Longitude": -101.18909,
    "TotalBaseWaterVolume": 899010,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Jordan Unit 3H",
    "Latitude": 28.774979,
    "Longitude": -97.97854,
    "TotalBaseWaterVolume": 3418380,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Mutz Unit A1",
    "Latitude": 28.784946,
    "Longitude": -98.099025,
    "TotalBaseWaterVolume": 2170798,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Forrest Wheeler B 4H",
    "Latitude": 28.38154,
    "Longitude": -98.604087,
    "TotalBaseWaterVolume": 2304498,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Burk Royalty Co., LTD.",
    "WellName": "Henderson 1",
    "Latitude": 30.98,
    "Longitude": -95.71,
    "TotalBaseWaterVolume": 737127,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee P-1601",
    "Latitude": 32.347508,
    "Longitude": -102.166319,
    "TotalBaseWaterVolume": 5624,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "E.G.L. Resources, Inc.",
    "WellName": "STO SEC 2 #207",
    "Latitude": 31.945042,
    "Longitude": -102.157244,
    "TotalBaseWaterVolume": 1300992,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Snyder 'F' #6",
    "Latitude": 32.263418,
    "Longitude": -101.1748871,
    "TotalBaseWaterVolume": 15540,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Valley #04 ST",
    "Latitude": 27.903832,
    "Longitude": -97.372952,
    "TotalBaseWaterVolume": 73752,
    "StateName": "Texas",
    "CountyName": "San Patricio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Shady Oak Farm C Unit 5H",
    "Latitude": 32.800108,
    "Longitude": -97.422444,
    "TotalBaseWaterVolume": 2441917.8,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #3050",
    "Latitude": 31.4481491,
    "Longitude": -102.0155308,
    "TotalBaseWaterVolume": 355711,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU 3 4504",
    "Latitude": 31.61333683,
    "Longitude": -102.1655967,
    "TotalBaseWaterVolume": 902706,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Stout Energy Inc.",
    "WellName": "Colby A #31",
    "Latitude": 31.865943,
    "Longitude": -103.122956,
    "TotalBaseWaterVolume": 87444,
    "StateName": "Texas",
    "CountyName": "Winkler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "BRU 1507",
    "Latitude": 32.979693,
    "Longitude": -102.90136,
    "TotalBaseWaterVolume": 28804,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "MM Fisher A8",
    "Latitude": 32.4337718,
    "Longitude": -102.6519905,
    "TotalBaseWaterVolume": 143855,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Molopo Energy Texas, LLC",
    "WellName": "Baggett Op 5 541H",
    "Latitude": 30.79268,
    "Longitude": -101.24924,
    "TotalBaseWaterVolume": 7458234,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 48H",
    "Latitude": 28.2991474,
    "Longitude": -99.8187975,
    "TotalBaseWaterVolume": 6171876,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Colt 45 1",
    "Latitude": 31.87014,
    "Longitude": -101.54044,
    "TotalBaseWaterVolume": 970578,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Hubbard 24 #2",
    "Latitude": 31.4204,
    "Longitude": -101.3227,
    "TotalBaseWaterVolume": 1097278,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BP America Production Company",
    "WellName": "Isaacs C 195-5H",
    "Latitude": 35.864722,
    "Longitude": -100.527556,
    "TotalBaseWaterVolume": 575348,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Navidad Resources LLC",
    "WellName": "Little #1",
    "Latitude": 31.055527,
    "Longitude": -95.56717,
    "TotalBaseWaterVolume": 976920,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Cathey 6 3",
    "Latitude": 32.41445,
    "Longitude": -101.21288,
    "TotalBaseWaterVolume": 672756,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Manchaca Unit #4H",
    "Latitude": 29.005247,
    "Longitude": -97.989222,
    "TotalBaseWaterVolume": 3391542,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Brysch Adams 2H",
    "Latitude": 28.840251,
    "Longitude": -97.960346,
    "TotalBaseWaterVolume": 3225768,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Rafter Two Unit B1",
    "Latitude": 28.593889,
    "Longitude": -98.296111,
    "TotalBaseWaterVolume": 1878594,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BE #610",
    "Latitude": 32.053097,
    "Longitude": -102.276039,
    "TotalBaseWaterVolume": 1670554.372,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Landers Gas Unit 3H",
    "Latitude": 32.6569444,
    "Longitude": -97.7514298,
    "TotalBaseWaterVolume": 1280412,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Rocker B N 73H",
    "Latitude": 31.3201731,
    "Longitude": -101.3586465,
    "TotalBaseWaterVolume": 9865081,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "University 10-28 2H",
    "Latitude": 31.2349,
    "Longitude": -101.50156,
    "TotalBaseWaterVolume": 6709733,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Vanguard 3 #1",
    "Latitude": 31.3435749,
    "Longitude": -103.3599998,
    "TotalBaseWaterVolume": 1192758,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Seminoles 1H",
    "Latitude": 31.65133,
    "Longitude": -94.00921,
    "TotalBaseWaterVolume": 420796,
    "StateName": "Texas",
    "CountyName": "Shelby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Four Corners TXL Fee 2715U",
    "Latitude": 31.62461389,
    "Longitude": -102.2986028,
    "TotalBaseWaterVolume": 1074093,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Lucy 3509",
    "Latitude": 32.96454131,
    "Longitude": -102.8045957,
    "TotalBaseWaterVolume": 134398,
    "StateName": "Texas",
    "CountyName": "Winkler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "YWCU 4421",
    "Latitude": 32.967894,
    "Longitude": -102.856027,
    "TotalBaseWaterVolume": 51395,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Williamson Gas Unit 3H",
    "Latitude": 32.0015086,
    "Longitude": -94.5045446,
    "TotalBaseWaterVolume": 1233328,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Big Oak B #1H",
    "Latitude": 29.28523639,
    "Longitude": -97.30853556,
    "TotalBaseWaterVolume": 2588077,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Big Oak A 2H",
    "Latitude": 29.2853,
    "Longitude": -97.3086,
    "TotalBaseWaterVolume": 3963370,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Frank Malek 05 01H",
    "Latitude": 28.61157,
    "Longitude": -98.109922,
    "TotalBaseWaterVolume": 3738840,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch C505H",
    "Latitude": 28.019419,
    "Longitude": -99.826467,
    "TotalBaseWaterVolume": 7481040,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 18 55HH",
    "Latitude": 32.1528,
    "Longitude": -94.40519,
    "TotalBaseWaterVolume": 8903170,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "University Roxanne 6",
    "Latitude": 32.384944,
    "Longitude": -102.415972,
    "TotalBaseWaterVolume": 818475,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240-2715",
    "Latitude": 32.271509,
    "Longitude": -102.215462,
    "TotalBaseWaterVolume": 1768242,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "University 5-10",
    "Latitude": 32.19211,
    "Longitude": -102.12831,
    "TotalBaseWaterVolume": 57876,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Rosa Lee #3",
    "Latitude": 32.2772081,
    "Longitude": -102.7232321,
    "TotalBaseWaterVolume": 19733,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "King B #35",
    "Latitude": 32.273001,
    "Longitude": -102.672953,
    "TotalBaseWaterVolume": 55209,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Emma Tartt 22H",
    "Latitude": 28.7808,
    "Longitude": -98.18,
    "TotalBaseWaterVolume": 3780126,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "R May B 5H",
    "Latitude": 28.693663,
    "Longitude": -98.244662,
    "TotalBaseWaterVolume": 3421535,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Callon Petroleum Operating Company",
    "WellName": "Vickie Newton #3801",
    "Latitude": 32.8921,
    "Longitude": -101.402011,
    "TotalBaseWaterVolume": 9098931,
    "StateName": "Texas",
    "CountyName": "Borden"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Fazzino Fazzino #1",
    "Latitude": 30.64888,
    "Longitude": -96.50398,
    "TotalBaseWaterVolume": 1060122,
    "StateName": "Texas",
    "CountyName": "Brazos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W N Waddell 1958",
    "Latitude": 31.49786,
    "Longitude": -102.61161,
    "TotalBaseWaterVolume": 5144,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Finley Resources, Inc.",
    "WellName": "Texaco B Ac-3 10",
    "Latitude": 31.935911,
    "Longitude": -104.056528,
    "TotalBaseWaterVolume": 73374,
    "StateName": "Texas",
    "CountyName": "Culberson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Klotzman A1",
    "Latitude": 29.137122,
    "Longitude": -97.537223,
    "TotalBaseWaterVolume": 6010894,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 536",
    "Latitude": 32.016758,
    "Longitude": -102.654647,
    "TotalBaseWaterVolume": 188735,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "HL&P #21",
    "Latitude": 31.44339,
    "Longitude": -96.24297,
    "TotalBaseWaterVolume": 1418550,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Glass-Glass 10 (Alloc) #151HU",
    "Latitude": 31.74011,
    "Longitude": -101.376974,
    "TotalBaseWaterVolume": 9344501,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI-Driver 33 #2",
    "Latitude": 31.798951,
    "Longitude": -101.5064386,
    "TotalBaseWaterVolume": 2639275,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Barnhart #15H",
    "Latitude": 29.237311,
    "Longitude": -97.47589,
    "TotalBaseWaterVolume": 6472361,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Verlander Unit #12H",
    "Latitude": 29.353672,
    "Longitude": -97.424494,
    "TotalBaseWaterVolume": 3765636,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Bennie 4342 #3H",
    "Latitude": 31.178,
    "Longitude": -101.166,
    "TotalBaseWaterVolume": 12319790,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EXCO Resources, Inc.",
    "WellName": "Sheen 10A-14",
    "Latitude": 31.4242698,
    "Longitude": -100.9933293,
    "TotalBaseWaterVolume": 82950,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Korth Unit B 1",
    "Latitude": 29.028289,
    "Longitude": -97.750656,
    "TotalBaseWaterVolume": 3402591,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Mobil A 2H ?",
    "Latitude": 28.754323,
    "Longitude": -98.016902,
    "TotalBaseWaterVolume": 3164256,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Schubert 1H",
    "Latitude": 28.20837,
    "Longitude": -99.1878,
    "TotalBaseWaterVolume": 2756467,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Byrd #5",
    "Latitude": 31.34656,
    "Longitude": -96.40129,
    "TotalBaseWaterVolume": 1804824,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "WD Johnson 22S-9",
    "Latitude": 31.8378,
    "Longitude": -103.53674,
    "TotalBaseWaterVolume": 180939,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Y Bar B3H",
    "Latitude": 28.475994,
    "Longitude": -98.470125,
    "TotalBaseWaterVolume": 2239462,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Halcon Resources Corporation",
    "WellName": "Charles M Baker 1H",
    "Latitude": 30.868483,
    "Longitude": -95.921602,
    "TotalBaseWaterVolume": 4739784,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 840",
    "Latitude": 32.14519,
    "Longitude": -102.16891,
    "TotalBaseWaterVolume": 1197336,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Simon 34 #2",
    "Latitude": 32.220505,
    "Longitude": -101.741511,
    "TotalBaseWaterVolume": 1505028,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Armstrong 12 #1",
    "Latitude": 31.84852,
    "Longitude": -101.98802,
    "TotalBaseWaterVolume": 1094478,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "RV Powell Et Al 19",
    "Latitude": 31.921526,
    "Longitude": -101.813115,
    "TotalBaseWaterVolume": 1018248,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Discovery Operating, Inc.",
    "WellName": "TXLV 43 6",
    "Latitude": 31,
    "Longitude": -102,
    "TotalBaseWaterVolume": 574779,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 723W",
    "Latitude": 32.45371,
    "Longitude": -101.05158,
    "TotalBaseWaterVolume": 15414,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LCS Production Company",
    "WellName": "County Line South -3",
    "Latitude": 32.50148408,
    "Longitude": -100.4766499,
    "TotalBaseWaterVolume": 69762,
    "StateName": "Texas",
    "CountyName": "Nolan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Jarvis Raymond 292H",
    "Latitude": 36.08414,
    "Longitude": -100.99772,
    "TotalBaseWaterVolume": 546302,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Element Petro Operating II, LLC",
    "WellName": "Cloud 111 #1",
    "Latitude": 32.558017,
    "Longitude": -101.081681,
    "TotalBaseWaterVolume": 624850.5787,
    "StateName": "Texas",
    "CountyName": "Scurry"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Arrington Oil & Gas Operating LLC",
    "WellName": "Hellbender State 150 1V",
    "Latitude": 31.49396,
    "Longitude": -103.29648,
    "TotalBaseWaterVolume": 815388,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B315H",
    "Latitude": 28.0294,
    "Longitude": -99.70749,
    "TotalBaseWaterVolume": 7859376,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO #1019",
    "Latitude": 31.6651594,
    "Longitude": -103.016743,
    "TotalBaseWaterVolume": 12981.74807,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Nivens #1H",
    "Latitude": 33.43744,
    "Longitude": -97.70971,
    "TotalBaseWaterVolume": 6132847,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Gandu H-120",
    "Latitude": 32.089072,
    "Longitude": -102.726767,
    "TotalBaseWaterVolume": 201894,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Dollarhide Unit 10-31-C",
    "Latitude": 32.16736,
    "Longitude": -103.05945,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mattie 2008",
    "Latitude": 32.32636,
    "Longitude": -102.43734,
    "TotalBaseWaterVolume": 1411124,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Turbo Unit B 1",
    "Latitude": 29.087194,
    "Longitude": -97.594556,
    "TotalBaseWaterVolume": 2320190,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 30H",
    "Latitude": 28.2944056,
    "Longitude": -99.8397002,
    "TotalBaseWaterVolume": 7047978,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina Ranch 47H",
    "Latitude": 28.3143861,
    "Longitude": -99.7987222,
    "TotalBaseWaterVolume": 7814058,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Malcolm A 2",
    "Latitude": 31.70545,
    "Longitude": -102.30766,
    "TotalBaseWaterVolume": 1277833,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "C A Goldsmith #2238",
    "Latitude": 31.9127301,
    "Longitude": -102.6454787,
    "TotalBaseWaterVolume": 182868,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee D 2514E",
    "Latitude": 31.71878056,
    "Longitude": -102.7219889,
    "TotalBaseWaterVolume": 999099,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 551",
    "Latitude": 32.009094,
    "Longitude": -102.681878,
    "TotalBaseWaterVolume": 189085,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Wilkinson 31#7",
    "Latitude": 31.67115,
    "Longitude": -101.507031,
    "TotalBaseWaterVolume": 1647468.629,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Red Snapper-Neal 1503",
    "Latitude": 31.97471,
    "Longitude": -101.44337,
    "TotalBaseWaterVolume": 947730,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Deleon Reinhard Unit #8H",
    "Latitude": 29.008431,
    "Longitude": -97.981006,
    "TotalBaseWaterVolume": 5262894,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Mobil A 1H ?",
    "Latitude": 28.754322,
    "Longitude": -98.01698,
    "TotalBaseWaterVolume": 3164256,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Irvin A Unit 120H",
    "Latitude": 28.582085,
    "Longitude": -98.950805,
    "TotalBaseWaterVolume": 5808082,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Irvin A Unit 121H",
    "Latitude": 28.582118,
    "Longitude": -98.950833,
    "TotalBaseWaterVolume": 5025545,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hess Corporation",
    "WellName": "Garza Ranch A Unit A-1H",
    "Latitude": 28.48747,
    "Longitude": -99.23679,
    "TotalBaseWaterVolume": 2517057,
    "StateName": "Texas",
    "CountyName": "La Salle County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Salisbury 33-71/Well No. 2",
    "Latitude": 31.65488,
    "Longitude": -103.53811,
    "TotalBaseWaterVolume": 1224006,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Sevengills 54-1-31 1H",
    "Latitude": 31.9135294,
    "Longitude": -103.6998194,
    "TotalBaseWaterVolume": 4190040,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Y Bar B4H",
    "Latitude": 28.475994,
    "Longitude": -98.470125,
    "TotalBaseWaterVolume": 3242244,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Mabee D3",
    "Latitude": 32.2964981,
    "Longitude": -102.2109948,
    "TotalBaseWaterVolume": 703752,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Loftin 7 #2",
    "Latitude": 32.49357,
    "Longitude": -102.02476,
    "TotalBaseWaterVolume": 1606038,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee AZ #1324",
    "Latitude": 32.016453,
    "Longitude": -102.268869,
    "TotalBaseWaterVolume": 1912851.429,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wilson A #4",
    "Latitude": 31.90241766,
    "Longitude": -102.0713406,
    "TotalBaseWaterVolume": 1151233,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "June T Sanders #14",
    "Latitude": 31.7320088,
    "Longitude": -102.1952219,
    "TotalBaseWaterVolume": 1072228,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Bivins-LIT 1154",
    "Latitude": 35.55115,
    "Longitude": -102.2383956,
    "TotalBaseWaterVolume": 386192,
    "StateName": "Texas",
    "CountyName": "Oldham"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson Exploration, LLC",
    "WellName": "Lindsey-Bledsoe #3",
    "Latitude": 30.23996,
    "Longitude": -93.76717,
    "TotalBaseWaterVolume": 106554,
    "StateName": "Texas",
    "CountyName": "Orange"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 09 A #1102H",
    "Latitude": 31.2822166,
    "Longitude": -101.6408587,
    "TotalBaseWaterVolume": 7197246,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 10-10 2H",
    "Latitude": 31.27978704,
    "Longitude": -101.5292075,
    "TotalBaseWaterVolume": 9400517,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Divide Draw 148K",
    "Latitude": 31.26747,
    "Longitude": -101.41148,
    "TotalBaseWaterVolume": 1341144,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Mitchell 1-10",
    "Latitude": 31.18558,
    "Longitude": -96.44686,
    "TotalBaseWaterVolume": 821512,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Quant 1H",
    "Latitude": 32.581225,
    "Longitude": -97.277047,
    "TotalBaseWaterVolume": 1725397.8,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Vantage Fort Worth Energy LLC",
    "WellName": "LABC South 1H",
    "Latitude": 32.69529,
    "Longitude": -97.18348,
    "TotalBaseWaterVolume": 7387758,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "R.L. Ross 116 #14",
    "Latitude": 31.4531844,
    "Longitude": -102.165783,
    "TotalBaseWaterVolume": 906260.7685,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Robbins 3 #3",
    "Latitude": 31.19886296,
    "Longitude": -101.921265,
    "TotalBaseWaterVolume": 338350.3981,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Robbins 3 #3",
    "Latitude": 31.19886296,
    "Longitude": -101.921265,
    "TotalBaseWaterVolume": 9423339,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "H S A 0580",
    "Latitude": 31.5314447,
    "Longitude": -102.9669577,
    "TotalBaseWaterVolume": 8075.33747,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1346",
    "Latitude": 31.6476964,
    "Longitude": -103.0170144,
    "TotalBaseWaterVolume": 12049.96872,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanguine Gas Exploration",
    "WellName": "Mooney 2059H",
    "Latitude": 35.245952,
    "Longitude": -100.042017,
    "TotalBaseWaterVolume": 3073125,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanguine Gas Exploration",
    "WellName": "Mooney 3059H",
    "Latitude": 35.245952,
    "Longitude": -100.041927,
    "TotalBaseWaterVolume": 3065469,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles  17-14-17H",
    "Latitude": 35.473598,
    "Longitude": -100.072266,
    "TotalBaseWaterVolume": 2961567,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "JT Lindley Lynne #62",
    "Latitude": 32.2939148,
    "Longitude": -102.7171927,
    "TotalBaseWaterVolume": 89723,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "JT Lindley Lynne #63",
    "Latitude": 32.2926932,
    "Longitude": -102.7168083,
    "TotalBaseWaterVolume": 151316,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "McCarn A 5H",
    "Latitude": 28.652775,
    "Longitude": -98.041854,
    "TotalBaseWaterVolume": 4333350,
    "StateName": "Texas",
    "CountyName": "BEE"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Cordona Lake #36",
    "Latitude": 31.3118989,
    "Longitude": -102.5529048,
    "TotalBaseWaterVolume": 233562,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lea P J Et Al 231H",
    "Latitude": 31.42066,
    "Longitude": -102.54331,
    "TotalBaseWaterVolume": 2307955,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 52S #0903H",
    "Latitude": 31.0664556,
    "Longitude": -101.0023472,
    "TotalBaseWaterVolume": 8319402,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Owl Draw 12 Unit #2H",
    "Latitude": 31.9845,
    "Longitude": -104.215,
    "TotalBaseWaterVolume": 1902827,
    "StateName": "Texas",
    "CountyName": "Culberson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "M Gohlke Unit A 1",
    "Latitude": 29.0820752,
    "Longitude": -97.5824611,
    "TotalBaseWaterVolume": 3330500,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 547",
    "Latitude": 32.015956,
    "Longitude": -102.670694,
    "TotalBaseWaterVolume": 126803,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Davenport Robert M 1H",
    "Latitude": 32.68925,
    "Longitude": -100.56386,
    "TotalBaseWaterVolume": 3028603,
    "StateName": "Texas",
    "CountyName": "Fisher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "North Riley Unit 207",
    "Latitude": 32.71794,
    "Longitude": -102.84744,
    "TotalBaseWaterVolume": 69109,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #503",
    "Latitude": 32.8839243,
    "Longitude": -102.9324441,
    "TotalBaseWaterVolume": 218106,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "Miller Unit #1H",
    "Latitude": 29.53076,
    "Longitude": -97.284652,
    "TotalBaseWaterVolume": 4017594,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Elm Creek Ranch 7 #6HR",
    "Latitude": 35.751139,
    "Longitude": -100.12425,
    "TotalBaseWaterVolume": 4076393,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Navidad Resources LLC",
    "WellName": "ESPF 6-6",
    "Latitude": 30.9856,
    "Longitude": -95.6567,
    "TotalBaseWaterVolume": 2226588,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Chalk, G.O. -C- 36",
    "Latitude": 32.096403,
    "Longitude": -101.280644,
    "TotalBaseWaterVolume": 285012,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Handy 02 02 02H",
    "Latitude": 28.860994,
    "Longitude": -97.789985,
    "TotalBaseWaterVolume": 3778530,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Handy 02 02 03H",
    "Latitude": 28.861025,
    "Longitude": -97.790019,
    "TotalBaseWaterVolume": 3814566,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Handy 02 02 04H",
    "Latitude": 28.861052,
    "Longitude": -97.790053,
    "TotalBaseWaterVolume": 3814566,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Riley Exploration, LLC",
    "WellName": "Banduch 1H",
    "Latitude": 28.97736,
    "Longitude": -97.90239,
    "TotalBaseWaterVolume": 5336423,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "McAlister 5H",
    "Latitude": 28.82,
    "Longitude": -97.9,
    "TotalBaseWaterVolume": 5902543,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Gross McLean Unit 1H",
    "Latitude": 28.82099,
    "Longitude": -97.978396,
    "TotalBaseWaterVolume": 2972718,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Irvin A Unit 122H",
    "Latitude": 28.582151,
    "Longitude": -98.950861,
    "TotalBaseWaterVolume": 7251044,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "LSYU #11",
    "Latitude": 29.96885,
    "Longitude": -94.830956,
    "TotalBaseWaterVolume": 58668,
    "StateName": "Texas",
    "CountyName": "Liberty"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LeNorman Operating LLC",
    "WellName": "May 163 1H",
    "Latitude": 36.0601,
    "Longitude": -100.1521,
    "TotalBaseWaterVolume": 1501991,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Casselman 40 #16",
    "Latitude": 32.07453877,
    "Longitude": -102.2201536,
    "TotalBaseWaterVolume": 1687980,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6564W",
    "Latitude": 32.39394,
    "Longitude": -101.07167,
    "TotalBaseWaterVolume": 26670,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Penton A Unit #1H",
    "Latitude": 33.502175,
    "Longitude": -97.497811,
    "TotalBaseWaterVolume": 5643540,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newark E&P Operating, LLC",
    "WellName": "Paltex 1",
    "Latitude": 32.91612,
    "Longitude": -98.38646,
    "TotalBaseWaterVolume": 496902,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Mitchell 2-6",
    "Latitude": 31.18754,
    "Longitude": -96.46107,
    "TotalBaseWaterVolume": 738030,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forest Oil Corporation",
    "WellName": "Alexander Heirs 1-7",
    "Latitude": 32.13337787,
    "Longitude": -94.89194116,
    "TotalBaseWaterVolume": 72660,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Delta Oil & Gas Ltd.",
    "WellName": "Hopkins #3",
    "Latitude": 32.8529493,
    "Longitude": -98.6802911,
    "TotalBaseWaterVolume": 9576,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Delta Oil & Gas Ltd.",
    "WellName": "Wright B #1",
    "Latitude": 32.8523028,
    "Longitude": -98.6954362,
    "TotalBaseWaterVolume": 5418,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walter Exploration Company",
    "WellName": "Walter Smith Unit #22",
    "Latitude": 33.0312336,
    "Longitude": -100.1980936,
    "TotalBaseWaterVolume": 28350,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Davidson 2B-7",
    "Latitude": 31.6193,
    "Longitude": -102.051341,
    "TotalBaseWaterVolume": 1562022,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Leah 19",
    "Latitude": 31.43676,
    "Longitude": -102.07425,
    "TotalBaseWaterVolume": 1088989,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Crouch 2",
    "Latitude": 31.434928,
    "Longitude": -103.463483,
    "TotalBaseWaterVolume": 231516,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Frye E 9 4H",
    "Latitude": 35.45809,
    "Longitude": -100.14982,
    "TotalBaseWaterVolume": 5119695,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Arthur Downe 8H",
    "Latitude": 33.25665,
    "Longitude": -97.394212,
    "TotalBaseWaterVolume": 4119973,
    "StateName": "Texas",
    "CountyName": "Wise County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Arthur Downe 7H",
    "Latitude": 33.25593,
    "Longitude": -97.39522,
    "TotalBaseWaterVolume": 4102445,
    "StateName": "Texas",
    "CountyName": "Wise County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Arthur Downe 6H",
    "Latitude": 33.25474,
    "Longitude": -97.39628,
    "TotalBaseWaterVolume": 3330066,
    "StateName": "Texas",
    "CountyName": "Wise County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forge Energy, LLC",
    "WellName": "Fisher 8- 3H",
    "Latitude": 32.4184517,
    "Longitude": -102.6208084,
    "TotalBaseWaterVolume": 2270382,
    "StateName": "Texas",
    "CountyName": "Andrews County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240C-2525",
    "Latitude": 32.297853,
    "Longitude": -102.231452,
    "TotalBaseWaterVolume": 1710996,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Elk #3",
    "Latitude": 32.4345225,
    "Longitude": -102.6500165,
    "TotalBaseWaterVolume": 162769,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Abram GU 1H",
    "Latitude": 31.3781614,
    "Longitude": -94.6478556,
    "TotalBaseWaterVolume": 1542275,
    "StateName": "Texas",
    "CountyName": "Angelina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hilcorp Energy Company",
    "WellName": "Old Ocean Unit 260H",
    "Latitude": 29.020465,
    "Longitude": -95.433963,
    "TotalBaseWaterVolume": 441176,
    "StateName": "Texas",
    "CountyName": "Brazoria"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "University 36 B #1",
    "Latitude": 31.455,
    "Longitude": -102.407,
    "TotalBaseWaterVolume": 130788,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "University 45 #2504LH",
    "Latitude": 30.93350546,
    "Longitude": -101.2850508,
    "TotalBaseWaterVolume": 8423725,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "University 45 #2504UH",
    "Latitude": 30.93350593,
    "Longitude": -101.284987,
    "TotalBaseWaterVolume": 8421115,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "DCCO 1 - MORRIS TED 28H",
    "Latitude": 33.15307,
    "Longitude": -97.34489,
    "TotalBaseWaterVolume": 4541796,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Frank A 9",
    "Latitude": 32.04848,
    "Longitude": -102.70283,
    "TotalBaseWaterVolume": 38580,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BD #1117",
    "Latitude": 32.028308,
    "Longitude": -102.299358,
    "TotalBaseWaterVolume": 1830999.376,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Weyman 11",
    "Latitude": 32.014811,
    "Longitude": -102.662067,
    "TotalBaseWaterVolume": 134317,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Riley 4813",
    "Latitude": 31.88194,
    "Longitude": -101.48433,
    "TotalBaseWaterVolume": 916146,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Anderson 26 #11",
    "Latitude": 31.925,
    "Longitude": -101.515,
    "TotalBaseWaterVolume": 889503,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "ED Books 13 #9",
    "Latitude": 31.733841,
    "Longitude": -101.434179,
    "TotalBaseWaterVolume": 1633860.299,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Verlander Unit #6H",
    "Latitude": 29.353758,
    "Longitude": -97.424442,
    "TotalBaseWaterVolume": 4159344,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forest Oil Corporation",
    "WellName": "Bouldin Trust 2H",
    "Latitude": 29.3873,
    "Longitude": -97.6459,
    "TotalBaseWaterVolume": 2457445,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Long 13 #2",
    "Latitude": 32.317895,
    "Longitude": -101.528273,
    "TotalBaseWaterVolume": 1275222.569,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Foreland Operating, LLC",
    "WellName": "Captain Coll 15 1H",
    "Latitude": 31.153684,
    "Longitude": -101.077983,
    "TotalBaseWaterVolume": 6031260,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Pena Winfield A 52H",
    "Latitude": 28.543513,
    "Longitude": -99.251822,
    "TotalBaseWaterVolume": 9294009,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Pena Winfield A 53H",
    "Latitude": 28.543491,
    "Longitude": -99.25186,
    "TotalBaseWaterVolume": 10526979,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Rafter C1",
    "Latitude": 28.616754,
    "Longitude": -98.218702,
    "TotalBaseWaterVolume": 1987742,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Favor 01 01H",
    "Latitude": 28.47539,
    "Longitude": -98.227083,
    "TotalBaseWaterVolume": 3250212,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Rainbow State 33-70/Well No. 3",
    "Latitude": 31.65438,
    "Longitude": -103.53276,
    "TotalBaseWaterVolume": 802200,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Thelma Brite #20H",
    "Latitude": 28.553186,
    "Longitude": -98.596706,
    "TotalBaseWaterVolume": 5997936,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "TAS 37 #3",
    "Latitude": 31.17875,
    "Longitude": -101.89071,
    "TotalBaseWaterVolume": 1083810,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Reese #5",
    "Latitude": 32.17924004,
    "Longitude": -101.9187832,
    "TotalBaseWaterVolume": 1220132,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Betty A #1",
    "Latitude": 29.217546,
    "Longitude": -99.0774031,
    "TotalBaseWaterVolume": 19125,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Oscar D #1",
    "Latitude": 29.203339,
    "Longitude": -99.0722409,
    "TotalBaseWaterVolume": 14868,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Oscar D #2",
    "Latitude": 29.2041767,
    "Longitude": -99.0717324,
    "TotalBaseWaterVolume": 17934,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Oscar D #4",
    "Latitude": 29.2049393,
    "Longitude": -99.0720679,
    "TotalBaseWaterVolume": 15330,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec Oscar D #3",
    "Latitude": 29.2041633,
    "Longitude": -99.0707576,
    "TotalBaseWaterVolume": 17346,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Pearl Jam 2408D",
    "Latitude": 32.0102797,
    "Longitude": -102.2805859,
    "TotalBaseWaterVolume": 1703322.803,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "South Curtis Ranch Unit 1112",
    "Latitude": 32.074356,
    "Longitude": -102.090683,
    "TotalBaseWaterVolume": 592903,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6201 (PA)",
    "Latitude": 32.41698,
    "Longitude": -101.04271,
    "TotalBaseWaterVolume": 6888,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Penton Unit #1H",
    "Latitude": 33.502492,
    "Longitude": -97.497494,
    "TotalBaseWaterVolume": 5079900,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Penton Unit #2H",
    "Latitude": 33.502444,
    "Longitude": -97.497433,
    "TotalBaseWaterVolume": 4736802,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Penton A Unit #2H",
    "Latitude": 33.502131,
    "Longitude": -97.497747,
    "TotalBaseWaterVolume": 5762778,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cabot Oil & Gas Corp",
    "WellName": "Miller 44-1H",
    "Latitude": 36.47879314,
    "Longitude": -100.7860656,
    "TotalBaseWaterVolume": 2931222,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Schoenhals 937-2H",
    "Latitude": 36.35032,
    "Longitude": -100.56195,
    "TotalBaseWaterVolume": 681169,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Edith Betts (SA) 2H",
    "Latitude": 32.9663323,
    "Longitude": -97.5793578,
    "TotalBaseWaterVolume": 6333495,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Edith Betts (SA) 3H",
    "Latitude": 32.9663872,
    "Longitude": -97.5793572,
    "TotalBaseWaterVolume": 5922507,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sahara Operating Company",
    "WellName": "Jackson Hughes 24 #3",
    "Latitude": 31.43267,
    "Longitude": -101.53128,
    "TotalBaseWaterVolume": 1459038,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "HSF State A 3#1",
    "Latitude": 31.308023,
    "Longitude": -103.598982,
    "TotalBaseWaterVolume": 1407210,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Betty Glass 42 42C",
    "Latitude": 31.63461,
    "Longitude": -101.25265,
    "TotalBaseWaterVolume": 1313046,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LCS Production Company",
    "WellName": "Corsica UNIT 12",
    "Latitude": 33.11956,
    "Longitude": -100.06674,
    "TotalBaseWaterVolume": 54852,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walter Exploration Company",
    "WellName": "Walter Smith Unit #22",
    "Latitude": 33.0312336,
    "Longitude": -100.1980936,
    "TotalBaseWaterVolume": 35700,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Forest Hill Ranch Unit 3H",
    "Latitude": 32.657589,
    "Longitude": -97.256219,
    "TotalBaseWaterVolume": 4057708.2,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate 2028",
    "Latitude": 31.48141315,
    "Longitude": -102.0190532,
    "TotalBaseWaterVolume": 1224174,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL T 27 6",
    "Latitude": 31.53648422,
    "Longitude": -102.1578827,
    "TotalBaseWaterVolume": 1407792,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Cornell Unit #3081",
    "Latitude": 32.9943927,
    "Longitude": -102.8642221,
    "TotalBaseWaterVolume": 116214,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman Mascho Unit/Well No. 591 (PA)",
    "Latitude": 32.22304,
    "Longitude": -102.68883,
    "TotalBaseWaterVolume": 31878,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "P J Lea 134",
    "Latitude": 31.39735,
    "Longitude": -102.52786,
    "TotalBaseWaterVolume": 427263,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Black Gold 26 Fee #1H",
    "Latitude": 31.93891389,
    "Longitude": -104.2330111,
    "TotalBaseWaterVolume": 4105884,
    "StateName": "Texas",
    "CountyName": "Culberson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Marvin Burch 4H",
    "Latitude": 33.16,
    "Longitude": -97.15,
    "TotalBaseWaterVolume": 4652019,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Clyde Cowden 248",
    "Latitude": 31.93628,
    "Longitude": -102.564622,
    "TotalBaseWaterVolume": 166641,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mayberry 3",
    "Latitude": 31.74626,
    "Longitude": -102.3614,
    "TotalBaseWaterVolume": 1754508,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Vaughan-Lenn 36 #6",
    "Latitude": 31.71231346,
    "Longitude": -102.3949655,
    "TotalBaseWaterVolume": 912230,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee 'B' 4108E",
    "Latitude": 31.69724611,
    "Longitude": -102.3456103,
    "TotalBaseWaterVolume": 916196,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Blakeney 12",
    "Latitude": 32.027589,
    "Longitude": -102.673194,
    "TotalBaseWaterVolume": 130402,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EF Energy, LLC",
    "WellName": "Kothmann  7H",
    "Latitude": 28.753389,
    "Longitude": -98.852058,
    "TotalBaseWaterVolume": 2731379,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #416",
    "Latitude": 32.8786255,
    "Longitude": -102.9008099,
    "TotalBaseWaterVolume": 130662,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Sabine -35A-/Well No. 4",
    "Latitude": 31.69086,
    "Longitude": -101.43632,
    "TotalBaseWaterVolume": 2345994,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI Halfmann 31 #1",
    "Latitude": 31.78361527,
    "Longitude": -101.541185,
    "TotalBaseWaterVolume": 2317266,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Compnay, Inc",
    "WellName": "Wright #1H",
    "Latitude": 36.1942,
    "Longitude": -92.68972,
    "TotalBaseWaterVolume": 5905284,
    "StateName": "Texas",
    "CountyName": "Grayson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Johnson Cypher GU 3",
    "Latitude": 26.45951,
    "Longitude": -98.355248,
    "TotalBaseWaterVolume": 170778,
    "StateName": "Texas",
    "CountyName": "Hidalgo"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Robb 25 #1",
    "Latitude": 32.1371,
    "Longitude": -101.67079,
    "TotalBaseWaterVolume": 1062012,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Sevengills 54-1-31 2H",
    "Latitude": 31.913528,
    "Longitude": -103.6975216,
    "TotalBaseWaterVolume": 3996844,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Kocian Unit 1-1H",
    "Latitude": 28.449361,
    "Longitude": -98.353518,
    "TotalBaseWaterVolume": 3357899,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Wade Estate 17 #2",
    "Latitude": 32.49967,
    "Longitude": -102.00194,
    "TotalBaseWaterVolume": 1593102,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Betty A #2",
    "Latitude": 29.2167209,
    "Longitude": -99.0774147,
    "TotalBaseWaterVolume": 14112,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aztec Drilling & Operating, LLC",
    "WellName": "Aztec-Betty A #3",
    "Latitude": 29.2158959,
    "Longitude": -99.0774262,
    "TotalBaseWaterVolume": 14910,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Texas Ten V #17",
    "Latitude": 31.88975342,
    "Longitude": -102.0163404,
    "TotalBaseWaterVolume": 1088922,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Bryant Unit #2H",
    "Latitude": 33.498439,
    "Longitude": -97.4985,
    "TotalBaseWaterVolume": 5328330,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Bryant Unit #1H",
    "Latitude": 33.498489,
    "Longitude": -97.498556,
    "TotalBaseWaterVolume": 4959234,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Larah 4",
    "Latitude": 31.48392,
    "Longitude": -102.23511,
    "TotalBaseWaterVolume": 1521475,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Meredith 8",
    "Latitude": 31.38846,
    "Longitude": -102.04722,
    "TotalBaseWaterVolume": 1036459,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Cody M #5402",
    "Latitude": 31.2965,
    "Longitude": -102.09974,
    "TotalBaseWaterVolume": 1499087,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Amacker 46 8H",
    "Latitude": 31.8539691,
    "Longitude": -101.9924637,
    "TotalBaseWaterVolume": 11903793,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Sealy Smith Foundation 1030",
    "Latitude": 31.627289,
    "Longitude": -102.879931,
    "TotalBaseWaterVolume": 745922,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Vinson Fee D 2",
    "Latitude": 33.020682,
    "Longitude": -97.447903,
    "TotalBaseWaterVolume": 819399,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 3250",
    "Latitude": 32.979675,
    "Longitude": -102.898214,
    "TotalBaseWaterVolume": 35096,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "YWCU 4421",
    "Latitude": 32.967894,
    "Longitude": -102.856027,
    "TotalBaseWaterVolume": 7874,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Abel #10",
    "Latitude": 32.0140359,
    "Longitude": -101.6726431,
    "TotalBaseWaterVolume": 23701,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Herbst A #1H",
    "Latitude": 28.8244,
    "Longitude": -98.263828,
    "TotalBaseWaterVolume": 9223729,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Herbst B #1H",
    "Latitude": 28.824344,
    "Longitude": -98.263778,
    "TotalBaseWaterVolume": 9799973,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Kestrel Unit #1H",
    "Latitude": 28.878256,
    "Longitude": -98.233564,
    "TotalBaseWaterVolume": 4759860,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "R May B 4H",
    "Latitude": 28.693622,
    "Longitude": -98.244725,
    "TotalBaseWaterVolume": 2353649,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 31H",
    "Latitude": 28.29440556,
    "Longitude": -99.83965278,
    "TotalBaseWaterVolume": 7045332,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 35H",
    "Latitude": 28.2925833,
    "Longitude": -99.7081611,
    "TotalBaseWaterVolume": 7147602,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 47H",
    "Latitude": 28.2979363,
    "Longitude": -99.8241615,
    "TotalBaseWaterVolume": 6228168,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 538",
    "Latitude": 32.024658,
    "Longitude": -102.685403,
    "TotalBaseWaterVolume": 127516,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Keathley 46 #14",
    "Latitude": 31.882,
    "Longitude": -101.521,
    "TotalBaseWaterVolume": 940995,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Shackelton 31 1",
    "Latitude": 31.8797,
    "Longitude": -101.67341,
    "TotalBaseWaterVolume": 824922,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Newton 43 #2",
    "Latitude": 32.363064,
    "Longitude": -101.519005,
    "TotalBaseWaterVolume": 1068030,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Highland A 3048B",
    "Latitude": 31.39021,
    "Longitude": -101.24378,
    "TotalBaseWaterVolume": 906612,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Mangione 01 02H",
    "Latitude": 28.8846844,
    "Longitude": -97.8063503,
    "TotalBaseWaterVolume": 2394252,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Stephens & Johnson Operating Co.",
    "WellName": "CASCABEL",
    "Latitude": 30.8315,
    "Longitude": -102.52599,
    "TotalBaseWaterVolume": 137840,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Harrison Ranch 56 #1002H",
    "Latitude": 31.6047725,
    "Longitude": -103.9431122,
    "TotalBaseWaterVolume": 5588604,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Arabella Petroleum",
    "WellName": "SM Prewitt 1H",
    "Latitude": 31.319836,
    "Longitude": -103.60322,
    "TotalBaseWaterVolume": 414769,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles 24 12-24H",
    "Latitude": 35.47400007,
    "Longitude": -100.0720001,
    "TotalBaseWaterVolume": 7050321,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Frye E 9 3H",
    "Latitude": 35.45816,
    "Longitude": -100.15548,
    "TotalBaseWaterVolume": 4745395,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2252",
    "Latitude": 32.996032,
    "Longitude": -102.89841,
    "TotalBaseWaterVolume": 35088,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "CGU 18 54HH",
    "Latitude": 32.15282,
    "Longitude": -94.40522,
    "TotalBaseWaterVolume": 9016177,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Emma Tartt 18H",
    "Latitude": 28.7808,
    "Longitude": -98.18,
    "TotalBaseWaterVolume": 3493602,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Veit Unit A 1",
    "Latitude": 29.187222,
    "Longitude": -97.491111,
    "TotalBaseWaterVolume": 3282357,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Musick A 1H",
    "Latitude": 28.990303,
    "Longitude": -97.698939,
    "TotalBaseWaterVolume": 2883147,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "PFWU  # 59",
    "Latitude": 26.166753,
    "Longitude": -98.162642,
    "TotalBaseWaterVolume": 78709,
    "StateName": "Texas",
    "CountyName": "Hidalgo"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Brysch Adams 3H",
    "Latitude": 28.840297,
    "Longitude": -97.960288,
    "TotalBaseWaterVolume": 3628632,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Deleon Reinhard Unit #7H",
    "Latitude": 29.008481,
    "Longitude": -97.980911,
    "TotalBaseWaterVolume": 5310648,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Gross McLean Unit 2H",
    "Latitude": 28.820964,
    "Longitude": -97.978468,
    "TotalBaseWaterVolume": 2891910,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "Lindsay 10 1H",
    "Latitude": 31.9845046,
    "Longitude": -103.7451244,
    "TotalBaseWaterVolume": 3989425,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Sevengills 54-1-31 4H",
    "Latitude": 31.9135264,
    "Longitude": -103.6952239,
    "TotalBaseWaterVolume": 3396983,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Pearl Jam 2409D",
    "Latitude": 32.0063694,
    "Longitude": -102.2793295,
    "TotalBaseWaterVolume": 1695911.984,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Roy Robinson 7H",
    "Latitude": 33.33,
    "Longitude": -97.82,
    "TotalBaseWaterVolume": 4262023,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Cornell Unit #3082",
    "Latitude": 32.996792,
    "Longitude": -102.8646126,
    "TotalBaseWaterVolume": 112602,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240-2728",
    "Latitude": 32.277536,
    "Longitude": -102.240709,
    "TotalBaseWaterVolume": 1696632,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "University YZ 10H",
    "Latitude": 32.408417,
    "Longitude": -102.718986,
    "TotalBaseWaterVolume": 472123,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Mobil Jone 8",
    "Latitude": 32.2547441,
    "Longitude": -102.6659168,
    "TotalBaseWaterVolume": 87208,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix #144",
    "Latitude": 32.2806853,
    "Longitude": -102.715026,
    "TotalBaseWaterVolume": 97799,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "University 29-5 1H",
    "Latitude": 30.7356,
    "Longitude": -101.65179,
    "TotalBaseWaterVolume": 9672664,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Barkowsky 48 #2",
    "Latitude": 32.539911,
    "Longitude": -101.794106,
    "TotalBaseWaterVolume": 1400574,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Musick A 2H",
    "Latitude": 28.990358,
    "Longitude": -97.698936,
    "TotalBaseWaterVolume": 2704842,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Big Oak A #1H",
    "Latitude": 29.285483,
    "Longitude": -97.308803,
    "TotalBaseWaterVolume": 2532269,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 46H",
    "Latitude": 28.2979361,
    "Longitude": -99.8242083,
    "TotalBaseWaterVolume": 6153327,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 535",
    "Latitude": 32.022428,
    "Longitude": -102.663633,
    "TotalBaseWaterVolume": 123263,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Jenkins Unit 016",
    "Latitude": 32.59882,
    "Longitude": -102.87185,
    "TotalBaseWaterVolume": 149875,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Lane T C-Lane Tr-E (Alloc)42-1HU",
    "Latitude": 31.65556111,
    "Longitude": -101.5076167,
    "TotalBaseWaterVolume": 9745442,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Kangerga 2",
    "Latitude": 32.3921981,
    "Longitude": -94.6421742,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Gregg"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Cleveland Ranch `22` 2H",
    "Latitude": 36.03988,
    "Longitude": -100.39969,
    "TotalBaseWaterVolume": 675024,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legend Natural Gas, LLC",
    "WellName": "Mitchell Ranch B-8H",
    "Latitude": 32.50494,
    "Longitude": -97.67384,
    "TotalBaseWaterVolume": 4757098,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legend Natural Gas, LLC",
    "WellName": "Mitchell Ranch B-29H",
    "Latitude": 32.50491,
    "Longitude": -97.67361,
    "TotalBaseWaterVolume": 5626950,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Chalk, G.O. -F- 10",
    "Latitude": 32.090364,
    "Longitude": -101.281339,
    "TotalBaseWaterVolume": 265020,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Strickland 19 #2",
    "Latitude": 32.312703,
    "Longitude": -101.499657,
    "TotalBaseWaterVolume": 923560.2574,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Martin Ranch B 13H",
    "Latitude": 28.523611,
    "Longitude": -98.925,
    "TotalBaseWaterVolume": 7665210,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Fullen 11H",
    "Latitude": 31.41984,
    "Longitude": -96.20266,
    "TotalBaseWaterVolume": 4598160,
    "StateName": "Texas",
    "CountyName": "Leon"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Dana #201H",
    "Latitude": 32.97711213,
    "Longitude": -101.5640805,
    "TotalBaseWaterVolume": 1351564.551,
    "StateName": "Texas",
    "CountyName": "Lynn"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Mabee Ranch 239D 1704",
    "Latitude": 32.205228,
    "Longitude": -102.189467,
    "TotalBaseWaterVolume": 608232,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Slaughter 19A #1",
    "Latitude": 32.47248702,
    "Longitude": -101.8438921,
    "TotalBaseWaterVolume": 988437,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Verl 45 #1",
    "Latitude": 32.2558,
    "Longitude": -101.4255,
    "TotalBaseWaterVolume": 873810,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "NOA TXL Fee 3705M",
    "Latitude": 31.96997083,
    "Longitude": -102.2539619,
    "TotalBaseWaterVolume": 410086,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 1521W",
    "Latitude": 32.44685,
    "Longitude": -101.05603,
    "TotalBaseWaterVolume": 14532,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mayse C 1H",
    "Latitude": 32.233716,
    "Longitude": -100.758139,
    "TotalBaseWaterVolume": 10353761,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Westbrook Southeast Unit/Well No. 2314W",
    "Latitude": 32.3819,
    "Longitude": -101.04235,
    "TotalBaseWaterVolume": 16590,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Veritas Energy, LLC",
    "WellName": "McMurry Ranch 2H",
    "Latitude": 32.881156,
    "Longitude": -98.355187,
    "TotalBaseWaterVolume": 2169858,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "New Horizons P1H",
    "Latitude": 32.33544,
    "Longitude": -94.38821,
    "TotalBaseWaterVolume": 14659043,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Rocker B 42 \"A\" 42N",
    "Latitude": 31.37852,
    "Longitude": -101.38381,
    "TotalBaseWaterVolume": 276780,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Justin Lee McMaster B 13H",
    "Latitude": 31.62355278,
    "Longitude": -101.4413722,
    "TotalBaseWaterVolume": 499488,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Peregrine 27 #2",
    "Latitude": 31.3703299,
    "Longitude": -103.4265422,
    "TotalBaseWaterVolume": 1113630,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parallel Petroleum LLC",
    "WellName": "Mclaughlin Acct 1 143",
    "Latitude": 32.69067,
    "Longitude": -101.08749,
    "TotalBaseWaterVolume": 78301,
    "StateName": "Texas",
    "CountyName": "Scurry"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "TACOR Resources, Inc.",
    "WellName": "Lee Smith #87",
    "Latitude": 33.07754032,
    "Longitude": -100.2238114,
    "TotalBaseWaterVolume": 151032,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "HS A 1184",
    "Latitude": 31.5429069,
    "Longitude": -102.9667953,
    "TotalBaseWaterVolume": 13482,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Columbine 34-167 #1H",
    "Latitude": 31.536,
    "Longitude": -103.303,
    "TotalBaseWaterVolume": 1216565,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1934",
    "Latitude": 31.6088318,
    "Longitude": -103.0067449,
    "TotalBaseWaterVolume": 16002,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B412H",
    "Latitude": 28.04346,
    "Longitude": -99.7128,
    "TotalBaseWaterVolume": 8158206,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "RCT B 1H",
    "Latitude": 29.08,
    "Longitude": -97.99,
    "TotalBaseWaterVolume": 4416045,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Vinson Fee G 17",
    "Latitude": 33.020688,
    "Longitude": -97.447935,
    "TotalBaseWaterVolume": 819172.2,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh Petroleum, Inc.",
    "WellName": "Moore #2X",
    "Latitude": 33.1484,
    "Longitude": -102.954,
    "TotalBaseWaterVolume": 148680,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix A LZS 64",
    "Latitude": 32.2836,
    "Longitude": -102.72156,
    "TotalBaseWaterVolume": 44478,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix #132",
    "Latitude": 32.2758144,
    "Longitude": -102.7187127,
    "TotalBaseWaterVolume": 87109,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "JT Lindley Lynne #64",
    "Latitude": 32.2921361,
    "Longitude": -102.7188435,
    "TotalBaseWaterVolume": 149346,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Billie A Unit #1H",
    "Latitude": 33.4898,
    "Longitude": -97.464833,
    "TotalBaseWaterVolume": 5373984,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 32H",
    "Latitude": 28.29440556,
    "Longitude": -99.83960556,
    "TotalBaseWaterVolume": 7047894,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 45H",
    "Latitude": 28.2979361,
    "Longitude": -99.8242556,
    "TotalBaseWaterVolume": 6141479,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina Ranch 49H",
    "Latitude": 28.3144361,
    "Longitude": -99.7986472,
    "TotalBaseWaterVolume": 7099554,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BI #316",
    "Latitude": 32.037589,
    "Longitude": -102.324411,
    "TotalBaseWaterVolume": 1866175.836,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Peggy `A` 5",
    "Latitude": 31.66425,
    "Longitude": -102.30875,
    "TotalBaseWaterVolume": 1849835,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Vaughan-Lenn 42 #3",
    "Latitude": 31.88655482,
    "Longitude": -102.0221135,
    "TotalBaseWaterVolume": 1101392,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EF Energy, LLC",
    "WellName": "Kothmann Kerr 1H",
    "Latitude": 28.731014,
    "Longitude": -98.865139,
    "TotalBaseWaterVolume": 2267717,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Cheatham 13 #6",
    "Latitude": 32.01664283,
    "Longitude": -101.7211624,
    "TotalBaseWaterVolume": 1529815,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Barbee 4D",
    "Latitude": 31.67312,
    "Longitude": -101.32045,
    "TotalBaseWaterVolume": 1636950,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Riley 47 #19",
    "Latitude": 31.881,
    "Longitude": -101.501,
    "TotalBaseWaterVolume": 1026198,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Cox Bundy 16 #4",
    "Latitude": 31.749173,
    "Longitude": -101.394085,
    "TotalBaseWaterVolume": 2239020,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Weaver 23 16",
    "Latitude": 31.8249,
    "Longitude": -101.48938,
    "TotalBaseWaterVolume": 1083852,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -3A-/Well No. 3",
    "Latitude": 31.73615,
    "Longitude": -101.58266,
    "TotalBaseWaterVolume": 2361366,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Shortes #703",
    "Latitude": 32.42952,
    "Longitude": -101.64805,
    "TotalBaseWaterVolume": 1046304,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Sugg 2829 M1H",
    "Latitude": 31.257,
    "Longitude": -101.075,
    "TotalBaseWaterVolume": 9812040,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Bodden #1H",
    "Latitude": 29.012428,
    "Longitude": -97.825567,
    "TotalBaseWaterVolume": 6347720,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Clemons Unit #2H",
    "Latitude": 29.088761,
    "Longitude": -97.797247,
    "TotalBaseWaterVolume": 5424972,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Bodden #2H",
    "Latitude": 29.012497,
    "Longitude": -97.825572,
    "TotalBaseWaterVolume": 8485688,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Golden #3H",
    "Latitude": 29.06535129,
    "Longitude": -97.70815768,
    "TotalBaseWaterVolume": 3565825.2,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Golden #5H",
    "Latitude": 29.06538066,
    "Longitude": -97.70806652,
    "TotalBaseWaterVolume": 3340600,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cheyenne Petroleum Company",
    "WellName": "Pt Unit B 1H",
    "Latitude": 28.61224,
    "Longitude": -98.88835,
    "TotalBaseWaterVolume": 4220076,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "House Unit 1-1H",
    "Latitude": 28.449364,
    "Longitude": -98.35414,
    "TotalBaseWaterVolume": 2149443,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Scharbauer Ranch A #25",
    "Latitude": 32.23769386,
    "Longitude": -102.1375017,
    "TotalBaseWaterVolume": 1586988,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 1839",
    "Latitude": 32.12509534,
    "Longitude": -102.1902175,
    "TotalBaseWaterVolume": 1278692,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ellsberry 64A-1",
    "Latitude": 32.2545,
    "Longitude": -101.4552,
    "TotalBaseWaterVolume": 899232,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "RV Powell 18R",
    "Latitude": 31.91947,
    "Longitude": -101.822406,
    "TotalBaseWaterVolume": 1233120,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Harbaugh Courson 146-4H",
    "Latitude": 36.07052,
    "Longitude": -100.83366,
    "TotalBaseWaterVolume": 1715164,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Valence Operating Company",
    "WellName": "Rhodes #1",
    "Latitude": 32.32839,
    "Longitude": -94.2678,
    "TotalBaseWaterVolume": 982589.2762,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Divide Draw 148H",
    "Latitude": 31.27296,
    "Longitude": -101.40174,
    "TotalBaseWaterVolume": 316596,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "Dale Evans 196 2H",
    "Latitude": 31.288256,
    "Longitude": -103.555121,
    "TotalBaseWaterVolume": 4162998,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "J. McWilliams Gas Unit 11H",
    "Latitude": 32.1881804,
    "Longitude": -94.881052,
    "TotalBaseWaterVolume": 8052213,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Steller Energy & Investment Corp",
    "WellName": "Reed 16-3",
    "Latitude": 31.99432,
    "Longitude": -101.23288,
    "TotalBaseWaterVolume": 817194,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "TACOR Resources, Inc.",
    "WellName": "Lee Smith #88",
    "Latitude": 33.08177436,
    "Longitude": -100.2188725,
    "TotalBaseWaterVolume": 100506,
    "StateName": "Texas",
    "CountyName": "Stonewall"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Four Corners TXL Fee 2716U",
    "Latitude": 31.61934722,
    "Longitude": -102,
    "TotalBaseWaterVolume": 1126447,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Amacker23 SW 2",
    "Latitude": 31.31152,
    "Longitude": -102.06089,
    "TotalBaseWaterVolume": 1264124,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #1065",
    "Latitude": 31.5150282,
    "Longitude": -101.9742163,
    "TotalBaseWaterVolume": 1222257,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Cordes 94-1",
    "Latitude": 31.274,
    "Longitude": -102.0641,
    "TotalBaseWaterVolume": 731430,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pauline 4",
    "Latitude": 31.41293447,
    "Longitude": -102.1046346,
    "TotalBaseWaterVolume": 1209180,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "State of TX DC #9 WC",
    "Latitude": 31.573,
    "Longitude": -103.219,
    "TotalBaseWaterVolume": 1152817,
    "StateName": "Texas",
    "CountyName": "Ward County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 0970",
    "Latitude": 31.6661829,
    "Longitude": -103.0128189,
    "TotalBaseWaterVolume": 8106,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1027",
    "Latitude": 31.6593551,
    "Longitude": -103.0101413,
    "TotalBaseWaterVolume": 9492,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 3251",
    "Latitude": 32.980435,
    "Longitude": -102.892602,
    "TotalBaseWaterVolume": 36078,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2253",
    "Latitude": 32.996982,
    "Longitude": -102.893511,
    "TotalBaseWaterVolume": 36842,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix #139",
    "Latitude": 32.2824321,
    "Longitude": -102.7183681,
    "TotalBaseWaterVolume": 88307,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240-1317",
    "Latitude": 32.271029,
    "Longitude": -102.265196,
    "TotalBaseWaterVolume": 1508724,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Mobil Jones 10",
    "Latitude": 32.25409,
    "Longitude": -102.66552,
    "TotalBaseWaterVolume": 83874,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "MM Fisher A #7",
    "Latitude": 32.433525,
    "Longitude": -102.65307,
    "TotalBaseWaterVolume": 158466,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Estancia Oil & Gas, LLC",
    "WellName": "MSW Brown-Portefield #3",
    "Latitude": 32.8717,
    "Longitude": -101.6025,
    "TotalBaseWaterVolume": 20160,
    "StateName": "Texas",
    "CountyName": "Borden"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "J.T. Strawn Unit #504",
    "Latitude": 33.5770503,
    "Longitude": -98.275412,
    "TotalBaseWaterVolume": 25536,
    "StateName": "Texas",
    "CountyName": "Clay"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Billie B Unit #1H",
    "Latitude": 33.489758,
    "Longitude": -97.4649,
    "TotalBaseWaterVolume": 4112892,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Billie B Unit #2H",
    "Latitude": 33.489719,
    "Longitude": -97.464967,
    "TotalBaseWaterVolume": 4080972,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "McElroy, J.T., Cons. 1147",
    "Latitude": 31.40961861,
    "Longitude": -102.32131,
    "TotalBaseWaterVolume": 34663,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "University M #1H",
    "Latitude": 31.445,
    "Longitude": -102.374,
    "TotalBaseWaterVolume": 521544.114,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45G 2202H",
    "Latitude": 30.9323,
    "Longitude": -101.2463,
    "TotalBaseWaterVolume": 10092558,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "Cinco Terry H 1002",
    "Latitude": 30.8654,
    "Longitude": -101.1335,
    "TotalBaseWaterVolume": 1879542,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark 'A' No. 3508",
    "Latitude": 33.490916,
    "Longitude": -101.480212,
    "TotalBaseWaterVolume": 40095,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Glazener 13",
    "Latitude": 31.57856,
    "Longitude": -96.1589,
    "TotalBaseWaterVolume": 130356,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Robertson Unit/Well No. 3540",
    "Latitude": 32.6926,
    "Longitude": -102.80123,
    "TotalBaseWaterVolume": 45066,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #334",
    "Latitude": 32.9035066,
    "Longitude": -102.8940078,
    "TotalBaseWaterVolume": 233940,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Birdie Mae 12 #6",
    "Latitude": 31.91044472,
    "Longitude": -101.376592,
    "TotalBaseWaterVolume": 1983006,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Compnay, Inc",
    "WellName": "McGraw #1",
    "Latitude": 33.6963,
    "Longitude": -96.76374,
    "TotalBaseWaterVolume": 191940,
    "StateName": "Texas",
    "CountyName": "Grayson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BP America Production Company",
    "WellName": "Isaacs C 196-6H",
    "Latitude": 35.868083,
    "Longitude": -100.510694,
    "TotalBaseWaterVolume": 965591,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Musgrove 9-5",
    "Latitude": 32.361,
    "Longitude": -101.363,
    "TotalBaseWaterVolume": 670958,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Long 13A#1",
    "Latitude": 32.308076,
    "Longitude": -101.531588,
    "TotalBaseWaterVolume": 1335571.382,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Powers 1408",
    "Latitude": 31.29675,
    "Longitude": -100.95857,
    "TotalBaseWaterVolume": 83286,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Ahlstrom B1",
    "Latitude": 28.8027,
    "Longitude": -98.057331,
    "TotalBaseWaterVolume": 1853320,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Sienkiewicz  #5H",
    "Latitude": 28.846583,
    "Longitude": -97.900127,
    "TotalBaseWaterVolume": 2586377,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Goodrich Petroleum Company, LLC",
    "WellName": "Burns Ranch A 23H",
    "Latitude": 28.5524911,
    "Longitude": -99.0374284,
    "TotalBaseWaterVolume": 5761772,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Plomero Ranch 5",
    "Latitude": 28.558473,
    "Longitude": -98.308699,
    "TotalBaseWaterVolume": 1869709,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ivas Smith 01 01",
    "Latitude": 28.5368192,
    "Longitude": -98.2535284,
    "TotalBaseWaterVolume": 4472202,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Zavisch South #1H",
    "Latitude": 28.349961,
    "Longitude": -98.420588,
    "TotalBaseWaterVolume": 4055638,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Campbell/Well No. 41",
    "Latitude": 32.36492,
    "Longitude": -102.02924,
    "TotalBaseWaterVolume": 719832,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "South Curtis Ranch Unit 1020",
    "Latitude": 32.070706,
    "Longitude": -102.106108,
    "TotalBaseWaterVolume": 708527,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson Exploration, LLC",
    "WellName": "Alexander 3",
    "Latitude": 30.2396051,
    "Longitude": -93.7514006,
    "TotalBaseWaterVolume": 109448,
    "StateName": "Texas",
    "CountyName": "Orange"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 09 A #1103H",
    "Latitude": 31.2822339,
    "Longitude": -101.6409881,
    "TotalBaseWaterVolume": 7333704,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Lopez #10",
    "Latitude": 26.892503,
    "Longitude": -98.191965,
    "TotalBaseWaterVolume": 244947,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "McElroy, J.T., Cons. 1577",
    "Latitude": 31.42138333,
    "Longitude": -102.3164556,
    "TotalBaseWaterVolume": 26263,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "Lott 2-6H",
    "Latitude": 35.52,
    "Longitude": -100.22,
    "TotalBaseWaterVolume": 4414853,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "FORREST LINDSAY B UNIT 1H",
    "Latitude": 33.136288,
    "Longitude": -97.889971,
    "TotalBaseWaterVolume": 3467772,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "YWCU 4535",
    "Latitude": 32.971554,
    "Longitude": -102.850855,
    "TotalBaseWaterVolume": 52565,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Cross Bar Ranch #2009X",
    "Latitude": 32.12932,
    "Longitude": -102.22994,
    "TotalBaseWaterVolume": 1652070,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Emma Tartt 19H",
    "Latitude": 28.7808,
    "Longitude": -98.18,
    "TotalBaseWaterVolume": 1934016,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Melanie #1501H",
    "Latitude": 32.91034272,
    "Longitude": -101.5264941,
    "TotalBaseWaterVolume": 605835.2749,
    "StateName": "Texas",
    "CountyName": "Borden"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tecpetrol Operating LLC",
    "WellName": "Sullivan Deep C-10",
    "Latitude": 27.202819,
    "Longitude": -98.021469,
    "TotalBaseWaterVolume": 101093,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Cordona Lake #253",
    "Latitude": 31.3073361,
    "Longitude": -102.5262028,
    "TotalBaseWaterVolume": 265734,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Connell Hattie Etal E23",
    "Latitude": 31.58336,
    "Longitude": -102.57824,
    "TotalBaseWaterVolume": 92782,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W N Waddell 1983",
    "Latitude": 31.49679,
    "Longitude": -102.626054,
    "TotalBaseWaterVolume": 32566,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "El Regalo Buckhorn #4H",
    "Latitude": 28.4445291,
    "Longitude": -99.5930948,
    "TotalBaseWaterVolume": 9629130,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "El Regalo Buckhorn #3H",
    "Latitude": 28.4444707,
    "Longitude": -99.5931357,
    "TotalBaseWaterVolume": 9387966,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Nelson 6",
    "Latitude": 31.77043,
    "Longitude": -102.64727,
    "TotalBaseWaterVolume": 110708,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Floyd 8",
    "Latitude": 31.78877,
    "Longitude": -102.34144,
    "TotalBaseWaterVolume": 964774,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BD 1123",
    "Latitude": 32.024678,
    "Longitude": -102.298181,
    "TotalBaseWaterVolume": 1906468.35,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Tripp #5",
    "Latitude": 32.00758,
    "Longitude": -102.582579,
    "TotalBaseWaterVolume": 295596,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Schwartz 36 #12",
    "Latitude": 31.922,
    "Longitude": -101.497,
    "TotalBaseWaterVolume": 962625,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Glass 15 8",
    "Latitude": 31.84043,
    "Longitude": -101.50031,
    "TotalBaseWaterVolume": 949368,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BP America Production Company",
    "WellName": "Isaacs C 195-7H",
    "Latitude": 35.86818,
    "Longitude": -100.51067,
    "TotalBaseWaterVolume": 420930,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Caraway Operating Company",
    "WellName": "Magruder 37 01",
    "Latitude": 31.2637,
    "Longitude": -100.8354,
    "TotalBaseWaterVolume": 10458,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Antelope Draw A 3A",
    "Latitude": 31.38455,
    "Longitude": -101.18951,
    "TotalBaseWaterVolume": 892878,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Oxford Witte Unit 1H",
    "Latitude": 28.862046,
    "Longitude": -98.026413,
    "TotalBaseWaterVolume": 3074232,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Medders Oil Company, Inc.",
    "WellName": "Pitchfork IIII 3",
    "Latitude": 33.56736,
    "Longitude": -100.50053,
    "TotalBaseWaterVolume": 9534,
    "StateName": "Texas",
    "CountyName": "King"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Storey 10H",
    "Latitude": 28.195192,
    "Longitude": -98.583004,
    "TotalBaseWaterVolume": 87583,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Thelma Brite #22H",
    "Latitude": 28.552983,
    "Longitude": -98.596267,
    "TotalBaseWaterVolume": 5123118,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Silver Oak Energy, LLC",
    "WellName": "Sowell #1",
    "Latitude": 31.0251,
    "Longitude": -95.8284584,
    "TotalBaseWaterVolume": 3652419,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "University Lands 7-30 12",
    "Latitude": 32.3832766,
    "Longitude": -102.1803767,
    "TotalBaseWaterVolume": 878262,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Robason 18 #2",
    "Latitude": 32.496356,
    "Longitude": -102.054887,
    "TotalBaseWaterVolume": 1434300,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Holcomb 46 #3",
    "Latitude": 32.3046,
    "Longitude": -101.5559,
    "TotalBaseWaterVolume": 968646,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Daniels 27 #2",
    "Latitude": 32.0704,
    "Longitude": -101.423,
    "TotalBaseWaterVolume": 887376,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Eagle Energy Acquisitions LP",
    "WellName": "Holt 2 2B",
    "Latitude": 32.32091,
    "Longitude": -102.12753,
    "TotalBaseWaterVolume": 758257,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek 45 #8",
    "Latitude": 31.654292,
    "Longitude": -102.002665,
    "TotalBaseWaterVolume": 1928220,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Sam 938-4HM",
    "Latitude": 36.361056,
    "Longitude": -100.563263,
    "TotalBaseWaterVolume": 1673731,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson Exploration, LLC",
    "WellName": "Alexander GU 4",
    "Latitude": 30.24278,
    "Longitude": -93.75125,
    "TotalBaseWaterVolume": 104215,
    "StateName": "Texas",
    "CountyName": "Orange"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "J MURIEL REESE 2H",
    "Latitude": 32.8451196,
    "Longitude": -97.5739706,
    "TotalBaseWaterVolume": 1658667,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "CB Athey 2",
    "Latitude": 31.1936782,
    "Longitude": -103.0432055,
    "TotalBaseWaterVolume": 967606,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker C Enron # 9",
    "Latitude": 31.3237,
    "Longitude": -101.2908,
    "TotalBaseWaterVolume": 1093028,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Oatman C18-25 #4H",
    "Latitude": 31.4875061,
    "Longitude": -103.6430021,
    "TotalBaseWaterVolume": 3081716,
    "StateName": "Texas",
    "CountyName": "Reeves County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Carter 26#1",
    "Latitude": 31.2346652,
    "Longitude": -103.3958697,
    "TotalBaseWaterVolume": 1087632,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Armour 27 #1",
    "Latitude": 31.3119118,
    "Longitude": -103.4705723,
    "TotalBaseWaterVolume": 1111614,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forest Oil Corporation",
    "WellName": "Bullard 2H",
    "Latitude": 32.077388,
    "Longitude": -94.8796159,
    "TotalBaseWaterVolume": 2814630,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Delta Oil & Gas Ltd.",
    "WellName": "Jackson Ranch F #2",
    "Latitude": 32.6220889,
    "Longitude": -98.6248167,
    "TotalBaseWaterVolume": 12978,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Delta Oil & Gas Ltd.",
    "WellName": "Corbett Ranch D-4",
    "Latitude": 32.850386,
    "Longitude": -98.660861,
    "TotalBaseWaterVolume": 84840,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Amacker 85N #01",
    "Latitude": 31.377933,
    "Longitude": -102.068736,
    "TotalBaseWaterVolume": 827694,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #4047",
    "Latitude": 31.46966164,
    "Longitude": -101.9405475,
    "TotalBaseWaterVolume": 1271634,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Garner A #1",
    "Latitude": 31.52961277,
    "Longitude": -101.9313983,
    "TotalBaseWaterVolume": 1298469,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Lynch 26 3",
    "Latitude": 31.34713,
    "Longitude": -102.01742,
    "TotalBaseWaterVolume": 1108800,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Dawn 8",
    "Latitude": 31.38709256,
    "Longitude": -102.0563781,
    "TotalBaseWaterVolume": 1231704,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlueStone Natural Resources",
    "WellName": "Colburn 2",
    "Latitude": 30.83810361,
    "Longitude": -95.81634028,
    "TotalBaseWaterVolume": 1766352,
    "StateName": "Texas",
    "CountyName": "Walker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Adobe 24",
    "Latitude": 31.447951,
    "Longitude": -103.445939,
    "TotalBaseWaterVolume": 318057,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Frye 9-1H",
    "Latitude": 35.44474,
    "Longitude": -100.16291,
    "TotalBaseWaterVolume": 4694638,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Frye 9-2H",
    "Latitude": 35.44475,
    "Longitude": -100.15795,
    "TotalBaseWaterVolume": 4630038,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "Sekula A 1H",
    "Latitude": 29.04,
    "Longitude": -97.96,
    "TotalBaseWaterVolume": 5466557,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "GROLLMAN C H `A` GAS UNIT 1H",
    "Latitude": 33.205117,
    "Longitude": -97.725014,
    "TotalBaseWaterVolume": 3677100,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "BRU 4366",
    "Latitude": 33.078296,
    "Longitude": -102.737806,
    "TotalBaseWaterVolume": 34136,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman Mascho Unit/Well No. 109 (PA)",
    "Latitude": 32.21019,
    "Longitude": -102.67499,
    "TotalBaseWaterVolume": 28854,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Three Bar Shallow Unit 102H",
    "Latitude": 32.15755,
    "Longitude": -102.79397,
    "TotalBaseWaterVolume": 5619474,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Stewart Henke 1H",
    "Latitude": 28.775964,
    "Longitude": -98.160938,
    "TotalBaseWaterVolume": 2419284,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 458H",
    "Latitude": 31.55563,
    "Longitude": -102.68561,
    "TotalBaseWaterVolume": 2043040,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Gregory -32-/Well No. 1",
    "Latitude": 32.53154,
    "Longitude": -101.96782,
    "TotalBaseWaterVolume": 726012,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "J-OB 11 #1",
    "Latitude": 32.52821,
    "Longitude": -102.10125,
    "TotalBaseWaterVolume": 995274,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Klotzman A2",
    "Latitude": 29.124827,
    "Longitude": -97.551494,
    "TotalBaseWaterVolume": 6005183,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "ARNDT A 3H",
    "Latitude": 29.100149,
    "Longitude": -97.256214,
    "TotalBaseWaterVolume": 3821447,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Klotzman Unit A-3",
    "Latitude": 29.136977,
    "Longitude": -97.537347,
    "TotalBaseWaterVolume": 3002980,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "BRISCOE CATARINA WEST 33H",
    "Latitude": 28.29440556,
    "Longitude": -99.83955833,
    "TotalBaseWaterVolume": 7032522,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina Ranch 50H",
    "Latitude": 28.3144583,
    "Longitude": -99.7986083,
    "TotalBaseWaterVolume": 7960554,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "East Penwell San Andres Unit/Well No. 1213",
    "Latitude": 31.71501,
    "Longitude": -102.59379,
    "TotalBaseWaterVolume": 10584,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "CARTER 3 Revision B",
    "Latitude": 31.767625,
    "Longitude": -102.38085,
    "TotalBaseWaterVolume": 651297,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Jocelyn #1",
    "Latitude": 32.0133976,
    "Longitude": -102.5994593,
    "TotalBaseWaterVolume": 394380,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "GSAU #2153",
    "Latitude": 31.9280111,
    "Longitude": -102.5922695,
    "TotalBaseWaterVolume": 130494,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Jessica 3411",
    "Latitude": 31.95907766,
    "Longitude": -102.794868,
    "TotalBaseWaterVolume": 158287,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "HL&P 21",
    "Latitude": 31.44339,
    "Longitude": -96.24297,
    "TotalBaseWaterVolume": 323104,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #193",
    "Latitude": 32.8729847,
    "Longitude": -102.9429856,
    "TotalBaseWaterVolume": 99245,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Foster 1 #4",
    "Latitude": 32.65210598,
    "Longitude": -102.5204969,
    "TotalBaseWaterVolume": 1359693,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Blanco -29B-/Well No. 3",
    "Latitude": 31.68387,
    "Longitude": -101.49669,
    "TotalBaseWaterVolume": 2324742,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Birdie Mae 12 6",
    "Latitude": 31.91044472,
    "Longitude": -101.376592,
    "TotalBaseWaterVolume": 2001006,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Forest Oil Corporation",
    "WellName": "WindwehenNorthcutt1H",
    "Latitude": 29.401473,
    "Longitude": -97.541371,
    "TotalBaseWaterVolume": 2349192,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Corlena Oil Company",
    "WellName": "Nix Ranch 101 1H",
    "Latitude": 36.01186,
    "Longitude": -100.4362,
    "TotalBaseWaterVolume": 1436761,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Bugg 22 #2",
    "Latitude": 32.277168,
    "Longitude": -101.541904,
    "TotalBaseWaterVolume": 1199121.278,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Rocker B \"B\" 165E",
    "Latitude": 31.24235,
    "Longitude": -101.2637,
    "TotalBaseWaterVolume": 859320,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Willie Ranch 4H",
    "Latitude": 28.194061,
    "Longitude": -99.227256,
    "TotalBaseWaterVolume": 2766330,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Donald L Hutt Fee #91",
    "Latitude": 31.83870237,
    "Longitude": -101.9351918,
    "TotalBaseWaterVolume": 908804,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Amanda 14 1",
    "Latitude": 31.34295,
    "Longitude": -103.31275,
    "TotalBaseWaterVolume": 999988,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Resolute Natural Resources",
    "WellName": "Newbury #2",
    "Latitude": 31.640634,
    "Longitude": -103.83619,
    "TotalBaseWaterVolume": 1052520,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Four Corners TXL Fee 2711U",
    "Latitude": 31.62195833,
    "Longitude": -102.2933111,
    "TotalBaseWaterVolume": 1001012,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Reed 31 12H",
    "Latitude": 35.48835,
    "Longitude": -100.16636,
    "TotalBaseWaterVolume": 2069785,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 3761",
    "Latitude": 33.0109,
    "Longitude": -102.88192,
    "TotalBaseWaterVolume": 105126,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "CARTER 3 Revision B",
    "Latitude": 31.7675,
    "Longitude": -102.3808333,
    "TotalBaseWaterVolume": 651297,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Elk #4",
    "Latitude": 32.4354057,
    "Longitude": -102.6481143,
    "TotalBaseWaterVolume": 142665,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Wilhelm Smith A 1H",
    "Latitude": 28.73562,
    "Longitude": -98.213885,
    "TotalBaseWaterVolume": 3886129,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Wilhelm Smith A 3H",
    "Latitude": 28.735622,
    "Longitude": -98.213966,
    "TotalBaseWaterVolume": 3864476,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Wilhelm Smith A 4H",
    "Latitude": 28.735623,
    "Longitude": -98.214122,
    "TotalBaseWaterVolume": 4105165,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 437H",
    "Latitude": 31.55564,
    "Longitude": -102.68555,
    "TotalBaseWaterVolume": 2578577,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hurt #9",
    "Latitude": 31.97443636,
    "Longitude": -101.7076633,
    "TotalBaseWaterVolume": 1441903,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Marlin 47 #1",
    "Latitude": 32.021,
    "Longitude": -101.436,
    "TotalBaseWaterVolume": 1027065,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Bell 22 8",
    "Latitude": 31.8217,
    "Longitude": -101.49931,
    "TotalBaseWaterVolume": 936180,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "ED Books 17 #9",
    "Latitude": 31.831,
    "Longitude": -101.534,
    "TotalBaseWaterVolume": 1033074,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LeNorman Operating LLC",
    "WellName": "Big Bull 101 1H",
    "Latitude": 35.5342,
    "Longitude": -100.0325,
    "TotalBaseWaterVolume": 3244564,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fidelity Exploration & Production",
    "WellName": "Roy C Page Gas Unit 1 #9",
    "Latitude": 26.25020795,
    "Longitude": -98.44376132,
    "TotalBaseWaterVolume": 296900,
    "StateName": "Texas",
    "CountyName": "Hidalgo"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fidelity Exploration & Production",
    "WellName": "Voltz Gas Unit 1 #7",
    "Latitude": 26.25015356,
    "Longitude": -98.44382969,
    "TotalBaseWaterVolume": 493966,
    "StateName": "Texas",
    "CountyName": "Hidalgo"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Korth Unit A1",
    "Latitude": 29.0457917,
    "Longitude": -97.7614015,
    "TotalBaseWaterVolume": 3308061,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee AZ 1323",
    "Latitude": 32.014981,
    "Longitude": -102.275019,
    "TotalBaseWaterVolume": 1967460.359,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University BL 7192H Revision A",
    "Latitude": 31.08045,
    "Longitude": -101.639747,
    "TotalBaseWaterVolume": 6390114,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Rocker -B- 185 185L",
    "Latitude": 31.22227,
    "Longitude": -101.28052,
    "TotalBaseWaterVolume": 907452,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hacienda 14",
    "Latitude": 31.3958949,
    "Longitude": -101.9524354,
    "TotalBaseWaterVolume": 1211394,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL T 27 1",
    "Latitude": 31.54123,
    "Longitude": -102.15483,
    "TotalBaseWaterVolume": 1474074,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL T 27 1",
    "Latitude": 31.54123,
    "Longitude": -102.15483,
    "TotalBaseWaterVolume": 1474074,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B415H",
    "Latitude": 28.037625,
    "Longitude": -99.72563,
    "TotalBaseWaterVolume": 4457628,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B411H",
    "Latitude": 28.043507,
    "Longitude": -99.712749,
    "TotalBaseWaterVolume": 7873362,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Kestrel Unit #2H",
    "Latitude": 28.878331,
    "Longitude": -98.233633,
    "TotalBaseWaterVolume": 4645872,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Alvarado 01 01H",
    "Latitude": 28.664788,
    "Longitude": -98.008436,
    "TotalBaseWaterVolume": 4314996,
    "StateName": "Texas",
    "CountyName": "Bee"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 44H",
    "Latitude": 28.2979361,
    "Longitude": -99.8243,
    "TotalBaseWaterVolume": 6265963,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 43H",
    "Latitude": 28.29793333,
    "Longitude": -99.82434722,
    "TotalBaseWaterVolume": 6196816,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cabot Oil & Gas Corp",
    "WellName": "JC Williams Heirs 101",
    "Latitude": 28.68623472,
    "Longitude": -98.81596111,
    "TotalBaseWaterVolume": 2764163,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Barnhart A 18H",
    "Latitude": 29.254564,
    "Longitude": -97.482463,
    "TotalBaseWaterVolume": 3008838,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Barnhart A 19H",
    "Latitude": 29.254022,
    "Longitude": -97.484819,
    "TotalBaseWaterVolume": 3196616,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Alexander 48-8HA",
    "Latitude": 35.749638,
    "Longitude": -100.146057,
    "TotalBaseWaterVolume": 5937886,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Clemons Unit #3H",
    "Latitude": 29.088764,
    "Longitude": -97.797139,
    "TotalBaseWaterVolume": 4706688,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Mak Ranch #2H",
    "Latitude": 28.5209,
    "Longitude": -98.993267,
    "TotalBaseWaterVolume": 5352186,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Martin Ranch B 9RH",
    "Latitude": 28.523741,
    "Longitude": -98.923196,
    "TotalBaseWaterVolume": 7848204,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Abraxas Petroleum Corporation",
    "WellName": "Cobra 1H",
    "Latitude": 28.64092,
    "Longitude": -98.5028089,
    "TotalBaseWaterVolume": 3404436,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Abraxas Petroleum Corporation",
    "WellName": "Cobra B 1H",
    "Latitude": 28.64092,
    "Longitude": -98.5028089,
    "TotalBaseWaterVolume": 3404436,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "TCM 48L",
    "Latitude": 32.35828,
    "Longitude": -101.69064,
    "TotalBaseWaterVolume": 916314,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Barnett 63 #1",
    "Latitude": 32.2512,
    "Longitude": -101.452,
    "TotalBaseWaterVolume": 802069,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Skillern, K GU 3H",
    "Latitude": 31.5305778,
    "Longitude": -94.0726528,
    "TotalBaseWaterVolume": 3562774,
    "StateName": "Texas",
    "CountyName": "San Augustine"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Jack Garner 5",
    "Latitude": 31.5310679,
    "Longitude": -101.9412554,
    "TotalBaseWaterVolume": 1447599,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tracker Resource Dev III, LLC",
    "WellName": "Sloan 178 #1H",
    "Latitude": 32.941003,
    "Longitude": -99.140706,
    "TotalBaseWaterVolume": 267327,
    "StateName": "Texas",
    "CountyName": "Shackelford"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Ranch 5N #8",
    "Latitude": 32.2704702,
    "Longitude": -102.7341659,
    "TotalBaseWaterVolume": 79634,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240-1214",
    "Latitude": 32.277819,
    "Longitude": -102.247436,
    "TotalBaseWaterVolume": 129696,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "University Roxanne 18",
    "Latitude": 32.379597,
    "Longitude": -102.407864,
    "TotalBaseWaterVolume": 998263,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Capstone Natural Resources, LLC",
    "WellName": "Fisher M M Estate B 3",
    "Latitude": 32.39885,
    "Longitude": -102.63406,
    "TotalBaseWaterVolume": 4200,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Capstone Natural Resources, LLC",
    "WellName": "Fisher M M Estate 4",
    "Latitude": 32.39792,
    "Longitude": -102.63646,
    "TotalBaseWaterVolume": 84000,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix C LZS #12",
    "Latitude": 32.2774688,
    "Longitude": -102.7327263,
    "TotalBaseWaterVolume": 83767,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Eland Unit #1H",
    "Latitude": 28.841075,
    "Longitude": -98.427444,
    "TotalBaseWaterVolume": 3207223,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Emma Tartt 26H",
    "Latitude": 28.7853,
    "Longitude": -98.1739,
    "TotalBaseWaterVolume": 3156552,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45E 1102H",
    "Latitude": 30.9682,
    "Longitude": -101.2186,
    "TotalBaseWaterVolume": 10007970,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Finley Resources, Inc.",
    "WellName": "Pintail 39-1",
    "Latitude": 31.911711,
    "Longitude": -104.052175,
    "TotalBaseWaterVolume": 109746,
    "StateName": "Texas",
    "CountyName": "Culberson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Tina Bohn 2H",
    "Latitude": 33.37,
    "Longitude": -97.37,
    "TotalBaseWaterVolume": 29057,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "CA Goldsmith #2240",
    "Latitude": 31.9173805,
    "Longitude": -102.5938417,
    "TotalBaseWaterVolume": 90804,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Blakeney 14",
    "Latitude": 32.026614,
    "Longitude": -102.677342,
    "TotalBaseWaterVolume": 123993,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Vee Bar 2-1",
    "Latitude": 31.95357,
    "Longitude": -102.69323,
    "TotalBaseWaterVolume": 296362,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Hammerhead 33 #3",
    "Latitude": 31.924,
    "Longitude": -101.441,
    "TotalBaseWaterVolume": 113617,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Herzog 23 #2",
    "Latitude": 31.99346,
    "Longitude": -101.6768,
    "TotalBaseWaterVolume": 1075410,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "South Boxcar 3 #6",
    "Latitude": 31.8818827,
    "Longitude": -101.4223719,
    "TotalBaseWaterVolume": 2160858,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Chalk, G.O. -C- 37",
    "Latitude": 32.102589,
    "Longitude": -101.2835,
    "TotalBaseWaterVolume": 297360,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Tipton Jonas 2H",
    "Latitude": 28.854379,
    "Longitude": -97.972579,
    "TotalBaseWaterVolume": 3251724,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Golden A 2H",
    "Latitude": 29.06273326,
    "Longitude": -97.70934889,
    "TotalBaseWaterVolume": 3975980,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Golden A 4H",
    "Latitude": 29.0626808,
    "Longitude": -97.70932763,
    "TotalBaseWaterVolume": 3975980,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "Opiela A 1H",
    "Latitude": 29.05,
    "Longitude": -97.99,
    "TotalBaseWaterVolume": 4818160,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Peterson Lillie M `903` 1H",
    "Latitude": 36.34651,
    "Longitude": -100.41616,
    "TotalBaseWaterVolume": 654738,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "Robinson 5 32",
    "Latitude": 31.991781,
    "Longitude": -103.882964,
    "TotalBaseWaterVolume": 146765,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Wodbine Acquisition LLC",
    "WellName": "Gatlin 1H",
    "Latitude": 30.8645039,
    "Longitude": -96.0825653,
    "TotalBaseWaterVolume": 2854824,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Activa Resources, LLC",
    "WellName": "Hickey #12",
    "Latitude": 29.19728,
    "Longitude": -99.03425,
    "TotalBaseWaterVolume": 42624,
    "StateName": "Texas",
    "CountyName": "Medina"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "NOA TXL Fee 3715M",
    "Latitude": 31.95942917,
    "Longitude": -102.2643139,
    "TotalBaseWaterVolume": 933857,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Scharbauer C 3510M",
    "Latitude": 31.89061,
    "Longitude": -102.14902,
    "TotalBaseWaterVolume": 1015388,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "HS Collings 8",
    "Latitude": 31.84801404,
    "Longitude": -102.1704452,
    "TotalBaseWaterVolume": 1441852,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Westbrook Southeast Unit/Well No. 1099W",
    "Latitude": 32.35429,
    "Longitude": -101.05829,
    "TotalBaseWaterVolume": 17850,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Westbrook Southeast Unit/Well No. 1324W",
    "Latitude": 32.35756,
    "Longitude": -101.05381,
    "TotalBaseWaterVolume": 13398,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Morgan #9",
    "Latitude": 32.1802528,
    "Longitude": -94.2780672,
    "TotalBaseWaterVolume": 24402,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Densmore (SA) 3H",
    "Latitude": 32.7035263,
    "Longitude": -97.799651,
    "TotalBaseWaterVolume": 6146526,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PPC Operating Company LLC",
    "WellName": "Cowden 58 #3",
    "Latitude": 31.3902,
    "Longitude": -102.4794,
    "TotalBaseWaterVolume": 222638,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Delta Oil & Gas Ltd.",
    "WellName": "J5 Ranch B #2",
    "Latitude": 32.8213864,
    "Longitude": -98.6173475,
    "TotalBaseWaterVolume": 12390,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Delta Oil & Gas Ltd.",
    "WellName": "J5 Ranch D #2",
    "Latitude": 32.8529493,
    "Longitude": -98.6802911,
    "TotalBaseWaterVolume": 74550,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU3 2014",
    "Latitude": 31.6276205,
    "Longitude": -102.1677565,
    "TotalBaseWaterVolume": 950588,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Karen 5101",
    "Latitude": 31.43399,
    "Longitude": -102.03001,
    "TotalBaseWaterVolume": 1112601,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1351",
    "Latitude": 31.6386761,
    "Longitude": -103.0159318,
    "TotalBaseWaterVolume": 9828,
    "StateName": "Texas",
    "CountyName": "WARD"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1356",
    "Latitude": 31.6488809,
    "Longitude": -103.019675,
    "TotalBaseWaterVolume": 7308,
    "StateName": "Texas",
    "CountyName": "WARD"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Johnson & Ernst Operating Co.",
    "WellName": "Waggoner DN 17",
    "Latitude": 33.996649,
    "Longitude": -99.170022,
    "TotalBaseWaterVolume": 8820,
    "StateName": "Texas",
    "CountyName": "Wilbarger"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "RCT A 1H",
    "Latitude": 29.07,
    "Longitude": -97.99,
    "TotalBaseWaterVolume": 4175388,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 0439",
    "Latitude": 31.6922717,
    "Longitude": -103.0494494,
    "TotalBaseWaterVolume": 10290,
    "StateName": "Texas",
    "CountyName": "WARD"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "B.S. Carter Jr 6H",
    "Latitude": 33.12,
    "Longitude": -97.43,
    "TotalBaseWaterVolume": 2679069,
    "StateName": "Texas",
    "CountyName": "Wise County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "B.S. Carter Jr 7H",
    "Latitude": 33.12,
    "Longitude": -97.43,
    "TotalBaseWaterVolume": 3087310,
    "StateName": "Texas",
    "CountyName": "Wise County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "B.S. Carter Jr 8H",
    "Latitude": 33.12,
    "Longitude": -97.43,
    "TotalBaseWaterVolume": 2839164,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Gindorf 5",
    "Latitude": 32.24421,
    "Longitude": -102.73333,
    "TotalBaseWaterVolume": 92652,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Mobil Jones 18",
    "Latitude": 32.2512749,
    "Longitude": -102.6654824,
    "TotalBaseWaterVolume": 88548,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Lindley #19",
    "Latitude": 32.2806199,
    "Longitude": -102.6979724,
    "TotalBaseWaterVolume": 147726,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Andy 4",
    "Latitude": 31.77056,
    "Longitude": -102.33719,
    "TotalBaseWaterVolume": 1736326,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "GAU 21-11",
    "Latitude": 31.89455,
    "Longitude": -102.65418,
    "TotalBaseWaterVolume": 156892,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 543",
    "Latitude": 32.020858,
    "Longitude": -102.691842,
    "TotalBaseWaterVolume": 122225,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EF Energy, LLC",
    "WellName": "Kothmann Kerr 2H",
    "Latitude": 28.734103,
    "Longitude": -98.861719,
    "TotalBaseWaterVolume": 3350612,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #512",
    "Latitude": 32.8817148,
    "Longitude": -102.9342919,
    "TotalBaseWaterVolume": 282828,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Curry-Glass 10 (Allocation) #151HU",
    "Latitude": 31.742377,
    "Longitude": -101.366549,
    "TotalBaseWaterVolume": 9344501,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Barbee 4E",
    "Latitude": 31.66768,
    "Longitude": -101.32071,
    "TotalBaseWaterVolume": 1205652,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Webb A Estate 7190H",
    "Latitude": 35.91306,
    "Longitude": -100.51435,
    "TotalBaseWaterVolume": 1225980,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "BR 22 #1",
    "Latitude": 32.35877,
    "Longitude": -101.65147,
    "TotalBaseWaterVolume": 23630,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Gaskins 15 #3",
    "Latitude": 32.4061975,
    "Longitude": -101.6881545,
    "TotalBaseWaterVolume": 1729506,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Concho 1936P",
    "Latitude": 31.43033,
    "Longitude": -101.22158,
    "TotalBaseWaterVolume": 891828,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pfluger M 305",
    "Latitude": 31.517,
    "Longitude": -101.26147,
    "TotalBaseWaterVolume": 913878,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Munson #1005H",
    "Latitude": 31.1766572,
    "Longitude": -101.0699237,
    "TotalBaseWaterVolume": 13805526,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "WK Unit 9 1H",
    "Latitude": 28.317772,
    "Longitude": -98.987981,
    "TotalBaseWaterVolume": 2671146,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Arnold C Unit 30H",
    "Latitude": 28.549126,
    "Longitude": -99.275611,
    "TotalBaseWaterVolume": 5586004,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Bailey 939-4HM",
    "Latitude": 36.362494,
    "Longitude": -100.544226,
    "TotalBaseWaterVolume": 1749220,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 239-217",
    "Latitude": 32.232993,
    "Longitude": -102.167096,
    "TotalBaseWaterVolume": 536760,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Gorman 12 #4",
    "Latitude": 32.378,
    "Longitude": -101.8587,
    "TotalBaseWaterVolume": 1099812,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BE #609",
    "Latitude": 32.054878,
    "Longitude": -102.2766,
    "TotalBaseWaterVolume": 1749985.406,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST 45 - 1",
    "Latitude": 31.970175,
    "Longitude": -102.199856,
    "TotalBaseWaterVolume": 1795332,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Dore Energy Co., Ltd.",
    "WellName": "Dore Fee #3",
    "Latitude": 35.897792,
    "Longitude": -101.934419,
    "TotalBaseWaterVolume": 186816,
    "StateName": "Texas",
    "CountyName": "Moore"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "T.B. Slick 251",
    "Latitude": 26.490601,
    "Longitude": -98.512508,
    "TotalBaseWaterVolume": 453747,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Laney A #1",
    "Latitude": 31.35909,
    "Longitude": -102.05469,
    "TotalBaseWaterVolume": 712044,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Mills 11 2",
    "Latitude": 31.60295,
    "Longitude": -102.05555,
    "TotalBaseWaterVolume": 1661058,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles 68 25-68H",
    "Latitude": 35.431644,
    "Longitude": -100.056526,
    "TotalBaseWaterVolume": 1401263,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FireWheel Operating, LLC",
    "WellName": "Linton Webb #711H",
    "Latitude": 32.3468979,
    "Longitude": -100.6894605,
    "TotalBaseWaterVolume": 9683126,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Klink 14",
    "Latitude": 31.7561111,
    "Longitude": -102.3772222,
    "TotalBaseWaterVolume": 506951,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix 147",
    "Latitude": 32.2905283,
    "Longitude": -102.7161263,
    "TotalBaseWaterVolume": 140070,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "R. MTZ #1H",
    "Latitude": 28.8288,
    "Longitude": -98.26307,
    "TotalBaseWaterVolume": 12519511,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark 'A' No. 3541",
    "Latitude": 33.484152,
    "Longitude": -101.494258,
    "TotalBaseWaterVolume": 37840,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Copeland 27 #9",
    "Latitude": 31.925,
    "Longitude": -101.53,
    "TotalBaseWaterVolume": 154849,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Hauglum C #1H",
    "Latitude": 28.604707,
    "Longitude": -98.260454,
    "TotalBaseWaterVolume": 2780732,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Hauglum D #1H",
    "Latitude": 28.604656,
    "Longitude": -98.260437,
    "TotalBaseWaterVolume": 3022381,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Thelma Brite #26H",
    "Latitude": 28.555292,
    "Longitude": -98.591294,
    "TotalBaseWaterVolume": 5287800,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Treadstone Energy Partners, LLC",
    "WellName": "Forrest 4",
    "Latitude": 31.67316667,
    "Longitude": -96.2995,
    "TotalBaseWaterVolume": 2066700,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Silver Oak Energy, LLC",
    "WellName": "Conner #1",
    "Latitude": 30.92448,
    "Longitude": -95.904003,
    "TotalBaseWaterVolume": 2511600,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6537",
    "Latitude": 32.39743,
    "Longitude": -101.06387,
    "TotalBaseWaterVolume": 16590,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Eagle Oil & Gas co.",
    "WellName": "Lexington 39 1",
    "Latitude": 31.31313,
    "Longitude": -103.47368,
    "TotalBaseWaterVolume": 2508769,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PETEX",
    "WellName": "Gardner \"8\" #1",
    "Latitude": 32.6377389,
    "Longitude": -98.8489612,
    "TotalBaseWaterVolume": 99372,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PETEX",
    "WellName": "Johnnie Dye \"28\" #2",
    "Latitude": 32.574905,
    "Longitude": -98.861994,
    "TotalBaseWaterVolume": 93156,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Stroman Ranch 7H",
    "Latitude": 31.93135,
    "Longitude": -101.08239,
    "TotalBaseWaterVolume": 9690851,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B417H",
    "Latitude": 28.037678,
    "Longitude": -99.725648,
    "TotalBaseWaterVolume": 6567204,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Ethel Pruitt 1H",
    "Latitude": 33.391178,
    "Longitude": -97.745506,
    "TotalBaseWaterVolume": 5053959,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2254",
    "Latitude": 32.997016,
    "Longitude": -102.889338,
    "TotalBaseWaterVolume": 34484,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2256",
    "Latitude": 32.992927,
    "Longitude": -102.89277,
    "TotalBaseWaterVolume": 34250,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Cornell Unit #3073",
    "Latitude": 33.0047375,
    "Longitude": -102.8675742,
    "TotalBaseWaterVolume": 126042,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 540",
    "Latitude": 32.027503,
    "Longitude": -102.656192,
    "TotalBaseWaterVolume": 131478,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Hollingsworth 14",
    "Latitude": 32.540081,
    "Longitude": -102.692156,
    "TotalBaseWaterVolume": 17197,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Denali Oil & Gas Management",
    "WellName": "Moesker  1H",
    "Latitude": 29.641758,
    "Longitude": -97.244908,
    "TotalBaseWaterVolume": 3190000,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Zavisch North Unit 1 1H",
    "Latitude": 28.405804,
    "Longitude": -98.456037,
    "TotalBaseWaterVolume": 3721681,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Warhawk 2012",
    "Latitude": 30.259041,
    "Longitude": -104.937136,
    "TotalBaseWaterVolume": 815727,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Mid-States Operating Company",
    "WellName": "Benners 37 #4",
    "Latitude": 31.959872,
    "Longitude": -101.959667,
    "TotalBaseWaterVolume": 1123093,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Quantum Resources Management, LLC",
    "WellName": "JW Free #3",
    "Latitude": 32.5890559,
    "Longitude": -94.843348,
    "TotalBaseWaterVolume": 45360,
    "StateName": "Texas",
    "CountyName": "Upshur"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B410H",
    "Latitude": 28.04354,
    "Longitude": -99.71271,
    "TotalBaseWaterVolume": 7247730,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "YWCU 4535",
    "Latitude": 32.971554,
    "Longitude": -102.850855,
    "TotalBaseWaterVolume": 6819,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 532",
    "Latitude": 32.020522,
    "Longitude": -102.671708,
    "TotalBaseWaterVolume": 251538,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "Freytag Unit #1H",
    "Latitude": 29.55401,
    "Longitude": -97.144935,
    "TotalBaseWaterVolume": 4842768,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Treadstone Energy Partners, LLC",
    "WellName": "AF1U Unit 71",
    "Latitude": 31.52433333,
    "Longitude": -96.53016667,
    "TotalBaseWaterVolume": 182557,
    "StateName": "Texas",
    "CountyName": "Leon"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "YWCU 4536",
    "Latitude": 32.9708,
    "Longitude": -102.845367,
    "TotalBaseWaterVolume": 61160,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Emma Tartt 21H",
    "Latitude": 28.7853,
    "Longitude": -98.1739,
    "TotalBaseWaterVolume": 3117744,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Lord D Unit #4H",
    "Latitude": 29.252297,
    "Longitude": -97.421167,
    "TotalBaseWaterVolume": 3604104,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Martin Unit #3H",
    "Latitude": 29.434278,
    "Longitude": -97.242917,
    "TotalBaseWaterVolume": 4513488,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Henkhaus Unit #15H",
    "Latitude": 29.294858,
    "Longitude": -97.390514,
    "TotalBaseWaterVolume": 3157224,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Johnson Cypher GU  #5",
    "Latitude": 26.464398,
    "Longitude": -98.356257,
    "TotalBaseWaterVolume": 646975,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Arnold D 32H",
    "Latitude": 28.549055,
    "Longitude": -99.275561,
    "TotalBaseWaterVolume": 5264394,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Arnold C  31H",
    "Latitude": 28.549091,
    "Longitude": -99.275586,
    "TotalBaseWaterVolume": 5295289,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Treadstone Energy Partners, LLC",
    "WellName": "AF1U Unit 61",
    "Latitude": 31.67633333,
    "Longitude": -95.97233333,
    "TotalBaseWaterVolume": 189624,
    "StateName": "Texas",
    "CountyName": "Leon"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ryan 01 01H ?",
    "Latitude": 28.405688,
    "Longitude": -98.256396,
    "TotalBaseWaterVolume": 3419766,
    "StateName": "Texas",
    "CountyName": "Live Oaks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "C.O. Black 12H",
    "Latitude": 32.32862,
    "Longitude": -94.305,
    "TotalBaseWaterVolume": 18940894,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B419H",
    "Latitude": 28.037662,
    "Longitude": -99.725707,
    "TotalBaseWaterVolume": 6335868,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles 1-14-1H",
    "Latitude": 35.429939,
    "Longitude": -100.084984,
    "TotalBaseWaterVolume": 7575107,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240-2719",
    "Latitude": 32.278422,
    "Longitude": -102.234268,
    "TotalBaseWaterVolume": 1606920,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W&T Offshore, Inc.",
    "WellName": "UL 7-5#2",
    "Latitude": 32.4279765,
    "Longitude": -102.2469899,
    "TotalBaseWaterVolume": 1100484,
    "StateName": "Texas",
    "CountyName": "ANDREWS"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "King B #16",
    "Latitude": 32.2770982,
    "Longitude": -102.6673721,
    "TotalBaseWaterVolume": 152967,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Mobil Jones #13",
    "Latitude": 32.2532483,
    "Longitude": -102.6646682,
    "TotalBaseWaterVolume": 85772,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix #141",
    "Latitude": 32.2815922,
    "Longitude": -102.720013,
    "TotalBaseWaterVolume": 99162,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "University 45-06-07H",
    "Latitude": 30.978379,
    "Longitude": -101.285361,
    "TotalBaseWaterVolume": 7207590,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "GSAU #2154",
    "Latitude": 31.9492018,
    "Longitude": -102.5961537,
    "TotalBaseWaterVolume": 128688,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "CA Goldsmith #2240",
    "Latitude": 31.9173805,
    "Longitude": -102.5938417,
    "TotalBaseWaterVolume": 63924,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Blakeney 13",
    "Latitude": 32.029942,
    "Longitude": -102.678872,
    "TotalBaseWaterVolume": 192437,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Alderman No. 1",
    "Latitude": 31.6868,
    "Longitude": -96.34233,
    "TotalBaseWaterVolume": 25686,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "McWatters 40",
    "Latitude": 31.51889,
    "Longitude": -96.23829,
    "TotalBaseWaterVolume": 338229,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #189",
    "Latitude": 32.8511309,
    "Longitude": -102.9255029,
    "TotalBaseWaterVolume": 84756,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Guadalupe -48-/Well No. 3 (PA)",
    "Latitude": 31.65413,
    "Longitude": -101.42111,
    "TotalBaseWaterVolume": 107646,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Lp Howerton 1",
    "Latitude": 33.60595,
    "Longitude": -102.57928,
    "TotalBaseWaterVolume": 161574,
    "StateName": "Texas",
    "CountyName": "Hockley"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Roost 6 #1",
    "Latitude": 32.33453,
    "Longitude": -101.60225,
    "TotalBaseWaterVolume": 969528,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Karnes Unit A 1",
    "Latitude": 28.948517,
    "Longitude": -97.7718438,
    "TotalBaseWaterVolume": 2982103,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Lowry Unit 1-1H",
    "Latitude": 28.181864,
    "Longitude": -99.179547,
    "TotalBaseWaterVolume": 3445176,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Treadstone Energy Partners, LLC",
    "WellName": "AF1U Unit 131",
    "Latitude": 31.19921944,
    "Longitude": -95.79931944,
    "TotalBaseWaterVolume": 169610,
    "StateName": "Texas",
    "CountyName": "Leon"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sharon Fordyce 01 02H",
    "Latitude": 28.6788714,
    "Longitude": -98.2233618,
    "TotalBaseWaterVolume": 2722902,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Bold Johnson 56-T1-26 #1H",
    "Latitude": 31.9278395,
    "Longitude": -103.8251793,
    "TotalBaseWaterVolume": 4561865,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly #3234",
    "Latitude": 32.09729,
    "Longitude": -102.16341,
    "TotalBaseWaterVolume": 1584643,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Warhawk 1403",
    "Latitude": 32.243936,
    "Longitude": -102.194006,
    "TotalBaseWaterVolume": 289631,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Slaughter -2-/Well No. 1",
    "Latitude": 32.50502,
    "Longitude": -101.92143,
    "TotalBaseWaterVolume": 1496502,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hibernia Resources, LLC",
    "WellName": "Dorothy Faye K 8-8B",
    "Latitude": 32,
    "Longitude": -102,
    "TotalBaseWaterVolume": 996576,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Scharbauer, C. 2610M",
    "Latitude": 31.9051,
    "Longitude": -102.1527,
    "TotalBaseWaterVolume": 876003,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Westbrook Southeast Unit/Well No. 1877W",
    "Latitude": 32.39926,
    "Longitude": -101.03886,
    "TotalBaseWaterVolume": 16590,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Westbrook Southeast Unit/Well No. 1922W",
    "Latitude": 32.38908,
    "Longitude": -101.03604,
    "TotalBaseWaterVolume": 14154,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker C Enron # 10",
    "Latitude": 31.3248,
    "Longitude": -101.29098,
    "TotalBaseWaterVolume": 860538,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "L Schaefer Oil Unit 15O",
    "Latitude": 31.64900833,
    "Longitude": -101.4105389,
    "TotalBaseWaterVolume": 119401,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Carter 26#1",
    "Latitude": 31.2346652,
    "Longitude": -103.3958697,
    "TotalBaseWaterVolume": 1087632,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Medota Ranch 41-1H",
    "Latitude": 35.79747778,
    "Longitude": -100.4481778,
    "TotalBaseWaterVolume": 4390361,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Opal Resources Operating Company",
    "WellName": "Mary K Shirk 7",
    "Latitude": 31.170203,
    "Longitude": -102.03647,
    "TotalBaseWaterVolume": 1541064,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Laura 3919",
    "Latitude": 31.38338305,
    "Longitude": -101.9864213,
    "TotalBaseWaterVolume": 1299606,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1500",
    "Latitude": 31.6074304,
    "Longitude": -103.0246447,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "University 43-18/Well No. 1",
    "Latitude": 31.53522,
    "Longitude": -103.21715,
    "TotalBaseWaterVolume": 1108128,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1932",
    "Latitude": 31.6075345,
    "Longitude": -103.0105341,
    "TotalBaseWaterVolume": 14910,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Mabee M2",
    "Latitude": 32.2934311,
    "Longitude": -102.2143277,
    "TotalBaseWaterVolume": 1454418,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "University Roxanne 13",
    "Latitude": 32.386531,
    "Longitude": -102.403417,
    "TotalBaseWaterVolume": 955528,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Billie 1811",
    "Latitude": 32.33896,
    "Longitude": -102.4699,
    "TotalBaseWaterVolume": 2003807,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Miles #28",
    "Latitude": 32.3018778,
    "Longitude": -102.7352043,
    "TotalBaseWaterVolume": 87443,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Webb C Unit #2H FTW",
    "Latitude": 33.498206,
    "Longitude": -97.482528,
    "TotalBaseWaterVolume": 5212368,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Webb D Unit #1H FTW",
    "Latitude": 33.498239,
    "Longitude": -97.4826,
    "TotalBaseWaterVolume": 5102328,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Webb C Unit #1H FTW",
    "Latitude": 33.497436,
    "Longitude": -97.480078,
    "TotalBaseWaterVolume": 4813830,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 272H",
    "Latitude": 31.55278,
    "Longitude": -102.69651,
    "TotalBaseWaterVolume": 2812236,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "McWatters #32",
    "Latitude": 31.523,
    "Longitude": -96.24288,
    "TotalBaseWaterVolume": 894096,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Lavaca -38-/Well No. 5",
    "Latitude": 31.6737,
    "Longitude": -101.44551,
    "TotalBaseWaterVolume": 2340660,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI Billingsley 32 #1",
    "Latitude": 31.789746,
    "Longitude": -101.526115,
    "TotalBaseWaterVolume": 2549022,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Spencer North 7 4",
    "Latitude": 31.84555,
    "Longitude": -101.56091,
    "TotalBaseWaterVolume": 1056090,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Bell 22 #7",
    "Latitude": 31.818,
    "Longitude": -101.504,
    "TotalBaseWaterVolume": 116546,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COBRA OIL & GAS CORPORATION",
    "WellName": "Nichols '17' #3",
    "Latitude": 32.382852,
    "Longitude": -101.6856574,
    "TotalBaseWaterVolume": 1629780,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Sienkiewicz 2H",
    "Latitude": 28.828996,
    "Longitude": -97.899404,
    "TotalBaseWaterVolume": 4843427,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "4J Minerals #1H",
    "Latitude": 28.933314,
    "Longitude": -97.839325,
    "TotalBaseWaterVolume": 8680686,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Perlitz 1-4",
    "Latitude": 31.42968,
    "Longitude": -96.28395,
    "TotalBaseWaterVolume": 331745,
    "StateName": "Texas",
    "CountyName": "Limestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Frank Malek 01 01H",
    "Latitude": 28.613222,
    "Longitude": -98.131237,
    "TotalBaseWaterVolume": 3380160,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch Q #23",
    "Latitude": 32.22088109,
    "Longitude": -101.9670691,
    "TotalBaseWaterVolume": 1251685,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Donald L Hutt Fee #136",
    "Latitude": 31.85061521,
    "Longitude": -101.916723,
    "TotalBaseWaterVolume": 1178139,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Davidson RAB A #14",
    "Latitude": 31.664146,
    "Longitude": -102.098594,
    "TotalBaseWaterVolume": 1453547.978,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST 41 - 9",
    "Latitude": 31.971469,
    "Longitude": -102.219681,
    "TotalBaseWaterVolume": 1606542,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee AZ #1330",
    "Latitude": 32.016586,
    "Longitude": -102.273319,
    "TotalBaseWaterVolume": 1881887.616,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6525 (PA)",
    "Latitude": 32.39561,
    "Longitude": -101.06299,
    "TotalBaseWaterVolume": 27762,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Poirot Unit 1H",
    "Latitude": 33.48617,
    "Longitude": -97.54934,
    "TotalBaseWaterVolume": 3859074,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Poirot Unit 3H",
    "Latitude": 33.48611,
    "Longitude": -97.54927,
    "TotalBaseWaterVolume": 4131947,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Winston Unit #2H",
    "Latitude": 33.487767,
    "Longitude": -97.4867,
    "TotalBaseWaterVolume": 5179608,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cholla Petroleum, Inc.",
    "WellName": "Beall B #6",
    "Latitude": 32.4990666,
    "Longitude": -100.4764472,
    "TotalBaseWaterVolume": 70661,
    "StateName": "Texas",
    "CountyName": "Nolan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Densmore (SA) 2H",
    "Latitude": 32.7034762,
    "Longitude": -97.799623,
    "TotalBaseWaterVolume": 4373382,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Densmore (SA) 4H",
    "Latitude": 32.70351,
    "Longitude": -97.79942,
    "TotalBaseWaterVolume": 3758034,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Rocker B `67` 121B",
    "Latitude": 31.30561,
    "Longitude": -101.39014,
    "TotalBaseWaterVolume": 863856,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Spikes 1H",
    "Latitude": 31.06595,
    "Longitude": -96.52164,
    "TotalBaseWaterVolume": 1305108,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Mahaffey P. T. 001",
    "Latitude": 31.67797,
    "Longitude": -101.20331,
    "TotalBaseWaterVolume": 270106,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Edwards Riverhills A Unit 5H",
    "Latitude": 32.68856,
    "Longitude": -97.40305,
    "TotalBaseWaterVolume": 2968072.8,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Edwards Riverhills B Unit 10H",
    "Latitude": 32.68859,
    "Longitude": -97.40298,
    "TotalBaseWaterVolume": 2715678,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Carr #1-2H",
    "Latitude": 35.547028,
    "Longitude": -100.295222,
    "TotalBaseWaterVolume": 1882305.6,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1020",
    "Latitude": 31.6616952,
    "Longitude": -103.0154965,
    "TotalBaseWaterVolume": 8022,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1044",
    "Latitude": 31.6566613,
    "Longitude": -103.0053493,
    "TotalBaseWaterVolume": 7350,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2551",
    "Latitude": 33.000907,
    "Longitude": -102.89026,
    "TotalBaseWaterVolume": 36372,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2257",
    "Latitude": 32.992859,
    "Longitude": -102.890364,
    "TotalBaseWaterVolume": 35356,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Canan Operating, Inc.",
    "WellName": "Harvill B 1H",
    "Latitude": 33.688312,
    "Longitude": -97.629483,
    "TotalBaseWaterVolume": 3694068,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "Munger Nix 154",
    "Latitude": 32.28069,
    "Longitude": -102.71316,
    "TotalBaseWaterVolume": 99876,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Emma Tartt 20H",
    "Latitude": 28.7853,
    "Longitude": -98.1739,
    "TotalBaseWaterVolume": 2967678,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Williams #1H",
    "Latitude": 28.6539102,
    "Longitude": -98.5477128,
    "TotalBaseWaterVolume": 6949148,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Pennington #1H",
    "Latitude": 28.6539099,
    "Longitude": -98.5477907,
    "TotalBaseWaterVolume": 10868050,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Magnum Hunter Resources Corp",
    "WellName": "Peeler Ranch #3H",
    "Latitude": 28.72,
    "Longitude": -98.47,
    "TotalBaseWaterVolume": 3643293,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Webb D Unit #2H FTW",
    "Latitude": 33.49827222,
    "Longitude": -97.48266944,
    "TotalBaseWaterVolume": 4569810,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Henkhaus Unit #14H",
    "Latitude": 29.282356,
    "Longitude": -97.368647,
    "TotalBaseWaterVolume": 3128034,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 34H",
    "Latitude": 28.2926083,
    "Longitude": -99.7081222,
    "TotalBaseWaterVolume": 7106671,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 39R",
    "Latitude": 32.0286,
    "Longitude": -102.6431,
    "TotalBaseWaterVolume": 187056,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "GS Andector Unit H-031",
    "Latitude": 32.0801,
    "Longitude": -102.727,
    "TotalBaseWaterVolume": 123547,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Whittenburg #2207",
    "Latitude": 32.00322,
    "Longitude": -102.29974,
    "TotalBaseWaterVolume": 1146620,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Floyd 16",
    "Latitude": 31.78749,
    "Longitude": -102.34958,
    "TotalBaseWaterVolume": 1698707,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Haag #1213",
    "Latitude": 32.03466,
    "Longitude": -102.28807,
    "TotalBaseWaterVolume": 1102880,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "LF Roberts 4H",
    "Latitude": 31.63617,
    "Longitude": -96.28521,
    "TotalBaseWaterVolume": 3111822,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #506",
    "Latitude": 32.905257,
    "Longitude": -102.8855798,
    "TotalBaseWaterVolume": 262122,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Witt 24 #4",
    "Latitude": 31.99319961,
    "Longitude": -101.6556923,
    "TotalBaseWaterVolume": 313063,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Prather 29-1",
    "Latitude": 32.298014,
    "Longitude": -101.481783,
    "TotalBaseWaterVolume": 1011276,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Gravy 18 Unit #1",
    "Latitude": 32.2333,
    "Longitude": -101.3946,
    "TotalBaseWaterVolume": 965994,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newark E&P Operating, LLC",
    "WellName": "Malone #1",
    "Latitude": 33.22429,
    "Longitude": -98.18664,
    "TotalBaseWaterVolume": 2356,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Sienkiewicz 3H",
    "Latitude": 28.828995,
    "Longitude": -97.899326,
    "TotalBaseWaterVolume": 3981936,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Gaston Bernice ES \"D\" 411-2H",
    "Latitude": 36.10242,
    "Longitude": -100.314922,
    "TotalBaseWaterVolume": 255688,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "WD Johnson 22S-10",
    "Latitude": 31.83656,
    "Longitude": -103.53249,
    "TotalBaseWaterVolume": 59045,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "E.G.L. Resources, Inc.",
    "WellName": "STO SEC 11 #1109",
    "Latitude": 31.979339,
    "Longitude": -102.175653,
    "TotalBaseWaterVolume": 1565528,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Barbara #2",
    "Latitude": 32.00081,
    "Longitude": -102.21367,
    "TotalBaseWaterVolume": 1690561,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "June T Sanders #15",
    "Latitude": 31.7395836,
    "Longitude": -102.1977025,
    "TotalBaseWaterVolume": 1006453,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Winston Unit #1H",
    "Latitude": 33.487697,
    "Longitude": -97.486708,
    "TotalBaseWaterVolume": 5800704,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Veritas Energy, LLC",
    "WellName": "McClure Hart 1H",
    "Latitude": 32.94,
    "Longitude": -98.23,
    "TotalBaseWaterVolume": 2209153,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Michael Morris GU 2H",
    "Latitude": 32.8614814,
    "Longitude": -97.623218,
    "TotalBaseWaterVolume": 4568037,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Kardell, S GU 4H",
    "Latitude": 31.5292027,
    "Longitude": -94.0805084,
    "TotalBaseWaterVolume": 2187920,
    "StateName": "Texas",
    "CountyName": "San Augustine"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Bentsen Brothers #18",
    "Latitude": 26.571301,
    "Longitude": -98.521738,
    "TotalBaseWaterVolume": 167946,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate 3029",
    "Latitude": 31.46222648,
    "Longitude": -102.0199204,
    "TotalBaseWaterVolume": 1452352,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Hasel 28 2",
    "Latitude": 31.3486006,
    "Longitude": -101.98156,
    "TotalBaseWaterVolume": 1267182,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "JRS Farms 18A #2",
    "Latitude": 31.616592,
    "Longitude": -101.916803,
    "TotalBaseWaterVolume": 1751610,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Eden 11-4H",
    "Latitude": 35.6142,
    "Longitude": -100.1847,
    "TotalBaseWaterVolume": 10090,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles 68 26-68H",
    "Latitude": 35.431664,
    "Longitude": -100.054062,
    "TotalBaseWaterVolume": 5725838,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "NMR Energy LLC",
    "WellName": "Brown Altman C #9",
    "Latitude": 31.8047822,
    "Longitude": -103.0815001,
    "TotalBaseWaterVolume": 18942,
    "StateName": "Texas",
    "CountyName": "Winkler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "NMR Energy LLC",
    "WellName": "Brown Altman B #19",
    "Latitude": 31.802708,
    "Longitude": -103.076525,
    "TotalBaseWaterVolume": 83958,
    "StateName": "Texas",
    "CountyName": "Winkler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "G.W. Eanes #1",
    "Latitude": 33.370609,
    "Longitude": -97.874802,
    "TotalBaseWaterVolume": 12222,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Shook R B `A` 5",
    "Latitude": 33.19255,
    "Longitude": -102.92461,
    "TotalBaseWaterVolume": 80556,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SandRidge Energy",
    "WellName": "State Shosid 8",
    "Latitude": 32.4934,
    "Longitude": -102.94296,
    "TotalBaseWaterVolume": 87102,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "University Andrews 222",
    "Latitude": 32.134297,
    "Longitude": -102.722692,
    "TotalBaseWaterVolume": 316466,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240C-2527",
    "Latitude": 32.303739,
    "Longitude": -102.2490338,
    "TotalBaseWaterVolume": 1413720,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tecpetrol Operating LLC",
    "WellName": "Rupp Chamberlain GU 1",
    "Latitude": 27.199492,
    "Longitude": -98.049553,
    "TotalBaseWaterVolume": 88000,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark A #3543",
    "Latitude": 33.484154,
    "Longitude": -101.489929,
    "TotalBaseWaterVolume": 37675,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Klotzman Unit A-4",
    "Latitude": 29.137122,
    "Longitude": -97.537223,
    "TotalBaseWaterVolume": 1890678,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Klotzman Unit A-5",
    "Latitude": 29.142303,
    "Longitude": -97.560472,
    "TotalBaseWaterVolume": 1812416,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Klotzman Unit A6",
    "Latitude": 29.142223,
    "Longitude": -97.560497,
    "TotalBaseWaterVolume": 1890576,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Klotzman Unit A-7",
    "Latitude": 29.142183,
    "Longitude": -97.560509,
    "TotalBaseWaterVolume": 1886194,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 42H",
    "Latitude": 28.2979334,
    "Longitude": -99.8243946,
    "TotalBaseWaterVolume": 7013308,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee B 4101E",
    "Latitude": 31.70704222,
    "Longitude": -102.3525133,
    "TotalBaseWaterVolume": 1142679,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "GS Andector Unit A-061",
    "Latitude": 32.0663333,
    "Longitude": -102.744925,
    "TotalBaseWaterVolume": 99001,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 550",
    "Latitude": 32.029411,
    "Longitude": -102.668803,
    "TotalBaseWaterVolume": 120598,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Knight A2-4",
    "Latitude": 31.55963,
    "Longitude": -96.24797,
    "TotalBaseWaterVolume": 299333,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Berry Petroleum",
    "WellName": "Zant C 3506",
    "Latitude": 31.986477,
    "Longitude": -101.742109,
    "TotalBaseWaterVolume": 1376172,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Freewilly 41 1",
    "Latitude": 31.88212,
    "Longitude": -101.55313,
    "TotalBaseWaterVolume": 1002036,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Hubbard 24 #1",
    "Latitude": 31.7026,
    "Longitude": -101.7558,
    "TotalBaseWaterVolume": 1001552,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Barbee 92D",
    "Latitude": 31.66329,
    "Longitude": -101.32214,
    "TotalBaseWaterVolume": 1399902,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Lord D Unit #3H",
    "Latitude": 29.252358,
    "Longitude": -97.421083,
    "TotalBaseWaterVolume": 3643500,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Ward 22C-1",
    "Latitude": 32.287344,
    "Longitude": -101.540761,
    "TotalBaseWaterVolume": 1194018,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Leo Unit 49 #3",
    "Latitude": 32.37197,
    "Longitude": -101.68154,
    "TotalBaseWaterVolume": 940212,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Schuelke -28-/Well No. 2",
    "Latitude": 32.39203,
    "Longitude": -101.59446,
    "TotalBaseWaterVolume": 892290,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Tepee Draw 3035A",
    "Latitude": 31.4011,
    "Longitude": -101.20369,
    "TotalBaseWaterVolume": 894306,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Orellana C 4H",
    "Latitude": 31.1026506,
    "Longitude": -101.0710248,
    "TotalBaseWaterVolume": 6108374,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Goodrich Petroleum Company, LLC",
    "WellName": "Burns Ranch A53H",
    "Latitude": 28.6103947,
    "Longitude": -99.0422237,
    "TotalBaseWaterVolume": 13399039,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Lowry Unit 2-1H",
    "Latitude": 28.164753,
    "Longitude": -99.193997,
    "TotalBaseWaterVolume": 3625537,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Bushmaster 1-58/Well No. 3",
    "Latitude": 31.68327,
    "Longitude": -103.52743,
    "TotalBaseWaterVolume": 1188642,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Silver Oak Energy, LLC",
    "WellName": "Ketchum#1",
    "Latitude": 31.079306,
    "Longitude": -95.809036,
    "TotalBaseWaterVolume": 3310016,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Resolute Natural Resources",
    "WellName": "Obrien 43 8",
    "Latitude": 32.3525,
    "Longitude": -101.69823,
    "TotalBaseWaterVolume": 4721,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "DRRU 4410",
    "Latitude": 31.713694,
    "Longitude": -102.245508,
    "TotalBaseWaterVolume": 774233,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Donald L Hutt Fee #98",
    "Latitude": 31.83673325,
    "Longitude": -101.9115673,
    "TotalBaseWaterVolume": 1286229,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hunter #2",
    "Latitude": 31.9670158,
    "Longitude": -102.0476756,
    "TotalBaseWaterVolume": 1366742,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee AZ #1329",
    "Latitude": 32.018392,
    "Longitude": -102.273889,
    "TotalBaseWaterVolume": 1849033.443,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #22",
    "Latitude": 30.7589975,
    "Longitude": -97.0248264,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #23",
    "Latitude": 30.7582161,
    "Longitude": -97.0245203,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #24",
    "Latitude": 30.7583916,
    "Longitude": -97.0235873,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #20A",
    "Latitude": 30.7599861,
    "Longitude": -97.0237445,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Earp Sa 9H",
    "Latitude": 32.97068,
    "Longitude": -97.61986,
    "TotalBaseWaterVolume": 4017384,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Incline Energy",
    "WellName": "Lessenich #3",
    "Latitude": 31.273856,
    "Longitude": -102.618774,
    "TotalBaseWaterVolume": 174426,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 1-32 #6H",
    "Latitude": 31.1945895,
    "Longitude": -101.7545134,
    "TotalBaseWaterVolume": 8791929,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 09 #2808H",
    "Latitude": 31.2369797,
    "Longitude": -101.6110211,
    "TotalBaseWaterVolume": 9974118,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Kinder Morgan",
    "WellName": "HJ Brice #29",
    "Latitude": 32.8261805,
    "Longitude": -100.920715,
    "TotalBaseWaterVolume": 95446,
    "StateName": "Texas",
    "CountyName": "Scurry"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Crier-McElroy 478",
    "Latitude": 31.40682,
    "Longitude": -102.30321,
    "TotalBaseWaterVolume": 32214,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Powell 36 6",
    "Latitude": 31.53044,
    "Longitude": -102.12182,
    "TotalBaseWaterVolume": 1471252,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B421H",
    "Latitude": 28.03761,
    "Longitude": -99.72569,
    "TotalBaseWaterVolume": 4778214,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Vinson Fee G 28H",
    "Latitude": 33.01266,
    "Longitude": -97.45141,
    "TotalBaseWaterVolume": 6712133.4,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Vinson Fee G 31H",
    "Latitude": 33.01269,
    "Longitude": -97.45141,
    "TotalBaseWaterVolume": 6823979.4,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 3759",
    "Latitude": 33.01625,
    "Longitude": -102.87596,
    "TotalBaseWaterVolume": 136164,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Goodwin 1V",
    "Latitude": 28.71795058,
    "Longitude": -99.90909947,
    "TotalBaseWaterVolume": 195032,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Mark & Sandra  3H",
    "Latitude": 28.71359,
    "Longitude": -99.94571082,
    "TotalBaseWaterVolume": 2977297,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "West Fuhrman Mascho Unit/Well No. 181R (PA)",
    "Latitude": 32.2095,
    "Longitude": -102.67763,
    "TotalBaseWaterVolume": 30366,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texland Petroleum, LP",
    "WellName": "Eclipse 1H",
    "Latitude": 32.3113,
    "Longitude": -102.5353,
    "TotalBaseWaterVolume": 258174,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Crier-McElroy 345",
    "Latitude": 31.389035,
    "Longitude": -102.3151514,
    "TotalBaseWaterVolume": 54760,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 472H",
    "Latitude": 31.55276,
    "Longitude": -102.6966,
    "TotalBaseWaterVolume": 2938908,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Hattie Connel 201H",
    "Latitude": 31.59437,
    "Longitude": -102.59409,
    "TotalBaseWaterVolume": 2131468,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Cochina West Ranch 22H",
    "Latitude": 28.3820251,
    "Longitude": -99.5159224,
    "TotalBaseWaterVolume": 8952510,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Millie `B` 17",
    "Latitude": 31.66171,
    "Longitude": -102.35172,
    "TotalBaseWaterVolume": 1870411,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Muskegon Development Company",
    "WellName": "Hyde 6003",
    "Latitude": 30.0108027,
    "Longitude": -100.0101728,
    "TotalBaseWaterVolume": 26712,
    "StateName": "Texas",
    "CountyName": "Edwards"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Lazy E 1102",
    "Latitude": 32.0835975,
    "Longitude": -101.5656392,
    "TotalBaseWaterVolume": 1969044,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Barnhart A 1H",
    "Latitude": 29.239278,
    "Longitude": -97.469933,
    "TotalBaseWaterVolume": 2642046,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Barnhart A 2H",
    "Latitude": 29.239253,
    "Longitude": -97.470006,
    "TotalBaseWaterVolume": 2635712,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Martin Unit #2H",
    "Latitude": 29.433972,
    "Longitude": -97.242722,
    "TotalBaseWaterVolume": 4186938,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Noll R M 1",
    "Latitude": 32.50107,
    "Longitude": -101.35414,
    "TotalBaseWaterVolume": 219282,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Foreland Operating, LLC",
    "WellName": "Captain Coll 15 2H",
    "Latitude": 31.1769361,
    "Longitude": -101.0788862,
    "TotalBaseWaterVolume": 8640828,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Carrizo Oil & Gas, Inc.",
    "WellName": "Los Angeles 10H",
    "Latitude": 28.459477,
    "Longitude": -99.00441,
    "TotalBaseWaterVolume": 6507666,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Rogers 42 #11",
    "Latitude": 32.28234464,
    "Longitude": -101.9112995,
    "TotalBaseWaterVolume": 1340301,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU 2 2417",
    "Latitude": 31.81352176,
    "Longitude": -102.1277735,
    "TotalBaseWaterVolume": 1495452,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hilcorp Energy Company",
    "WellName": "Mil-Vid 3R",
    "Latitude": 30.17736,
    "Longitude": -94.00474,
    "TotalBaseWaterVolume": 29946,
    "StateName": "Texas",
    "CountyName": "Orange"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Incline Energy",
    "WellName": "Sealy #2",
    "Latitude": 31.266115,
    "Longitude": -102.615644,
    "TotalBaseWaterVolume": 101304,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Filmore 25 #1",
    "Latitude": 31.3160949,
    "Longitude": -103.3624013,
    "TotalBaseWaterVolume": 616182,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Granada 11 #1",
    "Latitude": 31.3214,
    "Longitude": -103.3830135,
    "TotalBaseWaterVolume": 1152018,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Amacker 65 #01",
    "Latitude": 31.37769,
    "Longitude": -102.02522,
    "TotalBaseWaterVolume": 219534,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 15 8",
    "Latitude": 31.55892,
    "Longitude": -102.15705,
    "TotalBaseWaterVolume": 1244624,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Jack Garner #6",
    "Latitude": 31.52150062,
    "Longitude": -101.9338962,
    "TotalBaseWaterVolume": 1286559,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "OSBORN HEIRS COMPANY",
    "WellName": "Gateway 3",
    "Latitude": 31.302125,
    "Longitude": -102.1453931,
    "TotalBaseWaterVolume": 930621,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1379",
    "Latitude": 31.6352244,
    "Longitude": -103.0281205,
    "TotalBaseWaterVolume": 15372,
    "StateName": "Texas",
    "CountyName": "WARD"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W.T. Waggoner Estate",
    "WellName": "Waggoner Bluff Creek A-8",
    "Latitude": 34.021879,
    "Longitude": -98.95414,
    "TotalBaseWaterVolume": 17764,
    "StateName": "Texas",
    "CountyName": "Wilbarger"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Vinson Fee G10",
    "Latitude": 30.011331,
    "Longitude": -97.468356,
    "TotalBaseWaterVolume": 818357.4,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aruba Petroleum, Inc.",
    "WellName": "Kelley Earl Unit 1H",
    "Latitude": 33.1944,
    "Longitude": -97.73133,
    "TotalBaseWaterVolume": 1639890,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Aruba Petroleum, Inc.",
    "WellName": "Kelley Earl Unit 2H",
    "Latitude": 33.19631,
    "Longitude": -97.73167,
    "TotalBaseWaterVolume": 1303512,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "BRU 4368",
    "Latitude": 33.075355,
    "Longitude": -102.737758,
    "TotalBaseWaterVolume": 30814,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "University 40 #1412H",
    "Latitude": 31.0741136,
    "Longitude": -101.1830711,
    "TotalBaseWaterVolume": 11581332,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Arndt A 4H",
    "Latitude": 29.100157,
    "Longitude": -97.255193,
    "TotalBaseWaterVolume": 3938849,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Chaparral Wildlife 9H",
    "Latitude": 28.3487834,
    "Longitude": -99.4758252,
    "TotalBaseWaterVolume": 5571720,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Muskegon Development Company",
    "WellName": "Hyde 6001",
    "Latitude": 30.0059047,
    "Longitude": -100.0186559,
    "TotalBaseWaterVolume": 27132,
    "StateName": "Texas",
    "CountyName": "Edwards"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Antelope Draw A 3I",
    "Latitude": 31.37869,
    "Longitude": -101.18758,
    "TotalBaseWaterVolume": 890694,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Bennie 4342 9H",
    "Latitude": 31.178,
    "Longitude": -101.164,
    "TotalBaseWaterVolume": 12811806,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Wingnut Unit B 1H",
    "Latitude": 29.105364,
    "Longitude": -97.62922,
    "TotalBaseWaterVolume": 3599064,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "May B 1H",
    "Latitude": 28.776144,
    "Longitude": -97.959766,
    "TotalBaseWaterVolume": 3205650,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BE #604",
    "Latitude": 32.056336,
    "Longitude": -102.277061,
    "TotalBaseWaterVolume": 1681369.293,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Donald L Hutt C #72",
    "Latitude": 31.77530463,
    "Longitude": -101.946107,
    "TotalBaseWaterVolume": 1546828,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST NW 25-9",
    "Latitude": 31.991706,
    "Longitude": -102.261947,
    "TotalBaseWaterVolume": 1721748,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hilcorp Energy Company",
    "WellName": "Hagler Bp Fee 1",
    "Latitude": 30.15746,
    "Longitude": -93.96512,
    "TotalBaseWaterVolume": 77448,
    "StateName": "Texas",
    "CountyName": "Orange"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "SRH B 8 1H",
    "Latitude": 31.44881389,
    "Longitude": -101.4143556,
    "TotalBaseWaterVolume": 10221524,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Four Corners TXL Fee 2712U",
    "Latitude": 31.62370556,
    "Longitude": -102.2853583,
    "TotalBaseWaterVolume": 944926.8179,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles 68 27-68H",
    "Latitude": 35.431877,
    "Longitude": -100.046677,
    "TotalBaseWaterVolume": 6577648,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Donelson 15 SL 5H",
    "Latitude": 35.59024,
    "Longitude": -100.20336,
    "TotalBaseWaterVolume": 5791523,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "RICHARDSON PAULINE SA 4H",
    "Latitude": 33.05609,
    "Longitude": -97.47476,
    "TotalBaseWaterVolume": 4347336,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Lord D Unit #5H",
    "Latitude": 29.252422,
    "Longitude": -97.421,
    "TotalBaseWaterVolume": 3316488,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Pawlik #3H",
    "Latitude": 28.91472465,
    "Longitude": -98.06474027,
    "TotalBaseWaterVolume": 3012055,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Tipton Jonas 4H",
    "Latitude": 28.853616,
    "Longitude": -97.975928,
    "TotalBaseWaterVolume": 3559592,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Dzuik A 1H",
    "Latitude": 28.941647,
    "Longitude": -97.738922,
    "TotalBaseWaterVolume": 2560718,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Robert Gutierrez 3H",
    "Latitude": 28.178275,
    "Longitude": -99.231806,
    "TotalBaseWaterVolume": 3709723,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "Kleihege Unit #1H",
    "Latitude": 29.515603,
    "Longitude": -97.152723,
    "TotalBaseWaterVolume": 8295672,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Thelma Brite #24H",
    "Latitude": 28.555225,
    "Longitude": -98.591433,
    "TotalBaseWaterVolume": 7008708,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Zavisch North Unit 2-1H",
    "Latitude": 28.405804,
    "Longitude": -98.455974,
    "TotalBaseWaterVolume": 3529292,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Nichols 4-H",
    "Latitude": 28.191069,
    "Longitude": -98.331445,
    "TotalBaseWaterVolume": 152210,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-29 #9",
    "Latitude": 32.37596743,
    "Longitude": -102.1605859,
    "TotalBaseWaterVolume": 1458764,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Honey Badger 53-T4-34 #1H",
    "Latitude": 31.53438944,
    "Longitude": -103.6346701,
    "TotalBaseWaterVolume": 2189976,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Eschberger 1H",
    "Latitude": 30.216013,
    "Longitude": -96.495739,
    "TotalBaseWaterVolume": 3990168,
    "StateName": "Texas",
    "CountyName": "Washington"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lorene Grissom 1H",
    "Latitude": 33.38,
    "Longitude": -97.73,
    "TotalBaseWaterVolume": 4660697,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "RICHARDSON PAULINE SA 3H",
    "Latitude": 33.05689,
    "Longitude": -97.47529,
    "TotalBaseWaterVolume": 3326148,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ring Energy, Inc.",
    "WellName": "Fisher A 3",
    "Latitude": 32.45306,
    "Longitude": -102.6303,
    "TotalBaseWaterVolume": 98448,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EagleRidge Energy, LLC",
    "WellName": "Springside B4D",
    "Latitude": 33.188556,
    "Longitude": -97.169611,
    "TotalBaseWaterVolume": 4540149,
    "StateName": "Texas",
    "CountyName": "Denton County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "GS Andector Unit J-182",
    "Latitude": 32.027319,
    "Longitude": -102.704883,
    "TotalBaseWaterVolume": 107187,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cabot Oil & Gas Corp",
    "WellName": "R. H. Pickens B101H",
    "Latitude": 28.72446111,
    "Longitude": -98.81667778,
    "TotalBaseWaterVolume": 4771051,
    "StateName": "Texas",
    "CountyName": "Frio County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Glass 3 #7",
    "Latitude": 31.868,
    "Longitude": -101.522,
    "TotalBaseWaterVolume": 1061789,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Cox-Bundy 16 #5",
    "Latitude": 31.738872,
    "Longitude": -101.390855,
    "TotalBaseWaterVolume": 2171887,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -3-/Well No. 2",
    "Latitude": 31.73132,
    "Longitude": -101.57193,
    "TotalBaseWaterVolume": 2346666,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Boothe Unit #2H",
    "Latitude": 29.376111,
    "Longitude": -97.283139,
    "TotalBaseWaterVolume": 3953208,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Martin Unit #1H",
    "Latitude": 29.433972,
    "Longitude": -97.242722,
    "TotalBaseWaterVolume": 4147080,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hansen Kullin Unit #8H",
    "Latitude": 29.292933,
    "Longitude": -97.423464,
    "TotalBaseWaterVolume": 4595476,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Glass 15 #9",
    "Latitude": 31.846,
    "Longitude": -101.502,
    "TotalBaseWaterVolume": 763503,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Navidad Resources LLC",
    "WellName": "ESPF 2-4",
    "Latitude": 30.99891,
    "Longitude": -95.66509,
    "TotalBaseWaterVolume": 2069130,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Sarah Hyman 79",
    "Latitude": 32.124628,
    "Longitude": -101.273503,
    "TotalBaseWaterVolume": 366702,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Cline Unit 32 #2",
    "Latitude": 32.22019,
    "Longitude": -101.60996,
    "TotalBaseWaterVolume": 1100610,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Long 13A-2",
    "Latitude": 32.31165,
    "Longitude": -101.538904,
    "TotalBaseWaterVolume": 1197966,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Gex Lutie W `875` 1H",
    "Latitude": 36.3177,
    "Longitude": -100.09661,
    "TotalBaseWaterVolume": 479422,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Valence Operating Company",
    "WellName": "Murray 1H",
    "Latitude": 28.64196,
    "Longitude": -98.66278,
    "TotalBaseWaterVolume": 6787800.034,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 2938",
    "Latitude": 32.14168743,
    "Longitude": -102.1677754,
    "TotalBaseWaterVolume": 1591296,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Crabtree 25 #3",
    "Latitude": 32.22019,
    "Longitude": -101.80646,
    "TotalBaseWaterVolume": 1092756,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Donald L Hutt Fee #87",
    "Latitude": 31.84220286,
    "Longitude": -101.9363111,
    "TotalBaseWaterVolume": 1254663,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "South Curtis Ranch Unit 1018",
    "Latitude": 30.074869,
    "Longitude": -104.854456,
    "TotalBaseWaterVolume": 654115,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Miller Trust #105",
    "Latitude": 31.87552,
    "Longitude": -102.0235,
    "TotalBaseWaterVolume": 1143534,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #18",
    "Latitude": 30.7609952,
    "Longitude": -97.0227675,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Westbrook Southeast Unit/Well No. 231W",
    "Latitude": 32.40388,
    "Longitude": -101.03855,
    "TotalBaseWaterVolume": 14742,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Westbrook Southeast Unit/Well No. 230W",
    "Latitude": 32.40452,
    "Longitude": -101.03895,
    "TotalBaseWaterVolume": 17430,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Graham 3H",
    "Latitude": 36.18771,
    "Longitude": -100.56242,
    "TotalBaseWaterVolume": 656082,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Winston E8",
    "Latitude": 32.61,
    "Longitude": -97.59,
    "TotalBaseWaterVolume": 2747749,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Winston E18",
    "Latitude": 32.61,
    "Longitude": -97.59,
    "TotalBaseWaterVolume": 2734112,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "MARIE TUCKER TRUST (SA) 2H",
    "Latitude": 32.8646504,
    "Longitude": -97.6327348,
    "TotalBaseWaterVolume": 7119594,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Enduring Resources LLC",
    "WellName": "University Lands 47-48 #2301H",
    "Latitude": 31.08823,
    "Longitude": -101.34782,
    "TotalBaseWaterVolume": 8308818,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Patriot Resources, Inc.",
    "WellName": "Gazelle 23 #4",
    "Latitude": 31,
    "Longitude": -103,
    "TotalBaseWaterVolume": 1561812,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Delta Oil & Gas Ltd.",
    "WellName": "Corbett Ranch E-1",
    "Latitude": 32.8579888,
    "Longitude": -98.6522001,
    "TotalBaseWaterVolume": 90048,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 31 14",
    "Latitude": 31.5067862,
    "Longitude": -102.196887,
    "TotalBaseWaterVolume": 1361701,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU3 2016",
    "Latitude": 31.62626,
    "Longitude": -102.16528,
    "TotalBaseWaterVolume": 867094,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1448",
    "Latitude": 31.6401924,
    "Longitude": -103.0391195,
    "TotalBaseWaterVolume": 8190,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Pipes 34-115 #1H",
    "Latitude": 31.452871,
    "Longitude": -103.218969,
    "TotalBaseWaterVolume": 1200356,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lott 1 6H",
    "Latitude": 35.52,
    "Longitude": -100.22,
    "TotalBaseWaterVolume": 11925631,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1731",
    "Latitude": 31.6648003,
    "Longitude": -103.0038123,
    "TotalBaseWaterVolume": 16632,
    "StateName": "Texas",
    "CountyName": "WARD"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Vinson Fee G9",
    "Latitude": 33.013398,
    "Longitude": -97.463337,
    "TotalBaseWaterVolume": 818504.4,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "YWCU 4537",
    "Latitude": 32.969195,
    "Longitude": -102.840117,
    "TotalBaseWaterVolume": 58616,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Hunsaker  Unit A 1",
    "Latitude": 29.032917,
    "Longitude": -97.695956,
    "TotalBaseWaterVolume": 3572317,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Ann Friar Thomas 5H",
    "Latitude": 29.269803,
    "Longitude": -97.288717,
    "TotalBaseWaterVolume": 3659904,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 36H",
    "Latitude": 28.2925611,
    "Longitude": -99.7082,
    "TotalBaseWaterVolume": 7023679,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Aunt Bee 11",
    "Latitude": 31.78131,
    "Longitude": -102.33977,
    "TotalBaseWaterVolume": 1922243,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BD #1120",
    "Latitude": 32.027689,
    "Longitude": -102.294747,
    "TotalBaseWaterVolume": 1884912.893,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Weyman 9R",
    "Latitude": 32.014342,
    "Longitude": -102.6649253,
    "TotalBaseWaterVolume": 120975,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Stark GU 3H",
    "Latitude": 31.7081,
    "Longitude": -96.17622,
    "TotalBaseWaterVolume": 5131644,
    "StateName": "Texas",
    "CountyName": "Freestone"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Gibson 7 Unit 1A",
    "Latitude": 31.86247,
    "Longitude": -101.46877,
    "TotalBaseWaterVolume": 982464,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "BTLT #66",
    "Latitude": 26.451475,
    "Longitude": -98.438984,
    "TotalBaseWaterVolume": 218025,
    "StateName": "Texas",
    "CountyName": "Hidalgo"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Biscuit 18 Unit #1",
    "Latitude": 32.3863711,
    "Longitude": -101.6619281,
    "TotalBaseWaterVolume": 221466,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Biscuit 18 Unit #1",
    "Latitude": 32.2311,
    "Longitude": -101.3943,
    "TotalBaseWaterVolume": 221466,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hadaway Consulting and Engineering, LLC",
    "WellName": "Johnson 33-1HA",
    "Latitude": 33.0902,
    "Longitude": -101.00428,
    "TotalBaseWaterVolume": 850689,
    "StateName": "Texas",
    "CountyName": "Kent"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "King Ranch Los Indios #858",
    "Latitude": 27.36902,
    "Longitude": -97.97729,
    "TotalBaseWaterVolume": 294714,
    "StateName": "Texas",
    "CountyName": "Kleberg"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hess Corporation",
    "WellName": "Smith A Unit A-1H",
    "Latitude": 28.460183,
    "Longitude": -99.253514,
    "TotalBaseWaterVolume": 3014818,
    "StateName": "Texas",
    "CountyName": "La Salle County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Kuykendall Ranch 1H",
    "Latitude": 28.454221,
    "Longitude": -98.696607,
    "TotalBaseWaterVolume": 2479089,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Kuykendall Ranch 2H",
    "Latitude": 28.454281,
    "Longitude": -98.696568,
    "TotalBaseWaterVolume": 2584096,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Kuykendall Ranch 3H",
    "Latitude": 28.454878,
    "Longitude": -98.696181,
    "TotalBaseWaterVolume": 2319699,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Kuykendall Ranch 4H",
    "Latitude": 28.454938,
    "Longitude": -98.696143,
    "TotalBaseWaterVolume": 2048413,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlueStone Natural Resources",
    "WellName": "Manning GU 1H",
    "Latitude": 30.9372168,
    "Longitude": -95.8178399,
    "TotalBaseWaterVolume": 1895376,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Tarzan Standefer 9 #2",
    "Latitude": 32.254065,
    "Longitude": -101.870579,
    "TotalBaseWaterVolume": 1462608,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sale Ranch H #21",
    "Latitude": 32.23463989,
    "Longitude": -101.9727835,
    "TotalBaseWaterVolume": 1339446,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Eagle Energy Acquisitions LP",
    "WellName": "Holt 7 7B",
    "Latitude": 32,
    "Longitude": -102,
    "TotalBaseWaterVolume": 1450390,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Holcomb -46-/Well No. 1",
    "Latitude": 32.51142,
    "Longitude": -101.92646,
    "TotalBaseWaterVolume": 759654,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST 41-3",
    "Latitude": 31.976681,
    "Longitude": -102.230514,
    "TotalBaseWaterVolume": 1398012,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6103 (PA)",
    "Latitude": 32.41856,
    "Longitude": -101.04526,
    "TotalBaseWaterVolume": 16968,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Trammell 5H",
    "Latitude": 36.028215,
    "Longitude": -100.924307,
    "TotalBaseWaterVolume": 1692737,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Steller Energy & Investment Corp",
    "WellName": "Pat Foster #4",
    "Latitude": 31.97247,
    "Longitude": -101.23534,
    "TotalBaseWaterVolume": 966504,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Smith 113 SE #2",
    "Latitude": 31.456,
    "Longitude": -102.144,
    "TotalBaseWaterVolume": 1015271.496,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Terri # 4404",
    "Latitude": 31.48344,
    "Longitude": -102.17146,
    "TotalBaseWaterVolume": 1186500,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek 44 #8",
    "Latitude": 31.64381,
    "Longitude": -102.01653,
    "TotalBaseWaterVolume": 1762786,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Hasel 56 2",
    "Latitude": 31.33376734,
    "Longitude": -101.9632228,
    "TotalBaseWaterVolume": 1226148,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe GU1 State AR4H",
    "Latitude": 28.01243,
    "Longitude": -99.903509,
    "TotalBaseWaterVolume": 8357370,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Acadia Oil, LLC",
    "WellName": "Waggoner H #1",
    "Latitude": 34.01235,
    "Longitude": -98.91847,
    "TotalBaseWaterVolume": 100,
    "StateName": "Texas",
    "CountyName": "Wichita"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1033",
    "Latitude": 33.6604509,
    "Longitude": -103.0060708,
    "TotalBaseWaterVolume": 19614,
    "StateName": "Texas",
    "CountyName": "WARD"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1492",
    "Latitude": 31.6578019,
    "Longitude": -103.0013185,
    "TotalBaseWaterVolume": 14868,
    "StateName": "Texas",
    "CountyName": "WARD"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Vinson Fee G7",
    "Latitude": 33.012439,
    "Longitude": -97.45464,
    "TotalBaseWaterVolume": 818361.6,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-41 #7",
    "Latitude": 32.3393767,
    "Longitude": -102.2242419,
    "TotalBaseWaterVolume": 1189835,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Mabee, J.E. 'A' NCT-1 3702",
    "Latitude": 32.20606167,
    "Longitude": -102.2412275,
    "TotalBaseWaterVolume": 1308742,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Eagle State 400H",
    "Latitude": 31.56793,
    "Longitude": -102.63861,
    "TotalBaseWaterVolume": 2030603,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark 'J' # 3565",
    "Latitude": 33.48561,
    "Longitude": -101.48561,
    "TotalBaseWaterVolume": 36575,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "BRISCOE COCHINA WEST RANCH 24H",
    "Latitude": 28.3820251,
    "Longitude": -99.5158307,
    "TotalBaseWaterVolume": 2644446,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 41H",
    "Latitude": 28.2966863,
    "Longitude": -99.8326892,
    "TotalBaseWaterVolume": 6061882,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Rancho Encantado 9H",
    "Latitude": 28.343922,
    "Longitude": -99.477886,
    "TotalBaseWaterVolume": 6411466,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 542",
    "Latitude": 32.029942,
    "Longitude": -102.678872,
    "TotalBaseWaterVolume": 189364,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #314",
    "Latitude": 32.8852804,
    "Longitude": -102.9187299,
    "TotalBaseWaterVolume": 131292,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "North Riley Unit 1355",
    "Latitude": 32.66403806,
    "Longitude": -102.8373461,
    "TotalBaseWaterVolume": 98318,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Lacy Creek 42 #2",
    "Latitude": 31.704173,
    "Longitude": -101.313819,
    "TotalBaseWaterVolume": 2160858,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Barbee 92D",
    "Latitude": 31.66329,
    "Longitude": -101.32214,
    "TotalBaseWaterVolume": 1648248,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Dreyer Unit #12H",
    "Latitude": 29.376194,
    "Longitude": -97.28325,
    "TotalBaseWaterVolume": 5783568,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ironwood Oil and Gas, LLC",
    "WellName": "Ince 1-H",
    "Latitude": 29.57643,
    "Longitude": -97.25122,
    "TotalBaseWaterVolume": 3332523,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "McClure Unit #8H",
    "Latitude": 29.486444,
    "Longitude": -97.275667,
    "TotalBaseWaterVolume": 4544526,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Burchell 2 #2A 2C",
    "Latitude": 32.34813,
    "Longitude": -101.54425,
    "TotalBaseWaterVolume": 935302,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Denton  45 #2",
    "Latitude": 32.368226,
    "Longitude": -101.472952,
    "TotalBaseWaterVolume": 968982,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Cortes 1H",
    "Latitude": 31.19123,
    "Longitude": -101.03946,
    "TotalBaseWaterVolume": 5635086,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Kotara Ridley 7H",
    "Latitude": 28.83,
    "Longitude": -97.92,
    "TotalBaseWaterVolume": 3661884,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Kotara Ridley 5H",
    "Latitude": 28.83,
    "Longitude": -97.92,
    "TotalBaseWaterVolume": 3878402,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Washburn Ranch 01 03H",
    "Latitude": 28.353648,
    "Longitude": -98.88636,
    "TotalBaseWaterVolume": 4000080,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Washburn Ranch 01 04H",
    "Latitude": 28.353648,
    "Longitude": -98.886454,
    "TotalBaseWaterVolume": 3875886,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Dimmit 53-38/Well No. 1",
    "Latitude": 31.79475,
    "Longitude": -103.51499,
    "TotalBaseWaterVolume": 1170834,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 138P-801H",
    "Latitude": 32.218242,
    "Longitude": -102.107433,
    "TotalBaseWaterVolume": 2268420,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Casselman 3236",
    "Latitude": 32.09832215,
    "Longitude": -102.2075563,
    "TotalBaseWaterVolume": 1587852,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Slaughter -8-/Well No. 1",
    "Latitude": 32.46775,
    "Longitude": -101.96282,
    "TotalBaseWaterVolume": 725886,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Midkiff 1814",
    "Latitude": 32.0238812,
    "Longitude": -102.2665864,
    "TotalBaseWaterVolume": 1815630.622,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6105 (PA)",
    "Latitude": 32.41697,
    "Longitude": -101.04977,
    "TotalBaseWaterVolume": 19992,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Pfluger Consolidated 3",
    "Latitude": 31.52246,
    "Longitude": -101.26944,
    "TotalBaseWaterVolume": 14994,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker C Enron # 13",
    "Latitude": 31.3259,
    "Longitude": -101.2911,
    "TotalBaseWaterVolume": 806060,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 37 #1",
    "Latitude": 31.202006,
    "Longitude": -103.3768011,
    "TotalBaseWaterVolume": 784140,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Davenport 8",
    "Latitude": 26.4865,
    "Longitude": -98.55257,
    "TotalBaseWaterVolume": 61096,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #3034",
    "Latitude": 31.48109836,
    "Longitude": -101.9827956,
    "TotalBaseWaterVolume": 1246809,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL 11 3",
    "Latitude": 31.5766,
    "Longitude": -102.15868,
    "TotalBaseWaterVolume": 1457736,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Powell 36 5",
    "Latitude": 31.53251465,
    "Longitude": -102.1122872,
    "TotalBaseWaterVolume": 1412152,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Wilkesboro 119 1H",
    "Latitude": 31.49294,
    "Longitude": -103.19063,
    "TotalBaseWaterVolume": 1667530,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ricochet Energy, Inc.",
    "WellName": "Halamicek, J.A. et al Unit, Well No. 2",
    "Latitude": 29.286381,
    "Longitude": -96.386841,
    "TotalBaseWaterVolume": 56069,
    "StateName": "Texas",
    "CountyName": "Wharton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Ruckman Ranch 7",
    "Latitude": 29.017981,
    "Longitude": -97.726297,
    "TotalBaseWaterVolume": 2469269,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Matador Cowey Orca 1H",
    "Latitude": 29.071105,
    "Longitude": -97.513126,
    "TotalBaseWaterVolume": 4061442,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "East Penwell San Andres Unit/Well No. 1220",
    "Latitude": 31.71561,
    "Longitude": -102.59139,
    "TotalBaseWaterVolume": 21630,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Millie A 14",
    "Latitude": 31.66793,
    "Longitude": -102.3578,
    "TotalBaseWaterVolume": 1544575,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Allison #1",
    "Latitude": 32.0180835,
    "Longitude": -102.5952622,
    "TotalBaseWaterVolume": 489930,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Schwartz 36 #6",
    "Latitude": 31.915,
    "Longitude": -101.494,
    "TotalBaseWaterVolume": 1033074,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Hardy 18 8",
    "Latitude": 31.85282,
    "Longitude": -101.46116,
    "TotalBaseWaterVolume": 924378,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Frysak-A-47N",
    "Latitude": 31.65620556,
    "Longitude": -101.4274639,
    "TotalBaseWaterVolume": 1872701,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Duane 18 #1",
    "Latitude": 31.94202,
    "Longitude": -101.60068,
    "TotalBaseWaterVolume": 1280706,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "ED BOOKS 13-10",
    "Latitude": 31.73622,
    "Longitude": -101.439229,
    "TotalBaseWaterVolume": 789684,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Boysen Unit #3H",
    "Latitude": 29.226139,
    "Longitude": -97.545139,
    "TotalBaseWaterVolume": 2695476,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CML Exploration, LLC",
    "WellName": "Sutton 1",
    "Latitude": 30.77571,
    "Longitude": -96.10324,
    "TotalBaseWaterVolume": 3026117,
    "StateName": "Texas",
    "CountyName": "Grimes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Pawlik #2H",
    "Latitude": 28.91477994,
    "Longitude": -98.06474102,
    "TotalBaseWaterVolume": 3975980,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Kotara Ridley 6H",
    "Latitude": 28.83,
    "Longitude": -97.92,
    "TotalBaseWaterVolume": 3730819,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Strat Land Exploration Co",
    "WellName": "Guy 7H",
    "Latitude": 36.28,
    "Longitude": -100.48,
    "TotalBaseWaterVolume": 647824,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 6-43 #10",
    "Latitude": 32.44647676,
    "Longitude": -102.1837077,
    "TotalBaseWaterVolume": 1285457,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Walsh & Watts, Inc.",
    "WellName": "Wilkinson 'B' #10",
    "Latitude": 30.9807169,
    "Longitude": -99.9180406,
    "TotalBaseWaterVolume": 15708,
    "StateName": "Texas",
    "CountyName": "Menard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Texas Ten T #7",
    "Latitude": 31.87564155,
    "Longitude": -102.036298,
    "TotalBaseWaterVolume": 796971,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlantic Operating, Inc.",
    "WellName": "Prewitt #2",
    "Latitude": 31.393379,
    "Longitude": -103.49165,
    "TotalBaseWaterVolume": 1636488,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "Wild Bill Hickok 205 #2",
    "Latitude": 31.269447,
    "Longitude": -103.53393,
    "TotalBaseWaterVolume": 1750770,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "Hanging H State 70 #1",
    "Latitude": 31.434847,
    "Longitude": -103.531807,
    "TotalBaseWaterVolume": 2047038,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "Trammell 4H",
    "Latitude": 36.027398,
    "Longitude": -100.924121,
    "TotalBaseWaterVolume": 1718725,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Drillers 1H",
    "Latitude": 31.02122,
    "Longitude": -96.51496,
    "TotalBaseWaterVolume": 1393308,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "TB Slick #255",
    "Latitude": 26.490424,
    "Longitude": -98.516488,
    "TotalBaseWaterVolume": 332557,
    "StateName": "Texas",
    "CountyName": "Starr"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Edwards Riverhills B Unit 25H",
    "Latitude": 32.68855,
    "Longitude": -97.40298,
    "TotalBaseWaterVolume": 3704110.2,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2250",
    "Latitude": 33.001199,
    "Longitude": -102.893595,
    "TotalBaseWaterVolume": 34484,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2255",
    "Latitude": 32.992881,
    "Longitude": -102.898312,
    "TotalBaseWaterVolume": 34491,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Kinchloe 8",
    "Latitude": 31.7425,
    "Longitude": -102.3777777,
    "TotalBaseWaterVolume": 569249,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Drone Bee West 001",
    "Latitude": 32.144975,
    "Longitude": -102.700103,
    "TotalBaseWaterVolume": 332934,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Shoop, Glenn P. G (SA) 5H",
    "Latitude": 33.142231,
    "Longitude": -97.3914026,
    "TotalBaseWaterVolume": 5098604,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Rancho Encantado 10H",
    "Latitude": 28.343922,
    "Longitude": -99.477839,
    "TotalBaseWaterVolume": 6299773,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Killam Oil Co., Ltd.",
    "WellName": "DCR-STATE 366/76/64/54 #19",
    "Latitude": 27.9216497,
    "Longitude": -98.6924831,
    "TotalBaseWaterVolume": 18606,
    "StateName": "Texas",
    "CountyName": "Duval"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BI #310",
    "Latitude": 32.041147,
    "Longitude": -102.325561,
    "TotalBaseWaterVolume": 2130846.161,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Lawson 38 #1",
    "Latitude": 32.00078,
    "Longitude": -101.61397,
    "TotalBaseWaterVolume": 1224342,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Tall Cotton 18 #1",
    "Latitude": 33.6522271,
    "Longitude": -102.2955271,
    "TotalBaseWaterVolume": 284508,
    "StateName": "Texas",
    "CountyName": "Hockley"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Donelson 48 #1",
    "Latitude": 32.382136,
    "Longitude": -101.426368,
    "TotalBaseWaterVolume": 1020936,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Munson #1006H",
    "Latitude": 31.1766561,
    "Longitude": -101.0700517,
    "TotalBaseWaterVolume": 17581536,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Tepee Draw 3036O",
    "Latitude": 31.40533,
    "Longitude": -101.20867,
    "TotalBaseWaterVolume": 2696736,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Tipton Jonas 3H",
    "Latitude": 28.853642,
    "Longitude": -97.975856,
    "TotalBaseWaterVolume": 3526722,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Swize McFarland 1H",
    "Latitude": 28.904011,
    "Longitude": -98.012257,
    "TotalBaseWaterVolume": 2899302,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "William Holland 01 01H ?",
    "Latitude": 28.565274,
    "Longitude": -98.13553,
    "TotalBaseWaterVolume": 2945082,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Gladys Wheeler 5-4H",
    "Latitude": 28.353248,
    "Longitude": -98.554074,
    "TotalBaseWaterVolume": 2951504,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Hightower 20 #1",
    "Latitude": 32.50698,
    "Longitude": -102.05736,
    "TotalBaseWaterVolume": 1737435,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Hoopsnake 21 #1",
    "Latitude": 32.075,
    "Longitude": -101.4329,
    "TotalBaseWaterVolume": 780444,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL U 504",
    "Latitude": 31.65245,
    "Longitude": -102.162,
    "TotalBaseWaterVolume": 1165206,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Donald L Hutt Fee #101",
    "Latitude": 31.83562798,
    "Longitude": -101.9162256,
    "TotalBaseWaterVolume": 1416851,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Hoover 215 #3H",
    "Latitude": 36.0994842,
    "Longitude": -100.6944057,
    "TotalBaseWaterVolume": 434535,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Veritas Energy, LLC",
    "WellName": "Donnell #1 ?",
    "Latitude": 32.92883,
    "Longitude": -98.28468,
    "TotalBaseWaterVolume": 608025,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Winston D9",
    "Latitude": 32.61,
    "Longitude": -97.59,
    "TotalBaseWaterVolume": 2766900,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Winston D22",
    "Latitude": 32.61,
    "Longitude": -97.59,
    "TotalBaseWaterVolume": 2510182,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 2-30 #5",
    "Latitude": 31.27645986,
    "Longitude": -101.761695,
    "TotalBaseWaterVolume": 1122803,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LeNorman Operating LLC",
    "WellName": "Boone 9-1",
    "Latitude": 36.56,
    "Longitude": -101.47,
    "TotalBaseWaterVolume": 3696550,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Crites GU #1H",
    "Latitude": 27.915044,
    "Longitude": -97.358254,
    "TotalBaseWaterVolume": 359982,
    "StateName": "Texas",
    "CountyName": "San Patricio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Edwards Riverhills B Unit 8H",
    "Latitude": 32.68851,
    "Longitude": -97.40299,
    "TotalBaseWaterVolume": 4873335.6,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL T 27 3",
    "Latitude": 31.53177002,
    "Longitude": -102.1605306,
    "TotalBaseWaterVolume": 1332342,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "JAMEX, Inc.",
    "WellName": "Neely 1",
    "Latitude": 32.601458,
    "Longitude": -95.8453,
    "TotalBaseWaterVolume": 93626,
    "StateName": "Texas",
    "CountyName": "Van Zandt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlantic Operating, Inc.",
    "WellName": "David L. Marston #1",
    "Latitude": 31.5112,
    "Longitude": -102.817882,
    "TotalBaseWaterVolume": 304416,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B327H",
    "Latitude": 28.018467,
    "Longitude": -99.726974,
    "TotalBaseWaterVolume": 7309344,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles 68 23-68H",
    "Latitude": 35.431835,
    "Longitude": -100.048164,
    "TotalBaseWaterVolume": 5426468,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Bridwell Oil Company",
    "WellName": "Bridwell 6",
    "Latitude": 33.90184,
    "Longitude": -98.78724,
    "TotalBaseWaterVolume": 1000,
    "StateName": "Texas",
    "CountyName": "Wichita"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Stout Energy Inc.",
    "WellName": "Cowden K #1",
    "Latitude": 31.79837,
    "Longitude": -103.11913,
    "TotalBaseWaterVolume": 82530,
    "StateName": "Texas",
    "CountyName": "WINKLER"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Forsythe Speer 7H",
    "Latitude": 33.3313767,
    "Longitude": -97.70324355,
    "TotalBaseWaterVolume": 4851462,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Joshua Barnes Unit 2H",
    "Latitude": 33.39,
    "Longitude": -97.75,
    "TotalBaseWaterVolume": 6682882,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Boaz Energy, LLC.",
    "WellName": "J.L. BRUNSON 'B' #404",
    "Latitude": 31.8682528,
    "Longitude": -100.3199056,
    "TotalBaseWaterVolume": 20496,
    "StateName": "Texas",
    "CountyName": "Coke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Zora Unit #2H",
    "Latitude": 33.572239,
    "Longitude": -97.484986,
    "TotalBaseWaterVolume": 5187966,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Zora Unit #1H",
    "Latitude": 33.572283,
    "Longitude": -97.484925,
    "TotalBaseWaterVolume": 5602170,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Zora A Unit #1H",
    "Latitude": 33.572192,
    "Longitude": -97.485047,
    "TotalBaseWaterVolume": 5101530,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "McElroy, J.T., Cons. 1370",
    "Latitude": 31.43303889,
    "Longitude": -102.320475,
    "TotalBaseWaterVolume": 32760,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Mcelroy J T Cons 1479",
    "Latitude": 31.40549,
    "Longitude": -102.31897,
    "TotalBaseWaterVolume": 33772,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Whittenburg 2707",
    "Latitude": 31.9805551,
    "Longitude": -102.2920932,
    "TotalBaseWaterVolume": 1816278.198,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Txl South Unit 4715HL",
    "Latitude": 31.81536,
    "Longitude": -102.72719,
    "TotalBaseWaterVolume": 3101574,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Red Devil 22 #4",
    "Latitude": 31.866275,
    "Longitude": -101.306581,
    "TotalBaseWaterVolume": 535878,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Boothe Unit #1H",
    "Latitude": 29.375944,
    "Longitude": -97.282889,
    "TotalBaseWaterVolume": 3983490,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Preston A Unit #7H",
    "Latitude": 29.286589,
    "Longitude": -97.451839,
    "TotalBaseWaterVolume": 5896800,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Rocker B AE Unit #01H",
    "Latitude": 31.3736277,
    "Longitude": -101.1837891,
    "TotalBaseWaterVolume": 7661010,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Whitfield West Unit 2H",
    "Latitude": 29.00565,
    "Longitude": -97.784458,
    "TotalBaseWaterVolume": 6455463,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Whitfield East #2H",
    "Latitude": 29.0056742,
    "Longitude": -97.7769869,
    "TotalBaseWaterVolume": 7900880,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Wingnut Unit A 1H",
    "Latitude": 29.105376,
    "Longitude": -97.629295,
    "TotalBaseWaterVolume": 3567858,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Patton 1H",
    "Latitude": 28.931969,
    "Longitude": -97.869997,
    "TotalBaseWaterVolume": 10183370,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Whitfield East #3H",
    "Latitude": 29.005672,
    "Longitude": -97.776908,
    "TotalBaseWaterVolume": 7963116,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Whitfield East #4H",
    "Latitude": 29.005669,
    "Longitude": -97.776825,
    "TotalBaseWaterVolume": 6455463,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Inman Unit #4H",
    "Latitude": 29.433917,
    "Longitude": -97.242806,
    "TotalBaseWaterVolume": 4494798,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Adams 138 #3H",
    "Latitude": 36.0994842,
    "Longitude": -100.6943224,
    "TotalBaseWaterVolume": 195375,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Stenger (SA) 4H",
    "Latitude": 32.8452687,
    "Longitude": -97.700769,
    "TotalBaseWaterVolume": 4099748,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Sugg B 134 1HU",
    "Latitude": 31.52886111,
    "Longitude": -101.3644056,
    "TotalBaseWaterVolume": 9918614,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Lyda 21 #2",
    "Latitude": 31.2454906,
    "Longitude": -103.4301631,
    "TotalBaseWaterVolume": 799554,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Leske Lott 4H",
    "Latitude": 29.157819,
    "Longitude": -97.412747,
    "TotalBaseWaterVolume": 3230871,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "BRISCOE COCHINA WEST RANCH 25H",
    "Latitude": 28.382025,
    "Longitude": -99.515783,
    "TotalBaseWaterVolume": 7914984,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "BRISCOE COCHINA WEST RANCH 26H",
    "Latitude": 28.3820251,
    "Longitude": -99.5157363,
    "TotalBaseWaterVolume": 8724744,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Frio/Well No. 2",
    "Latitude": 31.68681,
    "Longitude": -101.45337,
    "TotalBaseWaterVolume": 168336,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Mack 6 Carter 43 #2H",
    "Latitude": 31.989,
    "Longitude": -101.509,
    "TotalBaseWaterVolume": 5727540,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Reynolds 1 #1",
    "Latitude": 31.8993794,
    "Longitude": -101.392864,
    "TotalBaseWaterVolume": 2172870,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI-Driver 28 #6",
    "Latitude": 31.80946305,
    "Longitude": -101.5097705,
    "TotalBaseWaterVolume": 3098130,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Bailey Unit A 1",
    "Latitude": 28.85665,
    "Longitude": -97.90081111,
    "TotalBaseWaterVolume": 3321304,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hess Corporation",
    "WellName": "Smith B Unit B-1H",
    "Latitude": 28.46051,
    "Longitude": -99.262067,
    "TotalBaseWaterVolume": 3058326,
    "StateName": "Texas",
    "CountyName": "La Salle County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Magnum Hunter Resources Corp",
    "WellName": "Zebra Hunter 1H",
    "Latitude": 28.07,
    "Longitude": -93.29,
    "TotalBaseWaterVolume": 4340766,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Magnum Hunter Resources Corp",
    "WellName": "Rhino 1H",
    "Latitude": 29.08,
    "Longitude": -93.27,
    "TotalBaseWaterVolume": 5398825,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Matkin Sugarkane Unit 1-1H",
    "Latitude": 28.404754,
    "Longitude": -98.28693,
    "TotalBaseWaterVolume": 3014528,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 10-1 #4H",
    "Latitude": 31.28161175,
    "Longitude": -101.5521993,
    "TotalBaseWaterVolume": 12606245,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Valley #04 ST",
    "Latitude": 27.903832,
    "Longitude": -97.372952,
    "TotalBaseWaterVolume": 24486,
    "StateName": "Texas",
    "CountyName": "San Patricio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "University Carol 9",
    "Latitude": 32.360006,
    "Longitude": -102.4125,
    "TotalBaseWaterVolume": 916928,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Limestone Exploration II, LLC",
    "WellName": "Finn McCool 4 #1",
    "Latitude": 32.271445,
    "Longitude": -102.542827,
    "TotalBaseWaterVolume": 228347,
    "StateName": "Texas",
    "CountyName": "Andrews County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Metano Energy III, LP",
    "WellName": "Covington 2H",
    "Latitude": 33.58969,
    "Longitude": -99.03507,
    "TotalBaseWaterVolume": 807660,
    "StateName": "Texas",
    "CountyName": "Baylor"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Estancia Oil & Gas, LLC",
    "WellName": "MSW Brown-Portefield #4",
    "Latitude": 32.60621,
    "Longitude": -101.80502,
    "TotalBaseWaterVolume": 20370,
    "StateName": "Texas",
    "CountyName": "Borden"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tecpetrol Operating LLC",
    "WellName": "Sullivan Deep C6",
    "Latitude": 27.203617,
    "Longitude": -98.019228,
    "TotalBaseWaterVolume": 85837,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "University Lands 36 #3H",
    "Latitude": 31.453,
    "Longitude": -102.412,
    "TotalBaseWaterVolume": 807916.3735,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Rancho Encantado 11H",
    "Latitude": 28.343922,
    "Longitude": -99.477792,
    "TotalBaseWaterVolume": 6240471,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee C 2907E",
    "Latitude": 31.72342222,
    "Longitude": -102.3624028,
    "TotalBaseWaterVolume": 704926.2596,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee C 2907E",
    "Latitude": 31.72342222,
    "Longitude": -102.3624028,
    "TotalBaseWaterVolume": 704926,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -3A-/Well No. 1",
    "Latitude": 31.73508,
    "Longitude": -101.58756,
    "TotalBaseWaterVolume": 2341500,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hansen Kullin Unit #7HR",
    "Latitude": 29.299897,
    "Longitude": -97.441525,
    "TotalBaseWaterVolume": 6176799,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "McCollum A #1H",
    "Latitude": 29.15215,
    "Longitude": -97.557539,
    "TotalBaseWaterVolume": 5090946,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "Arledge Ranch Unit #1H",
    "Latitude": 29.520354,
    "Longitude": -97.241203,
    "TotalBaseWaterVolume": 4113354,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Huff 9-11HD",
    "Latitude": 35.692612,
    "Longitude": -100.166779,
    "TotalBaseWaterVolume": 6214682,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Bell, A.M./Well No. 73",
    "Latitude": 32.29141,
    "Longitude": -101.18356,
    "TotalBaseWaterVolume": 30870,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Wood Unit 32 #2",
    "Latitude": 32.37633,
    "Longitude": -101.59839,
    "TotalBaseWaterVolume": 1042146,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Ridley 01 03H",
    "Latitude": 28.895307,
    "Longitude": -97.795247,
    "TotalBaseWaterVolume": 3057684,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Blazek 8H",
    "Latitude": 31.42725,
    "Longitude": -96.17881,
    "TotalBaseWaterVolume": 9234708,
    "StateName": "Texas",
    "CountyName": "Leon"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Merydith `499` 2H",
    "Latitude": 36.21552,
    "Longitude": -100.53348,
    "TotalBaseWaterVolume": 567630,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Raymore 1-46 Unit Well 1H",
    "Latitude": 31.6752558,
    "Longitude": -103.5015765,
    "TotalBaseWaterVolume": 1129725,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Donnell C 2H",
    "Latitude": 28.382609,
    "Longitude": -98.637028,
    "TotalBaseWaterVolume": 2699382,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Layline Petroleum",
    "WellName": "Wheeler Lee `C` 3",
    "Latitude": 28.41039,
    "Longitude": -98.43172,
    "TotalBaseWaterVolume": 114492,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Hazelwood AA #3",
    "Latitude": 32.16892259,
    "Longitude": -101.9472034,
    "TotalBaseWaterVolume": 1363972,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 239A-1306",
    "Latitude": 32.256103,
    "Longitude": -102.187453,
    "TotalBaseWaterVolume": 1553286,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Hale #2",
    "Latitude": 32.216427,
    "Longitude": -102.020611,
    "TotalBaseWaterVolume": 1993068,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Mid-States Operating Company",
    "WellName": "Sarah #3",
    "Latitude": 31.956186,
    "Longitude": -101.958542,
    "TotalBaseWaterVolume": 1770216,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "DONALD L HUTT FEE #154 (PSE)",
    "Latitude": 31.85283319,
    "Longitude": -101.9086202,
    "TotalBaseWaterVolume": 1213929,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Epstein Gas Unit 4",
    "Latitude": 30.51147,
    "Longitude": -94.65619,
    "TotalBaseWaterVolume": 115786,
    "StateName": "Texas",
    "CountyName": "Polk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Collie A South 004",
    "Latitude": 31.400209,
    "Longitude": -103.454353,
    "TotalBaseWaterVolume": 96558,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Red Lodge C20-11 #2H",
    "Latitude": 31.651343,
    "Longitude": -103.770819,
    "TotalBaseWaterVolume": 4463802,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PPC Operating Company LLC",
    "WellName": "Renderbrook Creek (Miss)",
    "Latitude": 32.01423,
    "Longitude": -100.98157,
    "TotalBaseWaterVolume": 135316,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "JRS Farms 30A-4",
    "Latitude": 31.599372,
    "Longitude": -101.91155,
    "TotalBaseWaterVolume": 1645224,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Zoller 34-113/Well No. 1",
    "Latitude": 31.45633,
    "Longitude": -103.19684,
    "TotalBaseWaterVolume": 1147818,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 7-10",
    "Latitude": 28.0613,
    "Longitude": -99.432,
    "TotalBaseWaterVolume": 2708766,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe G23H",
    "Latitude": 28.1154968,
    "Longitude": -99.9135128,
    "TotalBaseWaterVolume": 7270494,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D 8-10",
    "Latitude": 28.0613,
    "Longitude": -99.432,
    "TotalBaseWaterVolume": 2690784,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rosetta Resources",
    "WellName": "Gates 05D GU 9-10",
    "Latitude": 28.0613,
    "Longitude": -99.432,
    "TotalBaseWaterVolume": 2739279,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 0805",
    "Latitude": 31.6601348,
    "Longitude": -103.0417782,
    "TotalBaseWaterVolume": 9576,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 0928",
    "Latitude": 31.6546661,
    "Longitude": -103.0128612,
    "TotalBaseWaterVolume": 8694,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Forsythe Speer Unit 8H",
    "Latitude": 33.33143438,
    "Longitude": -97.7033141,
    "TotalBaseWaterVolume": 3959172,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Kinchloe 13",
    "Latitude": 31.7325,
    "Longitude": -102.3886111,
    "TotalBaseWaterVolume": 648337,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "University Ruth 408",
    "Latitude": 32.37301,
    "Longitude": -102.4362,
    "TotalBaseWaterVolume": 1826160,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "M.B Mcknight 270H",
    "Latitude": 31.55109,
    "Longitude": -102.70369,
    "TotalBaseWaterVolume": 2858560,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 37H",
    "Latitude": 28.2966862,
    "Longitude": -99.8328752,
    "TotalBaseWaterVolume": 6920747,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 38R",
    "Latitude": 32.0292,
    "Longitude": -102.6392,
    "TotalBaseWaterVolume": 121542,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Aunt Bee 4",
    "Latitude": 31.78529,
    "Longitude": -102.34176,
    "TotalBaseWaterVolume": 1235493,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Robertson Unit/Well No. 2217",
    "Latitude": 32.6812,
    "Longitude": -102.78938,
    "TotalBaseWaterVolume": 47974,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "San Antonio -14-/Well No. 1 (PA)",
    "Latitude": 31.72946,
    "Longitude": -101.44897,
    "TotalBaseWaterVolume": 383166,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "M & M Ranch C 12H",
    "Latitude": 32.51171,
    "Longitude": -97.71267,
    "TotalBaseWaterVolume": 3043110,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "M & M Ranch C 13H",
    "Latitude": 32.51315,
    "Longitude": -97.71472,
    "TotalBaseWaterVolume": 3039708,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Bell, A.M./Well No. 74W",
    "Latitude": 32.28821,
    "Longitude": -101.18581,
    "TotalBaseWaterVolume": 28686,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Long 32-1",
    "Latitude": 32.285906,
    "Longitude": -101.474571,
    "TotalBaseWaterVolume": 1094982,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "Gloria Wheeler \"A\" 2H",
    "Latitude": 28.498797,
    "Longitude": -98.551142,
    "TotalBaseWaterVolume": 3796826,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "Gloria Wheeler \"B\" 2H",
    "Latitude": 28.498797,
    "Longitude": -98.551097,
    "TotalBaseWaterVolume": 3031972,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ark-La-Tex Energy, LLC",
    "WellName": "Chew Estate #2",
    "Latitude": 32.76664,
    "Longitude": -94.09922,
    "TotalBaseWaterVolume": 2982,
    "StateName": "Texas",
    "CountyName": "Marion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Cross Bar Ranch #3116W",
    "Latitude": 32.1063,
    "Longitude": -102.19507,
    "TotalBaseWaterVolume": 1792308,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 1936",
    "Latitude": 32.12003824,
    "Longitude": -102.1793518,
    "TotalBaseWaterVolume": 1640252,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Harris -1-/Well No. 1",
    "Latitude": 32.51149,
    "Longitude": -101.89115,
    "TotalBaseWaterVolume": 709002,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee AZ 1328",
    "Latitude": 32.020408,
    "Longitude": -102.274525,
    "TotalBaseWaterVolume": 1919988,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "North Creek I 68C",
    "Latitude": 31.3628,
    "Longitude": -101.37485,
    "TotalBaseWaterVolume": 1011486,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Resolute Natural Resources",
    "WellName": "Boucher 2 #2",
    "Latitude": 31.649408,
    "Longitude": -103.8242,
    "TotalBaseWaterVolume": 203138,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Beal Estate No. 14",
    "Latitude": 31.21124,
    "Longitude": -96.4465,
    "TotalBaseWaterVolume": 402100,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Owens 32-01",
    "Latitude": 31.36214,
    "Longitude": -101.92257,
    "TotalBaseWaterVolume": 255364,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Kaleigh Dawn #4213",
    "Latitude": 31.4792,
    "Longitude": -102.20548,
    "TotalBaseWaterVolume": 1152820,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "H S A 0450W",
    "Latitude": 31.5410134,
    "Longitude": -102.9526358,
    "TotalBaseWaterVolume": 11802,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Hunter 006",
    "Latitude": 31.454331,
    "Longitude": -103.437299,
    "TotalBaseWaterVolume": 129990,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "Ivestor 57 SL 7H",
    "Latitude": 35.38,
    "Longitude": -100.22,
    "TotalBaseWaterVolume": 4479103,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "GWO 1732",
    "Latitude": 31.6612759,
    "Longitude": -103.0025556,
    "TotalBaseWaterVolume": 10836,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Vinson Fee G 34H",
    "Latitude": 33.01273,
    "Longitude": -97.45141,
    "TotalBaseWaterVolume": 6120319.8,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BVX OPerating Inc.",
    "WellName": "Magruder #1",
    "Latitude": 32.08896253,
    "Longitude": -102.7369251,
    "TotalBaseWaterVolume": 55146,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hamilton C Unit #1H",
    "Latitude": 33.568372,
    "Longitude": -97.483583,
    "TotalBaseWaterVolume": 5171670,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "University Waddell 323",
    "Latitude": 31.52754,
    "Longitude": -102.44608,
    "TotalBaseWaterVolume": 127575.8633,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "University 52-10 3H",
    "Latitude": 31.06535833,
    "Longitude": -101.0076111,
    "TotalBaseWaterVolume": 6882549,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 527",
    "Latitude": 31.997642,
    "Longitude": -102.640981,
    "TotalBaseWaterVolume": 182216,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Txl South Unit 4713HU",
    "Latitude": 31.81506,
    "Longitude": -102.72557,
    "TotalBaseWaterVolume": 1032444,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "GS Andector Unit F-205",
    "Latitude": 32.019653,
    "Longitude": -102.709456,
    "TotalBaseWaterVolume": 142508,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Madison 32 #1",
    "Latitude": 31.897,
    "Longitude": -101.554,
    "TotalBaseWaterVolume": 1093428,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Brothers Unit #7H",
    "Latitude": 29.329503,
    "Longitude": -97.427925,
    "TotalBaseWaterVolume": 6759564,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "S. B. STREET OPERATING, INC.",
    "WellName": "Norman #1S",
    "Latitude": 33.15010692,
    "Longitude": -99.78617471,
    "TotalBaseWaterVolume": 13734,
    "StateName": "Texas",
    "CountyName": "Haskell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "M & M Ranch C 11H",
    "Latitude": 32.51316,
    "Longitude": -97.7125,
    "TotalBaseWaterVolume": 3389064,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Sarah Hyman 77",
    "Latitude": 32.117353,
    "Longitude": -101.5275,
    "TotalBaseWaterVolume": 318318,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Pecan B 3040I",
    "Latitude": 31.39401,
    "Longitude": -101.18675,
    "TotalBaseWaterVolume": 901454,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cheyenne Petroleum Company",
    "WellName": "Zizinia 5H",
    "Latitude": 28.61254,
    "Longitude": -98.85983,
    "TotalBaseWaterVolume": 5993190,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Matador Production Company",
    "WellName": "Northcut A #4H",
    "Latitude": 28.463134,
    "Longitude": -99.179965,
    "TotalBaseWaterVolume": 5664276,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Ludeman 1401H",
    "Latitude": 31.923006,
    "Longitude": -103.421169,
    "TotalBaseWaterVolume": 5531457,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-15 #2",
    "Latitude": 32.41453851,
    "Longitude": -102.1778845,
    "TotalBaseWaterVolume": 1073103,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Hecker/Well No. 22",
    "Latitude": 32.37762,
    "Longitude": -101.97282,
    "TotalBaseWaterVolume": 755790,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Warhawk 1917",
    "Latitude": 32.231403,
    "Longitude": -102.194292,
    "TotalBaseWaterVolume": 595370,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Doggett #2",
    "Latitude": 32.17555154,
    "Longitude": -101.7043787,
    "TotalBaseWaterVolume": 1363071,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "E.G.L. Resources, Inc.",
    "WellName": "Spanish Trail #3813",
    "Latitude": 31.940883,
    "Longitude": -102.167764,
    "TotalBaseWaterVolume": 1300992,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Midland 'BB' Fee 3112M",
    "Latitude": 31.89388,
    "Longitude": -102.10439,
    "TotalBaseWaterVolume": 635768,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Midland 'BB' Fee 3112M",
    "Latitude": 31.89388,
    "Longitude": -102.10439,
    "TotalBaseWaterVolume": 635768,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Leonard B #5",
    "Latitude": 32.00750924,
    "Longitude": -101.9454154,
    "TotalBaseWaterVolume": 1104579,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #14",
    "Latitude": 30.7624991,
    "Longitude": -97.0222081,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #15",
    "Latitude": 30.7616744,
    "Longitude": -97.022225,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #16",
    "Latitude": 30.7617408,
    "Longitude": -97.0231775,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #17",
    "Latitude": 30.7610614,
    "Longitude": -97.0237195,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Price Operating, LLC",
    "WellName": "Tumlinson Landcastle #25",
    "Latitude": 30.7576055,
    "Longitude": -97.0238778,
    "TotalBaseWaterVolume": 18900,
    "StateName": "Texas",
    "CountyName": "Milam"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 5002 (PA)",
    "Latitude": 32.42784,
    "Longitude": -101.04618,
    "TotalBaseWaterVolume": 30954,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Enduring Resources LLC",
    "WellName": "UL 47-48 #1805H",
    "Latitude": 31.09144,
    "Longitude": -101.34207,
    "TotalBaseWaterVolume": 5911546,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Huckaby 26 2",
    "Latitude": 31.23780967,
    "Longitude": -101.9248351,
    "TotalBaseWaterVolume": 1231234,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Huckaby 26 #3",
    "Latitude": 31.23580666,
    "Longitude": -101.9163017,
    "TotalBaseWaterVolume": 1315923,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Virginia 2",
    "Latitude": 31.39889,
    "Longitude": -102.025,
    "TotalBaseWaterVolume": 1160477,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W.T. Waggoner Estate",
    "WellName": "Waggoner Bluff Creek A-5",
    "Latitude": 34.01395,
    "Longitude": -98.939891,
    "TotalBaseWaterVolume": 10920,
    "StateName": "Texas",
    "CountyName": "Wichita"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "3 Bar Shallow Unit 103H",
    "Latitude": 32.144,
    "Longitude": -102.824,
    "TotalBaseWaterVolume": 5482764,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240-2805",
    "Latitude": 32.267002,
    "Longitude": -102.224097,
    "TotalBaseWaterVolume": 1437996,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ring Energy, Inc.",
    "WellName": "Fisher D 1",
    "Latitude": 32.43502,
    "Longitude": -102.64084,
    "TotalBaseWaterVolume": 124320,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EF Energy, LLC",
    "WellName": "Davis Ranch  1H",
    "Latitude": 28.781486,
    "Longitude": -98.722864,
    "TotalBaseWaterVolume": 2964045,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hamilton C Unit #2H",
    "Latitude": 33.568422,
    "Longitude": -97.483639,
    "TotalBaseWaterVolume": 5346222,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hamilton D Unit #1H",
    "Latitude": 33.568475,
    "Longitude": -97.483694,
    "TotalBaseWaterVolume": 5097330,
    "StateName": "Texas",
    "CountyName": "Cooke"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "GHB Cowden #169",
    "Latitude": 31.2995687,
    "Longitude": -102.5316614,
    "TotalBaseWaterVolume": 34272,
    "StateName": "Texas",
    "CountyName": "Crance"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "UnivDebbie 2913",
    "Latitude": 31.46050481,
    "Longitude": -102.4846244,
    "TotalBaseWaterVolume": 229273,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark A (B&S)  #3561",
    "Latitude": 33.480529,
    "Longitude": -101.494258,
    "TotalBaseWaterVolume": 38225,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Rancho Encantado 14H",
    "Latitude": 28.343922,
    "Longitude": -99.477747,
    "TotalBaseWaterVolume": 6312558,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Ferguson McKnight 5264H",
    "Latitude": 28.640219,
    "Longitude": -99.891478,
    "TotalBaseWaterVolume": 3848586,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "East Penwell San Andres Unit/Well No. 1418",
    "Latitude": 31.71205,
    "Longitude": -102.58698,
    "TotalBaseWaterVolume": 13860,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Berry Petroleum",
    "WellName": "Gardendale 10 #14",
    "Latitude": 32.029667,
    "Longitude": -102.310333,
    "TotalBaseWaterVolume": 1614354,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BK #1724",
    "Latitude": 32.050811,
    "Longitude": -102.316611,
    "TotalBaseWaterVolume": 1906601.337,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Otis 7",
    "Latitude": 31.80274,
    "Longitude": -102.36128,
    "TotalBaseWaterVolume": 1817617,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "M. Hilger 16 #1",
    "Latitude": 31.95114,
    "Longitude": -101.56829,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Barbee 92L",
    "Latitude": 31.65665,
    "Longitude": -101.32275,
    "TotalBaseWaterVolume": 1660596,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI Driver 28 #6",
    "Latitude": 31.80946305,
    "Longitude": -101.5097705,
    "TotalBaseWaterVolume": 3098130,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Dreyer Unit #11H",
    "Latitude": 29.375806,
    "Longitude": -97.28275,
    "TotalBaseWaterVolume": 6038760,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PPC Operating Company LLC",
    "WellName": "Tamale 1",
    "Latitude": 33.15859,
    "Longitude": -99.92948,
    "TotalBaseWaterVolume": 61148,
    "StateName": "Texas",
    "CountyName": "Haskell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chaparral Energy, LLC",
    "WellName": "Wright",
    "Latitude": 35.8652885,
    "Longitude": -100.2637172,
    "TotalBaseWaterVolume": 6640466,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Three Rivers Operating Co II LLC",
    "WellName": "Adams Legacy 4714",
    "Latitude": 32.214846,
    "Longitude": -101.3230131,
    "TotalBaseWaterVolume": 668052,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texas American Resources Company",
    "WellName": "Watts 103H",
    "Latitude": 28.576986,
    "Longitude": -99.349065,
    "TotalBaseWaterVolume": 3790595,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Texas American Resources Company",
    "WellName": "Watts 104H",
    "Latitude": 28.577093,
    "Longitude": -99.348845,
    "TotalBaseWaterVolume": 2253134,
    "StateName": "Texas",
    "CountyName": "La Salle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legacy Reserves Operating LP",
    "WellName": "June T Sanders #16",
    "Latitude": 31.7348698,
    "Longitude": -102.201211,
    "TotalBaseWaterVolume": 993839,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "WOODY BROTHERS (SA) 2H",
    "Latitude": 32.8515469,
    "Longitude": -97.698594,
    "TotalBaseWaterVolume": 4389245,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Keystone Petroleum NM LLC",
    "WellName": "Winfield Ranch 132-13 1",
    "Latitude": 28.6324,
    "Longitude": -93.23128,
    "TotalBaseWaterVolume": 493198,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Arabella Petroleum",
    "WellName": "SM Prewitt 1H",
    "Latitude": 31.319836,
    "Longitude": -103.60322,
    "TotalBaseWaterVolume": 1632148,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Hodges 39-5H",
    "Latitude": 36.0424,
    "Longitude": -100.70582,
    "TotalBaseWaterVolume": 1381836,
    "StateName": "Texas",
    "CountyName": "Roberts"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Bloxom 20 #3",
    "Latitude": 31.22150814,
    "Longitude": -101.9717694,
    "TotalBaseWaterVolume": 857545,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cimarex Energy Co.",
    "WellName": "Flintlock 34-144 #1H",
    "Latitude": 31.340433,
    "Longitude": -103.264858,
    "TotalBaseWaterVolume": 1205808,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "YWCU 4537",
    "Latitude": 32.969195,
    "Longitude": -102.840117,
    "TotalBaseWaterVolume": 10686,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Diamond H State 22H",
    "Latitude": 28.3778676,
    "Longitude": -99.5784522,
    "TotalBaseWaterVolume": 5295066,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Crimson Energy Partners III, LLC",
    "WellName": "Williams Minerals B #1H",
    "Latitude": 30.89268,
    "Longitude": -96.33662,
    "TotalBaseWaterVolume": 2815932,
    "StateName": "Texas",
    "CountyName": "Brazos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jones Energy llc",
    "WellName": "Shell Fee 13-8H",
    "Latitude": 35.76378,
    "Longitude": -100.220169,
    "TotalBaseWaterVolume": 2761918,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Hooks 2",
    "Latitude": 29.2,
    "Longitude": -97.403889,
    "TotalBaseWaterVolume": 3451375,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 40H",
    "Latitude": 28.2966861,
    "Longitude": -99.8327333,
    "TotalBaseWaterVolume": 6923145,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Gandu H-205",
    "Latitude": 32.020256,
    "Longitude": -102.706856,
    "TotalBaseWaterVolume": 147872,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Crown Royal #104",
    "Latitude": 32.05223,
    "Longitude": -102.2896,
    "TotalBaseWaterVolume": 1728678,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #283",
    "Latitude": 32.8965193,
    "Longitude": -102.889758,
    "TotalBaseWaterVolume": 126168,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Brunson 30 #3",
    "Latitude": 31.88898861,
    "Longitude": -101.6852524,
    "TotalBaseWaterVolume": 1351756,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Anderson 26 #9",
    "Latitude": 31.92,
    "Longitude": -101.518,
    "TotalBaseWaterVolume": 1209229,
    "StateName": "Texas",
    "CountyName": "Glasscok"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Craig/Well No. 8",
    "Latitude": 31.71045,
    "Longitude": -101.39978,
    "TotalBaseWaterVolume": 2339988,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Bp `T` 3",
    "Latitude": 30.52185,
    "Longitude": -94.3055,
    "TotalBaseWaterVolume": 93030,
    "StateName": "Texas",
    "CountyName": "Hardin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mathers Ranch 1518-1H",
    "Latitude": 35.91,
    "Longitude": -100.24,
    "TotalBaseWaterVolume": 8000000,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Guitar 25 #2",
    "Latitude": 32.1741,
    "Longitude": -101.3929,
    "TotalBaseWaterVolume": 882086,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Loudamy 45 45o",
    "Latitude": 32.34352,
    "Longitude": -101.57489,
    "TotalBaseWaterVolume": 744660,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Faudree #09H",
    "Latitude": 31.1232773,
    "Longitude": -101.0209371,
    "TotalBaseWaterVolume": 12047532,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Mobil D Unit 1H",
    "Latitude": 28.712878,
    "Longitude": -98.027068,
    "TotalBaseWaterVolume": 2252922,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Maurer McFarland 1H",
    "Latitude": 28.903918,
    "Longitude": -98.021931,
    "TotalBaseWaterVolume": 2694090,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Schulz Estate 02 01H",
    "Latitude": 28.528124,
    "Longitude": -98.197553,
    "TotalBaseWaterVolume": 3135720,
    "StateName": "Texas",
    "CountyName": "Live Oaks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Schulz Estate 01 01H",
    "Latitude": 28.528117,
    "Longitude": -98.19746,
    "TotalBaseWaterVolume": 3304644,
    "StateName": "Texas",
    "CountyName": "Live Oaks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Resolute Natural Resources",
    "WellName": "O'Brien 43#6",
    "Latitude": 32.3518697,
    "Longitude": -101.7071388,
    "TotalBaseWaterVolume": 815514,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "NOA TXL Fee 3702M",
    "Latitude": 31.96902,
    "Longitude": -102.26751,
    "TotalBaseWaterVolume": 1036749,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU3 610",
    "Latitude": 31.65585,
    "Longitude": -102.15173,
    "TotalBaseWaterVolume": 1030827,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Black Stone `21` 2H",
    "Latitude": 36.09984,
    "Longitude": -100.97984,
    "TotalBaseWaterVolume": 662369,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Pool `167` 7",
    "Latitude": 31.24084,
    "Longitude": -101.28389,
    "TotalBaseWaterVolume": 1180019,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Lenox 2 #1",
    "Latitude": 31.3206605,
    "Longitude": -103.3788724,
    "TotalBaseWaterVolume": 967848,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Peck State 258 #2",
    "Latitude": 31.2951388,
    "Longitude": -103.5122597,
    "TotalBaseWaterVolume": 822990,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Diamond Trio 1H",
    "Latitude": 30.839215,
    "Longitude": -96.594157,
    "TotalBaseWaterVolume": 5329926,
    "StateName": "Texas",
    "CountyName": "Robertson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Steller Energy & Investment Corp",
    "WellName": "Foster #603",
    "Latitude": 31.97645,
    "Longitude": -101.22802,
    "TotalBaseWaterVolume": 876078,
    "StateName": "Texas",
    "CountyName": "Sterling"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Owens 30 1",
    "Latitude": 31.38553,
    "Longitude": -101.93797,
    "TotalBaseWaterVolume": 152846,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Dusek #6",
    "Latitude": 31.628739,
    "Longitude": -102.010331,
    "TotalBaseWaterVolume": 1851466,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Sealy Smith Foundation 1021",
    "Latitude": 31.633742,
    "Longitude": -102.878658,
    "TotalBaseWaterVolume": 442414,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Briscoe G24H",
    "Latitude": 28.1155422,
    "Longitude": -99.9134773,
    "TotalBaseWaterVolume": 7272804,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Alexandra 47-2",
    "Latitude": 35.358559,
    "Longitude": -100.118797,
    "TotalBaseWaterVolume": 1198783,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Hammond Unit 1H",
    "Latitude": 33.43,
    "Longitude": -97.67,
    "TotalBaseWaterVolume": 5694444,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Cheek Unit 1H",
    "Latitude": 33.43,
    "Longitude": -97.67,
    "TotalBaseWaterVolume": 5938798,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "BRU 5256",
    "Latitude": 33.05207,
    "Longitude": -102.75946,
    "TotalBaseWaterVolume": 29641,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Killam Mineral Fee 16-3",
    "Latitude": 27.22854,
    "Longitude": -99.0411,
    "TotalBaseWaterVolume": 40740,
    "StateName": "Texas",
    "CountyName": "Zapata"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Summit Petroleum LLC",
    "WellName": "Sylvia #1",
    "Latitude": 31.4089636,
    "Longitude": -102.0823868,
    "TotalBaseWaterVolume": 340282,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Seewald #1H",
    "Latitude": 28.792111,
    "Longitude": -98.279008,
    "TotalBaseWaterVolume": 9330187,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Brymer 1H",
    "Latitude": 28.792078,
    "Longitude": -98.279067,
    "TotalBaseWaterVolume": 9821524,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Mcelroy J T Consolidated 1363",
    "Latitude": 31.44273,
    "Longitude": -102.32292,
    "TotalBaseWaterVolume": 37262,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Barrett Unit A 1",
    "Latitude": 29.046683,
    "Longitude": -97.606628,
    "TotalBaseWaterVolume": 2341251,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Betty Jo 39 #4",
    "Latitude": 31.892,
    "Longitude": -101.527,
    "TotalBaseWaterVolume": 882252,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Halcon Resources Corporation",
    "WellName": "Will D Smith 1",
    "Latitude": 30.750601,
    "Longitude": -95.900216,
    "TotalBaseWaterVolume": 15836184,
    "StateName": "Texas",
    "CountyName": "Grimes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Faudree #10H",
    "Latitude": 31.1232773,
    "Longitude": -101.020808,
    "TotalBaseWaterVolume": 12097302,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "Bush Unit 2H",
    "Latitude": 32.50883,
    "Longitude": -97.25615,
    "TotalBaseWaterVolume": 1743042,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Joseph Unit #8H",
    "Latitude": 28.848836,
    "Longitude": -98.110311,
    "TotalBaseWaterVolume": 4448136,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Bernice 2H",
    "Latitude": 28.9643,
    "Longitude": -98.01654,
    "TotalBaseWaterVolume": 3940659,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Bernice 1H",
    "Latitude": 28.96364,
    "Longitude": -98.01663,
    "TotalBaseWaterVolume": 3913334,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Sinor Ranch #5",
    "Latitude": 28.52657,
    "Longitude": -98.225695,
    "TotalBaseWaterVolume": 1673028,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Plomero Ranch 4",
    "Latitude": 28.558611,
    "Longitude": -98.308611,
    "TotalBaseWaterVolume": 1929773,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Wodbine Acquisition LLC",
    "WellName": "Dunman Wilson A 2H",
    "Latitude": 30.8684,
    "Longitude": -96.16825,
    "TotalBaseWaterVolume": 2564226,
    "StateName": "Texas",
    "CountyName": "Madison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W&T Offshore, Inc.",
    "WellName": "Chablis 5H",
    "Latitude": 32.44902,
    "Longitude": -102.16597,
    "TotalBaseWaterVolume": 19105,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BE #603",
    "Latitude": 32.058089,
    "Longitude": -102.277611,
    "TotalBaseWaterVolume": 1688852.849,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "North Creek A 42J",
    "Latitude": 31.38198,
    "Longitude": -101.38187,
    "TotalBaseWaterVolume": 904848,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Company, Inc",
    "WellName": "Worsham 6-14 #1H",
    "Latitude": 31.398804,
    "Longitude": -103.3347,
    "TotalBaseWaterVolume": 2166105,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Bears 1H",
    "Latitude": 31.64722,
    "Longitude": -94.21291,
    "TotalBaseWaterVolume": 18778192,
    "StateName": "Texas",
    "CountyName": "San Augustine"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "Ivestor 57 SL 8H",
    "Latitude": 35.38,
    "Longitude": -100.22,
    "TotalBaseWaterVolume": 4511556,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 4358",
    "Latitude": 32.975492,
    "Longitude": -102.884437,
    "TotalBaseWaterVolume": 35801,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Woodbury 1V",
    "Latitude": 28.7183779,
    "Longitude": -99.94939899,
    "TotalBaseWaterVolume": 183096,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "BRISCOE COCHINA WEST RANCH 27H",
    "Latitude": 28.3820251,
    "Longitude": -99.515689,
    "TotalBaseWaterVolume": 4541964,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlackBrush O & G, Inc.",
    "WellName": "Oppenheimer A #1H",
    "Latitude": 28.82767,
    "Longitude": -98.77666,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Curry 14 #1",
    "Latitude": 31.751841,
    "Longitude": -101.364129,
    "TotalBaseWaterVolume": 2249940,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Hymans, Sarah 058",
    "Latitude": 32.119092,
    "Longitude": -101.273342,
    "TotalBaseWaterVolume": 318570,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Molopo Energy Texas, LLC",
    "WellName": "Linthicum Washington 242H",
    "Latitude": 31.11909,
    "Longitude": -101.1396,
    "TotalBaseWaterVolume": 9651012,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "Bush Unit 3H",
    "Latitude": 32.5073,
    "Longitude": -97.25844,
    "TotalBaseWaterVolume": 1917552,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "Bush Unit 4H",
    "Latitude": 32.50716,
    "Longitude": -97.25801,
    "TotalBaseWaterVolume": 1794324,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "Bush Unit 5H",
    "Latitude": 32.50748,
    "Longitude": -97.25838,
    "TotalBaseWaterVolume": 1770468,
    "StateName": "Texas",
    "CountyName": "Johnson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Weddington #2H",
    "Latitude": 28.91461465,
    "Longitude": -98.06474283,
    "TotalBaseWaterVolume": 3975980,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Weddington #3H",
    "Latitude": 28.91466965,
    "Longitude": -98.0647414,
    "TotalBaseWaterVolume": 3975980,
    "StateName": "Texas",
    "CountyName": "Karnes County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Naylor Jones Unit 59 East #1H",
    "Latitude": 28.421122,
    "Longitude": -98.778108,
    "TotalBaseWaterVolume": 6105078,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Thomas 3 17H",
    "Latitude": 35.53105,
    "Longitude": -100.14489,
    "TotalBaseWaterVolume": 3724787,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240C-2630",
    "Latitude": 32.283442,
    "Longitude": -102,
    "TotalBaseWaterVolume": 1418760,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "DVR \"D\" #1H",
    "Latitude": 28.832747,
    "Longitude": -98.2983,
    "TotalBaseWaterVolume": 3578773,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W N Waddell 1402",
    "Latitude": 31.540072,
    "Longitude": -102.447398,
    "TotalBaseWaterVolume": 68178,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Finley Resources, Inc.",
    "WellName": "Pintail 39-2",
    "Latitude": 31.908414,
    "Longitude": -104.052033,
    "TotalBaseWaterVolume": 18906,
    "StateName": "Texas",
    "CountyName": "Culberson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "D3-D1-SCHWARZ `A` SA 1H",
    "Latitude": 33.15422,
    "Longitude": -97.32331,
    "TotalBaseWaterVolume": 6290844,
    "StateName": "Texas",
    "CountyName": "DENTON"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Krause B 2H",
    "Latitude": 29.187025,
    "Longitude": -97.429578,
    "TotalBaseWaterVolume": 4027783,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Krause B 4H",
    "Latitude": 29.186839,
    "Longitude": -97.429246,
    "TotalBaseWaterVolume": 3748466,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Kone #13H",
    "Latitude": 28.437272,
    "Longitude": -99.5749,
    "TotalBaseWaterVolume": 10730328,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Kone #14H",
    "Latitude": 28.437331,
    "Longitude": -99.574856,
    "TotalBaseWaterVolume": 7853160,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Kone #15H",
    "Latitude": 28.437389,
    "Longitude": -99.574811,
    "TotalBaseWaterVolume": 10724490,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Kone #16H",
    "Latitude": 28.437447,
    "Longitude": -99.574772,
    "TotalBaseWaterVolume": 8481396,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee \"B\" 4102M",
    "Latitude": 31.70508444,
    "Longitude": -102.3612981,
    "TotalBaseWaterVolume": 911392,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Round Top (Palo Pinto) Unit 176",
    "Latitude": 32.86517,
    "Longitude": -100.2707,
    "TotalBaseWaterVolume": 41412,
    "StateName": "Texas",
    "CountyName": "Fisher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Berry Petroleum",
    "WellName": "Blalock 1214",
    "Latitude": 31.926941,
    "Longitude": -101.705705,
    "TotalBaseWaterVolume": 1272516,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Currie A 410",
    "Latitude": 31.79566425,
    "Longitude": -101.3024759,
    "TotalBaseWaterVolume": 1390934,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Barbee C-B (Alloc) 1 1HU",
    "Latitude": 31.65768056,
    "Longitude": -101.3300556,
    "TotalBaseWaterVolume": 9501825,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Anderson 15-15 F",
    "Latitude": 32.253,
    "Longitude": -101.67474,
    "TotalBaseWaterVolume": 693914,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Murray -B-/Well No. 12W",
    "Latitude": 32.28915,
    "Longitude": -101.20926,
    "TotalBaseWaterVolume": 30702,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Walker 2-1",
    "Latitude": 32.366725,
    "Longitude": -101.444195,
    "TotalBaseWaterVolume": 1061802,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Loudamy 45 45N",
    "Latitude": 32.34326,
    "Longitude": -101.57991,
    "TotalBaseWaterVolume": 338604,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Talisman Energy USA Inc.",
    "WellName": "Regmund GU1 B1H",
    "Latitude": 28.7422944,
    "Longitude": -97.9435611,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Storey Unit 2 1H",
    "Latitude": 28.200241,
    "Longitude": -98.583262,
    "TotalBaseWaterVolume": 2798502,
    "StateName": "Texas",
    "CountyName": "LaSalle"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Bateman 01 01H ?",
    "Latitude": 28.396395,
    "Longitude": -98.26942,
    "TotalBaseWaterVolume": 2818578,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "MDJ C27-1 1H",
    "Latitude": 31.7517911,
    "Longitude": -103.5407805,
    "TotalBaseWaterVolume": 1124632,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Jones-Holton/Well No. 51",
    "Latitude": 32.350487,
    "Longitude": -102.00995,
    "TotalBaseWaterVolume": 2045820,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly 1738",
    "Latitude": 32.13285889,
    "Longitude": -102.1741657,
    "TotalBaseWaterVolume": 1513092,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "PFU2 1840",
    "Latitude": 31.83994,
    "Longitude": -102.13286,
    "TotalBaseWaterVolume": 1345907,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Rogers 386 #2H",
    "Latitude": 36.159086,
    "Longitude": -100.437686,
    "TotalBaseWaterVolume": 1426316,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Skiles 2H ?",
    "Latitude": 32.680173,
    "Longitude": -97.783548,
    "TotalBaseWaterVolume": 3247978,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Comstock Oil & Gas",
    "WellName": "Trigger 40 #3",
    "Latitude": 31.347874,
    "Longitude": -103.535136,
    "TotalBaseWaterVolume": 1779120,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W&T Offshore, Inc.",
    "WellName": "Black Stone Mcmahon A-28 #1H",
    "Latitude": 31.429973,
    "Longitude": -94.043678,
    "TotalBaseWaterVolume": 5035212,
    "StateName": "Texas",
    "CountyName": "San Augustine"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Milne Carroll Unit A 12H",
    "Latitude": 32.572317,
    "Longitude": -97.322019,
    "TotalBaseWaterVolume": 4037191.2,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "H S A 0475",
    "Latitude": 31.5375816,
    "Longitude": -102.9513979,
    "TotalBaseWaterVolume": 11676,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "H S A 0477",
    "Latitude": 31.5341105,
    "Longitude": -102.9500907,
    "TotalBaseWaterVolume": 11214,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 3758",
    "Latitude": 33.01411,
    "Longitude": -102.88041,
    "TotalBaseWaterVolume": 126882,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Todd, J.O. Gas Unit 31H",
    "Latitude": 32.25872564,
    "Longitude": -94.72381775,
    "TotalBaseWaterVolume": 6377585,
    "StateName": "Texas",
    "CountyName": "Rusk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Harris, Sylvan Gas Unit 7H",
    "Latitude": 32.14996,
    "Longitude": -94.5170212,
    "TotalBaseWaterVolume": 5423009,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "John M. Clark, Inc.",
    "WellName": "Upshur 60 Well #1",
    "Latitude": 33.4169471,
    "Longitude": -99.1424483,
    "TotalBaseWaterVolume": 32616,
    "StateName": "Texas",
    "CountyName": "Baylor"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Tecpetrol Operating LLC",
    "WellName": "Sullivan Deep C6",
    "Latitude": 27.203617,
    "Longitude": -98.019228,
    "TotalBaseWaterVolume": 80167,
    "StateName": "Texas",
    "CountyName": "Brooks"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mcknight M B 265H",
    "Latitude": 31.55997,
    "Longitude": -102.66713,
    "TotalBaseWaterVolume": 1494562,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "M.B Mcknight 273H",
    "Latitude": 31.55206,
    "Longitude": -102.70067,
    "TotalBaseWaterVolume": 2763164,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "W N Waddell 1403",
    "Latitude": 31.540948,
    "Longitude": -102.444124,
    "TotalBaseWaterVolume": 49231,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Element Petro Operating II, LLC",
    "WellName": "Lindsey 24 #1",
    "Latitude": 32.544498,
    "Longitude": -102.133283,
    "TotalBaseWaterVolume": 1350678,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 38H",
    "Latitude": 28.2966861,
    "Longitude": -99.832828,
    "TotalBaseWaterVolume": 7014876,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "La Bandera Ranch Unit A 1H",
    "Latitude": 28.3610408,
    "Longitude": -100.0031691,
    "TotalBaseWaterVolume": 5499499,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BK #1722",
    "Latitude": 32.048333,
    "Longitude": -102.327875,
    "TotalBaseWaterVolume": 1886522.417,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee B 4102E",
    "Latitude": 31.70508444,
    "Longitude": -102.3612981,
    "TotalBaseWaterVolume": 911392,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "GS Andector Unit J-205",
    "Latitude": 32.021892,
    "Longitude": -102.699819,
    "TotalBaseWaterVolume": 150572,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Round Top (Palo Pinto) Unit 193",
    "Latitude": 32.86106,
    "Longitude": -100.29544,
    "TotalBaseWaterVolume": 43134,
    "StateName": "Texas",
    "CountyName": "Fisher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlackBrush O & G, Inc.",
    "WellName": "Oppenheimer A #3",
    "Latitude": 28.82392,
    "Longitude": -99.23543,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Frio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Hardy 18 #9",
    "Latitude": 31.855,
    "Longitude": -101.458,
    "TotalBaseWaterVolume": 916776,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Ballenger 3203",
    "Latitude": 31.92625,
    "Longitude": -101.46697,
    "TotalBaseWaterVolume": 1083348,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Cornfield Unit #3H",
    "Latitude": 29.222667,
    "Longitude": -97.519917,
    "TotalBaseWaterVolume": 6152832,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Brisbin 12 1H",
    "Latitude": 35.86413,
    "Longitude": -102.43358,
    "TotalBaseWaterVolume": 3813402,
    "StateName": "Texas",
    "CountyName": "Hartley"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "LeNorman Operating LLC",
    "WellName": "Ruth 87-1H",
    "Latitude": 35.823,
    "Longitude": -100.275,
    "TotalBaseWaterVolume": 3578661,
    "StateName": "Texas",
    "CountyName": "Hemphill County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "George A 45 8H",
    "Latitude": 35.81296,
    "Longitude": -100.37105,
    "TotalBaseWaterVolume": 2859948,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "M & M Ranch D 15H",
    "Latitude": 32.51349,
    "Longitude": -97.70276,
    "TotalBaseWaterVolume": 3053148,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Murray -B-/Well No. 13",
    "Latitude": 32.29325,
    "Longitude": -101.21021,
    "TotalBaseWaterVolume": 30534,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "Hall 43 #2",
    "Latitude": 32.0879775,
    "Longitude": -101.6404925,
    "TotalBaseWaterVolume": 1969674,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg `6` 11",
    "Latitude": 31.31453,
    "Longitude": -100.95129,
    "TotalBaseWaterVolume": 623070,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Rife Energy Operating",
    "WellName": "Briscoe #1",
    "Latitude": 33.4361937,
    "Longitude": -98.2765018,
    "TotalBaseWaterVolume": 79464,
    "StateName": "Texas",
    "CountyName": "Jack"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BBX Operating",
    "WellName": "Elta Williams #1",
    "Latitude": 30.813498,
    "Longitude": -94.14566,
    "TotalBaseWaterVolume": 147252,
    "StateName": "Texas",
    "CountyName": "Jasper"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Turnbull 4-13H",
    "Latitude": 28.778881,
    "Longitude": -98.034313,
    "TotalBaseWaterVolume": 3647144,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Turnbull 4-12H",
    "Latitude": 28.778812,
    "Longitude": -98.034312,
    "TotalBaseWaterVolume": 3485006,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Ludeman  1401H",
    "Latitude": 31.923006,
    "Longitude": -103.421169,
    "TotalBaseWaterVolume": 5531457,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Mabee Foundation #5",
    "Latitude": 32.08690624,
    "Longitude": -102.0058957,
    "TotalBaseWaterVolume": 1067270,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "LNE 9 #4",
    "Latitude": 32.36029,
    "Longitude": -101.90129,
    "TotalBaseWaterVolume": 1269366,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Cross Bar Ranch 3013W",
    "Latitude": 32.1187775,
    "Longitude": -102.1940375,
    "TotalBaseWaterVolume": 1636105.153,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Liberty Dyer 2 #4",
    "Latitude": 32.2418,
    "Longitude": -101.4919,
    "TotalBaseWaterVolume": 941904,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Munn #2609",
    "Latitude": 31.99659,
    "Longitude": -102.27978,
    "TotalBaseWaterVolume": 2022888,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST NW 36-7R",
    "Latitude": 31.9813,
    "Longitude": -102.262653,
    "TotalBaseWaterVolume": 1693062,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Evans A Unit #2H",
    "Latitude": 33.594956,
    "Longitude": -97.857656,
    "TotalBaseWaterVolume": 3826326,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Rogers 386 #3H",
    "Latitude": 36.159033,
    "Longitude": -100.614592,
    "TotalBaseWaterVolume": 1508398,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Charles Bedinger A (AL) 3H",
    "Latitude": 32.7933754,
    "Longitude": -97.723805,
    "TotalBaseWaterVolume": 3727868,
    "StateName": "Texas",
    "CountyName": "Parker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "North Creek I 68E",
    "Latitude": 31.35973,
    "Longitude": -101.38088,
    "TotalBaseWaterVolume": 1027824,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Barbee 72-1 #1H",
    "Latitude": 31.3856793,
    "Longitude": -103.7000622,
    "TotalBaseWaterVolume": 5422312,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "HighMount Exploration & Production",
    "WellName": "Thackerson 35 1",
    "Latitude": 30.94197,
    "Longitude": -100.81508,
    "TotalBaseWaterVolume": 1241969,
    "StateName": "Texas",
    "CountyName": "Schleicher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Edwards Riverhills C Unit 27H",
    "Latitude": 32.68843,
    "Longitude": -97.403,
    "TotalBaseWaterVolume": 4227392.4,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "H S A 0483",
    "Latitude": 31.5444924,
    "Longitude": -102.9539602,
    "TotalBaseWaterVolume": 12348,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "H S A 1156",
    "Latitude": 31.5454539,
    "Longitude": -102.9655194,
    "TotalBaseWaterVolume": 10332,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Cerrito State 29H",
    "Latitude": 27.571783,
    "Longitude": -99.272049,
    "TotalBaseWaterVolume": 114946,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Escondido Resources II, LLC",
    "WellName": "Cerrito-Sanchez A State Unit 28H",
    "Latitude": 27.571782,
    "Longitude": -99.272033,
    "TotalBaseWaterVolume": 119245,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Dewbre Petroleum Corporation",
    "WellName": "Duson A 2",
    "Latitude": 29.2401075,
    "Longitude": -96.2550975,
    "TotalBaseWaterVolume": 34104,
    "StateName": "Texas",
    "CountyName": "Wharton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Effie Hayes 18-2",
    "Latitude": 35.6,
    "Longitude": -100.16,
    "TotalBaseWaterVolume": 577011,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "Patrick Moczygemba B 1H",
    "Latitude": 29.0251,
    "Longitude": -98.0959,
    "TotalBaseWaterVolume": 6186212,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lonnie Moses B (SA) 9H",
    "Latitude": 33.14533,
    "Longitude": -97.523496,
    "TotalBaseWaterVolume": 3294306,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lonnie Moses B (SA) 10H",
    "Latitude": 33.14544,
    "Longitude": -97.523497,
    "TotalBaseWaterVolume": 2930349,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Lonnie Moses B (SA) 11H",
    "Latitude": 33.145386,
    "Longitude": -97.5234835,
    "TotalBaseWaterVolume": 3853066,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 5436",
    "Latitude": 32.98666,
    "Longitude": -102.92639,
    "TotalBaseWaterVolume": 102942,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "University 7-38 #7",
    "Latitude": 32.35701446,
    "Longitude": -102.215901,
    "TotalBaseWaterVolume": 1543758,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Mabee 240-1405",
    "Latitude": 32.262707,
    "Longitude": -102.275857,
    "TotalBaseWaterVolume": 1536360,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "Wood, Clark 'A' (B&S) #3563",
    "Latitude": 33.480537,
    "Longitude": -101.489929,
    "TotalBaseWaterVolume": 37180,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "D3-D1-SCHWARZ `A` SA 3H",
    "Latitude": 33.149637,
    "Longitude": -97.320764,
    "TotalBaseWaterVolume": 7272132,
    "StateName": "Texas",
    "CountyName": "DENTON"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Lewis Energy Group",
    "WellName": "Gates 11-DR No. 78H",
    "Latitude": 28.2078,
    "Longitude": -99.7843,
    "TotalBaseWaterVolume": 3252858,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Killam Oil Co., Ltd.",
    "WellName": "DCR-STATE 76/52 #10",
    "Latitude": 27.9085936,
    "Longitude": -98.6797056,
    "TotalBaseWaterVolume": 18774,
    "StateName": "Texas",
    "CountyName": "Duval"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #309",
    "Latitude": 32.8739149,
    "Longitude": -102.9365391,
    "TotalBaseWaterVolume": 98616,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -11-/Well No. 1",
    "Latitude": 31.72025,
    "Longitude": -101.56548,
    "TotalBaseWaterVolume": 2336082,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Currie E 4115",
    "Latitude": 31.81459734,
    "Longitude": -101.333637,
    "TotalBaseWaterVolume": 1316077,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Laredo Petroleum, Inc.",
    "WellName": "LPI-Hoch 32 #1",
    "Latitude": 31.78927,
    "Longitude": -101.5305983,
    "TotalBaseWaterVolume": 2068075,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Preston A Unit #6H",
    "Latitude": 29.286536,
    "Longitude": -97.451986,
    "TotalBaseWaterVolume": 5738712,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hilbrich Unit #1H",
    "Latitude": 29.206556,
    "Longitude": -97.538417,
    "TotalBaseWaterVolume": 5502672,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jetta Operating Compnay, Inc",
    "WellName": "Cannon #1H",
    "Latitude": 31.02953,
    "Longitude": -93.08512,
    "TotalBaseWaterVolume": 5178600,
    "StateName": "Texas",
    "CountyName": "Grayson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Atlas Energy, L.P.",
    "WellName": "M & M Ranch D 14H",
    "Latitude": 32.51343,
    "Longitude": -97.70293,
    "TotalBaseWaterVolume": 3402126,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stewart 1-2",
    "Latitude": 32.369,
    "Longitude": -101.323,
    "TotalBaseWaterVolume": 706147.9569,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Pecan B 3040P",
    "Latitude": 31.38905,
    "Longitude": -101.18831,
    "TotalBaseWaterVolume": 892458,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hess Corporation",
    "WellName": "Liberatore Ranch B Unit B-1H",
    "Latitude": 28.473942,
    "Longitude": -99.279065,
    "TotalBaseWaterVolume": 3175153,
    "StateName": "Texas",
    "CountyName": "La Salle County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Abraxas Petroleum Corporation",
    "WellName": "Mustang 1H",
    "Latitude": 28.6407065,
    "Longitude": -98.4820915,
    "TotalBaseWaterVolume": 3956862,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Mabee K6",
    "Latitude": 32.36508,
    "Longitude": -102.19011,
    "TotalBaseWaterVolume": 2216004,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Scharbauer, C. 'A' 2814M",
    "Latitude": 31.89261,
    "Longitude": -102.18907,
    "TotalBaseWaterVolume": 1716024,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 6913 (PA)",
    "Latitude": 32.40851,
    "Longitude": -101.05586,
    "TotalBaseWaterVolume": 16296,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Boedecker A Unit 1H",
    "Latitude": 33.55979,
    "Longitude": -97.93804,
    "TotalBaseWaterVolume": 5347073,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Boedecker B Unit 4H",
    "Latitude": 33.55979,
    "Longitude": -97.93799,
    "TotalBaseWaterVolume": 6028287,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Whiting Petroleum",
    "WellName": "Stewart 3002",
    "Latitude": 31.1879972,
    "Longitude": -103.1756973,
    "TotalBaseWaterVolume": 1514940,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Yow State 38 #2",
    "Latitude": 31.2131912,
    "Longitude": -103.3960317,
    "TotalBaseWaterVolume": 0,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Edwards Riverhills C Unit 26H",
    "Latitude": 32.68847,
    "Longitude": -97.40299,
    "TotalBaseWaterVolume": 5190246.6,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hadaway Consulting and Engineering, LLC",
    "WellName": "McKnight Ranch 1321H ?",
    "Latitude": 33.21028,
    "Longitude": -98.35224,
    "TotalBaseWaterVolume": 70326,
    "StateName": "Texas",
    "CountyName": "Throckmorton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate #3053",
    "Latitude": 31.47605939,
    "Longitude": -101.9959447,
    "TotalBaseWaterVolume": 1318043,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Laura Jean 9",
    "Latitude": 31.41266,
    "Longitude": -102.04491,
    "TotalBaseWaterVolume": 1149603,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Braman Minerals 45 011",
    "Latitude": 31.448042,
    "Longitude": -103.459697,
    "TotalBaseWaterVolume": 222012,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Loving Kruse 2",
    "Latitude": 30.230303,
    "Longitude": -96.6711832,
    "TotalBaseWaterVolume": 262710,
    "StateName": "Texas",
    "CountyName": "Washington County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles 3SL-20-3H",
    "Latitude": 35.442616,
    "Longitude": -100.050064,
    "TotalBaseWaterVolume": 6324971,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Stiles 3SL-21-3H",
    "Latitude": 35.442617,
    "Longitude": -100.050022,
    "TotalBaseWaterVolume": 6181799,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "G.D. Hogg #2L",
    "Latitude": 31.7337,
    "Longitude": -102.9476,
    "TotalBaseWaterVolume": 121128,
    "StateName": "Texas",
    "CountyName": "Winkler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Cornell Unit #115",
    "Latitude": 32.9939557,
    "Longitude": -102.8811958,
    "TotalBaseWaterVolume": 118692,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Killam Oil Co., Ltd.",
    "WellName": "Killam 257 #21",
    "Latitude": 27.8502579,
    "Longitude": -98.6958164,
    "TotalBaseWaterVolume": 18774,
    "StateName": "Texas",
    "CountyName": "Duval"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "May Girls 3H",
    "Latitude": 28.709732,
    "Longitude": -98.221479,
    "TotalBaseWaterVolume": 2862033,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "May Girls 1H",
    "Latitude": 28.709644,
    "Longitude": -98.221599,
    "TotalBaseWaterVolume": 3138218,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "May Girls 2H",
    "Latitude": 28.709688,
    "Longitude": -98.221539,
    "TotalBaseWaterVolume": 2906046,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "D3-D1-SCHWARZ `A` SA 2H",
    "Latitude": 33.149635,
    "Longitude": -97.320698,
    "TotalBaseWaterVolume": 3904194,
    "StateName": "Texas",
    "CountyName": "DENTON"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Weigelt A1",
    "Latitude": 29.296806,
    "Longitude": -97.327033,
    "TotalBaseWaterVolume": 3290656,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "King B 1H",
    "Latitude": 28.4482186,
    "Longitude": -99.6520889,
    "TotalBaseWaterVolume": 6404766,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BK #1723",
    "Latitude": 32.049847,
    "Longitude": -102.323958,
    "TotalBaseWaterVolume": 1872597.243,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Mary Ellen 11",
    "Latitude": 31.70602,
    "Longitude": -102.33925,
    "TotalBaseWaterVolume": 1855715,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Louisa #5",
    "Latitude": 31.9925101,
    "Longitude": -102.592612,
    "TotalBaseWaterVolume": 726978,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ICA Energy Operating, LLC",
    "WellName": "Mozart 15 #2",
    "Latitude": 31.824505,
    "Longitude": -102.578097,
    "TotalBaseWaterVolume": 300510,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "RCFU #218",
    "Latitude": 32.8893365,
    "Longitude": -102.8974951,
    "TotalBaseWaterVolume": 98112,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Colorado/Well No. 5",
    "Latitude": 31.65711,
    "Longitude": -101.40511,
    "TotalBaseWaterVolume": 763854,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Barbee 92P",
    "Latitude": 31.65308,
    "Longitude": -101.31072,
    "TotalBaseWaterVolume": 1202250,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Burns 27 6",
    "Latitude": 31.813,
    "Longitude": -101.496,
    "TotalBaseWaterVolume": 1029000,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ironwood Oil and Gas, LLC",
    "WellName": "Lewis 1H",
    "Latitude": 29.5842052,
    "Longitude": -97.2492941,
    "TotalBaseWaterVolume": 3279426,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "La Vernia Oil",
    "WellName": "Alfred Doege",
    "Latitude": 29.38802,
    "Longitude": -98.1116,
    "TotalBaseWaterVolume": 16968,
    "StateName": "Texas",
    "CountyName": "Guadalupe"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "George A 45 Sl 9H",
    "Latitude": 35.81319,
    "Longitude": -100.37017,
    "TotalBaseWaterVolume": 2864358,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "East Mallet Unit 140",
    "Latitude": 33.47911,
    "Longitude": -102.52732,
    "TotalBaseWaterVolume": 20958,
    "StateName": "Texas",
    "CountyName": "Hockley"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Dodge, G.M./Well No. 103 (PA)",
    "Latitude": 32.2935,
    "Longitude": -101.19076,
    "TotalBaseWaterVolume": 63000,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "BR 22 #2",
    "Latitude": 32.36555,
    "Longitude": -101.65362,
    "TotalBaseWaterVolume": 1198638,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Smith 4 1",
    "Latitude": 32.49371,
    "Longitude": -101.41762,
    "TotalBaseWaterVolume": 956424,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Partee Drilling Inc",
    "WellName": "Walleye 1003",
    "Latitude": 32.3491,
    "Longitude": -101.458,
    "TotalBaseWaterVolume": 571074,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Corning 29 #1",
    "Latitude": 32.3797,
    "Longitude": -101.61427,
    "TotalBaseWaterVolume": 877810,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Harland 32 #1",
    "Latitude": 32.1924,
    "Longitude": -101.4003,
    "TotalBaseWaterVolume": 743210,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Alexander 01 02H",
    "Latitude": 28.857094,
    "Longitude": -97.811746,
    "TotalBaseWaterVolume": 2336628,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "MEWBOURNE OIL COMPANY",
    "WellName": "Koch Little 779-1H",
    "Latitude": 36.30258056,
    "Longitude": -100.2421722,
    "TotalBaseWaterVolume": 546384,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Whipple A 2H",
    "Latitude": 28.320253,
    "Longitude": -98.657476,
    "TotalBaseWaterVolume": 2483550,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Richards 25 #4",
    "Latitude": 32.21866204,
    "Longitude": -101.7978817,
    "TotalBaseWaterVolume": 1343536,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Campbell/Well No. 50",
    "Latitude": 32.32448,
    "Longitude": -102.0591,
    "TotalBaseWaterVolume": 1352690,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "E.G.L. Resources, Inc.",
    "WellName": "STO SEC 11 #1102",
    "Latitude": 31.954364,
    "Longitude": -102.166681,
    "TotalBaseWaterVolume": 1506288,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "TXL S 21-1 #2",
    "Latitude": 31.712567,
    "Longitude": -102.010612,
    "TotalBaseWaterVolume": 1605442.118,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST 41-10",
    "Latitude": 31.970483,
    "Longitude": -102.223769,
    "TotalBaseWaterVolume": 1689870,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 4905 (PA)",
    "Latitude": 32.42479,
    "Longitude": -101.04963,
    "TotalBaseWaterVolume": 25158,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Evans A Unit #1H",
    "Latitude": 33.5949,
    "Longitude": -97.857608,
    "TotalBaseWaterVolume": 3605994,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Evans B Unit #1H",
    "Latitude": 33.595011,
    "Longitude": -97.857703,
    "TotalBaseWaterVolume": 4607610,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Melva Unit #1H",
    "Latitude": 33.631553,
    "Longitude": -97.873831,
    "TotalBaseWaterVolume": 3290742,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Melva Unit #2H",
    "Latitude": 33.631553,
    "Longitude": -97.873747,
    "TotalBaseWaterVolume": 5870802,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Holmes Exploration, LLC",
    "WellName": "McCartor 96-2H",
    "Latitude": 36.1722939,
    "Longitude": -100.8042093,
    "TotalBaseWaterVolume": 1647477,
    "StateName": "Texas",
    "CountyName": "Ochiltree"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Griffin GU 3H",
    "Latitude": 31.5210833,
    "Longitude": -94.0426972,
    "TotalBaseWaterVolume": 2625196,
    "StateName": "Texas",
    "CountyName": "San Augustine"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "HighMount Exploration & Production",
    "WellName": "Moore 13 2",
    "Latitude": 30.86824,
    "Longitude": -100.77938,
    "TotalBaseWaterVolume": 1069501,
    "StateName": "Texas",
    "CountyName": "Schleicher"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BP America Production Company",
    "WellName": "Nectar 1-52",
    "Latitude": 35.37531,
    "Longitude": -100.05386,
    "TotalBaseWaterVolume": 448246,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "TXON Partners LLC",
    "WellName": "Perkins & Cullum Deep #5",
    "Latitude": 33.852361,
    "Longitude": -98.688754,
    "TotalBaseWaterVolume": 28140,
    "StateName": "Texas",
    "CountyName": "Wichita"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Hunt Oil Company",
    "WellName": "Sells A 1H",
    "Latitude": 29.12079,
    "Longitude": -97.90577,
    "TotalBaseWaterVolume": 629278,
    "StateName": "Texas",
    "CountyName": "Wilson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "ELLA MAEYERS (SA) 10H",
    "Latitude": 33.14,
    "Longitude": -97.51,
    "TotalBaseWaterVolume": 3837256,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2246",
    "Latitude": 33.004366,
    "Longitude": -102.898213,
    "TotalBaseWaterVolume": 34874,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "YWCU 3936",
    "Latitude": 32.985703,
    "Longitude": -102.777937,
    "TotalBaseWaterVolume": 61224,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Mcelroy J T Cons 1104",
    "Latitude": 31.41536,
    "Longitude": -102.327,
    "TotalBaseWaterVolume": 39837,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Lemon Farms 11 #1",
    "Latitude": 32.3134,
    "Longitude": -101.4204,
    "TotalBaseWaterVolume": 521946,
    "StateName": "Texas",
    "CountyName": "Dawson"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Hooks 4",
    "Latitude": 29.2,
    "Longitude": -97.403889,
    "TotalBaseWaterVolume": 3367546,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "DENTONIO WHITE 23 UNIT 9H",
    "Latitude": 28.3117139,
    "Longitude": -99.9110611,
    "TotalBaseWaterVolume": 7855176,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "King B 2H",
    "Latitude": 28.4482794,
    "Longitude": -99.6520531,
    "TotalBaseWaterVolume": 6350990,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Andy 14",
    "Latitude": 31.76964,
    "Longitude": -102.34131,
    "TotalBaseWaterVolume": 1908497,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Pate #6",
    "Latitude": 32.0167402,
    "Longitude": -102.600611,
    "TotalBaseWaterVolume": 748398,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sugg-Farmar 2 12",
    "Latitude": 31.32493,
    "Longitude": -100.9284,
    "TotalBaseWaterVolume": 449610,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Munson #1007H",
    "Latitude": 31.1766531,
    "Longitude": -101.0703714,
    "TotalBaseWaterVolume": 13133442,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Joseph Unit #9H",
    "Latitude": 28.8496,
    "Longitude": -98.105189,
    "TotalBaseWaterVolume": 4211298,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "J.W. Cave -48-/Well No. 1",
    "Latitude": 32.5238,
    "Longitude": -101.90368,
    "TotalBaseWaterVolume": 486444,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Slaughter -5-/Well No. 1",
    "Latitude": 32.49418,
    "Longitude": -101.96981,
    "TotalBaseWaterVolume": 718436,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Reliance Energy, Inc",
    "WellName": "Yarbrough 45-1",
    "Latitude": 32.138697,
    "Longitude": -101.946808,
    "TotalBaseWaterVolume": 697284,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "South Curtis Ranch Unit 915",
    "Latitude": 32.103188,
    "Longitude": -102.125786,
    "TotalBaseWaterVolume": 452579,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "CRNKO-BIGGS 4H",
    "Latitude": 32.07,
    "Longitude": -94.16,
    "TotalBaseWaterVolume": 3982503,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "La Escalera #1001A",
    "Latitude": 30.6557497,
    "Longitude": -103.2544094,
    "TotalBaseWaterVolume": 1974000,
    "StateName": "Texas",
    "CountyName": "Pecos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Black Stone `N` 1",
    "Latitude": 30.52023,
    "Longitude": -94.66618,
    "TotalBaseWaterVolume": 115038,
    "StateName": "Texas",
    "CountyName": "Polk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Ricker C Enron # 12",
    "Latitude": 31.3259,
    "Longitude": -101.285,
    "TotalBaseWaterVolume": 904264,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 51-11 #4",
    "Latitude": 31.2818579,
    "Longitude": -103.4043488,
    "TotalBaseWaterVolume": 760404,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 7 #3",
    "Latitude": 31.2750196,
    "Longitude": -103.3707864,
    "TotalBaseWaterVolume": 792540,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "PETEX",
    "WellName": "Guinn \"2264\" Unit #1",
    "Latitude": 32.628587,
    "Longitude": -98.966411,
    "TotalBaseWaterVolume": 126462,
    "StateName": "Texas",
    "CountyName": "Stephens"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "TRWD Gantt C Unit 3H",
    "Latitude": 32.963919,
    "Longitude": -97.516361,
    "TotalBaseWaterVolume": 2744897.4,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Mcelroy J T Cons 1581",
    "Latitude": 31.42155,
    "Longitude": -102.30684,
    "TotalBaseWaterVolume": 34730,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "XBC Giddings Estate 3040",
    "Latitude": 31.45661239,
    "Longitude": -101.9871448,
    "TotalBaseWaterVolume": 1090032,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Neal Ranch 56 A 9",
    "Latitude": 31.50612451,
    "Longitude": -102.049871,
    "TotalBaseWaterVolume": 1557192,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parten Operating, Inc.",
    "WellName": "Burrage 1",
    "Latitude": 32.6057314,
    "Longitude": -95.8534231,
    "TotalBaseWaterVolume": 94207,
    "StateName": "Texas",
    "CountyName": "Van Zandt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Ashley 201",
    "Latitude": 31.60213959,
    "Longitude": -102.8546901,
    "TotalBaseWaterVolume": 268800,
    "StateName": "Texas",
    "CountyName": "Ward"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B423H",
    "Latitude": 28.03122,
    "Longitude": -99.738214,
    "TotalBaseWaterVolume": 4809336,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Huff Ranch 47-6H",
    "Latitude": 35.51675,
    "Longitude": -100.124278,
    "TotalBaseWaterVolume": 3483984,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Stein 1 4H",
    "Latitude": 35.51784,
    "Longitude": -100.15371,
    "TotalBaseWaterVolume": 9062579,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Suemaur Expl. & Prod., LLC",
    "WellName": "Bondy Etal Gas Unit 1",
    "Latitude": 26.46078,
    "Longitude": -97.79654,
    "TotalBaseWaterVolume": 139062,
    "StateName": "Texas",
    "CountyName": "Willacy"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Unit Petroleum",
    "WellName": "Black Stone `N` 1",
    "Latitude": 30.52023,
    "Longitude": -94.66618,
    "TotalBaseWaterVolume": 115038,
    "StateName": "Texas",
    "CountyName": "Polk"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Briscoe Catarina West 39H",
    "Latitude": 28.29668549,
    "Longitude": -99.83278089,
    "TotalBaseWaterVolume": 6916525,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanchez Oil & Gas Corporation",
    "WellName": "Petro Pards 4H",
    "Latitude": 28.7003659,
    "Longitude": -99.89057977,
    "TotalBaseWaterVolume": 2469538,
    "StateName": "Texas",
    "CountyName": "Zavala"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EnerVest, Ltd.",
    "WellName": "Lott Wilson #1H",
    "Latitude": 31.46992,
    "Longitude": -93.00598,
    "TotalBaseWaterVolume": 3340561,
    "StateName": "Texas",
    "CountyName": "Brazos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Edwards #2",
    "Latitude": 31.6772,
    "Longitude": -102.5079,
    "TotalBaseWaterVolume": 331506,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Betty Jo 39 #2",
    "Latitude": 31.889,
    "Longitude": -101.521,
    "TotalBaseWaterVolume": 892962,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Brothers Unit #8H",
    "Latitude": 29.321344,
    "Longitude": -97.407706,
    "TotalBaseWaterVolume": 6507438,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Huff 32-6HA",
    "Latitude": 35.720554,
    "Longitude": -100.164032,
    "TotalBaseWaterVolume": 6233112,
    "StateName": "Texas",
    "CountyName": "Hemphill"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Interstate Explorations LLC",
    "WellName": "Gamble #1",
    "Latitude": 31.187204,
    "Longitude": -95.541243,
    "TotalBaseWaterVolume": 635628,
    "StateName": "Texas",
    "CountyName": "Houston"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "McNew -28A-/Well No. 8",
    "Latitude": 32.22345,
    "Longitude": -101.67427,
    "TotalBaseWaterVolume": 2704674,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Antelope Draw B 3042G",
    "Latitude": 31.39493,
    "Longitude": -101.22724,
    "TotalBaseWaterVolume": 888510,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Rocker B AE Unit #03H",
    "Latitude": 31.3736282,
    "Longitude": -101.1839167,
    "TotalBaseWaterVolume": 9591540,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Rocker B AE Unit #02H",
    "Latitude": 31.3736289,
    "Longitude": -101.1842376,
    "TotalBaseWaterVolume": 9619008,
    "StateName": "Texas",
    "CountyName": "Irion"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Plains Exploration & Production Company",
    "WellName": "Sprencel  A3H",
    "Latitude": 28.88,
    "Longitude": -97.82,
    "TotalBaseWaterVolume": 3503910,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "Raab Unit #1H",
    "Latitude": 29.533947,
    "Longitude": -97.133632,
    "TotalBaseWaterVolume": 139132,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Jo Ann Esse J1",
    "Latitude": 28.716389,
    "Longitude": -98.178333,
    "TotalBaseWaterVolume": 3356744,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Mid-States Operating Company",
    "WellName": "Wigley 37 #11",
    "Latitude": 31.954886,
    "Longitude": -101.964931,
    "TotalBaseWaterVolume": 1838004,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Fasken Oil and Ranch, Ltd.",
    "WellName": "Fee BE #704",
    "Latitude": 32.043231,
    "Longitude": -102.273311,
    "TotalBaseWaterVolume": 2047836,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Healy A Unit #1H",
    "Latitude": 33.596908,
    "Longitude": -97.862781,
    "TotalBaseWaterVolume": 4130154,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Healy A Unit #2H",
    "Latitude": 33.596856,
    "Longitude": -97.862731,
    "TotalBaseWaterVolume": 4500006,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Healy B Unit #1H",
    "Latitude": 33.5968,
    "Longitude": -97.862681,
    "TotalBaseWaterVolume": 3615738,
    "StateName": "Texas",
    "CountyName": "Montague"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Amackeralpha 6003",
    "Latitude": 31.32698,
    "Longitude": -102.04056,
    "TotalBaseWaterVolume": 1341526,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Cabot Oil & Gas Corp",
    "WellName": "Joe Hindes B Unit 3H",
    "Latitude": 28.68016667,
    "Longitude": -98.78436944,
    "TotalBaseWaterVolume": 7932871,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Hilbrich Unit #2H",
    "Latitude": 29.206472,
    "Longitude": -97.538472,
    "TotalBaseWaterVolume": 5716494,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "House Motherlode Unit 1 1H",
    "Latitude": 28.2626436,
    "Longitude": -98.1915582,
    "TotalBaseWaterVolume": 2215542,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "W&T Offshore, Inc.",
    "WellName": "State Travis- Henson 20 Unit 1H",
    "Latitude": 33.03641,
    "Longitude": -102.48559,
    "TotalBaseWaterVolume": 172200,
    "StateName": "Texas",
    "CountyName": "Terry"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "STS C 9H",
    "Latitude": 28.349018,
    "Longitude": -98.764291,
    "TotalBaseWaterVolume": 3512471,
    "StateName": "Texas",
    "CountyName": "McMullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "King A #1H",
    "Latitude": 28.4475557,
    "Longitude": -99.65050764,
    "TotalBaseWaterVolume": 5990082,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "King A #2H",
    "Latitude": 28.44761721,
    "Longitude": -99.65047224,
    "TotalBaseWaterVolume": 5917422,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Ring Energy, Inc.",
    "WellName": "Fisher A 5",
    "Latitude": 32.45072,
    "Longitude": -102.64046,
    "TotalBaseWaterVolume": 99414,
    "StateName": "Texas",
    "CountyName": "Andrews"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Big Star Oil & Gas, LLC",
    "WellName": "AB Connel C#4",
    "Latitude": 31.694,
    "Longitude": -102.64697,
    "TotalBaseWaterVolume": 34146,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Sallie F 715",
    "Latitude": 31.78335176,
    "Longitude": -102.2965785,
    "TotalBaseWaterVolume": 1069842.658,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Robertson Unit/Well No. 207",
    "Latitude": 32.65924,
    "Longitude": -102.7676,
    "TotalBaseWaterVolume": 44394,
    "StateName": "Texas",
    "CountyName": "Gaines"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Daniel -10-/Well No. 2",
    "Latitude": 31.71169,
    "Longitude": -101.57097,
    "TotalBaseWaterVolume": 2392068,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Piedra Operating, LLC",
    "WellName": "Top Chico 2",
    "Latitude": 32.3162629,
    "Longitude": -101.7977533,
    "TotalBaseWaterVolume": 760558,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "North Westbrook Unit/Well No. 4905",
    "Latitude": 32.42479,
    "Longitude": -101.04963,
    "TotalBaseWaterVolume": 25158,
    "StateName": "Texas",
    "CountyName": "Mitchell"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Smith L #05",
    "Latitude": 27.923278,
    "Longitude": -97.381728,
    "TotalBaseWaterVolume": 67326,
    "StateName": "Texas",
    "CountyName": "San Patricio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "ROCKET UNIT EB #1H",
    "Latitude": 30.7414469,
    "Longitude": -96.4026156,
    "TotalBaseWaterVolume": 5459449,
    "StateName": "Texas",
    "CountyName": "Brazos"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Mcelroy J T Consolidated 1167",
    "Latitude": 31.42864,
    "Longitude": -102.31833,
    "TotalBaseWaterVolume": 20496,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Cordona Lake #175",
    "Latitude": 31.3000993,
    "Longitude": -102.537349,
    "TotalBaseWaterVolume": 49350,
    "StateName": "Texas",
    "CountyName": "Crane"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "J H Riggs 10H",
    "Latitude": 33.18,
    "Longitude": -97.33,
    "TotalBaseWaterVolume": 3746576,
    "StateName": "Texas",
    "CountyName": "Denton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BHP Billiton Petroleum",
    "WellName": "Krause B 6H",
    "Latitude": 29.188664,
    "Longitude": -97.42705,
    "TotalBaseWaterVolume": 3994853,
    "StateName": "Texas",
    "CountyName": "DeWitt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "East PenWell San Andres Unit/Well No. 811",
    "Latitude": 31.7264,
    "Longitude": -102.59111,
    "TotalBaseWaterVolume": 28056,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Chevron USA Inc.",
    "WellName": "Lupin TXL Fee 'C' 2908E",
    "Latitude": 31.72592778,
    "Longitude": -102.3544111,
    "TotalBaseWaterVolume": 1132450,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "CrownQuest Operating, LLC",
    "WellName": "Norton 27 #1",
    "Latitude": 32.00991,
    "Longitude": -101.60851,
    "TotalBaseWaterVolume": 1298136,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Nadel and Gussman Permian, LLC",
    "WellName": "Bearkat 17#5",
    "Latitude": 31.870218,
    "Longitude": -101.34196,
    "TotalBaseWaterVolume": 485982,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "Penny Jones 2",
    "Latitude": 32.6183609,
    "Longitude": -94.2597135,
    "TotalBaseWaterVolume": 267320,
    "StateName": "Texas",
    "CountyName": "Harrison"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Marathon Oil",
    "WellName": "Turnbull 4-9H",
    "Latitude": 28.77895,
    "Longitude": -98.034314,
    "TotalBaseWaterVolume": 3356091,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RKI Exploration & Production",
    "WellName": "Robinson 5 32",
    "Latitude": 31.99178,
    "Longitude": -103.88296,
    "TotalBaseWaterVolume": 381207,
    "StateName": "Texas",
    "CountyName": "Loving"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Parsley Energy Operations, LLC",
    "WellName": "Hightower 20 #2",
    "Latitude": 32.508682,
    "Longitude": -102.052517,
    "TotalBaseWaterVolume": 1885968,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Crespi Unit 1 #247",
    "Latitude": 31.96201,
    "Longitude": -101.93963,
    "TotalBaseWaterVolume": 749814,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Diamondback E&P LLC",
    "WellName": "ST NW 36-10",
    "Latitude": 31.954364,
    "Longitude": -102.234011,
    "TotalBaseWaterVolume": 1203342,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "CRNKO-BIGGS 5H",
    "Latitude": 32.07,
    "Longitude": -94.18,
    "TotalBaseWaterVolume": 3664095,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Powell 36 8",
    "Latitude": 31.52509,
    "Longitude": -102.11087,
    "TotalBaseWaterVolume": 850933,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Newfield Exploration",
    "WellName": "Huff Ranch 48-1",
    "Latitude": 35.508306,
    "Longitude": -100.131778,
    "TotalBaseWaterVolume": 106927,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Roberts Unit 3754",
    "Latitude": 33.01797,
    "Longitude": -102.876,
    "TotalBaseWaterVolume": 110754,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "Dentonio White 23 Unit 7H",
    "Latitude": 28.3117139,
    "Longitude": -99.9111444,
    "TotalBaseWaterVolume": 7777111,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "LA BANDERA RANCH UNIT A 3H",
    "Latitude": 28.3610417,
    "Longitude": -100.0030778,
    "TotalBaseWaterVolume": 5524910,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Otis 6",
    "Latitude": 31.80556,
    "Longitude": -102.36575,
    "TotalBaseWaterVolume": 1914465,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Devon Energy Production Company L. P.",
    "WellName": "Averitt 16",
    "Latitude": 31.75438,
    "Longitude": -102.34233,
    "TotalBaseWaterVolume": 1414232,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BC Operating, Inc.",
    "WellName": "Jason #2",
    "Latitude": 32.0048972,
    "Longitude": -102.5941609,
    "TotalBaseWaterVolume": 717108,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Cornfield Unit #4H",
    "Latitude": 29.222528,
    "Longitude": -97.519583,
    "TotalBaseWaterVolume": 6093528,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legend Natural Gas, LLC",
    "WellName": "Shankles 1H",
    "Latitude": 32.49195,
    "Longitude": -97.71001,
    "TotalBaseWaterVolume": 3236226,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Legend Natural Gas, LLC",
    "WellName": "Shankles 2H",
    "Latitude": 32.49193,
    "Longitude": -97.70882,
    "TotalBaseWaterVolume": 4964316,
    "StateName": "Texas",
    "CountyName": "Hood"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "Guitar 8-4",
    "Latitude": 32.250656,
    "Longitude": -101.591098,
    "TotalBaseWaterVolume": 1255842,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Partee Drilling Inc",
    "WellName": "Redfish 3808",
    "Latitude": 32.377,
    "Longitude": -101.54854,
    "TotalBaseWaterVolume": 731976,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Athlon Energy Operating LLC",
    "WellName": "McCrary 18 #3",
    "Latitude": 32.305591,
    "Longitude": -101.530826,
    "TotalBaseWaterVolume": 1117368,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "BG Cox 26 26B",
    "Latitude": 32.49393,
    "Longitude": -101.6958,
    "TotalBaseWaterVolume": 815296,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Kimberly #3036",
    "Latitude": 32.10570572,
    "Longitude": -102.1759452,
    "TotalBaseWaterVolume": 1623844,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "RSP Permian, LLC",
    "WellName": "Estes #210",
    "Latitude": 32.00729,
    "Longitude": -102.21151,
    "TotalBaseWaterVolume": 1673238,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jerry Hess Operating Company",
    "WellName": "McClure, Russell #1",
    "Latitude": 32.572619,
    "Longitude": -98.153881,
    "TotalBaseWaterVolume": 592391,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Samson",
    "WellName": "CRNKO-BIGGS SL 7H",
    "Latitude": 32.07,
    "Longitude": -94.18,
    "TotalBaseWaterVolume": 3632912,
    "StateName": "Texas",
    "CountyName": "Panola"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "FIML Natural Resources, LLC",
    "WellName": "Highland G 19P",
    "Latitude": 31.40782,
    "Longitude": -101.2909,
    "TotalBaseWaterVolume": 2822778,
    "StateName": "Texas",
    "CountyName": "Reagan"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Chevron Minerals 19#1",
    "Latitude": 31.2548752,
    "Longitude": -103.3595306,
    "TotalBaseWaterVolume": 810726,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "BlueStone Natural Resources",
    "WellName": "Miss Kati Unit 1",
    "Latitude": 30.8843396,
    "Longitude": -95.7580616,
    "TotalBaseWaterVolume": 493920,
    "StateName": "Texas",
    "CountyName": "Walker"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B425H",
    "Latitude": 28.03118,
    "Longitude": -99.738256,
    "TotalBaseWaterVolume": 6736758,
    "StateName": "Texas",
    "CountyName": "Webb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Frye Unit 1H",
    "Latitude": 33.42356,
    "Longitude": -97.609819,
    "TotalBaseWaterVolume": 6092688,
    "StateName": "Texas",
    "CountyName": "Wise"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "Denver Unit 2247",
    "Latitude": 33.004366,
    "Longitude": -102.898213,
    "TotalBaseWaterVolume": 36165,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Kowalik A 1H",
    "Latitude": 28.835219,
    "Longitude": -98.217253,
    "TotalBaseWaterVolume": 7647988,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Kowalik B 1H",
    "Latitude": 28.835175,
    "Longitude": -98.217314,
    "TotalBaseWaterVolume": 12804637,
    "StateName": "Texas",
    "CountyName": "Atascosa"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Henry Resources LLC",
    "WellName": "Jordan 3414",
    "Latitude": 31.9616833,
    "Longitude": -102.7999,
    "TotalBaseWaterVolume": 253462,
    "StateName": "Texas",
    "CountyName": "Yoakum"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Occidental Oil and Gas",
    "WellName": "GLDU 583",
    "Latitude": 31.998464,
    "Longitude": -102.650769,
    "TotalBaseWaterVolume": 189964,
    "StateName": "Texas",
    "CountyName": "Ector"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "E.D.B 10 #9",
    "Latitude": 31.852,
    "Longitude": -101.505,
    "TotalBaseWaterVolume": 890988,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Meyer Unit #11H",
    "Latitude": 29.333889,
    "Longitude": -97.328333,
    "TotalBaseWaterVolume": 3606498,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Penn Virginia Oil & Gas Corporation",
    "WellName": "R. Washington Unit #1H",
    "Latitude": 29.542166,
    "Longitude": -97.25606,
    "TotalBaseWaterVolume": 3650472,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Sarah Hyman 59",
    "Latitude": 32.122897,
    "Longitude": -101.273588,
    "TotalBaseWaterVolume": 338268,
    "StateName": "Texas",
    "CountyName": "Howard"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Murphy Exploration and Production USA",
    "WellName": "Linhart  1H",
    "Latitude": 28.932967,
    "Longitude": -97.866433,
    "TotalBaseWaterVolume": 9033062,
    "StateName": "Texas",
    "CountyName": "Karnes"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "GeoSouthern Energy Corporation",
    "WellName": "Renee Unit 1H",
    "Latitude": 29.41227,
    "Longitude": -97.22908,
    "TotalBaseWaterVolume": 5434086,
    "StateName": "Texas",
    "CountyName": "Lavaca"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Halcon Resources Corporation",
    "WellName": "Zack Wakefield 2A #2H",
    "Latitude": 31.205608,
    "Longitude": -95.8506523,
    "TotalBaseWaterVolume": 3270750,
    "StateName": "Texas",
    "CountyName": "Leon"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Naylor Jones Unit 59 West #4H",
    "Latitude": 28.421125,
    "Longitude": -98.780439,
    "TotalBaseWaterVolume": 4715592,
    "StateName": "Texas",
    "CountyName": "Mc Mullen"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "TXL R 7",
    "Latitude": 31.65860625,
    "Longitude": -102.1670201,
    "TotalBaseWaterVolume": 664606.3492,
    "StateName": "Texas",
    "CountyName": "Midland"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Jerry Hess Operating Company",
    "WellName": "McClure 1H",
    "Latitude": 32.572785,
    "Longitude": -98.15302,
    "TotalBaseWaterVolume": 380976,
    "StateName": "Texas",
    "CountyName": "Palo Pinto"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "J CLEO THOMPSON",
    "WellName": "Granada 11 #2",
    "Latitude": 31.3310342,
    "Longitude": -103.393288,
    "TotalBaseWaterVolume": 796404,
    "StateName": "Texas",
    "CountyName": "Reeves"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "COG Operating LLC",
    "WellName": "Mcgill A 2",
    "Latitude": 31.41051,
    "Longitude": -102.06876,
    "TotalBaseWaterVolume": 1052100,
    "StateName": "Texas",
    "CountyName": "Upton"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanguine Gas Exploration",
    "WellName": "Buckingham 305H",
    "Latitude": 35.252612,
    "Longitude": -100.044612,
    "TotalBaseWaterVolume": 3100942,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Sanguine Gas Exploration",
    "WellName": "Buckingham 405H",
    "Latitude": 35.252612,
    "Longitude": -100.044708,
    "TotalBaseWaterVolume": 3105521,
    "StateName": "Texas",
    "CountyName": "Wheeler"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "R Borchardt Unit A 2",
    "Latitude": 29.147222,
    "Longitude": -97.490833,
    "TotalBaseWaterVolume": 3459235,
    "StateName": "Texas",
    "CountyName": "De Witt"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Keathley 46 #15",
    "Latitude": 31.879,
    "Longitude": -101.526,
    "TotalBaseWaterVolume": 825930,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Linn Energy, LLC",
    "WellName": "Loudamy 45 45J",
    "Latitude": 32.34762,
    "Longitude": -101.57664,
    "TotalBaseWaterVolume": 1010898,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Rafter Two Unit A1",
    "Latitude": 28.593889,
    "Longitude": -98.296111,
    "TotalBaseWaterVolume": 3166020,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "ConocoPhillips Company/Burlington Resources",
    "WellName": "Bateman Unit A1",
    "Latitude": 28.616111,
    "Longitude": -98.185,
    "TotalBaseWaterVolume": 3166020,
    "StateName": "Texas",
    "CountyName": "Live Oak County"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Pioneer Natural Resources",
    "WellName": "Wilbur Eden 01 01H",
    "Latitude": 28.562752,
    "Longitude": -98.197811,
    "TotalBaseWaterVolume": 3421698,
    "StateName": "Texas",
    "CountyName": "Live Oak"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Endeavor Energy Resources",
    "WellName": "Nail 12 #2",
    "Latitude": 32.0999,
    "Longitude": -101.9832,
    "TotalBaseWaterVolume": 834426,
    "StateName": "Texas",
    "CountyName": "Martin"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45D 904H",
    "Latitude": 30.9739,
    "Longitude": -101.2314,
    "TotalBaseWaterVolume": 8049174,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45 D903H",
    "Latitude": 30.9772,
    "Longitude": -101.2313,
    "TotalBaseWaterVolume": 7442526,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Approach Resources",
    "WellName": "University 45G 2209H",
    "Latitude": 30.9543,
    "Longitude": -101.2396,
    "TotalBaseWaterVolume": 8216754,
    "StateName": "Texas",
    "CountyName": "Crockett"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Juno Operating Company II, LLC",
    "WellName": "A.L. Robertson D #7001",
    "Latitude": 33.505522,
    "Longitude": -101.547363,
    "TotalBaseWaterVolume": 38335,
    "StateName": "Texas",
    "CountyName": "Crosby"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Anadarko Petroleum Corporation",
    "WellName": "La Bandera Ranch Unit A 2H",
    "Latitude": 28.3610417,
    "Longitude": -100.003125,
    "TotalBaseWaterVolume": 5528595,
    "StateName": "Texas",
    "CountyName": "Dimmit"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Energen Resources Corporation",
    "WellName": "Glass/Well No. 10",
    "Latitude": 31.6675,
    "Longitude": -101.35897,
    "TotalBaseWaterVolume": 2341878,
    "StateName": "Texas",
    "CountyName": "Glasscock"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "HFS #9H",
    "Latitude": 29.298117,
    "Longitude": -97.465844,
    "TotalBaseWaterVolume": 7107954,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "Sample Baros Unit #16H",
    "Latitude": 29.208361,
    "Longitude": -97.535389,
    "TotalBaseWaterVolume": 4415124,
    "StateName": "Texas",
    "CountyName": "Gonzales"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "EOG Resources, Inc.",
    "WellName": "King Ranch Canelo #862",
    "Latitude": 27.293151,
    "Longitude": -97.978785,
    "TotalBaseWaterVolume": 322434,
    "StateName": "Texas",
    "CountyName": "San Patricio"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "Apache Corporation",
    "WellName": "Malcolm 643 #1H",
    "Latitude": 36.2590305,
    "Longitude": -100.4758334,
    "TotalBaseWaterVolume": 689394,
    "StateName": "Texas",
    "CountyName": "Lipscomb"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "XTO Energy/ExxonMobil",
    "WellName": "Edwards Riverhills C Unit 28H",
    "Latitude": 32.68839,
    "Longitude": -97.40301,
    "TotalBaseWaterVolume": 5823384,
    "StateName": "Texas",
    "CountyName": "Tarrant"
  },
  {
    "JobEndDate": 2012,
    "OperatorName": "SM Energy",
    "WellName": "Galvan Ranch B427H",
    "Latitude": 28.031139,
    "Longitude": -99.738298,
    "TotalBaseWaterVolume": 6692868,
    "StateName": "Texas",
    "CountyName": "Webb"
  }
]

for (var i = 0; i < wells.length; i++) {
   
  // Conditionals for OperatorName
  var color = "";
  if (wells[i].OperatorName == "Chevron USA Inc.") {
    color = "blue";
  }
  else if (wells[i].OperatorName == "Pioneer Natural Resources") {
    color = "orange";
  }
  else if (wells[i].OperatorName == "XTO Energy/ExxonMobil") {
    color = "purple";
  }
  else {
    color = "black";

    L.marker(wells.OperatorName)
    .bindPopup(`<h1>${wells.CountyName}</h1> <hr> <h3>${wells.WellName}</h3>`)
    .addTo(myMap);
}
}





