import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log('model',this.get('store')._state);
  }
});
