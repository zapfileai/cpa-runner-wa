const washingtonCities = [
  "Hoquiam", "Kalama", "Hansville", "Centerville", "Auburn",
  "Graham", "Carnation", "Battle Ground", "Buckley", "Ilwaco",
  "Clinton", "Coulee City", "Bonney Lake", "College Place", "Grand Coulee",
  "Ferndale", "Bow", "Asotin", "Benton City", "Anatone",
  "Colville", "Duvall", "Brewster", "Castle Rock", "La Center",
  "Greenbank", "Chelan", "Anderson Island", "Edwall", "Chewelah",
  "Ellensburg", "Deer Harbor", "Everson", "Elk", "Cheney",
  "Anacortes", "Deming", "Easton", "East Olympia", "Eatonville",
  "Colbert", "Chattaroy", "Edmonds", "Enumclaw", "Clayton",
  "Burlington", "Deer Park", "Belfair", "Chehalis", "North Bend",
  "Pasco", "Olympia", "Renton", "Medina", "Kirkland",
  "Lacey", "Puyallup", "Stanwood", "Yakima", "Longview",
  "Lakewood", "Sequim", "Moses Lake", "Woodinville", "Poulsbo",
  "Prosser", "Wenatchee", "Port Angeles", "Otis Orchards", "Milton",
  "Ridgefield", "Sunnyside", "Orting", "Rochester", "Mount Vernon",
  "Snohomish", "Walla Walla", "Vashon", "South Bend", "Spanaway",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < washingtonCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(washingtonCities[i]);
}

module.exports = { batches };
