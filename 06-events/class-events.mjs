import EventEmitter from "events";

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
		this.on("likePost", (userName) => {
			console.log(`${userName} liked your post!`);
		})
	  this.on("error", (err) => {
			console.error(err);
	  })
  }

  like(userName) {
		if (!userName) {
			return this.emit("error", new Error("User name is required"));


		}

    this.likesQty += 1;
    this.emit("likePost", userName);
  }
}

const myPost = new Post("John", "Hello world!");
// We moved to the constructor of the class
// myPost.on("likePost", (userName) => {
//   console.log(`${userName} liked your post!`);
// });

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like("Alex");
setTimeout(() => myPost.like(), 1000);
setTimeout(() => myPost.like("Alice"), 2000);
// console.log(myPost.likesQty);
