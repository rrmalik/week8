let firebase = require('./firebase')

exports.handler = async function(event) {
  let postsData = []
  console.log('does this work')
  // console.log(event)
  let queryStringUserId = event.queryStringParameters.userid
  console.log(queryStringUserId)

  let db = firebase.firestore()
  let querySnapshot = await db.collection('posts')
                              // .where('userId', '==', queryStringUserId)
                              .get()
  let posts = querySnapshot.docs

  for (let i=0; i<posts.length; i++) {
    let postId = posts[i].id
    let post = posts[i].data
    let postUsername = post.username
    let postimageUrl = post.imageURL

    // console.log(postId)
    postsData.push({
      id: postId,
      username: postUsername,
      imageURL: postimageUrl
    })
  }

  // for (let i=0; i<posts.length; i++) {
  //   let todoId = todos[i].id
  //   let todo = todos[i].data()
  //   todosData.push({
  //     id: todoId,
  //     text: todo.text
  //   })
  
  // Retrieve posts from Firestore; for each post, construct
  // a new Object that contains the post's id, username, imageUrl,
  // and number of likes. Add the newly created Object to the
  // postsData Array.
  
  return {
    statusCode: 200,
    body: JSON.stringify(postsData)
  }
}