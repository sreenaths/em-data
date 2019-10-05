export function initialize(application) {
  application.inject('route', 'loader', 'service:loader');
  application.inject('entity', 'loader', 'service:loader');
}

export default {
  name: 'loader',
  initialize
};
