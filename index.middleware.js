module.exports = {
    isLoggedIn(request, response, next) {
        if (request.isAuthenticated()) {
            return next();
        }
        return response.redirect('/inicio');
    }
}