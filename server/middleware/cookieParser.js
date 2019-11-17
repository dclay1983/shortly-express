module.exports = (req, res, next) => {
  if (req.headers.hasOwnProperty('cookie')) {
    let cookies = req.headers.cookie;
    cookies = cookies.split('; ');
    cookies.forEach(cookie => {
      cookie = cookie.split('=');
      req.cookies[cookie[0]] = cookie[1];
    });
  }
  next();
};
