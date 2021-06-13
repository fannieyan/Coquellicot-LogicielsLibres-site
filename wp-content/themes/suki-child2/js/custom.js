/* When user clicks on the button, shows the hidden text */
function openText(evt, textId) {
    var i, x, tablinks;
    x = document.getElementsByClassName("displayable-text");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-button", "");
    }
    document.getElementById(textId).style.display = "block";
    evt.currentTarget.className += " active-button";
}

/* Same but shows all text */
function openAllText() {
    var i, x, tablinks;
    x = document.getElementsByClassName("displayable-text");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}

/* Show/Hide button */
function showHide(evt, textId) {
    document.getElementById(textId).classList.toggle("show");
    //evt.currentTarget.className += " active-button";
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropTheMenu(evt, textId) {
    document.getElementById("Dropdown").classList.toggle("show");
    if (textId == "All") {
        document.getElementById("dropdownButton").innerHTML = "Toutes";
        openAllText();
    } else if (textId != "Dropdown") {
        document.getElementById("dropdownButton").innerHTML = textId;
        openText(evt, textId);
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!(event.target.matches('.dropbtn') || event.target.matches('input'))) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("Dropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}