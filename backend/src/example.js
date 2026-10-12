import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()
const post = new Post({
  title: 'Hello Mongoose!',
  author: 'Rahul Grover',
  contents: 'This post is stored in MongoDB database using Mongoose!',
  tags: ['mongodb', 'mongoose'],
})

const createdPost = await post.save()
await Post.findByIdAndUpdate(createdPost._id, {
  $set: { contents: 'Hello Again!' },
})

const posts = await Post.find()
console.log(posts)
