/* eslint-disable max-len */
import React from 'react'

export default class Html extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
  }
  render () {
    return (
      <html>
        <head>
        <title>{this.props.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
          { /*
            <link rel='stylesheet'
              type='text/css' href='/emails/bundles/adminStyles.css' />
          */ }
        </head>
        <body>
          <div id='main'></div>
          {this.props.children}
        </body>
      </html>
    )
  }
}
