var dlk = dlk || {};
dlk.modules = dlk.modules || {};

dlk.modules.ajax = ($) => {

    var execCallback = function(callback) {
        console.log("CALLBACK", arguments);
        if (typeof callback === 'function') callback.apply(null,  Array.prototype.slice.call(arguments, 1));
    }

    var ajax = (options) => {

        const ajaxSettings = {
            url: options.url,
            method: options.method,
            data: options.data,
            cached: false,
            success: (data) => {
                execCallback(options.success, data);
            },
            error: () => {
                execCallback(options.error);
            }
        };

        console.log(ajaxSettings);

        $.ajax(ajaxSettings);
    }

    var post = (options) => {
        options.method = "POST";
        ajax(options);
    }

    var get = (options) => {
        options.method = "GET";
        ajax(options);
    }

    return {
        get: get,
        post: post
    };
}
