import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { addPlugin, defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: Boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-gitart-dialog',
    configKey: 'gitartDialog',
  },
  defaults: {
    addPlugin: false,
  },
  setup(options, nuxt) {
    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  },
})
