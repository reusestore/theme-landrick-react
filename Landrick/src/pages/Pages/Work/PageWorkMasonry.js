import React, { Component } from 'react';
import { Container, Row, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Light box
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Images
import work13 from "../../../assets/images/work/13.jpg";
import work21 from "../../../assets/images/work/21.jpg";
import work14 from "../../../assets/images/work/14.jpg";
import work22 from "../../../assets/images/work/22.jpg";
import work16 from "../../../assets/images/work/16.jpg";
import work23 from "../../../assets/images/work/23.jpg";
import work15 from "../../../assets/images/work/15.jpg";
import work17 from "../../../assets/images/work/17.jpg";
import work24 from "../../../assets/images/work/24.jpg";
import work18 from "../../../assets/images/work/18.jpg";
import work19 from "../../../assets/images/work/19.jpg";

const images = [
    work13,work21,work14,work22,work16,work23,work15,work17,work24,work18,work19
];

let brakePoints = [350, 500, 750];
class PageWorkMasonry extends Component {
    constructor(props) {
        super(props);
        this.state={
            pathItems : [
                //id must required
                { id : 1, name : "Landrick", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Work", link : "#" },
                { id : 4, name : "Masonry" },
            ],
            works : [
                { image : work13, title : "Iphone mockup", subtitle : "Branding", category : "Branding" },
                { image : work21, title : "Mockup Collection", subtitle : "Mockup", category : "Designing" },
                { image : work14, title : "Abstract images", subtitle : "Abstract", category : "Photography" },
                { image : work22, title : "Yellow bg with Books", subtitle : "Company V-card", category : "Development" },
                { image : work16, title : "Company V-card", subtitle : "V-card", category : "Branding" },
                { image : work23, title : "Mockup box with paints", subtitle : "Photography", category : "Branding" },
                { image : work15, title : "Coffee cup", subtitle : "Cups", category : "Designing" },
                { image : work17, title : "Pen and article", subtitle : "Article", category : "Development" },
                { image : work24, title : "White mockup box", subtitle : "Color", category : "Photography" },
                { image : work18, title : "Logo Vectors", subtitle : "Logos", category : "Photography" },
                { image : work19, title : "Black and white T-shirt", subtitle : "Clothes", category : "Branding" },
            ],
            
            displayCategory: "All",
            photoIndex: 0,
            isOpen: false,
        }
        this.setCategory.bind(this);
    }

    setCategory(category) {
        this.setState({
          displayCategory: category
        });
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var topnav = document.getElementById('topnav');
        if (top > 80 && topnav) {
            topnav.classList.add('nav-sticky');
        }
        else if(topnav) {
            topnav.classList.remove('nav-sticky');
        }
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb title="Work Masonry" pathItems = {this.state.pathItems} />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
            <Container>
                <Row>
                    <ul className="col container-filter list-unstyled categories-filter text-center mb-0" id="filter">
                        <li className="list-inline-item mr-1"><Link  to="#" onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" }>All</Link></li>
                        <li className="list-inline-item mr-1"><Link to="#" onClick={() => this.setCategory("Branding")} className={this.state.displayCategory === "Branding" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" } >Branding</Link></li>
                        <li className="list-inline-item mr-1"><Link to="#" onClick={() => this.setCategory("Designing")} className={this.state.displayCategory === "Designing" ? "categories border d-block text-dark rounded active" :"categories border d-block text-dark rounded"  }>Designing</Link></li>
                        <li className="list-inline-item mr-1"><Link  to="#" onClick={() => this.setCategory("Photography")} className={this.state.displayCategory === "Photography" ?  "categories border d-block text-dark rounded active" :  "categories border d-block text-dark rounded" } >Photography</Link></li>
                        <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Development")} className={this.state.displayCategory === "Development" ?"categories border d-block text-dark rounded active"  : "categories border d-block text-dark rounded" } >Development</Link></li>
                    </ul>
                </Row>

                <Row className="projects-wrapper mt-4 pt-2">
                        
                <div className="masonry-container">
					<Masonry brakePoints={brakePoints}>
                        { this.state.works
                                .filter(
                                    ({ category }) =>
                                    this.state.displayCategory === category || this.state.displayCategory === "All"
                                )
                                .map(({ title, image, subtitle }, key) => (
                                    
                                        <Card key={key} className="tile border-0 work-container work-modern position-relative d-block overflow-hidden rounded-0">
                                            <CardBody className="p-0">
                                                <img src={image} className="img-fluid" alt="work" />
                                                <div className="overlay-work bg-dark"></div>
                                                <div className="content">
                                                    <h5 className="mb-0"><Link to="page-work-detail" className="text-white title">{title}</Link></h5>
                                                    <h6 className="text-light tag mb-0">{subtitle}</h6>
                                                </div>
                                                <div className="icons text-center">
                                                    <Link to="#"  onClick={(event) => {event.preventDefault(); this.setState({ isOpen: true, photoIndex : key })}} className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"><i><FeatherIcon icon="camera" className="fea icon-sm" /></i></Link>
                                                </div>
                                            </CardBody>
                                        </Card>
                        ))}
                        </Masonry>
                    </div>
                    {/* lightbox for portfolio images */}
                    { isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        imagePadding={100}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                        }
                                    />
                    ) }
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}
 
class Masonry extends React.Component{
      constructor(props){
          super(props);
          this.state = {columns: 1};
          this.onResize = this.onResize.bind(this);
      }
      componentDidMount(){
          this.onResize();
          window.addEventListener('resize', this.onResize)	
      }

      componentWillUnmount(){
        window.removeEventListener('resize', this.onResize)	
     }
      
      getColumns(w){
          return this.props.brakePoints.reduceRight( (p, c, i) => {
              return c < w ? p : i;
          }, this.props.brakePoints.length) + 1;
      }
      
      onResize(){
          const columns = this.getColumns(this.refs.Masonry.offsetWidth);
          if(columns !== this.state.columns){
              this.setState({columns: columns});	
          }
          
      }
      
      mapChildren(){
          let col = [];
          const numC = this.state.columns;
          for(let i = 0; i < numC; i++){
              col.push([]);
          }
          return this.props.children.reduce((p,c,i) => {
              p[i%numC].push(c);
              return p;
          }, col);
      }
      
      render(){
          return (
              <div className="masonry" ref="Masonry">
                  {this.mapChildren().map((col, ci) => {
                      return (
                          <div className="column" key={ci} >
                              {col.map((child, i) => {
                                  return <div key={i} >{child}</div>
                              })}
                          </div>
                      )
                  })}
              </div>
          )
      }
  }
  

export default PageWorkMasonry;