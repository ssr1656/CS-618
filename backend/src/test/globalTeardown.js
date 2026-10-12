export default async function globalTeardown() {
  if (global._MONGOINSTANCE) {
    await global._MONGOINSTANCE.stop()
  }
}
