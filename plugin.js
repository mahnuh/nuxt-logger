import Vue from 'vue'

const defaultOptions = {
	isEnabled: true,
	logLevel: 'debug',
}

const outputConfig = {
	debug: {
		name: 'Debug',
		color: '#A5BF53',
	},
	info: {
		name: 'Info',
		color: '#1087C9',
	},
	warn: {
		name: 'Warning',
		color: '#FFCD30',
	},
	error: {
		name: 'Error',
		color: '#C9352B',
	},
}

const logLevels = ['debug', 'info', 'warn', 'error']

function initializeLogger(options, logLevels) {
	const logger = {}
	logLevels.forEach(logLevel => {
		if (logLevels.indexOf(logLevel) >= logLevels.indexOf(options.logLevel) && options.isEnabled) {
			return logger[logLevel] = (...args) => {
				const methodName = getMethodName()
				output(logLevel, methodName, args)
			}
		}
		
		logger[logLevel] = () => {}
	})

	return logger
}

function output(logLevel, methodName, args) {
	console.log('%c' + outputConfig[logLevel].name + '%c' + methodName + '()', 'background: ' + outputConfig[logLevel].color + ';padding: 2px 8px; border-radius: 6px 0 0 6px; color: #fff', 'background: #E5E5E5; padding: 2px 8px; border-radius: 0 6px 6px 0;')
	
	args.forEach((arg) => {
		console.log('%c>>', 'color: ' + outputConfig[logLevel].color + '; margin-left:5px;', arg)
	})
}

function getMethodName() {
	let error = {}

	try { throw new Error('') } catch (e) { error = e }

	// return if browser does not have .stack property
	if (error.stack === undefined) {
			return ''
	}

	let methodName = error.stack.split('\n')[3]

	if (/@/.test(methodName)) {
		methodName = error.stack.split('\n')[2]
		methodName = methodName.trim().split('@')[0]
	}

	if (/ /.test(methodName)) {
		methodName = methodName.trim().split(' ')[1]
	}

	if (methodName && methodName.includes('.')) {
		methodName = methodName.split('.')[1]
	}

	return methodName
}

const loggerPlugin = {
  install (v, options) {
    if (Vue.__nuxt_logger_installed__) {
      return
    }
		Vue.__nuxt_logger_installed__ = true
		
		options = Object.assign({}, defaultOptions, options)

    if (!Vue.prototype.$log) {
      Vue.prototype.$log = initializeLogger(options, logLevels)
    }
  }

}

Vue.use(loggerPlugin, <%= serialize(options) %>)

export default (ctx) => {
  const { app, store } = ctx

  app.$log = Vue.prototype.$log
  ctx.$log = Vue.prototype.$log
  if (store) {
    store.$log = Vue.prototype.$log
  }
}