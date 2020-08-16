const html = `<img alt ='A "simple" example.'>` + `<img alt ="Dont't abuse it!">`;
const imageTags = html.match(/<img alt =(['"]).*?\1>/g);
for (let i=0; imageTags && i<imageTags.length; i++){
  console.log(imageTags[i]);
}
