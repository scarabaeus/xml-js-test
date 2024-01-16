# xml-js

https://www.npmjs.com/package/xml-js

Input:

```xml
<SOAP-ENV:Body xmlns:m = "http://www.xyz.org/quotation">
  <m:GetQuotationResponse>
    <m:Quotation>Here is the quotation</m:Quotation>
  </m:GetQuotationResponse>
</SOAP-ENV:Body>
```

Output:

```json
{
  // Compact Output
  "compact": {
    "SOAP-ENV:Body": {
      "_attributes": {
        "xmlns:m": "http://www.xyz.org/quotation"
      },
      "m:GetQuotationResponse": {
        "m:Quotation": {
          "_text": "Here is the quotation"
        }
      }
    }
  },

  // Non-compact output
  "nonCompact": {
    "elements": [
      {
        "type": "element",
        "name": "SOAP-ENV:Body",
        "attributes": {
          "xmlns:m": "http://www.xyz.org/quotation"
        },
        "elements": [
          {
            "type": "element",
            "name": "m:GetQuotationResponse",
            "elements": [
              {
                "type": "element",
                "name": "m:Quotation",
                "elements": [
                  {
                    "type": "text",
                    "text": "Here is the quotation"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

Related:

- https://github.com/scarabaeus/xml2js-test
- https://github.com/scarabaeus/xml-js-test
