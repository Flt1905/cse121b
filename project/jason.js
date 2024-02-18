const fs = require('fs');
const xlsx = require('xlsx');

// Load Excel file
const workbook = xlsx.readFile('project/eport1.xlsx');

// Extract first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const jsonData = xlsx.utils.sheet_to_json(worksheet);

// Write JSON data to file
fs.writeFileSync('output.json', JSON.stringify(jsonData, null, 2));

console.log('JSON file created successfully!');
