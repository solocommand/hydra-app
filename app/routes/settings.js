import Route from '@ember/routing/route';
import { inject } from '@ember/service';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';

import SetPassword from 'hydra-app/gql/mutations/set-password';

export default Route.extend(RouteQueryManager, AuthenticatedRouteMixin, {
  flashMessages: inject(),

  actions: {
    setPassword(password) {
      const variables = { password };
      const resultKey = 'setPassword';
      const mutation = SetPassword;
      return this.get('apollo').mutate({ mutation, variables }, resultKey)
        .then(() => this.get('flashMessages').success('Password changed.'))
        .catch(e => this.get('errorProcessor').show(e))
      ;
    }
  },
});
