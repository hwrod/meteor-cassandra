Package.describe({
  name: 'hwrod:cassandra',
  version: '1.0.0',
  summary: 'Wraps asynchronous Cassandra driver calls into Meteor synchronous calls.',
  git: 'https://github.com/hwrod/meteor-cassandra.git',
  documentation: 'README.md'
});

Npm.depends({
  "cassandra-driver": "3.0.0"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('underscore');

  api.addFiles('cassandra.js');

  api.export('Cassandra');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('hwrod:cassandra');
  api.addFiles('cassandra-tests.js');
});
