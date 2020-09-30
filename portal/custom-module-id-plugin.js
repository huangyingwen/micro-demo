/**
 * 由于 React Refresh 需要绑定 module.id 与组件的关系，在微前端框架下，多个微前端可能有相同
 * module.id 的组件。因此，在这里给所有的 module.id 都加上微前端 Id 前缀。
 * 要求必须配置 webpack.output.library，且其全局唯一。
 * @author tianjian
 */
class CustomModuleIdPlugin {
	_processModules(modules, compiler) {
		for (const module of modules) {
			if (module.id === null && module.libIdent) {
        let path = module.libIdent({ context: compiler.options.context, })
        module.id = compiler.options.output.library + ':' + path;
			}
		}
	}

	apply(compiler) {
		if (compiler.hooks) {
			compiler.hooks.compilation.tap("CustomModuleIdPlugin", compilation => {
				compilation.hooks.beforeModuleIds.tap("CustomModuleIdPlugin", modules => {
					this._processModules(modules, compiler);
				});
			});
		}
		else {
			compiler.plugin("compilation", compilation => {
				compilation.plugin("before-module-ids", modules => {
					this._processModules(modules, compiler);
				});
			});
		}
	}
}

module.exports = CustomModuleIdPlugin;