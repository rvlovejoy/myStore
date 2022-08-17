const boom = require('@hapi/boom');
//closure javascript//
function validatorHandler(schema, property){
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports= {validatorHandler};
