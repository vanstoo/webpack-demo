import _ from 'lodash';
import "./style/style.css";
import Icon from "./res/icon-split@2x.png"
import { printMe } from './print';
import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('development environment');
}

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    btn.innerHTML = '查看 console';
    btn.onclick = printMe;

    // 将图像添加到我们已经存在的 div 中。
    let myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    element.appendChild(btn);


    // let element = document.createElement('pre');

    // element.innerHTML = [
    //   'Hello webpack!','5 cubed is equal to ' + cube(5)+ _.uniqueId("uniqueId")
    // ].join('\n\n');
    
    return element;
  }
  
let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if(module.hot){
  console.log("module.hot")
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}