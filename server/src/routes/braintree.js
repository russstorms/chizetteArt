const express = require('express')
const braintree = require('braintree')
const router = express.Router() // eslint-disable-line new-cap
// const gateway = require('../lib/gateway')

let TRANSACTION_SUCCESS_STATUSES = [
  braintree.Transaction.Status.Authorizing,
  braintree.Transaction.Status.Authorized,
  braintree.Transaction.Status.Settled,
  braintree.Transaction.Status.Settling,
  braintree.Transaction.Status.SettlementConfirmed,
  braintree.Transaction.Status.SettlementPending,
  braintree.Transaction.Status.SubmittedForSettlement
]

//// SANDBOX TEST \\\\
const gateway = braintree.connect({
  environment:  braintree.Environment.Sandbox,
  merchantId:   '8vb6xrrc938pztx3',
  publicKey:    'mcxt26ck2ghfjzz8',
  privateKey:   process.env.BRAINTREEKEY
})

function formatErrors(errors) {
  let formattedErrors = ''

  for (let i in errors) { // eslint-disable-line no-inner-declarations, vars-on-top
    if (errors.hasOwnProperty(i)) {
      formattedErrors += 'Error: ' + errors[i].code + ': ' + errors[i].message + '\n'
    }
  }
  return formattedErrors
}

function createResultObject(transaction) {
  let result
  let status = transaction.status

  if (TRANSACTION_SUCCESS_STATUSES.indexOf(status) !== -1) {
    result = {
      header: 'Sweet Success!',
      icon: 'success',
      message: 'Your test transaction has been successfully processed. See the Braintree API response and try again.'
    }
  } else {
    result = {
      header: 'Transaction Failed',
      icon: 'fail',
      message: 'Your test transaction has a status of ' + status + '. See the Braintree API response and try again.'
    }
  }

  return result
}

router.get('/', function (req, res) {
  res.redirect('/checkouts/new')
})

router.get('/checkouts/new', function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.render('checkouts/new', {clientToken: response.clientToken, messages: req.flash('error')})
  })
})

router.get('/checkouts/:id', function (req, res) {
  let result
  let transactionId = req.params.id

  gateway.transaction.find(transactionId, function (err, transaction) {
    result = createResultObject(transaction)
    res.render('checkouts/show', {transaction: transaction, result: result})
  })
})

router.post('/checkouts', function (req, res) {
  let transactionErrors
  let amount = req.body.amount // In production you should not take amounts directly from clients
  let nonce = req.body.payment_method_nonce

  gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonce,
    options: {
      submitForSettlement: true
    }
  }, function (err, result) {
    if (result.success || result.transaction) {
      res.redirect('checkouts/' + result.transaction.id)
    } else {
      transactionErrors = result.errors.deepErrors()
      req.flash('error', {msg: formatErrors(transactionErrors)})
      res.redirect('checkouts/new')
    }
  })
})

module.exports = router