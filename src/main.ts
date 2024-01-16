import express from 'express';
import XmlJs from 'xml-js';

const app = express();

// const xml = `<?xml version="1.0" encoding="utf-8"?>
//   <note importance="high" logged="true">
//       <title>Happy</title>
//       <todo>Work</todo>
//       <todo>Play</todo>
//   </note>`;

const xml = `<SOAP-ENV:Body xmlns:m = "http://www.xyz.org/quotation">
<m:GetQuotationResponse>
   <m:Quotation>Here is the quotation</m:Quotation>
</m:GetQuotationResponse>
</SOAP-ENV:Body>`;

app.get('/', function (req, res) {
  const compact = XmlJs.xml2json(xml, { compact: true, spaces: 4 });
  const nonCompact = XmlJs.xml2json(xml, { compact: false, spaces: 4 });

  res.json({
    compact: JSON.parse(compact),
    nonCompact: JSON.parse(nonCompact),
  });
});

app.listen(3000);
