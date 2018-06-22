var objArray = [];

objName = "jasonsdeli"

function jobMaker (businessName, positionName, payRateName) {
    let myObj = Object.create({}, {
        business: {
            value: businessName
        },
        position: {
            value: positionName
        },
        payRate: {
            value: payRateName
        }

    })
    objArray.push(myObj);
}

jobMaker("Local Taco", "Prep", "7.25");
jobMaker("Moe's SW Grill", "Cook", "8.25");
jobMaker("Americas Bar", "DJ", "30.00");
jobMaker("The Diner", "Barback", "10.00+");

for(let i = 0; i < objArray.length; i++){
    let article = document.createElement("article");
    article.id = objArray[i].business;
    article.style.height = "200px";
    article.style.border = "2px solid black";
    article.style.margin = "2em";
    article.style.padding = "1em";

    let title = document.createElement("h2");
    title.textContent = `Business: ${objArray[i].business}`;
    article.appendChild(title);
    article.appendChild(document.createElement("br"));

    let position = document.createElement("p");
    position.textContent = `Position: ${objArray[i].position}`;
    article.appendChild(position);
    article.appendChild(document.createElement("br"));

    let rate = document.createElement("p");
    rate.textContent = `Rate of pay: ${objArray[i].payRate}`
    article.appendChild(rate);

    document.querySelector("body").appendChild(article);
}