import React, { Component } from 'react'

class Section extends Component{
    render() {

        // Orientierungs Parameter Foto links(default) || Foto rechts
        // sitehalf = 'block'
        const sitehalf = this.props.sitehalf
        const containerClass1 = 'site-half'+' '+sitehalf
        // imgBg = 'right'
        const imgBg = this.props.imgBg
        const containerClass2 = 'img-bg-1'+' '+imgBg
        // autoLayout = ml || mr
        const autoLayout = this.props.autoLayout || 'ml'
        const containerClass3 = 'col-lg-5 '+autoLayout+'-lg-auto py-5'

        // Foto Übergabe
        const picture = this.props.picture
        const bgImage = { backgroundImage: "url(" + picture +")" }



        return(

        <div className={containerClass1}>
            <div className={containerClass2} style={bgImage} data-aos="fade"></div>
                <div className="container">
                    <div className="row no-gutters align-items-stretch">
                        <div className={containerClass3}>
        <span className="caption d-block mb-2 font-secondary font-weight-bold">{this.props.caption || 'Caption'}</span>
                            <h2 className="site-section-heading text-uppercase font-secondary mb-5"> {this.props.header || 'Header'} </h2>
                            <p> {this.props.p1 || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid eius facilis voluptatem eligendi magnam accusamus vel commodi asperiores sint rem reprehenderit nobis nesciunt veniam qui fugit doloremque numquam quod."} </p>

                            <p> {this.props.p2 || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora distinctio ipsam nesciunt recusandae repellendus asperiores amet.'} </p>  
                        </div>
                    </div>
            </div>
        </div>
            
        )
    }
}

export default Section