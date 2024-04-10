// function fetchAPI() {
//     const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY"

// fetch("8WLMWLBLFXX62JLAV3QSC6GWR")
// .then((res)=>res.json())
// .then(renderUI);
// }
// fetchAPI();

// function renderUI(data){
//     const days = data.days;
//     console.log(days);

    // const row = document.createElement("tr");

    // const cell1 = document.createElement("th");
    // cell1.innertext ='Date';
    // row.appendChild(cell1);

    // const cell2 = document.createElement("th");
    // cell2.innerText = 'Maximum Temprature';
    // row.appendChild(cell2);

    // const cell3 = document.createElement("th");
    // cell3.innerText = 'Minimum Temprature';
    // row.appendChild(cell3);

    // row.appendChild(row);
    root.append(row);
    const childRow = document.createElement("tr")
    const c1 = document.createElement("td");
    cell1.innerText = 'Date';
    childRow.appendChild(c1);

    // const childRow = document.createElement("row")
    const c2 = document.createElement("td");
    cell2.innerText = 'Date';
    childRow.appendChild(c2);

    // const childRow = document.createElement("row")
    const c3 = document.createElement("th");
    cell3.innerText = 'Date';
    childRow.appendChild(c3);
    root.appendChild(childRow);

    renderUI();

    


