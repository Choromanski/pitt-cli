
module.exports =
	require('yargs')
		.command('print <file> [files..]', 'print a file or multiple files', require('../src/print'))
		.command('email <recipients> [subject] [body]', 'send email to recipients', require('../src/sendEmail'))
		.command('deploy <directory>', 'deploy given directory to your pitt domain', require('../src/deploy'))
		.command('ssh', 'connect to unixs.cssd.pitt.edu via ssh', require('../src/ssh'))
		.command('thoth', 'connect to thoth.cs.pitt.edu via ssh', require('../src/thoth'))
		.command('setup', 'install dependencies', require('../src/setup'))
		.command('configure [env]', 'configure dev environments in Pitt computing labs', require('../src/configure'))
		.demandCommand(1,'Please supply at least one command')
		.argv;
