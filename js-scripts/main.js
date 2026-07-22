function downloadPdf() {
    const link = document.createElement('a');

    link.href = "../documents/Marc Kristian Lopez - Resume Updated - July 2026.pdf";
    link.download = "Marc-Lopez-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
}