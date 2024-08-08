const puppeteer = require("puppeteer");

const generatePdf = async (htmlContent) => {
  const browser = await puppeteer.launch({
    headless: true,

    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  const customStyles = `
    <style>
      body { font-family: Arial, sans-serif; }
      .heading { text-align: center; font-size: 20px; font-weight: 800; padding-bottom: 10px; }
      .title { text-align: center; font-size: 16px; font-weight: 600; padding-bottom: 10px; }
      p { margin-bottom: 10px; font-size: 18px;}
      span { display: inline-block; width: 100%; border-bottom: 1px solid #000; height: 20px; }
    </style>
  `;

  await page.setContent(customStyles + htmlContent, {
    waitUntil: "networkidle0",
  });

  const pdfBuffer = await page.pdf({
    format: "A4",
    margin: { top: 40, right: 20, bottom: 10, left: 20 },
  });
  await browser.close();
  return pdfBuffer;
};

module.exports = generatePdf;
