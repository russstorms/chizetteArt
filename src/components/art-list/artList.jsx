import React, {useEffect} from 'react'
import Art from '../art/art'

import 'animate.css/animate.min.css'
import './styles/artList.css'

export default function ArtList({ artList, editArt, deleteArt, token, filteredTerm }) {

  // Scroll to the top to animate art
  useEffect(() => {
    if(filteredTerm !== '') {
      document.getElementById('artList').scrollIntoView({ behavior: "smooth" }) 
    }
  }, [filteredTerm])

  // Differing CSS classes to unalign CSS Grid columns
  const alterColumns = () => {
    let column = ''
    return artList.map(
      (art, idx) => {
        switch (column) {
          case 'first':
            column = 'second'
            break
          case 'second':
            column = 'third'
            break
          default:
            column = 'first'
            break
        }
        return (
          <div
            key={idx}
            className={column}
          >
            <Art
              id={art.id}
              art={art}
              modalId={idx}
              artList={artList}
              editArt={editArt}
              deleteArt={deleteArt}
              token={token}
            />
          </div>
        )
      }
    )
  }

  return (
    <div className="Artlist" id="artList">
      <div className="wrapper">
        { alterColumns() }
      </div>
    </div>
  )
}

  // let splashArt = splashList.splice(0, 3)
  // let splashJewelry = splashList.splice(0, 3)
  // let splashPhoto = splashList.splice(0, 3)

  // if (filterTerm === '') {
  //   return [splashArt.map(
  //     (art, idx) => {
  //       switch (column) {
  //         case 'first':
  //           column = 'second'
  //           break
  //         case 'second':
  //           column = 'third'
  //           break
  //         default:
  //           column = 'first'
  //           break
  //       }
  //         return <div key={idx} className={column}>
  //           <ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
  //             <div className="art">
  //               <span className="artA">A</span>
  //               <span className="artR">r</span>
  //               <span className="artT">t</span>
  //             </div>
  //           </ScrollAnimation>
  //           <Art
  //             art={art}
  //             id={idx}
  //             artPosters={splashArt}
  //             filterTerm={this.props.filterTerm}
  //           />
  //           <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
  //             <div onClick={this.props.splashFilter} className="viewArt">
  //               <span className="view" data-medium="Art">
  //                 View Art
  //                 <span className="arrowIcons" data-medium="Art">
  //                   <i className="small material-icons icon viewAllIcons">chevron_right</i>
  //                 </span>
  //               </span>
  //             </div>
  //           </ScrollAnimation>
  //         </div>
  //     }
  //   ),
  //   // Latest 3 Jewelry
  //   splashJewelry.map(
  //     (art, idx) => {
  //       switch (column) {
  //         case 'first':
  //           column = 'second'
  //           break
  //         case 'second':
  //           column = 'third'
  //           break
  //         default:
  //           column = 'first'
  //           break
  //       }
  //         return <div key={idx} className={column}>
  //           <ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
  //             <div className="jewelry">
  //               <span className="jewelryJ">J</span>
  //               <span className="jewelryE">e</span>
  //               <span className="jewelryW">w</span>
  //               <span className="jewelryE2">e</span>
  //               <span className="jewelryL">l</span>
  //               <span className="jewelryR">r</span>
  //               <span className="jewelryY">y</span>
  //             </div>
  //           </ScrollAnimation>
  //           <Art art={art} id={idx} artPosters={splashArt} filterTerm={this.props.filterTerm} />
  //           <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
  //             <div onClick={this.props.splashFilter} className="viewJewelry">
  //               <span className="view" data-medium="Jewelry">
  //                 View Jewelry
  //                 <span className="arrowIcons" data-medium="Jewelry">
  //                   <i className="small material-icons icon viewAllIcons">chevron_right</i>
  //                 </span>
  //               </span>
  //             </div>
  //           </ScrollAnimation>
  //         </div>
  //     }
  //   ),
  //   // Latest 3 Photos
  //   splashPhoto.map(
  //     (art, idx) => {
  //       switch (column) {
  //         case 'first':
  //           column = 'second'
  //           break
  //         case 'second':
  //           column = 'third'
  //           break
  //         default:
  //           column = 'first'
  //           break
  //       }
  //         return <div key={idx} className={column}>
  //           <ScrollAnimation animateIn="zoomInUp" animateOut="fadeOut">
  //             <div className="photography">
  //               <span className="photographyP">P</span>
  //               <span className="photographyH">h</span>
  //               <span className="photographyO">o</span>
  //               <span className="photographyT">t</span>
  //               <span className="photographyO2">o</span>
  //               <span className="photographyS">s</span>
  //             </div>
  //           </ScrollAnimation>
  //           <Art art={art} id={idx} artPosters={splashArt} filterTerm={this.props.filterTerm} />
  //           <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
  //             <div onClick={this.props.splashFilter} className="viewPhotography">
  //               <span className="view" data-medium="Photos">
  //                 View Photos
  //                 <span className="arrowIcons" data-medium="Photos">
  //                   <i className="small material-icons icon viewAllIcons">chevron_right</i>
  //                 </span>
  //               </span>
  //             </div>
  //           </ScrollAnimation>
  //         </div>
  //     }
  //   )
  //   ]
  // }
