<div class="row">
	<div class="col-md-6 col-md-offset-3">
		<h4>Forecast by City</h4>
		<div class="form-group">
			<input type="text" ng-model="city" class="form-control"/>
		</div>
		<a href="#/forecast" class="btn btn-primary">Get Forecast</a>
		<div id="searchResultsDisplay" class="list-group">
			<div search-result></div>
		</div>
	</div>
</div>