function popUp() {
    var popup = document.getElementById("container-div");
    var popupButton = document.getElementById("container-btn");
    var button = document.getElementById("click-button");

    if ( popup.style.display === "none" ) {
        popup.style.display = "none";
        button.style.display = "none";
    } 
    else{
        popup.style.display = "block";
        popupButton.style.display = "none";
        button.style.display = "block";
    }
}

function buttonClick() {
    var countryList = new Array( "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)","Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe");

    var count = countryList.length;

    var item = countryList[Math.floor(Math.random()*countryList.length)];

    var apiKey = "58926c9cf44b4a548ee81040231103";
    var fetchUrl = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&days=7&q=" + item;
    var fetchUrlDay = "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&days=7&q=" + item;

    fetch(fetchUrl)
        .then((response) => response.json())
        .then((result) => {
            var country = result.location.country;
            var region = result.location.region;
            var name = result.location.name;
            var wind = result.current.wind_mph;
            var precip = result.current.precip_mm;
            var pressure = result.current.pressure_mb;
            var temperature = result.current.temp_c;
            var icon = result.current.condition.icon;


            document.getElementById("country").innerText = name + " " + region + ", " + country;
            document.getElementById("wind").innerText = "Wind:" + " "+ wind + " " + "mph";
            document.getElementById("precip").innerText = "Precip:" + " "+ precip + " " + "mm";
            document.getElementById("pressure").innerText = "Pressure:" + " "+ pressure + " " + "mb";
            document.getElementById("temperature").innerHTML = temperature +"&#8451;";
            document.getElementById("icon").src = "https:"+ icon;
        })
        .catch((error) => {
        console.error("Error:", error);
        });

    fetch(fetchUrlDay)
        .then((response) => response.json())
        .then ((result) => {
            
            for (var index = 0; index < result.forecast.forecastday.length; index++) {
                var number = index + 1;
                var element = result.forecast.forecastday[index];

                var dayIcon = element.day.condition.icon;

                var d = new Date(element.date);

                var weekDay = d.getDay();

                var weekDayName = "";
                switch(weekDay){
                    case 0:
                        weekDayName = "Mon";
                        break;
                    case 1:
                        weekDayName = "Tue";
                        break;
                    case 2: 
                        weekDayName = "Wed";
                        break;
                    case 3: 
                        weekDayName = "Thu";
                        break;
                    case 4: 
                        weekDayName = "Fri";
                        break;
                    case 5: 
                        weekDayName = "Sat";
                        break;
                    case 6: 
                        weekDayName = "Sun";
                        break;
                    default:
                        weekDayName = "Mon";
                        break;
                }
                document.getElementById("week"+number).innerHTML = weekDayName;
                
                document.getElementById("week-icon"+number).src = "https:"+ dayIcon;

                var weekDayTemperature = element.day.maxtemp_c;
                document.getElementById("temperature"+number).innerHTML = weekDayTemperature +"&#8451;";
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

var countryList = new Array( "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)","Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe");

var count = countryList.length;

var item = countryList[Math.floor(Math.random()*countryList.length)];

var apiKey = "58926c9cf44b4a548ee81040231103";
var fetchUrl = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&days=7&q=" + item;
var fetchUrlDay = "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&days=7&q=" + item;

fetch(fetchUrl)
    .then((response) => response.json())
    .then((result) => {
        var country = result.location.country;
        var region = result.location.region;
        var name = result.location.name;
        var wind = result.current.wind_mph;
        var precip = result.current.precip_mm;
        var pressure = result.current.pressure_mb;
        var temperature = result.current.temp_c;
        var icon = result.current.condition.icon;


        document.getElementById("country").innerText = name + " " + region + ", " + country;
        document.getElementById("wind").innerText = "Wind:" + " "+ wind + " " + "mph";
        document.getElementById("precip").innerText = "Precip:" + " "+ precip + " " + "mm";
        document.getElementById("pressure").innerText = "Pressure:" + " "+ pressure + " " + "mb";
        document.getElementById("temperature").innerHTML = temperature +"&#8451;";
        document.getElementById("icon").src = "https:"+ icon;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

fetch(fetchUrlDay)
    .then((response) => response.json())
    .then ((result) => {
        
        for (var index = 0; index < result.forecast.forecastday.length; index++) {
            var number = index + 1;
            var element = result.forecast.forecastday[index];

            var dayIcon = element.day.condition.icon;

            var d = new Date(element.date);

            var weekDay = d.getDay();

            var weekDayName = "";
            switch(weekDay){
                case 0:
                    weekDayName = "Mon";
                    break;
                case 1:
                    weekDayName = "Tue";
                    break;
                case 2: 
                    weekDayName = "Wed";
                    break;
                case 3: 
                    weekDayName = "Thu";
                    break;
                case 4: 
                    weekDayName = "Fri";
                    break;
                case 5: 
                    weekDayName = "Sat";
                    break;
                case 6: 
                    weekDayName = "Sun";
                    break;
                default:
                    weekDayName = "Mon";
                    break;
            }
            document.getElementById("week"+number).innerHTML = weekDayName;
            
            document.getElementById("week-icon"+number).src = "https:"+ dayIcon;

            var weekDayTemperature = element.day.maxtemp_c;
            document.getElementById("temperature"+number).innerHTML = weekDayTemperature +"&#8451;";
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
