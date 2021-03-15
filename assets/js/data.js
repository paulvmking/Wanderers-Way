const locations = [
    {
        class: "munich-card",
        weather:"snow",
        name:"Munich",
        budget:"budget",
        price:"€€€",
        image:"assets/images/snow.jpg",
        location:"destination.html?location=munich",
        mainimage: "https://cdn.pixabay.com/photo/2017/07/18/17/32/munich-2516492_1280.jpg",
        costday: "€109",
        transport:"€14",
        meals:"€20",
        language: "German (Native) - English (Widely spoken)",
        lat:"48.141539",
        long:"11.539766",
        thingsToDoLat:"48.13823115892342",
        thingsToDoLong:"11.575333604083548",
        hotelsLat:"48.137290551318856",
        hotelsLong:"11.56119329839521",
        foodDrinksLat:"48.13703263975606",
        foodDrinksLong:"11.574819255902263"
    },
    {
        class: "zurich-card",
        weather:"snow",
        name:"Zurich",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/switzerland-4974469_1280.webp",
        location:"destination.html?location=zurich",
        mainimage: "https://cdn.pixabay.com/photo/2019/11/19/07/50/zurich-4636746__340.jpg",
        costday: "€168.65",
        transport:"€16.78",
        meals:"€36.08",
        language: "Swiss German (Native) - English (Widely spoken)",
        lat:"47.38853330757656",
        long:"8.511715371276626",
        thingsToDoLat:"47.39313827423268",
        thingsToDoLong:"8.504645068035096",
        hotelsLat:"47.390697837296784",
        hotelsLong:"8.509998757227716",
        foodDrinksLat:"47.391671120325846",
        foodDrinksLong:"8.511929947818611"
    },
    {
        class: "brasov-card",
        weather:"snow",
        name:"Brasov",
        budget:"budget",
        price:"€€",
        image:"assets/images/snow-5880000_1280.jpg",
        location:"destination.html?location=brasov",
        mainimage: "https://cdn.pixabay.com/photo/2019/10/19/13/10/mountains-4561361_1280.jpg",
        costday: "€45.31",
        transport:"€13.42",
        meals:"€19.30",
        language: "Romanian (Native) - English (Widely spoken)",
        lat:"45.65197672756528",
        long:"25.60882046938026",
        thingsToDoLat:"45.67477092044061",
        thingsToDoLong:"25.586075335754167",
        hotelsLat:"45.66169538679689",
        hotelsLong:"25.61474278719234",
        foodDrinksLat:"45.655402736904314",
        foodDrinksLong:"25.62671987392006"
    },
    {
        class: "vienna-card",
        weather:"snow",
        name:"Vienna",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/vienna-2989786_1280.jpg",
        location:"destination.html?location=vienna",
        mainimage: "https://cdn.pixabay.com/photo/2015/09/09/21/33/vienna-933500_1280.jpg",
        costday: "€117",
        transport:"€12",
        meals:"€23",
        language: "German (Native) - English (Widely spoken)",
        lat:"48.20858936355958",
        long:"16.374216077515435",
        thingsToDoLat:"48.21010512378387",
        thingsToDoLong:"16.367006299006672",
        hotelsLat:"48.20675895171026",
        hotelsLong:"16.371297833653102",
        foodDrinksLat:"48.20929005071677",
        foodDrinksLong:"16.376061436992668"
    },
    {
        class: "zakopane-card",
        weather:"snow",
        name:"Zakopane",
        budget:"budget",
        price:"€€€",
        image:"assets/images/tatry-4359240_1280.jpg",
        location:"destination.html?location=zakopane",
        mainimage: "https://cdn.pixabay.com/photo/2019/01/26/19/44/zakopane-3956852_1280.jpg",
        costday: "€45.31",
        transport:"€3.93",
        meals:"€9.23",
        language: "Polish (Native) - English (Widely spoken)",
        lat:"49.298096112740424",
        long:"19.948639660043415",
        thingsToDoLat:"49.309475227442256",
        thingsToDoLong:"19.936680452120314",
        hotelsLat:"49.295521323546794",
        hotelsLong:"19.949412136279772",
        foodDrinksLat:"49.29185481551452",
        foodDrinksLong:"19.93610837884912"
    },
    {
        class: "reykjavik-card",
        weather:"snow",
        name:"Reykjavik",
        budget:"luxury",
        price:"€€€€€",
        image:"assets/images/reykjavik-635330_1280.jpg",
        location:"destination.html?location=reykjavik",
        mainimage: "https://cdn.pixabay.com/photo/2019/01/02/10/23/iceland-3908508_1280.jpg",
        costday: "€179.55",
        transport:"€33.56",
        meals:"€21.81",
        language: "Icelandic (Native) - English (Widely spoken)",
        lat:"",
        long:"",
        thingsToDoLat:"",
        thingsToDoLong:"",
        hotelsLat:"",
        hotelsLong:"",
        foodDrinksLat:"",
        foodDrinksLong:""
    },
    {
        class: "barcelona-image",
        weather:"sun",
        name:"Barcelona",
        budget:"budget",
        price:"€€€",
        image:"assets/images/sun4.webp",
        location:"destination.html?location=barcelona",
        mainimage: "https://cdn.pixabay.com/photo/2018/03/14/23/00/barcelona-3226639_1280.jpg",
        costday: "€116",
        transport:"€15",
        meals:"€23",
        language: "Spanish (Native) - English (Widely spoken)",
        lat:"",
        long:"",
        thingsToDoLat:"",
        thingsToDoLong:"",
        hotelsLat:"",
        hotelsLong:"",
        foodDrinksLat:"",
        foodDrinksLong:""
    },
    {
        class: "paris-image",
        weather:"sun",
        name:"Paris",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/paris1.jpg",
        location:"destination.html?location=paris",
        mainimage: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg",
        costday: "€162",
        transport:"€16",
        meals:"€29",
        language: "French (Native) - English (Widely spoken)",
        lat:"",
        long:"",
        thingsToDoLat:"",
        thingsToDoLong:"",
        hotelsLat:"",
        hotelsLong:"",
        foodDrinksLat:"",
        foodDrinksLong:""
    },
    {
        class: "lisbon-image",
        weather:"sun",
        name:"Lisbon",
        budget:"budget",
        price:"€€",
        image:"assets/images/sun2.webp",
        location:"destination.html?location=lisbon",
        mainimage: "https://cdn.pixabay.com/photo/2016/11/05/22/13/lisbon-1801727_1280.jpg",
        costday: "€96",
        transport:"€17",
        meals:"€31",
        language: "Portugese (Native) - English (Widely spoken)",
        lat:"",
        long:"",
        thingsToDoLat:"",
        thingsToDoLong:"",
        hotelsLat:"",
        hotelsLong:"",
        foodDrinksLat:"",
        foodDrinksLong:""
    },
    {
        class: "rome-image",
        weather:"sun",
        name:"Rome",
        budget:"luxury",
        price:"€€€€€",
        image:"assets/images/rome1.jpg",
        location:"destination.html?location=rome",
        mainimage: "https://cdn.pixabay.com/photo/2017/12/28/08/18/arch-of-constantine-3044634_1280.jpg",
        costday: "€131",
        transport:"€17",
        meals:"€37",
        language: "Italian (Native) - English (Widely spoken)",
        lat:"",
        long:"",
        thingsToDoLat:"",
        thingsToDoLong:"",
        hotelsLat:"",
        hotelsLong:"",
        foodDrinksLat:"",
        foodDrinksLong:""
    },
    {
        class: "istanbul-image",
        weather:"sun",
        name:"Istanbul",
        budget:"budget",
        price:"€€€",
        image:"assets/images/istanbul.jpg",
        location:"destination.html?location=istanbul",
        mainimage: "https://cdn.pixabay.com/photo/2015/12/15/15/12/istanbul-1094404_1280.jpg",
        costday: "€25",
        transport:"€1.70",
        meals:"€3.85",
        language: "Turkish (Native) - English (Widely spoken)",
        lat:"",
        long:"",
        thingsToDoLat:"",
        thingsToDoLong:"",
        hotelsLat:"",
        hotelsLong:"",
        foodDrinksLat:"",
        foodDrinksLong:""
    },
    {
        class: "athens-image",
        weather:"sun",
        name:"Athens",
        budget:"luxury",
        price:"€€€€",
        image:"assets/images/athens2.jpg",
        location:"destination.html?location=athens",
        mainimage: "https://cdn.pixabay.com/photo/2020/03/18/11/28/athens-4943645_1280.jpg",
        costday: "€72",
        transport:"€13",
        meals:"€20",
        language: "Greek (Native) - English (Widely spoken)",
        lat:"",
        long:"",
        thingsToDoLat:"",
        thingsToDoLong:"",
        hotelsLat:"",
        hotelsLong:"",
        foodDrinksLat:"",
        foodDrinksLong:""
    }];

