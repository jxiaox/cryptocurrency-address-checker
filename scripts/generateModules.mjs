var fs = require('fs');
var path = require('path');

const args = process.argv.slice(2);

const root = path.join(args[0]);

const files = [];

function readDirSync(path) {
  const pa = fs.readdirSync(path);
  pa.forEach(function(ele, index) {
    const info = fs.statSync(path + '/' + ele);
    if (info.isDirectory()) {
      console.log('dir: ' + ele);
      readDirSync(path + '/' + ele);
    } else {
      console.log('file: ' + ele);
      if (ele !== 'index.ts') {
        files.push(ele);
      }
    }
  });
}

function writeFire(data) {
  fs.writeFile('src/modules/index.ts', data, function(err) {
    //如果错误抛出错误，阻止下面代码执行，
    //这里使用throw抛出错误，原因是可能写入错误的原因能有很多种
    //可能是文件只读权限，可能是写入失败，throw可以确定文件写入失败的原因
    if (err) {
      throw err;
    }
    //如果成功执行下面代码
    console.log('write succeed!');
  });
}

readDirSync(root);

if (files.length > 0) {
  let data = files.map(file => {
    const filename = file.slice(0, -3);
    return `import ${filename} from './${filename}';`;
  });
  const filesStr = files.map(file => file.slice(0, -3)).join(`, 
  `);
  console.log(filesStr, files);

  data.push(`export {
  ${filesStr} 
};`);

  data = data.join(`
`);
  writeFire(data);
}
