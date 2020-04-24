import { List, TextareaItem, ImagePicker, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { useState } from 'react';
import { useRouter } from 'next/router'
// const data = [{ url: 'https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png', id: '2121'}];

export default function addCase() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [caseValue, setCaseValue] = useState('')
  const [treatValue, setTreatValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [caseFiles, setCaseFiles] = useState([])
  const [treatFiles, setTreatFiles] = useState([])

  const onCaseFilesChange = files => {
    setCaseFiles(files)
  }
  const onTreatFiles = files => {
    setTreatFiles(files)
  }

  const submit = () => {
    setLoading(true)
    console.log(caseValue, 11)
    console.log(treatValue, 22)
    console.log(resultValue, 33)
    sessionStorage.setItem('toastSuccess', '提交成功')
    setTimeout(() => {
      setLoading(false)
      router.push('/detail?id=1')
    }, 1000)
  }
  
  return (
    <WingBlank>
      <WhiteSpace /><WhiteSpace />
      <TextareaItem title="诊断" rows={1} count={80} placeholder="名称" />
      <List renderHeader={() => '发病描述'}>
        <TextareaItem value={caseValue} onChange={setCaseValue} autoHeight rows={3} count={800} clear placeholder="发病描述" />
      </List>

      <List renderHeader={() => '检查结果图示'}>
        <WhiteSpace />
        <ImagePicker 
          files={caseFiles}
          onChange={onCaseFilesChange}
          selectable={caseFiles.length <= 9}
          multiple={true}
        />
        <WhiteSpace />
      </List>

      <List renderHeader={() => '治疗过程'}>
        <TextareaItem value={treatValue} onChange={setTreatValue} autoHeight rows={3} count={800} clear placeholder="治疗过程" />
      </List>

      <List renderHeader={() => '治疗结果图示'}>
        <WhiteSpace />
        <ImagePicker 
          files={treatFiles}
          onChange={onTreatFiles}
          selectable={treatFiles.length <= 9}
          multiple={true}
        />
        <WhiteSpace />
      </List>

      <List renderHeader={() => '治疗结果'}>
        <TextareaItem value={resultValue} onChange={setResultValue} autoHeight rows={3} count={800} clear placeholder="治疗结果" />
      </List>

      <WhiteSpace /><WhiteSpace />
      <Button loading={loading} disabled={loading} type="primary" onClick={submit}>发布病例</Button>
      <WhiteSpace /><WhiteSpace />
    </WingBlank>
    
  )
}