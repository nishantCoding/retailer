get_all_users = (req, resp) => {
    resp.json([{ id: 1, role: 'owner' }, { id: 2, role: 'admin' }]);
}

module.exports = { get_all_users }