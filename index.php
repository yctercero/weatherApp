<!DOCTYPE html>
<html lang="en-us" ng-app="weatherApp">
    <head>
        <title>AngularJS Weather Forecast SPA</title>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Gentium+Book+Basic:400italic' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="font-awesome-4.5.0/css/font-awesome.min.css">
        
        <!-- load jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        
        <!-- load angular via CDN -->
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
        <script src="https://code.angularjs.org/1.5.3/angular-route.js"></script>
        <script src="https://code.angularjs.org/1.5.3/angular-resource.min.js"></script>
        <script src="app.js"></script>
    </head>
    <body>

        <div class="container">
            
            <div ng-view>
                
            </div>

		</div>
    </body>
</html>