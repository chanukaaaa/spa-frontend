document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { size: '75000', category: 'Fitness Equipments', employee: 'dilshan', location: 'Purchasing', pipeline: 'eZute Sales', stage: 'Product Demo', updated: '2024-07-18 04:33:11' },
        { size: '6000', category: 'Hardware Company', employee: 'dilshan', location: 'Expire Location', pipeline: 'eZute Sales', stage: 'Negotiations', updated: '2024-07-17 04:33:11' },
        { size: '4500', category: 'Hardware Company', employee: 'dilshan', location: 'Expire Location', pipeline: 'eZute Sales', stage: 'Qualifies Lead', updated: '2024-07-16 04:33:11' },
        { size: '67800', category: 'Hardware Company', employee: 'Avishkaeshan', location: '', pipeline: 'eZute Sales', stage: 'Negotiations', updated: '2024-07-15 04:33:11' },
        { size: '3000', category: 'Hardware Company', employee: 'dilshan', location: 'Purchasing', pipeline: 'eZute Sales', stage: 'Leads', updated: '2024-07-14 04:33:11' }
    ];

    const tableBody = document.querySelector('#data-table tbody');

    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.size}</td>
                <td>${item.category}</td>
                <td>${item.employee}</td>
                <td>${item.location}</td>
                <td>${item.pipeline}</td>
                <td>${item.stage}</td>
                <td>${item.updated}</td>
                <td>                    
                    <button class="viewButton"><img src="view.png" alt="View" /></button>
                    <button class="editButton"><img src="edit.png" alt="Edit" /></button>
                    <button class="deleteButton"><img src="delete.png" alt="Delete" /></button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    renderTable(data);

    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchButton');
    const newDealButton = document.getElementById('newDealButton');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = data.filter(item =>
            item.size.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm) ||
            item.employee.toLowerCase().includes(searchTerm) ||
            item.location.toLowerCase().includes(searchTerm) ||
            item.pipeline.toLowerCase().includes(searchTerm) ||
            item.stage.toLowerCase().includes(searchTerm) ||
            item.updated.toLowerCase().includes(searchTerm)
        );
        renderTable(filteredData);
    });

    // Example of handling a new deal button click
    newDealButton.addEventListener('click', () => {
        // Implement your logic for handling new deal creation
        console.log('New deal button clicked');
    });
});
