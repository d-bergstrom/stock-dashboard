//Alpha Vantage API - Search Endpoint
//https://www.alphavantage.co/documentation/#symbolsearch
export const mockSearchResults = {
    "bestMatches": [
        {
            "1. symbol": "TSCO.LON",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "GBX",
            "9. matchScore": "0.7273"
        },
        {
            "1. symbol": "TSCDF",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TSCDY",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TCO2.FRK",
            "2. name": "TESCO PLC ADR/1 LS-05",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        },
        {
            "1. symbol": "TCO0.FRK",
            "2. name": "TESCO PLC LS-0633333",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        }
    ]
};

//Finnhub API - Company Details
//https://finnhub.io/docs/api/company-profile2
export const mockCompanyDetails = {
    "country": "US",
    "currency": "USD",
    "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
    "ipo": "1980-12-12",
    "marketCapitalization": 1415993,
    "name": "Apple Inc",
    "phone": "14089961010",
    "shareOutstanding": 4375.47998046875,
    "ticker": "AAPL",
    "weburl": "https://www.apple.com/",
    "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    "finnhubIndustry":"Technology"
};

//Finnhub API - Stock Quote
//https://finnhub.io/docs/api/quote
export const stockQuote = {
    "c": 261.74,
    "h": 263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
    "t": 1582641000 
};

//Finnhub API - Historical Stock Candle Data
//https://finnhub.io/docs/api/stock-candles
export const mockHistoricalData = {
    "c": [
      217.68,
      221.03,
      219.89
    ],
    "h": [
      222.49,
      221.5,
      220.94
    ],
    "l": [
      217.19,
      217.1402,
      218.83
    ],
    "o": [
      221.03,
      218.55,
      220
    ],
    "s": "ok",
    "t": [
      1569297600,
      1569384000,
      1569470400
    ],
    "v": [
      33463820,
      24018876,
      20730608
    ]
};