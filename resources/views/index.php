<!doctype html>
<html ng-app="uwiaa">
<head>
    <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="bower_components/font-awesome/css/font-awesome.min.css">
    <link rel='stylesheet' href='/bower_components/textAngular/dist/textAngular.css'>
    <title>UWIAA</title>
</head>
<body>
    <navbar></navbar>
    <!-- main content -->
    <div class="wrapper">
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

    <script type="text/javascript" src='bower_components/textAngular/dist/textAngular-rangy.min.js'></script>
    <script type="text/javascript" src='bower_components/textAngular/dist/textAngular-sanitize.min.js'></script>
    <script type="text/javascript" src='bower_components/textAngular/dist/textAngular.min.js'></script>

    <!-- Application Scripts -->
    <script type="text/javascript" src="app/app.js"></script>

    <!-- Directives -->
    <script type="text/javascript" src="app/shared/navbar/navbar.js"></script>
    <script type="text/javascript" src="app/shared/navbar/NavbarCtrl.js"></script>

    <script type="text/javascript" src="app/shared/comment/comment.js"></script>
    <script type="text/javascript" src="app/shared/comment/CommentCtrl.js"></script>

    <!-- Controllers -->
    <!-- Session -->
    <script type="text/javascript" src="app/components/login/LoginCtrl.js"></script>
    <script type="text/javascript" src="app/components/register/RegisterCtrl.js"></script>

    <!-- User -->
    <script type="text/javascript" src="app/components/users/UserListCtrl.js"></script>
    <script type="text/javascript" src="app/components/users/UserShowCtrl.js"></script>

    <!-- Pages -->
    <script type="text/javascript" src="app/components/home/HomeCtrl.js"></script>
    <script type="text/javascript" src="app/components/about/AboutCtrl.js"></script>

    <!-- Posts -->
    <script type="text/javascript" src="app/components/posts/PostListCtrl.js"></script>
    <script type="text/javascript" src="app/components/posts/PostNewCtrl.js"></script>
    <script type="text/javascript" src="app/components/posts/PostShowCtrl.js"></script>




    <!-- Messages -->
    <script type="text/javascript" src="app/components/messages/MessageListCtrl.js"></script>
    <script type="text/javascript" src="app/components/messages/MessageNewCtrl.js"></script>

</body>
</html>