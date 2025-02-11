export default function downloadArrayAsCSV(data, filename = "data.csv") {
    // Function to escape fields with commas or double quotes
    const escapeCSVField = (field) => {
        if (field.includes('"')) {
            field = field.replace(/"/g, '""'); // Escape double quotes
        }
        if (field.includes(",") || field.includes("\n")) {
            field = `"${field}"`; // Enclose in double quotes
        }
        return field;
    };
    // Step 1: Convert the array to a CSV string with proper escaping
    const csvContent = data
        .map((row) => row.filter(Boolean).map(escapeCSVField).join(","))
        .join("\n");
    // Add BOM for UTF-8 encoding
    const bom = "\uFEFF";
    // Step 2: Create a Blob object from the CSV string with BOM
    const blob = new Blob([bom + csvContent], {
        type: "text/csv;charset=utf-8;",
    });
    // Step 3: Create a download link for the Blob and trigger a click event on the link
    const link = document.createElement("a");
    if (link.download !== undefined) {
        // feature detection
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
