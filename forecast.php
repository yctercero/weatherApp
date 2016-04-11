<h6><a href="http://localhost:8888/WeatherApp/#/"><i class="fa fa-long-arrow-left" aria-hidden="true"></i>Back to Search</a></h6>
<h1>{{ weatherResult.city.name }}</h1>
<table class="dayWeatherWrap clearfix">
	<tr>
		<td></td>
		<td></td>
		<td><h6>Avg</h6></td>
		<td><h6>Max</h6></td>
		<td><h6>Min</h6></td>
	</tr>
	<tr ng-repeat="w in weatherResult.list">
		<td><h3>{{ convertToDate(w.dt) | date: 'EEE' }}</h3></td>
		<td>
			<img src="{{ getIcon(w.weather[0].icon) }}">
			<h5>{{ w.weather[0].description }}</h5>
		</td>
		<td>{{ convertToFahrenheit(w.temp.day) }} &deg;</td>
		<td>{{ convertToFahrenheit(w.temp.max) }} &deg;</td>
		<td>{{ convertToFahrenheit(w.temp.min) }} &deg;</td>
	</tr>
</table>
