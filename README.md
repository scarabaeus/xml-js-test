# xml-js

https://www.npmjs.com/package/xml-js

Output:

```
{
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
