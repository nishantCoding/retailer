const acl = require('acl');


acl.allow([
    //owner
    {
        roles: ['owner'],
        allows: [
            {
                resources: '*',
                permissions: '*'
            }
        ],
    },
    //admin
    {
        roles: ['admin'],
        allows: [
            {
                resources: ['/users'],
                permissions: ['get', 'post'],
            },
            {
                resources: ['/users/:id'],
                permissions: ['get', 'patch', 'delete'],
            },
            {
                resources: ['/menuItems'],
                permissions: ['get', 'post'],
            },
            {
                resources: ['/menuItems/:id'],
                permissions: ['get', 'post', 'patch', 'delete'],
            },
        ]
    },
    //chef
    {
        roles: ['chef'],
        allows: [
            {
                resources: ['/menuItems'],
                permissions: ['get', 'post'],
            },
            {
                resources: ['/menuItems/:id'],
                permissions: ['get', 'post', 'patch', 'delete'],
            },
        ],
    },

    //customer
    {
        roles: ['customer'],
        allows: [
            {
                resources: ['/menuItems'],
                permissions: ['get'],
            },
            {
                resources: ['/menuItems/:id'],
                permissions: ['get'],
            },
        ],
    }
]);