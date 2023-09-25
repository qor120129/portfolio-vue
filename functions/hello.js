exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'SEUNGJIN',
      age: 25,
      email: 'qor120129@naver.com'
    })
  }
}