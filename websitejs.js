
function openPopup() {
            // Define the URL you want to open in the popup
            const url = 'https://www.example.com';

            // Specify the width and height of the popup window
            const width = 600;
            const height = 400;

            // Define other window features (optional)
            const features = `width=${width},height=${height},resizable=yes,scrollbars=yes`;

            // Open the popup window
            const popup = window.open(url, 'PopupWindow', features);

            // Focus on the popup window (optional)
            if (popup) {
                popup.focus();
            }
        }


function showDescription(bikeType) {
    const description = document.querySelector(`.${bikeType}-description`);
    switch (bikeType) {
    case 'MB':
                description.textContent = "This is a mountain bike.";
                break;
            case 'BMX':
                description.textContent = "This is a BMX bike.";
                break;
            case 'RB':
                description.textContent = "This is a recumbent bicycle.";
                break;
            case 'EB':
                description.textContent = "This is a electric bicycle.";
                break;
            case 'RoadB':
                description.textContent = "This is a road bicycle.";
                break;
            default:
                description.textContent = "";
    }
}

//Attempting to count how many checkboxes have been clicked to display in window
if (window.location.pathname.endsWith("/index.html")) {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    name.addEventListener("change", verifyName);
    email.addEventListener("change", verifyEmail);
    submit.addEventListener("click", validateList);

    function verifyForm() {


        let count = 0;

        if (document.getElementById("bicycle").checked) {
            count++;
        }
        if (document.getElementById("canoe").checked) {
            count++;
        }
        if (document.getElementById("vest").checked) {
            count++;
        }
        if (document.getElementById("rope").checked) {
            count++;
        }
        let checkComplete = (isNameValid && isEmailValid && isSelectionValid && count > 0);

        if (checkComplete) {
            window.alert("Thank You! You have entered the giveaway for " + count + " items");
        }
        else {
            window.alert("Please fill in the name, email, selection list and select at least one item.");
            event.preventDefault(); // Prevent form submission


        }

     };
    submit.addEventListener("click", verifyForm);

    /*
     These functions will be used to verify that the name and email fields
           have acceptable values
            */

    function verifyName(name) {
        try {
            const name = document.getElementById("name").value; // Get the value of the "Name" input field
            const digitRegex = /\d/;
            isNameValid = true;


        if (digitRegex.test(name)){
             isNameValid = false;
             throw "Name shouldn't include digits";


        }
        else {
            //clear error message
            document.getElementById("warning").innerHTML = "";
                 }
        }
        catch (error) {
            warning.innerHTML = error;
        }

    }

    function verifyEmail(email) {
        try {
            const email = document.getElementById("email").value;
            const emailRegex = /\S+@\S+/; // check for the '@' symbol in between text

         if(!emailRegex.test(email)) {
            throw "Must include the @ symbol in email";
            isEmailValid = false;

         }
         else {
            //clear error message
            document.getElementById("emailWarning").innerHTML = "";
            isEmailValid = true;
                 }
        }
        catch (error) {
            emailWarning.innerHTML = error;

        }
    }

    function validateList() {
        let selection = document.getElementById("selectionList");
        if (selection.selectedIndex == 0) {
            selection.setCustomValidity("Please select an option");
            isSelectionValid = false;
        } else {
            selection.setCustomValidity("");
            isSelectionValid = true;
        }
    }
}



// Web Security page
// Checks if the current page is webSecurity.html
if (window.location.pathname.endsWith("/webSecurity.html")) {
    //Navigation bar
    let navBar = document.createElement("nav");
    navBar.className = ("nav-bar")
    let unorderedList = document.createElement("ul");


    let links = [
        { name: "Home", href: "index.html" },
        { name: "Running", href: "running.html" },
        { name: "Biking", href: "biking.html" },
        { name: "Canoeing", href: "canoeing.html" },
        { name: "Rock Climbing", href: "rockClimbing.html" },
        { name: "Web Security", href: "webSecurity.html" }
    ];

    // creates list items each with anchor tag
    for (let i = 0; i <links.length; i++) {
        let listItem = document.createElement("li");
        let anchor = document.createElement("a");
        anchor.href = links[i].href;
        anchor.textContent = links[i].name;
        listItem.appendChild(anchor);
        unorderedList.appendChild(listItem);
    }

    // Append ul to nav
    navBar.appendChild(unorderedList);

    // append the nav bar to the document's div
    let navDiv = document.getElementById("navigationBar");
    navDiv.appendChild(navBar);

    // banner
    let banner = document.createElement("section");
    banner.className = ("banner")
    let image = document.createElement("img");
    image.src = ("lock.png");
    banner.appendChild(image);

    //append section to the document div
    let bannerDiv = document.getElementById("banner");
    bannerDiv.appendChild(banner);

    // column
    let column = document.createElement("section");
    column.className = ("column");
    let pageHeading = document.createElement("h1");
    pageHeading.textContent = ("Staying Safe Online");
    column.appendChild(pageHeading);

    let heading1 = document.createElement("h2");
    heading1.textContent = ("What To Look Out For");
    column.appendChild(heading1);
    // Phishing Section
    let subHeading1 = document.createElement("h3");
    subHeading1.textContent = ("Phishing");
    column.appendChild(subHeading1);
    let content1 = document.createElement("p");
    content1.textContent = ("One of the most important ways you can " +
    "stay safe online is by ensuring you know who is sending you messages. " +
    "A common scheme is someone impersonating someone or a company you know. "+
    "An example of this is receiving an email from your bank urgently warning you " +
    "that you need to review suspicious activity on your account. A direct link is " +
    "provided as an attachment with the email. Do not click the link. The best approach " +
    "is to visit the bank's site or application as you usually do. In addition, verify " +
    "the sender's email address. Is the email from a personal email address or is it " +
    "missing characters? Another characteristic of a phishing scam is that the email " +
    "wont address you by your name and instead say 'Dear Customer'. This is a "+
    "result of the same email being sent to thousands of people. Remember to not "+
    "be pressured by demanding emails and take the time to verify who the sender is. " +
    "Learn more at: ");
    // Link to site
    let learnMoreLink1 = document.createElement("a");
    learnMoreLink1.href = "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams";
    learnMoreLink1.textContent = "FTC Website";
    content1.appendChild(learnMoreLink1);
    column.appendChild(content1);
    // Virus Section
    let subHeading2 = document.createElement("h3");
    subHeading2.textContent = ("Viruses and Malware");
    column.appendChild(subHeading2);
    let content2 = document.createElement("p");
    content2.textContent = ("The risk of clicking an attachment from an unknown " +
    "source is the risk of introducing viruses to your computer. These viruses " +
    "can slow down your network, take up space and even remove files. " +
    "To stay safe don't open attachments from unknown senders as well as verifying the " +
    "file contents from people you do know. Some options to verify the safety of a link " +
    "are to copy the link and check it with a URL tool to view its destination or use " +
    "an antivirus software to review the " +
    "contents of a file before opening it. Learn more about viruses at: ");

    // Link to site
    let learnMoreLink2 = document.createElement("a");
    learnMoreLink2.href = "https://www.cisa.gov/news-events/news/virus-basics#:~:text=Most%20viruses%2C%20Trojan%20horses%2C%20and,available%20in%20your%20email%20messages.";
    learnMoreLink2.textContent = "CISA Website";
    content2.appendChild(learnMoreLink2);
    column.appendChild(content2);

    // Personal Information section
    let subHeading3 = document.createElement("h3");
    subHeading3.textContent = ("Personal Information");
    column.appendChild(subHeading3);
    let content3 = document.createElement("p");
    content3.textContent = ("Many services such as banking, billing, shopping and entertainment " +
    "have moved online. These services often let users save their information for future reference. " +
    "The risk this brings is that personal information such your address and payment information " +
    "can know be more widely found. To protect your information you must make sure you have strong " +
    "passwords and if possible two-factor authentication. Your passwords should contain a variety of characters and numbers to prevent them from " +
    "being guessed. Enabling two-factor authentication would require an intruder to have access to more information such as your phone or your email. Using a password manager such as 'Last Pass' allows you to store and access your " +
    "passwords so you don't have to remember them. Another step you can take to protect your information " +
    "including your location is by using a VPN when on public networks to prevent others from intercepting " +
    "your traffic as well as making it seem as is you are sending data from a different location. The table " +
    "below displays some of the information that is frequently shared with your browser. You can learn more about two-factor authentication at: ");
    // Link to site
    let learnMoreLink3 = document.createElement("a");
    learnMoreLink3.href = "https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts";
    learnMoreLink3.textContent = "FTC Website";
    content3.appendChild(learnMoreLink3);


    column.appendChild(content3);







    // table
    let table = document.createElement("table");
    table.id = ("table")
    let caption = document.createElement("caption");
    caption.textContent = " What Information A Web Application Can Access"
    table.appendChild(caption);
    let tableRow1 = document.createElement("tr");

    // six points broken up into two arrays, one for each row

    let tableRow1Array = [
        "user's current location",
         "browser's activity status",
          "user's platform"];
    // create a cell for each item in row
    for (let i = 0; i < tableRow1Array.length; i++) {
        let tableCellR1 = document.createElement("td");
        tableCellR1.textContent = tableRow1Array[i];
        tableRow1.appendChild(tableCellR1);
    }
    table.appendChild(tableRow1);

    let tableRow2  = document.createElement("tr");
    let tableRow2Array = [
        "browser's primary language",
         "height of your screen",
         "width of your screen"];

    for (let i = 0; i < tableRow2Array.length; i++) {
        let tableCellR2 = document.createElement("td");
        tableCellR2.textContent = tableRow2Array[i];
        tableRow2.appendChild(tableCellR2);
    }
    table.appendChild(tableRow2);
    column.appendChild(table);

    let columnDiv = document.getElementById("column");
    columnDiv.appendChild(column);

}




/* Previous Attempt
let listItem = document.createElement("li");
let anchor = document.createElement("a");
// Add links to href attributes with a name to go along
let anchorTxt = document.createTextNode("");
anchor.href = "";

// Next step is to append them to one another
navBar.appendChild(unorderedList);
unorderedList.appendChild(listItem);
listItem.appendChild(anchor);
anchorTxt.appendChild(anchorTxt);

// place variables in document by their ID
let navDiv = document.getElementById("navigationBar");
navDiv.appendChild(navBar);
*/

/* Learned that if the same structure is used for multiple pages
its best to have the elements in the HTML files and then populate
them through javaScript, but if the structure is unique to one page
creating the elements through JavaScript is fine. */