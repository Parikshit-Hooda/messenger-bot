let userStore = (function () {
    let users = new Set();
    return {
        getAllUsers: function () {
            return users;
        },
        getUser: getUser,
        addUser: addUser
    };

    /**
     * Gets a user
     * @param id the userID
     * @returns User
     */
    function getUser(id) {
        let index = [...users].map(function(x) {return x.id; }).indexOf(id);
        return users[index];
    }

    function addUser(user) {
        users.add(user);
    }
}());

module.exports = userStore;