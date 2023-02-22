import React from 'react'

class Header extends React.Component {
  render() {
    return <header className="header">{this.props.title}</header>
  }
}

// const Header = () => { //можно функц.комп писать стрелочными
//   return <header>Шляпка сайта</header>
// }

export default Header
