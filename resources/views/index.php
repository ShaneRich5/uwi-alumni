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
    <script type="text/javascript" src="bower_components/markdown/lib/markdown.js"></script>
    <script type="text/javascript" src="bower_components/angular-resource/angular-resource.min.js"></script>
    <script type="text/javascript" src='bower_components/textAngular/dist/textAngular-rangy.min.js'></script>
    <script type="text/javascript" src='bower_components/textAngular/dist/textAngular-sanitize.min.js'></script>
    <script type="text/javascript" src='bower_components/textAngular/dist/textAngular.min.js'></script>

    <!-- Application Scripts -->
    <script type="text/javascript" src="app/uwiaa.js"></script>

    <!-- Services -->
    <script type="text/javascript" src="app/services/post/post.js"></script>
    <script type="text/javascript" src="app/services/comment/comment.js"></script>

    <!-- Directives -->
    <script type="text/javascript" src="app/directives/navbar/navbar.js"></script>
    <script type="text/javascript" src="app/directives/navbar/NavbarCtrl.js"></script>

    <script type="text/javascript" src="app/directives/post/PostCtrl.js"></script>
    <script type="text/javascript" src="app/directives/post/post.js"></script>

    <script type="text/javascript" src="app/directives/comment/CommentCtrl.js"></script>
    <script type="text/javascript" src="app/directives/comment/comment.js"></script>

    <!-- ======================= Controllers ======================= -->
    <!-- Pages -->
    <script type="text/javascript" src="app/components/pages/HomeCtrl.js"></script>
    <script type="text/javascript" src="app/components/pages/AboutCtrl.js"></script>

    <!-- Session -->
    <script type="text/javascript" src="app/components/sessions/LoginCtrl.js"></script>
    <script type="text/javascript" src="app/components/sessions/RegisterCtrl.js"></script>

    <!-- User -->
    <script type="text/javascript" src="app/components/users/ListUserCtrl.js"></script>
    <script type="text/javascript" src="app/components/users/ShowUserCtrl.js"></script>

    <!-- Posts -->
    <script type="text/javascript" src="app/components/posts/ListPostCtrl.js"></script>
    <script type="text/javascript" src="app/components/posts/NewPostCtrl.js"></script>
    <script type="text/javascript" src="app/components/posts/ShowPostCtrl.js"></script>

    <!-- Messages -->
    <script type="text/javascript" src="app/components/messages/ListMessageCtrl.js"></script>
    <script type="text/javascript" src="app/components/messages/NewMessageCtrl.js"></script>

</body>
</html>
