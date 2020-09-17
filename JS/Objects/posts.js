
function MakePost (title, body, aurthor ){
  this.title = title;
  this.body = body;
  this.aurthor = aurthor;
  this .views = 0;
  this.comments = [];
  this.isLive = false;
}
let post = new MakePost('a','b','c')
console.log(post)

