import { WhiteSpace, WingBlank, Toast, List } from 'antd-mobile';
import { useRouter } from 'next/router'
import {  useEffect, useState } from 'react';
export default function detail() {
  const router = useRouter()
  const { id } = router.query
  const [showImg, setShowImg] = useState(false)

  useEffect(() => {
    let str = sessionStorage.getItem('toastSuccess')
    if (str) {
      Toast.success(str, 2);
      sessionStorage.removeItem('toastSuccess')
      window.scrollTo(0, 0)
    }
  });


  return (
    <div style={{background: '#fff'}}>
      <List>
        <List.Item extra={<span className="green">治愈</span>}>
          新冠状肺炎
          <List.Item.Brief>主治医师：张云</List.Item.Brief>  
        </List.Item>
        <WhiteSpace />
        <List.Item>
          发病描述
          <List.Item.Brief>
          <p className="desc">自1月21日以来的4天时间里，我经历了突发高热、寒战、极度乏力、眩晕、腹泻和咳嗽，经历了不安、自责和镇静，开始自行居家隔离治疗至今，体温基本正常，症状基本消失。<br />
  事实证明，我自己的居家隔离自救方案是可行的。<br />我把我这几天的诊治经过和心路历程整理后写了下来，希望能给有类似情况的朋友们些许帮助。
  <br /><br />
  1月20号是我的24小时内科二线班，晚上睡在办公室沙发上，整晚都没休息好。上午处理完病人，午饭后就开始感觉有点眩晕，乏力。到四五点钟的时候，乏力感越来越重，走路像踩在棉花上一样。<br />
  这个时候我竟然还没有怀疑到自己开始发热了，想着应该是下夜班疲劳的原因，回家洗个热水澡，睡一觉可能就好了。<br />
  <br />
  发热、乏力、腹泻加上与高度疑似患者有密切接触史，没有流涕、鼻塞等卡他（卡他：临床术语，指流涕、鼻塞、打喷嚏等症状）症状，临床可高度疑诊新型冠状病毒感染。
  </p>
          </List.Item.Brief>  
        </List.Item>
        <WhiteSpace />
      
        <List.Item>
          诊断证明
          <List.Item.Brief>
            <div className="img" onClick={() => setShowImg(true)}>
              <img src="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png" />
              <img src="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png" />
              <img src="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png" />
            </div>  
          </List.Item.Brief>  
        </List.Item>
        <WhiteSpace />
        <List.Item>
          治疗过程
          <List.Item.Brief>
            <p className="desc">先遵医嘱口服盐酸阿比多尔两片，莫西沙星一片。复测体温，还是38.9℃。<br />用双氯芬酸钠栓12.5mg纳肛降温，为了防止大汗导致容量不足和电解质紊乱，1小时内饮用温盐水（温白开水加食用盐）约1500毫升（约3瓶矿泉水）。
      需要指出的是，盐酸阿比多尔和莫西沙星都是处方药，一定要在医生指导下服用。<br />
      不到半小时，汗透了两身贴身衣物，体温也降到了37.8℃。整个人感觉轻松了很多。但是眩晕感仍然没有减轻。<br />
      这个晚上就在这样的昏昏沉沉中，醒了又睡，睡了又醒。中途还起来拉了两次肚子，夜间再次饮用温盐水1000毫升，整个人感觉轻飘飘的。
      <br/>
      咳嗽有些剧烈，又加服了阿斯美胶囊两颗。吃完早餐赶紧乖乖的躺下休息。咳嗽却不见明显好转，心里有些懊恼。</p>
          </List.Item.Brief>  
        </List.Item>
        <WhiteSpace />
        <List.Item>
          治疗结果图示
          <List.Item.Brief>
            <div className="img" onClick={() => setShowImg(true)}>
              <img src="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png" />
              <img src="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png" />
              <img src="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png" />
            </div>  
          </List.Item.Brief>  
        </List.Item>
        <WhiteSpace />
        <List.Item>
          治疗结果
          <List.Item.Brief>
            <p className="desc">经过治疗，今天早上睡到了9:30才醒来，立刻自测体温36.8℃。</p>
          </List.Item.Brief>  
        </List.Item>
      </List>

        {
          showImg ? <div className="preview" onClick={() => setShowImg(false)}><img src="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png" alt=""/></div> : ''
        }
        
        <style>{`
          .desc {
            white-space: normal;
          }
          .img {
            display: flex;
          }
          .img img {
            width: 100px;
            height: 100px;
            margin: 2px;
            flex: none;
            object-fit: cover;
          }
          .preview {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .7);
            z-index: 2;
          }
          .preview img {
            position: fixed;
            top: 50%;
            left: 0;
            display: block;
            width: 100%;
            transform: translateY(-50%);
          }
        `}</style>
    </div>
  )
}