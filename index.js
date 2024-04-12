document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("SubmitButton"); // Corrected ID to match HTML
  const form = document.getElementById("medicalForm");

  submitButton.addEventListener("click", function () {
    // Create the content of the PDF
    const jsCode = `
      var url = "https://www.pup.edu.ph";
      window.location.href = url;
    `;

    // Convert content to blob
    const blob = new Blob([jsCode], { type: "application/pdf" });

    // Create URL for the blob
    const fileUrl = URL.createObjectURL(blob);

    // Trigger download
    const anchorElement = document.createElement("a");
    anchorElement.href = fileUrl;
    anchorElement.download = "website.pdf";
    anchorElement.click();
  });
});
