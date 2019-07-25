import _ from 'lodash'
import "./style/style.css"
import Icon from "./res/icon-split@2x.png"
import {
  cube
} from './math.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('development environment')
}

function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button')


  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  // element.classList.add('hello')
  // element.appendChild(br)
  element.appendChild(btn)

  btn.innerHTML = '查看 console'
  // btn.onclick = printMe




  // 将图像添加到我们已经存在的 div 中。
  let myIcon = new Image()
  myIcon.src = Icon

  element.appendChild(myIcon)

  // btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default
  //   print()
  // })
  // let element = document.createElement('pre')

  // element.innerHTML = [
  //   'Hello webpack!','5 cubed is equal to ' + cube(5)+ _.uniqueId("uniqueId")
  // ].join('\n\n')

  return element

  // console.log(cube(5))
  // return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  //   var element = document.createElement('div')

  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  //   return element

  // }).catch(error => 'An error occurred while loading the component')
}

let element = component() // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element)
// getComponent().then(component => {
//   document.body.appendChild(component)
// })


if (module.hot) {
  console.log("module.hot")
  module.hot.accept()

}
