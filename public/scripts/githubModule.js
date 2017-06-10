var dlk = dlk || {};
dlk.modules = dlk.modules || {};

dlk.modules.github = (ajax) => {

    var getUser = function (userName, callback) {

        ajax.get({
            url: '/github/user',
            data: {
                'name': userName
            },
            success: function (data) {
                callback(null, data);
            },
            error: function () {
                callback('ERROR');
            }
        });
    }

    return {
        getUser: getUser
    }
};
