var fs = require('fs')
  , level = require('level')
  , s3sync = require('s3-sync')
  , readdirp = require('readdirp')

// To cache the S3 HEAD results and speed up the
// upload process. Usage is optional.
var db = level(__dirname + '/cache')
var creds = JSON.parse(fs.readFileSync('aws.json', 'utf8'))

var files = readdirp({
    root: 'public'
  , directoryFilter: ['!.git', '!cache']
})

// Takes the same options arguments as `knox`,
// plus some additional options listed above
var uploader = s3sync(db, {
    key: creds.accessKeyId
  , secret: creds.secretAccessKey
  , bucket: creds.bucketName
  , concurrency: 16
}).on('data', function(file) {
  console.log(file.fullPath + ' -> ' + file.url)
}).on('end', function() {
  console.log('Upload successfully!');
})

files.pipe(uploader)
