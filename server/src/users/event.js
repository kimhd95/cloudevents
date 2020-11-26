function publish(req, res) {
  const {
    timestamp,
    transaction_id,
    pod_name,
    service,
    resource,
    verb,
    state,
    message
  } = req.body

  // cloudevents에서 스키마 따라 변환
  const schema = {
    //required
    id, // String // transaction_id
    source, // URI-reference //
    specversion, // String
    type, // String

    //optional
    datacontenttype, // String,
    dataschema, // URI
    subject, // String
    time, // timestamp // timestamp
  }
  // kafka에 push

  // succ/fail 리턴
}

function consume(req, res) {

}
