import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'; 
import '../style/global.css'

export default class MyApp extends App {
// getInitialProps 会造成无法静态化
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     return { pageProps }
//   }
  componentDidMount () {
    const FastClick = require('fastclick')
    // import FastClick from 'fastclick'
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        // @ts-ignore
        FastClick.attach(document.body);
      }, false)
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>')
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <title>病例字典</title>
        </Head>
        <Component {...pageProps} />
      </div>
    )
  }
}

