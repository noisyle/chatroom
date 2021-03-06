<%@ page contentType="text/html; charset=utf-8"%>
<div class="box box-primary box-solid direct-chat direct-chat-primary">
  <div class="box-header">
    <h3 class="box-title">Chat</h3>
    <div class="box-tools pull-right">
      <span data-toggle="tooltip" title="3 New Messages" class="badge bg-light-blue">0条未读</span>
      <button class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle"><i class="fa fa-comments"></i></button>
    </div>
  </div>
  <div class="box-body">
    <div class="direct-chat-messages">
      <div class="direct-chat-msg" ng-repeat="message in messages" ng-class="{'right': message.nickname==nickname}">
        <div class="direct-chat-info clearfix">
          <span class="direct-chat-name" ng-bind="message.nickname"></span>
          <span class="direct-chat-timestamp" ng-bind="message.timestamp | date:'HH:mm:ss'"></span>
        </div>
        <img class="direct-chat-img" ng-src="{{message.avatar}}" alt="message user image">
        <div class="direct-chat-text" ng-bind="message.msg">
        </div>
      </div>
    </div>
  </div>
  <div class="box-footer">
    <div class="input-group">
      <input type="text" ng-model="input" ng-keyup="send($event)" placeholder="输入信息，回车发送" class="form-control" autofocus>
      <span class="input-group-btn">
        <button type="button" class="btn btn-primary btn-flat" ng-click="send()" ng-disabled="!input">发送</button>
      </span>
    </div>
  </div>
</div>