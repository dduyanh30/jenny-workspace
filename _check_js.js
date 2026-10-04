const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('Task Management.html', 'utf8');
const start = html.indexOf('<script>');
const end = html.lastIndexOf('</script>');
if (start < 0 || end < 0) {
  console.error('NO SCRIPT');
  process.exit(1);
}
const js = html.slice(start + 8, end);
try {
  new vm.Script(js, { filename: 'inline.js' });
  console.log('PARSE_OK', js.length);
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
