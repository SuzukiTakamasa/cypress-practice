const Papa = require('papaparse');

export default function parseCSV(filePath: string) {
    const csvString = cy.readFile(filePath, 'utf8');
    return csvString.then(content => {
        return Papa.parse(content, { header: true, skipEmptyLines: true }).data;
    });
}
