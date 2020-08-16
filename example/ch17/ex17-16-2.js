const html = `〇〇<a onclick="alert('!!')" class="cl1" href="/foo" id="id1">XXX</a>△△`;

/*
html.replace(/<a .*?>(.*?)<\/a>/ig, function(match, group1, offset, origin){
  console.log(`<a>タグが${offset+1}文字目からみつかった`);
  console.log(`リンク対象文字列は『${group1}』`);
  console.log(`元々の文字列は『${origin}』`);
  console.log(`マッチしたのは『${match}』`);
});
*/

const r = html.replace(/<a .*?<\/a>/ig, sanitizeATag);
console.log(r);

function sanitizeATag(aTag){
  const parts = aTag.match(/<a\s+(.*>?)>(.*?)<\/a>/i);
  console.log(`parts[1]=${parts[1]}`);
  console.log(`parts[2]=${parts[2]}`);
  const attributes = parts[1].split(/\s+/);
  return '<a ' +
    attributes
    .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
    .join(' ')
    + '>'
    + parts[2]
    + '</a>';
}
