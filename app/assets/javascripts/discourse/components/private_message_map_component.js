/**
  The controls at the top of a private message in the map area.

  @class PrivateMessageMapComponent
  @extends Ember.Component
  @namespace Discourse
  @module Discourse
**/
Discourse.PrivateMessageMapComponent = Ember.Component.extend({
  layoutName: 'components/private-message-map',
  tagName: 'section',
  classNames: ['information'],
  details: Em.computed.alias('topic.details'),

  init: function() {
    this._super();
  },

  actions: {
    removeAllowedUser: function(user) {
      var self = this;
      bootbox.dialog(I18n.t("private_message_info.remove_allowed_user", {name: user.get('username')}), [
        {label: I18n.t("no_value"),
         'class': 'btn-danger rightg'},
        {label: I18n.t("yes_value"),
         'class': 'btn-primary',
          callback: function() {
            self.get('topic.details').removeAllowedUser(user);
          }
        }
      ]);
    },

    showPrivateInvite: function() {
      this.sendAction('showPrivateInviteAction');
    }
  }

});
