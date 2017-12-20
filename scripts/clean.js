#!/usr/bin/env node

const shell = require('shelljs');
shell.set('-e');
shell.set('+v');

shell.rm('-rf', `dist`);

shell.rm('-f', `*xunit.xml`);
shell.rm('-f', `*checkstyle.xml`);
shell.rm('-rf', `*unitcoverage`);