import * as React from 'react'
import { FC, useState } from 'react'
import { Button } from 'antd'
import './index.less'
export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [content, setContent] = useState('default content')
  return (
    <div className="demo-home">
      <span>{content}</span>
      <img src={require('../../res/icon-split.png')}></img>
      <Button type="primary" onClick={() => setContent('setContents')}>
        按钮
      </Button>
    </div>
  )
}

export default Home
