# Web Scraper

## Getting Started

```shell
git clone git@github.com:aYo-dev/web-scrapper.git
cd web-scrapper
```

## Server

### Dependencies

PostgreSql - 9.5.8 or above
Node.js 6.6.0 or above

### Development

Go to server directory

```shell
cd server
npm install
```

Run init comand which execute migrations and seeds

```shell
npm run init
```

You can start the development server with:

```shell
npm start
```

### Examples

Create domain configuration:

post request to http://127.0.0.1:3030/domain/

data: 
``` shell
{
  "data": {
    "domain": "https://www.w3schools.com",
    "method": "xml",
    "md": [
      {
        "selector": "TITLE"
      }
    ]
  }
}
```

Scrap :

post request to http://127.0.0.1:3030/scrap/

data: 
``` shell
{
  "data": {
    "url": "https://www.w3schools.com/xml/cd_catalog.xml"
  }
}
```

response: 

``` shell
    {
    "data": [
        {
            "selector": "TITLE",
            "value": [
                "Empire Burlesque",
                "Hide your heart",
                "Greatest Hits",
                "Still got the blues",
                "Eros",
                "One night only",
                "Sylvias Mother",
                "Maggie May",
                "Romanza",
                "When a man loves a woman",
                "Black angel",
                "1999 Grammy Nominees",
                "For the good times",
                "Big Willie style",
                "Tupelo Honey",
                "Soulsville",
                "The very best of",
                "Stop",
                "Bridge of Spies",
                "Private Dancer",
                "Midt om natten",
                "Pavarotti Gala Concert",
                "The dock of the bay",
                "Picture book",
                "Red",
                "Unchain my heart"
            ]
        }
    ]
}
```

## Client

Go to client directory

```shell
cd client
```

### Dependencies

 Angular CLI

```shell
npm install -g @angular/cli
```

### Development

```shell
cd client
npm install
ng serve --open
```