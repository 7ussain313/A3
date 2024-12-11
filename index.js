// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";

  // Fetch data from the API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    })
    .then((data) => displayData(data.results)) // Pass records to the display function
    .catch((error) => console.error("Error fetching data:", error));
});

/**
 * Display records in the table
 * @param {Array} records - Fetched data
 */
function displayData(records) {
  const tableBody = document.querySelector("#data-table tbody");

  // Add each record as a table row
  records.forEach((record) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.year || "N/A"}</td>
      <td>${record.semester || "N/A"}</td>
      <td>${record.the_programs || "N/A"}</td>
      <td>${record.nationality || "N/A"}</td>
      <td>${record.colleges || "N/A"}</td>
      <td>${record.number_of_students || "N/A"}</td>
    `;
    tableBody.appendChild(row);
  });
}
