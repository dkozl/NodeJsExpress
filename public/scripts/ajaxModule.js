($) => {
    var ajax = (options) => {
        $.ajax(options);
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
