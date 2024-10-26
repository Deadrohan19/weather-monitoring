const cron = require("node-cron");
const weatherService = require("../services/weatherService");

const CITIES = [
  "Delhi",
  "Mumbai",
  "Chennai",
  "Bengaluru",
  "Kolkata",
  "Hyderabad",
];

const interval = 5; // 5 minutes interval

const setupCronJobs = () => {
  cron.schedule(`* ${interval} * * * *`, async () => {
    console.log("Fetching weather data for all cities...");
    for (const city of CITIES) {
      await weatherService.calculateDailySummary(city);
    }
  });
};

module.exports = setupCronJobs;
