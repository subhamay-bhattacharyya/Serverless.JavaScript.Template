module.exports.hello = async event => {
  return {
      statusCode: 200,
      body: JSON.stringify({
          message: 'hello world'
      })
  };
}

export const handler = hello;