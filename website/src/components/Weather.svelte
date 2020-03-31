<script>
  import { onMount } from "svelte";
  let data;
  let status;

  function locateUser(handleSuccess, handleError) {
    if (!navigator.geolocation) {
      status = "Geolocation is not supported by your browser";
    } else {
      status = "Locating...";
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }

  onMount(() => {
    function handleError() {
      status = "Unable to retrieve you location";
      return status;
    }
    async function handleSuccess(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1051546b60dcda58e3253c6ff3b96ba2`
      )
        .then(res => res.json())
        .then(weatherData => (data = weatherData));
    }
    locateUser(handleSuccess, handleError);
  });
</script>

{#if data}
  <div class="hero__forecast">
    <p>
      Current weather forecast in
      <strong>{data.name}</strong>
    </p>
    <p>
      <img
        src="http://openweathermap.org/img/wn/{data.weather[0].icon}.png"
        alt="weather icon" />
      , {data.weather[0].main}
    </p>
    <p>
      <span>
        {(data.main.temp - 273.15).toFixed(2, 10)}
        <sup>o</sup>
        <strong>C</strong>
      </span>
      <span>-</span>
      <span>
        {(((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(2, 10)}
        <sup>o</sup>
        <strong>F</strong>
      </span>
    </p>
  </div>
{:else}
  <div class="hero__forecast">
    <p>{status}</p>
  </div>
{/if}
