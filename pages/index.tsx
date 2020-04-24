import { useState } from 'react';
import { useRouter } from 'next/router'
import { Card, NavBar, NoticeBar, WingBlank, WhiteSpace, Icon } from 'antd-mobile'

export default function Index() {
  const router = useRouter()
  const [list, setList] = useState([1, 2])
  const thumbStyle = {
    width: 32,
    height: 32,
  }
  return (
    <div>
      {/* <div className="search-wrapper">
        <SearchBar onSubmit={(key) => router.push(`/search?key=${key}`)} placeholder="Search" maxLength={20} />
      </div> */}
      <NavBar
        className="nav"
        mode="dark"
        rightContent={<Icon type="search" onClick={() => router.push(`/search`)} />}
      >病例字典</NavBar>
      <NoticeBar mode="closable" icon={null}>本站不收集任何用户隐私，严格遵守法律法规。</NoticeBar>
      <WingBlank style={{paddingTop: 10}}>
        {
          // list.map((item, index) => (
          //   <div key={index} onClick={() => router.push(`/detail?id=${item}`)}>
          //     <Card>
          //       <Card.Header
          //         title="新冠状肺炎"
          //         thumb="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png"
          //         extra={<span className="green">已治愈</span>}
          //         thumbStyle={thumbStyle}
          //       />
          //       <Card.Body>
          //         <div>This is content of `Card`</div>
          //       </Card.Body>
          //       <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
          //     </Card>
          //     <WhiteSpace />
          //   </div>
          // ))
        }


        <div onClick={() => router.push(`/detail?id=1`)}>
          <Card>
            <Card.Header
              title="新冠状肺炎"
              thumb="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png"
              extra={<span className="green">治愈</span>}
              thumbStyle={thumbStyle}
            />
            <Card.Body>
              <div className="card-content">住院时，每天都有许多专家对我的病情进行会诊，医护人员也是24小时全天候护理，这才让我一天天好起来。是这些医生护士的日夜精心守护，才把我从鬼门关拉了回来！</div>
            </Card.Body>
            <Card.Footer content="北京协和医院" extra={<div>主治医生：张云</div>} />
          </Card>
          <WhiteSpace />
        </div>
        <div onClick={() => router.push(`/detail?id=1`)}>
          <Card>
            <Card.Header
              title="胰腺癌"
              thumb="https://zos.alipayobjects.com/rmsportal/RfxDFanyfhEhOkynbPXizskAQqkPmPkR.png"
              extra={<span className="origin">治疗中</span>}
              thumbStyle={thumbStyle}
            />
            <Card.Body>
              <div className="card-content">由于胰腺癌(pancreatic cancer)很少能在发病早期被诊断出来，从而很少能被治愈。即便是早期被发现出来，想要彻底治愈也是非常困难的。</div>
            </Card.Body>
            <Card.Footer content="北京肿瘤医院" extra={<div>主治医生：王志杰</div>} />
          </Card>
          <WhiteSpace />
        </div>

      </WingBlank>
      <WhiteSpace />
      
      <div className="icon-btm-wrapper">
        <Icon className="icon-btm" type="cross-circle-o" style={{ fill: '#1F90E6' }} onClick={() => router.push('/addCase')} />
      </div>

      <style>{`
        .icon-btm-wrapper {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: rotateZ(45deg);
          margin-left: -30px;
          z-index: 2;
          background: #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
        }
        .icon-btm-wrapper .icon-btm {
          width: 60px;
          height: 60px;
        }
        .nav {
          position: sticky;
          top: 0;
          z-index: 2;
        }
      `}</style>
    </div>
  )
}