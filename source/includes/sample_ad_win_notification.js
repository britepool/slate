
let def = [
	{
		"Abbreviation": "a",
		"Name": "APIKey",
		"Required": true,
		"Comments": null,
		"Sample": "XKCD-asfjgasfa-fasfahsaf"
	},
	{
		"Abbreviation": "d",
		"Name": "Domain",
		"Required": true,
		"Comments": "Original URL",
		"Sample": "https://www.publisher.com"
	},
	{
		"Abbreviation": "ss",
		"Name": "SSP",
		"Required": false,
		"Comments": null,
		"Sample": "some-ssp"
	},
	{
		"Abbreviation": "pu",
		"Name": "PublisherID",
		"Required": true,
		"Comments": null,
		"Sample": "12345"
	},
	{
		"Abbreviation": "si",
		"Name": "SiteID",
		"Required": true,
		"Comments": null,
		"Sample": "654321"
	},
	{
		"Abbreviation": "bp",
		"Name": "BritePoolID",
		"Required": true,
		"Comments": null,
		"Sample": "gf42-sfgasf-2342-asdd"
	},
	{
		"Abbreviation": "o",
		"Name": "OtherIds",
		"Required": false,
		"Comments": "Json dictionary of other ids",
		"Sample": {"mm": "54321ab"}
	},
	{
		"Abbreviation": "sz",
		"Name": "Size",
		"Required": false,
		"Comments": null,
		"Sample": "300x250"
	},
	{
		"Abbreviation": "c",
		"Name": "CPM",
		"Required": true,
		"Comments": null,
		"Sample": 5.87
	},
	{
		"Abbreviation": "mt",
		"Name": "MediaType",
		"Required": false,
		"Comments": null,
		"Sample": "banner"
	},
	{
		"Abbreviation": "bi",
		"Name": "BuyerID",
		"Required": true,
		"Comments": null,
		"Sample": "654321"
	},
	{
		"Abbreviation": "aid",
		"Name": "AuctionID",
		"Required": true,
		"Comments": null,
		"Sample": "1234567abcd"
	},
	{
		"Abbreviation": "cs",
		"Name": "ConsentString",
		"Required": false,
		"Comments": null,
		"Sample": ""
	},
	{
		"Abbreviation": "di",
		"Name": "DealID",
		"Required": false,
		"Comments": null,
		"Sample": "DS12345"
	}
];
let API_KEY = "XKCD-asfjgasfa-fasfahsaf";
let EventData = {

	"Domain": "https://www.publisher.com",
	"SSP": "some-ssp",
	"PublisherID": "12345",
	"SiteID": "654321",
	"BritePoolID": "gf42-sfgasf-2342-asdd",
	"OtherIds": {
		"mm": "54321ab"
	},
	"Size": "300x250",
	"CPM": 5.87,
	"MediaType": "banner",
	"BuyerID": "654321",
	"AuctionID": "1234567abcd",
	"ConsentString": "",
	"DealID": "DS12345"
};

let data = {
	"a": "XKCD-asfjgasfa-fasfahsaf",
	"d": "https://www.publisher.com",
	"ss": "some-ssp",
	"pu": "12345",
	"si": "654321",
	"bp": "gf42-sfgasf-2342-asdd",
	"o": {
		"mm": "54321ab"
	},
	"sz": "300x250",
	"c": 5.87,
	"mt": "banner",
	"bi": "654321",
	"aid": "1234567abcd",
	"cs": "",
	"di": "DS12345"
};


let sample = def.reduce((magic, value) => {
	magic[value.Abbreviation] = value.Sample;
	return magic;
}, {});

console.log(JSON.stringify(sample, null, 2))
