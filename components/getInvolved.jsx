/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import styles from '../styles/component.styles/getInvolved.module.scss'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function GetInvolved() {
  return(
    <section className='section_margin mt-md-5' >
    <div className={['container-fluid', styles.top_section]}>
        <div>
            <h2 className={ styles.homepage_title } >How you can get <em>Involved</em></h2>
        </div>

        <div className="m-t-c">
            <div className="row">
                <div className="col-md-6">
                    <div className={ styles.labs_card } >
                      <div>
                        <img className="img-fluid" src="./drone-lab-icon.png" alt="" />
                        <h3>Drone and Counter-Drone Lab</h3>
                        <p>A Virtual knowledge platform that will raise critical issues to promote the institutionalization
                            of drone and counter drone best practices within the African Sub-region. </p>

                        <Nav.Item className={ styles.button_comp } >
                            <Button variant="outline-primary" >Learn More</Button>
                        </Nav.Item>
                      </div>
                    </div>

                </div>

                <div className="col-md-6">
                    <div className={ styles.labs_card } >
                      <div>
                        <img className="img-fluid" src="/syber-lab-icon.png" alt="" />
                        <h3>Cyber Security Lab</h3>
                        <p>Lorem ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                            dorlo Lorem i psum dorlo Lorem ipsum dorlo Lorem
                            ipsum dorlo Lorem ipsum dorlo Lorem ipsum
                            dorlo Lorem i psum dorlo Lorem ipsum dorlo </p>
                        {/* <a >
                            <button className="btn-sw btn-sw-primary">Join</button>
                        </a> */}
                        <Nav.Item className={ styles.button_comp }>
                            <Button  variant="outline-primary">Learn More</Button>
                        </Nav.Item>
                      </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

</section>
  )
}