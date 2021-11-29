import React, { Component } from 'react'
import Helmet from 'react-helmet'

class HelmetComponent extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{'AR Design Studio'}</title>
                    <meta name={'description'} content={'AR Design Studio'} />
                    <meta name={'robots'} content={'index, follow'} />
                    <meta charset={'utf-8'} />
                    <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
                    <meta name={'theme-color'} content={'#000000'} />
                    <meta name={'keywords'} content={'Alfonzo, Design'} />
                </Helmet>
            </div>
        )
    }
}

export default HelmetComponent
