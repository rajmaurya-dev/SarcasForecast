const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const weatherIcon = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = "Please write Name before Search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9b667a2645cba0b3b734589759fbb152`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerHTML = arrData[0].main.temp;
      //   temp_status.innerHTML = arrData[0].weather[0].main;
      //   console.log(arrData);
      // Get the weather condition code from the API response
      const conditionCode = data.weather[0].id;

      // Map the condition code to a Font Awesome icon name
      let iconName;
      if (conditionCode >= 200 && conditionCode <= 232) {
        iconName = "bolt";
      } else if (conditionCode >= 300 && conditionCode <= 321) {
        iconName = "cloud-showers-heavy";
      } else if (conditionCode >= 500 && conditionCode <= 531) {
        iconName = "cloud-rain";
      } else if (conditionCode >= 600 && conditionCode <= 622) {
        iconName = "snowflake";
      } else if (conditionCode >= 701 && conditionCode <= 781) {
        iconName = "smog";
      } else if (conditionCode === 800) {
        iconName = "sun";
      } else if (conditionCode >= 801 && conditionCode <= 804) {
        iconName = "cloud";
      } else {
        iconName = "question-circle";
      }

      // Set the Font Awesome icon class for the weather condition
      weatherIcon.className = `fas fa-${iconName}`;
      datahide.classList.remove("data_hide");
    } catch (error) {
      city_name.innerHTML = "error";
      datahide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
