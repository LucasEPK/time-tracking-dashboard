//this part makes it so the content on the page matches the default checked radio button or when the page is refreshed the content still matches the current radio button checked
let radio_daily = document.querySelector("#daily");
let radio_weekly = document.querySelector("#weekly");
let radio_monthly = document.querySelector("#monthly");

if (radio_daily.checked) {
    daily()
}
if (radio_weekly.checked) {
    weekly()
}
if (radio_monthly.checked) {
    monthly()
}

function daily() {
    fetch("data.json")
    
    .then(function(response) {
        return response.json();
    })
    
    .then(function(activities) {
        let placeholder = document.querySelector(".json_data");
    
        let out = "";
        let i = 1;
    
        for(let activity of activities){
            
    
            out += `
                <div class="card card-${i}">
                    <h3>${activity.title}</h3>
                    <p>${activity.timeframes.daily.current}hrs</p>
                    <p>Yesterday - ${activity.timeframes.daily.previous}hrs</p>
                </div>
            `;
    
            i += 1;
        }
    
        placeholder.innerHTML = out;
    })
}

function weekly() {
    fetch("data.json")
    
    .then(function(response) {
        return response.json();
    })
    
    .then(function(activities) {
        let placeholder = document.querySelector(".json_data");
    
        let out = "";
        let i = 2;
    
        for(let activity of activities){
            
    
            out += `
                <div class="card-${i}">
                    <h3>${activity.title}</h3>
                    <p>${activity.timeframes.weekly.current}hrs</p>
                    <p>Last Week - ${activity.timeframes.weekly.previous}hrs</p>
                </div>
            `;
    
            i += 1;
        }
    
        placeholder.innerHTML = out;
    })
}

function monthly() {
    fetch("data.json")
    
    .then(function(response) {
        return response.json();
    })
    
    .then(function(activities) {
        let placeholder = document.querySelector(".json_data");
    
        let out = "";
        let i = 2;
    
        for(let activity of activities){
            
    
            out += `
                <div class="card-${i}">
                    <h3>${activity.title}</h3>
                    <p>${activity.timeframes.monthly.current}hrs</p>
                    <p>Last Month - ${activity.timeframes.monthly.previous}hrs</p>
                </div>
            `;
    
            i += 1;
        }
    
        placeholder.innerHTML = out;
    })
}