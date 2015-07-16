<!doctype html>
<html ng-app="uwiaa">
<head>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <title>UWIAA</title>
</head>
<body>

    <!-- main content -->
    <div class="container">
        <div ui-view>
            <h1>Loading...</h1>
        </div>
    </div>

    <!-- Project Dependencies -->
    <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-cookies/angular-cookies.min.js"></script>
    <script type="text/javascript" src="bower_components/angular-resource/angular-resource.min.js"></script>
    <script type="text/javascript" src="bower_components/satellizer/satellizer.min.js"></script>

    <!-- Application Scripts -->
    <script type="text/javascript" src="app/app.js"></script>

    <!-- Controllers -->
    <script type="text/javascript" src="app/components/login/LoginCtrl.js"></script>
    <script type="text/javascript" src="app/components/register/RegisterCtrl.js"></script>
    <script type="text/javascript" src="app/components/user/UserCtrl.js"></script>
</body>
</html>