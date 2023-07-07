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
                <p>${activity.timeframes.daily.current}</p>
                <p>${activity.timeframes.daily.previous}</p>
            </div>
        `;

        i += 1;
    }

    placeholder.innerHTML = out;
})