const EaterTapReporter = require('../index');
const Eater = require('eater').Eater;
const reporter = new EaterTapReporter();
const eater = new Eater({
  reporter: reporter,
  dir: './test/fixture',
  ext: '.js'
});

eater.eat();

eater.on('err', (hasAnyError) => {
  console.error('failure');
});
