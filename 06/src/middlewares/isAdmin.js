export default (req, res, next) => {
  if (req.headers.user === 'admin') {
    return next();
  }
  return next('you are not admin');
};
