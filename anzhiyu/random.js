var posts=["2024/12/15/hello-world/","2024/12/15/测试博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };