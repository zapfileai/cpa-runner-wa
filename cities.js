const washingtonCities = [
  "Seattle", "Spokane", "Bellevue", "Bellingham", "Lynnwood",
  "Eastsound", "Ephrata", "Tacoma", "Richland", "Farmington",
  "Greenacres", "Harrington", "Kent", "Carlton", "Albion",
  "Fall City", "Bothell", "Bremerton", "Freeland", "Grandview",
  "Camano Island", "Black Diamond", "Kenmore", "Fox Island", "Hobart",
  "Carson", "Allyn", "Dupont", "Centralia", "Creston",
  "Fairfield", "George", "Clarkston", "Beaver", "Arlington",
  "Cinebar", "Forks", "Kelso", "Elma", "Cle Elum",
  "East Wenatchee", "Connell", "Cashmere", "Garfield", "Cowiche",
  "Aberdeen", "Hoodsport", "Airway Heights", "Coulee Dam", "Davenport",
  "Cosmopolis", "Blaine", "Everett", "Kapowsin", "Granite Falls",
  "Lake Stevens", "Federal Way", "Camas", "Liberty Lake", "Amboy",
  "Dayton", "Brush Prairie", "Bainbridge Island", "Vancouver", "Issaquah",
  "Indianola", "Grapeview", "Mercer Island", "Burbank", "Ione",
  "Friday Harbor", "Fairchild", "Bingen", "Goldendale", "Colfax",
  "Coupeville", "Redmond", "Kennewick", "Granger", "Gig Harbor",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < washingtonCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(washingtonCities[i]);
}

module.exports = { batches };
