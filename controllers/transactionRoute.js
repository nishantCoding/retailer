getAllTransactions = (req, res) => {
    res.json([{
            id: 1,
            name: 'ABC',
            amountPaid: 200,
            timeOfTransaction: new Date().toLocaleString()
        },
        {
            id: 2,
            name: 'PQR',
            amountPaid: 200,
            timeOfTransaction: new Date().toLocaleString()
        }
    ])
}

module.exports = { getAllTransactions };