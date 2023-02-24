import React from 'react';
import { Card, CardImg } from 'reactstrap';

const AboutUs = () => {
  return (
    <section style={{height:"150vh",paddingTop:"30px",background: "#F5F5F5"}}>
        <div className='container' style={{background:"#fff",height:"150vh",padding:"20px"}}>
            <div className='row'>
                <div className='col-12'>
                    <h2 style={{color:"#444444", borderBottom:"1px solid #CCCCCC"}}>
                        Some Words About Us
                    </h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <p>
                        Kurukshetra, Haryana based company offering their house lifting 
                        services all over India Since 1973. House lifting is done by Late 
                        Aatma Ram Sisodia first time in India in 1973 and now Mr. 
                        Vikas Sisodia (Grandson of Mr. Sisodia) handling the house lifting work. 
                    </p>
                    <p>
                        Our master teams are continually dealing with planning new and 
                        creative practical systems to apply to our home raising and lifting 
                        strategies. We professionally introduce a progression of steel basic 
                        support bars to precalculated positions at the establishment level to 
                        effectively support any load. Our rigging crew can then support your 
                        structure, empowering us to lift your home utilizing our Unified 
                        Jacking System. The workers at the Shri Ram Building Lifting Company, 
                        house raising and house lifting division are specialists at foundation 
                        stabilization and remediation. Having been in the construction 
                        business for more than 42 years, we can deal with any foundation issue. Whether the issue is bowing/splitter dividers, water harm/absence of waste, crumbling, settlement brought about by poor soil conditions, or falling flat establishment quality/support, our special methods always supply a permanent solution. We are authorized Helical Pile installers, which are cost effective.
                    </p>
                </div>
                <div className='col-md-6'>
                        <Card>
                            <CardImg 
                                src='asset/example3.jpg' 
                                alt='Image'
                                style={{
                                    width:"100%",
                                    height:"440px",
                                    padding:"7px",
                                    border:"1px solid #DDDDDD"
                                }} 
                            />
                        </Card>
                </div>
            </div>

            <div style={{width:"100%", marginTop:"20px"}}>
                <h2 style={{color:"#444444",borderBottom:"1px solid #CCCCCC"}}>
                    About Our Technicians and Workers
                </h2>
                <p>
                    Our master teams are continually dealing with planning new and 
                    creative practical systems to apply to our home raising and lifting 
                    strategies. We professionally introduce a progression of steel basic 
                    support bars to precalculated positions at the establishment level to 
                    effectively support any load. Our rigging crew can then support your 
                    structure, empowering us to lift your home utilizing our Unified 
                    Jacking System. The workers at the Shri Ram Building Lifting Company, 
                    house raising and house lifting division are specialists at foundation 
                    stabilization and remediation. Having been in the construction 
                    business for more than 42 years, we can deal with any foundation issue. Whether the issue is bowing/splitter dividers, water harm/absence of waste, crumbling, settlement brought about by poor soil conditions, or falling flat establishment quality/support, our special methods always supply a permanent solution. We are authorized Helical Pile installers, which are cost effective.
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;
