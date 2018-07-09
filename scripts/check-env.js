const { _: mandatory, o: optional } = require('minimist')(process.argv.slice(2))

const missingMandatory = []
const missingOptional = []

console.log('Checking environment:\n')

checkEnvs('Mandatory', mandatory, missingMandatory)
checkEnvs('Optional', optional, missingOptional)

if (missingMandatory.length) {
  console.log(
    `ERROR: missing mandatory env variables: ${missingMandatory.join(', ')}`
  )
  process.exit(1)
} else {
  console.log('Finished OK\n')
}

function checkEnvs (label, envs, missing) {
  if (!envs || !envs.length) return

  console.log(`=== ${label} ===`)
  for (let env of coerceArray(envs)) {
    const value = process.env[env]
    if (!value) {
      missing.push(env)
    } else {
      console.log(`${env}: ${value}`)
    }
  }

  if (missing.length) {
    console.log(`Missing: ${missing.join(', ')}`)
  }

  console.log('===\n')
}

function coerceArray (value) {
  return Array.isArray(value) ? value : value === undefined ? [] : [value]
}
