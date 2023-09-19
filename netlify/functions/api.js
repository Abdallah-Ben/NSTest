import express, { Router } from 'express'
import serverless from 'serverless-http'

const api = express()

const router = Router()
router.post('/calculator', (req, res) => {
  // Get the request body
  const body = req.body

  // Get the two numbers and the operator
  const num1 = body.num1
  const num2 = body.num2
  const operator = body.operator

  // Perform the calculation based on the operator
  let result
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    switch (operator) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '*':
        result = num1 * num2
        break
      default:
        result = 'Invalid operator'
        break
    }
  } else {
    result = 'Invalid numbers.'
  }

  // Send the response
  res.send({ result })
})

api.use('/api/', router)

export const handler = serverless(api)

////

// import express from 'express'

// const app = express()
// const port = process.env.PORT || 5020

// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('You are in')
// })

// app.post('/calculator', (req, res) => {
//   // Get the request body
//   const body = req.body

//   // Get the two numbers and the operator
//   const num1 = body.num1
//   const num2 = body.num2
//   const operator = body.operator

//   // Perform the calculation based on the operator
//   let result
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     switch (operator) {
//       case '+':
//         result = num1 + num2
//         break
//       case '-':
//         result = num1 - num2
//         break
//       case '*':
//         result = num1 * num2
//         break
//       default:
//         result = 'Invalid operator'
//         break
//     }
//   } else {
//     result = 'Invalid numbers.'
//   }

//   // Send the response
//   res.send({ result })
// })

// app.listen(port, () => console.log('You are in'))
