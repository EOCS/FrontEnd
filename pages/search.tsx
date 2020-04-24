import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Card, SearchBar, WingBlank, WhiteSpace, NavBar } from 'antd-mobile'
export default function search() {
  const router = useRouter()
  const [list, setList] = useState([1, 2])
  const [value, setValue] = useState('')

  let autoFocusInst = null

  const submitSearch = value => {
    console.log(value)
    setValue(value)
  }

  useEffect(() => {
    autoFocusInst && autoFocusInst.focus()
  }, [autoFocusInst])
  
  return (
    <>
      <div className="search-wrapper">
        <SearchBar 
          onChange={(value) => console.log(value)} 
          onSubmit={(value) => submitSearch(value)} 
          ref={ref => autoFocusInst = ref}
          placeholder="Search" maxLength={20} />
      </div>

      <WingBlank>
        <div>搜索信息: {value}</div>
      </WingBlank>
    </>
  )
}