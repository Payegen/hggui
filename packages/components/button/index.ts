import HButton from './src/HButton.vue'
import type { App } from 'vue'

HButton.install = (app: App) => {
  app.component('HButton', HButton)
}
export default HButton
export { HButton }
export * from './src/HButton'
