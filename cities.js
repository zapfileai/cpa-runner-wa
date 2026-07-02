const washingtonCities = [
  "Quincy", "White Salmon", "Mountlake Terrace", "Sammamish", "Mukilteo",
  "Malaga", "Snoqualmie", "Sumner", "Roslyn", "Twisp",
  "Sumas", "Spangle", "Tracyton", "White Swan", "Vaughn",
  "Suquamish", "Westport", "Underwood", "Langley", "Packwood",
  "Randle", "Port Ludlow", "Snoqualmie Pass", "Port Townsend", "Leavenworth",
  "Lakebay", "Lynden", "Palouse", "Maple Valley", "Port Orchard",
  "Shelton", "Marysville", "Pullman", "Veradale", "Sedro Woolley",
  "Mead", "Silverdale", "Kingston", "West Richland", "Mcchord",
  "Odessa", "Lopez Island", "Winthrop", "Newman Lake", "Stevenson",
  "Union", "Newport", "Valleyford", "Waitsburg", "Pacific",
  "Washougal", "South Colby", "Selah", "Ocean Shores", "La Conner",
  "Nine Mile Falls", "Tumwater", "Winlock", "Trout Lake", "Tieton",
  "Toutle", "Steilacoom", "Woodland", "Uniontown", "Sprague",
  "Tenino", "Waterville", "Wilbur", "Yelm", "University Place",
  "Tekoa", "Sultan", "Toledo", "Zillah", "Toppenish",
  "Wauna", "Wellpinit", "Valley", "Warden", "Southworth",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < washingtonCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(washingtonCities[i]);
}

module.exports = { batches };
