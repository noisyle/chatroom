<%@ page contentType="text/html; charset=utf-8"%>
<!DOCTYPE html>
<html lang="zh-CN" ng-app="myApp" ng-controller="MainCtrl">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title ng-bind="title"></title>
<link href="http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
<!--[if lt IE 9]>
  <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
<link href="http://cdn.bootcss.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
<link href="static/site/css/index.css" rel="stylesheet">
</head>
<body>
<div class="main-view" ui-view></div>

<script src="http://cdn.bootcss.com/angular.js/1.5.0/angular.min.js"></script>
<script src="http://cdn.bootcss.com/angular.js/1.5.0/angular-animate.min.js"></script>
<script src="http://cdn.bootcss.com/angular-ui-router/0.2.18/angular-ui-router.min.js"></script>
<script src="http://cdn.bootcss.com/angular-ui-bootstrap/1.2.1/ui-bootstrap-tpls.min.js"></script>
<script src="http://cdn.bootcss.com/sockjs-client/1.0.3/sockjs.min.js"></script>
<script src="http://cdn.bootcss.com/stomp.js/2.3.3/stomp.min.js"></script>
<script src="static/ui-router-styles/ui-router-styles.js"></script>
<script src="static/site/js/controller.js"></script>
<script src="static/site/js/provider.js"></script>
<script src="static/site/js/app.js"></script>
</body>
</html>