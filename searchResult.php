<div ng-repeat="s in searches" class="clearfix">
	<a href="#/forecast/#{{ s.city_id }}">
		<h3>{{ s.name }}, {{ s.state }} <i class="fa fa-long-arrow-right"></i></h3>
	</a>
</div>