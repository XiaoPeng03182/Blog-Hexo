var posts=["2024/09/07/hello-world/","2024/09/02/Linux-Learing/Linux-Learning/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };