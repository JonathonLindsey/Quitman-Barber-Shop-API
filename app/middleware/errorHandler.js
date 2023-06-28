const errorHandlerMiddleware = () => {
    return (err, req, res, next) => {
      console.log(`ErrorHandler : ${err}`);
      console.log(err.stack);
      
      res.status(500).json({
        error: true,
        errorMessage: err.message,
      });
    };
  };
  
  module.exports = errorHandlerMiddleware;