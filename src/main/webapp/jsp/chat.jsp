<%@ page contentType="text/html; charset=utf-8"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>ChatRoom</title>
    <script src="static/sockjs/sockjs-0.3.4.js"></script>
    <script src="static/sockjs/stomp.js"></script>
    <script type="text/javascript">
	
        var nickname = null;
        while(!nickname){
        	nickname = prompt("请输入昵称").trim();
        }
        
        var stompClient = null;

        function connect() {
            var socket = new SockJS('sockjs');
			stompClient = Stomp.over(socket);
            stompClient.connect({}, function(frame) {
                setConnected(true);
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/hello', function(result){
                	showMessage(JSON.parse(result.body));
                });
            });
        }

        function disconnect() {
            stompClient.disconnect();
            stompClient = null;
            setConnected(false);
            console.log("Disconnected");
        }

        function send() {
        	if(!stompClient){
        		alert("请先点击连接");
        	}
        	var text = document.getElementById("msg").value.trim();
        	if(!text){
        		alert("不能发送空消息");
        	}
        	var msg = { 'nickname': nickname, 'msg': text };
            stompClient.send("/app/hello", {}, JSON.stringify(msg));
            document.getElementById("msg").value = "";
        }

        function setConnected(connected) {
            document.getElementById('connect').disabled = connected;
            document.getElementById('disconnect').disabled = !connected;
            document.getElementById('history').innerHTML = '';
        }

        function showMessage(message) {
            var history = document.getElementById('history');
            var p = document.createElement('p');
            p.style.wordWrap = 'break-word';
            p.appendChild(document.createTextNode(message.nickname+": "+message.msg));
            history.appendChild(p);
        }
    </script>
</head>
<body>
<div>
    <div>
        <button id="connect" onclick="connect();">连接</button>
        <button id="disconnect" disabled="disabled" onclick="disconnect();">断开</button><br/><br/>
    </div>
    <div>
        <label>消息: </label><input type="text" id="msg" />
        <button id="send" onclick="send();">发送</button>
    </div>
    <div id="history"></div>
</div>
</body>
</html>