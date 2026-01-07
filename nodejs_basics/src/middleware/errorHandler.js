module.exports = (err, req, res, next) => {
    console.error(`[${err.name}] ${err.message}`);
  
    res.status(err.status || 500).json({
      success: false,
      error: err.name,
      message: err.message
    });
  };
  