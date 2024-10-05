/**
 * Wrap message in error response object.
 * @param message
 * @returns {{status: string, message: *}}
 */

const Console = require('../class/Console.class');

function wrapError(message) {
    return {
        status: 'error',
        message
    }
}

function respond(res, statusCode, data) {

    res.writeHead(statusCode, {'Content-Type': 'application/json'});
    if(data) res.write(JSON.stringify(data));
    res.end();
}

function respondRaw(res, statusCode, data) {
    res.write(data);
    res.end();
}


/**
 * Respond success
 * @param res
 * @param data
 */
function respondSuccess(res, data) {
    try{
        respond(res, 200, data);
    }catch (e){
        Console.e(e.message);
    }

}

module.exports.respondSuccess = respondSuccess;

function respondError200(res, message) {
    respond(res, 200, {
        status: false,
        error: true,
        code: 400,
        data: null,
        message: message
    });
}

module.exports.respondError200 = respondError200;

/**
 * Respond success
 * @param res
 * @param data
 * @param code
 */
function respondError(res, data, code = 400) {
    respond(res, code, {...data, status: false, error: true});
}

module.exports.respondError = respondError;




function respondClientError(res, message = '', code = 400) {
    respond(res, code, {status: false, error: true, data: null, message: message});
}
module.exports.respondClientError = respondClientError;

/**
 * Respond success raw
 * @param res
 * @param data
 */
function respondSuccessRaw(res, data) {
    respondRaw(res, 200, data);
}

module.exports.respondSuccessRaw = respondSuccessRaw;

/**
 * Respond server error.
 * @param res
 * @param message
 */
function respondServerError(res, message) {
    respond(res, 500, wrapError(message));
}

module.exports.respondServerError = respondServerError;

/**
 * This will generate a "forbidden" error, specially
 * for those cases where the session id is invalid
 * @param res
 * @param message
 */
function respondForbidden(res, message) {
    respond(res, 403, wrapError(message || `User doesn't have rights to execute this process.`))
}

module.exports.respondForbidden = respondForbidden;


/**
 * Respond not found.
 * @param res Express response object
 * @param {string} [message] Message to sent back
 */
function respondNotFound(res, message) {
    respond(res, 404, wrapError(message || `Requested object not found.`));
}

module.exports.respondNotFound = respondNotFound;

/**
 * Respond bad request.
 *
 * @param {object} res Express response object
 * @param {string} [message] Message to sent back
 * @returns {void}
 */
function respondBadRequest(res, message) {
    respond(res, 400, wrapError(message || `Bad request.`));
}

module.exports.respondBadRequest = respondBadRequest;
