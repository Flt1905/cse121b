document.addEventListener("DOMContentLoaded", function() {
    const commDescDropdown = document.getElementById('commDescDropdown');
    const prodDescDropdown = document.getElementById('prodDescDropdown');
    const monthDropdown = document.getElementById('monthDropdown');
    const yearDropdown = document.getElementById('yearDropdown');
    const submitButton = document.getElementById('submitButton');
    const salesTable = document.getElementById('salesTable');
    const salesDataBody = document.getElementById('salesData');
    const totalAmountSpan = document.getElementById('totalAmount');

    let salesData = []; // To store original sales data

    // Function to fetch data from JSON file and populate dropdowns
    function fetchData() {
        fetch('output.json')
            .then(response => response.json())
            .then(data => {
                salesData = data;
                populateDropdowns();
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to populate dropdowns with unique values
    function populateDropdowns() {
        const uniqueCommDesc = [...new Set(salesData.map(item => item.COMM_DESC))];
        const uniqueProdDesc = [...new Set(salesData.map(item => item.PROD_DESC))];
        const uniqueMonths = [...new Set(salesData.map(item => item.MONTH))];
        const uniqueYears = [...new Set(salesData.map(item => item.YEAR))];

        populateDropdown(commDescDropdown, uniqueCommDesc);
        populateDropdown(prodDescDropdown, uniqueProdDesc);
        populateDropdown(monthDropdown, uniqueMonths);
        populateDropdown(yearDropdown, uniqueYears);
    }

    // Function to populate a dropdown with options
    function populateDropdown(dropdown, options) {
        dropdown.innerHTML = '';
        options.forEach(option => {
            const optionElem = document.createElement('option');
            optionElem.value = option;
            optionElem.textContent = option;
            dropdown.appendChild(optionElem);
        });
    }

    // Event listener for submit button
    submitButton.addEventListener('click', function() {
        const commDesc = commDescDropdown.value;
        const prodDesc = prodDescDropdown.value;
        const month = monthDropdown.value;
        const year = yearDropdown.value;

        // Filter data based on selected options
        const filteredData = salesData.filter(item =>
            (!commDesc || item.COMM_DESC === commDesc) &&
            (!prodDesc || item.PROD_DESC === prodDesc) &&
            (!month || item.MONTH === month) &&
            (!year || item.YEAR.toString() === year)
        );

        // Populate table with filtered data
        populateTable(filteredData);

        // Calculate and display total amount
        const totalAmount = filteredData.reduce((total, item) => total + parseFloat(item.AMOUNT), 0);
        totalAmountSpan.innerHTML = `$${totalAmount.toFixed(2)}`;
    });

// Function to populate the table
function populateTable(data) {
    const salesData = document.getElementById('salesData');
    salesData.innerHTML = '';

    // Create table headers
    const tableHeaders = document.createElement('tr');
    tableHeaders.innerHTML = `
        <th>KIND_DESC</th>
        <th>PROD_DESC</th>
        <th>AMOUNT</th>
    `;
    salesData.appendChild(tableHeaders);

    // Populate table rows
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.KIND_DESC}</td>
            <td>${item.PROD_DESC}</td>
            <td>${item.AMOUNT}</td> <!-- Make sure this property name matches the one in your JSON data -->
        `;
        salesData.appendChild(row);
    });
}




    // Fetch data and populate dropdowns on page load
    fetchData();
});

