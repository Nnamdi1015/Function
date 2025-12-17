const webStudents = ["charles", "ifeanyi", "austine", "victor", "frank"];
const designStudents = ["nancy", "faruk", "bob", "nk"];
const allStudents = webStudents.concat(designStudents);

//grab the html elements
const searchInputElem = document.getElementById("searchInput");
const searchBtnElem = document.getElementById("btn");
const listContainerElem = document.getElementById("list-container");

function displayResults(injectArray) {
    //clear previous results
    listContainerElem.innerHTML = "";

    //check if the lenght of the injectArray {allStudent array is empty}
    if (injectArray.length === 0) {
        // when there is no element in the array, display no matching names found
        listContainerElem.innerHTML = "<li>No matching names found</li>";
        return; // return block of code 
    };

    //iterate over the allStudent arry
    injectArray.forEach((name) => {
        // create a new (li)
        const listItem = document.createElement("li");
        //after creating an li element, assign the name of each student into the text content
        listItem.textContent = name;
        //append(add to) each <li> you created to the container <ul>
        listContainerElem.appendChild(listItem);
    });
}


//create function to handle search logic
function handleSearch(event) {
    //grab users search input
    //trim empty spaces and convert to lowercase
    const searchQuery = event.target.value.trim() .toLowerCase();

    if (searchQuery.length > 0) {
        //filter the allStudents array based on the users input query
        const filterBySearch = allStudents.filter((student) => {
            return allStudents.toLowerCase().includes(searchQuery);
     } );
    //display the filtered mames
    displayResults(filterBySearch);
     } else
        {
            //if the input is empty, display all names
            displayResults(allStudents);
        }
};

//add an event listener to the input box
searchInputElem.addEventListener("input", handleSearch);

//display all names from allStudents by default when the page loads

displayResults(allStudents);