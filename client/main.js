import { Template } from 'meteor/templating';

import './main.html';

Router.route('/home', {
  name: 'home',
  path: '/home',
  template: 'home'
});

Router.route('/register', {
  name: 'register',
  path: '/register',
  template: 'register'
});
Router.route('/login', {
  name: 'login',
  path: '/login',
  template: 'login'
});

Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('home', {data: {title: 'My Title'}});
});



Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      email: email,
      password: password
    });

  }
});

Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    const email = $('[name=email]').val();
    const password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password);
  }
});

Template.navigation.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});
