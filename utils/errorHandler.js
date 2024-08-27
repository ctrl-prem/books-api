// /utils/errorHandler.js

exports.handleError = (res, err) => {
    console.error(err.message);
    res.status(500).send('Server Error');
};
