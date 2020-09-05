const barData = {
    "Germany":{
        death:1773700,
        wounded:4216058,
        missing:1152800
    },

    "Russia":{
        death:1700000,
        wounded:4950000,
        missing:2500000
    },

    "France":{
        death:1357800,
        wounded:4266000,
        missing:537000
    },

    "Austria-Hungary":{
        death:1200000,
        wounded:3620000,
        missing:2200000
    },

    "Great Britain":{
        death:908371,
        wounded:2090212,
        missing:191652
    },
    "Italy":{
        death:650000,
        wounded:947000,
        missing:600000
    },
    "Romania":{
        death:335706,
        wounded:120000,
        missing:80000
    },
    "Turkey":{
        death:325000,
        wounded:400000,
        missing:250000
    },
    "United States":{
        death:126000,
        wounded:234300,
        missing:4500
    },
    "Bulgaria":{
        death:87500,
        wounded:152390,
        missing:27029
    },
    "Australia":{
        death:60000,
        wounded:156000,
        missing:""
    },
    "Canada":{
        death:59694,
        wounded:172000,
        missing:3800
    },
    "Serbia":{
        death:45000,
        wounded:133148,
        missing:152958
    },
    "New Zealand":{
        death:17000,
        wounded:35000,
        missing:450
    },
    "Belgium":{
        death:13716,
        wounded:44686,
        missing:34659
    },
    "Portugal":{
        death:7222,
        wounded:13751,
        missing:12318
    },
    "Greece":{
        death:5000,
        wounded:21000,
        missing:1000
    }
}

const pieData = {
    "Great Britain": {
        y:35334012000,
        sliced:false,
        selected:false
    },
    "France": {
        y:24265583000, 
        sliced:false,
        selected:false
    },
    "Russia": {
        y:22293950000,
        sliced:false,
        selected:false
    },
    "United States": {
        y:22625253000,
        sliced:false,
        selected:false
    },
    "Italy": {
        y:12413998000,
        sliced:false,
        selected:false
    },
    "Japan": {
        y:40000000,
        sliced:false,
        selected:false
    },
    "Romania": {
        y:1600000000,
        sliced:false,
        selected:false
    },
    "Canada": {
        y:1665576000,
        sliced:false,
        selected:false
    },
    "Belgium": {
        y:1154468000,
        sliced:false,
        selected:false
    },
    "Australia": {
        y:1423208000,
        sliced:false,
        selected:false
    },
    "Germany": {
        y:37775000000,
        sliced:true,
        selected:true
    },
    "Austria-Hungary": {
        y:20622960000,
        sliced:false,
        selected:false
    },
    "Turkey": {
        y:1430000000,
        sliced:false,
        selected:false
    }
}


const kartData = {
    "GBR": "8,904,467",
    "FRA": "8,410,000", 
    "RUS": "12,000,000",
    "USA": "4,734,991",
    "ITA": "5,615,000",
    "JPN": "800,000",
    "ROU": "750,000",
    "SRB": "707,343",
    "BRA": "54,000",
    "CAN": "424,000",
    "ARM": "150,000",
    "BEL": "267,000",
    "GRC": "230,000",
    "PRT": "100,000",
    "MNE": "50,000",
    "AUS": "331,781",
    "NZL": "98,950",
    "ZAF": "2,350,000",
    "IND": "1,380,000",
    "DEU": "11,000,000",
    "AUT": "3,900,000", 
    "HUN": "3,900,000",
    "BGR": "1,200,000",
    "TUR": "2,850,000",
    "EGY": "1,100,000"
}


const steder = {
    "somme": { 
        bearing: -50,
        center: [2.933405, 49.933312], 
        zoom: 17.3,
        pitch: 80
    },
    "douaumont": {
        center: [5.438845, 49.217020], 
        bearing: -60,
        zoom: 17,
        pitch: 60,
    },
    "crater": {
        bearing: -100,
        center: [2.697375, 50.015639], 
        zoom: 17.5,
        pitch: 90,
    },
    "cove": {
        bearing: 90,
        center: [26.280996, 40.240890], 
        zoom: 17.3,
        pitch:50
    },
    "menin": {
        bearing: -75,
        center: [2.891015, 50.852016], 
        zoom: 18.1,
        pitch: 80
    },
    "ossuary": { 
        bearing: -80,
        center: [5.423627,49.208296],
        zoom: 18.3,
        pitch: 73
    },
    "ulster": { 
        bearing: 90,
        center: [2.680357, 50.061270],
        zoom: 18.1,
        pitch: 40,
    },
    'grey-point': { 
        bearing: -70,
        center: [-5.740701, 54.676125], 
        zoom: 18.3,
        pitch: 40,
    }
};
