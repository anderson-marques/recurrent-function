exports.handler =  async (event, context) => {
  let message = `Recurrent lambda running at ${new Date().getTime()}`
  console.log(`Recurrent lambda running at ${new Date().getTime()}`)
  return { 'message': message }
}
