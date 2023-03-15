const ROUTES = {
    fibonacci: [
        { recursive_fibonacci: '/recursive-fibonacci/:k' },
        { dynamic_programming: [
            { top_down: '/top-down/:k' },
            { bottom_up: '/bottom-up/:k' }
        ]}
    ],
    letters: [
        { root: '/' }
    ],
    even: [
        { root: '/:n' }
    ]
};

module.exports = ROUTES;