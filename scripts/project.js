document.addEventListener("DOMContentLoaded", function() {
    const yearDropdown = document.getElementById('yearDropdown');
    const commDescDropdown = document.getElementById('commDescDropdown');
    const prodDescDropdown = document.getElementById('prodDescDropdown');
    const commissionCategoryDropdown = document.getElementById('commissionCategoryDropdown');
    const totalBox = document.getElementById('totalBox');
    const submitButton = document.getElementById('submit');
    const totalAmountSpan = document.getElementById('totalAmount');
    const totalProductsList = document.getElementById('totalProducts');

    let totalProducts = [];

    // Function to fetch data from JSON file and populate dropdown options
    function populateDropdownOptions(dropdown, data) {
        // Clear existing options
        dropdown.innerHTML = '<option value="">Select an option</option>';
        
        // Extract unique values from data
        const uniqueValues = [...new Set(data.map(item => item.value))];

        // Add options based on unique values
        uniqueValues.forEach(value => {
            const optionElem = document.createElement('option');
            optionElem.value = value;
            optionElem.textContent = value;
            dropdown.appendChild(optionElem);
        });
    }

    // Function to calculate total amount
    function calculateTotalAmount(data) {
        return data.reduce((total, item) => {
            totalProducts.push(item.PROD_DESC); // Push product description to totalProducts array
            return total + parseFloat(item.Amount);
        }, 0);
    }

    // Function to fetch data from JSON file and populate table
    function populateTable(data) {
        const salesData = document.getElementById('salesData').getElementsByTagName('tbody')[0];
        salesData.innerHTML = ''; // Clear existing rows
        totalProducts = []; // Clear previous products

        let totalAmount = 0;

        data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.KIND_DESC}</td>
                <td>${item.COMM_DESC}</td>
                <td>${item.PROD_DESC}</td>
                <td>${item.MONTH}</td>
                <td>${item.AMOUNT}</td>
                <td>${item["COMMISSION CATEGORY"]}</td>
                <td>${item.YEAR}</td>
            `;
            salesData.appendChild(tr);

            // Accumulate total amount
            totalAmount += parseFloat(item.Amount);
        });

        // Update total box
        totalAmountSpan.textContent = `$${totalAmount.toFixed(2)}`;
        totalProductsList.innerHTML = ''; // Clear previous products
        totalProducts.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product;
            totalProductsList.appendChild(li);
        });
    }//C:\Users\flt1905\OneDrive - Liberty Holdings\Desktop\cse121b\scripts\project.js
    //C:\Users\flt1905\OneDrive - Liberty Holdings\Desktop\cse121b\scripts\output.json
    //C:\Users\flt1905\OneDrive - Liberty Holdings\Desktop\cse121b\project.html

    // Fetch data from JSON file and populate dropdowns
    fetch('output.json')
        .then(response => response.json())
        .then(data => {
            populateDropdownOptions(yearDropdown, data.map(item => ({value: item.YEAR, label: item.YEAR})));
            populateDropdownOptions(commDescDropdown, data.map(item => ({value: item.COMM_DESC, label: item.COMM_DESC})));
            populateDropdownOptions(prodDescDropdown, data.map(item => ({value: item.PROD_DESC, label: item.PROD_DESC})));
            populateDropdownOptions(commissionCategoryDropdown, data.map(item => ({value: item["COMMISSION CATEGORY"], label: item["COMMISSION CATEGORY"]})));

            // Update total box initially
            totalBox.textContent = `Total Amount: $${calculateTotalAmount(data).toFixed(2)}`;
        })
        .catch(error => console.error('Error fetching data:', error));

    // Event listener for submit button
    submitButton.addEventListener('click', function() {
        // Fetch selected options from dropdowns and filter data
        const yearValue = yearDropdown.value;
        const commDescValue = commDescDropdown.value;
        const prodDescValue = prodDescDropdown.value;
        const commissionCategoryValue = commissionCategoryDropdown.value;

        fetch('output.json')
            .then(response => response.json())
            .then(data => {
                let filteredData = data;
                if (yearValue) filteredData = filteredData.filter(item => item.YEAR === yearValue);
                if (commDescValue) filteredData = filteredData.filter(item => item.COMM_DESC === commDescValue);
                if (prodDescValue) filteredData = filteredData.filter(item => item.PROD_DESC === prodDescValue);
                if (commissionCategoryValue) filteredData = filteredData.filter(item => item["COMMISSION CATEGORY"] === commissionCategoryValue);
                
                // Populate table with filtered data
                populateTable(filteredData);
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
